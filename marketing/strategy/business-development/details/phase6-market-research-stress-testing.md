# Phase 6: Market Research & Stress Testing
**Date:** 2026-04-27
**Job:** business-idea-validation-and-scoping
**Project:** PhysicianLabs

---

## Competitive Landscape — Top 3 Direct Competitors

### 1. Tebra (tebra.com)
- Raised $250M in January 2026 to accelerate AI across RCM, clinical docs, and practice marketing
- AI Note Assist: 500K+ notes generated, 60% documentation time savings
- AI-powered RCM: automated coding, claim generation, denial prevention
- Patient engagement: AI Review Replies (45% increase in website clicks)
- Pricing: $99–$399/provider/month
- **Critical weakness**: Requires full EHR migration — no integration layer

### 2. athenahealth (athenahealth.com)
- 98.4% clean claim rate on first submission
- athenaAmbient: AI scribe embedded into athenaOne
- Best in KLAS 2025 for Independent Physician Practice Suite
- Pricing: 3–7% of collections (5–7% for solo/small practices)
- **Critical weakness**: Expensive for low-volume practices; steep setup; limited customization

### 3. eClinicalWorks (eclinicalworks.com)
- Comprehensive but complex; not purpose-built for solo/small practices
- Better suited to 5+ provider practices with dedicated admin staff

---

## Competitive Matrix

| Capability | PhysicianLabs | Tebra | athenahealth | Outsourced Billing | DIY |
|-----------|:---:|:---:|:---:|:---:|:---:|
| Sits on top of existing EHR (integration layer) | ✅ | ❌ | ❌ | N/A | N/A |
| Pricing for solo practice | ~$250/mo | $99–$399/mo | 5–7% collections | 6–8% collections | $0 |
| Launch OS / credentialing guidance | ✅ | ❌ | ❌ | ❌ | ❌ |
| Specialty benchmarking vs. peers | ✅ | ❌ | Partial | ❌ | ❌ |
| AI denial prevention | Planned | ✅ | ✅ | Partial | ❌ |
| Patient engagement + retention | ✅ | ✅ | Partial | ❌ | ❌ |
| No EHR migration required | ✅ | ❌ | ❌ | ✅ | ✅ |

**Core differentiator**: Only player working *with* the existing EHR at a small-practice price point, with a Launch OS for new clinics.

---

## Workaround Mapping

| Workaround | Cost | Why It Fails |
|-----------|------|-------------|
| Outsourced billing service | 6–8% of collections | Opaque; slow; doesn't fix root cause |
| In-house biller | $40–60K/yr | Overwhelmed; high turnover |
| Manual spreadsheets | Free | No real-time data; errors compound |
| EHR bundled billing module | Included | Misconfigured at setup |
| Do nothing | Free | 30% revenue leakage |

---

## Community Sentiment Signals

- "AI billing platforms were built for large health systems" — small practice is perpetually underserved
- 41% of providers report >1 in 10 claims denied — getting worse, not better
- Top Tebra complaints: customer service, clunky multi-step workflows, forced platform migration
- Top athenahealth complaints: expensive for low-volume, limited customization, support delays
- No commercial "Clinical OS" category exists — label is unclaimed

---

## Killer Scenarios

### Scenario 1: Tebra builds the integration layer
$250M + AI roadmap = they could ship "bring your own EHR" mode in 12–18 months.
**Mitigation**: Move fast; claim "Clinical OS" category label before they do.

### Scenario 2: FHIR API access is too expensive/fragmented
Epic's small-practice API quality varies; older EHRs have poor FHIR support.
**Mitigation**: Launch with 2–3 EHRs with cleanest APIs (athenahealth, DrChrono, Elation). Don't promise universal integration on day one.

### Scenario 3: Independent physician consolidation accelerates past viability
22.4% independent in 2024; if it drops below 12% by 2029, SAM shrinks too far.
**Mitigation**: Design architecture now to expand to employed physician groups in Year 2–3.

---

## Mentor Session Insights — David Jorjani (Apr 28, 2026)

**Source**: 25-minute customer/mentor conversation. David's partner is an Internal Medicine resident pursuing oncology fellowship — explicitly NOT the ICP (academic medicine track).

### Key Insights

1. **Counter-persona confirmed**: Physicians on academic/fellowship tracks don't feel the independent practice pain. ICP is physicians who have *decided* to go independent.

2. **ICP specialty narrowed**: Dermatology + Physiotherapy confirmed as beachhead:
   - Recurring patient flow
   - Sufficient margins (often direct-pay or high reimbursement)
   - Stronger willingness to pay than debt-burdened general residents

3. **"Business Doula" positioning**: Most compelling entry pitch — "I know all 50 steps to open a clinic. I'll get it done for half the cost." More concrete than "Clinical OS" for first conversations.

4. **Alex Hormozi Gym Launch analogy**: Patient intake/pipeline for new clinic = gym member acquisition. Proven playbook template. Front-loaded value, referral engine, systematised intake funnel.

5. **Medical school debt = pricing constraint**: Early-career doctors carry significant debt. Flat SaaS pricing will create friction. Milestone/outcome-based pricing better fits the H2 segment.

6. **Willingness to pay trigger still unknown**: #1 customer discovery objective. At what specific moment does the physician reach for their wallet?

7. **Recommended discovery approach**: Interview 5 dermatology + 5 physiotherapy graduating residents at UW (graduation season approaching). Ask only "how did you make this decision?" — not "would you use my product?"

8. **Reading list**: The Mom Test (Rob Fitzpatrick), Pull Framework (Rob Schneider)

---

## Updated ICP (Post-Mentor)

| Dimension | Profile |
|-----------|---------|
| Role | Dermatologist or Physiotherapist, physician-owned practice |
| Stage | Decision made to open independent clinic (0–12 months pre-launch) OR months 2–6 post-launch |
| Geography | Seattle/Pacific NW first (UW pipeline), then expand by specialty |
| Debt situation | Likely carrying medical school debt — outcome/milestone pricing preferred |
| Pain trigger | "I decided to open my clinic and don't know the 50 steps" |
| Willingness to pay | Unvalidated — #1 discovery priority |

---

## Updated Hypothesis State

| Hypothesis | Status |
|-----------|--------|
| H3: Revenue Leakage | Confirmed downstream — H2 is the wedge, H3 is the upsell |
| H2 ICP timing | Shifted to "decision made to go independent" (pre-launch, 0–12 months) |
| H2 pricing | Milestone/outcome-based for early cohort; SaaS later |
| H2 entry pitch | "Business Doula for clinic launches" → PhysicianLabs OS |
| Willingness to pay trigger | Unknown — top priority for next 10 customer conversations |

---

## Validation Verdict: PERSEVERE with three refinements

1. Claim "Clinical OS" category label now — before Tebra does
2. EHR integration: launch with 2–3 EHRs only (athenahealth, DrChrono, Elation)
3. Build architecture for portability to employed physician groups (Year 2–3)
