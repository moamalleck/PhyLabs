# Evidence: SoftBank / NEC-X Pre-Seed Pitch Deck — investor-pitch-preparation

**Issue:** pitch-deck-softbank-necx-2026-06
**Workflow:** investor-pitch-preparation (FRAIM)
**Date:** 2026-06-11
**Operator:** ash.malleck@gmail.com

## Summary

Prepared the complete pre-seed pitch package for the SoftBank / NEC-X meeting (week of June 15, 2026): a 5-minute, 14-slide deck in the founder-specified order, plus the full written pitch package with market analysis, financial model, Q&A defense, and exit comps.

## Founder Decisions Captured (AskUserQuestion, 2026-06-11)

1. **Traction framing:** honest pre-revenue state. 5 verbal LOIs (in written conversion), 7 interview sessions across 5 physicians, WTP signals $1K prospective / $10K retrospective, zero paid revenue.
2. **The Ask:** $2.5M pre-seed to reach 20 paying clinics / first $200K revenue / platform v1, with a $10M seed milestone map. Non-monetary asks of SoftBank/NEC-X: define the investability bar for 2 to 3 months, 2 to 3 design-partner intros, one RCM/payer data door.
3. **Solution story:** wedge (transition program) to platform (AI-native financial operating layer) arc.
4. **Team slide:** Ash solo + unnamed advisory bench.

## Work Completed

| File | Description |
|---|---|
| `docs/fundraising/pitch-deck-2026-06-11-softbank-necx.pptx` | Cover + 14 slides, navy/teal brand, speaker notes on all 15 slides, native editable ARR chart |
| `docs/fundraising/pitch-package-2026-06-11.md` | Full package: narrative, layered TAM/SAM/SOM, competitive landscape, unit economics, 5-year model, deck blueprint, Q&A defense, exit comps (all hyperlink-cited) |
| `docs/fundraising/build-pitch-deck-2026-06-11.js` | Reproducible pptxgenjs generator for the deck |

## Validation

- **Content QA (PASS):** all 15 slide XMLs extracted from the .pptx; every slide present in the specified order; no placeholder text; 15 notes slides confirmed; chart1.xml present.
- **Layout QA:** geometry audited at construction; one overflow risk (slide 4 advisory-bench row) detected and fixed before final build.
- **Visual render QA (LIMITED):** no Python, LibreOffice, or PowerPoint is installed on this machine, so slide-image rendering was not possible locally. Founder should open the deck once in PowerPoint before presenting.
- **Integrity check (PASS):** no fabricated traction; comps verified against fresh web sources ([Healthcare Dive: R1 RCM $8.9B](https://www.healthcaredive.com/news/revenue-cycle-management-r1-rcm-acquisition/723167/), [Scope Research: RCM multiples](https://www.scoperesearch.co/post/healthcare-revenue-cycle-valuation-multiples-and-m-a-trends-2025)).

## Deviations from Standard Submission

- No feature branch or PR: `fraim/personalized-employee/rules/project_rules.md` prohibits branch/worktree creation for FRAIM jobs; work committed directly in the main workspace.
- Commit scoped to the four files above only; pre-existing uncommitted changes from other sessions were left untouched.

## Next Steps

1. Open the deck once in PowerPoint for a final visual pass (2 minutes).
2. Rehearse to the speaker notes; target 20 seconds per slide.
3. Before the meeting: convert at least one verbal LOI to written, and attempt the first paid close (Saf, $1K founder-rate offer) — a single paid customer upgrades slide 14 materially.
