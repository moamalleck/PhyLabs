# Evidence Document - PT Prospect Discovery
**Date:** 2026-05-04
**Job:** customer-prospect-discovery (Wave 1 PT expansion run)
**Project:** PhysicianLabs
**Issue:** N/A (run directly by founder)

---

## Summary

Executed a targeted customer-prospect-discovery run to fill the PT (physical therapist) gap in the prospect database. The original CSV (users-to-target-2026-04-27.csv) covered only Chiropractors and Dermatologists. This run establishes the PT segment as a Wave 1 beachhead ICP candidate alongside the existing two segments.

---

## Artifacts Created

| File | Purpose |
|---|---|
| `docs/customer-development/customer-persona-pt-2026-05-04.md` | PT segment ICP profile with pain clusters, WTP, segmentation score (23/25) |
| `docs/customer-development/search-strategy-pt-2026-05-04.md` | PT-specific keyword map across LinkedIn, Reddit, and X |
| `docs/customer-development/users-to-target-2026-05-04.csv` | Validated prospects CSV (empty - header only; all rows failed PostURL fidelity check) |
| `docs/customer-development/pt-pipeline-needs-post-url-2026-05-04.csv` | 35 PT practice owner prospects pending browser-based PostURL verification |

---

## Work Completed

### Phase 1 - Context Synthesis
- Read existing CSV (40 chiro/derm prospects), persona doc, and search strategy doc
- Confirmed PT is listed as Wave 2 in persona doc; user is elevating to Wave 1 beachhead
- Set target: 35 PT prospects, new CSV at `users-to-target-2026-05-04.csv`

### Phase 2 - Customer Profiling
- Built `customer-persona-pt-2026-05-04.md`
  - PT segment score: 23/25 (highest of all three Wave 1 segments)
  - Key pain clusters: patient adherence/drop-off, insurance authorization, billing complexity, EHR burden
  - WTP: $150-400/month; trigger: ROI on recovered treatment episodes
- Built `search-strategy-pt-2026-05-04.md`
  - Pain keywords across 5 categories (compliance, insurance auth, billing, EHR, admin)
  - Platform plan: LinkedIn (primary), Reddit r/physicaltherapy (primary), X #PTTwitter (secondary)
  - Exclusion criteria: ATI, Select Medical, Athletico, hospital-employed PTs

### Phase 3 - Platform Discovery
- Executed 8 web searches (Google site:linkedin.com queries) with PT owner filters
- Platforms attempted and outcome:
  - LinkedIn: 35 profiles found via Google-indexed search results
  - Reddit: BLOCKED (Anthropic crawler policy blocks reddit.com)
  - X/Twitter: Not attempted (LinkedIn alone yielded sufficient prospects)
- Browser status: Playwright session closed between sessions; LinkedIn required browser auth for post-level content; Google site-search returned only profile URLs

### Phase 4 - Prospect Qualification
- 23 prospects scored 9 (Seattle metro, confirmed PLLC/LLC or "Owner/Founder" title)
- 7 prospects scored 8 (Puget Sound area or clinic director title requiring ownership verification)
- 5 prospects scored 7 (US-wide or location unknown)
- Lighthouse candidates: Bryan Simpson, Sarah Anderson DPT, Jody Dexter, Bruk Ballenger, Jarod Carter DPT

### Phase 5 - Inventory Compilation
- PostURL fidelity check result: ALL 35 rows FAILED
  - Failure reason: PostURL = ProfileURL or PostURL blank for every row
  - Root cause: Google site-search returns profile URLs only; post-level LinkedIn content requires browser auth; Reddit blocked
- Action taken: Cleaned validated CSV to empty (header only per No Nulls policy)
- Preserved 35 prospects in `pt-pipeline-needs-post-url-2026-05-04.csv` for browser follow-up

---

## Validation

### What was validated
- Ownership status: confirmed for 23/35 via PLLC/LLC structure or explicit "Owner/Founder" in Google-indexed title
- Location: confirmed Seattle metro for 23/35 via Google-indexed profile descriptions
- Exclusion compliance: no chain clinics (ATI, Select, Athletico) included

### What was NOT validated
- PostURL: no post-level pain evidence captured (requires browser)
- Pain quotes: only 1 of 35 has a pain quote (Jarod Carter, US-wide); no verified post URL even for him

---

## Run Limitations

| Limitation | Impact | Resolution |
|---|---|---|
| Playwright browser closed | No LinkedIn post-level search, no Reddit browsing | Reopen browser; run LinkedIn post search pass |
| Reddit blocked (crawler policy) | Zero Reddit PT prospects | Browser-based r/physicaltherapy search |
| LinkedIn post search requires auth | PostURL blank for all rows | Browser-based search for 10-15 top prospects |

---

## Recoverability

All 35 prospects are recoverable to validated status with one browser session:
1. Open LinkedIn; search posts by each prospect for pain-signal content
2. Open Reddit; search r/physicaltherapy for posts by active practice owners
3. Populate PostURL column with real post URLs meeting the shape regex
4. Re-run inventory compilation; expect 15-25 rows to pass fidelity check

Estimated browser time: 60-90 minutes to upgrade top 15 prospects to validated.

---

## PT Segment Summary

**Segment Score:** 23/25 (highest of three Wave 1 segments)

**Pain Clusters (industry-level evidence):**
- 90%+ of independent PTs cite prior authorization as a top pain point (APTA survey data)
- Independent PT practices lose ~$250,000/year in unpaid claims on average
- Patient adherence/drop-off: patients complete 3-5 visits of a 12-visit plan of care

**Geographic concentration:** 23 of 35 prospects are in Seattle metro (same design partner geography as chiro/derm pipeline)

**Pipeline file:** `docs/customer-development/pt-pipeline-needs-post-url-2026-05-04.csv`

---

## Next Steps

1. **Browser pass** (next session): Open LinkedIn + Reddit with browser; find post URLs for top 15 PT prospects; promote them to validated CSV
2. **Merge PT pipeline into master prospect list** once post URLs are found
3. **Update persona doc** (`customer-persona-2026-04-24.md`) to add PT as an explicit Wave 1 segment (currently listed as Wave 2)
4. **Search strategy update**: Merge PT keywords into `search-strategy-2026-04-24.md` or reference new PT-specific doc
