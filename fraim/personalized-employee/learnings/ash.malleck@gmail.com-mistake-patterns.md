# Mistake Patterns — ash.malleck@gmail.com

Recurring agent mistakes and environmental pitfalls to avoid on this project.

Last synthesized: 2026-06-22

---

#### [P-HIGH] gh CLI not available in this shell environment

**Score**: 16.0
**Last seen**: 2026-06-18
**Recurrences**: 3
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

---

#### [P-HIGH] Community identity assumed without verification — propagates into strategy documents unchecked

**Score**: 8.0
**Last seen**: 2026-05-17
**Recurrences**: 1
**First synthesized**: 2026-05-18

In the 2026-05-17 investor-pitch-preparation session, prior work had embedded "PTOC" as the primary acquisition channel across multiple strategy documents, described as a "10,000-member physician Facebook group." Research confirmed that PTOC means "Physicians Trained Outside of Canada" — a regulatory designation for international medical graduates, not a commercial community. The claim had been carried through the pitch, UVP, and business model documents without a single verification step. Before any community is named as an acquisition channel in a strategy document, verify its existence, nature, and commercial tolerance with a direct web search.

---

#### [P-MED] Unicode symbol characters in markdown tables break Edit tool string matching

**Score**: 5.0
**Last seen**: 2026-05-31
**Recurrences**: 1
**First synthesized**: 2026-05-31

Two Edit attempts failed on `business-strategy-quality-review.md` because the file contained Unicode arrow symbols (▲ ▼) inside markdown table cells. The Edit tool could not match the old_string despite visual equivalence — the mismatch is at the byte level. Both attempts required fallback to a Node.js file splice (read file, split by lines, splice replacement block, write) to complete the update. On any markdown file containing non-ASCII Unicode symbols — especially ▲ ▼ ✅ ❌ 🔴 🟠 🟡 in table cells or headers — prefer Node.js file manipulation over the Edit tool for table row replacements. The Edit tool remains reliable for prose sections with standard ASCII text.

---

#### [P-HIGH] "Zero direct competitors" claimed before competitive research is complete

**Score**: 8.0
**Last seen**: 2026-05-17
**Recurrences**: 1
**First synthesized**: 2026-05-18

Prior work on PhysicianLabs claimed "no direct competitors in the pre-launch physician space." Research in the 2026-05-17 session found five established consulting firms serving this exact market (Physicians Thrive, Independent Practice Partners, TruMediq, Cornerstone Healthcare Consulting, Physician Practice Specialists). The correct claim — "no productized competitor" — is accurate and defensible; the zero-competitor claim is not. Competitive research must include the unproductized consulting market, not just SaaS platforms, before any competitive differentiation statement is finalized.

---

#### [P-HIGH] Platform authentication not verified before starting discovery — platforms missed entirely

**Score**: 8.0
**Last seen**: 2026-06-01
**Recurrences**: 1
**First synthesized**: 2026-06-04

On any browser-based discovery run, the first browser action should be opening and verifying login status for every required platform — before any search begins. In the June 1 prospect discovery session, Phase 3 began with Reddit searches without first verifying LinkedIn login. LinkedIn was never searched as a result, and DPC Frontier was also skipped — leaving 2 of 4 planned platforms incomplete and the prospect count at 10 instead of the 50–200 target. The phase instruction explicitly requires "Open all platform tabs and verify authentication before starting navigation," but this was treated as optional. On any future discovery or research run, the first browser action is navigating to each auth-required platform (LinkedIn, DPC Frontier, etc.) and taking a login-state snapshot. If not logged in, the user is told before any searches proceed.

---

#### [P-HIGH] Partial run scope not flagged to user before execution — surfaced as a finding at the end instead

**Score**: 8.0
**Last seen**: 2026-06-01
**Recurrences**: 1
**First synthesized**: 2026-06-04

When a planned platform is inaccessible or login status is unknown at the start of a run, the user should be told upfront — including the expected impact on prospect count — before proceeding, not after. The June 1 discovery session concluded with a postmortem finding that 2 of 4 planned platforms were unsearched and the prospect count was 10 instead of 50–200. This should have been a pre-execution flag: "I cannot verify LinkedIn login — expect well below 50 prospects if I proceed. Shall I continue or pause?" Before any discovery execution phase begins, if any required platform is inaccessible, the expected prospect count impact will be stated to the user immediately and confirmation to proceed will be requested.

---

#### [P-MED] Subreddit freshness not checked before deep-diving a thread sweep

**Score**: 5.0
**Last seen**: 2026-06-01
**Recurrences**: 1
**First synthesized**: 2026-06-04

Before running a full subreddit thread sweep, check the /new/ feed for the date of the most recent post. If it is more than 6 months old, note it in the dossier and deprioritize. In the June 1 session, r/DirectPrimaryCare was swept in full despite the last post being May 2023 — over a year before the session. A 30-second check of the newest post would have revealed this and redirected effort toward active channels. Prospects from stale subreddits may have lower DM response rates since their posts are old and they may no longer be active on the platform.

---

#### [P-HIGH] Inherited claims carried into a new document without re-checking them against newly validated facts

**Score**: 8.0
**Last seen**: 2026-06-15
**Recurrences**: 1
**First synthesized**: 2026-06-22

When a validated fact changes (the ideal customer, a competitive claim, a channel), re-audit every section of any document that inherits older framing before shipping it. In the 2026-06-15 SoftBank/NEC-X deck, the competition slide argued a "we own the pre-launch window" moat inherited from the May 17 pitch even though the customer had been re-validated as the just-launched physician that same day — Slide 6 said "buyers launched in the last 6–12 months" while Slide 9 claimed a pre-launch moat, and the operator had to surface the contradiction. This is the same failure mode as the earlier "PTOC" and "zero direct competitors" slips: an old claim propagated into a new artifact unchecked. Whenever a core fact is revalidated, re-reconcile every inherited claim in dependent docs (deck, UVP, business plan, SWOT) against the new fact before treating the work as done.

---

#### [P-MED] preview_click can report success but silently not fire on fixed-position or zoomed elements

**Score**: 5.0
**Last seen**: 2026-06-18
**Recurrences**: 1
**First synthesized**: 2026-06-22

When a `preview_click` returns success but the page state does not change, verify with a programmatic `preview_eval` `.click()` before assuming the code is broken. In the 2026-06-18 PoC prototype build, clicks on the fixed bottom demo-bar buttons (`#run-diagnostic`, `#db-next`) reported success but did not fire because the click coordinate translation missed the target at a zoomed viewport — it looked like a broken handler, but the buttons work for real users. Treat a successful-but-inert `preview_click` as a tooling artifact first, and confirm via programmatic click before touching the code.
