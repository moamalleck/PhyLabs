# Decks

Presentation decks you take *into* customer, partner, and investor conversations, plus their
`pptxgenjs` build scripts. Each script writes its `.pptx` **next to itself** (via `__dirname`), so
rebuilds stay in this folder instead of littering the repo root.

| Deck | Build script | Rebuild |
|---|---|---|
| GTM Strategy | `gtm-strategy-deck.js` | `node marketing/customer-discussion-materials/decks/gtm-strategy-deck.js` |
| Product Strategy | `product-strategy-deck.js` | `node marketing/customer-discussion-materials/decks/product-strategy-deck.js` |
| Traction Snapshot | `physicianLabs-traction-snapshot.js` | `node marketing/customer-discussion-materials/decks/physicianLabs-traction-snapshot.js` |

These are **presented live** (internal → discussion). Anything meant to be *handed off* for
credibility/partnership goes in [`../../../website/shareable-materials/`](../../../website/shareable-materials/)
instead — e.g. `PhyLabs overview.pdf`.
