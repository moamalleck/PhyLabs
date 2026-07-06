# PhysicianLabs — Product Mockup & Tooling Write-Up

**Date:** 2026-06-25 · **Owner:** Ash Malleck · **Status:** Mockup complete + render-verified
**Job:** FRAIM `user-facing-prototyping` · **Deliverable location:** `docs/prototypes/physicianlabs-poc/`

This document is the assignment write-up for the **Product Mockup** module: the best-practice research
behind it, the tools chosen (with the reason for each), the Concierge MVP delivery process, and links to
every artifact. The *prototype itself* (the clickable HTML) is the primary deliverable; this is the map to it.

---

## 1. The One Customer Problem the mockup solves

> A newly-independent physician (0–12 months post-launch) is **leaking five figures of revenue they
> already earned** — denied claims never reworked, visits under-coded, payers underpaying contracts,
> visits never billed — and they have **zero visibility** into it because the data is buried in an EHR
> built for billing, not for the doctor-as-business-owner.

Grounded in discovery: Saf Malleck lost >$200K in his first clinic with no P&L visibility; Samir Master
documented $200K/yr admin overhead and a $115-vs-$290 reimbursement gap. The mockup makes this invisible
leak **visible, traceable, and recoverable** — the "windshield, not rear-view mirror" frame.

**The solution shape (locked Concierge Hybrid model):** a `$1,000 money-back PoC` ("we find $20K you're
not collecting, or it's free") → done-for-you recovery program → `$599/mo` dashboard subscription.

---

## 2. Best-practice research — how to mock up a solution like this

Synthesized from lean-startup / product-discovery practice and adapted to a high-trust, clinical buyer.
**Rationale is included per decision** (the operator should be able to confirm or redirect each one).

| Best practice | Why it applies here | How the mockup honors it |
|---|---|---|
| **Concierge MVP before automation** (Manning/Blank) — deliver the value *by hand* first, mimic the product manually | We have zero engineering and a founder-capacity-bound model; building software first would be premature | The real MVP is a **manual 90-min revenue-leak audit** (the run-sheet). The HTML only *demonstrates* the value; the founder *delivers* it by hand. |
| **Sell the value, not the feature set** — lead with the outcome (fear → relief), not the UI | Physicians distrust generic HealthTech; they buy recovered dollars, not dashboards | The arc is sequenced fear → clarity → ROI proof → plan → close, peaking on "**$67,900 you're not collecting**." |
| **Make the number credible by tracing it** — round numbers read as marketing | Discovery showed prospects distrust round claims | Every dollar decomposes into 4 named, fixable sources tied to specific claims/codes. |
| **Clickable > static** — a walkable prototype outperforms slides for "is this real?" | The buyer needs to feel they'd *log into* this | A 7-screen app shell that opens on a real-looking sign-in, with guided Back/Next nav. |
| **Let the prospect plug in their own numbers** — interactivity converts | "That's a nice demo" → "that's *my* money" | A separate **live estimator** with three sliders the doctor already knows. |
| **Reuse an existing design baseline** — don't invent a look mid-prototype | A marketing brand already exists; divergence reads as a different company | Tokens/type/components lifted from `PhysicianLabs/css/styles.css`. |
| **Build in the honesty guardrail** — over-promising kills the money-back model | The guarantee is structurally unsafe if estimates are inflated | On-page "directional estimate" disclaimer + a 0.6 confidence haircut in the run-sheet gate. |
| **Accessibility from the start (WCAG 2.1 AA)** — it's a project rule and a credibility signal | Repo rule #5; clinical buyers include accessibility-conscious institutions | Semantic controls, labeled inputs, focus rings, ARIA, keyboard nav. |

---

## 3. The Concierge MVP (manual delivery — the actual MVP)

The mockup is the *demo*; the **Concierge MVP is the manually-delivered service** behind it. There is no
backend, no automation — the founder personally runs the audit and produces the result.

**Process (full run-sheet:** [`REVENUE-LEAK-AUDIT-RUNSHEET.md`](./REVENUE-LEAK-AUDIT-RUNSHEET.md)**):**

1. **Async pre-call intake (≤15 min)** — specialty, months independent, EHR, and the 3 inputs (monthly
   visits `V`, avg reimbursement `A`, denial rate `d`); flag whether real billing exports are available.
2. **Guarantee gate** — only extend the money-back clause if the practice clears the floor
   (≥$300K collections / ≥200 visits, and haircut recoverable ≥ $20K). Protects the refund promise.
3. **90-minute live session** — walk the 7-screen arc on *their* numbers (actuals mode preferred):
   reveal the score + dollar figure → trace every dollar → 90-day plan → close on the $1,000 PoC.
4. **Leave-behind** — fill the branded one-pager, **Save as PDF**, hand it over as the close asset.

The 4-category leak engine is the single source of truth (`estimate.js`); the run-sheet wraps it in a
**repeatable, time-boxed process** so delivery stops being bespoke founder work — the one real bottleneck.

---

## 4. Tools chosen — and one-sentence reason for each

**Build stack (what the mockup is actually made of):**

- **Hand-written HTML + CSS + vanilla JS** — zero build step, opens in any browser, and a prospect (or
  investor) can run the deliverable by double-clicking a file, which is exactly what a disposable demo needs.
- **The existing PhysicianLabs marketing stylesheet as the design baseline** (`PhysicianLabs/css/styles.css`)
  — reusing the live brand tokens makes the product demo read as a true continuation of the same company.
- **Plus Jakarta Sans (web font)** — already the marketing brand's typeface, so the demo inherits brand
  continuity for free.
- **SVG (inline)** — renders the health-ring and revenue-trend chart crisply at any scale with no chart
  library or dependency to manage.
- **Claude Preview dev server** (`.claude/launch.json` → `physicianlabs-poc`, `npx serve`, port 3743)
  — serves the prototype locally so it can be render-verified and screenshotted exactly as a prospect sees it.
- **Browser "Save as PDF"** for the leave-behind one-pager — produces an on-brand, one-page close asset
  with no PDF tooling or design software in the loop.

**Why NOT the obvious alternatives (decisions documented):**

- **No Figma** — a static Figma frame can't be *clicked through* by a prospect on a screen-share, and it
  fragments the artifact away from the live brand CSS; clickable HTML demos "is this real?" far better.
- **No React / Next.js** — the production app is Next.js 16, but pulling that in for a throwaway demo adds a
  build step and toolchain for zero demo benefit; this is "disposable polish," not production code.
- **No no-code builder (Webflow/Framer)** — would re-implement the brand in a third system and lock the
  artifact behind a login, breaking the "double-click to open / lives in the repo" requirement.

**Recommended next tool to adopt (flagged gap):**

- **A formal design system** (`design-system-creation` job) — `fraim/config.json →
  customizations.designSystem.path` is unset, so the marketing CSS is the de-facto system; formalizing
  tokens/components before the real build gives the app and future prototypes one source of truth.

---

## 5. The mockup — artifacts & accessible links

Open locally with the dev server (`physicianlabs-poc`, port 3743) or just double-click the file.

| Artifact | What it is | Link |
|---|---|---|
| **7-screen product walkthrough** | The polished "product is ready today" clickable demo (the wow) | [`index.html`](./index.html) |
| **Live recovery estimator** | Prospect drags 3 sliders → recoverable revenue, live (the sales-close interactive) | [`estimate.html`](./estimate.html) |
| **Branded leave-behind one-pager** | Open → Save as PDF → on-brand 1-page close asset | [`poc-output-onepager.html`](./poc-output-onepager.html) |
| **Concierge MVP run-sheet** | The manual 90-min audit delivery process + guarantee gate | [`REVENUE-LEAK-AUDIT-RUNSHEET.md`](./REVENUE-LEAK-AUDIT-RUNSHEET.md) |
| **Prototype README** | How to run + UX findings + design baseline | [`README.md`](./README.md) |

### The conversion arc (what a prospect walks through)

| # | Screen | Job in the sale |
|---|--------|-----------------|
| 1 | Sign in | "This is a real product I'd log into." |
| 2 | Practice intake | 2-minute snapshot — reads their billing system, no spreadsheets. |
| 3 | **Diagnostic payoff** | Health Score 76 + **"$67,900 you're not collecting"** + money-back guarantee. |
| 4 | **Revenue recovery** | Makes the number *credible* — every dollar traced to a fixable gap. |
| 5 | 90-day roadmap | Fast money first, then lock in the run-rate. |
| 6 | Live dashboard | The "windshield" — the ongoing $599/mo product. |
| 7 | Close | The ask: **$1,000 money-back PoC**, "$20K+ or it's free." |

---

## 6. Render verification (2026-06-25) — "photographs"

All five artifacts were served on the dev server and visually verified. Key screens captured:

- **Sign-in** — "Welcome back, Dr. Chen", sample-demo disclaimer, guided demo bar (1–7).
- **Diagnostic payoff** — navy hero card, Health Score **76** ring, **$67,900** headline.
- **Revenue recovery** — "$67,900 in recoverable revenue", traced to *Unreworked claim denials $18,600*
  (58 claims, 74% recoverable on appeal), *Under-coded visits*, etc.
- **Close** — **$1,000 money-back PoC**, $599/mo founder rate locked for life.
- **Dashboard** — monthly revenue $47,280, recovered-to-date $14,800, billing health 94%, admin hrs saved 8.2/wk.
- **Estimator** — at documented defaults (420 visits / $112 / 8%) computes **$58,400**, breakdown
  $15,800 / $25,700 / $14,100 / $2,800, with the "directional estimate" honesty disclaimer.
- **One-pager** — tagline "Put doctors back in the driver's seat of their own financial future",
  Health Score 76, $67,900, 4 traced sources, 90-day plan, Save-as-PDF control.

> Screenshots of each were captured during this session's verification run. To regenerate: start the
> `physicianlabs-poc` server and open each file.

### Verification finding (minor UX bug, flagged)

The estimator's range sliders **capture mouse-wheel scroll** — scrolling the page with the cursor over a
slider silently changes the prospect's inputs (observed the headline jump from $58,400 to a much larger
number mid-scroll). In a live screen-share this reads as the tool being unstable. **Recommended fix:** add a
`wheel` handler that `preventDefault`s over the sliders, or disable wheel-to-adjust. Low effort; not a model
bug — the underlying coefficients are correct and match the run-sheet exactly.
