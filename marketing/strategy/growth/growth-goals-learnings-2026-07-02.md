# Growth Goals & Growth-Hacking — Research Synthesis
**Date:** 2026-07-02
**Owner:** Founder
**Purpose:** Key points learned from the growth-goals video + resource set, translated into what they mean for PhysicianLabs.
**Status:** Reference. Feeds `north-star-metric-and-growth-goals-2026-07-02.md` and `revenue-leak-scorecard-spec-2026-07-02.md`.

---

## Sources reviewed
| # | Source | Core contribution |
|---|---|---|
| Video | Sean Ellis — CXL LIVE 2017, growth objectives | North Star Metric; growth as a disciplined, high-tempo process (transcript not machine-readable — drawn from Ellis's documented frameworks) |
| 1 | Balfour — *Setting Yearly Growth Goals* | Model-driven goals (top-down × bottom-up); order-of-operations; channel decay |
| 2 | Andrew Chen — *The Law of Shitty Clickthroughs* | Every acquisition channel decays; don't extrapolate small-sample metrics |
| 3 | Asanify — *Goal Setting for Startups* | SMART/OKR structure, weekly cadence, org-wide buy-in |
| 4 | Medium — *10 Best Growth Hacks of All Time* | The classic viral-loop hacks and their mechanisms |
| 5 | TheStartingIdea — *30 Growth Hacks* | Tactic menu; the B2B-SaaS-relevant subset |
| 6 | Design-With-Value worksheet (part 2) | Value-first channel/experiment framing |

---

## 1. Set goals from a *model*, not a gut feeling
Balfour's central rule: *"Do not pick goals based on gut — you are setting yourself up for failure."* Build a **driver-based growth model**, then set the target both **top-down** (aspiration, e.g. "$X revenue / N customers") and **bottom-up** (what the input metrics can realistically deliver) — ideally by two different people to remove bias. The goal lives where ambition meets what the inputs can bear.

- **Order of operations matters:** retention and virality *compound*, so investing in them early maximizes the payoff — prioritize them ahead of pure acquisition.
- **Structure it (Asanify):** SMART/OKR format, written down, socialized above/below/across, reviewed **weekly**.
- **PhysicianLabs application:** we already have the driver-based engine — the [18-month financial model](../finance/financial-model-2026-06-30.xlsx). Growth goals must be *derived from its Assumptions tab*, not invented separately. Weekly review already exists via the channel test + `/sales-checkin`.

## 2. Pick one North Star Metric — a *value* metric, not a vanity one
Ellis's core idea: one metric that captures the value customers actually receive and that the whole team steers by. **Email signups and traffic are input/vanity metrics** — fine for the channel test, wrong as a north star. The NSM should tie growth to delivered value (for us, recovered revenue / decision visibility for active practices). Detailed in the companion NSM doc.

## 3. The Law of Shitty Clickthroughs — a warning label on our channel test
Andrew Chen: every acquisition channel decays — **novelty fades, competitors copy, and scaling reaches worse-qualified audiences** (banner CTR fell from 78% in 1994 to 0.05% by 2011, a 1500× drop). Implications for us right now:
- **Don't over-extrapolate week-1 channel-test numbers.** Early results come from a warm, early-adopter sample and will look *better* than they scale. (This is the theory behind the "sample too thin" guardrail in `generate-results.js`.)
- **Treat channels as a portfolio with a shelf life**; build a *system* for finding the next channel before the current one decays — exactly the "assess channel decay" line in the [channel strategy](../marketing/channel-strategy-2026-06-30.md).
- **The best move is a new, uncontested channel**, not squeezing a saturated one.

## 4. What makes the great "growth hacks" work — and how they map to B2B
Across PayPal, Hotmail, Dropbox, Airbnb, Instagram, Mint, the durable hacks share **one mechanism: distribution engineered *into the product/usage itself***, not bolted on. Honest caveat: most iconic hacks are **B2C viral loops**; PhysicianLabs is **high-ACV, narrow-ICP, trust-gated B2B**, so pure virality doesn't map. The transferable subset:
- **Free tool as lead magnet** (HubSpot Website Grader → our **Practice Revenue-Leak Scorecard**). Instant value, captures the email, *is* the pitch. Highest-leverage hack for our ICP — see the spec doc.
- **Activation threshold** (Twitter "follow 30", Facebook "7 friends in 10 days") → define PhysicianLabs' aha-moment metric (e.g., *practice sees first recovered-revenue insight within N days*). Retention lives here.
- **Scarcity/waitlist FOMO** (Mailbox, Robinhood) → already used legitimately ("3 design-partner spots").
- **Authentic community infiltration + physician-refers-physician referral** → already the Reddit/PTOC/LinkedIn playbook; referral works even at low volume inside tight professional networks.
- **Feature limits / land-and-expand** → for the eventual SaaS tier.

## 5. The honest tension: "quick growth for investors"
Read together, the resources push against vanity spikes: **investors discount one-off surges and reward the *rate* and the *engine*.** What makes a startup attractive is a driver-based model, an NSM trending up, **cohort retention**, and a repeatable acquisition system — plus honesty about channel decay and the plan for it. This aligns with our own [investor-panel bar](../business-development/) (paid evidence from non-friends/family, path to $100M, ~100% MoM early-growth benchmark). **Growth hacks are accelerants on top of that discipline — never a substitute.**

---

## One-line synthesis
> Set ambitious goals off the existing model (not gut), steer by a single value-based North Star, assume every channel decays so build an engine that keeps finding new ones, and pick the few B2B-appropriate hacks (free scorecard, activation threshold, referral) that compound — because durable, retention-led growth is what actually reads as "quick growth" to good investors.

## Direct next steps this produced
1. **Revenue-Leak Scorecard** free tool — `revenue-leak-scorecard-spec-2026-07-02.md`.
2. **North Star Metric + model-derived growth goals** — `north-star-metric-and-growth-goals-2026-07-02.md`.
