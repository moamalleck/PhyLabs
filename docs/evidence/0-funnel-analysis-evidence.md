# Evidence Report: Funnel Analysis

## Summary

- **Issue number:** none assigned (artifacts default to `0-` prefix). No GitHub issue was pre-created for this work.
- **Workflow type:** funnel-analysis (FRAIM job)
- **Date:** 2026-06-29
- **Description:** Produced an AARRR funnel analysis for PhysicianLabs. Because the company is pre-launch with no analytics integration configured, the funnel was scoped to the GTM / customer-development pipeline, grounded entirely in repo trackers. The analysis identifies acquisition (no repeatable non-network channel) as the single highest-leverage drop-off and delivers three sequenced interventions plus a parallel infrastructure unblock.

## Work Completed

### Key files created
- `docs/gtm/funnel-analysis-2026-06-29.pptx` (9-slide deck, primary deliverable)
- `docs/evidence/0-funnel-analysis-evidence.md` (this report)

### Data sources (all manual, repo-grounded)
- `docs/business-development/outreach-tracker.md`
- `docs/customer-development/2026-04-27-recruitment-tracker.md`
- `docs/customer-development/PhysicianLabs-Potential-Customers-Master-2026-06-22.xlsx` (Conversion Funnel tab)
- `docs/business-development/investor-traction-snapshot-2026-06-15.md`
- `docs/customer-development/2026-06-19-poc-demo-guarantee-ab-README.md` and `-tracker.csv`

### Approach
1. **Pull funnel data.** Confirmed no `integrations.analytics` block in `fraim/config.json`. Pulled funnel counts from repo trackers and reconciled them against the master prospects file Conversion Funnel tab. Pulled the exact top-of-funnel count (85 prospects logged) by parsing the master `.xlsx` directly (Python is unavailable on this machine, so the file was unzipped and the sheet XML parsed with Node).
2. **Compute AARRR conversion rates.** Built the stage-by-stage table and surfaced the two-funnel split (outbound vs network). Plotted MoM growth.
3. **Build retention cohort curves.** True D1/D7/D30 usage retention does not exist pre-launch, so a clearly labeled pipeline-persistence proxy was used by acquisition cohort.
4. **Identify drop-off and recommend interventions.** Scored stage leverage, selected acquisition as primary, gave root causes and three interventions with expected impact and difficulty, plus sequencing and secondary opportunities.

## Key Findings

### AARRR conversion breakdown
| Stage | Count | Conversion |
|---|---|---|
| Acquisition (logged) | 85 | 9.4% worked |
| Contacted | 8 | 0% replied |
| Activation | 5 | 71% of warm, 0% of cold |
| Retention (proxy) | 3 | 60% (3 of 5) |
| Referral | 2 nodes / 7 intros | 67% (2 of 3) |
| Revenue | 1 ($1K, uncharged) | 20% of activated |

### Two-funnel split (central insight)
- Outbound / scaled (the 85): 0 of 8 contacted replied = 0%.
- Network / warm: roughly 5 of 7 activated = 71%, and produced 100% of all activity and the only paid commitment.

### Growth
- New contacts: Apr 3, May 5, Jun 0 (negative MoM growth). Pipeline stalled roughly 4 weeks.
- Revenue collected: $0 across the window (payment rails not live).

### Highest-leverage drop-off
Acquisition: no repeatable non-network channel (0% scalable reply rate). Conversion stages are healthy, so the binding constraint is reach, not conversion.

### Interventions
1. Re-segment to the post-pivot ICP and relaunch with the validated $20K money-back hook. Impact: 0% toward 8 to 15% reply, roughly 1 non-family paid PoC per 40-prospect batch. Difficulty: Low.
2. Ship one value-first content piece into a physician community. Impact: 5+ inbound DMs (founder's own bar); proves a repeatable channel. Difficulty: Medium.
3. Productize the referral engine that already converts at 71%. Impact: compounds the only working channel. Difficulty: Low.
- Parallel hard unblock: stand up Stripe and a business bank now so the next "yes" can be card-charged.

## Validation

- **Content QA:** Parsed the generated `.pptx` slide XML. All 9 slides present with correct content and ordering. Scanned all text runs for em-dashes and en-dashes per the formal-communication standard: 0 found.
- **Visual QA:** Not run via rendered images. LibreOffice (`soffice`) is not installed on this machine and Python is unavailable, so the skill's PDF-to-image render path could not run. Layout was verified by coordinate math, and one text-box overlap on the interventions slide was corrected before finalizing.
- **Brand consistency:** Deck extends the existing `PhysicianLabs/css/styles.css` tokens (navy `#0F172A`, indigo `#4F46E5`, semantic green/amber/red) rather than inventing a new palette.

## Quality Checks
- All required deliverable sections are present: AARRR conversion breakdown, retention cohort curves (D1/D7/D30 proxy), growth curves, highest-leverage drop-off, and at least three interventions with expected impact.
- Integration transparency: the deck and this report state that metrics are user-provided/manual and that automated scheduled runs require an analytics integration.
- Documentation is clear and professional.

## Phase Completion
- pull-funnel-data: complete
- compute-aarrr-conversion-rates: complete
- build-retention-cohort-curves: complete
- identify-drop-off-and-recommend-interventions: complete
- submit: complete (this report)

## Feedback Round 1 — No feedback
*Received: 2026-06-29*

Operator approved the deliverable with no change requests. No unresolved items. Proceeding to retrospective.

## Process Notes and Overrides
- **No branch or PR created.** Project rule `fraim/personalized-employee/rules/project_rules.md` imposes an absolute no-worktree, no-branch policy. The generic submit phase steps that create a feature branch and open a PR were intentionally not executed. Work is in place on `main`.
- **`gh` CLI is not on PATH** on this machine, so GitHub label updates and PR comments cannot be automated and were not performed.
- **No commit made automatically.** Files are staged for the operator to review and commit.
- **No GitHub issue** was pre-created, so artifacts use the `0-` prefix.
