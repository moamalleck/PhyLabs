# Customer Persona — PhysicianLabs
**Created:** 2026-04-24
**Job:** customer-prospect-discovery
**Geography:** Seattle (design partners) → US (MVP)

---

## Problem Context

Independent medical practices are the backbone of American healthcare and are collapsing under administrative load and systemic inefficiency. Physicians are trained as clinicians, not operators. The resulting gap — no business infrastructure, no admin leverage — leads to shrinking margins, patient churn, and clinician burnout. The fix must be bottom-up: at the local patient-doctor engagement level, through the right economics.

---

## Wave 1 Segments

### Segment A — Independent Dermatologist (Owner-Operator)

**Profile**
- Solo or small group practice (1–5 providers)
- Mix of medical dermatology (insurance) + aesthetic/cosmetic (cash-pay)
- Often the sole decision-maker on software and operations
- Manages 15–30 patient appointments per day
- Staff: 1–3 MAs, 1 front desk, no dedicated billing team

**Job-To-Be-Done**
> "Run a financially healthy practice without spending my evenings on admin I was never trained to do."

**Core Pain Points** *(ranked by frequency in online discourse)*
1. **Prior authorization drag** — medical derm procedures (biologics for psoriasis, Mohs surgery referrals) require prior auths that consume 2–4 hours/week of staff time and delay patient care
2. **Billing complexity & claim denials** — two billing tracks (insurance + cash) with different workflows; denial rates >15% common at small practices without dedicated billing staff
3. **Patient no-shows & last-minute cancellations** — especially costly for aesthetic slots (botox, filler) that can't be easily backfilled; direct revenue loss per slot: $300–$800
4. **Patient acquisition & retention** — competing with Dermatology Partners, DOCS, and PE-backed chains with marketing budgets; patients churn if booking is cumbersome
5. **Documentation burden** — HIPAA-compliant note templates, prior auth letters, patient communication — all manual or fragmented across tools

**Willingness to Pay**
- High — a dermatologist billing $600K–$1.2M/year will pay $300–$800/month for tools that protect 1–2% of revenue
- Decision trigger: tool must demonstrably reduce denials or recover no-show revenue

**Search Behavior**
- LinkedIn: professional updates, groups (Dermatology Business, Independent Practice Owners)
- Reddit: r/Dermatology (clinical), r/MedicalBilling, r/smallbusiness
- X/Twitter: #DermTwitter, #PhysicianLife, #MedBiz
- Preferred contact: DM on LinkedIn, warm intro via association (AAD, state derm societies)

**Segmentation Score**
| Criterion | Score (1–5) |
|---|---|
| Pain Intensity | 4 |
| Market Size (US) | 3 (~8,000 independent derm practices) |
| Willingness to Pay | 5 |
| Distribution Ease | 3 (tight, trust-based community) |
| Competitive Underservice | 4 (most EHRs not derm-specific) |
| **Total** | **19/25** |

---

### Segment B — Independent Chiropractor (Owner-Operator)

**Profile**
- Solo or small group clinic (1–3 DCs)
- Mix of insurance (auto/workers comp/health) + cash-pay patients
- High visit volume: 20–50 patients/day
- Staff: 1–2 CAs (chiropractic assistants), often no dedicated biller
- Tight margins: overhead 55–70% of collections

**Job-To-Be-Done**
> "Stop losing money to billing errors, patient drop-off, and overhead I can't control — and actually grow my practice."

**Core Pain Points** *(ranked by frequency in online discourse)*
1. **Billing complexity** — chiropractic billing is notoriously difficult; Medicare caps, auto-injury billing (PIP), workers' comp lien tracking all require specialist knowledge most solo DCs lack
2. **Patient retention / drop-off** — chiropractic care plans require 12–24 visits; patients "feel better" and stop coming after 3–4; practices lose 40–60% of treatment plan revenue
3. **Insurance write-offs & underpayments** — payers routinely underpay; small practices lack audit muscle to catch systematic underpayment
4. **Competing with The Joint Chiropractic** — $29/visit membership model draws price-sensitive patients; independent DCs can't match on price, must win on relationship and outcomes
5. **Documentation burden** — SOAP notes for every visit; compliance audits require meticulous records; manual note-taking kills 30–45 min/day

**Willingness to Pay**
- Moderate-High — average DC collects $300K–$600K/year; will pay $150–$400/month for tools that reduce billing leakage or improve retention
- Decision trigger: clear ROI on recovered revenue or patient reactivations

**Search Behavior**
- LinkedIn: professional posts, ChiroEco articles shared, DC associations
- Reddit: r/chiropractic, r/ChiropracticAssistants, r/smallbusiness
- X/Twitter: #ChiroTwitter, #ChiropracticLife, #DClife
- Facebook Groups: Chiropractic Business Owners (private, active)
- Preferred contact: Facebook group, state chiro association events, warm peer intro

**Segmentation Score**
| Criterion | Score (1–5) |
|---|---|
| Pain Intensity | 5 |
| Market Size (US) | 4 (~35,000 independent chiro practices) |
| Willingness to Pay | 3 |
| Distribution Ease | 4 (organized associations, active FB groups) |
| Competitive Underservice | 5 (chiro software options are notoriously poor) |
| **Total** | **21/25** |

---

## Wedge Hypothesis

Based on segmentation analysis, **Chiropractors are the stronger initial wedge**:
- Larger addressable market (35K vs. 8K independent practices)
- Higher pain intensity (billing + retention both acute)
- More accessible community (Facebook groups, state associations)
- Competitive software landscape is weak (Jane App, ChiroTouch, Genesis — all receiving negative feedback online)

**The specific pain point to focus on for initial build:**

> **Patient retention + treatment plan adherence** — this is where chiropractors lose the most revenue (40–60% of treatment plan value), it's emotionally resonant (they want to see their patients get better), and a software-solvable problem (automated follow-up, re-activation campaigns, outcome tracking).

This wedge: (a) doesn't require billing integration on day one, (b) has a clear measurable ROI, (c) differentiates from EHRs which don't touch the retention problem.

**Validation target**: Confirm this hypothesis via platform discovery — look for chiropractors and dermatologists expressing retention/drop-off pain in their own words online.

---

## Wave 2 Segments (Planned)

| Segment | Key Pain | When to Enter |
|---|---|---|
| Mental Health Providers | No-shows, insurance credentialing, note burden | After Wave 1 product-market fit |
| Physiotherapists | Patient compliance, insurance authorization, home exercise adherence | After Wave 1 product-market fit |
