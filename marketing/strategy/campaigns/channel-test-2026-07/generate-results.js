#!/usr/bin/env node
/**
 * Channel-test results generator.
 * Reads the RAW inputs you type into channel-test-tracker.xlsx (Channel Log + Expenses tabs),
 * computes the per-channel comparison + a provisional verdict, and rewrites the
 * "Weekly Results (auto-generated)" block in README-measurement-setup.md between the
 * <!-- RESULTS:START --> / <!-- RESULTS:END --> markers.
 *
 * It reads the hardcoded input cells only (not Excel formulas), so it works whether or
 * not the workbook has been opened/recalculated in Excel.
 *
 * Run from the repo root:  node docs/marketing/channel-test-2026-07/generate-results.js
 */
const path = require('path');
const fs = require('fs');

let ExcelJS;
try {
  ExcelJS = require('exceljs');
} catch (e) {
  console.error('Could not load "exceljs". Run this from inside the project so Node can resolve node_modules,\n' +
    'e.g.  node docs/marketing/channel-test-2026-07/generate-results.js');
  process.exit(1);
}

const DIR = __dirname;
const XLSX = process.env.TRACKER_XLSX || path.join(DIR, 'channel-test-tracker.xlsx');
const README = process.env.RESULTS_README || path.join(DIR, 'README-measurement-setup.md');
const START = '<!-- RESULTS:START -->';
const END = '<!-- RESULTS:END -->';

const num = v => (typeof v === 'number' && isFinite(v) ? v : 0);
const int = n => Math.round(n).toLocaleString('en-US');
const usd = n => '$' + n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const pct = n => (n * 100).toFixed(1) + '%';
const cps = (spend, signups) => (signups > 0 ? usd(spend / signups) : '—');
const ratio = (a, b) => (b > 0 ? a / b : 0);

function cellDate(v) {
  if (!v) return null;
  if (v instanceof Date) return v;
  if (typeof v === 'object' && v.result instanceof Date) return v.result;
  if (typeof v === 'string') { const d = new Date(v); return isNaN(d) ? null : d; }
  return null;
}

(async () => {
  const wb = new ExcelJS.Workbook();
  await wb.xlsx.readFile(XLSX);

  // ---- Channel Log (raw inputs: A date, B channel, D reach, E clicks, F spend, G signups) ----
  const log = wb.getWorksheet('Channel Log');
  const rows = [];
  log.eachRow((row, i) => {
    if (i === 1) return;
    const channel = row.getCell(2).value;
    if (!channel || typeof channel !== 'string') return;
    rows.push({
      date: cellDate(row.getCell(1).value),
      channel: channel.trim(),
      reach: num(row.getCell(4).value),
      clicks: num(row.getCell(5).value),
      spend: num(row.getCell(6).value),
      signups: num(row.getCell(7).value),
    });
  });

  // ---- Expenses (shared tooling overhead: E amounts, skip the TOTAL formula row) ----
  const exp = wb.getWorksheet('Expenses');
  let overhead = 0;
  if (exp) exp.eachRow((row, i) => {
    if (i === 1) return;
    const item = row.getCell(2).value;
    const amt = row.getCell(5).value;
    if (item && typeof amt === 'number') overhead += amt;
  });

  const marker = fs.readFileSync(README, 'utf8');
  let block;

  if (rows.length === 0) {
    block = '_No data logged yet. Add rows to the Channel Log tab and run `generate-results.js` to populate this._';
  } else {
    // aggregate per channel
    const byCh = new Map();
    for (const r of rows) {
      const a = byCh.get(r.channel) || { reach: 0, clicks: 0, spend: 0, signups: 0 };
      a.reach += r.reach; a.clicks += r.clicks; a.spend += r.spend; a.signups += r.signups;
      byCh.set(r.channel, a);
    }
    const dates = rows.map(r => r.date).filter(Boolean).sort((a, b) => a - b);
    const fmtD = d => d ? d.toISOString().slice(0, 10) : '—';
    const totals = { reach: 0, clicks: 0, spend: 0, signups: 0 };
    for (const a of byCh.values()) { totals.reach += a.reach; totals.clicks += a.clicks; totals.spend += a.spend; totals.signups += a.signups; }

    // table (sorted by cost-per-signup asc; channels with 0 signups sink to bottom)
    const ranked = [...byCh.entries()].sort((x, y) => {
      const cx = x[1].signups > 0 ? x[1].spend / x[1].signups : Infinity;
      const cy = y[1].signups > 0 ? y[1].spend / y[1].signups : Infinity;
      if (cx !== cy) return cx - cy;
      return y[1].signups - x[1].signups;
    });

    let table = '| Channel | Reach/Impr. | Clicks | Signups | CTR | Conv. | Channel spend | Cost/signup |\n';
    table += '|---|--:|--:|--:|--:|--:|--:|--:|\n';
    for (const [ch, a] of ranked) {
      table += `| ${ch} | ${int(a.reach)} | ${int(a.clicks)} | ${int(a.signups)} | ${pct(ratio(a.clicks, a.reach))} | ${pct(ratio(a.signups, a.clicks))} | ${usd(a.spend)} | ${cps(a.spend, a.signups)} |\n`;
    }
    table += `| **TOTAL** | **${int(totals.reach)}** | **${int(totals.clicks)}** | **${int(totals.signups)}** | **${pct(ratio(totals.clicks, totals.reach))}** | **${pct(ratio(totals.signups, totals.clicks))}** | **${usd(totals.spend)}** | **${cps(totals.spend, totals.signups)}** |\n`;

    // verdict
    const withSignups = ranked.filter(([, a]) => a.signups > 0);
    const anyPaidWithSignups = withSignups.some(([, a]) => a.spend > 0);
    const thin = totals.signups < 20;
    const thinNote = thin
      ? `⚠️ Only ${int(totals.signups)} total signup${totals.signups === 1 ? '' : 's'} — too early to concentrate budget; keep all three running until the sample is bigger.`
      : `Sample is getting meaningful — if this holds another week, shift effort/paid-boost budget toward the leader.`;
    let verdict;
    if (withSignups.length === 0) {
      verdict = '**Provisional read:** traffic is flowing but no signups yet — keep pushing volume before judging any channel.';
    } else if (anyPaidWithSignups) {
      // paid dollars in play → cost-per-signup is the discriminator
      const [leadCh, lead] = withSignups[0];
      const [volCh, vol] = [...byCh.entries()].sort((x, y) => y[1].signups - x[1].signups)[0];
      verdict = `**Provisional leader: ${leadCh}** — lowest cost-per-signup at ${cps(lead.spend, lead.signups)} ` +
        `(${int(lead.signups)} signup${lead.signups === 1 ? '' : 's'}). Most signups: **${volCh}** (${int(vol.signups)}). ` + thinNote;
    } else {
      // organic-only → all direct spend is ~$0, so rank by signups + conversion, not dollar CPS
      const bySignups = [...byCh.entries()].sort((x, y) => y[1].signups - x[1].signups || ratio(y[1].signups, y[1].clicks) - ratio(x[1].signups, x[1].clicks));
      const [volCh, vol] = bySignups[0];
      const allInCps2 = totals.signups > 0 ? usd((totals.spend + overhead) / totals.signups) : '—';
      verdict = `**Provisional leader: ${volCh}** — most signups (${int(vol.signups)}) at ${pct(ratio(vol.signups, vol.clicks))} click→signup, with zero direct spend. ` +
        `Direct cost is $0 across these organic channels, so signups + conversion rate are the real discriminators; on an all-in basis (incl. ${usd(overhead)} shared tooling) the test is running at ${allInCps2}/signup. ` + thinNote;
    }

    const allIn = totals.spend + overhead;
    const allInCps = totals.signups > 0 ? usd(allIn / totals.signups) : '—';
    block =
      `_Generated ${new Date().toISOString().slice(0, 10)} · data ${fmtD(dates[0])} → ${fmtD(dates[dates.length - 1])} · ${rows.length} run(s) logged._\n\n` +
      table + '\n' +
      `**Shared tooling overhead (Expenses tab):** ${usd(overhead)} · **all-in cost incl. overhead:** ${usd(allIn)} → ${allInCps}/signup.\n\n` +
      verdict;
  }

  const s = marker.indexOf(START), e = marker.indexOf(END);
  if (s === -1 || e === -1) { console.error('Could not find RESULTS markers in README.'); process.exit(1); }
  const updated = marker.slice(0, s + START.length) + '\n' + block + '\n' + marker.slice(e);
  fs.writeFileSync(README, updated);
  console.log(`Results section updated in ${path.relative(process.cwd(), README)} (${rows.length} run(s)).`);
})().catch(err => { console.error(err); process.exit(1); });
