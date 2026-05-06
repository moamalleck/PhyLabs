# Manager Coaching — ash.malleck@gmail.com

Guidance on how to direct and delegate to the AI agent more effectively.

---

## P-HIGH Check for gh CLI at session start in submission-heavy jobs

**Score**: 8.0
**Last seen**: 2026-04-23
**Recurrences**: 1
**First synthesized**: 2026-05-06

In the website-creation session, the absence of `gh` CLI was only discovered at the PR submission step, forcing a disruptive fallback. As the manager, confirming tooling availability at the start of a session (or asking the agent to verify it) prevents late-stage friction. For jobs with a PR submission phase, ask the agent to check `which gh` early and confirm the fallback plan before work begins.

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

---
