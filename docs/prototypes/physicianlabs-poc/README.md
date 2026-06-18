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

## The conversion arc (7 screens)

The flow is deliberately sequenced as **fear → clarity → ROI proof → plan → ongoing value → close**:

| # | Screen | Job it does in the sale |
|---|--------|-------------------------|
| 1 | **Sign in** | Sets the "this is a real product I'd log into" frame. |
| 2 | **Practice intake** | "2-minute" pre-filled snapshot → the system reads their billing system, no spreadsheets. Low-effort promise. |
| 3 | **Diagnostic payoff** | The hero moment. Practice Health Score (76) + **"We found $23,800 you're not collecting this year"** + the money-back guarantee. This is what makes them lean in. |
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
  up to $23,800 is the emotional beat; everything before it is setup and everything after is proof.
- **Traceability is the credibility unlock.** Prospects (per discovery) distrust round numbers. Screen 4
  breaking $23,800 into 4 named, fixable sources is what turns "nice demo" into "that's *my* money."
- **The guided bar lets the founder present without fumbling** — linear Back/Next, or jump to any screen
  if a prospect asks "show me the dashboard again."
- **Brand continuity** means a prospect who saw the marketing site feels they're seeing the same company's product.

**Deliberate limitations (happy-path only, by design)**
- **Fixed canned persona** — no live input. Chosen for a controlled, no-surprise live demo. The obvious
  next iteration is a "plug in your own numbers" mode that computes a prospect's *own* recovery estimate
  live — the single highest-leverage upgrade for conversion, but higher risk in a live setting.
- No error/empty/loading states beyond the one analyzing animation.
- The dollar figures are illustrative, not benchmarked to a real practice.

**Open questions to validate in the demo**
1. Is **$23,800** the right magnitude — believable but worth the $1K? (Discovery suggested "save $100K/yr"
   as the frame; this PoC is deliberately conservative/credible. Worth testing both.)
2. Does the **money-back guarantee** read as confidence or as a gimmick to this audience?
3. Does sign-in → intake add useful "real product" framing, or should the demo open straight on the payoff?

---

## File map
- `index.html` — all 7 screens + app shell + guided demo bar
- `styles.css` — extends the marketing brand tokens
- `app.js` — screen routing, guided nav, analyzing animation, count-up reveal, canned interactions

## Accessibility
Built to WCAG 2.1 AA intent: real semantic `<button>`/`<a>`/form controls, labeled inputs, visible
focus rings, ARIA labels on the score ring and decorative SVGs marked `aria-hidden`, keyboard
navigation (arrows + tab), and AA-contrast text throughout.
