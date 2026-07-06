---
isolation: none
---

# /checkin — Daily Check-In Dashboard

Generate a fresh daily check-in for the PhysicianLabs / Clinic Launch OS project. Follow every step below in order.

---

## Step 1 — Gather Context

Read all of these in parallel:

1. `TASKS.md` — current task board (source of truth for what's active)
2. `C:\Users\Admin\.claude\projects\C--Users-Admin-Documents-MyNewStartup\memory\MEMORY.md` — memory index
3. Any memory files referenced in the index that seem relevant to active tasks
4. Run `gh issue list --repo moamalleck/PhyLabs --state open --limit 20 --json number,title,labels,assignees,createdAt` via Bash if `gh` is available. If not available, skip silently — do not error.

Also note today's date (from the memory context: currentDate).

---

## Step 2 — Build the Summary

Produce a **30-second text summary** — 3–5 sentences max — covering:
- Where things stand right now (traction, momentum, blockers)
- The single most important thing to move today
- Any flags or risks worth naming

Output this summary to the user as plain text first, before writing any files.

---

## Step 3 — Write CHECKIN.md

Write a file called `CHECKIN.md` in the project root. Overwrite it completely each time. Use this structure:

```
# Daily Check-In — [DATE]

## 30-Second Summary
[summary from Step 2]

## Today — Start & Finish
[tasks tagged when:today, ordered by priority]
For each: checkbox, task name, duration badge, and a one-line note if present]

## Startable Today, Completable Today
[tasks from THIS WEEK or THIS MONTH with duration:quick or duration:day that aren't yet started — flag these as "pull forward" candidates]

## This Week (by [date])
[all active when:week tasks with status icons]

## This Month (by [date])
[all active when:month tasks with status icons]

## Tracked (Multi-Day)
[all duration:tracked tasks with their current status]

## GitHub Issues (Open)
[list from gh CLI if available, otherwise omit this section]

## Done This Session
[any tasks marked [x] in TASKS.md that weren't in the DONE section before — or leave blank]
```

---

## Step 4 — Write checkin.html

Write a file called `checkin.html` in the project root. Overwrite it completely each time.

The HTML must:
- Be a single self-contained file (no external dependencies except system fonts)
- Use a clean, minimal design — white background, dark text, clear hierarchy
- Display the date prominently at the top
- Show the 30-second summary in a highlighted card
- Have four sections rendered as clean cards: **Today**, **This Week**, **This Month**, **Tracked**
- Within each section, show a numbered priority list (not bullet points)
- Each task has: a checkbox (uses localStorage to persist check state across reloads), task name in bold, a small duration badge (Quick / Day / Tracked), and a muted notes line if present
- Show a separate "Pull Forward" panel — tasks from Week/Month that could be done today
- Show GitHub issues in a collapsible section at the bottom (if data available)
- Color scheme: status badges — green for [x]/done, blue for [>]/in-progress, grey for [ ]/not started, amber for [~]/blocked
- Use CSS Grid or Flexbox for layout. No frameworks. No CDN links.
- Include a small "Last generated:" timestamp in the footer
- The page title should be "PhysicianLabs · Check-In · [DATE]"

Use localStorage keys prefixed with `checkin_` + a stable slug of the task name for checkbox state.

---

## Step 5 — Report to User

After writing both files, output to the user:
1. The 30-second summary (if not already shown)
2. A short table or list of: Today tasks | This Week count | This Month count | Open GH Issues count
3. One sentence: "checkin.html and CHECKIN.md updated."
4. Remind the user: "To update tasks, edit TASKS.md directly or tell me what's changed."
