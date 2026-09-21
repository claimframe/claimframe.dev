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
repository instead. The coordinated next release replaces the Linux AppImage with native DEB and RPM
packages. The homepage derives these nine asset names from `params.releaseVersion`
in `site/config.toml` once `params.releasePending` is cleared:

- `Claimframe-<version>-macos-arm64.dmg`
- `Claimframe-<version>-macos-x64.dmg`
- `Claimframe-<version>-windows-x64.msi`
- `Claimframe-<version>-linux-amd64.deb`
- `Claimframe-<version>-linux-x86_64.rpm`
- `claimframe-mcp-<version>-macos-aarch64`
- `claimframe-mcp-<version>-macos-x86_64`
- `claimframe-mcp-<version>-windows-x86_64.exe`
- `claimframe-mcp-<version>-linux-x86_64`

The private application's release workflow must copy and rename each completed
installer and MCP executable into a matching release in
`claimframe/claimframe-downloads`. When the application is released, update
`params.releaseVersion` once in `site/config.toml`; the homepage uses that value for
its displayed version and all nine `/releases/latest/download/<asset-name>` URLs.
Netlify verifies that the matching public release exists and contains exactly those
nine assets before deploying the site.


### Coordinated rollout (pending)

No package release is claimed by this change. `releaseVersion` targets `0.4.0` and
`releasePending = true` withholds all unpublished 0.4.0 artifact links, marks affected guides
as upcoming, and makes `npm run verify:release` fail before attempting network access.
macOS, Windows, and MCP asset naming conventions remain unchanged. The public
releases fallback remains available for existing downloads. Local builds and
tests can run while the release is pending; the Netlify build cannot deploy it.

The [0.4.0 release notes](site/content/releases/0.4.0.md) are linked from the homepage
and guide and remain marked pending. Keep them aligned with the app changelog.

After the app release containing native packages and schema 17 is approved and all
nine public assets exist, update `releaseVersion`, set `releasePending = false`, and
remove the pending wording in `site/static/llms.txt` and `site/static/llms-full.txt`.
Run `npm test` and `npm run verify:release` before the separately authorized site
publication. The verifier requires the configured version to be the latest stable
public release and checks its exact nine-asset set. AppImage is not an optional
asset in the new contract. Historical releases remain available on GitHub.

Linux format labels identify package families, not a tested distribution matrix.
See the [Linux guide](site/content/guide/how-to/install-linux.md) for local package
manager installation, updates, and removal. No APT/YUM repository or automatic
updater is configured.

## Entity naming documentation

The upcoming schema 17 contract is one stable ID and one current name per entity.
Names are unique within a vault using Unicode 17.0 simple case folding, with outer
whitespace trimmed and interior spaces, punctuation, composition, and display case
preserved. Case-variant capture reuses the current owner without changing display
spelling. Explicit rename, including case-only rename, keeps the ID, rejects another
owner's name, and releases the old name. There are no retained lookup aliases.

Saved query text stays unchanged through rename and migration; an old name may stop
matching or later select a different entity. Autocomplete inserts quoted/escaped
current-name text with no ID binding. Graph nodes use stored IDs. Sourced domain
`aka`/naming facts and original evidence remain independent of lookup rules. Stable
vocabulary identifiers remain authoritative.

The [Share a vault guide](site/content/guide/how-to/share-vault.md) follows the UI
labels in `VaultsPanel.tsx`, `StartupVault.tsx`, `useImportExport.ts`, and
`CfTextImportDialog.tsx` in the app source.

The Capture and Query references, modeling/query/graph/vocabulary guides, vault
upgrade guidance, CFText reference, and agent context follow app ADR-0008 and the
product-spec, data-model, and CFText contracts. CFText is new in 0.4.0: export current state, edit externally, and import into a fresh
vault with new IDs. It is the recommended person-to-person handoff: export a snapshot,
share through a chosen channel, and import an independent copy, without synchronization
or full history, saved queries, or settings. It omits lookup aliases; only development/pre-release files may
need alias-directive cleanup. It is not a history-preserving SQLite backup. The 100,000-claim reference
budgets are three seconds for export and 3.5 seconds for parse plus import.

## AI Disclosure

This project was developed with assistance from AI tools. Human maintainers review,
test, and accept responsibility for the code, documentation, and release decisions.
