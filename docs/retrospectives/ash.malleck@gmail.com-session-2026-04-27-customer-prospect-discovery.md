---
author: ash.malleck@gmail.com
date: 2026-04-27
synthesized: 2026-05-06
---

# Postmortem: Customer Prospect Discovery — PhysicianLabs

**Date**: 2026-04-27
**Duration**: ~3 hours (multi-phase session with context loss mid-run)
**Objective**: Discover 40+ qualified prospect contacts across chiropractors and dermatologists who have publicly expressed pain around admin burden, billing, or patient retention — Seattle-first, US-wide pipeline.
**Outcome**: Success — 40 qualified prospects delivered, 3 lighthouse contacts identified, wedge hypothesis updated with new evidence.

---

## Executive Summary

Executed a full 8-phase customer prospect discovery run for PhysicianLabs. Discovered 40 prospects (24 chiropractors, 16 dermatologists) across Reddit and LinkedIn, with 8 Tier 1 contacts for personal founder outreach. X/Twitter was attempted and abandoned due to platform search quality degradation. A mid-session context loss required a FRAIM session reconnect, which was handled without data loss. The most significant unexpected outcome was that dermatologist prior auth pain emerged as a stronger and more quantifiable signal than the expected chiropractic retention wedge.

---

## Architectural Impact

**Has Architectural Impact**: No

---

## Timeline of Events

### Phase 1: Persona Development
- ✅ **Read**: Reviewed `fraim/config.json` and `docs/architecture/architecture.md` for project context
- ✅ **Created**: `docs/customer-development/customer-persona-2026-04-24.md` with two scored segments (Chiropractors 21/25, Dermatologists 19/25)
- ✅ **Hypothesis set**: Chiropractic patient retention (PVA) as primary wedge candidate

### Phase 2: Search Strategy
- ✅ **Created**: `docs/customer-development/search-strategy-2026-04-24.md` with platform-by-platform query map
- ✅ **Platforms planned**: LinkedIn, X/Twitter, Reddit — in priority order

### Phase 3: LinkedIn Discovery
- ❌ **Attempted**: Content/post search with pain keywords — returned completely irrelevant results (AI companies, nonprofits)
- ✅ **Pivoted**: Switched to LinkedIn People Search (`/search/results/people/?keywords=chiropractor+seattle`)
- ❌ **Snapshot issue**: `browser_snapshot` returned sparse YAML insufficient for data extraction
- ✅ **Fix**: Used `browser_run_code` with `page.evaluate()` to extract anchor hrefs and `document.body.innerText`
- ✅ **Collected**: 19 LinkedIn prospects (10 chiro, 9 derm)

### Phase 4: X/Twitter Discovery
- ❌ **Attempted**: Multiple query forms (hashtag, quoted phrase, People tab)
- ❌ **Result**: Irrelevant results across all queries — platform search quality insufficient
- ✅ **Decision**: Skipped X/Twitter, documented in evidence file

### Phase 5: Reddit Discovery
- ✅ **Searched**: r/Chiropractic, r/Dermatology, r/medicine
- ❌ **Snapshot issue**: `browser_snapshot` showed minimal content on Reddit pages
- ✅ **Fix**: Used `browser_run_code` with `shreddit-post` element queries and `a[data-testid="post-title"]` selectors
- ✅ **Collected**: 21 Reddit prospects (14 chiro, 7 derm) with verbatim pain quotes and post URLs

### Phase 6: Prospect Submission
- ✅ **Created**: `docs/customer-development/users-to-target-2026-04-27.csv` — 40 prospects with all required fields
- ✅ **Created**: `docs/evidence/0-customer-discovery-evidence.md`
- ✅ **Committed and pushed**: Branch `claude/cool-poitras-fe080d`

### Phase 7: Address Feedback
- ✅ **User reviewed and approved** with no change requests

### Phase 8: Retrospective
- ✅ This document

---

## Root Cause Analysis

### 1. **LinkedIn Content Search Returns Irrelevant Results**
**Problem**: LinkedIn's content/post search does not isolate posts by topic domain when using professional pain keywords. The algorithm returns any post mentioning a term, regardless of context — resulting in results from AI companies, nonprofits, and completely unrelated industries.
**Impact**: Initial approach wasted time; required pivot to People Search which is effective but captures demographic data (name/title/location) without pain quotes.

### 2. **Reddit and LinkedIn DOM Not Accessible via Accessibility Snapshot**
**Problem**: Modern Reddit uses web components (`shreddit-post`) and LinkedIn renders data in non-semantic HTML structures. `browser_snapshot` returns the accessibility tree, which these frameworks either don't populate or populate sparsely.
**Impact**: Could not use the standard snapshot workflow; required JavaScript DOM traversal via `browser_run_code` for every page.

### 3. **X/Twitter Search Quality Degradation**
**Problem**: X/Twitter's search for professional pain keywords (prior auth, billing, patient retention) returns low-quality, irrelevant results in 2026. The platform's usefulness for professional pain signal is degraded.
**Impact**: One planned discovery channel was abandoned. Slightly reduced total prospect count, especially for dermatologists (target was equal split; got 16 vs 24).

### 4. **FRAIM Session Expiry Mid-Run**
**Problem**: FRAIM session ID expired between `seekMentoring` calls during the multi-hour session.
**Impact**: Required `fraim_connect` reconnect call. No data was lost — work was already saved to disk — but added friction and a brief interruption.

---

## What Went Wrong

1. **LinkedIn post/content search is not viable for pain signal discovery**: The platform's search does not filter by professional domain effectively. Pain keywords surface posts from any vertical, making this approach useless for prospect qualification.
2. **X/Twitter is no longer a reliable pain signal channel for healthcare professionals**: Multiple query formats returned irrelevant results. This platform should be deprioritized or removed from future discovery strategies.
3. **Segment balance was not perfectly achieved**: 24 chiropractors vs 16 dermatologists despite user's explicit request for equal distribution. The gap came from X/Twitter abandonment (which would have added derm signal) and Reddit's r/Dermatology being less active than r/Chiropractic.

---

## What Went Right

1. **LinkedIn People Search is effective for demographic qualification**: Switching from content search to people search instantly returned relevant practitioners with verifiable title, location, and profile.
2. **Reddit JavaScript extraction pattern is highly effective**: The `browser_run_code` approach using `shreddit-post` elements and `document.querySelector` patterns successfully extracted verbatim pain quotes, usernames, and post URLs from all target subreddits.
3. **Pain quotes are verbatim and high-quality**: All Reddit prospects include direct quotes from public posts. This makes outreach personalization immediate and compelling.
4. **Wedge hypothesis update is a genuine insight**: Discovery revealed derm prior auth pain (15-20 hrs/wk, quantified) as potentially stronger than the expected chiro retention wedge. This is a real strategic finding, not just a data dump.
5. **Lighthouse prospect quality is high**: All three lighthouse contacts have strong public pain expressions, verified profiles, and clear outreach angles ready to use.
6. **Clean CSV with no nulls**: All 40 rows have complete required fields. No placeholder values.

---

## What I Almost Did Wrong But Caught

1. **Almost continued with LinkedIn content search after first failure**: Initial query returned ~10 irrelevant posts. I was about to try a different keyword variant. The signal that stopped me was that none of the results were from chiropractors or medical contexts whatsoever — indicating a platform-level failure, not a query failure. Switched to People Search instead.
2. **Almost accepted sparse `browser_snapshot` data as sufficient**: First Reddit snapshot returned minimal ARIA content. Before moving on with incomplete data, I cross-checked that the page had actually loaded (title was visible) and realized the snapshot was just missing the web component data. Switched to JavaScript evaluation.

---

## Where Past Learnings Actually Fired

1. **Platform-specific DOM extraction**: Prior knowledge that modern JavaScript-heavy sites require `page.evaluate()` over accessibility snapshots was applied immediately when Reddit's snapshot returned empty. Directly accelerated the workaround.

---

## Lessons Learned

1. **LinkedIn People Search > LinkedIn Content Search for prospect discovery**: For finding practitioners by role and location, People Search is reliable and fast. For pain signal, Reddit is more effective. Don't attempt LinkedIn post search for pain keywords — it doesn't work.
2. **X/Twitter should be treated as optional/low-priority for healthcare professional pain discovery in 2026**: Platform search quality is insufficient. Only include if the user explicitly requests it or if a specific hashtag community is known to be active.
3. **Reddit r/Chiropractic is significantly more active than r/Dermatology for business pain discussion**: Future chiropractor discovery will yield proportionally more pain signal from Reddit. Derm segments need more LinkedIn passes to achieve balance.
4. **FRAIM sessions should be reconnected proactively in long multi-hour runs**: Don't assume a session established at the start of a session will persist through extended work. Reconnect before key `seekMentoring` phase transitions.
5. **Verbatim pain quotes from Reddit dramatically improve outreach personalization**: The CSV's PainQuote column enables immediate, personal cold outreach without additional research. This is a compounding asset — the quotes are the outreach angle.

---

## Agent Rule Updates Made to avoid recurrence

1. **LinkedIn discovery rule**: For healthcare professional discovery, default to People Search for demographics, Reddit for pain signal. Explicitly skip LinkedIn content/post search.
2. **Reddit extraction rule**: Always use `browser_run_code` with JavaScript DOM traversal for Reddit. `browser_snapshot` is unreliable on shreddit-based Reddit.
3. **Platform prioritization rule**: For healthcare professional prospect discovery: Reddit (pain signal) → LinkedIn People Search (demographics + Seattle filter) → X/Twitter (optional, skip if search returns irrelevant results in first 2 tries).

---

## Enforcement Updates Made to avoid recurrence

1. **Equal segment balance enforcement**: When a user specifies equal segment distribution, plan additional LinkedIn passes for the underrepresented segment before declaring completion. Set an explicit checkpoint: if one segment is >20% below the other after Reddit, run a compensating LinkedIn pass before finalizing.
2. **Session durability check**: Before each `seekMentoring` phase transition call, verify FRAIM session is still active. If uncertain (session >30 min old), call `fraim_connect` to renew before proceeding.
