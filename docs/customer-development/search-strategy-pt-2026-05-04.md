# Search Strategy — PhysicianLabs PT Prospect Discovery
**Created:** 2026-05-04
**Job:** customer-prospect-discovery
**Target:** Physical Therapists (PT/DPT), owner-operators of independent practices
**Geography:** Seattle-first, US-wide secondary
**Output file:** `docs/customer-development/users-to-target-2026-05-04.csv`

---

## Discovery Objective

Find 35 independent PT practice owners who have **publicly expressed** pain around: patient compliance/adherence, home exercise non-completion, insurance authorization burden, billing complexity, EHR frustration, or administrative overload. Prioritize Seattle-area for design partner outreach; collect US-wide for pipeline.

---

## Pain Keywords

### PT — Patient Compliance / Adherence
- "patients don't do their exercises"
- "HEP compliance"
- "home exercise program"
- "patients drop off"
- "plan of care compliance"
- "patient retention physical therapy"
- "patients quit early"
- "discharge early"
- "non-compliant patients PT"
- "treatment plan adherence"

### PT — Insurance Authorization
- "prior authorization physical therapy"
- "PT prior auth"
- "visit limits"
- "insurance visit cap"
- "medical necessity denial"
- "PT benefits exhausted"
- "authorization denied physical therapy"
- "insurance won't cover"

### PT — Billing Complexity
- "PT billing nightmare"
- "workers comp physical therapy billing"
- "PIP billing PT"
- "CPT 97 denied"
- "physical therapy claim denied"
- "billing error PT"
- "underpayment physical therapy"
- "physical therapy billing software"

### PT — EHR / Software
- "WebPT problems"
- "Therabill issues"
- "Clinicient frustrating"
- "PT software terrible"
- "documentation burden PT"
- "SOAP notes taking forever"
- "PT EHR"
- "physical therapy software"
- "Jane App PT"

### PT — Admin / Operations
- "running a PT practice"
- "private practice physical therapy"
- "PT business owner"
- "independent PT clinic"
- "overhead killing my practice PT"
- "PT burnout"
- "admin physical therapy"
- "small PT practice"

---

## Platform Search Plan

### Platform 1 — LinkedIn

**Priority:** High (professional identity, verifiable roles, direct outreach)

**Target Titles (search filters)**
- "Physical Therapist" + "Owner" OR "Founder" OR "Private Practice"
- "DPT" + "Owner" OR "Practice Owner" OR "Independent"
- "Physical Therapy" + "Owner" OR "Director" (when paired with small clinic)

**Seattle-Specific Filters**
- Location: "Seattle, Washington" OR "Greater Seattle Area" OR "Bellevue, WA" OR "Tacoma, WA" OR "Kirkland, WA" OR "Redmond, WA"

**Groups to Search**
- Private Practice Section (APTA)
- Physical Therapy Business Owners
- Independent Physical Therapy Practice Owners
- APTA Washington State Chapter

**Search Queries (LinkedIn People Search)**
1. `"physical therapist" "owner" "Seattle"` → filter to People
2. `"DPT" "private practice" "Seattle"` → filter to People
3. `"physical therapy" "founder" "Seattle"` → filter to People
4. `"PT" "practice owner" "Washington"` → filter to People
5. `"physical therapist" "owner" "Bellevue" OR "Tacoma" OR "Kirkland"` → filter to People

**Posts Search (pain signal)**
6. `"physical therapy" "prior auth" OR "insurance"` → filter to Posts
7. `"PT" "billing" OR "documentation burden"` → filter to Posts
8. `"physical therapist" "patients" "stop coming"` → filter to Posts

**Signal to capture per prospect**
- Full name, LinkedIn URL, title, practice name, location
- Quote from post expressing pain point + post URL
- Relevance score (1–10)

---

### Platform 2 — Reddit

**Priority:** High — r/physicaltherapy is active with business discussions

**Target Subreddits**

| Subreddit | Focus | Priority |
|---|---|---|
| r/physicaltherapy | PT community — clinical + business (active) | High |
| r/physicaltherapists | Smaller PT community — practice owner discussions | Medium |
| r/PTschool | Pre-owner PTs — wave 2 pipeline | Low |
| r/MedicalBilling | Billing pain across specialties incl. PT | Medium |
| r/smallbusiness | Practice owners venting about operations | Low |

**Search Queries per Subreddit**

*r/physicaltherapy*
- "patients stop coming" | "drop off" | "compliance" | "adherence"
- "home exercise" | "HEP" | "exercises at home"
- "billing" | "insurance" | "prior auth" | "claim denied"
- "software" | "EHR" | "WebPT" | "Therabill" | "documentation"
- "private practice" | "own practice" | "business owner"
- "overhead" | "margins" | "struggling" | "burnout"

*r/MedicalBilling*
- "physical therapy" + "denied" | "write-off" | "prior auth"

*r/smallbusiness*
- "physical therapy" + "practice" | "clinic"

**Signal to capture per prospect**
- Reddit username, profile URL
- Post/comment text (pain quote) + post URL
- Subreddit + post karma
- Account age (older = more established)

---

### Platform 3 — X (Twitter)

**Priority:** Medium — PT community exists but smaller than Reddit

**Search Queries**
1. `physical therapist "billing" OR "insurance" -job -hiring`
2. `PT owner "patients" "drop off" OR "compliance"`
3. `#PTTwitter "frustrated" OR "nightmare" OR "burnout"`
4. `"private practice PT" "admin" OR "paperwork"`
5. `DPT "WebPT" OR "documentation" OR "overhead"`
6. `"physical therapy" "prior auth" OR "insurance denied"`

**Tool:** Playwright MCP (Chrome connector blocked on x.com)

---

## Qualification Criteria

A PT prospect is **qualified** if they meet ALL:
1. **Role match**: Physical Therapist (DPT/PT) in independent/private practice — NOT hospital-employed or chain clinic (ATI, Select, Athletico)
2. **Pain evidence**: Publicly expressed at least one target pain point (direct quote captured)
3. **Reachability**: Contactable profile (LinkedIn URL, Reddit username, Twitter handle with post history)
4. **Geography**: Seattle-area for design partner tier; US-wide for pipeline

**Relevance Score (1–10)**
- 9–10: Expressed acute pain, independent PT practice owner, Seattle area, recent post
- 7–8: Expressed pain, independent practice, US-wide OR Seattle area (not both)
- 5–6: Pain expressed but role unclear or practice type uncertain
- Below 5: Skip — do not record

---

## Output Format

File: `docs/customer-development/users-to-target-2026-05-04.csv`

Columns:
```
Name, Platform, ProfileURL, Title, Practice, Location, PainQuote, PostURL, RelevanceScore, Segment, Notes
```

Segment value for all records this run: `PhysicalTherapist`

---

## Lighthouse Prospect Criteria

Top 3–5 prospects identified by:
1. Highest relevance score (9–10)
2. Seattle location (design partner priority)
3. Most articulate expression of pain (best quote for hypothesis validation)
4. Apparent openness to conversation (active poster, public profile)

---

## Exclusion Criteria (Do Not Record)

- Hospital-employed PTs or PT departments
- ATI Physical Therapy, Select Medical, Athletico, NovaCare employees
- PTs without practice ownership context
- Academic / research PTs
- Inactive profiles (no posts in 12+ months)
