# claimframe.dev

Hugo source for [claimframe.dev](https://claimframe.dev), the product page for Claimframe.

Claimframe is a free, open-source, local-first assertion memory workbench for architects, consultants, and technical advisors. It stores sourced assertions, preserves disagreement, and exposes structured context to AI agents through a local MCP server.

## Build

```bash
npm run build
```

The build writes the static site to `site/public`.

## Deployment

The site follows the same deployment shape as `n6consulting/cms-rev-1`:

- Netlify runs `npm run build`.
- Hugo builds into `site/public`.
- Netlify publishes the built output to GitHub Pages through the `gh-pages` branch.
- DNSimple points `claimframe.dev` at GitHub Pages.

`site/static/CNAME` contains the canonical custom domain for GitHub Pages.

## Important Links

- Canonical site: <https://claimframe.dev>
- Download alpha: <https://github.com/claimframe/claimframe/releases>
- GitHub repository: <https://github.com/claimframe/claimframe>
- MCP docs: <https://github.com/claimframe/claimframe/blob/main/docs/mcp.md>
- Product spec: <https://github.com/claimframe/claimframe/blob/main/docs/product-spec.md>
- Agent guide: <https://claimframe.dev/llms.txt>
- Full agent context: <https://claimframe.dev/llms-full.txt>
