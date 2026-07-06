# Customer Insight -- Interview
**Date:** 2026-05-08
**Interviewee:** Shaun Cowan (general surgeon + intensivist, Alberta, Canada)
**Connection:** College friend of founder; introduced via mutual contact (Vince)
**Format:** ~30-minute discovery conversation
**ICP Assessment:** Counter-persona -- NOT the primary ICP. High-capex specialist who joined an established group. Valuable as an indirect validator and referral source.

---

## Interviewee Profile

| Field | Detail |
|-------|--------|
| Specialty | General surgery (acute care + elective) + Critical Care / ICU |
| Practice model | 9th partner in an established surgical group, Alberta |
| Income streams | ICU (~16 clinical weeks/yr), acute care surgery (~16 weeks/yr), elective OR (~1 day/month), clinic sessions (~4-5 half/full days), transport medicine (~10%), startup board (aeromedical company, 16% equity) |
| EMR setup | Health Quest (clinic scheduling) + Connect Care / Epic (hospital charting and billing) -- not integrated |
| AI adoption | Uses AI scribing/transcription already |
| Geography | Alberta, Canada (not US) |
| Career path | Started as a paramedic, then medicine, surgery residency, ICU fellowship, Locum surgery, then joined the group as 9th partner |

---

## ICP Fit Assessment

Shaun is a **counter-persona** for the Launch Gauntlet product. He did not go through the independent clinic setup process -- he joined an established group because going solo was structurally cost-prohibitive for a part-time surgical practice (equipment, accreditation space requirements, supporting staff). He cannot serve as a primary interview respondent for H2 validation.

However, he provides two types of useful signal:

1. **Indirect Launch Gauntlet validation**: He confirmed the pain exists and is real, from the perspective of someone who deliberately avoided it.
2. **Direct signal for a distinct downstream product**: His primary pain is a different problem -- multi-stream revenue and time allocation visibility for established physicians.

---

## Key Quotes

> "Had I not been stepping into that established Clinic, yeah, that would have been a huge hurdle to starting up. Lots of growing pains and lost revenue opportunities because of the lack of knowledge."

> "I'm feeling the squeeze. I'm trying to get a sense of where my time versus revenue is coming from and having a sense to make decisions about what do I want to do less of and do more of."

> "It does exist [the data], it's just not in a... I have to go and take it all up and kind of piece it together. It's not really presented to me in a very useful way."

> "If I spend a day in ICU versus spending a day in general surgery call or a day in clinic seeing consults -- what is that financial remuneration look like? And then I can counter that with my thoughts around what gives me fulfillment, what do I enjoy doing... finding the balance of what my practice looks like five years from now."

> "Not particularly [re: patient pipeline visibility being useful]." -- when asked if patient flow data would help his time allocation decisions.

> "It was cost prohibitive for me to go off on my own, because I only do [surgery] half time. I really was in a position where I had to join a group."

---

## New Signals (Not Previously Captured)

### 1. Decision window: final 18 months of training (more specific than prior estimate)

Shaun described the join-vs.-go-solo decision crystallizing in "the last year, year and a half of training" -- sometimes earlier for physicians not planning additional fellowship. The trigger is not proximity to opening day; it is the cognitive shift from "I'm in training" to "I need to figure out where I'm landing next." Colleagues make different choices in this window based on family circumstances, specialty plans, and financial pressure.

**Impact on problem statement:** Updated recognition signal from "final year of residency" to "final 18 months of residency or fellowship."

---

### 2. High-capex specialties are structurally locked out of independent practice -- not just risk-averse

Shaun's reason for joining a group was not fear or lack of knowledge -- it was physical and economic impossibility. A part-time surgical practice requires:
- Clinic space with accreditation requirements (sterilization, visualization, dedicated storage)
- Supporting staff sufficient to run a surgical clinic
- Capital for equipment that is not viable at part-time volumes

He said: "In any framework that I'm aware of, I couldn't have figured out how to have an office space with the supporting staff to support a part-time surgery practice."

**Impact:** This is the clearest in-person validation of the "low-capex" ICP criterion. The market boundary is not a targeting choice -- it is the natural limit of who can economically go independent. Surgeons, radiologists, and procedural specialists requiring significant equipment or hospital infrastructure are not choosing groups over solo; they have no viable alternative.

---

### 3. New pain category: multi-stream revenue and time allocation visibility (distinct from RCM)

This is the most substantive new finding. Shaun has 5-6 income streams and no unified view of revenue per unit of time across them. He wants to make career-shaping decisions (do more ICU, less surgery, more or less clinic) but cannot because the data exists in scattered, non-integrated forms.

This is **not** RCM (which addresses billing accuracy and denial recovery). This is strategic practice portfolio management: a consolidated view of time value across all income streams to support long-term career decisions.

**Who has this problem:** Established physicians with multiple income streams -- common among surgeons, intensivists, academic physicians, and anyone combining clinical work with other roles (teaching, board seats, research, consulting). This is an H3-adjacent but distinctly different product from the Launch Gauntlet.

**Resonance signal:** Shaun responded immediately and specifically when this concept was described. No prompting needed. He described the exact format he wanted: time spent per activity type, revenue per activity type, a way to weigh that against personal fulfillment.

---

### 4. Patient acquisition pain confirmed as specialty-dependent

When asked directly whether patient flow and pipeline visibility would help with his time allocation decisions, Shaun said "not particularly." His patients arrive through emergency referral and hospital-based care. He has no marketing-driven patient funnel and no need for one.

This is the first live respondent confirmation that patient acquisition pain is specialty-specific. It belongs to derm, PT, chiro, and mental health (direct-to-patient marketing) and not to hospital-based or referral-only physicians.

**Impact on problem statement:** Added assumption to Section 6: patient acquisition questions (Q10, Q11) should only be asked of marketing-dependent specialties.

---

### 5. EMR lobbying dynamics in Alberta (Canada-specific market insight)

Connect Care (Epic) was originally planned to be accessible by private clinics in Alberta. A competitor EMR vendor -- described as "the second largest EMR in the province" with a significant government lobby (almost certainly Telus Health) -- successfully pressured the provincial government to restrict private clinic access. Private clinics are now locked out of Connect Care as their primary EMR.

The practical result: Shaun's group runs two non-integrated systems (Health Quest for clinic scheduling, Epic for hospital charting and billing). His workaround is to chart exclusively in Epic and not duplicate in Health Quest, using a billing agent that integrates natively with Epic so billing syncs automatically overnight.

**Why this matters:** If PhysicianLabs expands to Canada, the EMR fragmentation problem has a different root cause (regulatory/lobbying) than in the US (market fragmentation and interoperability gaps). The integration approach would need to account for this access restriction.

---

### 6. AI scribing is already table stakes for tech-forward physicians

Shaun uses AI transcription as part of his normal workflow. He was flagged by Vince as "very tech savvy when it comes to using AI for scribing." This confirms that documentation automation is not a novel capability for physicians at the technology-adoption frontier -- it is a baseline expectation.

**Impact:** Do not position documentation/scribing as a differentiator in product or marketing. It is a commodity feature for the most tech-forward segment. For less tech-savvy physicians it may still carry value, but it should not anchor the pitch.

---

## What Was Confirmed (Already Hypothesized, Now Stronger)

| Prior hypothesis | Status after interview |
|---|---|
| Low-capex criterion is the natural ICP boundary | Confirmed -- surgeon describes structural impossibility, not just reluctance |
| Join-a-group is the default path for early-career physicians | Confirmed -- Shaun describes it as the obvious choice given his constraints |
| EHR fragmentation is a lived daily frustration | Confirmed -- two non-integrated systems, only a "right click" workaround |
| Launch Gauntlet pain is real even for those who avoided it | Confirmed -- indirect endorsement from someone who sidestepped it deliberately |
| Decision window is during training, not post-graduation | Confirmed -- last 1.5 years of training is when the choice crystallizes |

---

## What Was Disconfirmed or Not Applicable

| Prior hypothesis | Status |
|---|---|
| Patient pipeline/acquisition pain is universal | Disconfirmed for this respondent -- irrelevant for referral-based specialties |
| Patient flow visibility helps physicians allocate time | Not applicable here -- Shaun's time allocation problem is about income streams, not patient channels |

---

## Referral Potential

Shaun offered to:
1. Review prototypes of the Launch Gauntlet product (concierge first)
2. Review the multi-stream revenue/time allocation dashboard
3. Potentially connect to physicians earlier in their career considering the join-vs.-go-solo decision

He also flagged a Bay Area health-tech company (intra-appointment chronic care) preparing to raise $100-150M, whose CEO Ash was meeting with the following day. Context only -- not actionable for PhysicianLabs directly.

---

## Interview Methodology Note

The interview opened with a 4-minute product pitch from the founder before any questions were asked. Useful signal emerged primarily from Shaun's unprompted digressions rather than from structured past-behavior questions. For future interviews with primary ICP physicians (pre-launch derm/PT/chiro), open with: "Walk me through how you decided to go independent and what happened next" -- before any product mention. Follow the 11 questions in the problem statement document (Section 7).

---

## Source

Transcript: `Copy of May 8 - Shaun Cowan Doc Alberta .docx` (provided by founder 2026-05-08)
