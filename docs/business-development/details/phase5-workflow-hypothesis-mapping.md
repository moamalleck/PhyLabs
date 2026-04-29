# Phase 5: Workflow Hypothesis Mapping
**Date:** 2026-04-27
**Job:** business-idea-validation-and-scoping
**Project:** PhysicianLabs

---

## Three Core Workflow Patterns

### W1: The Revenue Cycle Grind (H3 focus)
**Trigger:** Patient seen → revenue collection begins

Steps: Insurance eligibility → documentation → coding → claim submission → adjudication → payment/denial → denial management → patient billing → collections

**JTBD:**
- Functional: Get paid for every patient, accurately and on time
- Emotional: Feel confident billing is handled without my involvement
- Social: Run a financially well-managed clinic

**Key Pain Points:**
- 68% of providers struggle to submit clean claims (2025)
- Initial denial rate: 11.8% in 2024 (HFMA benchmark: <5%)
- 80% of bills contain coding errors
- 30% revenue leakage from billing delays

**Workarounds:** In-house biller, outsourced billing (6–8% cut), EHR module (misconfigured), manual spreadsheets

**Mom Test Questions:**
1. "Walk me through the last time a claim got denied. What did you do next?"
2. "How do you know if your collection rate is good or bad for your specialty?"
3. "What does your billing person spend most of their day on?"
4. "Have you ever lost revenue you didn't realize until later?"

---

### W2: The Practice Launch Gauntlet (H2 focus)
**Trigger:** Physician decides to open → races against empty cash clock

Steps: Entity formation → NPI numbers → credentialing (90–120 days per payer) → EHR setup → clearinghouse → billing config → first patients → 30–90 day payment lag → CASH CRISIS (months 2–4)

**JTBD:**
- Functional: Be operationally ready to bill and collect on day one
- Emotional: Feel like I didn't make a catastrophic financial mistake
- Social: Be seen as a competent physician-entrepreneur

**Key Pain Points:**
- 65% of clinics open without full payer enrollment
- Payer credentialing: 90–120 day lag (silent killer)
- Cash flow gap: 30–90 days to first payment; needs 3–6 months operating capital
- Leading cause of early practice failure: insufficient working capital

**Workarounds:** Practice consultant ($5–15K), billing company from day one, family admin help, delay opening

**Mom Test Questions:**
1. "What was the most operationally stressful part of your first 90 days?"
2. "When did your first insurance payment arrive — were you prepared for that wait?"
3. "Did you hire anyone for setup? What did that cost?"
4. "What would you tell a colleague about to open their own clinic?"

---

### W3: The Patient Retention Leak (H1 + H4 cross-cut)
**Trigger:** First visit completed → practice attempts to retain patient

Steps: Visit complete → follow-up scheduled (or not) → reminder sent (or not) → no-show/cancel → no re-engagement → patient lost

**JTBD:**
- Functional: Keep patients returning without manual follow-up effort
- Emotional: Feel I'm providing continuity of care, not just transactions
- Social: Build a reputation for being attentive and accessible

**Key Pain Points:**
- No-show rate: 5–30% depending on specialty
- No structured re-engagement when patients go silent
- Inconsistent post-visit follow-up (staff-dependent)

**Workarounds:** Manual calls, mass email reminders (ignored), EHR patient portal (low adoption)

**Mom Test Questions:**
1. "What happens when a patient misses an appointment — what's the process?"
2. "How do you know which patients haven't come back in 6+ months?"
3. "Have you ever calculated how much a no-show actually costs you?"

---

## JTBD Priority Matrix

| Workflow | Pain Intensity | Frequency | PhysicianLabs Fit | Priority |
|----------|---------------|-----------|-------------------|---------|
| W1: RCM Grind | Critical | Daily | RCM automation module | 1st |
| W2: Launch Gauntlet | Critical | Once/high-stakes | Launch OS module | 2nd |
| W3: Retention Leak | High | Daily | Engagement module | 3rd |

---

## Hypothesis Alignment

| Hypothesis | Evidence | Status |
|-----------|----------|--------|
| H3: 15–30% revenue loss from RCM failures | 11.8% denial rate, 68% can't submit clean claims, 30% leakage | ✅ Strongly confirmed |
| H2: Post-launch cash crisis is the trigger | 30–90 day payment lag, 65% open without full payer enrollment | ✅ Strongly confirmed |
| Integration layer removes EHR objection | All workflows assume EHR exists — integration layer is natural | ✅ Confirmed |

---

## Recommended Discovery Opener
Lead with W2: "What was the most operationally stressful part of your first 90 days?" — emotionally resonant, opens RCM and intake pain simultaneously.
