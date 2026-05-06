---
reviewContext:
  subjectType: strategy-artifact-set
  subjectLabel: PhysicianLabs Business Strategy
  reviewRef: 2026-05-06
  scopeSummary: >
    Review of PhysicianLabs business strategy artifacts covering market evidence,
    competitive positioning, unit economics, and cross-artifact coherence. Artifacts
    span the full business-idea-validation-and-scoping cycle (Apr 2026) and the
    business-plan-creation output (May 2026).
  repoIdentifier: github.com/moamalleck/PhyLabs
  branchRef: main
  sourceInventory:
    - docs/business-development/business-validation-report-2026-04-28.md
    - docs/business-development/business-plan.md
    - docs/business-development/details/phase1-8.md (8 supporting analysis phases)
    - docs/customer-insights/mentor-session-david-jorjani-2026-04-28.md
    - docs/customer-development/ (personas, search strategies — in progress)

quality:
  job: review-business-strategy
  timestamp: 2026-05-06
  composite: 6.9
  marketEvidence:
    score: 7.0
    rationale: >
      14 cited sources with URLs, robust secondary research across specialty verticals,
      and key clinical stats grounded in credible data (AMA 2024, HFMA benchmarks).
      Zero primary customer interviews conducted; all unit economics built on unvalidated
      WTP and churn assumptions.
  competitiveRigor:
    score: 7.25
    rationale: >
      Genuine landscape research: 7 competitors mapped with sourced funding data,
      Porter's Five Forces, and Meroka correctly identified as ideological competitor.
      Differentiation pillars are concrete and verifiable at the logic level with strong
      objection handling. Weakened by the unanswered "why won't Tebra copy this in 18
      months" question and all differentiators being architectural claims without pilot
      performance data.
  unitEconomics:
    score: 6.5
    rationale: >
      LTV:CAC framework is auditable with segment-level breakdown; CAC and subscription
      duration are asserted without derivation; Month 1 churn is self-admittedly
      unvalidated; New Clinic Launcher LTV arithmetic does not close (~$3,800 calculated
      vs $4,700 stated); services delivery cost not modeled so gross margin claims
      cannot be audited.
  strategicCoherence:
    score: 7.0
    rationale: >
      Clear problem-to-GTM narrative thread; integration-layer positioning consistent
      across all artifacts. Weakened by unresolved SQ2 (single-segment vs. simultaneous
      four-segment launch), a 60% ARPU discrepancy between the validation report and
      business plan ($3K vs $4.8K/yr), and Month 12 revenue targets that express false
      precision given unvalidated WTP.
  coaching: >
    Resolve SQ2 in business-plan.md before any other revision. Commit New Clinic
    Launcher + PT as the 0-12 month beachhead and gate chiro/derm to Year 2 with
    explicit expansion triggers — or make a deliberate case for simultaneous launch
    with a supporting resource plan. Fix the ARPU discrepancy and add a LTV arithmetic
    audit for the New Clinic Launcher segment.
---

# Business Strategy Quality Review — PhysicianLabs
**Date:** 2026-05-06
**Job:** review-business-strategy
**Composite Score:** 6.9 / 10

---

## Executive Summary

PhysicianLabs has produced an unusually complete strategy artifact set for a pre-MVP company. The business plan (Draft v1, 2026-05-05) covers all six critical sections, competitive research is genuine and sourced, and the integration-layer positioning is coherent and consistently applied across artifacts. The overall composite score of **6.9/10** reflects a strategy that is structurally sound but held back by three resolvable issues: (1) unresolved multi-segment scope ambiguity, (2) zero primary customer research underlying unit economics assumptions, and (3) a 60% ARPU discrepancy between the validation report and business plan that creates internal inconsistency in financial projections.

The strategy is investment-ready in framing but not yet in evidence. The gap between the quality of the secondary research and the absence of any primary validation data is the defining characteristic of this artifact set at this stage.

---

## Review Context

| Field | Value |
|---|---|
| Subject | PhysicianLabs Business Strategy |
| Review date | 2026-05-06 |
| Artifacts reviewed | Business plan (Draft v1), validation report, 8 phase detail docs, mentor session |
| Stage | Pre-MVP, design partner recruiting begins |
| Primary missing artifact | Customer discovery interviews (WTP unvalidated) |

---

## Dimension Scorecard

| Dimension | Score | One-Line Rationale |
|---|---|---|
| Market Evidence | **7.0** | 14 cited sources; zero primary research; WTP entirely unvalidated |
| Competitive Rigor | **7.25** | 7 competitors mapped with sourced data; "why won't Tebra copy this" unanswered |
| Unit Economics | **6.5** | Framework auditable; LTV arithmetic gap; churn and CAC unvalidated |
| Strategic Coherence | **7.0** | Clear narrative thread; four-segment scope contradicts single-segment MVP |
| **Composite** | **6.9** | |

---

## Evidence Highlights

**Strongest elements:**
- Integration-layer positioning is sharp, specific, and consistent: "no EHR migration required" is verifiable and directly addresses the #1 purchase objection in the market
- Competitive matrix includes 7 competitors with current funding data (Tebra $250M Jan 2026, Jane App $1.8B, Meroka $6M Sept 2025) and sourced pricing — rare for a pre-MVP company
- Milestone-based pricing is the right structural response to the medical school debt constraint (validated by mentor session)
- The "one recovered dropped episode ($400-800) covers the monthly fee" ROI anchor is a strong, auditable value claim
- Pre-launch OS positioning targets a genuinely uncontested window — no competitor has a product for the 0-12 months before a clinic opens
- Porter's Five Forces analysis is applied correctly; CMS 2026 FHIR mandate as a regulatory tailwind is correctly identified

**Weakest elements:**
- No customer has been asked whether they would pay $500, $200/mo, or $150/mo — every pricing decision rests on this unvalidated assumption
- LTV arithmetic for the New Clinic Launcher segment doesn't close: $500 + 12 × $200 + 6 × $150 = ~$3,800, not $4,700
- Subscription duration assumptions (PT: 20 months, Chiro: 16 months, Derm: 28 months) have no derivation basis
- Month 1 churn "modeled at 15-25%" is a guess, not a forecast — stated explicitly in the plan

---

## Top Gaps / Risks

| # | Gap / Risk | Severity | What's Missing |
|---|---|---|---|
| G1 | ~~SQ2: single-segment vs. simultaneous launch~~ | ✅ **Resolved 2026-05-06** | Deliberate simultaneous four-segment launch. Segment depth prioritisation to emerge from design partner conversations. |
| G2 | ~~ARPU inconsistency across artifacts~~ | ✅ **Resolved 2026-05-06** | $4,800/yr ($400/mo blended) is the working figure. Validation report updated to align. Preliminary — to be refined from customer interviews. |
| G3 | No primary WTP validation | 🔴 Critical | 0 customer interviews conducted. All LTV:CAC ratios, pricing tiers, and Month 12 targets rest on this unresolved assumption. |
| G4 | No financial P&L model | 🟠 High | No revenue/cost/burn/runway model. Required before any fundraising conversation. |
| G5 | No founder-market fit analysis | 🟡 Medium | Not addressed across any artifact — relevant for investor conversations. |
| G6 | SQ5 unresolved: Pacific NW geography vs. national community launch | 🟡 Medium | Community distribution (PTOC, Reddit) is inherently national; GTM plan implies geographic constraint. |
| G7 | "Why won't Tebra build this in 18 months" unanswered | 🟠 High | The product motion / sales org argument is real but unstated. Needs explicit treatment before investor pitches. |

---

## Coaching Plan

**Priority 1 — Resolve SQ2 in `business-plan.md` (do this first)**
The business plan currently has four segments at equal depth while the MVP and validation strategy define a single pre-launch beachhead. This contradiction will surface in every investor conversation and every internal prioritisation decision. Options:
- **(Recommended)** Commit New Clinic Launcher + PT as the 0-12 month focus. Restructure Part 1 (Segments), Part 5 (Roadmap), and Part 6 (Metrics) to reflect only those two segments. Move chiro and derm to a Year 2 expansion section with named triggers (e.g., "expand to chiro after 50 PT design partners or $20K PT-only MRR").
- (Alternative) Make a deliberate, argued case for simultaneous four-segment launch and show the resource model that makes it viable.

**Priority 2 — Fix the ARPU and LTV arithmetic**
Before any revision of the financial model, decide: is the base ARPU $3,000/yr (validation report) or $4,800/yr (business plan)? The discrepancy changes the SAM by $180M. Once settled, re-derive the New Clinic Launcher LTV arithmetic — current figure ($4,700) does not match the stated revenue structure (~$3,800 calculated). Fix CAC derivation assumptions (what community activity generates one customer at $200 CAC?).

**Priority 3 — Run the 10 Mom Test interviews before updating the business plan further**
The current plan is a well-structured hypothesis. Updating it further before validating WTP will add polish to an unvalidated foundation. The 10 interviews (5 PT + 5 derm/new launcher) are the highest-leverage next action. Post-interviews, update:
- Milestone pricing tiers (are the numbers right?)
- Subscription duration assumptions (what do physicians say about how long they'd stay?)
- Month 12 revenue targets (anchor to interview signals, not modeled assumptions)

**Priority 4 — Add P&L model and "Tebra moat" argument**
A P&L model (revenue, COGS, gross margin, burn, runway to next milestone) is required before any investor conversation. Separately, draft a 3-sentence argument for why Tebra's product motion makes it structurally unlikely to build the integration layer in 18 months — this belongs in the competitive positioning section of the business plan.

---

## Source Inventory

| Artifact | Type | Completeness |
|---|---|---|
| `docs/business-development/business-plan.md` | Business plan | Draft v1 — complete, pending SQ2 resolution |
| `docs/business-development/business-validation-report-2026-04-28.md` | Validation report | Complete |
| `docs/business-development/details/phase1-8.md` | Supporting analysis (8 docs) | Complete |
| `docs/customer-insights/mentor-session-david-jorjani-2026-04-28.md` | Mentor session notes | Complete |
| `docs/customer-development/` | Customer discovery | In progress — 0 interviews completed |
| Pricing strategy | Standalone doc | Absent — pricing embedded in business plan |
| Financial P&L model | Standalone doc | Absent |
| Founder-market fit analysis | Standalone doc | Absent |

---

*Generated by FRAIM review-business-strategy — 2026-05-06*
*Next review: After 10 customer discovery interviews or first design partner signed*
