# Mistake Patterns

Recurring agent mistakes and anti-patterns observed across sessions for ash.malleck@gmail.com.

**Last synthesized**: 2026-05-06

---

#### P-HIGH LinkedIn content/post search is not viable for professional pain signal discovery

**Score**: 8.0
**Last seen**: 2026-04-27
**Recurrences**: 1
**First synthesized**: 2026-05-06

LinkedIn's content/post search returns results from any vertical matching the keyword, regardless of professional domain. For healthcare practitioner pain discovery, this approach wastes significant session time before requiring a platform pivot. Default to LinkedIn People Search for demographics and Reddit for verbatim pain signal. Never attempt LinkedIn content/post search for pain keywords.

---

#### P-HIGH browser_snapshot is insufficient for data extraction on modern JS-heavy pages

**Score**: 8.0
**Last seen**: 2026-04-27
**Recurrences**: 1
**First synthesized**: 2026-05-06

Reddit (shreddit web components) and LinkedIn render content in non-semantic HTML structures that the accessibility tree does not fully populate. browser_snapshot returns sparse or empty data on these platforms. Always use browser_run_code with JavaScript DOM traversal (page.evaluate(), document.querySelector()) for data extraction from Reddit or LinkedIn pages.

---

#### P-HIGH Patient acquisition omitted from initial problem statement scope

**Score**: 8.0
**Last seen**: 2026-05-01
**Recurrences**: 1
**First synthesized**: 2026-05-06

For clinic-launch or practice-startup problem statements, the initial draft covered operational setup (credentialing, billing, entity formation) but omitted patient acquisition entirely. This would have biased all downstream interview questions toward operational pain and under-sampled the marketing channel and funnel visibility problem. For any product targeting a new independent practice, include patient acquisition as a first-class pain cluster alongside operational setup unless the founder explicitly scopes it out.

---

#### P-HIGH Counterfactual WTP hypothesis is not a valid customer development signal

**Score**: 8.0
**Last seen**: 2026-05-01
**Recurrences**: 1
**First synthesized**: 2026-05-06

Using "would you have paid?" or "would you pay for X?" in a validation hypothesis tests a hypothetical, not a behavior. This is a Mom Test violation. The correct proxy for willingness to pay is real past behavior: money or time actually spent trying to solve the problem before the solution existed. When drafting validation hypotheses, always replace counterfactual WTP framing with behavioral signals (e.g., "Did you hire someone, pay for a guide, or spend 10+ hours figuring this out yourself?").

---

#### P-MED gh CLI availability not verified before submission phase

**Score**: 5.0
**Last seen**: 2026-04-23
**Recurrences**: 1
**First synthesized**: 2026-05-06

In multiple sessions, the PR creation step assumed gh CLI was present in the environment. It was not. This caused a fallback to manual PR URL provision at the end of a submission phase. Verify gh CLI availability (which gh or gh --version) at the start of any job that includes a PR creation step, and surface the fallback plan to the user before reaching the submission phase.

---

#### P-MED FRAIM session expiry in long multi-hour runs

**Score**: 5.0
**Last seen**: 2026-04-27
**Recurrences**: 1
**First synthesized**: 2026-05-06

FRAIM session IDs can expire during extended sessions (30+ minutes between seekMentoring calls). This requires a fraim_connect reconnect call, which adds friction without data loss but interrupts flow. Before each seekMentoring phase transition call in a long session, verify the session is still active. If the last fraim_connect was more than 30 minutes ago, call fraim_connect to renew before proceeding.

---

#### P-MED X/Twitter not viable for healthcare professional pain signal discovery

**Score**: 5.0
**Last seen**: 2026-04-27
**Recurrences**: 1
**First synthesized**: 2026-05-06

X/Twitter's search for professional pain keywords (prior auth, billing, patient retention) returns irrelevant results across multiple query formats in 2026. The platform's usefulness for healthcare professional pain signal is degraded. Treat X/Twitter as optional and low-priority for healthcare discovery. Skip after two failed query attempts and document the skip in the evidence file. Do not invest more than two query attempts before abandoning.

---

#### P-LOW Segment or specialty targeting left vague when founder has a clear hierarchy

**Score**: 3.0
**Last seen**: 2026-05-01
**Recurrences**: 1
**First synthesized**: 2026-05-06

In the problem statement crystallization session, the specialty note defaulted to "no gut sense, wait for interviews" when the founder in fact had a clear segment hierarchy (derm+PT primary, chiro+mental health secondary). This required an extra feedback round to resolve. In Socratic refinement phases, ask directly: "Do you have a priority order across these segments?" before documenting the target market. A clear founder hierarchy, even if not yet interview-validated, is more actionable than a deferred note.
