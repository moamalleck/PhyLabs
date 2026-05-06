# Business Plan: PhysicianLabs
**Created:** 2026-05-05
**Job:** business-plan-creation
**Status:** Draft v1 — Pending founder review
**Artifact:** `docs/business-development/business-plan.md`

---

## 🎯 Executive Summary

PhysicianLabs is building the **Clinical Operating System for independent physician-owned practices** — an integration layer that sits on top of existing EHRs and automates the three operational pillars clinic owners struggle with most: patient retention, revenue cycle management (RCM), and practice launch operations.

**The market**: ~165,751 physician-owned US practices. The serviceable addressable market is ~100,000 practices (1–5 physicians, fee-for-service, EHR-equipped), representing a **$480M SAM** at $4,800 blended ARPU. The independent practice software category is growing at **8.96–10.54% CAGR** ([Towards Healthcare, 2025](https://www.towardshealthcare.com/insights/practice-management-system-market-sizing)).

**The beachhead**: Physicians opening their first independent clinic — the pre-launch moment where no competitor exists. The wedge product, *PhysicianLabs Launch*, is a "Business Doula" concierge OS that walks new clinic owners through the 50 operational steps they don't know they need — credentialing, entity formation, payer enrollment, billing configuration, and patient pipeline setup.

**The competitive window**: Tebra raised $250M in January 2026 ([Yahoo Finance](https://finance.yahoo.com/news/private-practice-platform-tebra-secures-133000483.html)); Jane App is valued at $1.8B ([BetaKit](https://betakit.com/jane-software-to-be-reportedly-valued-at-1-8-billion-in-upcoming-secondary-financing/)). Both require full EHR migration and don't serve pre-launch physicians. The category label — "Clinical Operating System" — is unclaimed. PhysicianLabs must claim it within 6 months.

**Traction status**: Pre-MVP. Design partner recruiting begins immediately. Target: 5 signed design partners by Day 90, $60K MRR by Month 12.

**Business model**: Hybrid SaaS + services. Milestone-based pricing for the launch segment; tiered SaaS + services for established practices. Year 1 unit economics: LTV:CAC of 19–29:1 across all segments.

---

## 🧭 Part 1: Market Segments Overview

### Segment Comparison Matrix

| Criterion | New Clinic Launcher | Independent PT | Independent Chiro | Independent Derm | Established Practice |
|---|:---:|:---:|:---:|:---:|:---:|
| Pain Intensity | 5/5 | 5/5 | 5/5 | 4/5 | 3/5 |
| Market Size (US) | ~20K new/yr | ~50K practices | ~35K practices | ~8K practices | ~80–100K practices |
| Willingness to Pay | Unvalidated | 4/5 | 3/5 | 5/5 | 3/5 |
| Distribution Ease | 3/5 | 4/5 | 4/5 | 3/5 | 3/5 |
| Competitive Underservice | 5/5 | 5/5 | 5/5 | 4/5 | 3/5 |
| **Priority** | 🥇 **Wedge** | 🥇 **Scale** | 🥈 | 🥉 | Year 2 upsell |

### Primary Target Segments

**Segment 1 — New Clinic Launcher (Cross-specialty Wedge)**
- **Profile**: Any specialty physician who has decided to go independent; 0–12 months pre-launch or 0–6 months post-launch; carrying medical school debt; sole decision-maker
- **JTBD**: "Tell me the 50 steps I don't know. Don't let me fail in the first 6 months."
- **Core Pains**: (1) No structured guide to credentialing, entity formation, and billing setup; (2) 90–120 day credentialing lag catches most physicians by surprise; (3) 92% hit a cash crisis at months 2–4
- **Value Prop**: Be the Business Doula — a concierge-first launch OS that walks new clinic owners through every operational step before the cash crisis hits
- **Buying Process**: Trigger = decision to go independent. Pricing: $500 Launch Pack → $200/mo → +$150/mo RCM unlock. No upfront SaaS commitment
- **Distribution**: UW/Seattle residency alumni, state medical associations, specialty Facebook groups

**Segment 2 — Independent Physical Therapist (Owner-Operator)**
- **Profile**: Solo or small group clinic (1–3 DPTs), insurance + cash-pay mix, 10–30 patients/day, no dedicated biller, overhead 55–70% of collections
- **JTBD**: "Keep my patients on their plans, get paid for the work I do, and run a practice that doesn't eat me alive after hours."
- **Core Pains**: (1) Patient plan-of-care drop-off — 40–60% of episode revenue lost; (2) Prior auth burden — re-auth mid-episode, 10–20% denial rates; (3) Billing complexity — CPT 97xxx, workers' comp, PIP
- **Value Prop**: Recover 1–2 dropped episodes/month ($400–$1,200) through automated HEP follow-up and re-engagement; cut prior auth admin time
- **Buying Process**: Budget owner = clinic owner/DPT. Decision trigger: demonstrated recovered episode revenue within 30 days
- **Distribution**: PTOC Facebook Group (10K+ members), APTA Private Practice Section, r/physicaltherapy

**Segment 3 — Independent Chiropractor (Owner-Operator)**
- **Profile**: Solo or small group (1–3 DCs), insurance + cash-pay, 20–50 patients/day, no dedicated biller
- **JTBD**: "Stop losing money to billing errors, patient drop-off, and overhead I can't control."
- **Core Pains**: (1) Billing complexity — Medicare caps, PIP/auto, workers' comp lien tracking; (2) Care plan drop-off — 40–60% abandoned after 3–4 of 12–24 planned visits; (3) Systematic insurance underpayment
- **Value Prop**: Recover lost care plan revenue through automated re-engagement; plug billing leakage from denials and underpayments
- **Distribution**: ACA state chapters, Chiropractic Business Owners Facebook Group, r/chiropractic

**Segment 4 — Independent Dermatologist (Owner-Operator)**
- **Profile**: Solo or small group (1–5 providers), medical derm (insurance) + aesthetic/cosmetic (cash-pay), 15–30 patients/day
- **JTBD**: "Run a financially healthy practice without spending my evenings on admin I was never trained to do."
- **Core Pains**: (1) Prior auth drag — biologics, Mohs referrals; 2–4 hours/week staff time; (2) No-show revenue loss — aesthetic slots worth $300–$800/slot; (3) Dual billing track complexity
- **Value Prop**: Protect aesthetic revenue through no-show prevention and waitlist backfill; cut prior auth time in half
- **Distribution**: AAD, state dermatology societies; trust-based referral

---

## 📊 Part 2: Market Research Synopsis

### TAM / SAM / SOM

| Layer | Scope | Practices | ARPU/yr | Value |
|---|---|---|---|---|
| **TAM** | All US independent physician-owned practices | 165,751 | $4,800 | **~$796M** |
| **SAM** | 1–5 physician, fee-for-service, EHR-equipped, US | ~100,000 | $4,800 | **~$480M** |
| **SOM Year 1** | Seattle/Pacific NW beachhead | ~150 | $4,800 | **~$720K ARR** |
| **SOM Year 3** | 3% SAM penetration, West Coast | ~3,000 | $4,800 | **~$14.4M ARR** |

**Key market data**:
- Practice management software (global, 2025): $12.73B, **8.96% CAGR** — small practices (2–5 physicians) growing at **10.54% CAGR** ([Towards Healthcare](https://www.towardshealthcare.com/insights/practice-management-system-market-sizing))
- US RCM market (2025): $65.38B, **11.6% CAGR** ([Towards Healthcare RCM](https://www.towardshealthcare.com/insights/us-healthcare-revenue-cycle-management-market-sizing))
- PT software market (2025): **$1.43–1.54B**, 10.4–10.6% CAGR ([Precedence Research](https://www.precedenceresearch.com/physical-therapy-software-market))
- Chiropractic software (2025): **$185–287M**, 8.2–9.2% CAGR ([Growth Market Reports](https://growthmarketreports.com/report/chiropractic-practice-management-software-market))
- Dermatology software (2025): **$229–363M**, 10.6% CAGR ([Fundamental Business Insights](https://www.fundamentalbusinessinsights.com/industry-report/dermatology-software-market-10048))

> ⚠️ **Macro risk**: Independent physician practice ownership declining — 42.2% of physicians in private practice in 2024, down from 60.1% in 2012 ([AMA 2024](https://www.ama-assn.org/system/files/2024-prp-pp-characteristics.pdf)). The TAM window is narrowing. Architecture must extend to employed group practices (1–10 physicians, PE/hospital-owned) by Year 2–3.

### Competitive Forces (Porter's Five Forces)

| Force | Rating | Key Insight |
|---|---|---|
| Threat of New Entrants | **Medium** | HIPAA compliance, clearinghouse integrations, and specialty clinical knowledge create 12–24 month barriers for new entrants |
| Bargaining Power of Suppliers | **Low-Medium** | CMS 2026 Prior Auth Interoperability Rule mandates HL7 FHIR APIs — reduces EHR vendor leverage significantly |
| Bargaining Power of Buyers | **Medium** | Low pre-adoption (multiple alternatives); high post-adoption (integration switching costs); acquisition is the hard part |
| Threat of Substitutes | **Medium** | Biggest substitute is inertia — outsourced billing (6–8% of collections) + spreadsheets. Lead with free benchmark audit to quantify status quo cost |
| Competitive Rivalry | **High** | Tebra ($250M, Jan 2026), Jane App ($1.8B valuation), WebPT ($75.9M), ChiroTouch (acquired) all competing; Meroka ($6M, Sept 2025) is the closest ideological competitor |

**Overall attractiveness**: Moderate-High. The pre-launch niche and integration-layer positioning are unclaimed and defensible in the short term.

### Network Effects & Lock-in

| Effect Type | Mechanism | Strength |
|---|---|---|
| **Data** | Specialty benchmarking improves as practices join — episode completion rates, denial rates, no-show rates by specialty, payer, region | Medium → Strong at scale |
| **Customer** | Peer referrals through PTOC, APTA PPS, ACA chapters — viral coefficient target K=0.3 | Medium |
| **Platform/Integration** | Each new EHR connector (athenahealth, DrChrono, WebPT) unlocks a new practice pool without migration friction; CMS FHIR mandate lowers integration cost | Strong long-term |

---

## 🚀 Part 3: Growth & Virality Strategy

### Viral Mechanisms

**Primary Loop — Benchmark → Share → Recruit** (PT/Chiro; K=0.3)
1. Practice connects → receives monthly benchmark report showing episode completion vs. peers
2. Owner shares in PTOC or APTA PPS: "This is what I found out about my practice"
3. 2–5 colleagues request access → viral acquisition
4. New users generate new data → benchmarks improve → report becomes more compelling

**Secondary Loop — Peer Cohort** (New Clinic Launcher; K=0.25)
1. Physician discovers Launch Pack through residency alumni or state association
2. Shares 50-step checklist progress in peer group ("I'm at step 38")
3. 1–2 peers planning to open see it → referral acquisition

**Foundational Loop — Design Partner Case Study Flywheel**
1. First 5 design partners get white-glove concierge
2. Case study published: "Dr. X recovered $14,000 in 90 days"
3. Distributed in PTOC, APTA PPS newsletter, AAD/state derm society
4. Generates 10–20 inbound inquiries per case study → waitlist → paid

**Key viral touchpoints**: Monthly benchmark report (A-tier); Launch checklist share (A-tier); Design partner case studies (A-tier); "Recovered $X this month" email (B-tier)

### Retention Philosophy
> **Daily Habit + High Value Moments + Low Friction + Emotional Connection**

| Segment | Daily Habit | Key High-Value Moment | Emotional Hook |
|---|---|---|---|
| New Clinic Launcher | Morning launch tracker checklist review | First credentialing approval; first patient booked | "You're not alone in this" |
| Independent PT | "Episode at risk" dashboard — patients who haven't rebooked | First re-engaged dropped episode ($800 recovered) | "Your patients got better because they came back" |
| Independent Chiro | Care plan completion tracker in daily schedule | First denied claim caught before submission | "They finished their care plan" |
| Independent Derm | Aesthetic slot utilization — at-risk slots with waitlist backfill | First no-show slot filled from waitlist | "Your independence is worth protecting" |

**Retention targets**: Day 30 >50%, Month 3 >70%, Month 12 >60%, steady-state monthly churn <2%

### CAC / LTV Analysis

| Segment | Blended Monthly Revenue | Avg Subscription | LTV | Blended CAC | **LTV:CAC** | Payback |
|---|---|---|---|---|---|---|
| New Clinic Launcher | $350 + $500 one-time | 12 months | $4,700 | $200 | **23.5:1** | <1 month |
| Independent PT | $400 | 20 months | $8,000 | $280 | **28.6:1** | <1 month |
| Independent Chiro | $350 | 16 months | $5,600 | $290 | **19.3:1** | <1 month |
| Independent Derm | $600 | 28 months | $16,800 | $620 | **27.1:1** | 1 month |

> All segments project LTV:CAC well above the 10:1 health threshold. CAC is low because acquisition is community-led (PTOC, APTA, ACA) with no paid advertising in Year 1. Primary risk: churn assumptions are unvalidated until design partners are live. Month 1 churn modeled at 15–25% — white-glove concierge is the primary lever.

---

## 🛡️ Part 4: Competitive Positioning

### Competitive Matrix

| Capability | **PhysicianLabs** | Tebra | Jane App | WebPT | ChiroTouch | SimplePractice | Meroka |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| No EHR migration required | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ (partial) |
| Pre-launch / new clinic OS | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Patient retention / episode drop-off | ✅ | ❌ | Partial | ❌ | ❌ | ❌ | ❌ |
| Specialty benchmarking | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| PT-specific workflows | ✅ (planned) | Partial | ✅ | ✅ | ❌ | Partial | ❌ |
| Chiro-specific billing | ✅ (planned) | Partial | ❌ | ❌ | ✅ | ❌ | ❌ |
| Derm-specific workflows | ✅ (planned) | Partial | ❌ | ❌ | ❌ | ❌ | ❌ |
| RCM / denial management | ✅ (planned) | ✅ | Partial | ✅ | Partial | ❌ | ✅ |
| Price point <$400/mo | ✅ | ❌ | ✅ | ❌ | ❌ | ✅ | Unknown |
| Services / concierge layer | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |
| AI-powered features | Planned | ✅ | Partial | Partial | ❌ | ❌ | Partial |

**Competitor pricing** (2026): WebPT ~$99/provider/mo + add-ons ([webpt.com/pricing](https://www.webpt.com/pricing)); Jane App from $54/mo ([G2](https://www.g2.com/products/jane-software-jane/pricing)); ChiroTouch $650/mo enterprise ([Software Advice](https://www.softwareadvice.com/medical/chirotouch-profile/)); SimplePractice $49–99/mo; Tebra custom; Meroka not published

### Differentiation Strategy

**Pillar 1 — Integration Layer, Not Replacement**
> "We plug in on top of your EHR — no migration, no data loss. Your staff keeps their workflow; you get the missing retention and billing layer."

Every primary competitor requires EHR migration. This eliminates the #1 purchase objection in the independent practice market by design.

**Pillar 2 — The Only Pre-Launch OS**
> "We're the only tool built for the moment you decided to go independent — not after you've been running for 3 years."

No competitor targets the pre-revenue, pre-launch window. This is both a positioning moat and a CAC advantage — practices acquired at launch stay longer and refer more peers.

**Pillar 3 — Retention-First Revenue Recovery**
> "Your patients need 12 visits. They're quitting at 4. PhysicianLabs is the only platform that fixes this — and shows you the recovered revenue in dollars, not clicks."

WebPT, ChiroTouch, and Jane App are documentation/billing tools. None surface patient retention or measure episode completion rate as a KPI. PhysicianLabs owns the retention-to-revenue narrative.

### Key Objection Handling

| Objection | Response |
|---|---|
| "We already use WebPT/ChiroTouch" | "We don't replace it — we plug in on top. You keep your EHR; you get the retention layer WebPT doesn't have." |
| "Tebra/Jane App does everything" | "Tebra requires a 6-month EHR migration. Jane App has no specialty retention features. Neither has a pre-launch product." |
| "It's too expensive" | "One recovered dropped episode ($400–$800) covers the entire monthly fee. Let's do the math on your drop-off rate." |
| "No time to implement new software" | "You don't implement it — we do. First 90 days are handled by us, not your staff. Under 30 minutes to get started." |

---

## 🛠️ Part 5: Implementation & Roadmap

### 30 / 90 / 180 Day Roadmap

**Immediate — Next 30 Days (by June 5, 2026)**
1. **Run 10 Mom Test interviews** with pre-launch PT/chiro/derm physicians in WA State — identify the exact WTP trigger moment
2. **Sign 3–5 design partner agreements** — 90-day free concierge in exchange for feedback + case study rights; target UW medical alumni, WA PT Association, WA Chiropractic Association
3. **Claim "Clinical Operating System" category label** across all public-facing surfaces (website, LinkedIn, GitHub)
4. **Build the 50-step Launch Checklist** (Wizard of Oz — Google Sheet / Notion); deliver to first design partner manually
5. **Map Seattle/PNW community entry points** — join PTOC, APTA PPS Slack, r/physicaltherapy; confirm attendance at ≥2 association events

**Short-Term — Days 30–90 (by August 5, 2026)**
1. **Deliver white-glove concierge** to first 3 design partners — founder personally handles every Launch Checklist step; document what to automate first
2. **Publish first design partner case study** — distribute in PTOC, APTA PPS, and state association newsletters
3. **Build MVP Episode Drop-Off Dashboard** — list of patients who haven't rebooked, flagged by days since last visit, with one-click re-engagement SMS
4. **Validate milestone pricing** — convert first 5 from design partner (free) to paid at Day 90; log all objections
5. **File startup cloud credits** — AWS Activate, Google Cloud for Startups, Microsoft for Startups (via FRAIM jobs)

**Medium-Term — Days 90–180 (by November 5, 2026)**
1. **Launch Specialty Benchmarking Report** — aggregate data from first 15–20 practices; shareable monthly PDF (viral loop activation)
2. **Build first EHR integration** — athenahealth or DrChrono based on design partner EHR distribution
3. **Ramp to 50 paying practices / $20K MRR** — combine case study referrals, community presence, and direct outreach
4. **Publish 5 design partner case studies** (PT, chiro, derm, new clinic launcher PT, new clinic launcher chiro); distribute to Medical Economics, Physicians Practice, Becker's
5. **Begin Series A fundraising preparation** — investor narrative, traction deck, warm intros to ≥5 health tech investors

### Strategic Questions for Resolution

| # | Question | Resolve By |
|---|---|---|
| SQ1 | At what specific moment does a physician reach for their wallet? (decision? first denial? Month 3 cash crisis?) | Day 60 |
| ~~SQ2~~ | ~~Single-segment launch (PT only) vs. simultaneous PT + chiro + new clinic launcher?~~ | **Resolved 2026-05-06**: Deliberate simultaneous four-segment launch. Segment depth prioritisation to emerge from design partner conversations — not pre-decided. |
| SQ3 | How much of the services layer gets automated vs. human-delivered in Year 1? What gets built first? | Day 90 |
| SQ4 | Build own RCM clearinghouse integration or partner with Availity / Change Healthcare? | Day 60 |
| SQ5 | Is Pacific NW geography-constrained or is national community-led launch viable from Day 1? | Day 45 |

---

## 📈 Part 6: Business Metrics & Risks

### Pricing Architecture

| Tier | Segment | Structure | Blended MRR |
|---|---|---|---|
| **Launch Pack** | New Clinic Launcher | $500 one-time → $200/mo → +$150/mo RCM | Up to $350/mo |
| **Practice OS** | PT / Chiro | $250/mo SaaS + $150/mo services | $350–$400/mo |
| **Derm Concierge** | Dermatologist | $300/mo SaaS + $300/mo services | $500–$600/mo |
| **Design Partner** | First 5 practices | Free (90 days) → paid at Day 90 | $0 → $350+/mo |

### Primary KPIs

**Growth**

| Metric | Month 6 Target | Month 12 Target |
|---|---|---|
| MRR | $20K | $60K |
| Paying practices | 50 | 150 |
| Design partners signed | 5 | 10 |
| Viral coefficient (K) | >0.25 | >0.3 |
| Pipeline (qualified leads) | 50 | 150 |

**Retention**

| Metric | Target |
|---|---|
| Month 1 retention | >80% |
| Month 12 retention | >60% |
| Steady-state monthly churn | <2% |
| Net Revenue Retention (NRR) | >110% |
| LTV:CAC (all segments) | >10:1 |

**Engagement**

| Metric | Target |
|---|---|
| Time to first recovered episode/claim | <14 days post-onboarding |
| Weekly active practices | >70% of base |
| Re-engagement campaigns/practice/month | >2 |
| Benchmark report open rate | >60% |

**Business**

| Metric | Target |
|---|---|
| Gross margin (SaaS tier) | >70% |
| Gross margin (blended with services) | >50% |
| CAC Payback Period | <2 months |
| Monthly Recovered Revenue per Practice (North Star) | >$800 by Month 6 |
| NPS | >50 by Month 6 |

### Top 5 Risks & Mitigations

| # | Risk | Severity | Mitigation |
|---|---|---|---|
| R1 | **WTP unvalidated for pre-launch physicians** | 🔴 Critical | 10 Mom Test interviews by Day 30; offer $500 Launch Pack to 5 pre-launch physicians as validation test |
| R2 | **Independent practice ownership continues to decline** (42.2% in 2024, down from 60.1% in 2012) | 🔴 Critical | Design integration-layer architecture for employed group practices (1–10 providers) from Day 1; same product, different buyer in Year 2 |
| R3 | **Tebra ($250M) or Jane App ($1.8B) build integration-layer and claim category** | 🔴 High | Claim "Clinical Operating System" label now; establish 5–10 vocal design partner case studies within 6 months before incumbents can replicate the pre-launch niche |
| R4 | **Month 1 churn spike (25% modeled for New Clinic Launcher)** | 🟠 High | White-glove 30-day onboarding; founder-led concierge for first 10 customers; identify churn signals in Week 2 and intervene before Month 1 renewal |
| R5 | **Design partner recruiting lag (0 signed today)** | 🟠 High | Activate Seattle physician network immediately; offer 90-day free concierge to remove all friction; recruit personally at WA PT Association and WCA events |

---

## 📚 Sources & Citations

- [AMA — Physician Practice Characteristics 2024](https://www.ama-assn.org/system/files/2024-prp-pp-characteristics.pdf)
- [Towards Healthcare — Practice Management System Market 2025](https://www.towardshealthcare.com/insights/practice-management-system-market-sizing)
- [Towards Healthcare — US RCM Market 2025](https://www.towardshealthcare.com/insights/us-healthcare-revenue-cycle-management-market-sizing)
- [Precedence Research — PT Software Market](https://www.precedenceresearch.com/physical-therapy-software-market)
- [Grand View Research — PT Software Market](https://www.grandviewresearch.com/industry-analysis/physical-therapy-software-market-report)
- [Growth Market Reports — Chiropractic PMS Market](https://growthmarketreports.com/report/chiropractic-practice-management-software-market)
- [Fundamental Business Insights — Dermatology Software Market](https://www.fundamentalbusinessinsights.com/industry-report/dermatology-software-market-10048)
- [Yahoo Finance — Tebra $250M raise, Jan 2026](https://finance.yahoo.com/news/private-practice-platform-tebra-secures-133000483.html)
- [BetaKit — Jane App $1.8B valuation](https://betakit.com/jane-software-to-be-reportedly-valued-at-1-8-billion-in-upcoming-secondary-financing/)
- [Business Wire — Meroka $6M launch, Sept 2025](https://www.businesswire.com/news/home/20250903351274/en/Meroka-Launches-with-$6M-Seed-Round-to-Restore-Humanity-in-Healthcare)
- [WebPT Pricing](https://www.webpt.com/pricing)
- [Jane Pricing — G2 2026](https://www.g2.com/products/jane-software-jane/pricing)
- [ChiroTouch — Software Advice 2026](https://www.softwareadvice.com/medical/chirotouch-profile/)
- [SimplePractice vs Jane — GetApp 2026](https://www.getapp.com/healthcare-pharmaceuticals-software/a/simplepractice/compare/jane-app/)

---

*Created via FRAIM Business Development Strategy Workflow — 2026-05-05*
*Next review: After first 5 design partner conversations or any significant competitive market event*
