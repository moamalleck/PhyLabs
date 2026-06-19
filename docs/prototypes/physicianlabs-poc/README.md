# PhysicianLabs — Interactive Product Walkthrough (PoC)

A clickable, browser-openable proof-of-concept of the PhysicianLabs financial-intelligence
platform — the interactive product the marketing site teases at `app.physicianlab.com/dashboard`
but that doesn't exist yet. Built to show **real prospects** how PhysicianLabs delivers value, and
to convert them into paying **$1,000 money-back PoC** customers.

> **This is a stakeholder demo artifact, not production code.** All data is fictional sample data.
> No backend, no auth, no database, no PHI. Disposable by design.

---

## How to run it

Open it in any browser — no build step.

- **Quickest:** double-click `index.html`.
- **Via the project preview server:** it's registered in `.claude/launch.json` as `physicianlabs-poc`
  (serves on port 3743 via `npx serve docs/prototypes/physicianlabs-poc`).

### Driving the demo
- Use the **Guided demo** bar at the bottom (Back / Next, or the numbered step pips) to walk a
  prospect through linearly.
- **← / →** arrow keys also move between steps.
- The left **sidebar** navigates like a real app (Dashboard, Diagnostic, Revenue Recovery, Roadmap).
- **Restart** returns to the sign-in screen and resets the animations.

---

## Two artifacts, two jobs

| File | Use it for |
|---|---|
| `index.html` | The polished **"product is ready today" walkthrough** — fixed canned story, opens on sign-in. Use it to create the wow and explain the value. |
| `estimate.html` | The **interactive recovery estimator** — a prospect plugs in their own numbers and watches their estimate move. Use it as a follow-on **customer-development / sales-closing** demo to drive buy-in. |

### Recovery estimator (`estimate.html`)
- A prospect drags three sliders they already know — **monthly visits, average reimbursement, denial rate** — and the tool estimates their recoverable revenue **live**, broken into the same 4 categories.
- It updates instantly as they drag; the **Calculate** button re-triggers the count-up animation for a presentation "moment."
- **Transparent model** (in `estimate.js`): annual collectible baseline × benchmark coefficients for unrecovered denials (35% of denied $), E/M under-coding ($34 × 15% of visits), payer underpayment (2.5%), and unbilled visits (0.5%). Defaults (420 visits / $112 / 8%) estimate ~$58K — same ballpark as the canned $67,900, so the two demos reinforce each other.
- **Honesty guardrail:** an on-page disclaimer states these are directional estimates and the real diagnostic reads actual billing data. No data leaves the page.
- **Guarantee A/B toggle:** add **`#guarantee=off`** to the URL to hide the money-back guarantee banner (use the `#` hash form when serving over http — `npx serve` rewrites clean URLs and drops `?query` params; `?guarantee=off` works when opening the file directly). This lets you run the with/without-guarantee test described below in live demos.

---

## The conversion arc (7 screens)

The flow is deliberately sequenced as **fear → clarity → ROI proof → plan → ongoing value → close**:

| # | Screen | Job it does in the sale |
|---|--------|-------------------------|
| 1 | **Sign in** | Sets the "this is a real product I'd log into" frame. |
| 2 | **Practice intake** | "2-minute" pre-filled snapshot → the system reads their billing system, no spreadsheets. Low-effort promise. |
| 3 | **Diagnostic payoff** | The hero moment. Practice Health Score (76) + **"We found $67,900 you're not collecting this year"** + the money-back guarantee. This is what makes them lean in. |
| 4 | **Revenue recovery** | Makes the number *credible* — every dollar traced to a specific, fixable gap (denials, under-coding, payer underpayment, unbilled visits). |
| 5 | **90-day roadmap** | Turns insight into a plan — fast money first, then locks in the run-rate. |
| 6 | **Live dashboard** | The "windshield" — the ongoing product they'd live in (revenue trend, recovery tracker, weekly intelligence). |
| 7 | **Close** | The ask: **$1,000 money-back PoC**, "$20,000+ or it's free," founding-partner pricing. |

### Demo persona (sample account)
**Dr. Marcus Chen, MD — Meridian Family Medicine**, independent ~7 months. A newly-independent /
hospital-to-private physician — the locked "just-launched (0–12 months)" ICP. Numbers are engineered
to land the $1K money-back PoC promise ("we find $20K you're not collecting, or it's free").

---

## Design baseline used

This prototype **extends the existing PhysicianLabs marketing brand** rather than inventing a new look.
Tokens, typography, and components are lifted from `PhysicianLabs/css/styles.css`:

- **Type:** Plus Jakarta Sans
- **Primary:** indigo `#4F46E5` (`--primary`)
- **Ink:** `#0F172A`; status colors green `#10B981`, amber `#F59E0B`, red `#EF4444`
- Shared radii, shadow scale, button styles, the health-ring / roadmap / weekly-intelligence patterns

This satisfies the prototyping job's "use a baseline when it exists" principle — the marketing site is
the de-facto design system, so the product demo reads as a true continuation of it.

### ⚠️ Design-system gap (flagged, follow-on work)
`fraim/config.json` → `customizations.designSystem.path` is **not configured**. There is no formal,
tokenized design system — only the marketing stylesheet I extended here. Recommend running the
**`design-system-creation`** job to formalize these tokens/components before production build, so the
real app and future prototypes share one source of truth.

---

## UX findings (flow, usability, design effectiveness)

**What works**
- **The payoff screen carries the whole demo.** Animating the score ring + the dollar figure counting
  up to $67,900 is the emotional beat; everything before it is setup and everything after is proof.
- **Traceability is the credibility unlock.** Prospects (per discovery) distrust round numbers. Screen 4
  breaking $67,900 into 4 named, fixable sources is what turns "nice demo" into "that's *my* money."
- **The guided bar lets the founder present without fumbling** — linear Back/Next, or jump to any screen
  if a prospect asks "show me the dashboard again."
- **Brand continuity** means a prospect who saw the marketing site feels they're seeing the same company's product.

**Deliberate limitations (happy-path only, by design)**
- **`index.html` uses a fixed canned persona** — no live input — for a controlled, no-surprise wow demo.
  The "plug in your own numbers" upgrade now lives in **`estimate.html`** for use as a customer-dev /
  sales-closing tool.
- No error/empty/loading states beyond the one analyzing animation.
- The dollar figures are illustrative, not benchmarked to a real practice.

**Resolved (founder, 2026-06-18)**
- Headline number set to **$67,900** (up from the initial conservative $23,800) — closer to the
  "save $100K/yr" discovery frame while staying credible for a ~$565K/yr practice (~12%).
- **Open on sign-in** — keep the "this product is ready to use today" wow.

**Still open — to test live**
- Does the **money-back guarantee** read as confidence or as a gimmick? See the test methods below;
  the `estimate.html` `#guarantee=off` toggle exists to run the with/without test in real demos.

---

## File map
- `index.html` — the 7-screen guided walkthrough (app shell + guided demo bar)
- `estimate.html` — the interactive recovery estimator (sales-closing tool)
- `styles.css` — extends the marketing brand tokens (shared by both pages)
- `app.js` — walkthrough: screen routing, guided nav, analyzing animation, count-up reveal
- `estimate.js` — estimator: live calculation model, sliders, count-up, guarantee toggle

## Accessibility
Built to WCAG 2.1 AA intent: real semantic `<button>`/`<a>`/form controls, labeled inputs, visible
focus rings, ARIA labels on the score ring and decorative SVGs marked `aria-hidden`, keyboard
navigation (arrows + tab), and AA-contrast text throughout.
