# Website Development

**Everything publicly accessible.** If a stranger with the URL can reach it, it lives here. This is
the public shell — the marketing site and the front door to the product. Anything behind the login
is [`../product/`](../product/README.md).

## Folders

| Folder | What goes here |
|---|---|
| `site/` | **The deployed public site** — one static, no-build unit that Netlify publishes. Contains all public pages (landing, signup, demo) plus shared `css/`, `js/`, `images/`. |
| `shareable-materials/` | Materials **designed to be shared** for credibility, partnership, or client activation — hosted one-pagers, partnership decks, exec summaries with a public URL. Kept separate from `site/` because they're distributed directly, not necessarily linked from the marketing site. |
| `infra/` | AWS hosting notes/config for the public site (S3 + CloudFront or Amplify), DNS, custom domain, CDN. |

## `site/` — the single deployable unit
It's a flat static multi-page site with relative links, so it deploys as **one folder**, not split
across per-page directories:

| Page / asset | Role |
|---|---|
| `site/index.html` | Public marketing homepage (hero, pain, features, signup forms) |
| `site/scorecard.html` | Revenue-Leak Scorecard — public demo / lead magnet |
| `site/start/` | Signup / get-started flow |
| `site/css/`, `site/js/`, `site/images/` | Shared assets referenced by every page via relative paths |

### Deploy
- **Live config:** `netlify.toml` at repo root → `publish = "website/site"` (Netlify requires
  `netlify.toml` at the root, so it stays there; only the publish path points here).
- **Local preview:** `.claude/launch.json` → `physicianlab-website` serves `website/site`.
- **AWS target:** when migrating off Netlify, `site/` maps cleanly to an S3 bucket behind CloudFront;
  keep it a single static folder so the deploy stays a plain sync.

## The credibility line
`shareable-materials/` is the bridge from marketing to website: it's the subset of marketing output
that becomes **public** for external audiences. If it's still just prep, it stays in
[`../marketing/customer-discussion-materials/`](../marketing/customer-discussion-materials/).
