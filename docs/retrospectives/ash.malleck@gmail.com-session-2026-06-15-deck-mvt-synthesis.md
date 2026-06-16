---
author: ash.malleck@gmail.com
date: 2026-06-15
---

# Session Retrospective — SoftBank/NEC-X deck + first MVT close-out + post-launch reframe
**Date:** 2026-06-15
**Jobs run:** investor-pitch-preparation, sleep-on-learnings (x2, both no-op), issue-retrospective
**Outcome:** 14-slide SoftBank/NEC-X pre-seed deck + full pitch package produced. First MVT formally closed out with recorded verdict. Customer interview synthesis (5 physicians, 7 sessions) consolidated. Validated pivot (just-launched ICP, $1K money-back PoC) propagated into business plan and deck. Deck competitive narrative reframed for the post-launch ICP.

---

## What Went Well

- **Front-loaded context scan before asking anything.** Before the deck, scanned all memory files, business docs, and FRAIM job context, which reduced the clarifying questions to four sharp, decision-changing ones (traction, ask, solution-lead, team). No structural rework followed.
- **Caught that the first MVT was never closed out.** The experiment's evidence log froze on June 1 and the June 4 pass/fail verdict was never recorded. Reconciling the evidence log against the outreach tracker (June 6) surfaced the actual result — Saf's confirmed $1K PoC — and let the experiment be closed honestly.
- **Held traction integrity under investor pressure.** Refused to write "5 signed LOIs" or "first paying customer" when the truth was "verbal LOIs" and "confirmed commitment, payment pending, family member." Moved the family caveat into the speaker notes as a proactive-disclosure script rather than hiding or overstating it.
- **Honest no-op on both sleep-on-learnings runs.** Reported "nothing to synthesize" twice rather than fabricating signals to fill the analyze/write phases.
- **Layered, conservative market sizing.** Led with the $23–46M wedge and $480M SAM rather than the headline $65B/$196B macro, pre-empting the "that's a market-cap number, not your addressable market" pushback.

---

## What Went Wrong / Mistakes Made

### Mistake 1: Built the deck's competitive moat on inherited pre-launch framing that contradicted the just-launched ICP

**What happened:** At deck-build time the customer-discovery signal that the buyer is *post-launch* (just-launched physicians feel the pain; pre-launch don't) was already on record — it was in the `customer_discovery_state` memory and the June 1 Saf interview. Yet the competition slide (Slide 9) was built on a pre-launch-*timing* moat inherited from the May 17 pitch package ("we own the pre-launch window incumbents ignore"), while Slide 6 simultaneously said "hottest buyers launched in the last 6–12 months." The deck contradicted itself. The user had to prompt ("do we need to adapt for the post-launch customer?") to surface it.

**Impact:** A sharp investor would have caught the internal contradiction in seconds ("your buyer just launched, but your wedge is pre-launch — which is it?"), at the exact moment credibility matters most.

**Root cause:** I carried the competitive framing forward from the prior pitch package without re-reconciling it against the freshly validated ICP. This is the **same failure mode as the May 17 PTOC and "zero competitors" mistakes** — an inherited claim propagated into a new document without re-checking it against current validated state. It is a recurrence, not a one-off.

**Fix applied:** Reframed the Slide 9 2×2 from timing (pre/post-launch) to layer (decision-intelligence/windshield vs. record-keeping/rear-view) × migration. The moat is now structural (layer + data + no migration), consistent with the post-launch ICP, and more defensible.

---

### Mistake 2: Malformed empty `seekMentoring` tool call

**What happened:** During the deck job's deck-outline phase I issued a `seekMentoring` call with no arguments and got an InputValidationError. Self-corrected on the next call.

**Impact:** Minor — one wasted round-trip, no downstream effect.

**Root cause:** Tool-call assembly slip, not a reasoning error. Low severity; noted for completeness.

---

## Where Past Learnings Actually Fired

- **P-HIGH "Front-load context scan before asking the operator any questions"** — fired hard on the deck; the four clarifying questions were only the ones the repo genuinely could not answer.
- **P-HIGH "Audience-segmented pitch framing — ask the audience type before finalizing"** — fired: asked traction/ask/solution-lead/team before building, given the SoftBank/NEC-X global-VC audience.
- **P-MED "Two-sided market narrative — acknowledge the headwind before the tailwind"** — fired: Slide 5 names the 60%→42% independent decline before pivoting to the DPC tailwind.
- **P-HIGH "Physician-specific copy: clinical credibility over generic SaaS language"** — fired: $115 vs $290 reimbursement, "nauseating" tax quote, $200K/yr admin, credentialing — no generic SaaS phrasing.
- **P-MED "Deep navy + electric teal brand palette"** — fired: deck built in the established palette without being asked.
- **P-HIGH "Document the rationale for key decisions"** — fired: every doc edit and the traction-slide judgment call carried its rationale inline.

---

## What I Almost Did Wrong But Caught

- **Almost claimed "first paying customer" on the traction slide.** Caught it: the card is not charged and the subject is family, so the slide says "first paid PoC commitment confirmed" and the family/payment-pending caveat lives in the speaker notes for proactive disclosure.
- **Almost ran the `issue-retrospective` job as-is for this retrospective.** Caught that its `.docx` output would not match the `docs/retrospectives/ash.malleck@gmail.com-*.md` convention that `sleep-on-learnings` reads — so the retrospective would never have become an L0 signal. Wrote the `.md` in the established convention instead.

---

## New Learnings (Candidate L1 Signals)

1. **[mistake-patterns]** Inherited framing propagated into a new artifact without reconciling against freshly validated state — the deck's competitive moat (pre-launch timing) contradicted the just-launched ICP validated the same day, and the user had to surface it. **Recurrence** of the May 17 "propagated assumptions" pattern (PTOC, "zero competitors"). When validated state changes (ICP, competitive claim, channel), re-audit every inherited document section against it before shipping. P-HIGH.
2. **[validated-patterns]** Traction integrity under investor pressure — never upgrade "confirmed commitment" to "paying customer" without a charged, arm's-length card; move credibility caveats (family subject, payment pending) into speaker notes as proactive disclosure rather than omitting them. P-HIGH.
3. **[validated-patterns]** Reconcile an experiment's evidence log against the live pipeline/CRM before declaring a verdict — the MVT result (Saf's confirmed PoC) lived in the outreach tracker, not the experiment doc whose log had frozen. P-MED.
4. **[manager-coaching]** Experiments need a forcing function to record the pass/fail verdict on the decision date — this MVT lapsed 11 days un-closed. Consider a lightweight convention (or project rule) that an experiment doc must be closed with a recorded verdict on its stated review date. P-MED.
5. **[validated-patterns]** When the retrospective's purpose is to feed the learning pipeline, match the exact artifact convention the pipeline reads (`ash.malleck@gmail.com-*.md`, frontmatter, no `synthesized`) rather than a generic job's default output format. P-MED.
