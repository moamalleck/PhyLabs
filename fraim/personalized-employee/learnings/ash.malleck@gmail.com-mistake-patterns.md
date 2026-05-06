# Mistake Patterns — ash.malleck@gmail.com

Recurring agent mistakes and environmental pitfalls to avoid on this project.

Last synthesized: 2026-05-06

---

#### [P-HIGH] gh CLI not available in this shell environment

**Score**: 12.1
**Last seen**: 2026-04-30
**Recurrences**: 2
**First synthesized**: 2026-05-06

`gh` is not on the PATH in the bash/PowerShell environment on this machine. Discovering this at the PR submission step (the last step of any job) interrupts the automated flow and forces a manual URL handoff to the operator. The fix is to check for `gh` during the first phase of any job that has a submission step, surface the fallback plan early, and prepare the PR body text before reaching submission.

---

#### [P-MED] No GitHub issue pre-created before starting a FRAIM job

**Score**: 7.6
**Last seen**: 2026-04-30
**Recurrences**: 2
**First synthesized**: 2026-05-06

FRAIM artifact naming (evidence docs, strategy briefs, feedback files) uses the issue number as a prefix. When a job is launched directly via CLI without a corresponding GitHub issue, every artifact defaults to a `0-` prefix — a placeholder that creates a traceability gap between the file and any tracked work item. The agent should not start a FRAIM job without confirming an issue number exists; if none exists, prompt the operator to create one before proceeding.

---

#### [P-HIGH] browser_snapshot is unreliable on modern web-component sites

**Score**: 7.5
**Last seen**: 2026-04-27
**Recurrences**: 1
**First synthesized**: 2026-05-06

Modern Reddit (shreddit-post web components) and LinkedIn render data in non-semantic HTML that the accessibility tree either does not populate or populates sparsely. `browser_snapshot` returns minimal content on these pages — not because the page failed to load, but because the ARIA layer is incomplete. The correct approach is `browser_run_code` with `page.evaluate()` and direct DOM queries (`shreddit-post` elements, `a[data-testid="post-title"]`, `document.body.innerText`). Always switch to JavaScript evaluation when a snapshot returns near-empty content on a page that visually loaded.

---

#### [P-MED] FRAIM session ID expires during long multi-hour runs

**Score**: 4.7
**Last seen**: 2026-04-27
**Recurrences**: 1
**First synthesized**: 2026-05-06

A FRAIM session established at the start of a long session does not persist indefinitely. The session ID expired mid-run during the customer-prospect-discovery job, requiring a `fraim_connect` reconnect. No data was lost, but it added friction at a phase transition. Proactively call `fraim_connect` before any `seekMentoring` phase transition if the session is more than ~30 minutes old or spans a context interruption.

---

#### [P-MED] LinkedIn content/post search returns off-domain results for pain signal discovery

**Score**: 4.7
**Last seen**: 2026-04-27
**Recurrences**: 1
**First synthesized**: 2026-05-06

LinkedIn's content/post search does not isolate by professional domain when using pain keywords. Queries for terms like "prior authorization" or "billing denial" return posts from AI companies, nonprofits, and unrelated industries — not from the target practitioner community. For healthcare professional prospect discovery, LinkedIn People Search (demographics + location filter) is effective; Reddit subreddits are effective for pain signal. Do not attempt LinkedIn content/post search for pain keywords — skip directly to People Search.

---

#### [P-MED] X/Twitter search quality insufficient for healthcare professional pain discovery

**Score**: 4.7
**Last seen**: 2026-04-27
**Recurrences**: 1
**First synthesized**: 2026-05-06

Multiple query formats (hashtag, quoted phrase, People tab) returned irrelevant results when searching for healthcare professional pain keywords on X/Twitter. The platform's search does not effectively surface domain-specific professional discussions in 2026. Treat X/Twitter as optional and low-priority for this type of discovery; skip it after two failed query attempts and document the decision rather than persisting.
