# Phase 7: Feature Synthesis (Revised)
**Date:** 2026-05-11
**Job:** business-idea-validation-and-scoping
**Project:** PhysicianLabs
**Supersedes:** `phase7-feature-synthesis.md` (2026-04-27)
**Change rationale:** H4 (Patient Retention / Plan-of-Care Completion) elevated to co-equal primary wedge per competitive SWOT (2026-05-07). Original Phase 7 placed retention features in Tier 2; this revision promotes them to Tier 1 and identifies the Hero Feature accordingly.

---

## Validated Direction (Input)

Two co-equal primary wedges confirmed from Phase 6 extended evaluation:

| Wedge | Customer | Entry Signal | Competition |
|---|---|---|---|
| **H2 -- Launch Gauntlet** | Pre-launch physician (derm, PT, chiro; final 18 months of training) | "I decided to go independent and don't know the 50 steps" | Zero direct competitors |
| **H4 -- Plan-of-Care Completion** | Established independent PT and chiro owner | "70% of my patients quit before finishing their care plan -- I'm losing $162K/year" | Zero competitors in this specific category |

---

## Step 1: Full Feature Brainstorm

All features grouped by the problem they solve:

### H2 (Launch Gauntlet) Features

| ID | Feature | Pain Solved |
|---|---|---|
| A1 | **Clinic Launch Checklist & 50-Step Tracker** | No structured guide to the 50 legal, credentialing, billing, and patient acquisition steps required before opening |
| A2 | **Payer Credentialing Timeline Manager** | 90 to 120 day payer credentialing lag is the most expensive operational mistake; 65% of clinics open without full payer enrollment |
| A3 | **Working Capital & Cash Flow Planner** | Physicians do not account for the 30 to 90 day payment lag after first patient; 92% hit a cash crisis at months 2 to 4 |
| A4 | **Patient Pipeline Builder** | No structured intake funnel or referral tracking before the first patient arrives |
| A5 | **Entity Formation Guide (WA State)** | PLLC vs. PLLC-S election, registered agent, state licensing -- physicians do not know which applies |

### H4 (Plan-of-Care Completion) Features

| ID | Feature | Pain Solved |
|---|---|---|
| B1 | **Episode Drop-Off Risk Dashboard** | Identifies patients at risk of abandoning their care plan before they go silent -- currently invisible to every practice management tool |
| B2 | **Automated Re-engagement Sequences** | No structured re-engagement mechanism exists when a patient misses appointments; manual calls are inconsistent and staff-dependent |
| B3 | **Plan-of-Care Completion Tracker** | No KPI exists for "what percent of my patients finish their authorized plan" -- practices cannot manage what they cannot measure |
| B4 | **Recovered Revenue Counter** | No tool shows the physician the dollar value of patients brought back -- the ROI is invisible until made explicit |
| B5 | **At-Risk Patient Alert (same-day flag)** | Real-time alert when a patient's pattern suggests imminent drop-off (2+ missed reschedule attempts, plateaued pain scores) |

### Cross-Wedge / Growth Features

| ID | Feature | Pain Solved |
|---|---|---|
| C1 | **Specialty Benchmarking Report** | "I don't know if my episode completion rate or denial rate is good or bad for my specialty" -- uses CMS aggregate data; no PHI required; viral sharing asset |
| C2 | **EHR Data Import (CSV / FHIR-lite)** | Manual data entry is the alternative; lightweight import from WebPT, ChiroTouch, athenahealth eliminates it |
| C3 | **Denial Rate Pre-Check** | Surface the most common coding errors before claim submission using EHR export -- Year 1 entry hook for H3 |

---

## Step 2: Value vs. Complexity Matrix

**Value axis:** Does solving this directly generate or protect measurable revenue for the physician, within 30 days of activation?

**Complexity axis:** Time and engineering effort to ship a working MVP version, with a non-technical founder and 1 to 2 engineers.

| Feature | Value to Physician | MVP Complexity | Quadrant |
|---|---|---|---|
| B1 Episode Drop-Off Risk Dashboard | HIGH -- directly quantifiable in $ per recovered episode | LOW-MEDIUM -- patient list + days-since-last-visit logic; CSV input at MVP | **Hero Zone** |
| B4 Recovered Revenue Counter | HIGH -- makes ROI visible and shareable | LOW -- calculation on top of B1 data | **Hero Zone** |
| B3 Plan-of-Care Completion Tracker | HIGH -- creates the KPI that B1 and B4 depend on | MEDIUM -- requires visit-count-vs-authorized-count logic | **Hero Zone** |
| A1 Clinic Launch Checklist & Tracker | HIGH -- removes the information vacuum at the highest-anxiety moment | LOW -- checklist + calendar; Wizard of Oz at launch | **Strong Supporting** |
| A2 Payer Credentialing Timeline Manager | HIGH -- prevents the most expensive operational mistake | LOW -- date-based alerts; no EHR integration required | **Strong Supporting** |
| B2 Automated Re-engagement Sequences | HIGH -- extends B1 into action | MEDIUM -- SMS/email dispatch with template library | **Strong Supporting** |
| C1 Specialty Benchmarking Report | HIGH (acquisition) -- viral sharing asset; free entry hook | MEDIUM -- CMS data aggregation + report generation | **Growth / Acquisition** |
| A3 Working Capital & Cash Flow Planner | MEDIUM-HIGH -- prevents cash crisis | MEDIUM -- projection model; no live data required | **Supporting** |
| A4 Patient Pipeline Builder | MEDIUM -- useful but not immediately revenue-quantifiable | MEDIUM | **Supporting** |
| C2 EHR Data Import | MEDIUM (enabler) -- reduces friction on all H4 features | HIGH -- EHR-specific connectors; FHIR certification | **Year 2** |
| B5 At-Risk Patient Alert | HIGH -- proactive vs. reactive | HIGH -- requires behavioral pattern detection; ML at scale | **Year 2** |
| C3 Denial Rate Pre-Check | MEDIUM -- Year 1 H3 hook | MEDIUM | **Supporting** |
| A5 Entity Formation Guide | MEDIUM -- valuable but one-time | LOW | **Supporting** |

---

## Step 3: Prioritized Feature Set

### Hero Feature

**B1 + B4 + B3: The Episode Retention Engine**

> "A dashboard that shows which patients are about to quit their plan of care -- before they go silent -- and tells you exactly how many dollars you recovered when they came back."

These three features are inseparable at MVP: the completion tracker (B3) provides the measurement baseline, the drop-off risk dashboard (B1) surfaces the at-risk patients, and the recovered revenue counter (B4) makes the ROI visible and shareable. Together they form a single coherent product that no competitor has.

**Why this is the Hero and not a Launch Gauntlet feature:**

The H4 Hero Feature has one structural advantage over H2: the ROI does not depend on validating a willingness-to-pay trigger. The $162,000/year in lost episode revenue is a documented, already-occurring cost. Every established PT and chiro owner is paying it right now. The pitch is not "would you pay for this?" -- it is "here is what you are currently losing, and here is what one recovered patient per week covers." H2, while equally uncontested, still carries the unresolved WTP question. Running H4 in parallel validates the product model while the H2 customer discovery sprint runs.

**Hero Feature MVP scope:**

| Component | MVP Definition | Engineering Effort |
|---|---|---|
| Plan-of-Care Completion Tracker (B3) | Per-patient episode progress bar: visits completed / visits authorized. Completion rate % across all active episodes. | 1 to 2 weeks |
| Episode Drop-Off Risk Dashboard (B1) | Sorted list of patients by days since last visit. Flag: "not rebooked," "missed rescheduling attempt." Manual or CSV-imported data at launch. | 1 week |
| Recovered Revenue Counter (B4) | Monthly "recovered revenue" tally: patients who were flagged at risk, received re-engagement, and rebooked. Dollar value per recovered episode. | 3 to 5 days |

**Total Hero MVP: 3 to 5 weeks. Single engineer.**

---

### Supporting Feature 1: Automated Re-engagement Sequences (B2)

The Hero Feature surfaces the problem. This feature solves it. A library of 3 to 5 pre-written re-engagement message templates (SMS and email), triggered one-click from the Episode Drop-Off Risk Dashboard. The physician selects a patient, selects a template, and the message goes out. In a later iteration, this becomes a scheduled automation triggered by drop-off risk score.

**MVP scope:** One-click SMS dispatch from dashboard. Pre-written templates for PT ("Your plan calls for 2 more visits -- let us get you back on track") and chiro ("Your care plan has you at visit 6 of 12 -- finishing the corrective phase is what prevents the pain from returning"). HIPAA-compliant SMS provider (Twilio, with BAA).

**Why it must ship alongside the Hero:** The drop-off risk dashboard without re-engagement is a report, not a product. Physicians need the action, not just the diagnosis.

---

### Supporting Feature 2: Clinic Launch Checklist & 50-Step Tracker (A1)

The primary H2 entry point. A structured, state-specific (WA State at launch) checklist of every operational step required to open a derm or PT clinic: entity formation, NPI registration, payer credentialing, EHR selection, billing configuration, malpractice insurance, and patient acquisition planning. Each step has a status (not started, in progress, complete), a deadline, and a plain-language explanation of what to do and why.

**MVP scope:** Google Sheet or Notion template for the first 3 to 5 design partners (Wizard of Oz). The founder personally walks each design partner through the checklist. Software build triggered only after 3+ pilots have identified which steps generate the most questions.

**Why it belongs in Tier 1 despite the Wizard of Oz delivery:** The design partner validation run generates the product specification. Starting with a live checklist and a human guide is faster and more informative than building a web app for an unvalidated checklist structure.

---

### Supporting Feature 3: Payer Credentialing Timeline Manager (A2)

The single most expensive operational mistake a new independent physician makes: not starting payer credentialing on day one because they do not know it takes 90 to 120 days. A calendar-driven tracker that shows each payer's application status, the expected approval date, and a deadline alert when the credentialing window is at risk.

**MVP scope:** A pre-populated spreadsheet of WA State's top 10 payers (Regence, Premera, Aetna, UHC, Cigna, L&I, Medicaid, Medicare, BCBS of WA, First Choice) with average processing times, application URL, and CAQH status. Status column updated manually by the physician. Automated deadline reminders via email.

**Dependency:** Requires the 50-step checklist to already exist (A1) as the context for where credentialing fits in the sequence.

---

### Supporting Feature 4: Specialty Benchmarking Report (C1)

A monthly one-page report showing each practice's key metrics vs. specialty peers: episode completion rate (H4), initial denial rate (H3), and average collection time. Uses CMS public aggregate data for benchmarks -- no private PHI required. The report is shareable, which activates the viral growth loop: practice owners post it in PTOC and APTA PPS, peers request access.

**MVP scope:** Static PDF generated monthly by aggregating the practice's own data (from the Episode Retention Engine) against published CMS benchmarks. Later: auto-generated and emailed.

**Why it belongs in Tier 1:** It is the viral acquisition asset that converts PTOC community engagement into a pipeline. The benchmark report is what turns a satisfied customer into a referral source.

---

### Supporting Feature 5: Working Capital & Cash Flow Planner (A3)

A projection model that estimates the cash gap between first patient visit and first insurance payment (30 to 90 days), calculates operating capital required for 3 to 6 months at projected volume, and flags the specific credentialing approvals whose delay extends the gap. This is the financial equivalent of the A2 timeline manager.

**MVP scope:** A parameterized spreadsheet model (specialty, expected patients/week, payer mix %) that outputs: earliest possible insurance payment date, total operating capital required, and which payer credentials must clear first to minimize the gap.

**Dependency:** A2 (Credentialing Timeline Manager) provides the input for which credentialing approvals have the longest lead times.

---

## Step 4: Final Prioritized Feature Summary

### Hero Feature

| Feature | Rationale |
|---|---|
| **Episode Retention Engine** (B3 + B1 + B4) | Zero competition; self-funding ROI ($162K/yr in lost revenue vs. $250-400/month); immediately quantifiable; viral sharing mechanism; community distribution channel ready (PTOC); SimplePractice dislocation window live |

### Supporting Features (Tier 1 -- Ship in first 90 days)

| Feature | Wedge | Rationale |
|---|---|---|
| **Automated Re-engagement Sequences** (B2) | H4 | Hero Feature requires this to be actionable, not just diagnostic |
| **Clinic Launch Checklist & 50-Step Tracker** (A1) | H2 | Primary H2 entry point; Wizard of Oz delivery; design partner run generates the product spec |
| **Payer Credentialing Timeline Manager** (A2) | H2 | Prevents the most expensive operational mistake; highest-urgency H2 feature; low engineering effort |
| **Specialty Benchmarking Report** (C1) | Cross | Viral acquisition asset; free entry hook for H3; activates the PTOC referral loop |

### Supporting Feature (Tier 1 -- Ship by Day 60)

| Feature | Wedge | Rationale |
|---|---|---|
| **Working Capital & Cash Flow Planner** (A3) | H2 | Addresses the cash crisis that kills 92% of new clinics; completes the H2 wedge product with a financial safety layer alongside A1 and A2 |

---

## Value vs. Complexity: Final Visual

```
HIGH VALUE
    |
    |  [B3+B1+B4]      [B2]
    |  Hero Engine   Re-engagement
    |
    |  [A1]  [A2]     [C1]
    |  Checklist  Cred  Benchmark
    |
    |  [A3]
    |  Cash Plan
    |
    +---------------------------------> LOW COMPLEXITY       HIGH COMPLEXITY
                                        (Ship fast)          (Year 2)
                                                   [C2 EHR]  [B5 ML]
```

---

## JTBD Alignment

| Feature | Functional Job | Emotional Job |
|---|---|---|
| B3+B1+B4 Episode Retention Engine | See exactly which patients are about to quit, and measure the revenue I recover | Feel like I am providing continuity of care, not just filling appointment slots |
| B2 Re-engagement Sequences | Take action on at-risk patients without spending admin time on manual follow-up | Know that my patients got better because they came back |
| A1 Launch Checklist | Know exactly what to do and when across all 50 steps | Feel in control and not alone during the most overwhelming transition of my career |
| A2 Credentialing Manager | Never miss a credentialing deadline or be surprised by the 90-day lag | Stop dreading the cash crisis I've heard about from colleagues |
| C1 Benchmarking Report | Know whether my episode completion rate and denial rate are good for my specialty | Feel like a financially competent physician-owner, not just a clinician |
| A3 Cash Flow Planner | Know exactly how much operating capital I need before I open | Not make a catastrophic financial mistake in the first 6 months |

---

## What Is Explicitly Out of Scope at MVP

| Feature | Reason for deferral |
|---|---|
| EHR Integration / FHIR connector (C2) | Requires 3 to 6 months of integration work; CSV import is sufficient for first 5 design partners |
| Claims Submission & RCM module (H3) | Clearinghouse certification required; sequenced to Year 2 |
| AI-powered coding suggestions | Requires scale data; Year 2 |
| Multi-location support | Requires organizational data model; Year 2 |
| At-risk patient ML scoring (B5) | Requires behavioral data history; starts as rules-based, upgrades to ML after 3 months of data |

---

*Prepared by FRAIM AI Agent -- ash.malleck@gmail.com session -- 2026-05-11*
