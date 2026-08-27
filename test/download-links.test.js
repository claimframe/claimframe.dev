const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const root = path.resolve(__dirname, "..");
const config = fs.readFileSync(path.join(root, "site/config.toml"), "utf8");
const homepage = fs.readFileSync(path.join(root, "site/public/index.html"), "utf8");
const releaseVersion = config.match(/^\s*releaseVersion\s*=\s*"([^"]+)"/m)?.[1];
const downloadBase = "https://github.com/claimframe/claimframe-downloads/releases/latest/download";

const assets = [
  ["mac", `Claimframe-${releaseVersion}-macos-arm64.dmg`],
  ["mac", `Claimframe-${releaseVersion}-macos-x64.dmg`],
  ["windows", `Claimframe-${releaseVersion}-windows-x64.msi`],
  ["linux", `Claimframe-${releaseVersion}-linux-x86_64.AppImage`],
];

const mcpAssets = [
  ["mac", `claimframe-mcp-${releaseVersion}-macos-aarch64`],
  ["mac", `claimframe-mcp-${releaseVersion}-macos-x86_64`],
  ["windows", `claimframe-mcp-${releaseVersion}-windows-x86_64.exe`],
  ["linux", `claimframe-mcp-${releaseVersion}-linux-x86_64`],
];

test("the release version is configured once and shown on the download section", () => {
  assert.match(releaseVersion, /^\d+\.\d+\.\d+$/);
  assert.match(homepage, new RegExp(`data-release-version="${releaseVersion}"`));
  assert.match(homepage, new RegExp(`Choose a Claimframe v${releaseVersion} installer`));
});

test("each platform and architecture maps to its versioned release asset", () => {
  for (const [platform, asset] of assets) {
    assert.match(
      homepage,
      new RegExp(`data-platform="${platform}" href="${downloadBase}/${asset.replace(".", "\\.")}"`),
    );
  }
  assert.equal((homepage.match(new RegExp(`v${releaseVersion} ·`, "g")) || []).length, 8);
});

test("each platform and architecture offers the standalone MCP executable", () => {
  for (const [platform, asset] of mcpAssets) {
    assert.match(
      homepage,
      new RegExp(`class="download-option mcp-download" data-platform="${platform}" href="${downloadBase}/${asset.replace(".", "\\.")}"`),
    );
  }
  assert.match(homepage, /No Python runtime or running desktop app is required/);
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
