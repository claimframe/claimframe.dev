# claimframe.dev

Hugo source for [claimframe.dev](https://claimframe.dev), the product page for Claimframe.

Claimframe is a free, open-source, local-first assertion memory workbench for architects, consultants, and technical advisors. It stores sourced assertions, preserves disagreement, and exposes structured context to AI agents through a local MCP server.

## Build

```bash
npm run build
```

The build writes the static site to `site/public`.

## Deployment

Netlify deploys the site from this private repository:

- Netlify runs `npm run build`.
- Hugo builds into `site/public`.
- Netlify publishes `site/public` at `claimframe.dev`.

## Important Links

- Canonical site: <https://claimframe.dev>
- Download alpha: <https://claimframe.dev/#download>
- Public release assets: <https://github.com/claimframe/claimframe-downloads/releases>
- GitHub repository: <https://github.com/claimframe/claimframe>
- MCP docs: <https://github.com/claimframe/claimframe/blob/main/docs/mcp.md>
- Product spec: <https://github.com/claimframe/claimframe/blob/main/docs/product-spec.md>
- Agent guide: <https://claimframe.dev/llms.txt>
- Full agent context: <https://claimframe.dev/llms-full.txt>

## Public app downloads

The application source repository is private, so its GitHub Releases and release
assets require repository read access. Public installers are published as release
assets in the dedicated public
[`claimframe/claimframe-downloads`](https://github.com/claimframe/claimframe-downloads)
repository instead. For the current release version configured in
`site/config.toml`, the homepage derives links to these assets on the latest release:

- `Claimframe-<version>-macos-arm64.dmg`
- `Claimframe-<version>-macos-x64.dmg`
- `Claimframe-<version>-windows-x64.msi`
- `Claimframe-<version>-linux-x86_64.AppImage`
- `claimframe-mcp-<version>-macos-aarch64`
- `claimframe-mcp-<version>-macos-x86_64`
- `claimframe-mcp-<version>-windows-x86_64.exe`
- `claimframe-mcp-<version>-linux-x86_64`

The private application's release workflow must copy and rename each completed
installer and MCP executable into a matching release in
`claimframe/claimframe-downloads`. When the application is released, update
`params.releaseVersion` once in `site/config.toml`; the homepage uses that value for
its displayed version and all eight `/releases/latest/download/<asset-name>` URLs.
Netlify verifies that the matching public release exists and contains exactly those
eight assets before deploying the site.


## AI Disclosure

This project was developed with assistance from AI tools. Human maintainers review,
test, and accept responsibility for the code, documentation, and release decisions.
