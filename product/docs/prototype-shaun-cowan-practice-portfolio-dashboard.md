# Practice Portfolio Dashboard
**Prepared for:** Shaun Cowan, MD — General Surgery + Critical Care, Alberta
**Prepared by:** Ash Malleck, PhysicianLabs
**Date:** 2026-06-01
**Status:** Draft v1 — built from what you described in May. The numbers are my estimates. The point is for you to correct them.

---

> In May you said: *"I'm feeling the squeeze. I'm trying to get a sense of where my time versus revenue is coming from and having a sense to make decisions about what do I want to do less of and do more of."*
>
> This is that tool.

---

## Tab 1 — Your Income Streams Today

*Estimated figures — correct what's wrong*

| Income Stream | Time/Year (est.) | Est. Annual Revenue (CAD) | Revenue per Week Equivalent | Fulfillment (your score, 1–5) | Revenue × Fulfillment |
|---|---|---|---|---|---|
| ICU / Critical Care | ~16 clinical weeks | $96,000–$128,000 | $6,000–$8,000/wk | — | — |
| Acute Care Surgery | ~16 clinical weeks | $112,000–$144,000 | $7,000–$9,000/wk | — | — |
| Elective OR | ~12 days/yr (~2.5 weeks) | $60,000–$84,000 | $24,000–$34,000/wk equivalent | — | — |
| Clinic Sessions | ~50 half-days/yr (~6 weeks) | $75,000–$100,000 | $12,500–$17,000/wk equivalent | — | — |
| Transport Medicine | ~5 weeks | $35,000–$50,000 | $7,000–$10,000/wk | — | — |
| Aeromedical Board (16% equity) | Variable (governance) | Non-cash (equity) | — | — | — |
| **Total (cash income)** | **~47 clinical weeks** | **$378,000–$506,000** | | | |

**Your instructions for this tab:**
- Fix any revenue estimate that's materially wrong
- Fill in your Fulfillment score for each stream (1 = draining, 5 = energizing)
- The Revenue × Fulfillment column calculates automatically — it's the number that tells you where your time is best spent

---

## Tab 2 — Revenue per Week of Your Time

*Ranked from highest to lowest — based on Tab 1 estimates*

| Rank | Stream | Est. Revenue/Week of Time | What this means |
|---|---|---|---|
| 1 | Elective OR | $24,000–$34,000 | Highest revenue-per-week but lowest volume (~12 days/yr) |
| 2 | Clinic Sessions | $12,500–$17,000 | High revenue-per-week; scales if sessions increase |
| 3 | Acute Care Surgery | $7,000–$9,000 | Solid and predictable; 16 weeks/yr |
| 4 | Transport Medicine | $7,000–$10,000 | Comparable to acute surgery; niche and variable |
| 5 | ICU / Critical Care | $6,000–$8,000 | Lowest revenue-per-week of clinical streams; 16 weeks/yr |

**What this table is for:**
This is the raw financial picture — time in vs. dollars out. It deliberately ignores fulfillment, career trajectory, and clinical identity. The next tab adds those back in.

---

## Tab 3 — Fulfillment-Adjusted View

*The decision you described: "what gives me fulfillment... finding the balance of what my practice looks like five years from now"*

Fill in your fulfillment score in Tab 1 and this view updates automatically. Here's the structure:

| Stream | Revenue/Wk | Fulfillment (1–5) | Adjusted Score | Recommendation signal |
|---|---|---|---|---|
| ICU / Critical Care | $7,000 | [your score] | = Revenue × Fulfillment | — |
| Acute Care Surgery | $8,000 | [your score] | = Revenue × Fulfillment | — |
| Elective OR | $29,000 | [your score] | = Revenue × Fulfillment | — |
| Clinic Sessions | $15,000 | [your score] | = Revenue × Fulfillment | — |
| Transport Medicine | $8,500 | [your score] | = Revenue × Fulfillment | — |

**Reading the output:**
- High revenue + high fulfillment = **do more of this**
- High revenue + low fulfillment = **worth examining — is the tradeoff right?**
- Low revenue + high fulfillment = **a reasonable spend of time if the financial base is covered elsewhere**
- Low revenue + low fulfillment = **the first candidate for reduction**

---

## Tab 4 — What If Scenarios

*Three scenarios to stress-test your options. Adjust the inputs in Tab 1 and these recalculate.*

**Scenario A — Drop 1 ICU week, add 1 clinic week**

| | Current | Scenario A |
|---|---|---|
| ICU weeks | 16 | 15 |
| Clinic half-days | ~50 | ~55 |
| Revenue change | — | +$9,000–$15,000/yr |
| Fulfillment impact | — | Depends on your scores |
| What you give up | 1 ICU week ($7,000) | — |
| Net revenue change | — | +$2,000–$8,000/yr |

**Scenario B — Add 4 more elective OR days (if scheduling allows)**

| | Current | Scenario B |
|---|---|---|
| Elective OR days | ~12 | ~16 |
| Revenue change | — | +$22,000–$34,000/yr |
| What this requires | Scheduling access, referral volume | — |

**Scenario C — Expand board/advisory to a second company**

| | Current | Scenario C |
|---|---|---|
| Board roles | 1 (16% equity, non-cash) | 2 |
| Cash impact Year 1 | $0 | Likely $0 (equity) |
| Long-term upside | 16% of aeromedical exit | 16% + new equity stake |
| Time cost | Variable | +3–5 hrs/month |

---

## Tab 5 — Five-Year Practice Vision

*This is the conversation, not the spreadsheet. The numbers above are context for answering these.*

Three questions from your May interview — I want your answers on our call:

1. **"What gives me fulfillment"** — If you could design your practice week in five years, what does it look like day by day? How many OR days, how many ICU weeks, how much clinic?

2. **"The data exists, it's just not presented in a useful way"** — Right now, where does your income data actually live? Health Quest? Your accountant's year-end? Do you have any real-time view of which streams are performing?

3. **"What do I want to do less of and more of"** — Before you see the fulfillment-adjusted scores, what's your gut answer? Which stream would you drop tomorrow if you could, and which would you expand?

*Your answers to these three questions are the product spec for what gets built next.*

---

## How to Use This Before Our Call

1. Open the Google Sheet version (I'll send you the link)
2. Fix any revenue estimate that's materially wrong — use your actual billing data if you have it, rough estimates if you don't
3. Fill in the Fulfillment column (Tab 1, column E) — just a number 1–5, whatever feels right
4. Look at Tab 3 and tell me: does the output match what you already know intuitively?

**If it does:** the tool is working.
**If it doesn't:** that gap is the most interesting thing we can talk about on the call.

---

## What PhysicianLabs Is Building

A live version of this dashboard — connected to your actual billing data rather than estimates — that updates monthly and gives you a real-time view of time-vs-revenue across all your streams. Designed specifically for physicians with complex, multi-source income who make career decisions the way you described: *"counter that with my thoughts around what gives me fulfillment... finding the balance."*

Available initially as a founder-guided setup: 3 sessions to map your streams, build the model, and calibrate the fulfillment weightings — $1,500, with a 90-day money-back guarantee if it doesn't surface at least one decision-quality insight.

---

*Prototype v1 — PhysicianLabs — 2026-06-01*
*For review and co-design with Shaun Cowan, MD*
