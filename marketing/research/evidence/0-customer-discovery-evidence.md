# Customer Prospect Discovery — Evidence Document

**Date:** 2026-04-27
**Job:** customer-prospect-discovery
**Project:** PhysicianLabs
**Issue:** N/A (run directly by founder)

---

## Summary

Completed a full 8-phase customer prospect discovery run for PhysicianLabs, targeting independent chiropractors and dermatologists in Seattle (design partner tier) and across the US (MVP pipeline). Discovered 40 qualified prospects across Reddit and LinkedIn. X/Twitter search was attempted but returned irrelevant results due to platform search quality degradation.

---

## Work Completed

### Files Created

| File | Purpose |
|------|---------|
| `docs/customer-development/customer-persona-2026-04-24.md` | Two scored target segments with pain points, WTP, search behavior |
| `docs/customer-development/search-strategy-2026-04-24.md` | Platform-by-platform query map with pain keywords |
| `docs/customer-development/users-to-target-2026-04-27.csv` | 40-prospect inventory with scores, pain quotes, profile URLs |
| `docs/evidence/0-customer-discovery-evidence.md` | This evidence document |

### Discovery Summary

**Platforms Searched**
- Reddit: r/Chiropractic, r/Dermatology, r/medicine
- LinkedIn: People search — Seattle chiropractors + Seattle dermatologists
- X/Twitter: Attempted — search quality insufficient, skipped

**Prospect Breakdown**

| Segment | Reddit | LinkedIn | Total |
|---------|--------|----------|-------|
| Chiropractors | 14 | 10 | 24 |
| Dermatologists | 7 | 9 | 16 |
| **Total** | **21** | **19** | **40** |

**Tier Distribution**

| Tier | Count | Action |
|------|-------|--------|
| Tier 1 (Score 9) | 8 | Founder personal outreach |
| Tier 2 (Score 7-8) | 22 | Personalized template |
| Tier 3 (Score 5-6) | 10 | Nurture / awareness |

---

## Lighthouse Prospects (Top 3)

### 1. u/chakratones — Reddit r/Dermatology (Score: 9)
- **Role:** Private practice dermatologist
- **Pain quote:** "The prior authorization process is absolutely brutal and it's taking over our practice... We're spending probably 15-20 hours per week just on biologic prior auths."
- **Post:** https://www.reddit.com/r/Dermatology/comments/1r854jx/prior_authorizations_for_biologics_are_consuming/
- **Outreach angle:** "You wrote about spending 15-20 hrs/wk on biologic PAs. I'm building something to change that. 15-minute call?"

### 2. u/Snapcracklepayme — Reddit r/Chiropractic (Score: 9)
- **Role:** DC / independent practice owner
- **Pain context:** Authored a 5-part public series on chiropractic practice business metrics (PVA, NP flow, OVA) — proving deep ownership and community influence. Distributed templates for patient retention tools.
- **Post:** https://www.reddit.com/r/Chiropractic/comments/1s8cptk/pva_why_cases_fall_apart_before_they_should_and/
- **Outreach angle:** "Your PVA series is the best business content on r/Chiropractic. I'm building tools that solve exactly what you described. Would value 20 minutes with you."

### 3. Samir Master MD — LinkedIn Seattle (Score: 9)
- **Role:** Founder, Dermatology Arts + healthcare venture investor
- **Profile:** https://www.linkedin.com/in/samirmaster/
- **Outreach angle:** "Fellow builder. You founded Dermatology Arts and invest in healthcare. I'm working on the admin burden problem for independent derm practices. 15 minutes?"

---

## Pain Patterns Validated

### Chiropractors
1. **Patient retention / drop-off (PVA)** — Cases falling apart before completion; 40-60% of treatment plan value lost
2. **EHR/software frustration** — Multiple failed software switches; "at this point I am wondering if a simple system exists"
3. **Margin pressure and overhead** — "Paper thin margins"; IC-to-owner transition anxiety
4. **Patient acquisition** — New patient flow is misunderstood as primary problem when retention is usually the real issue

### Dermatologists
1. **Prior authorization burden** — 15-20 hours/week on biologic PAs across providers; "absolutely brutal"
2. **Billing complexity** — Dual track (insurance + cash aesthetic); claim denial rates
3. **EHR dissatisfaction** — ModMed/EMA dominant but expensive; AI PA tools "under-deliver"
4. **Admin overhead** — Dedicated FTE for PA coordination adding overhead without ROI

---

## Wedge Hypothesis Status

**Hypothesis going in:** Patient retention / treatment plan adherence for chiropractors as the build wedge.

**Evidence from discovery:**
- Chiropractor community confirms retention (PVA) is a primary business pain — validated
- Dermatologist community reveals prior authorization burden is more acute and quantifiable — **stronger wedge signal than expected**
- Both segments have clear EHR dissatisfaction — potential aggregation wedge

**Updated recommendation:** Run discovery interviews with both Lighthouse Prospects to determine which pain point produces the strongest "I would pay for this today" response before committing to a wedge.

---

## Next Step

Run `participant-recruitment` job to convert Lighthouse Prospects into confirmed interview participants.

---

## Quality Checks

- All 40 prospects have real Name and Profile URL
- No null or placeholder values in required fields
- No duplicate Profile URLs
- Reddit prospects have Post URLs with specific pain evidence
- LinkedIn prospects found via People Search — role and location verified
- Pain quotes are verbatim from public posts
