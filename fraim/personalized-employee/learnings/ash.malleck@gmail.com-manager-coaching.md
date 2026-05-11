# Manager Coaching — ash.malleck@gmail.com

Patterns in how this operator delegates, reviews, and directs — useful context for working together effectively.

Last synthesized: 2026-05-11

---

#### [P-HIGH] Create a GitHub issue before launching any FRAIM job

**Score**: 15.7
**Last seen**: 2026-05-06
**Recurrences**: 3
**First synthesized**: 2026-05-06

FRAIM job artifacts (evidence docs, strategy briefs, feedback files) use the issue number in their filenames and as a traceability anchor. When jobs are launched directly via CLI without a pre-created issue, every artifact gets a `0-` prefix — a placeholder that cannot be linked back to a tracked work item. This has now occurred three times (Apr 23, Apr 30, May 6), confirming it is a durable workflow gap on the manager side. The agent should also convert this from a passive gap-flag to an active opening question: "What is the GitHub issue number for this work?" at the start of every FRAIM session.

---

#### [P-HIGH] Verify gh CLI availability before any job with a PR submission step

**Score**: 12.4
**Last seen**: 2026-04-30
**Recurrences**: 2
**First synthesized**: 2026-05-06

`gh` is not installed in this machine's shell environment. This has caused the submission phase to fall back to a manual URL handoff in two separate sessions (website-creation, marketing-strategy-definition). The agent should check for `gh` in Phase 1 of any job that ends with a PR submission step, surface the gap to the operator immediately, and prepare the PR title and body text early so the handoff is seamless rather than a last-minute interruption. Installing `gh` or ensuring it is on the PATH would eliminate this entirely.

---

## P-HIGH Platform prioritization for healthcare professional discovery

**Score**: 8.0
**Last seen**: 2026-04-27
**Recurrences**: 1
**First synthesized**: 2026-05-06

The prospect discovery session established a clear platform priority order for healthcare professional discovery: (1) Reddit for pain signal (verbatim quotes, business pain threads), (2) LinkedIn People Search for demographic qualification (name, title, location), (3) X/Twitter optional — skip after 2 failed attempts. When commissioning future prospect discovery runs, specify this order explicitly in the brief to avoid time wasted on non-viable channels.

---

#### [P-HIGH] Probe segment and scope tensions explicitly during Socratic phases

**Score**: 8.0
**Last seen**: 2026-05-01
**Recurrences**: 1
**First synthesized**: 2026-05-06

In the problem statement crystallization session, a visible tension between two target segments (derm+PT vs. chiro+derm) was carried through the entire session without being directly resolved. The manager had a clear hierarchy (derm+PT primary, chiro+mental health secondary) that emerged only in the feedback round. A direct Socratic question — "Do you have a priority order across these segments?" — would have resolved this in Phase 1. When segment, scope, or framing tensions are visible, ask for explicit resolution during the refinement phase rather than flagging as TBD and deferring to documentation.

---

## P-MED Equal segment balance: require compensating pass before sign-off

**Score**: 5.0
**Last seen**: 2026-04-27
**Recurrences**: 1
**First synthesized**: 2026-05-06

When requesting equal distribution across segments (e.g. 20 chiropractors + 20 dermatologists), build a checkpoint into the brief: if one segment is >20% below the other after the primary discovery passes, a compensating LinkedIn pass must be run before declaring completion. The prospect discovery session delivered 24 chiro vs 16 derm without this check, missing the stated equal-split requirement.

---

## P-MED FRAIM session durability in long delegated sessions

**Score**: 5.0
**Last seen**: 2026-04-27
**Recurrences**: 1
**First synthesized**: 2026-05-06

In a multi-hour session, the FRAIM session ID expired mid-run. While no work was lost, the interruption was avoidable. For long delegated sessions (>2 hours, multiple FRAIM phase transitions), ask the agent to reconnect the FRAIM session proactively before each `seekMentoring` call rather than waiting for an expiry error.

---

#### [P-MED] Ask "What else is part of this problem?" before finalizing any problem statement

**Score**: 5.0
**Last seen**: 2026-05-01
**Recurrences**: 1
**First synthesized**: 2026-05-06

Patient acquisition was omitted from the initial problem statement draft because the session naturally followed the source documents, which framed the problem as operational complexity. The manager caught this in the feedback round. A closing question during the Socratic refinement phase — "Is there anything else that belongs in this problem that we haven't covered?" — would have surfaced the missing pain cluster before synthesis. Make this question standard in any problem-statement-crystallization or scope-definition job.

---

#### [P-MED] Commission revision jobs with an explicit "what changed" brief

**Score**: 4.9
**Last seen**: 2026-05-06
**Recurrences**: 1
**First synthesized**: 2026-05-11

When delegating a revision job ("revise the existing marketing brief"), specifying what changed vs. what should be preserved prevents the agent from defaulting to a shallow find-and-replace. In the May 6 design-partner revision, minimal input was sufficient for a confident session, but a one-line scope note — "change the offer, commitment, and qualification gate; preserve the ICP and channels" — would reduce the risk of cosmetic revision in lower-confidence contexts. For significant strategic reframes, include a "what changed" note in the job brief.
