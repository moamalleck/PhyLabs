# Phase 8: MVP Scope Definition
**Date:** 2026-04-27
**Job:** business-idea-validation-and-scoping
**Project:** PhysicianLabs

---

## MVP Name: PhysicianLabs Launch

**Approach:** Wizard of Oz — concierge first, no code. Do the first 3 pilots manually. Only build software for what is done repeatedly.

---

## What's In

| Component | What It Does |
|-----------|-------------|
| Clinic Launch Tracker (F1) | Step-by-step checklist for opening a Derm/PT clinic in WA state — entity, NPI, credentialing, EHR selection, malpractice, billing setup |
| Credentialing Timeline Manager (F2) | Calendar-driven tracker; deadline alerts for each payer |
| Patient Pipeline Builder (F3) | Referral tracking, waitlist management, first-patient booking flow |
| Benchmarking Teaser (F4) | Read-only specialty benchmark for 1 key metric (e.g., avg patients/week at month 3 for new Derm/PT clinic) |

---

## Explicitly Out of Scope (MVP)

- EHR integration (use manual data entry for now)
- Claims submission / RCM module (requires clearinghouse relationships)
- AI features
- Multi-specialty or multi-location support

---

## Pricing Model (Milestone-Based)

| Milestone | Trigger | Revenue |
|-----------|---------|---------|
| Launch Pack | Physician decides to open clinic | $500 one-time |
| Active Practice | 10 patients booked via PhysicianLabs | $200/month recurring |
| RCM Unlock | First insurance payment received | +$150/month add-on |

*Rationale:* Zero cost before revenue flows. Aligns with physician medical school debt situation. Each milestone is a tangible win they would pay for independently.

---

## Success Criteria (Falsifiable)

| Metric | Target | Timeframe |
|--------|--------|-----------|
| Customer discovery conversations | 10 (5 derm + 5 PT) | 30 days |
| Paid pilots (any amount) | 3 | 60 days |
| Net Promoter on Launch Tracker | ≥8/10 | After first use |
| Time-to-first-patient vs. unassisted | Measurable improvement | 90 days |

---

## Immediate Next Actions

| Priority | Action | Timeline |
|----------|--------|---------|
| 🔴 #1 | 10 Mom Test interviews at UW (5 derm + 5 PT graduating residents) | 30 days |
| 🔴 #2 | Map actual 50 steps to open Derm/PT clinic in WA State | 2 weeks |
| 🔴 #3 | Identify willingness-to-pay trigger from discovery | 30 days |
| 🟡 #4 | Research Alex Hormozi Gym Launch for intake product design | 1 week |
| 🟡 #5 | Read Pull Framework (Rob Schneider) | 1 week |
| 🟡 #6 | Identify 3 pilot clinic owners for concierge MVP | 45 days |
| 🟡 #7 | Evaluate FHIR API: athenahealth, DrChrono, Elation Health | 3 weeks |
| 🟢 #8 | Register clearinghouse partnership interest (Availity, Change Healthcare) | 60 days |
| 🟢 #9 | Establish "Clinical OS" category positioning in all public materials | 2 weeks |
