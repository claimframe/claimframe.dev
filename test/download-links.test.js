const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const root = path.resolve(__dirname, "..");
const config = fs.readFileSync(path.join(root, "site/config.toml"), "utf8");
const homepage = fs.readFileSync(path.join(root, "site/public/index.html"), "utf8");
const releaseVersion = config.match(/^\s*releaseVersion\s*=\s*"([^"]+)"/m)?.[1];
const downloadBase = `https://github.com/claimframe/claimframe-downloads/releases/download/v${releaseVersion}`;

const targets = [
  ["macos-arm64", "mac", `Claimframe-${releaseVersion}-macos-arm64.dmg`, `claimframe-mcp-${releaseVersion}-macos-aarch64`],
  ["windows-x64", "windows", `Claimframe-${releaseVersion}-windows-x64.msi`, `claimframe-mcp-${releaseVersion}-windows-x86_64.exe`],
  ["linux-x86_64", "linux", `Claimframe-${releaseVersion}-linux-amd64.deb`, `Claimframe-${releaseVersion}-linux-x86_64.rpm`],
];

test("the homepage hero uses the CLA-128 screenshot", () => {
  assert.match(homepage, /<img src="\/assets\/claimframe-workbench-cla128\.png"/);
  assert.ok(fs.existsSync(path.join(root, "site/public/assets/claimframe-workbench-cla128.png")));
});

test("the release version is configured once and shown on the download section", () => {
  assert.match(releaseVersion, /^\d+\.\d+\.\d+$/);
  assert.match(homepage, new RegExp(`data-release-version="${releaseVersion}"`));
  assert.match(homepage, new RegExp(`Claimframe v${releaseVersion} desktop app and MCP server`));
});

test("the download section has three platform boxes with two paired links each", () => {
  assert.equal((homepage.match(/class="download-platform-box"/g) || []).length, 3);

  for (const [target, platform, desktopAsset, mcpAsset] of targets) {
    const box = homepage.match(
      new RegExp(`<article class="download-platform-box" data-platform="${platform}" data-download-target="${target}"[\\s\\S]*?<\\/article>`),
    )?.[0];

    assert.ok(box, `missing download box for ${target}`);
    assert.match(box, new RegExp(`class="download-option desktop-download" href="${downloadBase}/${desktopAsset.replace(".", "\\.")}"`));
    const secondClass = platform === "linux" ? "desktop-download" : "mcp-download";
    assert.match(box, new RegExp(`class="download-option ${secondClass}" href="${downloadBase}/${mcpAsset.replace(".", "\\.")}"`));
    if (platform === "linux") {
      assert.match(box, /<strong>DEB package<\/strong>/);
      assert.match(box, /<strong>RPM package<\/strong>/);
      assert.match(box, /\/usr\/bin\/claimframe-mcp/);
    } else {
      assert.match(box, /<strong>Desktop app<\/strong>/);
      assert.match(box, /<strong>Standalone MCP server<\/strong>/);
    }
    assert.equal((box.match(/class="download-option /g) || []).length, 2);
  }

  assert.equal((homepage.match(new RegExp(`v${releaseVersion} ·`, "g")) || []).length, 6);
});

test("platform recommendation styling applies to boxes", () => {
  assert.match(homepage, /\.download-platform-box\[data-platform="\$\{family\}"\]/);
});

test("the download section offers a fallback to the public releases page", () => {
  assert.match(
    homepage,
    /If a download is temporarily unavailable, <a href="https:\/\/github\.com\/claimframe\/claimframe-downloads\/releases">view all public releases<\/a>/,
  );
});

test("generated output contains no old unversioned asset links", () => {
  assert.doesNotMatch(homepage, /Claimframe-(?:macos|windows|linux)-/);
});

test("downloads remain pinned when a newer release is published", () => {
  assert.ok(!homepage.includes("/releases/latest/download/"));
});

 test("current downloads retire Intel, AppImage and standalone Linux MCP", () => {
  assert.doesNotMatch(homepage, /href="[^"]*(?:macos-x64|macos-x86_64|AppImage|claimframe-mcp-[^"]*-linux-x86_64)/);
  assert.match(homepage, /href="\/releases\/0\.4\.1\/"/);
});
