# Investor Pitch Package: PhysicianLabs
**Date:** 2026-06-11
**Audience:** SoftBank / NEC-X, 5-minute pitch, sophisticated global VC
**Companion deck:** `docs/fundraising/pitch-deck-2026-06-11-softbank-necx.pptx`
**Prepared via:** FRAIM investor-pitch-preparation job

---

## Executive Narrative

Doctors spend up to sixteen years in medical training and zero hours learning how to run a business. The founder's brother, an orthopedic surgeon who has launched two clinics, lost over $200,000 in his first clinic with no visibility into his own P&L. His words: "The amount of tax I'm paying is nauseating. The house I'd be living in would be double the size." That story is the norm, not the exception.

PhysicianLabs attacks this in two moves:

1. **The wedge (live today):** a founder-guided transition program for hospital-employed physicians going independent or concierge. It generates revenue now, requires no software build to sell, and produces the product specification from real engagements.
2. **The platform (what the pre-seed builds):** an AI-native financial operating layer that sits above the EHR. Real-time P&L, revenue-leak detection, credentialing and payer intelligence. No EHR migration. Every incumbent is a rear-view mirror that records what happened; PhysicianLabs is the windshield that shows where the practice is going.

The honest market story: independent ownership fell from 60.1% (2012) to 42.2% (2024), and that is exactly the point. The physicians choosing independence today do it with conviction, not by default. The Direct Primary Care market is $61B growing 10 to 15% annually. The conviction cohort has higher willingness to pay and no tools built for them.

**The ask:** $2.5M pre-seed to reach 20 paying clinics, first $200K revenue, and platform v1, with a mapped milestone path to a $10M seed. Plus three non-monetary asks of SoftBank and NEC-X today: (1) define the bar, tell us exactly what you would need to see in 2 to 3 months to invest; (2) two to three design-partner introductions from your healthcare network; (3) one door into an RCM or payer data partner.

Closing mic-drop (verbatim, first-person sourced): "If I spend a day in the ICU vs. the clinic, I don't know where I am financially." Tagline: **Put doctors back in the driver's seat of their own financial future.**

---

## Market Analysis & Opportunity

### TAM/SAM/SOM Analysis

Layered sizing, conservative numbers first (per mentor guidance: never lead with the $349B market-cap figure).

| Layer | Definition | Size | Source |
|---|---|---|---|
| Macro market | US revenue cycle management | $65.38B (2025), 11.6% CAGR, projected $195.92B by 2035 | [Towards Healthcare](https://www.towardshealthcare.com/insights/us-healthcare-revenue-cycle-management-market-sizing), [GlobeNewswire 2025](https://www.globenewswire.com/news-release/2025/11/24/3193563/0/en/U-S-Healthcare-RCM-Market-Climbs-to-195-92-Billion-by-2035-as-Digital-Adoption-Accelerates.html) |
| Platform TAM | All US independent physician-owned practices (165,751) at $4,800 ARPU | ~$796M/yr | [Definitive Healthcare](https://www.definitivehc.com/data-products/physician-view), business plan Draft v2 |
| Platform SAM | 1 to 5 physician, fee-for-service, EHR-equipped practices (~100,000) at $4,800 ARPU | ~$480M/yr | business plan Draft v2 |
| Wedge entry | 5,000 to 10,000 new practice formations/yr buying launch guidance | $23M to $46M/yr | [pitch-package-2026-05-17](pitch-package-2026-05-17.md) |
| SOM (Year 5) | ~3,000 clinics (~3% of SAM) | ~$28M ARR | bottoms-up model below |

**Headwind acknowledged first:** independent ownership 60.1% (2012) to 42.2% (2024) ([AMA Benchmark Survey 2024](https://www.ama-assn.org/about/ama-research/physician-practice-benchmark-survey)). **Tailwind:** DPC market $61.34B growing 10 to 15%/yr; nine new physician-ownership platforms launched in 2025 ([Holt Law DPC Report](https://djholtlaw.com/direct-primary-care-dpc-market-report-national-analysis-last-12-months/)).

### Competitive Landscape

| Player | Position | Why they cannot follow |
|---|---|---|
| [Tebra](https://www.tebra.com/) ($250M raised Jan 2026) | Post-launch practice OS, EHR migration required | Revenue model starts the day the clinic opens; pre-launch is structurally invisible; installed base is a retention treadmill |
| [Jane App](https://jane.app/) ($1.8B valuation) | Post-launch booking/EMR | Same post-launch architecture; no financial decision layer |
| WebPT / ChiroTouch / SimplePractice | Specialty post-launch tools | Documentation and billing, no P&L intelligence, no pre-launch product |
| Practice startup consultants ($30K to $60K) | Pre-launch but unproductized | Hourly, relationship-gated, not scalable; PhysicianLabs is the productized version at 3 to 60x lower cost |
| [Meroka](https://www.businesswire.com/news/home/20250903351274/en/Meroka-Launches-with-%246M-Seed-Round-to-Restore-Humanity-in-Healthcare) ($6M seed) | Closest ideological competitor | Ownership/financing focus, not a financial operating layer |
| Samir Master, MD (unfunded, pre-product) | Practicing derm building "Rippling meets Compass" for his network | Disclose proactively: validates the thesis from inside the ICP; nights-and-weekends, single-specialty; likely partner or customer |

### Market Positioning

*(Reframed 2026-06-15 to match the post-launch ICP — the moat is the layer, not a calendar window.)*

The 2x2 that matters: **decision intelligence (windshield) vs. record-keeping (rear-view)** on one axis, **no migration vs. migration required** on the other. EHR/practice-management incumbents (Tebra, Jane, athenahealth, WebPT) are rear-view systems you migrate onto. Outsourced billing and spreadsheets sit alongside but only record. Enterprise RCM and $30–60K consultants give real intelligence, but they are heavy, manual, and built for large systems. The **windshield + no-migration quadrant is empty** — that is PhysicianLabs: a forward-looking financial brain that runs on top of the stack a first-year independent already has. The differentiation is durable because it is structural (layer + data + no migration), not a timing window incumbents could close by launching a pre-launch product.

---

## Financial Analysis

### Revenue Model & Unit Economics

| Tier | Price | Margin profile |
|---|---|---|
| Money-back PoC (lead offer, validated 2026-06-15) | $1,000 one-time, refunded if <$20K recoverable revenue found | one-time, converts to subscription |
| Transition Kit (self-serve) | $750 to $1,000 one-time | >90% |
| Transition Program (founder-guided, 12 weeks) | $3,500 to $5,000 one-time, then $500 to $799/mo | >80% |
| Full Transition (done-for-you) | $8,000 to $20,000, then $500 to $799/mo | ~70% |
| Platform subscription (post-launch) | $500 to $799/mo | >70% blended at scale |

| Metric | Value | Basis |
|---|---|---|
| Blended year-1 revenue per clinic | ~$12,000 | $4,250 avg program + $650/mo x 12 |
| CAC | $400 organic Y1, ~$1,500 blended Y2-3 | warm network + communities, then paid |
| LTV:CAC | 30:1 organic, 6 to 8:1 scaled | top-decile SaaS either way |
| Payback | <1 month | program fee collected up front |
| WTP evidence | $1K prospective / $10K retrospective | same surgeon, June 1 interview (Saf Malleck) |

### Financial Projections (bottoms-up)

| | Y1 (FY27) | Y2 | Y3 | Y4 | Y5 |
|---|---|---|---|---|---|
| Paying clinics | 20 | 100 | 400 | 1,200 | 3,000 |
| Revenue / ARR | $200K | $1.0M | $3.8M | $11.5M | $28M |
| Stage | Wedge + platform v1 | $10M seed | Multi-state | Category leader path | ~3% SAM |

Three metrics that matter: paying clinics (20 = seed gate), monthly recovered revenue per clinic (North Star, >$800/mo by Month 6), and net revenue retention (>110%, proves wedge-to-platform expansion).

### Investment Scenarios

| Scenario | Capital | Outcome in 18 to 20 months |
|---|---|---|
| Floor | $500K bridge | 5 paid clinics + platform alpha |
| **Base** | **$2.5M pre-seed** | **20 paying clinics, $200K revenue, platform v1, 2 EHR integrations, $10M seed raised** |
| Aggressive | $2.5M + strategic studio support (NEC-X) | adds payer-data partnership, ~35 clinics |

Use of funds: 45% product and engineering ($1.125M, 3 to 4 engineers, AI platform v1, 2 EHR integrations), 25% GTM ($625K, founder-led sales + 1 GTM hire), 15% clinical and compliance network ($375K), 15% ops and runway buffer ($375K).

---

## Slide Deck Blueprint

Cover + 14 slides in the founder-specified order, ~20 seconds each, one message per slide, depth held for Q&A.

| # | Slide | Core message | Key evidence |
|---|---|---|---|
| 1 | Our Why | 16 years of training, zero hours of business; mission: doctors back in the driver's seat | Brother's $200K loss; "nauseating" tax quote |
| 2 | The Problem | Three pains: setup vacuum, invisible P&L, systemic squeeze | $200K to $400K mistakes; $115 vs $290 same-visit reimbursement; 60% to 42% |
| 3 | Solution | Wedge (program, revenue today) to platform (AI-native financial OS above the EHR) | 3 tiers live; no EHR migration; windshield vs. rear-view |
| 4 | Leadership | McKinsey x Amazon/AWS x 3 generations of physicians; advisory bench | 5y McKinsey, 11y Amazon/AWS + EA; brother = 2 clinic launches |
| 5 | Market | $65B RCM macro, $480M SAM, wedge entry; headwind then tailwind | Towards Healthcare, AMA, DPC report |
| 6 | Customers & Unit Economics | $12K yr-1 per clinic; LTV:CAC 30:1 to 6-8:1; payback <1 mo | WTP $1K/$10K interview evidence |
| 7 | GTM | Warm network, then communities and IPAs, then referral flywheel | AAPP, DPC Frontier, Pro Alliance/WWMG, r/whitecoatinvestor |
| 8 | Business Model | One-time program + recurring platform subscription | Pricing architecture; >80% GM |
| 9 | Competition | Pre-launch x productized quadrant is empty | Tebra $250M, Jane $1.8B post-launch; consultants unproductized |
| 10 | Technology Status | Foundation built, 2 prototypes from real interviews, HIPAA-clean, pre-MVP honest | Repo: Next.js 16 + MCP AI sidecar; prototype docs |
| 11 | Financials | $200K to $28M ARR in 5 years, bottoms-up | Clinic counts 20/100/400/1,200/3,000 |
| 12 | Comps & Exit | RCM is a proven exit market | R1 $8.9B, athenahealth $17B, Jane $1.8B; ~4.3x revenue deals |
| 13 | The Ask | $2.5M pre-seed + 3 non-monetary asks | Use of funds; milestone map to $10M seed |
| 14 | Why Now + Traction | Convergence + honest traction + mic-drop quote | CMS FHIR mandate, AI inflection; 7 sessions/5 physicians, 5 verbal LOIs |

---

## Investor Q&A Defense Package

### Anticipated Objections by Category

**Traction: "Why a $2.5M pre-seed at this stage?"**
We have our first paid PoC commitment confirmed, and I will be candid: the subject is my brother, a post-launch ortho surgeon, and payment is collected on delivery, which is in progress. I am not claiming arm's-length revenue yet. The first non-family, card-charged close is the next 30 days' only job; the offer is validated and the warm pipeline is named (Tucci, Xin, Cowan). What the pre-seed buys is the proof: 20 paying clinics and platform v1. What exists today is insight density most pre-seeds never have: 7 sessions across 5 physicians in 2 countries and 5 specialties, dollar-quantified willingness to pay ($1K prospective, $10K retrospective from the same surgeon), and a structural gap incumbents cannot serve.

**Market: "Independent practice is shrinking."**
Named proactively: 60.1% to 42.2% since 2012. The drift cohort is disappearing; the conviction cohort is growing. DPC is $61B growing 10 to 15%/yr with nine new ownership platforms in 2025. Smaller, more motivated, higher WTP.

**Competition: "What stops Tebra or athenahealth?"**
Their revenue starts the day the clinic opens: onboarding fees, per-provider subscriptions, clearinghouse cuts. Pre-launch generates nothing for them and their installed base consumes their roadmap. We also require no EHR migration, which removes their number-one purchase objection.

**Competition: "A practicing dermatologist is building a competitor."**
Disclosed proactively. Samir Master validates the market from inside the ICP. He is building nights-and-weekends for his own derm network; we are full-time, cross-specialty, with a transition wedge he does not have. He invited us back when there is something concrete; he is as likely a partner or customer as a rival.

**Founder: "You're not a physician."**
The pre-launch questions are structured business problems: entity timing, credentialing sequence, working capital. Five years at McKinsey is exactly that craft. Licensed specialists deliver the jurisdiction-specific advice; three generations of physicians and a brother with two clinic launches is the trust bridge.

**Compliance: "HIPAA?"**
Architecturally outside the clinical layer. Business and financial data only, zero PHI, by deliberate design. No compliance review needed for a practice to start; this removes the largest trust barrier for the ICP.

**Model: "Consulting business dressed as a startup."**
Concierge Year 1 is the data-collection phase that writes the platform spec. Pricing already includes the $500 to $799/mo subscription, so Year 2 economics are SaaS economics. The roadmap is concierge to SaaS to data network.

### Scenario Stress Tests

| Check size | Plan |
|---|---|
| $500K | 5 paid clinics + platform alpha, 6 months, then re-raise |
| $2.5M (base) | 20 clinics, $200K revenue, platform v1, 2 EHR integrations, seed-ready in 18 to 20 months |
| $2.5M + strategic | Add payer-data partnership and ~35 clinics via partner channel |

### Executive Rebuttal Framework

**"Why is this a SoftBank/NEC-scale outcome?"**
The wedge is niche; the layer is not. Every independent practice needs a financial operating system. US RCM is $65B headed to $196B by 2035. The compounding asset is the cross-practice benchmark and decision graph: the system of record above the EHR. R1 went private at $8.9B as a services-era company; the AI-native successor has not been built.

**"What do you want from us today?"**
Three things: (1) define the bar, tell me exactly what you would need to see in 2 to 3 months to invest; (2) two or three design-partner introductions from your healthcare network; (3) one door into an RCM or payer data partner.

### Exit Comps

| Event | Value | Source |
|---|---|---|
| R1 RCM take-private (TowerBrook/CD&R, 2024) | $8.9B | [Healthcare Dive](https://www.healthcaredive.com/news/revenue-cycle-management-r1-rcm-acquisition/723167/) |
| athenahealth take-private (Bain/H&F, 2022) | $17B | public record |
| Jane App secondary valuation | $1.8B | [BetaKit](https://betakit.com/jane-software-to-be-reportedly-valued-at-1-8-billion-in-upcoming-secondary-financing/) |
| Recent RCM platform deals | ~4.3x revenue, ~17x EBITDA | [Scope Research 2025](https://www.scoperesearch.co/post/healthcare-revenue-cycle-valuation-multiples-and-m-a-trends-2025) |

ROI frame: base case, acquisition at ~5x on $28M ARR is a $140M+ outcome, roughly 15 to 25x a pre-seed entry. Upside case, category leader comp (Jane App $1.8B) is 50x+.

> [!IMPORTANT]
> This pitch package builds upon business validation findings. Honest traction state (updated 2026-06-15): first paid PoC commitment confirmed (Saf Malleck, June 6) but family and payment-pending — not yet arm's-length, card-charged revenue; 5 verbal LOIs in written conversion; first non-family paid close targeted within 30 days. Do not upgrade any claim to "paying customer" or "revenue" until a non-family card is charged. See `docs/business-development/mvt-analysis-2026-06-15.md`.
