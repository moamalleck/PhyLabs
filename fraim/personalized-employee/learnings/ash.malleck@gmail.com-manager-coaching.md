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
