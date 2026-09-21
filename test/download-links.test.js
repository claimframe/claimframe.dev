const assert = require("node:assert/strict");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const vm = require("node:vm");
const { execFile } = require("node:child_process");
const run = require("node:util").promisify(execFile);
const { test, after, before } = require("node:test");

const root = path.resolve(__dirname, "..");
const config = fs.readFileSync(path.join(root, "site/config.toml"), "utf8");
const releaseVersion = config.match(/^\s*releaseVersion\s*=\s*"([^"]+)"/m)?.[1];
const downloadBase = `https://github.com/claimframe/claimframe-downloads/releases/download/v${releaseVersion}`;
const temporary = fs.mkdtempSync(path.join(os.tmpdir(), "claimframe-site-"));
after(() => fs.rmSync(temporary, { recursive: true, force: true }));

async function buildMode(pending) {
  const mode = pending ? "pending" : "ready";
  const override = path.join(temporary, `${mode}.toml`);
  const destination = path.join(temporary, mode);
  fs.writeFileSync(override, `[params]\nreleasePending = ${pending}\n`);
  await run("hugo", ["--source", "site", "--config", `${path.join(root, "site/config.toml")},${override}`, "--destination", destination], { cwd: root });
  return fs.readFileSync(path.join(destination, "index.html"), "utf8");
}
let ready, pending;
before(async () => { ready = await buildMode(false); pending = await buildMode(true); });

const targets = [
  ["macos-arm64", "mac", [`Claimframe-${releaseVersion}-macos-arm64.dmg`], `claimframe-mcp-${releaseVersion}-macos-aarch64`],
  ["macos-x64", "mac", [`Claimframe-${releaseVersion}-macos-x64.dmg`], `claimframe-mcp-${releaseVersion}-macos-x86_64`],
  ["windows-x64", "windows", [`Claimframe-${releaseVersion}-windows-x64.msi`], `claimframe-mcp-${releaseVersion}-windows-x86_64.exe`],
  ["linux-x86_64", "linux", [`Claimframe-${releaseVersion}-linux-amd64.deb`, `Claimframe-${releaseVersion}-linux-x86_64.rpm`], `claimframe-mcp-${releaseVersion}-linux-x86_64`],
];

function links(html) {
  return [...html.matchAll(/href="([^"]*\/releases\/download\/v[^/]+\/[^" ]+)"/g)].map((match) => match[1]).sort();
}

test("release-ready downloads contain the exact nine versioned assets in four platform boxes", () => {
  assert.match(releaseVersion, /^\d+\.\d+\.\d+$/);
  assert.ok(ready.includes(`data-release-version="${releaseVersion}"`));
  assert.equal((ready.match(/class="download-platform-box"/g) || []).length, 4);
  assert.deepEqual(links(ready), targets.flatMap(([, , desktop, mcp]) => [...desktop, mcp].map((asset) => `${downloadBase}/${asset}`)).sort());
  for (const [target, platform, desktop, mcp] of targets) {
    const box = ready.match(new RegExp(`<article class="download-platform-box" data-platform="${platform}" data-download-target="${target}"[\\s\\S]*?<\\/article>`))?.[0];
    assert.ok(box, `missing box for ${target}`);
    for (const asset of [...desktop, mcp]) assert.ok(box.includes(`href="${downloadBase}/${asset}"`), asset);
    assert.equal((box.match(/class="download-option desktop-download"/g) || []).length, desktop.length);
    assert.equal((box.match(/class="download-option mcp-download"/g) || []).length, 1);
  }
  assert.ok(ready.includes("Debian / Ubuntu"));
  assert.ok(ready.includes("Fedora / RHEL family"));
  assert.ok(!ready.includes("AppImage"));
  assert.ok(!ready.includes("Pending release"));
});

test("pending preview withholds every unpublished 0.4.0 artifact", () => {
  assert.deepEqual(links(pending), []);
  assert.ok(!pending.includes("Pending release"));
  assert.ok(!pending.includes("AppImage"));

});

test("platform detection recommends a family without selecting a Linux package format", () => {
  const script = ready.match(/<script>\s*\(\(\) => \{[\s\S]*?<\/script>/)?.[0].replace(/<\/?script>/g, "");
  assert.ok(script);
  for (const [platform, family] of [["Linux x86_64", "linux"], ["MacIntel", "mac"], ["Win32", "windows"], ["unknown", ""]]) {
    const recommended = [];
    vm.runInNewContext(script, {
      navigator: { platform },
      document: { querySelectorAll: (selector) => {
        assert.equal(selector, `.download-platform-box[data-platform="${family}"]`);
        return [{ classList: { add: (name) => recommended.push(name) } }];
      } },
    });
    assert.deepEqual(recommended, family ? ["recommended"] : []);
  }
});

test("downloads retain installation guidance and the public releases fallback", () => {
  for (const html of [pending, ready]) {
    assert.ok(html.includes('href="/guide/how-to/install-linux/"'));
    assert.ok(html.includes('href="https://github.com/claimframe/claimframe-downloads/releases">view all public releases</a>'));
    assert.ok(!/Claimframe-(?:macos|windows|linux)-/.test(html));
    assert.ok(!html.includes("/releases/latest/download/"));
  }
});

test("release-day guides remain discoverable without internal publication notices", () => {
  for (const [mode, html] of [["pending", pending], ["ready", ready]]) {
    const notesPath = "/releases/0.4.0/";
    assert.ok(html.includes(`href="${notesPath}"`));
    const install = fs.readFileSync(path.join(temporary, mode, "guide/how-to/install-linux/index.html"), "utf8");
    assert.ok(install.includes(`href="${notesPath}"`));
    for (const page of ["releases/0.4.0", "guide/reference/capture-syntax", "guide/how-to/share-vault", "guide/how-to/install-linux"]) {
      const guide = fs.readFileSync(path.join(temporary, mode, page, "index.html"), "utf8");
      assert.ok(!/Upcoming release|has not been published|not yet part of the published download|coordinated release candidate/.test(guide), page);
    }
  }
});
