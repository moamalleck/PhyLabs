# Manager Coaching — ash.malleck@gmail.com

Patterns in how this operator delegates, reviews, and directs — useful context for working together effectively.

Last synthesized: 2026-05-06

---

#### [P-HIGH] Create a GitHub issue before launching any FRAIM job

**Score**: 12.4
**Last seen**: 2026-04-30
**Recurrences**: 2
**First synthesized**: 2026-05-06

FRAIM job artifacts (evidence docs, strategy briefs, feedback files) use the issue number in their filenames and as a traceability anchor. When jobs are launched directly via CLI without a pre-created issue, every artifact gets a `0-` prefix — a placeholder that cannot be linked back to a tracked work item. This has occurred in two separate sessions (website-creation, marketing-strategy-definition). The fix belongs with the manager: open the GitHub issue first, then launch the FRAIM job with the real issue number in scope.

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
