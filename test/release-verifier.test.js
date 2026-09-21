const assert = require("node:assert/strict");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const { spawnSync } = require("node:child_process");
const test = require("node:test");

const assets = [
  "Claimframe-1.2.3-macos-arm64.dmg", "Claimframe-1.2.3-macos-x64.dmg",
  "Claimframe-1.2.3-windows-x64.msi", "Claimframe-1.2.3-linux-amd64.deb",
  "Claimframe-1.2.3-linux-x86_64.rpm", "claimframe-mcp-1.2.3-macos-aarch64",
  "claimframe-mcp-1.2.3-macos-x86_64", "claimframe-mcp-1.2.3-windows-x86_64.exe",
  "claimframe-mcp-1.2.3-linux-x86_64",
];
const release = { tag_name: "v1.2.3", draft: false, prerelease: false, assets: assets.map((name) => ({ name })) };

test("release verifier accepts the native contract and rejects incomplete or stale releases", async () => {
  const { validateRelease } = await import("../scripts/verify-release-assets.mjs");
  assert.doesNotThrow(() => validateRelease(release, "1.2.3"));
  for (const missing of [".deb", ".rpm"]) {
    assert.throws(() => validateRelease({ ...release, assets: release.assets.filter(({ name }) => !name.endsWith(missing)) }, "1.2.3"), /exact nine/);
  }
  assert.throws(() => validateRelease({ ...release, assets: [...release.assets, { name: "Claimframe-1.2.3-linux-x86_64.AppImage" }] }, "1.2.3"), /Unexpected:.*AppImage/);
  for (const change of [{ tag_name: "v1.2.2" }, { draft: true }, { prerelease: true }]) {
    assert.throws(() => validateRelease({ ...release, ...change }, "1.2.3"), /Expected public release/);
  }
});

test("pending release gate stops publication before a network request", () => {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), "claimframe-release-gate-"));
  try {
    fs.mkdirSync(path.join(directory, "site"));
    fs.writeFileSync(path.join(directory, "site/config.toml"), '[params]\nreleaseVersion = "1.2.3"\nreleasePending = true\n');
    const script = path.resolve(__dirname, "../scripts/verify-release-assets.mjs");
    const result = spawnSync(process.execPath, [script], { cwd: directory, encoding: "utf8" });
    assert.equal(result.status, 1);
    assert.match(result.stderr, /Release is pending/);
  } finally {
    fs.rmSync(directory, { recursive: true, force: true });
  }
});
