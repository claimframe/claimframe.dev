import { readFile } from "node:fs/promises";

const config = await readFile("site/config.toml", "utf8");
const version = config.match(/^\s*releaseVersion\s*=\s*"([^"]+)"/m)?.[1];

if (!version) {
  throw new Error("Could not read params.releaseVersion from site/config.toml");
}

const expected = [
  `Claimframe-${version}-macos-arm64.dmg`,
  `Claimframe-${version}-macos-x64.dmg`,
  `Claimframe-${version}-windows-x64.msi`,
  `Claimframe-${version}-linux-x86_64.AppImage`,
  `claimframe-mcp-${version}-macos-aarch64`,
  `claimframe-mcp-${version}-macos-x86_64`,
  `claimframe-mcp-${version}-windows-x86_64.exe`,
  `claimframe-mcp-${version}-linux-x86_64`,
].sort();

const headers = {
  Accept: "application/vnd.github+json",
  "User-Agent": "claimframe.dev-release-verifier",
  "X-GitHub-Api-Version": "2022-11-28",
};
if (process.env.GITHUB_TOKEN) {
  headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
}

const response = await fetch(
  "https://api.github.com/repos/claimframe/claimframe-downloads/releases/latest",
  { headers },
);

if (!response.ok) {
  throw new Error(`Could not read the latest public Claimframe release: HTTP ${response.status}`);
}

const release = await response.json();
const expectedTag = `v${version}`;
if (release.tag_name !== expectedTag || release.draft || release.prerelease) {
  throw new Error(
    `Expected latest public release ${expectedTag}; received ${release.tag_name ?? "no tag"}`,
  );
}

const actual = release.assets.map(({ name }) => name).sort();
if (JSON.stringify(actual) !== JSON.stringify(expected)) {
  const missing = expected.filter((name) => !actual.includes(name));
  const unexpected = actual.filter((name) => !expected.includes(name));
  throw new Error(
    [
      `Public release ${expectedTag} does not contain the exact eight download assets.`,
      missing.length ? `Missing: ${missing.join(", ")}` : "",
      unexpected.length ? `Unexpected: ${unexpected.join(", ")}` : "",
    ]
      .filter(Boolean)
      .join("\n"),
  );
}

console.log(`Verified ${expectedTag}: ${actual.length} public desktop and MCP assets`);
