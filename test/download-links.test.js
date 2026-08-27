const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const root = path.resolve(__dirname, "..");
const config = fs.readFileSync(path.join(root, "site/config.toml"), "utf8");
const homepage = fs.readFileSync(path.join(root, "site/public/index.html"), "utf8");
const releaseVersion = config.match(/^\s*releaseVersion\s*=\s*"([^"]+)"/m)?.[1];
const downloadBase = "https://github.com/claimframe/claimframe-downloads/releases/latest/download";

const targets = [
  ["macos-arm64", "mac", `Claimframe-${releaseVersion}-macos-arm64.dmg`, `claimframe-mcp-${releaseVersion}-macos-aarch64`],
  ["macos-x64", "mac", `Claimframe-${releaseVersion}-macos-x64.dmg`, `claimframe-mcp-${releaseVersion}-macos-x86_64`],
  ["windows-x64", "windows", `Claimframe-${releaseVersion}-windows-x64.msi`, `claimframe-mcp-${releaseVersion}-windows-x86_64.exe`],
  ["linux-x86_64", "linux", `Claimframe-${releaseVersion}-linux-x86_64.AppImage`, `claimframe-mcp-${releaseVersion}-linux-x86_64`],
];

test("the release version is configured once and shown on the download section", () => {
  assert.match(releaseVersion, /^\d+\.\d+\.\d+$/);
  assert.match(homepage, new RegExp(`data-release-version="${releaseVersion}"`));
  assert.match(homepage, new RegExp(`Claimframe v${releaseVersion} desktop app and standalone MCP server`));
});

test("the download section has four platform boxes with two paired links each", () => {
  assert.equal((homepage.match(/class="download-platform-box"/g) || []).length, 4);

  for (const [target, platform, desktopAsset, mcpAsset] of targets) {
    const box = homepage.match(
      new RegExp(`<article class="download-platform-box" data-platform="${platform}" data-download-target="${target}"[\\s\\S]*?<\\/article>`),
    )?.[0];

    assert.ok(box, `missing download box for ${target}`);
    assert.match(box, new RegExp(`class="download-option desktop-download" href="${downloadBase}/${desktopAsset.replace(".", "\\.")}"`));
    assert.match(box, new RegExp(`class="download-option mcp-download" href="${downloadBase}/${mcpAsset.replace(".", "\\.")}"`));
    assert.match(box, /<strong>Desktop app<\/strong>/);
    assert.match(box, /<strong>Standalone MCP server<\/strong>/);
    assert.equal((box.match(/class="download-option /g) || []).length, 2);
  }

  assert.equal((homepage.match(new RegExp(`v${releaseVersion} ·`, "g")) || []).length, 8);
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
