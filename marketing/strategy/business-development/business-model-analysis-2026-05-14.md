# Business Model Analysis
**Date:** 2026-05-14
**Job:** business-idea-validation-and-scoping -- Phase 8
**Project:** PhysicianLabs
**Status:** Recommendation -- pending founder review

---

## Input Context

This document synthesizes findings from:

- `docs/business-development/unique-value-proposition-2026-05-14.md` -- UVP definition and competitive positioning
- `docs/business-development/the-one-problem-2026-05-11.md` -- The One Problem, ranked hypotheses, resource access table
- `docs/business-development/details/phase7-feature-synthesis-2026-05-11.md` -- Feature prioritization and delivery tiers
- `docs/business-development/business-plan.md` -- TAM/SAM/SOM, CAC/LTV analysis, Porter's Five Forces
- `docs/customer-development/one-customer-archetype-2026-05-11.md` -- Jordan Park, the One Customer Archetype
- `docs/business-ops/transcript-2026-05-07.md` -- Chelsea Parkman: "business in a box," two-tier structure validation
- `docs/customer-insights/interview-saf-malleck-2026-05-11.md` -- Staffing pain, incorporation timing, PT and derm beachhead confirmation

---

## The Three Business Models

### Summary Table

| Dimension | Model 1: Community-Led SaaS | Model 2: Concierge Professional Services | Model 3: Two-Sided Marketplace |
|---|---|---|---|
| Revenue model | Freemium + subscription | Project fee + retainer | Subscription + transaction + listing fees |
| Primary revenue driver | $200/month recurring after $500 launch pack | $1,500 to $15,000 per engagement | Physician subscription + 10% specialist referral fee |
| Customer segment | Pre-launch PT, derm, chiro (PTOC community) | Solo physician, high-earner specialist, PE-associate considering independence | Pre-launch physician (demand) + healthcare specialists (supply) |
| Engineering required at MVP | LOW (checklist, spreadsheet, email alerts) | NONE (Wizard of Oz -- Google Sheets and founder time) | MEDIUM (directory, matching, listing pages) |
| Time to first revenue | 30 to 60 days (design partner pilot) | 14 to 30 days (first paid engagement) | 60 to 120 days (cold start problem to solve first) |
| Ceiling | $796M TAM (165K practices at $4,800/yr) | Limited by founder time until systems built | $796M physician + adjacent specialist services market |
| Primary risk | Acquisition cost and activation rate | Founder capacity; does not scale without systematizing | Cold start problem: value requires both sides present |
| Recommended sequence | Year 1 -- productize after concierge validates | MVP launch -- start here | Year 2 -- layer on once physician network is established |

---

## Model 1: Community-Led SaaS (Product-Led Growth)

### Overview

The core insight behind this model: PTOC (Physical Therapy Owners Club, 10,000+ members) is an unmonetized distribution channel operating at scale with exactly the right audience. The product grows through peer testimony and free viral tools rather than paid acquisition. The CAC is structurally near zero in Year 1 because the community does the distribution.

This is the long-term business architecture. The SaaS platform converts the concierge system (Model 2) into repeatable software after the first design partner cohort validates the checklist structure and financial module content.

### Revenue Model: Freemium + Subscription

| Tier | Product | Price | Purpose |
|---|---|---|---|
| Free | Specialty Benchmarking Report (episode completion rate, denial rate, average collection time vs. CMS benchmarks) | $0 | Viral acquisition tool -- shared in PTOC, converts community engagement into product pipeline |
| Activation | Launch Pack (50-step checklist, financial structure module, payer credentialing tracker, working capital planner -- WA State) | $500 one-time | First revenue event; filters for genuine intent; unlocks full content |
| Recurring | Active practice management subscription (credentialing deadline alerts, RCM module in Year 2, benchmarking updates) | $200/month | LTV driver; moves with the physician from pre-launch through the first year |

**Unit economics (from business plan validation):**

- LTV: $4,700 (12-month average engagement)
- LTV:CAC ratio: 23.5:1 (community-led, zero paid CAC in Year 1)
- TAM: $796M (165,751 physician-owned US practices at $4,800/yr ARPU)
- SAM: $480M (100,000 practices, 1 to 5 physicians, fee-for-service, EHR-equipped)
- New independent clinics opening per year: 20,000

### How Revenue Is Generated

1. Free benchmarking report circulates in PTOC. Members tag peers. Traffic arrives at the product landing page.
2. Pre-launch physicians convert from free report to $500 Launch Pack when they are within 12 to 18 months of opening.
3. After the launch pack is activated, the $200/month subscription begins. Physicians who complete their launch checklist and open their clinic are the highest-retention cohort.
4. Year 2: the RCM module (H3) and patient pipeline module (H4) are upsell paths that extend LTV beyond the launch window.

### Customer Segments

**Primary: Pre-launch independent physicians (derm, PT, chiro)**
In the final 18 months of training or employment, planning to go independent. Active in PTOC and APTA PPS communities. The SimplePractice dislocation window (63% price increase, March 2025) is a live acquisition opportunity in this segment.

**Secondary: Established independent practices (1 to 5 physicians)**
Already operating, experiencing tool fragmentation (H1), RCM losses (H3), or patient retention problems (H4). Not the launch customer -- the upsell customer. Acquired through SEO and PTOC peer referrals.

**Tertiary: PE-associate physicians evaluating independence**
Physicians in PE-owned group practices who have been offered diluted partnership economics and are considering going independent. One conversation away from the launch ICP. Hannan Qureshi's segment.

### Essential Resources

| Resource | Why Essential |
|---|---|
| Software platform (Next.js / PostgreSQL -- already scaffolded) | Delivers the checklist, credentialing tracker, cash flow planner, and benchmarking report at scale without founder time per engagement |
| Content library (50-step checklist, financial structure module, state-specific guides) | The product is the content. WA State at launch, Ontario Phase 2, 3 to 5 additional states in Year 1 |
| Community presence (PTOC, APTA PPS, state PT associations) | Primary acquisition channel. Requires consistent, valuable participation -- not advertising |
| CMS public benchmark data (no PHI required) | Powers the viral benchmarking report. Freely available. No licensing cost |
| Healthcare specialist referral network (accountants, attorneys, credentialing consultants) | Enables the concierge upsell path and increases product value through expert access |

### Essential Activities

| Activity | Frequency | Rationale |
|---|---|---|
| Product development (checklist, credentialing tracker, cash flow planner) | Continuous | Core product delivery |
| Content creation (state-specific guides, financial structure modules) | Monthly at launch, quarterly at scale | TAM expansion requires state-by-state content coverage |
| PTOC and community engagement | Weekly | Primary acquisition. Requires authentic participation, not promotional posts |
| Customer success and onboarding | Per new activation | Activation rate determines LTV. Physicians who complete the first 5 steps have significantly higher retention |
| SEO content marketing | Monthly | Secondary acquisition. Search intent: "how to open a physical therapy practice," "when to incorporate medical practice" |
| Design partner retrospectives | After each pilot | First 3 to 5 pilots generate the product specification for software build |

---

## Model 2: Concierge Professional Services (Founder-Led, High-Touch)

### Overview

The Wizard of Oz MVP executed as a business. No engineering at launch. The founder personally guides the first cohort of physicians through all 50 steps, using a Google Sheets checklist, Calendly for scheduling, and direct introductions to specialist accountants and attorneys. This model generates revenue in 14 to 30 days, validates the product-market fit before a line of code is written, and builds the specialist referral network that becomes the moat for Model 3.

Chelsea Parkman's framing captures this exactly: "business in a box" with a white-glove compliance support tier. This model IS that tier.

### Revenue Model: Project Fee + Retainer (Tiered)

| Tier | Product | Price | Who it serves |
|---|---|---|---|
| Self-serve | 50-Step Launch Tracker + Financial Structure Module (WA State or Ontario) | $500 one-time | Physicians with a business-savvy colleague who need the map but not the guide |
| Concierge | Founder-led guided walkthrough of all 50 steps, weekly accountability calls, warm introductions to specialist accountant for incorporation setup and credentialing consultant for payer enrollment | $1,500 to $3,000 one-time + $200/month active | Physicians going it alone who need guidance, not just a checklist |
| Done-for-you | Full white-glove launch management: entity formation, credentialing submission, billing configuration, staffing support, first patient acquisition setup | $5,000 to $15,000 | High-earner specialists (derm, surgical) who want to delegate the entire setup |

**Why the done-for-you tier is viable:** The derm franchise model Saf described (Linda Xin, Rejuvenation Dermatology, Oakville -- 30% overhead to a franchise company) demonstrates that dermatologists will pay a significant ongoing fee for operational support. A one-time $15,000 done-for-you launch fee is a fraction of one year of 30% overhead extraction. The value is clear and the comparison is favourable.

### How Revenue Is Generated

1. Inbound from PTOC peer testimony. Design partners refer peers. Each satisfied design partner generates two to three referrals in year one (community-driven, no advertising).
2. Founder conducts discovery calls (30 minutes, Mom Test structure) to qualify the physician and match them to the correct tier.
3. Engagement scoped, contracted, and activated. Physician pays upfront or in two installments.
4. At the close of the engagement (clinic opened, first credentialing approval received, first patient seen), the $200/month active subscription begins.
5. Year 2: the physician becomes a referral source. The PTOC case study ("How Jordan Park opened her PT clinic in 90 days without a cash crisis") is the primary acquisition asset.

### How Revenue Is Generated

1. Discovery call (30 minutes) -- qualify the physician, match to correct tier
2. Scope and contract -- fixed-fee or phased milestone billing
3. Engagement delivery -- weekly check-ins, specialist introductions, deadline management
4. Close -- clinic open, first credentialing approval, first patient seen
5. Transition to $200/month active subscription
6. Case study and referral activation -- physician becomes an acquisition source

### Customer Segments

**Primary: Solo physicians going independent without a support network**
No business-savvy colleague. No family member with business experience. The "information vacuum" is total for this segment. They will pay for guidance because the alternative is making every mistake alone. Saf's setup was manageable only because Matthew Tucci handled logistics. Without that, Saf confirmed: "the vacuum is total."

**Secondary: High-earner specialists willing to pay for delegation (derm, surgical)**
Physicians whose hourly value of clinical time is high enough that spending 40 hours on entity formation and credentialing is economically irrational. The done-for-you tier at $5,000 to $15,000 is framed as: "Your first week of billings pays for your entire clinic setup."

**Tertiary: PE-associate physicians approaching a partnership decision fork**
Physicians like Hannan Qureshi who are evaluating a diluted PE partnership and considering independence. The concierge tier gives them a guided path to independence that reduces the perceived risk of going it alone. The trigger: a bad partnership offer.

### Essential Resources

| Resource | Why Essential |
|---|---|
| Founder expertise (the 50-step system, financial structure knowledge) | The product IS the founder at MVP. The first 3 to 5 engagements validate which steps generate the most questions and highest anxiety -- this becomes the software specification |
| Specialist network (accountants, attorneys, credentialing consultants) | The concierge product delivers value primarily through warm introductions to vetted specialists. Rob (Saf's accountant), Chelsea Parkman's business coaching network, and FI mentor network are the founding cohort |
| Referral relationships | Chelsea Parkman offered to research her business coaching network with healthcare contacts. This is the supply side of the specialist network at launch |
| Google Sheets / Notion checklist system | The delivery tool at MVP. No engineering required. The checklist drives all 50 steps, the specialist introductions, and the credentialing deadline tracker |
| Calendly + Zoom | Scheduling and delivery infrastructure. $0 to $50/month. |

### Essential Activities

| Activity | Frequency | Rationale |
|---|---|---|
| Discovery call cadence (3 to 5 calls per week) | Weekly | Primary pipeline activity. Qualifies ICP, closes paid engagements |
| Client delivery (weekly 45-minute guided walkthroughs per active client) | Weekly per active client | Core product delivery. Maximum 5 concurrent clients at MVP |
| Specialist network building (accountant, attorney, credentialing consultant outreach) | Bi-weekly | The specialist referral layer is the highest-value element of the concierge tier. Each warm introduction is a trust deposit with the physician client |
| Checklist refinement (update based on client questions and mistakes found) | After every engagement | The checklist improves with every pilot. By engagement 5, the highest-anxiety steps are known and the software specification writes itself |
| Case study and referral cultivation | After each successful clinic launch | One documented case study ("PT opened in 90 days, avoided $300K tax mistake") is worth 6 months of PTOC posting |
| Financial structure research (US and Canada specifics) | One-time investment, quarterly updates | The financial structure module must be accurate. Partnership with a specialist accountant (Rob) for content validation is essential |

---

## Model 3: Two-Sided Marketplace (Platform)

### Overview

The highest-ceiling model and the long-term moat. A two-sided platform that connects pre-launch and established physicians (demand side) with vetted healthcare-specific specialists (supply side): accountants who specialize in physician professional corporations, compliance and healthcare attorneys, credentialing consultants, medical secretary placement agencies, and healthcare-specific business coaches.

The insight: Saf found his accountant Rob by accident. Hannan's PE colleagues are on partner tracks because they never found the right advisor to show them an independent path. The fragmentation of the specialist market is the problem. The marketplace is the solution.

This model cannot launch before Models 1 and 2 establish physician trust. The cold start problem is real: specialists will not list on a marketplace with no physicians, and physicians will not use a marketplace with no vetted specialists. The solution is to solve Model 2 first, building the specialist network through concierge engagements, then surface that network as a marketplace product once 10 to 15 vetted specialists are on board.

### Revenue Model: Subscription + Transaction Fees + Listing Fees

| Revenue stream | Mechanism | Price | Timing |
|---|---|---|---|
| Physician subscription (same as Model 1) | $500 launch pack + $200/month active | Per physician | Year 1 |
| Specialist listing fee | Annual listing for vetted specialists (accountants, attorneys, consultants) | $500 to $1,500/year per specialist | Year 2 |
| Transaction / referral fee | Percentage of first engagement value when a physician is referred through the platform to a specialist | 5 to 10% of engagement value | Year 2 |
| EHR partnership co-marketing | Revenue share with Acuro, PS Suite, WebPT for co-marketing and referral programs | Negotiated per partner | Year 2 to 3 |

**Revenue model rationale:** The listing fee monetizes the supply side and funds quality vetting. The transaction fee aligns platform incentives with successful matches (platform earns only when the physician and specialist transact). The physician subscription remains the primary revenue stream -- the marketplace adds a multiplier, not a replacement.

### How Revenue Is Generated

**Phase 1 (Year 1 -- Supply Side Build):**
The specialist network is built through concierge engagements (Model 2). Every accountant, attorney, and consultant introduced to a physician client is a candidate for the marketplace supply side. By the end of 10 concierge engagements, the platform has a founding cohort of 5 to 10 vetted specialists with documented track records.

**Phase 2 (Year 2 -- Marketplace Launch):**
Specialist listing pages are published. Physicians using the product can browse vetted specialists filtered by specialty, geography, and engagement type. The specialist pays $500 to $1,500/year to be listed. The platform earns a referral fee when a physician books and completes an engagement through the listing.

**Phase 3 (Year 2 to 3 -- Network Effects):**
As the physician network scales (200+ practices using the platform), specialists actively seek to be listed. The vetting queue grows. Geographic expansion (new US states, Canadian provinces) is enabled by recruiting specialist supply ahead of physician demand in each new market.

### Customer Segments (Two-Sided)

**Demand side (physicians):** Same as Models 1 and 2. Pre-launch independent physicians across derm, PT, chiro, and expanding surgical specialties. The marketplace adds value to physicians by reducing the time cost of finding the right specialist from "find by accident" (Saf's 3 years before Rob) to "matched in 48 hours."

**Supply side (healthcare specialists):**

| Specialist type | Value proposition for listing | Estimated supply at launch |
|---|---|---|
| Accountants specializing in physician professional corporations | Access to a pre-qualified pipeline of physicians who specifically need incorporation and tax structure guidance | 3 to 5 founding cohort (Rob + Chelsea network) |
| Compliance and healthcare attorneys | Pre-launch physicians who need PLLC formation, malpractice insurance guidance, and state licensing support | 2 to 3 founding cohort (FI mentor network) |
| Credentialing consultants | Pre-launch physicians who need payer enrollment support for the 90 to 120 day credentialing window | 1 to 2 founding cohort (developed through first 5 concierge engagements) |
| Medical secretary placement agencies | Physicians who have cleared the financial and legal steps and now face the hardest operational pain: finding a competent, EMR-trained medical secretary (Saf: 2,000 to 4,000 applicants, 6 months) | 1 to 2 founding cohort (Indeed/ZipRecruiter alternatives with healthcare focus) |
| Healthcare business coaches | Physicians who want ongoing advisory after the launch phase -- strategic guidance on growth, patient mix, referral network development | Chelsea Parkman's network as founding cohort |

### Essential Resources

| Resource | Why Essential |
|---|---|
| Physician trust and platform credibility | The marketplace only works if physicians trust the specialists listed. Trust is earned through Model 2 concierge engagements first -- every specialist who appears on the marketplace must have a documented track record with a physician client |
| Specialist vetting process | The moat. A marketplace of unvetted specialists is a liability, not a product. Every specialist must be verified, reviewed by at least one physician client, and renewed annually |
| Reputation and review system | Physician reviews of specialists drive conversion on the supply side. A specialist with 10 verified five-star reviews from physician clients is the platform's most valuable asset |
| Technology platform (directory, matching, transaction facilitation) | Medium engineering complexity. The MVP is a curated directory with listing pages. Matching logic and automated booking are Year 2 |
| Two-sided acquisition engine | Physician acquisition through PTOC (Model 1 and 2 channels). Specialist acquisition through direct outreach and professional association partnerships (AICPA healthcare specialty group, healthcare law firm directories) |

### Essential Activities

| Activity | Frequency | Rationale |
|---|---|---|
| Specialist recruitment and vetting | Ongoing | Supply side must be built ahead of physician demand in each geography. Each new market (state or province) requires 3 to 5 vetted specialists before physician launch |
| Physician acquisition (PTOC, SEO, peer testimony) | Continuous | Demand side grows through the same channels as Models 1 and 2. The marketplace is additive, not a separate acquisition motion |
| Quality assurance (review management, specialist performance tracking) | Monthly | The marketplace's value is defined by specialist quality. One bad referral destroys trust across the platform |
| Transaction facilitation (booking, payment, introduction workflow) | Per transaction | The platform earns on each successful match. Smooth facilitation is the core operational activity |
| Geographic expansion (new states, provinces) | Quarterly at scale | TAM expansion requires adding specialist supply before marketing physician demand. Sequence: recruit specialists first, then activate physician acquisition |
| Partnership development (EHR co-marketing, professional associations) | Quarterly | EHR partnerships (WebPT, Acuro, PS Suite) and association partnerships (APTA, AAD, ACA) are the multiplier channels for both sides of the market |

---

## Business Model Sequencing Recommendation

The three models are not alternatives. They are a sequence:

| Phase | Model | Trigger to advance |
|---|---|---|
| MVP (now to Month 6) | Model 2: Concierge | First paid engagement within 30 days. Three design partners onboarded. Specialist network has 3 to 5 verified contacts. Checklist refined through 3 pilots. |
| Year 1 (Month 6 to Month 18) | Model 1: SaaS | Design partner feedback has converged on the checklist structure. Engineering build begins. PTOC viral loop validated through at least 2 peer referrals. First $200/month subscriptions active. |
| Year 2 (Month 18+) | Model 3: Marketplace | Physician network exceeds 100 active users. Specialist network has 10+ vetted contacts. First transaction fees earned through Model 2 concierge referrals. Marketplace technology built on top of existing platform. |

**The progression is services to SaaS to marketplace.** This is the most de-risked path because:

1. Model 2 requires zero engineering and generates immediate revenue -- it validates the value before a dollar is spent on software
2. Model 1 productizes what Model 2 proved, using the design partner learnings as the specification
3. Model 3 layers network effects on top of an established physician base and a proven specialist network -- it cannot exist without the physician trust that Models 1 and 2 build first

---

## Essential Resources Shared Across All Three Models

| Resource | Relevance across models | Current status |
|---|---|---|
| Healthcare specialist referral network (accountants, attorneys, credentialing consultants) | Model 2 (delivery), Model 3 (supply side) | Chelsea Parkman offered to research her business coaching network with healthcare contacts. Saf's accountant Rob is a founding referral. Status: accessible. |
| Physician community presence (PTOC, APTA PPS, state PT associations) | Model 1 (acquisition), Model 2 (acquisition), Model 3 (demand side acquisition) | Founder has direct access to PTOC through family network (Saf's Ontario physician community) and through the PT beachhead segment. Status: accessible. |
| Design partner cohort (3 to 5 pre-launch physicians) | Model 2 (validation), Model 1 (specification), Model 3 (founding reviews) | One WA State pre-launch PT, one WA State pre-launch derm, one recently launched physician (3 to 12 months in who has made some of the financial mistakes). Status: to be recruited. |
| State-specific regulatory content (WA State and Ontario at launch) | Model 1 and 2 (content library), Model 3 (specialist matching by geography) | WA State entity formation, credentialing, and billing content needs to be researched and validated with a specialist accountant and attorney. Status: to be built. |
| Financial structure module content (US and Canada) | Model 1 and 2 (lead content element), Model 3 (highest-value specialist category) | Validated by Saf Malleck interview. Content specification exists. Requires partnership with a physician PC specialist accountant for accuracy. Status: to be built. |

---

## Essential Activities Shared Across All Three Models

| Activity | Why it is essential regardless of model |
|---|---|
| Mom Test customer interviews (5 to 10 per month at launch phase) | Every model depends on knowing what pre-launch physicians are afraid of, what they will pay for, and where they spend time. The interview loop must never stop. |
| PTOC and community participation | The primary acquisition channel for all three models. Without authentic, consistent community presence, the viral loop does not activate. |
| Specialist network building | The financial structure module is only as credible as the accountant behind it. The concierge tier is only as valuable as the specialists it connects to. The marketplace only works with vetted supply. Specialist relationships are the throughline. |
| Financial structure content research and validation | The lead content element of the product, the primary wallet moment, and the reason Jordan Park would pay $500 before she has seen any other feature. Must be accurate, jurisdiction-specific, and validated by a specialist accountant. |
| Case study and referral cultivation | One documented case study generates more pipeline than 6 months of PTOC posting. Every design partner who successfully opens a clinic is a case study candidate. |

---

*Prepared by FRAIM AI Agent -- ash.malleck@gmail.com session -- 2026-05-14*
