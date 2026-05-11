# Mistake Patterns — ash.malleck@gmail.com

Recurring agent mistakes and environmental pitfalls to avoid on this project.

Last synthesized: 2026-05-11

---

#### [P-HIGH] gh CLI not available in this shell environment

**Score**: 12.1
**Last seen**: 2026-04-30
**Recurrences**: 2
**First synthesized**: 2026-05-06

`gh` is not on the PATH in the bash/PowerShell environment on this machine. Discovering this at the PR submission step (the last step of any job) interrupts the automated flow and forces a manual URL handoff to the operator. The fix is to check for `gh` during the first phase of any job that has a submission step, surface the fallback plan early, and prepare the PR body text before reaching submission.

---

#### [P-HIGH] No GitHub issue pre-created before starting a FRAIM job

**Score**: 9.6
**Last seen**: 2026-05-06
**Recurrences**: 3
**First synthesized**: 2026-05-06

FRAIM artifact naming (evidence docs, strategy briefs, feedback files) uses the issue number as a prefix. When a job is launched directly via CLI without a corresponding GitHub issue, every artifact defaults to a `0-` prefix — a placeholder that creates a traceability gap between the file and any tracked work item. This has now occurred three times (Apr 23, Apr 30, May 6), confirming it is a workflow pattern, not an isolated lapse. The agent should not start a FRAIM job without explicitly asking: "What is the GitHub issue number for this work?" as the first question at session open — not as a flagged gap at the end of Phase 1.

---

#### [P-HIGH] browser_snapshot is unreliable on modern web-component sites

**Score**: 7.5
**Last seen**: 2026-04-27
**Recurrences**: 1
**First synthesized**: 2026-05-06

Modern Reddit (shreddit-post web components) and LinkedIn render data in non-semantic HTML that the accessibility tree either does not populate or populates sparsely. `browser_snapshot` returns minimal content on these pages — not because the page failed to load, but because the ARIA layer is incomplete. The correct approach is `browser_run_code` with `page.evaluate()` and direct DOM queries (`shreddit-post` elements, `a[data-testid="post-title"]`, `document.body.innerText`). Always switch to JavaScript evaluation when a snapshot returns near-empty content on a page that visually loaded.

---

#### [P-HIGH] Patient acquisition omitted from initial problem statement scope

**Score**: 8.0
**Last seen**: 2026-05-01
**Recurrences**: 1
**First synthesized**: 2026-05-06

For clinic-launch or practice-startup problem statements, the initial draft covered operational setup (credentialing, billing, entity formation) but omitted patient acquisition entirely. This would have biased all downstream interview questions toward operational pain and under-sampled the marketing channel and funnel visibility problem. For any product targeting a new independent practice, include patient acquisition as a first-class pain cluster alongside operational setup unless the founder explicitly scopes it out.

---

#### [P-HIGH] Counterfactual WTP hypothesis is not a valid customer development signal

**Score**: 8.0
**Last seen**: 2026-05-01
**Recurrences**: 1
**First synthesized**: 2026-05-06

Using "would you have paid?" or "would you pay for X?" in a validation hypothesis tests a hypothetical, not a behavior. This is a Mom Test violation. The correct proxy for willingness to pay is real past behavior: money or time actually spent trying to solve the problem before the solution existed. When drafting validation hypotheses, always replace counterfactual WTP framing with behavioral signals (e.g., "Did you hire someone, pay for a guide, or spend 10+ hours figuring this out yourself?").

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

---

## P-MED Segment balance drift without a compensating pass

**Score**: 4.7
**Last seen**: 2026-04-27
**Recurrences**: 1
**First synthesized**: 2026-05-06

When the user explicitly requested equal segment distribution (chiro vs derm), the final prospect list came out 24 vs 16 — a 33% imbalance — because X/Twitter abandonment disproportionately reduced derm signal and no compensating LinkedIn pass was run. The correct pattern: if one segment is >20% below the other after Reddit discovery, run a compensating LinkedIn People Search pass before declaring completion.

---

#### [P-MED] Python unavailable on this Windows machine — use Node.js/PowerShell for .docx extraction

**Score**: 5.0
**Last seen**: 2026-05-10
**Recurrences**: 1
**First synthesized**: 2026-05-11

Python is not installed in this shell environment. The `.docx` extraction skill references `python scripts/office/unpack.py`, which fails on this machine. The working fallback: rename the `.docx` to `.zip`, expand via PowerShell `Expand-Archive`, then read `word/document.xml` using Node.js. Do not attempt the Python path first on this machine — go directly to the Node.js/PowerShell approach.

---

#### [P-MED] Em-dashes in initial artifact drafts violate formal-communication guardrails — draft without them from the start

**Score**: 5.0
**Last seen**: 2026-05-10
**Recurrences**: 1
**First synthesized**: 2026-05-11

When drafting any artifact under formal-communication standards, em-dashes introduced in the first pass require a full rewrite before finalizing — a wasted cycle. The fix is to draft without em-dashes from the start, not catch them at the validate-output phase. Confirmed when the Chelsea Parkman session produced a clean first draft with no rewrite pass needed after the lesson was applied from the David Jorjani session.

---

#### [P-MED] Long .docx transcripts (>700 lines) require two reads — plan the offset proactively

**Score**: 5.0
**Last seen**: 2026-05-10
**Recurrences**: 1
**First synthesized**: 2026-05-11

Files exceeding approximately 25K tokens (around 700–800 lines for transcript `.docx` files) cannot be read in a single pass. A proactive two-chunk read — first pass from line 1, second pass with offset at approximately line 450 — should be planned before starting extraction, not triggered by a read error mid-session. The 901-line Chelsea Parkman transcript confirmed the threshold.

---

#### [P-MED] fraim/config.json may contain unsupported fields from prior automated init steps

**Score**: 5.0
**Last seen**: 2026-05-10
**Recurrences**: 1
**First synthesized**: 2026-05-11

`fraim init-project` or equivalent tooling may write fields into `fraim/config.json` that later schema versions do not support (e.g., `customizations.worktrees`). Manual schema inspection is not sufficient to catch these — only `npx fraim workspace-config validate` provides authoritative confirmation. Before adding new config fields, strip any unrecognised existing fields against the current schema first.

---

#### [P-MED] Editing worktree path instead of project root when files live in the main repo

**Score**: 5.0
**Last seen**: 2026-05-10
**Recurrences**: 1
**First synthesized**: 2026-05-11

In repositories with Claude worktrees (`.claude/worktrees/<branch-name>/`), config files such as `fraim/config.json` live in the project root, not inside the worktree directory. Attempting to edit the worktree path fails with "file not found." Establish the canonical project root path before any file operations at the start of any session operating in a repo with worktrees.

---

#### [P-LOW] Segment or specialty targeting left vague when founder has a clear hierarchy

**Score**: 3.0
**Last seen**: 2026-05-01
**Recurrences**: 1
**First synthesized**: 2026-05-06

In the problem statement crystallization session, the specialty note defaulted to "no gut sense, wait for interviews" when the founder in fact had a clear segment hierarchy (derm+PT primary, chiro+mental health secondary). This required an extra feedback round to resolve. In Socratic refinement phases, ask directly: "Do you have a priority order across these segments?" before documenting the target market.
