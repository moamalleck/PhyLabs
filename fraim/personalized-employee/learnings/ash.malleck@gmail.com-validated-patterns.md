# Validated Patterns — ash.malleck@gmail.com

Durable judgment calls and successful unusual-but-correct decisions worth reproducing.

Last synthesized: 2026-06-22

---

#### [P-HIGH] Front-load context scan before asking the operator any questions

**Score**: 22.5
**Last seen**: 2026-06-18
**Recurrences**: 6
**First synthesized**: 2026-05-06

Before asking the operator anything, scan all available repo artifacts (docs/, config, prior job outputs, retrospectives) for context relevant to the current task. In the website-creation, marketing-strategy-definition, and marketing-strategy-revision sessions, this scan reduced the question set to only what was genuinely unanswerable from the repo — zero structural revisions across all three sessions. The cost of a context scan is low; the cost of asking questions the repo already answers is operator friction and longer sessions.

---

#### [P-HIGH] Front-loaded reference site discovery prevents structural rework

**Score**: 7.6
**Last seen**: 2026-04-23
**Recurrences**: 1
**First synthesized**: 2026-05-06

In the website-creation session, spending Phase 1 visiting three reference sites via Playwright browser (Viedoc, Inshur, Datel) before writing any code extracted specific design patterns — alternating pillar rows, dark-themed mock UI cards, dual CTA structure — that directly shaped the final design. The user approved at first submission with zero structural revisions. Skipping this step to save time would have produced a more generic result and likely triggered revision rounds. For any design-before-build job, browser visits to reference sites are mandatory, not optional.

---

#### [P-HIGH] Mock UI cards with realistic data for pre-product marketing sites

**Score**: 12.7
**Last seen**: 2026-06-18
**Recurrences**: 2
**First synthesized**: 2026-05-06

When no live product exists to screenshot, dark-themed mock UI cards populated with realistic data (claim denial rates, no-show percentages, checklist items, dollar amounts) convey product maturity more credibly than placeholders or generic illustrations. In the PhysicianLabs website session, each pillar section got a mock card showing real-world metrics — the user did not request any visual improvements, confirming the mocks carried full credibility. Apply this pattern in any website-creation job where the product is pre-launch.

---

#### [P-HIGH] LinkedIn People Search for practitioner demographic qualification

**Score**: 7.7
**Last seen**: 2026-04-27
**Recurrences**: 1
**First synthesized**: 2026-05-06

After LinkedIn content search returned irrelevant results, pivoting to People Search (`/search/results/people/?keywords=<role>+<city>`) immediately returned relevant practitioners with verifiable title, location, and profile. The switch was triggered by recognising a platform-level failure (zero medical context in results) rather than a query failure. People Search is the correct LinkedIn tool for healthcare professional discovery; content search is not viable for pain keyword research.

---

#### [P-HIGH] Reddit JavaScript DOM extraction via browser_run_code

**Score**: 7.7
**Last seen**: 2026-04-27
**Recurrences**: 1
**First synthesized**: 2026-05-06

Reddit's shreddit-based rendering requires JavaScript DOM traversal for reliable data extraction. The pattern that works: `browser_run_code` with `page.evaluate()` querying `shreddit-post` elements for post titles and authors, and `document.body.innerText` for comment content. `browser_snapshot` returns sparse ARIA data on these pages and should not be used as the primary extraction method. Using `browser_run_code` was triggered by cross-checking that the page had loaded (title visible) before accepting an empty snapshot. This pattern is required for all Reddit prospect discovery and content research tasks.

---

#### [P-HIGH] Verbatim pain quotes from Reddit as a compounding outreach asset

**Score**: 7.7
**Last seen**: 2026-04-27
**Recurrences**: 1
**First synthesized**: 2026-05-06

Capturing verbatim Reddit pain quotes alongside prospect demographic data creates a compounding outreach asset — the quote becomes the personalised cold outreach angle without additional research. In the PhysicianLabs prospect discovery run, all 40 CSV rows included a direct public quote, enabling immediate, credible personalisation. Always include a PainQuote column in prospect CSVs when Reddit is a discovery source.

---

#### [P-HIGH] Revision-mode jobs require explicit delta analysis before writing

**Score**: 7.8
**Last seen**: 2026-05-06
**Recurrences**: 1
**First synthesized**: 2026-05-11

When a job begins with "revise the existing X," the first step is to map what changed vs. what stayed the same before touching any document. Changes that appear cosmetic (e.g., "pilot" to "design partner") often have substantive downstream effects on the offer, commitment definition, qualification gate, and outreach messages. In the May 6 marketing-strategy-revision session, identifying the delta prevented a shallow find-and-replace that would have missed material changes across four sections. A delta analysis step should be the first named action in any revision-mode job run.

---

#### [P-HIGH] Cross-mentor convergence on the same point is a high-signal validation marker

**Score**: 8.0
**Last seen**: 2026-05-10
**Recurrences**: 1
**First synthesized**: 2026-05-11

When two independent mentors give the same guidance on the same point without coordination (both David Jorjani and Chelsea Parkman flagged the midstream module as the wrong starting point), that convergence deserves explicit callout in the output artifact, not just a passive note. Independent convergence across two high-credibility sources is qualitatively stronger than a single source repeated. Mark these moments clearly in transcript analysis and customer development artifacts so the signal is visible to the operator.

---

#### [P-MED] Physician-specific language outperforms generic SaaS copy for this ICP

**Score**: 10.0
**Last seen**: 2026-06-18
**Recurrences**: 3
**First synthesized**: 2026-05-06

Copy that uses exact physician vocabulary ("credentialing", "payer enrollment", "clean claim", "month-three cash crisis") lands harder than generic operational language ("reduce costs", "streamline workflows"). "Profits bleeding from both ends" was approved immediately and not revised; "Clinical Operating System" was adopted as the category label without pushback. When writing for PhysicianLabs, always draft copy using the physician's own words from the pain quotes in the prospect CSV and business-validation-report before reaching for SaaS defaults.

---

#### [P-MED] Precision outreach is the right strategy for pilot recruitment sprints

**Score**: 4.9
**Last seen**: 2026-04-30
**Recurrences**: 1
**First synthesized**: 2026-05-06

When the goal is a small number of committed pilot customers (3 to 6) on a short timeline (3 weeks), the correct channel strategy is precision outreach — personalized DMs, warm intros, community trust-building — not broadcast marketing. Paid ads, newsletters, and public launches are compounding assets that do not convert fast enough for pilot sprints. Excluding these channels explicitly in the strategy brief was correct and went uncontested by the operator.

---

#### [P-MED] Distinguish platform-level search failure from query-level failure

**Score**: 4.8
**Last seen**: 2026-04-27
**Recurrences**: 1
**First synthesized**: 2026-05-06

When search results are completely off-domain (none of the results belong to the target professional community in any way), the failure is at the platform level, not the query level. Trying different keyword variants will not fix a platform-level problem. The signal to watch for: zero results from the target domain across multiple query formats. When this occurs, switch platforms rather than iterating on query wording.

---

#### [P-MED] Proactive WCAG form label audit before submission

**Score**: 7.9
**Last seen**: 2026-06-18
**Recurrences**: 2
**First synthesized**: 2026-05-06

In the website-creation session, a proactive WCAG 2.1 AA audit during the optimisation phase caught form inputs with no associated label elements — a genuine accessibility failure — before submission, without being asked. The sr-only label pattern was applied immediately. For any UI work involving form elements, always audit for label associations as part of the pre-submission checklist, not as an afterthought during review.

---

#### [P-MED] Evidence doc before commit preserves the audit trail

**Score**: 4.8
**Last seen**: 2026-04-23
**Recurrences**: 1
**First synthesized**: 2026-05-06

Creating the evidence document first and committing it alongside the feature files ensures the audit trail is always intact in the same atomic commit. In the PhysicianLabs website session, the evidence doc was written before the commit — no separate clean-up step required. Reversing this order (code first, evidence later) risks forgetting the evidence doc entirely or creating a dangling commit.

---

#### [P-MED] Same-day learning synthesis delivers same-day ROI

**Score**: 4.9
**Last seen**: 2026-05-06
**Recurrences**: 1
**First synthesized**: 2026-05-11

All three L1 learnings synthesized in the morning sleep-on-learnings run on May 6 applied directly in the afternoon marketing-strategy-revision session — VP-1, P-1, and MP-2 each fired within the first two phases, contributing to a first-pass approval with zero revision rounds. Running sleep-on-learnings before starting the day's work is not overhead; it is preparation that materially affects session quality within hours.

---

#### [P-MED] Grounding discipline in transcript analysis — every item must trace to a specific exchange

**Score**: 5.0
**Last seen**: 2026-05-10
**Recurrences**: 1
**First synthesized**: 2026-05-11

In transcript analysis jobs, every item in the final artifact (Items Learned, Actionable Items, Other Important Notes) must be traceable to a specific exchange in the transcript. Background knowledge, inference, or pattern-matching from prior sessions should never be promoted as a finding unless explicitly confirmed in the transcript. This discipline is what distinguishes a grounded analysis from a plausible-but-fabricated one.

---

#### [P-MED] FRAIM workspace-config validator is the authoritative check for config correctness



**Score**: 5.0
**Last seen**: 2026-05-10
**Recurrences**: 1
**First synthesized**: 2026-05-11

`npx fraim workspace-config validate` is the ground truth for whether `fraim/config.json` is correctly formed. Manual schema inspection is not sufficient — fields that look syntactically correct may be unsupported (e.g., `customizations.worktrees`). Run the validator immediately after every config write, not just at the end of the session, and treat a clean validator pass as a pre-condition for reporting the write phase complete.

---

#### [P-HIGH] Audience-segmented pitch framing — ask the audience type before finalizing any pitch

**Score**: 12.7
**Last seen**: 2026-06-15
**Recurrences**: 2
**First synthesized**: 2026-05-18

In the 2026-05-17 pitch refinement session, the one-sentence pitch changed materially between startup-oriented and healthcare-oriented mentor panels. For startup mentors: lead with the price contrast ("$30K–$60K consultants, productized at $2,500") and end on the market gap. For healthcare mentors: lead with "medical training never covered" and end on "18 months too late." Both framings use the same core claim but land on entirely different emotional triggers. Asking "Who specifically is on the panel?" before finalizing any pitch is a high-leverage question — the answer changes the last phrase of every sentence.

---

#### [P-MED] Two-sided market narrative — acknowledge the headwind before claiming the tailwind

**Score**: 7.9
**Last seen**: 2026-06-15
**Recurrences**: 2
**First synthesized**: 2026-05-18

When a market has mixed trends (e.g., overall independent physician ownership declining while Direct Primary Care grows at 10–15% annually), presenting only the growth tailwind reads as naive to sophisticated mentors and investors who know the full picture. The correct structure: name the headwind explicitly first ("independent ownership dropped from 60% to 42% since 2012"), then reframe with the tailwind and the reason it changes the investment thesis ("the physicians choosing independence today are doing it with conviction, not by default"). Acknowledging the headwind disarms the objection before it is raised and makes the tailwind more credible.

---

#### [P-MED] Forum and community research as a prior-work correction pass

**Score**: 5.0
**Last seen**: 2026-05-17
**Recurrences**: 1
**First synthesized**: 2026-05-18

In the 2026-05-17 investor-pitch-preparation session, commissioning a targeted forum and community research agent before writing the pitch package caught two material errors from prior work: the PTOC community misidentification and the "zero competitors" overclaim. Both errors had been present in strategy documents for multiple sessions without being surfaced. For any pitch or GTM document that references specific communities or competitive claims, a research validation pass against those claims should be run before the document is finalized — the cost is low and the catch rate on propagated assumptions is high.

---

#### [P-HIGH] ICP crystallization: ask "describe your customer" before presenting options

**Score**: 8.0
**Last seen**: 2026-05-31
**Recurrences**: 1
**First synthesized**: 2026-05-31

In the 2026-05-31 ICP decision session, Ash was presented with Options A, B, and C for the ICP fork. He chose Option C but then provided four specific criteria — disposable income, risk awareness, high WTP, reclaim agency — that were not in any of the options. These criteria became the most precise ICP framing produced in any session to date and crystallized the hospital-to-concierge ICP in a single exchange. Cross-validated immediately against Sameer Gafoor's unprompted concierge recommendation and Saf/Shaun's financial visibility signals, the ICP was documentable in minutes with zero revision rounds. The options framework prompted the choice; the founder's own articulation produced the insight. Before presenting structured ICP options, ask: "Describe the customer you picture when you imagine the ideal sale." Apply the answer to sharpen or rewrite the options rather than defaulting to pre-built alternatives that may not reflect the founder's mental model.

---

#### [P-HIGH] Only update quality scores after all session work is complete

**Score**: 8.0
**Last seen**: 2026-05-31
**Recurrences**: 1
**First synthesized**: 2026-05-31

In the 2026-05-31 strategy review session, the composite score and strategic coherence score were updated in the YAML frontmatter before the ICP decision doc was written, the pitch was fixed, the SWOT was updated, or the business plan was revised. The scores were stale for the duration of the work, required two additional Edit passes to correct the scorecard table, and created a period where the document was internally inconsistent. The correct pattern: in any review or audit job, only update composite scores and dimension scores after all planned artifact changes in that session are verified complete. If needed, add a provisional note ("fixes in progress — score will update at end of session") and update scores as the final act of the session.

---

#### [P-MED] Do-not-contact discipline applied proactively before starting a discovery run

**Score**: 5.0
**Last seen**: 2026-06-01
**Recurrences**: 1
**First synthesized**: 2026-06-04

Prior outreach history should be read from the recruitment tracker as a named first step in Phase 2 of any discovery run, before search execution begins. In the June 1 prospect discovery run, the recruitment tracker was read before any searches began and all 8 previously contacted prospects were excluded without needing a separate prompt or reminder. No duplicates appeared in the final CSV. This discipline fired cleanly. Always include this as an explicit named step in the discovery run dossier so it is not skipped when sessions are time-pressured.

---

#### [P-MED] Parked ICP prospects correctly excluded during active discovery — scoring discipline held

**Score**: 5.0
**Last seen**: 2026-06-01
**Recurrences**: 1
**First synthesized**: 2026-06-04

When a parked ICP archetype surfaces in discovery results, score them at ≤5 or omit them rather than including them for volume. In the June 1 session, r/DirectPrimaryCare surfaced PT and chiro commenters alongside physician prospects. All were scored 5 or excluded — consistent with the parked Jordan Park ICP status. The final CSV of 10 rows contained MDs only. When a parked ICP prospect appears, note it explicitly in the qualification reasoning column with a reference to the parked archetype so the scoring decision is traceable.

---

#### [P-HIGH] Traction integrity under investor pressure — never upgrade a commitment to a "paying customer"

**Score**: 8.0
**Last seen**: 2026-06-15
**Recurrences**: 1
**First synthesized**: 2026-06-22

Never describe a "confirmed commitment" as a "paying customer" until a card is actually charged and the buyer is arm's-length; put credibility caveats (family subject, payment pending) into speaker notes as proactive disclosure rather than omitting them. Building the 2026-06-15 pre-seed deck, the honest status was "verbal LOIs" and "one confirmed $1K PoC commitment — payment pending, buyer is the founder's brother," and the temptation under investor pressure was to write "5 signed LOIs" and "first paying customer." Holding the line — and moving the family/payment caveat into the speaker notes as a disclosure script — protects credibility at the moment it matters most. In any pitch or fundraising artifact, claim revenue and customers only at the strength the evidence supports, and surface weakening caveats proactively instead of omitting them.

---

#### [P-MED] Reconcile an experiment's evidence log against the live pipeline before declaring a verdict

**Score**: 5.0
**Last seen**: 2026-06-15
**Recurrences**: 1
**First synthesized**: 2026-06-22

Before recording an experiment's pass/fail verdict, reconcile its (often stale) evidence log against the live pipeline or CRM where the real outcome may have landed. The first MVT's evidence log froze on June 1 and the June 4 verdict was never recorded — but the actual result (Saf's confirmed $1K PoC) had been captured in `outreach-tracker.md` on June 6. Cross-referencing the two let the experiment be closed honestly instead of being declared a clean fail. When closing an experiment, check the live pipeline for outcomes the experiment doc may not have captured before writing the verdict.

---

#### [P-MED] When a retrospective must feed the learning pipeline, write it in the exact convention the pipeline reads

**Score**: 5.0
**Last seen**: 2026-06-15
**Recurrences**: 1
**First synthesized**: 2026-06-22

If the purpose of a retrospective is to become a learning signal, write it as `docs/retrospectives/<email>-*.md` with the correct frontmatter (and no `synthesized` date) rather than a generic job's default output format. In the 2026-06-15 session, the `issue-retrospective` job would have produced a `.docx`, which `sleep-on-learnings` never reads — so the retrospective would never have become a signal. Writing the markdown in the established convention is what lets the learning pipeline pick it up. Match the consuming pipeline's exact artifact convention whenever a deliverable's purpose is to be ingested by another process.

---

#### [P-MED] Honor project-rule overrides over generic job phase steps

**Score**: 5.0
**Last seen**: 2026-06-18
**Recurrences**: 1
**First synthesized**: 2026-06-22

When a FRAIM phase step assumes a branch or worktree (or any action the project bans), follow `project_rules.md` and flag the override rather than executing the generic step. In the 2026-06-18 PoC prototype job, the phase step literally said "ensure a prototype/ branch is active," but this project has an absolute no-branch/no-worktree rule. Catching the conflict, working in place on `main`, and flagging it kept the work compliant. Project rules win over generic job steps; name the override out loud instead of silently following the stub.

---

#### [P-MED] Extend an existing brand/design baseline instead of inventing ad-hoc tokens

**Score**: 5.0
**Last seen**: 2026-06-18
**Recurrences**: 1
**First synthesized**: 2026-06-22

When a brand or design baseline already exists in the repo, lift its tokens rather than inventing a new ad-hoc set — and flag a proper design-system follow-on if one is missing. The 2026-06-18 PoC prototype reused `PhysicianLabs/css/styles.css` tokens, so it read as a true continuation of the marketing site and needed zero design revisions; the near-miss was almost inventing a fresh token set, caught by the missing-config warning plus the "extend a baseline" principle. Default to extending an existing visual baseline and call out the design-system gap rather than improvising tokens.
