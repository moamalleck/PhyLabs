# Product Spec — Practice Revenue-Leak Scorecard (Free Tool)
**Date:** 2026-07-02
**Owner:** Founder
**Status:** Build-ready spec (MVP). Origin: growth-hacking synthesis (`growth-goals-learnings-2026-07-02.md`) — the "free tool as lead magnet" hack (HubSpot Website Grader), translated to B2B healthcare.
**Strategic role:** Top-of-funnel conversion asset for the live channel test. Turns the "we find $20K you're not collecting — or it's free" hook into a self-serve, instant-value experience that captures a qualified email and routes to the $1,000 PoC.

---

## 1. Why this, why now
- **Highest-leverage transferable hack for our ICP.** Unlike viral B2C loops, a free diagnostic tool fits a high-ACV, trust-gated B2B sale: it delivers value *before* asking for anything, and the value it delivers *is* the pitch.
- **Feeds the channel test already running.** Every LinkedIn/Reddit/cold-email touch can point to the scorecard instead of (or alongside) the generic landing page — a stronger reason to click, and a higher-intent signup.
- **Proves the core promise.** "Find $20K or it's free" is abstract until a physician sees *their own* estimated number. The scorecard makes the pain concrete and personal.
- **Activation-threshold thinking (Twitter "follow 30").** Completing the scorecard is a candidate activation event — a lightweight first "aha" before the paid PoC.

## 2. User flow
1. Physician lands on `/scorecard` (from a tagged channel link or the landing-page hero).
2. Answers **7 short questions** about their practice (all self-reported, practice-level aggregates — **no patient data**).
3. Sees an **instant result**: an estimated **annual recoverable revenue range** + a **Practice Health Score (0–100)** with the top leak source called out.
4. To unlock the **full breakdown + a personalized recovery plan**, enters email (Netlify Forms capture, UTM-attributed).
5. Result screen CTA → the **$1,000 money-back PoC** ("we verify this number on your real data, or it's free").

> Gating choice: show the **headline number for free** (instant value = shareable, honest), gate the **detailed breakdown + plan** behind email. This maximizes both virality and capture.

## 3. Inputs (7 questions — non-PHI, practice-level only)
| # | Question | Field | Notes |
|---|---|---|---|
| 1 | Your specialty | select: PT · Chiropractic · Primary care · Dermatology · Other | Sets benchmark constants |
| 2 | Roughly how many patient visits per month? | number | Volume driver |
| 3 | Average revenue per visit ($) | number | With a "typical for my specialty" default |
| 4 | Claim denial rate (%) | number + "Not sure" | "Not sure" → specialty benchmark |
| 5 | Net collection rate (%) | number + "Not sure" | "Not sure" → benchmark |
| 6 | Of patients on a multi-visit plan, ~what % complete it? | number + "Not sure" | Drop-off / lost episodes |
| 7 | How confident are you in your coding accuracy? | select: Very / Somewhat / Not confident | Proxy for under-coding leak |

All inputs are the owner's own aggregate estimates. **No patient names, DOBs, diagnoses, or claim-level data** are ever requested or stored.

## 4. Calculation model (transparent, benchmark-based)
Let `annualGross = visitsPerMonth × revPerVisit × 12`.

**Benchmark constants (defensible; sourced from `docs/marketing/language-market-fit-2026-05-04.md` + industry RCM norms):**
| Constant | Value | Source |
|---|---|---|
| Target denial rate | 5% | Clean-claim best practice |
| Typical struggling denial rate (fallback) | 12% | AMA/RCM; language-market-fit "10–20%" |
| Target net collection rate | 96% | RCM benchmark |
| Typical collection rate (fallback) | 91% | RCM norm for small practices |
| Target plan-of-care completion | 70% | PT/chiro benchmark |
| Typical completion (fallback) | 40% | Discovery: patients complete 3–5 of 12 visits |
| Denial recoverable factor | 0.60 | Share of excess denials realistically recoverable |
| Drop-off capture factor | 0.50 | Share of lost episodes recoverable via re-engagement |
| Under-coding leak (if "Not confident") | 2.0% of gross | Conservative RCM estimate |

**Leak components (annual $):**
```
denialLeak     = max(0, denialRate − 0.05)        × annualGross × 0.60
collectionLeak = max(0, 0.96 − collectionRate)    × annualGross
dropoffLeak    = max(0, 0.70 − completionRate)    × annualGross × 0.50
undercodeLeak  = (codingConfidence == "Not confident") ? annualGross × 0.02 : 0
totalLeak      = denialLeak + collectionLeak + dropoffLeak + undercodeLeak
totalLeak      = min(totalLeak, annualGross × 0.15)   // sanity cap — never claim >15% of gross
```
**Output as a range, not false precision:** display `totalLeak × 0.8` to `totalLeak × 1.2`.

**Practice Health Score (0–100):** weighted composite of the four sub-dimensions, each scored as (actual ÷ benchmark) clamped to 100:
`score = round(0.35·denialScore + 0.30·collectionScore + 0.25·completionScore + 0.10·codingScore)`.

## 5. Results screen + CTA
- Headline: **"Your practice may be leaving an estimated $X–$Y per year on the table."**
- Top leak source named (largest component) with a one-line explanation in buyer voice.
- Practice Health Score dial (reuse the existing `.health-ring` component from the landing page).
- Primary CTA: **"See the full breakdown + how to recover it"** → email capture → then the PoC offer: *"Our $1,000 PoC verifies this number on your real data — and if we don't find it, it's free."*
- Secondary: "Not ready? Get the benchmark report" (waitlist-style capture).

## 6. Lead capture + attribution
- Reuse the **Netlify Forms + first-touch UTM** setup already built (`docs/marketing/channel-test-2026-07/`).
- New form `name="scorecard"` with hidden fields: `email`, `specialty`, `est_leak_low`, `est_leak_high`, `health_score`, `top_leak_source`, plus the standard `utm_*`/`referrer`/`landing_page`.
- New tagged links: `utm_content=scorecard-<channel>` so scorecard traffic is measured separately in the channel tracker.
- Fire the Plausible `Signup` goal with `props:{form:'scorecard'}` on completion.

## 7. Placement & tech
- **This is the marketing site** (`PhysicianLabs/`, static HTML/CSS/JS) — **not** the Next.js app. No backend needed; the calculator runs client-side.
- New page `PhysicianLabs/scorecard.html`, reusing `css/styles.css` and the existing components (form styles, `.health-ring`, buttons). Calc logic in a small inline/`js/scorecard.js` module.
- Hero on the main page gains a secondary CTA: **"Take the 60-second Revenue-Leak Scorecard →"**.

## 8. Compliance & guardrails (non-negotiable)
- **HIPAA / PHI:** no patient-identifiable data collected, transmitted, or stored — practice-level aggregates only. This keeps the tool outside PHI scope. (Per project rules, any feature touching PHI needs compliance review first; **this one is designed specifically to avoid it.**)
- **Disclaimer (required, on results + footer):** *"This is a directional estimate based on the figures you provided and industry benchmarks — not a guarantee, audit, or financial advice. Actual results are verified in a paid Proof-of-Concept."*
- **Accessibility (WCAG 2.1 AA):** keyboard-navigable inputs, labeled fields, sufficient contrast, screen-reader-friendly results — consistent with the rest of the site.
- **Honesty on the number:** always a range, always capped at ≤15% of gross, benchmarks documented and swappable in one place.

## 9. Measurement (it's a conversion asset)
| Metric | Target signal |
|---|---|
| Scorecard start → complete rate | ≥ 60% completion |
| Complete → email capture | ≥ 40% |
| Scorecard email → PoC conversation | the real ROI metric |
| Est. leak vs. PoC-verified leak | calibration check — keep estimates credible |

## 10. Risks & honest caveats
- **Over-promise risk:** a too-high estimate that the PoC can't verify burns trust. Mitigation: conservative factors, hard cap, range framing, "verified in PoC" language throughout.
- **Garbage-in:** self-reported inputs are rough. That's acceptable for a *directional* top-of-funnel tool; the PoC is where precision happens.
- **Benchmark defensibility:** constants must trace to a source (table above). Revisit as discovery data grows.

## 11. MVP scope vs. later
- **MVP (build first):** 7 inputs, the 4-component model, results range + health score, email capture, one specialty benchmark set (PT/chiro first — our beachhead).
- **Later:** specialty-specific benchmark sets, a shareable results image (light virality), a PDF benchmark report as the gated deliverable, A/B on gating.

## 12. Build checklist
- [ ] `PhysicianLabs/scorecard.html` + `js/scorecard.js` (calc + render), reusing `css/styles.css`.
- [ ] Wire `name="scorecard"` Netlify form with hidden result + UTM fields; reuse attribution JS.
- [ ] Add hero secondary CTA + nav link to the scorecard.
- [ ] Add `scorecard-<channel>` UTM links to `utm-links.md`.
- [ ] Disclaimer + WCAG pass + verify in preview.
- [ ] Extend `generate-results.js`/tracker to count scorecard completions and captures.

*Say the word and I'll build the MVP page against the existing landing-page components.*
