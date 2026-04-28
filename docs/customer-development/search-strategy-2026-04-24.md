# Search Strategy — PhysicianLabs Prospect Discovery
**Created:** 2026-04-24
**Job:** customer-prospect-discovery
**Target:** Chiropractors (primary) + Dermatologists (secondary), Seattle-first, US market

---

## Discovery Objective

Find 50–200 independent practice owners (chiropractors + dermatologists) who have **publicly expressed** pain around: patient retention/drop-off, billing complexity, administrative burden, or practice revenue leakage. Prioritize Seattle-area prospects for design partner outreach; collect US-wide for MVP pipeline.

---

## Pain Keywords

### Chiropractor Pain Keywords
**Retention / Drop-off**
- "patients stop coming"
- "treatment plan compliance"
- "patient drop off"
- "patients feel better and leave"
- "reactivation"
- "recall patients"
- "retention chiropractic"

**Billing / Revenue**
- "chiropractic billing nightmare"
- "insurance write-off"
- "PIP billing"
- "workers comp chiropractic"
- "claim denied"
- "underpayment chiropractic"
- "billing error"

**Admin Burden / Operations**
- "SOAP notes taking forever"
- "overhead killing my practice"
- "running a chiropractic practice"
- "chiro software frustrating"
- "ChiroTouch problems"
- "Jane App chiropractic"
- "EHR chiropractic"

**General Pain**
- "burnout chiropractor"
- "independent chiropractic practice"
- "DC owner"
- "chiro business"

### Dermatologist Pain Keywords
**Prior Auth / Billing**
- "prior authorization dermatology"
- "prior auth nightmare"
- "biologics prior auth"
- "insurance denial dermatology"
- "derm billing"

**No-shows / Scheduling**
- "no show dermatology"
- "aesthetic appointment no show"
- "botox cancellation"
- "late cancel derm"

**Admin / Operations**
- "running a derm practice"
- "private practice dermatology"
- "independent dermatologist"
- "derm practice management"
- "overwhelmed admin dermatology"

**General Pain**
- "physician burnout dermatology"
- "private practice dermatologist"
- "solo derm practice"

---

## Platform Search Plan

### Platform 1 — LinkedIn

**Priority:** High (professional identity, verifiable roles, direct DM access)

**Target Titles (search filters)**
- "Chiropractor" + "Owner" OR "Founder" OR "Private Practice"
- "Dermatologist" + "Owner" OR "Solo Practice" OR "Independent"
- "Practice Manager" + chiropractic OR dermatology

**Seattle-Specific Filters**
- Location: "Seattle, Washington" OR "Greater Seattle Area" OR "Bellevue, WA" OR "Tacoma, WA"

**Groups to Search**
- Chiropractic Business Owners Network
- Independent Medical Practice Owners
- Dermatology Professionals Network
- American Chiropractic Association Members
- Private Practice Physicians

**Search Queries (LinkedIn Search)**
1. `"chiropractic" "practice owner" "Seattle"` → filter to People
2. `"dermatologist" "private practice" "Seattle"` → filter to People
3. `"chiropractor" "DC" "billing" OR "retention"` → filter to Posts (pain signal)
4. `"dermatologist" "prior auth" OR "prior authorization"` → filter to Posts (pain signal)
5. `"independent practice" "burnout" "admin"` → filter to Posts

**Signal to capture per prospect**
- Full name, LinkedIn URL, title, practice name, location
- Quote from post expressing pain point + post URL
- Relevance score (1–10)

---

### Platform 2 — X (Twitter)

**Priority:** Medium-High (candid expression, public posts, searchable)
**Tool:** Playwright MCP (Chrome connector blocked on x.com)

**Search Queries**
1. `chiropractor "billing" OR "insurance" -job -hiring` → pain expressions
2. `chiropractor "patients stop" OR "drop off" OR "retention"` → retention pain
3. `#ChiroTwitter "frustrated" OR "nightmare" OR "problem"`
4. `dermatologist "prior auth" OR "insurance denied"` → billing pain
5. `#DermTwitter "admin" OR "paperwork" OR "burnout"`
6. `"private practice" "chiropractor" OR "dermatologist" "overwhelmed"`
7. `DC "overhead" OR "margins" OR "billing"`

**Filters**
- Language: English
- Date: Last 6 months (recent pain = active problem)
- Exclude: job listings, news articles, promotional content

**Signal to capture per prospect**
- Username, profile URL, display name, bio/title
- Tweet text (pain quote) + tweet URL
- Follower count (proxy for influence/community standing)

---

### Platform 3 — Reddit

**Priority:** High for chiropractors (r/chiropractic is very active), Medium for dermatologists

**Target Subreddits**

| Subreddit | Focus | Priority |
|---|---|---|
| r/chiropractic | DC community, business + clinical | High |
| r/ChiropracticAssistants | Front-desk/billing pain from the inside | Medium |
| r/Dermatology | Derm community, some practice management | Medium |
| r/MedicalBilling | Billing pain across specialties | High |
| r/medicine | General physician burnout, admin frustration | Medium |
| r/smallbusiness | Practice owners venting about operations | Medium |
| r/physicaltherapy | Wave 2 preview — PT pain similar to chiro | Low |

**Search Queries per Subreddit**

*r/chiropractic*
- "patients stop coming" | "drop off" | "treatment plan"
- "billing" | "insurance" | "claim denied"
- "software" | "EHR" | "ChiroTouch" | "Jane App"
- "overhead" | "margins" | "struggling"

*r/MedicalBilling*
- "chiropractic" + "denied" | "write-off" | "underpayment"
- "dermatology" + "prior auth" | "appeal" | "denial"

*r/Dermatology*
- "private practice" | "solo practice"
- "prior auth" | "insurance" | "billing"
- "no show" | "cancellation"

**Signal to capture per prospect**
- Reddit username, profile URL
- Post/comment text (pain quote) + post URL
- Subreddit + post karma (proxy for community engagement)
- Account age (older = more established community member)

---

## Qualification Criteria

A prospect is **qualified** if they meet ALL of the following:

1. **Role match**: Chiropractor (DC) or Dermatologist (MD/DO) in independent/private practice — NOT employed by hospital system or PE-backed group
2. **Pain evidence**: Has publicly expressed at least one of the target pain points in their own words (direct quote captured)
3. **Reachability**: Has a contactable profile (LinkedIn URL, Twitter handle, Reddit username with post history)
4. **Geography**: Seattle-area for design partner tier; US-wide for general pipeline

**Relevance Score (1–10)**
- 9–10: Expressed acute pain, independent practice owner, Seattle area, recent post
- 7–8: Expressed pain, independent practice, US-wide OR Seattle area (not both)
- 5–6: Pain expressed but role unclear or practice type uncertain
- Below 5: Skip — do not record

---

## Output Format

File: `docs/customer-development/users-to-target-2026-04-24.csv`

Columns:
```
Name, Platform, ProfileURL, Title, Practice, Location, PainQuote, PostURL, RelevanceScore, Segment, Notes
```

---

## Lighthouse Prospect Criteria

Top 3–5 prospects identified by:
1. Highest relevance score (9–10)
2. Seattle location (design partner priority)
3. Most articulate expression of pain (best quote for hypothesis validation)
4. Apparent openness to conversation (active poster, public profile)
