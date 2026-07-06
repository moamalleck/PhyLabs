# Repository Structure

PhysicianLabs work is separated into three top-level domains. The rule of thumb:
**who is it for, and does it ship to the public?**

| Domain | Audience | Ships publicly? | Owner mindset |
|---|---|---|---|
| [`marketing/`](marketing/README.md) | Internal — you, advisors, prep for customer/client conversations | No | Strategy, research, go-to-market thinking |
| [`website/`](website/README.md) | The public — anyone with the URL | **Yes** | Everything publicly accessible: landing, signup, demo, credibility assets |
| [`product/`](product/README.md) | Engineering — you and future devs/contractors | No (code deploys, but the repo is internal) | APIs, architecture, EMR integration, tests |

## The dividing lines that matter

1. **Marketing vs. Website** — Marketing is *internal thinking and prep*: research, competitor
   analysis, strategy, and the materials you carry *into* a conversation. The moment an asset is
   published at a URL for anyone to find (a shareable one-pager for credibility, a partnership deck
   hosted for a prospect), it belongs in `website/shareable-materials/`.

2. **Website vs. Product** — Website is the *public shell* (marketing site, signup, demo). Product
   is the *engineering system behind the login*: APIs, EMR integrations, synthetic data, tests.

## Infrastructure & tooling (cross-cutting)

- **Cloud:** AWS. Website hosting config lives in `website/infra/`; application/backend and EMR
  integration infrastructure lives in `product/infra/`.
- **Source control:** GitHub (`moamalleck/PhyLabs`).
- **CI/CD:** GitHub Actions workflows live in `.github/workflows/` at repo root (GitHub requires
  that path); each workflow should be named for the domain it serves (`website-deploy.yml`,
  `product-ci.yml`).

## Migration status

- ✅ **`docs/` → `marketing/` + `product/`** — done. All business/GTM content moved into
  `marketing/`; `architecture/`, `product/`, and `prototypes/` moved into `product/`. The old
  `docs/` tree is removed. Live pointers updated: `fraim/config.json`, `AGENTS.md`,
  `project_rules.md`, `.claude/commands/sales-checkin.md`, `scripts/build_connectors.js`,
  `.claude/launch.json`, and memory pointers.
- ✅ **`PhysicianLabs/` → `website/site/`** — done, moved as one deployable unit. `netlify.toml`
  `publish` and `.claude/launch.json` updated to `website/site`.
- ⏸️ **`src/` + `e2e/` (Next.js app) — intentionally NOT moved.** Next.js requires the app at the
  project root (`src/app`), alongside `package.json`/`node_modules`. Moving it under `product/`
  means relocating the whole project (a monorepo restructure) and would break the build/CI. The
  live app stays at root; `product/` holds the engineering artifacts around it. See
  [product/README.md](product/README.md).

### Still to sort (root-level loose files, low risk — do when convenient)
- Root decks (`*.pptx`, `*.js` deck generators), `*.pdf`, and screenshot `*.png` →
  `marketing/customer-discussion-materials/` or `website/shareable-materials/` depending on whether
  they're published. Left in place for now to avoid breaking any deck-build scripts that reference them.
