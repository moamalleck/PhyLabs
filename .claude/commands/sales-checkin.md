---
isolation: none
---

# /sales-checkin — Daily Sales Standup

Generate a fresh **daily sales standup** for the PhysicianLabs 90-day sales plan. It is date-aware: it figures out which scoreboard week we're in and surfaces *that week's gate*, the running totals vs. target, the leads due now, and the one move for today. Follow every step in order.

---

## Step 1 — Gather context (read in parallel)

1. `marketing/customer-discussion-materials/sales/sales-scoreboard-q3-2026.md` — **source of truth** for targets, weekly gates, and the pipeline tracker.
2. `marketing/strategy/business-development/sales-plan-2026-06-30.md` — the week-by-week plan (goals + tasks).
3. `TASKS.md` — anything sales-related already on the board.
4. `C:\Users\Admin\.claude\projects\C--Users-Admin-Documents-MyNewStartup\memory\MEMORY.md` and any pipeline/discovery memory it points to (lead status, competitor alert, validation gates).
5. If `gh` is available, run `gh issue list --repo moamalleck/PhyLabs --state open --limit 20 --json number,title,labels` via Bash. If not, skip silently.

Note **today's date** (from the memory context: currentDate).

---

## Step 2 — Locate the current week

Map today's date to a scoreboard week. The quarter runs Jul–Sep 2026:

| Week | Date range | Friday review |
|---|---|---|
| Wk 1 | Jul 1–7 | Jul 4 |
| Wk 2 | Jul 8–14 | Jul 11 |
| Wk 3 | Jul 15–21 | Jul 18 |
| Wk 4 | Jul 22–28 | Jul 25 |
| Wk 5 | Jul 29–Aug 4 | Aug 1 |
| Wk 6–13 | weekly through Sep 26 | each Friday |

Rules:
- **Before Jul 1** → "Week 0 — eve of launch"; the active gate is the **Week 1** gate (prep for it).
- **After Sep 26** → "Wrap-up"; report final totals vs. the 90-day target.
- Within a week, compute **days until that week's Friday gate**.

Pull the matching **weekly gate** (the must-be-TRUE checklist line) and the **pipeline rows whose `Owner due` is this week** straight from the scoreboard doc — do not re-derive them.

---

## Step 3 — Build the standup (output as text first)

A **30-second sales standup**, in this exact shape:

```
🩺 PhysicianLabs Sales Standup — [DATE]  ·  [Week N: date range]  ·  [X] days to Friday gate

THE GATE THIS WEEK
[the current week's must-be-TRUE line, verbatim from the scoreboard]

SCOREBOARD (running vs. 90-day target)
Cards charged: [n]/6   ·   Non-family: [n]/2   ·   Programs: [n]/3   ·   Subs: [n]/3   ·   Cash: $[n]/~30K

DUE THIS WEEK (pipeline)
- [Lead] — [next action]   (☐ stage)
- ...

🎯 THE ONE THING TODAY
[single highest-leverage action — almost always "charge a card" or "make the explicit paid offer that unblocks one"]

⚠️ FLAGS
[blockers, the non-family-card gate if still open, competitor-speed note — or "none"]
```

Running totals: infer from the scoreboard's filled rows / pipeline checkboxes. If nothing is filled yet, show `0` and say "not started — fill the scoreboard as cards are charged."

The **one thing today** must respect the Month-1 rule: *cards charged is the only metric that matters.* Default to the action that gets a card charged soonest.

---

## Step 4 — Write SALES-CHECKIN.md

Write `SALES-CHECKIN.md` in the project root. Overwrite completely each run. Structure:

```
# Sales Standup — [DATE]  ·  Week [N] ([range])

## 30-Second Standup
[the text from Step 3]

## This Week's Gate
[current week gate + the week's plan goal from the sales plan]

## Scoreboard
[markdown table: metric | target | running]

## Due This Week — Pipeline
[the pipeline rows due this week, with stage + next action]

## The One Thing Today
[single action]

## Flags & Risks
[blockers; the non-family-card validation gate status; competitor-speed note]
```

---

## Step 5 — Write sales-checkin.html

Write `sales-checkin.html` in the project root. Overwrite completely each run. Self-contained, no CDN/frameworks. Match the PhysicianLabs brand:

- Palette: `--navy:#0F172A; --teal:#2DD4BF; --tealdk:#0F6E56; --tealbg:#E1F5EE; --muted:#475569; --border:#E2E8F0; --amber:#B45309`.
- Header: navy bar, `PHYSICIAN<span>LABS</span>` wordmark (LABS in teal), tagline *"Put doctors back in the driver's seat of their own financial future."*, and on the right: **Week N · date range · [X] days to gate**.
- **Gate card** (teal-bg, teal left border) front and center with the week's must-be-TRUE line.
- **Scoreboard strip**: 5 stat tiles (Cards charged, Non-family, Programs, Subs, Cash) each showing `running / target` as a big number with a thin progress bar (teal fill).
- **Due This Week** list: each lead as a row with a checkbox (localStorage-persisted, key `salescheckin_` + stable slug), lead name bold, next action muted, and a small stage pill.
- **The One Thing Today**: a single highlighted amber-accented banner.
- **Flags**: small muted list; if the non-family-card gate is still open, show it as an amber pill.
- Footer: `Ash Malleck · Founder & CEO · PhysicianLabs` + a "Last generated: [timestamp]" line.
- Page title: `PhysicianLabs · Sales Standup · [DATE]`. Letter-friendly but screen-first (clean, light background).

---

## Step 6 — Report to user

After writing both files:
1. Paste the 30-second standup (if not already shown).
2. One line: the gate status (on track / at risk) and days to Friday.
3. "SALES-CHECKIN.md and sales-checkin.html updated."
4. Reminder: "Fill the weekly row + pipeline checkboxes in marketing/customer-discussion-materials/sales/sales-scoreboard-q3-2026.md as cards get charged — this standup reads from there."
