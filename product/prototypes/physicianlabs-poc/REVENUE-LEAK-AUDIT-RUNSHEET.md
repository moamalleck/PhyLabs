# PhysicianLabs — Revenue-Leak Audit Run-Sheet (PoC delivery)
**Version:** v1.0 (LOCKED) · **Date:** 2026-06-20 · **Status:** ready to run · *(supersedes v0.1–v0.4 iteration)*
**Purpose:** Turn the $1,000 money-back PoC into a *repeatable, time-boxed* delivery instrument so the 90-minute session stops being bespoke founder work — the one real bottleneck of the chosen Concierge Hybrid model.
**Engine (source of truth):** the 4-category leak model in `docs/prototypes/physicianlabs-poc/estimate.js`. This sheet wraps that model in a fixed process; it does not redefine it.
**Pairs with:** `index.html` (canned walkthrough), `estimate.html` (live estimator), the guarantee A/B tracker, and `revenue-interview-pricing-guide-2026-06-20.md`.

---

## The model at a glance

Three inputs a physician already knows → four traceable leak categories → one credible $ number.

| Input | Symbol |
|---|---|
| Monthly visits | V |
| Average reimbursement / visit | A |
| Denial rate | d |

Annual collectible baseline: **C = V × A × 12**

| # | Leak category | Formula | Default-practice $ (V=420, A=$112, d=8%) |
|---|---|---|---|
| 1 | Unrecovered denials | 0.35 × d × C | ~$15,800 |
| 2 | E/M under-coding | $34 × 0.15 × (V × 12) | ~$25,700 |
| 3 | Payer underpayment | 0.025 × C | ~$14,100 |
| 4 | Unbilled visits | 0.005 × C | ~$2,800 |
| | **Total recoverable (R)** | sum | **~$58,400** |

*(Categories 2–4 are denial-rate-independent — they set the floor even for a clean biller. This matters for the gate below.)*

---

## Two delivery modes (keep both open for now)

| | **Estimate mode** | **Actuals mode** *(preferred when data exists)* |
|---|---|---|
| **Use when** | 0–12mo physician with thin/unexportable data | Prospect can export a billing + denial report |
| **Data needed** | The 3 inputs (V, A, d) — from memory/ballpark | Real collections, denied-claims report, payer remittance sample, E/M code distribution |
| **Drives** | `estimate.js` sliders → directional number | Same 4 categories computed on real figures |
| **Credibility** | Directional (on-page disclaimer) | High — defensible per-source |
| **Guarantee** | Extend **only if** the gate clears with margin (below) | Safer; real numbers de-risk the refund promise |

> **Default rule of thumb:** lead with **actuals** whenever the prospect can pull even a partial billing export — the money-back guarantee is materially safer on real numbers. Fall back to **estimate** to keep the session moving when they can't.

### Actuals-mode export cheat-sheet (per EHR)

Tell the prospect exactly which reports to pull. Map each leak category to a real report. *(Exact menu names vary by plan/version — confirm on screen-share.)*

**Minimum viable pull (if they're short on time):** ① an **A/R aging / collections summary** (→ baseline C), ② a **denial report** (→ category 1), ③ a **procedure/CPT frequency report** (→ category 2). Categories 3–4 can be estimated if needed.

**athenahealth (athenaOne / athenaNet)**
| Need | Report | Where |
|---|---|---|
| Baseline C / collections | A/R aging + financial/collections reports | Report Library |
| ① Denials | **Denials Report** (filter by denial type, kickcode, rejection reason, procedure code) | Report Library (activate via Settings → Implementation Admin → **Activate Reports**) |
| ② E/M under-coding | Procedure/charge reports by procedure code; CPT frequency | Report Library |
| ③ Payer underpayment | Expected-vs-posted / contract allowable | Remittance + financial reports |
| ④ Unbilled visits | **Missing Slips** (appointments needing charge entry) | Missing Slips worklist |

**DrChrono**
| Need | Report | Where |
|---|---|---|
| Baseline C / collections | **Aging AR Analysis** + **Financial Transactions Report (Day Sheet)** | Billing → Reports |
| ① Denials | **Denial Analysis Report** (Summary + Details by reason / CPT / insurance) | Billing → Reports |
| ② E/M under-coding | Procedure-level data in Day Sheet; Denial Details by CPT | Billing → Reports |
| ③ Payer underpayment | **Insurance Payment Reports** (vs. fee schedule) | Billing → Reports |
| ④ Unbilled visits | **Live Claims Feed** (claim/billing status; appts without claims) | Billing → Live Claims Feed |

**Tebra (formerly Kareo)**
| Need | Report | Where |
|---|---|---|
| Baseline C / collections | **Unpaid Insurance Claims Report** (A/R aging worklist by Date-of-Service Age) + Insurance Collections | Reports → Accounts Receivable |
| ① Denials | **Claim Processing Reports** (clearinghouse/payer rejection + denial tracking) | Encounters → Clearinghouse Reports |
| ② E/M under-coding | **Procedure Production by Provider** (CPT frequency) | Reports |
| ③ Payer underpayment | Insurance payment / adjustment reports (vs. allowed) | Reports |
| ④ Unbilled visits | Missing-charges / encounters-not-billed worklist | Encounters |

**Other / unknown EHR (generic fallback):** ask for (1) A/R aging, (2) denied-claims report, (3) CPT/procedure frequency, (4) payment/remittance sample, (5) a list of appointments without a created claim. Any RCM system exposes these under a Reports/Billing menu.

#### DPC / concierge (cash-pay) platforms — *different leak model*

These run **membership** billing, not insurance claims, so categories ①–③ (denials, E/M under-coding, payer underpayment) mostly **don't apply**. Use the **DPC leak variant** below and **recompute the gate** — a small cash-pay panel may not clear $20K, so be conservative extending the guarantee.

**DPC leak variant (replaces ①–④ for cash-pay practices):**
| # | DPC leak | Where the $ hides |
|---|---|---|
| D1 | Failed / lapsed membership payments (involuntary churn) | declined cards, expired plans never re-billed |
| D2 | Under-priced memberships vs. market | flat below-market rate across the whole panel |
| D3 | Unbilled add-ons / incidentals | labs, dispensed meds, procedures, telehealth not charged |
| D4 | Employer / B2B contract under-billing | roster gaps, un-invoiced group seats |
| D5 | G2211 / insurance under-coding *(hybrid practices still billing insurance)* | maps to category ② |

**Per-platform pull:**
| Platform | Pull |
|---|---|
| **Hint Health** | Failed-payments / dunning report, MRR & churn dashboard, employer-contract & group-enrollment reports, plan-tier configuration |
| **Atlas.md** | **"Earnings per Doctor"** report (subscriptions / labs / prescriptions / misc / shipping), monthly revenue + retention metrics, incidental-charges statement |
| **Elation Health** | **Membership Report** + recurring-billing / payment tracking; **G2211** coding-gap report for any insurance-billed encounters |

---

## Section 1 — Pre-call intake (≤15 min, async before the call)

Send as a short form. Goal: enough to pre-run the model and the gate *before* the call so the session opens on the payoff, not data collection.

- Specialty + months independent (confirms 0–12mo ICP)
- EHR / clearinghouse (e.g., athenahealth, DrChrono, Tebra)
- **V** — monthly visits (or annual)
- **A** — average reimbursement per visit (or annual collections, from which we derive)
- **d** — denial rate (if unknown → flag estimate mode)
- Payer mix (rough % commercial / Medicare / cash)
- **Actuals available?** (Y/N) — can they export a denied-claims report + a remittance sample?

---

## Section 2 — Guarantee pre-qualifier (min-threshold gate)

**Never extend the money-back guarantee to a practice too small to clear $20K.** Two-step gate:

**Step A — Fast triage floor (apply on the intake, no math):** extend the guarantee only if **all** hold:
- Annualized collections (C) ≥ **$300,000**, AND
- Monthly visits (V) ≥ **200**, AND
- d ≥ 4% **or** A ≥ $90 (ensures a recoverable base exists)

**Step B — Computed gate (the real check):** run the 4-category model, then apply a **0.6 confidence haircut** (we under-promise):
- **Haircut R = 0.6 × R.**
- Extend the full guarantee only if **Haircut R ≥ $20,000** (ideally raw **R ≥ $33,000**).

**If the practice fails either step:**
- Still offer the **$1,000 PoC**, but **without** the money-back clause — reframe as "a paid diagnostic; here's what we expect to find," OR
- Offer an **estimate-only session** (no guarantee) and revisit once they scale.

*Why $300K / 200 visits:* at A≈$100 and d≈5%, R crosses $20K around ~$215K collections / ~160 visits; the floor bakes in ~40% margin so the refund promise is structurally safe.

---

## Section 3 — The leak worksheet (fill live)

| Category | Formula | Their inputs | $ recovered |
|---|---|---|---|
| 1 · Unrecovered denials | 0.35 × d × C | d=____ , C=____ | $______ |
| 2 · E/M under-coding | $34 × 0.15 × (V×12) | V=____ | $______ |
| 3 · Payer underpayment | 0.025 × C | C=____ | $______ |
| 4 · Unbilled visits | 0.005 × C | C=____ | $______ |
| **Total recoverable (R)** | | | **$______** |
| Haircut R (×0.6) — *guarantee check* | | | **$______** |

---

## Section 4 — 90-minute live session run-sheet

Mapped to the 7-screen conversion arc. Each block: time-box + "say it once, then stop talking."

| Min | Block (screen) | What you do | Say this, then stop |
|---|---|---|---|
| 0–10 | Rapport + intake confirm (1–2) | Confirm the 3 inputs on screen; no spreadsheets | "Let's confirm your numbers, then I'll show you what we found." |
| 10–25 | **Diagnostic payoff (3)** | Reveal Health Score + the $ figure counting up | "We found **$X** you're not collecting this year." → silence |
| 25–55 | **Traceability (4)** — the credibility core | Walk the 4 categories one at a time, tie each to *their* data | "Every dollar traces to a specific, fixable gap. Here's the first…" |
| 55–75 | Roadmap + dashboard (5–6) | 90-day plan: fast money first, then run-rate; glimpse the live product | "Here's the order we'd fix these — biggest, fastest wins first." |
| 75–90 | **The close (7)** | The $1,000 money-back PoC + founding pricing | "$1,000. If we don't surface $20K, it's free. You'd be one of 10 founding clinics at $599/mo locked for life." → silence |

> Reminder from the A/B test: when you state the guarantee, **say it once and write their first unprompted reaction verbatim.**

---

## Section 5 — Standardized output one-pager (leave-behind / close asset)

**Branded template:** `docs/prototypes/physicianlabs-poc/poc-output-onepager.html` — open in a browser → **Save as PDF** → one Letter page, on-brand (Plus Jakarta Sans, indigo). Fill these fields each time (the live calculator will auto-fill them via the wired element ids):

- **Practice Health Score:** __/100
- **"We found $______ you're not collecting this year."**
- **The four sources** (with $ each): denials · E/M under-coding · payer underpayment · unbilled visits
- **90-day roadmap:** 3 sequenced fixes (fast money → run-rate)
- **The offer:** $1,000 money-back PoC → Founding Transition Program ($8,000) → $599/mo locked
- **Mode used:** estimate / actuals · **Guarantee extended:** Y/N (per gate)

---

## Section 6 — Post-call log (feeds the trackers)

Capture: mode used · raw R · haircut R · guarantee extended? · first verbatim reaction · PoC committed? · card charged? · price-point reaction ($8K / $22K).
→ Routes to the guarantee A/B tracker and the revenue-interview change-log.

---

## Roadmap — the live calculator (committed, build later)

Extend `estimate.html` into an **operator tool**: enter V/A/d (or import actuals), and it auto-computes the worksheet, runs the gate (shows guarantee Y/N), and renders the Section-5 one-pager for the close. Markdown run-sheet ships first; calculator follows.

---

## Locked decisions (v1.0)
- ✅ Triage floors ($300K collections / 200 visits/mo) — confirmed 2026-06-20.
- ✅ 0.6 confidence haircut before extending the guarantee — confirmed 2026-06-20.
- ✅ Per-EHR actuals cheat-sheet (athenahealth / DrChrono / Tebra + generic) — v0.3.
- ✅ DPC/concierge platforms (Elation / Hint / Atlas.md) + DPC leak variant — v0.4.
- ✅ Branded PDF output one-pager (`poc-output-onepager.html`) — render-verified — v0.4.

## Deferred (tracked as a separate build task)
- **Live calculator wiring:** extend `estimate.html` into an operator tool that auto-computes the worksheet, runs the gate, and auto-fills `poc-output-onepager.html`. Element ids already wired. **Not part of v1.0** — see the run-sheet's Roadmap section.

## Post-pilot tuning (revisit after first ~5 sessions)
- Tune the DPC gate once a cash-pay session is run (DPC recoverable pool differs).
- Founder wordsmithing pass on the one-pager copy.

*v1.0 locked 2026-06-20. The run-sheet is ready to run as-is; the live calculator is a separate, deferred build.*
