---
title: "Tigray War Timeline (2020–2022)"
description: "Comprehensive chronological documentation of the Tigray War — from pre-war political tensions (2018) through the November 2022 Pretoria Agreement and post-war developments to 2026."
tags:
  - war-timeline
  - tigray-war
  - conflict
  - chronology
  - human-rights
---

<style>
/* ═══════════════════════════════════════════════════════
   TIMELINE PAGE  —  scoped .tl- prefix
   Adapts to MkDocs Material light/dark schemes
   ═══════════════════════════════════════════════════════ */
:root {
  --tl-navy:       #0d1a2a;
  --tl-navy-mid:   #1b2d42;
  --tl-gold:       #c49a2a;
  --tl-gold-l:     #e8b94f;
  --tl-card:       #ffffff;
  --tl-page:       #f8f9fa;
  --tl-text:       #1a1a2e;
  --tl-soft:       #4a4a6a;
  --tl-border:     #e2e8f0;
  --tl-shadow:     0 2px 10px rgba(0,0,0,0.07);
  --tl-radius:     10px;
  --tl-spine:      #dde3ec;

  /* Category colors */
  --tl-mil:   #dc2626;   /* military */
  --tl-atr:   #7f1d1d;   /* atrocity */
  --tl-hum:   #d97706;   /* humanitarian */
  --tl-dip:   #1d4ed8;   /* diplomatic */
  --tl-pol:   #7e22ce;   /* political */
  --tl-pce:   #15803d;   /* peace */
  --tl-pos:   #64748b;   /* post-war note */
}
[data-md-color-scheme="slate"] {
  --tl-card:   #1b2d42;
  --tl-page:   #0d1a2a;
  --tl-text:   rgba(228,232,240,0.93);
  --tl-soft:   rgba(228,232,240,0.55);
  --tl-border: rgba(228,232,240,0.12);
  --tl-shadow: 0 2px 12px rgba(0,0,0,0.30);
  --tl-spine:  rgba(228,232,240,0.15);
}

/* ── Hero ── */
.tl-hero {
  background: linear-gradient(155deg, #0a0f1a 0%, #0d1f3c 55%, #12221a 100%);
  border-radius: var(--tl-radius);
  padding: 2.5rem 2rem 2rem;
  margin-bottom: 1.5rem;
  position: relative;
  overflow: hidden;
}
.tl-hero::before {
  content:"";
  position:absolute; inset:0;
  background: radial-gradient(ellipse 70% 50% at 50% 0%, rgba(196,154,42,0.10) 0%, transparent 65%);
  pointer-events:none;
}
.tl-hero-eyebrow {
  font-size:0.72rem; font-weight:600; letter-spacing:.15em; text-transform:uppercase;
  color: var(--tl-gold-l); margin-bottom:0.5rem;
}
.tl-hero h1 {
  font-size: clamp(1.5rem, 3.5vw, 2.4rem);
  font-weight:800; color:#fff; margin:0 0 0.4rem;
  line-height:1.2; border:none !important;
}
.tl-hero-sub { font-size:0.92rem; color:rgba(255,255,255,0.65); margin:0; }
.tl-hero-stats {
  display:flex; flex-wrap:wrap; gap:1.2rem; margin-top:1.5rem;
  padding-top:1.2rem; border-top:1px solid rgba(255,255,255,0.08);
}
.tl-hero-stat-num  { font-size:1.35rem; font-weight:800; color:var(--tl-gold-l); }
.tl-hero-stat-lbl  { font-size:0.68rem; color:rgba(255,255,255,0.50);
                     text-transform:uppercase; letter-spacing:.07em; }

/* ── Content advisory ── */
.tl-advisory {
  background: rgba(127,29,29,0.08);
  border-left:4px solid #991b1b;
  border-radius:0 var(--tl-radius) var(--tl-radius) 0;
  padding:0.8rem 1.1rem; margin:0 0 1.5rem; font-size:0.85rem; color:var(--tl-text);
}
.tl-advisory strong { color:#991b1b; display:block; margin-bottom:0.2rem;
  font-size:0.72rem; text-transform:uppercase; letter-spacing:.06em; }
[data-md-color-scheme="slate"] .tl-advisory strong { color:#fca5a5; }

/* ── Filter bar ── */
.tl-filters { margin-bottom:1.5rem; }
.tl-phase-tabs {
  display:flex; flex-wrap:wrap; gap:0.4rem; margin-bottom:0.7rem;
}
.tl-tab {
  padding:0.35rem 0.9rem; border-radius:20px; font-size:0.78rem; font-weight:600;
  border:1px solid var(--tl-border); background:var(--tl-card); color:var(--tl-soft);
  cursor:pointer; transition:all 0.15s; line-height:1.4; white-space:nowrap;
}
.tl-tab:hover  { border-color:var(--tl-gold); color:var(--tl-text); }
.tl-tab.active { background:var(--tl-navy-mid); color:#fff; border-color:var(--tl-navy-mid); }
[data-md-color-scheme="slate"] .tl-tab.active { background:var(--tl-gold); color:#1a1a2e; border-color:var(--tl-gold); }

.tl-cat-chips {
  display:flex; flex-wrap:wrap; gap:0.35rem;
}
.tl-chip {
  padding:0.25rem 0.75rem; border-radius:12px; font-size:0.72rem; font-weight:600;
  cursor:pointer; transition:opacity 0.15s, transform 0.1s;
  border:2px solid transparent; color:#fff; letter-spacing:0.03em;
}
.tl-chip:hover { opacity:0.85; transform:translateY(-1px); }
.tl-chip.inactive { opacity:0.35; }
.tl-chip[data-cat="all"]       { background:#475569; }
.tl-chip[data-cat="military"]  { background:var(--tl-mil); }
.tl-chip[data-cat="atrocity"]  { background:var(--tl-atr); }
.tl-chip[data-cat="humanitarian"] { background:var(--tl-hum); }
.tl-chip[data-cat="diplomatic"]{ background:var(--tl-dip); }
.tl-chip[data-cat="political"] { background:var(--tl-pol); }
.tl-chip[data-cat="peace"]     { background:var(--tl-pce); }

.tl-count-bar {
  font-size:0.75rem; color:var(--tl-soft); margin-top:0.6rem;
}
.tl-count-bar strong { color:var(--tl-text); }

/* ── Timeline container ── */
.tl-root { position:relative; padding-left:2.5rem; }

/* Vertical spine */
.tl-root::before {
  content:"";
  position:absolute; left:0.55rem; top:0; bottom:0;
  width:2px; background:var(--tl-spine); border-radius:2px;
}

/* ── Phase banner ── */
.tl-phase-banner {
  position:relative; margin:2rem 0 1rem -2.5rem;
  background:var(--tl-navy-mid);
  border-radius:var(--tl-radius); padding:0.7rem 1.2rem;
  display:flex; align-items:center; gap:0.7rem;
}
.tl-phase-banner-dot {
  width:12px; height:12px; border-radius:50%; flex-shrink:0;
  background:var(--tl-gold); box-shadow:0 0 0 3px rgba(196,154,42,0.25);
}
.tl-phase-banner-title {
  font-size:0.8rem; font-weight:700; color:#fff; text-transform:uppercase;
  letter-spacing:0.08em;
}
.tl-phase-banner-dates {
  font-size:0.72rem; color:rgba(255,255,255,0.55); margin-left:auto; white-space:nowrap;
}

/* ── Event item ── */
.tl-item {
  position:relative; margin-bottom:1rem;
  transition:opacity 0.2s;
}
.tl-item.hidden { display:none; }

/* Dot on spine */
.tl-item::before {
  content:"";
  position:absolute; left:-2.5rem; top:1rem;
  width:12px; height:12px; border-radius:50%;
  background:var(--tl-card); border:2.5px solid currentColor;
  box-shadow:0 0 0 3px var(--tl-page);
  transform:translateX(-5px);
  z-index:1;
}
.tl-item[data-cat="military"]     { color:var(--tl-mil); }
.tl-item[data-cat="atrocity"]     { color:var(--tl-atr); }
.tl-item[data-cat="humanitarian"] { color:var(--tl-hum); }
.tl-item[data-cat="diplomatic"]   { color:var(--tl-dip); }
.tl-item[data-cat="political"]    { color:var(--tl-pol); }
.tl-item[data-cat="peace"]        { color:var(--tl-pce); }

/* Inner card */
.tl-card {
  background:var(--tl-card); border:1px solid var(--tl-border);
  border-left:3px solid currentColor;
  border-radius:0 var(--tl-radius) var(--tl-radius) 0;
  box-shadow:var(--tl-shadow); overflow:hidden;
}
.tl-card-header {
  padding:0.85rem 1rem 0.75rem; cursor:pointer;
  display:grid; grid-template-columns:1fr auto; gap:0.5rem; align-items:start;
}
.tl-card-header:hover { background:rgba(0,0,0,0.025); }
[data-md-color-scheme="slate"] .tl-card-header:hover { background:rgba(255,255,255,0.025); }
.tl-card-meta {
  display:flex; align-items:center; gap:0.5rem; margin-bottom:0.3rem; flex-wrap:wrap;
}
.tl-date-badge {
  font-size:0.68rem; font-weight:700; color:var(--tl-soft);
  background:var(--tl-page); border:1px solid var(--tl-border);
  border-radius:4px; padding:1px 7px; white-space:nowrap;
}
.tl-cat-badge {
  font-size:0.63rem; font-weight:700; letter-spacing:0.05em; text-transform:uppercase;
  border-radius:4px; padding:2px 7px; color:#fff; white-space:nowrap;
}
.tl-item[data-cat="military"]     .tl-cat-badge { background:var(--tl-mil); }
.tl-item[data-cat="atrocity"]     .tl-cat-badge { background:var(--tl-atr); }
.tl-item[data-cat="humanitarian"] .tl-cat-badge { background:var(--tl-hum); }
.tl-item[data-cat="diplomatic"]   .tl-cat-badge { background:var(--tl-dip); }
.tl-item[data-cat="political"]    .tl-cat-badge { background:var(--tl-pol); }
.tl-item[data-cat="peace"]        .tl-cat-badge { background:var(--tl-pce); }

.tl-card-title {
  font-size:0.95rem; font-weight:700; color:var(--tl-text); line-height:1.35; margin:0;
}
.tl-card-summary {
  font-size:0.83rem; color:var(--tl-soft); margin:0.3rem 0 0; line-height:1.55;
}
.tl-expand-icon {
  font-size:1rem; color:var(--tl-soft); transition:transform 0.2s; flex-shrink:0;
  align-self:flex-start; margin-top:0.1rem;
}
.tl-card.open .tl-expand-icon { transform:rotate(180deg); }

/* Expandable detail */
.tl-detail {
  max-height:0; overflow:hidden;
  transition:max-height 0.28s ease, padding 0.2s;
  padding:0 1rem;
  border-top:0px solid var(--tl-border);
}
.tl-card.open .tl-detail {
  max-height:600px;
  padding:0.85rem 1rem 1rem;
  border-top-width:1px;
}
.tl-detail-text {
  font-size:0.85rem; color:var(--tl-text); line-height:1.75; margin:0 0 0.6rem;
}
.tl-detail-source {
  font-size:0.72rem; color:var(--tl-soft);
  border-top:1px solid var(--tl-border); padding-top:0.5rem; margin-top:0.5rem;
}
.tl-detail-source strong { color:var(--tl-text); }

/* ── Empty state ── */
.tl-empty {
  text-align:center; padding:3rem 1rem; color:var(--tl-soft); display:none;
}
.tl-empty-icon { font-size:2.5rem; margin-bottom:0.5rem; }

/* ── Legend ── */
.tl-legend {
  background:var(--tl-card); border:1px solid var(--tl-border); border-radius:var(--tl-radius);
  padding:1rem 1.2rem; margin:2rem 0; display:flex; flex-wrap:wrap; gap:0.6rem;
  align-items:center;
}
.tl-legend-label { font-size:0.72rem; color:var(--tl-soft); margin-right:0.3rem; font-weight:600; text-transform:uppercase; letter-spacing:0.06em; }
.tl-legend-item {
  display:flex; align-items:center; gap:0.35rem; font-size:0.75rem; color:var(--tl-text);
}
.tl-legend-dot {
  width:10px; height:10px; border-radius:50%; flex-shrink:0;
}

/* ── Sources table ── */
.tl-sources {
  background:var(--tl-card); border:1px solid var(--tl-border);
  border-radius:var(--tl-radius); padding:1.2rem 1.4rem; margin:2rem 0;
  font-size:0.82rem; color:var(--tl-text);
}
.tl-sources h3 { font-size:0.9rem; color:var(--tl-text); margin:0 0 0.8rem; }
.tl-sources ul { margin:0; padding-left:1.2rem; }
.tl-sources li { margin-bottom:0.3rem; color:var(--tl-soft); }

/* ── Nav links ── */
.tl-navlinks {
  display:flex; flex-wrap:wrap; gap:0.7rem; margin:2rem 0 0.5rem;
}
.tl-btn {
  display:inline-block; background:var(--tl-navy-mid); color:#fff !important;
  border:1px solid rgba(255,255,255,0.1); border-radius:6px;
  padding:0.5rem 1.2rem; font-size:0.85rem; font-weight:600;
  text-decoration:none !important; transition:background 0.15s, transform 0.1s;
}
.tl-btn:hover { background:#243550; transform:translateY(-1px); }
.tl-btn-gold { background:var(--tl-gold); color:#1a1a2e !important; border-color:transparent; }
.tl-btn-gold:hover { background:#d4aa35; }

/* ── Responsive ── */
@media(max-width:600px){
  .tl-root { padding-left:1.8rem; }
  .tl-root::before { left:0.35rem; }
  .tl-item::before { left:-1.8rem; transform:translateX(-3px); width:10px; height:10px; }
  .tl-phase-banner { margin-left:-1.8rem; }
  .tl-hero { padding:1.8rem 1rem 1.5rem; }
  .tl-card-title { font-size:0.88rem; }
}
</style>

<!-- ═══════════════════════ HERO ═══════════════════════ -->
<div class="tl-hero">
  <p class="tl-hero-eyebrow">Comprehensive Chronological Documentation</p>
  <h1>Tigray War Timeline</h1>
  <p class="tl-hero-sub">From the political rupture of 2018 through the November 2022 Pretoria Agreement — and the fragile, contested aftermath that continues to the present.</p>
  <div class="tl-hero-stats">
    <div>
      <div class="tl-hero-stat-num">2 yrs</div>
      <div class="tl-hero-stat-lbl">Duration of war</div>
    </div>
    <div>
      <div class="tl-hero-stat-num">300K–500K</div>
      <div class="tl-hero-stat-lbl">Estimated deaths</div>
    </div>
    <div>
      <div class="tl-hero-stat-num">2.7M</div>
      <div class="tl-hero-stat-lbl">Displaced at peak</div>
    </div>
    <div>
      <div class="tl-hero-stat-num">42</div>
      <div class="tl-hero-stat-lbl">Documented events below</div>
    </div>
  </div>
</div>

<div class="tl-advisory">
  <strong>⚠️ Content Advisory</strong>
  This timeline documents mass atrocities, war crimes, famine, and human suffering. All events are sourced from verified international reporting, UN documentation, and peer-reviewed research.
</div>

<!-- ═══════════════════════ FILTER BAR ═══════════════════════ -->
<div class="tl-filters">
  <div class="tl-phase-tabs" id="phaseTabs">
    <button class="tl-tab active" data-phase="all" onclick="filterPhase(this)">All Phases</button>
    <button class="tl-tab" data-phase="0" onclick="filterPhase(this)">Pre-War (2018–2020)</button>
    <button class="tl-tab" data-phase="1" onclick="filterPhase(this)">Phase 1 (Nov 2020 – Jun 2021)</button>
    <button class="tl-tab" data-phase="2" onclick="filterPhase(this)">Phase 2 (Jul – Dec 2021)</button>
    <button class="tl-tab" data-phase="3" onclick="filterPhase(this)">Phase 3 (Jan – Nov 2022)</button>
    <button class="tl-tab" data-phase="4" onclick="filterPhase(this)">Post-War (2023–2026)</button>
  </div>
  <div class="tl-cat-chips" id="catChips">
    <button class="tl-chip" data-cat="all"           onclick="filterCat(this)">All Categories</button>
    <button class="tl-chip" data-cat="military"      onclick="filterCat(this)">⚔️ Military</button>
    <button class="tl-chip" data-cat="atrocity"      onclick="filterCat(this)">🔴 Atrocity</button>
    <button class="tl-chip" data-cat="humanitarian"  onclick="filterCat(this)">🟠 Humanitarian</button>
    <button class="tl-chip" data-cat="diplomatic"    onclick="filterCat(this)">🔵 Diplomatic</button>
    <button class="tl-chip" data-cat="political"     onclick="filterCat(this)">🟣 Political</button>
    <button class="tl-chip" data-cat="peace"         onclick="filterCat(this)">🟢 Peace / Post-War</button>
  </div>
  <div class="tl-count-bar"><strong id="visCount">42</strong> events shown</div>
</div>

<!-- ═══════════════════════ TIMELINE ═══════════════════════ -->
<div class="tl-root" id="tlRoot">
  <div class="tl-empty" id="tlEmpty">
    <div class="tl-empty-icon">🔍</div>
    <p>No events match this filter. Try a different phase or category.</p>
  </div>
</div>

<!-- ═══════════════════════ LEGEND ═══════════════════════ -->
<div class="tl-legend">
  <span class="tl-legend-label">Key:</span>
  <div class="tl-legend-item"><div class="tl-legend-dot" style="background:var(--tl-mil)"></div> Military Operation</div>
  <div class="tl-legend-item"><div class="tl-legend-dot" style="background:var(--tl-atr)"></div> Documented Atrocity</div>
  <div class="tl-legend-item"><div class="tl-legend-dot" style="background:var(--tl-hum)"></div> Humanitarian Crisis</div>
  <div class="tl-legend-item"><div class="tl-legend-dot" style="background:var(--tl-dip)"></div> Diplomatic / International</div>
  <div class="tl-legend-item"><div class="tl-legend-dot" style="background:var(--tl-pol)"></div> Political</div>
  <div class="tl-legend-item"><div class="tl-legend-dot" style="background:var(--tl-pce)"></div> Peace / Post-War</div>
</div>

<!-- ═══════════════════════ SOURCES ═══════════════════════ -->
<div class="tl-sources">
  <h3>📚 Documentation Sources</h3>
  <ul>
    <li>UN Joint Investigation Team (UNJIT) — Report on the Tigray conflict (September 2021)</li>
    <li>Amnesty International — Multiple reports on atrocities in Tigray (2021–2022)</li>
    <li>Human Rights Watch — Reports on the Tigray war, detention, and displacement</li>
    <li>UN OCHA — Humanitarian situation reports, Ethiopia (2020–2026)</li>
    <li>African Union — Pretoria Agreement documentation (November 2022)</li>
    <li>ACLED — Armed Conflict Location & Event Data Project</li>
    <li>Reuters, BBC, AP, Al Jazeera — Verified news reporting</li>
    <li>International Crisis Group — Ethiopia/Horn of Africa conflict reports</li>
    <li>Rift Valley Institute — Post-conflict analysis reports (2023–2026)</li>
    <li>Omna Tigray — Quarterly situation reports (2025–2026)</li>
  </ul>
</div>

<!-- ═══════════════════════ NAV LINKS ═══════════════════════ -->
<div class="tl-navlinks">
  <a href="../../war/path-to-war/" class="tl-btn">← The Path to War</a>
  <a href="../../war/conflict-overview/" class="tl-btn">Conflict Overview</a>
  <a href="../../war/human-rights-atrocities/" class="tl-btn">Human Rights Documentation</a>
  <a href="../../war/memorial/" class="tl-btn">Memorial</a>
  <a href="../../war/fragile-peace/" class="tl-btn tl-btn-gold">The Fragile Peace →</a>
</div>

---

!!! note "This timeline is being continuously expanded."
    Events are verified against multiple independent sources before inclusion. [Contribute verified documentation](../../contribute/) to help expand this record.

<script>
/* ═══════════════════════════════════════════════════════
   TIGRAY WAR TIMELINE  —  Data + Renderer
   ═══════════════════════════════════════════════════════ */

var PHASE_META = {
  0: { label:"Pre-War Background",    dates:"2018 – October 2020",       color:"#475569" },
  1: { label:"Phase 1: Federal Offensive",   dates:"Nov 2020 – Jun 2021", color:"#dc2626" },
  2: { label:"Phase 2: Expansion & Escalation", dates:"Jul – Dec 2021",  color:"#d97706" },
  3: { label:"Phase 3: Stalemate & Peace",  dates:"Jan – Nov 2022",      color:"#1d4ed8" },
  4: { label:"Post-War Period",        dates:"2023 – April 2026",         color:"#15803d" },
};

var CAT_LABEL = {
  military:"Military", atrocity:"Atrocity", humanitarian:"Humanitarian",
  diplomatic:"Diplomatic", political:"Political", peace:"Peace / Post-War"
};

var EVENTS = [
  /* ── PRE-WAR ── */
  { date:"April 2, 2018", phase:0, cat:"political",
    title:"Abiy Ahmed Becomes Prime Minister",
    summary:"Oromo politician Abiy Ahmed becomes PM following mass anti-government protests. His sweeping reforms would reshape Ethiopia — and set the stage for conflict with the TPLF.",
    detail:"Abiy released political prisoners, opened negotiations with Eritrea, and promoted pan-Ethiopian nationalism over ethnic federalism. His dismantling of the TPLF-dominated EPRDF coalition would create the central political fault line leading to war.",
    source:"Reuters; BBC; Nobel Committee (2019)" },

  { date:"July 9, 2018", phase:0, cat:"diplomatic",
    title:"Ethiopia–Eritrea Peace Deal Signed",
    summary:"Abiy Ahmed and Eritrean President Isaias Afwerki sign a peace declaration ending 20 years of hostility — earning Abiy the Nobel Peace Prize. The TPLF views the rapprochement as an existential strategic threat.",
    detail:"The deal created an anti-TPLF alliance on Tigray's northern border. Eritrea and the TPLF had been bitter enemies since the 1998-2000 Ethiopia-Eritrea war. For the TPLF, the peace deal effectively encircled Tigray. Ethiopia denied Eritrea's later military involvement in Tigray for many months.",
    source:"Nobel Prize Committee; AU; Reuters" },

  { date:"November 2019", phase:0, cat:"political",
    title:"Prosperity Party Formed — TPLF Refuses to Join",
    summary:"Abiy dissolves the EPRDF coalition and creates the unified Prosperity Party. The TPLF vehemently refuses, citing an attack on ethnic federalism and regional autonomy.",
    detail:"The TPLF's refusal left it politically isolated at the national level and returned its leadership to Tigray, where it began consolidating regional power and military resources. The TPLF described the Prosperity Party as unconstitutional and an assault on the ethnic federalist system it had built since 1991.",
    source:"Reuters; The Guardian, November 2019" },

  { date:"August–September 2020", phase:0, cat:"political",
    title:"TPLF Holds Defiant Regional Elections; Federal Funding Cut",
    summary:"The federal government postponed national elections citing COVID-19. The TPLF rejects this as unconstitutional and holds Tigray regional elections. Addis Ababa cuts federal funding to Tigray in response.",
    detail:"The TPLF won the September 2020 regional election overwhelmingly and declared the resulting assembly the only legitimate government in Tigray. The federal government declared the elections illegal. Federal budget transfers to Tigray were suspended — described by the TPLF as 'tantamount to a declaration of war.'",
    source:"BBC; Reuters; EPRDF statements" },

  { date:"October 2020", phase:0, cat:"political",
    title:"Federal–Tigray Tensions Reach Breaking Point",
    summary:"Both sides mobilize militarily. The TPLF claims the ENDF's Northern Command — stationed inside Tigray — is preparing to attack. Addis Ababa accuses the TPLF of planning a military seizure of federal forces' equipment.",
    detail:"Intelligence reports, troop movements, and escalating rhetoric brought the two sides to the edge of open war. The TPLF began moving to pre-empt what it believed was an imminent federal assault on Tigray. The federal government hardened its positions, framing the TPLF as a criminal organization.",
    source:"ICG; Reuters; AU background reporting" },

  /* ── PHASE 1 ── */
  { date:"November 3–4, 2020", phase:1, cat:"military",
    title:"War Begins: TPLF Attacks Northern Command; Abiy Orders Military Operation",
    summary:"The TPLF attacks Ethiopian National Defense Force Northern Command bases throughout Tigray. PM Abiy Ahmed announces a 'law enforcement operation.' The war begins. All communications into Tigray are cut.",
    detail:"The TPLF struck first, claiming it acted to prevent an imminent federal attack it believed was hours away. Abiy framed the action as criminal and ordered a full military response. Air strikes begin on Mekelle. A total communications blackout — no internet, phone, or banking — is imposed on Tigray's 7 million people.",
    source:"BBC; Reuters; AP, November 4, 2020" },

  { date:"November 4–28, 2020", phase:1, cat:"military",
    title:"Eritrean Forces Enter Tigray — Ethiopia Initially Denies Involvement",
    summary:"Tens of thousands of Eritrean Defence Forces cross into northern Tigray, opening a second front. Ethiopia denies Eritrean involvement for months despite overwhelming witness evidence.",
    detail:"EDF forces moved into Axum, Adwa, Shire, Humera, and surrounding areas in force. Their role was later confirmed by the UN, Amnesty International, and the joint UN-EHRC investigation. Eritrean forces were documented committing the most severe atrocities of the war — including the Axum massacre and systematic killings in multiple towns.",
    source:"Amnesty International; HRW; UN UNJIT Report (2021)" },

  { date:"November 9, 2020", phase:1, cat:"military",
    title:"TPLF Fires Rockets at Asmara, Bahir Dar, and Gondar",
    summary:"TPLF forces fire rockets at Eritrean capital Asmara's airport and at cities in Amhara region — a deliberate escalation intended to internationalize the conflict.",
    detail:"The strikes on Asmara were designed to draw international attention to Eritrea's military role in the conflict and to signal the TPLF's capacity to escalate beyond Tigray's borders. Rockets were also fired at Bahir Dar (Amhara regional capital) and Gondar. There were no reported mass casualties from these strikes.",
    source:"Reuters; BBC; Ethiopia government statements, November 2020" },

  { date:"November 9–30, 2020", phase:1, cat:"atrocity",
    title:"Axum Massacre: Hundreds of Civilians Killed by Eritrean Forces",
    summary:"Eritrean forces systematically kill hundreds of civilian men and boys in the holy city of Axum over several days — one of the single most documented atrocities of the war.",
    detail:"The massacre followed a TDF attack on Eritrean troops within the city. Eritrean forces then conducted systematic killings of male civilians found in streets, homes, and churches — including the UNESCO World Heritage Axum Steles site. Amnesty International documented the massacre in February 2021 from survivor testimonies and open-source evidence. Ethiopia and Eritrea denied the killings for months.",
    source:"Amnesty International (February 26, 2021); CNN; The Guardian; UNJIT" },

  { date:"November–December 2020", phase:1, cat:"atrocity",
    title:"Mariam Dengelat Church Massacre",
    summary:"Eritrean forces kill over 100 civilians sheltering in Mariam Dengelat church in the Shire area — part of a documented pattern of atrocities committed inside religious sanctuaries.",
    detail:"Civilians had sought sanctuary in the church — a traditional practice in Ethiopian Orthodox Christianity. Eritrean forces entered and killed those sheltering there. The massacre was later documented by multiple human rights organizations and confirmed by the UN joint investigation team.",
    source:"Reuters; Amnesty International; UNJIT (2021)" },

  { date:"November 2020 – January 2021", phase:1, cat:"atrocity",
    title:"Ethnic Cleansing of Tigrayans in Western Tigray",
    summary:"Amhara regional forces and Fano militias systematically expel hundreds of thousands of ethnic Tigrayans from Western Tigray — killing, displacing, and confiscating property in what multiple international actors describe as ethnic cleansing.",
    detail:"Western Tigray (the Wolkait, Tegede, and Humera zones) was occupied with the stated objective of annexing the territory to Amhara region. Ethnic Tigrayan residents were killed, expelled to eastern Tigray, or detained. Land and property were seized. This campaign — documented by HRW and described by US Secretary of State Blinken in February 2021 as 'ethnic cleansing' — displaced over 1 million Tigrayans.",
    source:"HRW (November 2020); US State Department (February 2021); UNJIT (2021)" },

  { date:"November 28, 2020", phase:1, cat:"military",
    title:"Federal Forces Capture Mekelle; Abiy Declares 'Victory'",
    summary:"Ethiopian federal forces capture Mekelle, Tigray's capital. PM Abiy declares the law enforcement operation complete. The TPLF military disperses into the mountains — the war continues.",
    detail:"The fall of Mekelle was rapid, but the TPLF leadership and military command escaped into Tigray's rugged highlands. Abiy's premature 'victory' declaration would prove to be one of the most significant strategic miscalculations of the war. Over the following months, the TDF reorganized and rebuilt into a formidable fighting force.",
    source:"Reuters; AP; BBC, November 28, 2020" },

  { date:"January 2021", phase:1, cat:"humanitarian",
    title:"UN: 4.5 Million People Need Emergency Humanitarian Assistance",
    summary:"The UN raises the alarm that 4.5 million people in Tigray need urgent help as aid agencies remain blocked from the region. The communications blackout continues to prevent accurate assessment.",
    detail:"Federal restrictions on aid access — affecting roads, communications, banking, and fuel — created conditions that the UN would later characterize as a weaponized blockade. Aid agencies reported being turned back at checkpoints. The WFP, UNICEF, and OCHA were unable to reach the majority of affected populations.",
    source:"UN OCHA Ethiopia, January 2021" },

  { date:"February 26, 2021", phase:1, cat:"diplomatic",
    title:"US Secretary of State Blinken Declares Western Tigray 'Ethnic Cleansing'",
    summary:"Newly appointed US Secretary of State Antony Blinken uses the term 'ethnic cleansing' to describe the situation in Western Tigray — the most significant international designation of the conflict to date.",
    detail:"Blinken's statement, made at his Senate confirmation hearing, put direct diplomatic pressure on the Ethiopian and Eritrean governments. He called for withdrawal of Eritrean forces from Tigray and accountability for human rights violations. Ethiopia's government rejected the designation furiously.",
    source:"US Senate Foreign Relations Committee; US State Department, February 26, 2021" },

  { date:"February–March 2021", phase:1, cat:"atrocity",
    title:"Amnesty International Publishes Full Axum Massacre Report",
    summary:"Amnesty International publishes its comprehensive investigation of the Axum massacre, documenting that Eritrean forces killed hundreds of civilians on November 28–29, 2020.",
    detail:"The report combined survivor testimonies collected from people who had fled to Sudan and elsewhere, satellite imagery analysis, open-source verification, and cross-referencing of multiple witness accounts. It was the first major documented reckoning with the scale of Eritrean atrocities in Tigray and triggered international demands for accountability.",
    source:"Amnesty International, February 26, 2021" },

  { date:"April 2021", phase:1, cat:"diplomatic",
    title:"Ethiopia Announces Unilateral Ceasefire; TPLF Rejects",
    summary:"Ethiopia announces a unilateral humanitarian ceasefire as TDF counter-offensive preparations intensify. The TPLF rejects it, demanding Eritrean and Amhara force withdrawal as a precondition.",
    detail:"The ceasefire was widely seen as a response to TDF military pressure and international condemnation. It had no practical effect on the ground — Eritrean and Amhara forces remained in Tigray, and fighting continued. The TPLF's rejection reflected its view that the ceasefire was a political maneuver rather than a genuine peace offer.",
    source:"Reuters; BBC, April 2021" },

  { date:"June 22, 2021", phase:1, cat:"military",
    title:"TDF Launches Major Coordinated Counter-Offensive",
    summary:"The Tigray Defense Forces, having rebuilt their military capacity over six months, launch a major coordinated counter-offensive from multiple directions, rapidly overrunning federal positions.",
    detail:"The counter-offensive caught federal forces and military analysts off guard. TDF forces had used the occupation period to reorganize, recruit, and train — transforming from a retreating force into an effective fighting army. The speed of the advance toward Mekelle overwhelmed federal defensive positions.",
    source:"Reuters; BBC; Al Jazeera, June 2021" },

  { date:"June 28, 2021", phase:1, cat:"military",
    title:"TDF Retakes Mekelle — Federal Government Declares 'Humanitarian Ceasefire'",
    summary:"TDF forces retake Mekelle, Tigray's capital. The Ethiopian government announces a 'humanitarian ceasefire' and withdraws federal forces — widely seen as political cover for a military retreat.",
    detail:"The rapid fall of Mekelle to TDF forces was a stunning reversal of the November 2020 federal advance. The 'humanitarian ceasefire' was announced hours after it became clear Mekelle would fall. Federal forces evacuated. The TPLF noted the ceasefire coincided precisely with their military victory and described it as a face-saving measure.",
    source:"Reuters; AP; BBC, June 28, 2021" },

  /* ── PHASE 2 ── */
  { date:"July 2021", phase:2, cat:"military",
    title:"TDF Expands into Amhara and Afar Regions",
    summary:"Following the reconquest of Tigray, TDF forces advance into Amhara and Afar regions. The controversial expansion transforms the war's character and triggers a massive new humanitarian crisis.",
    detail:"TDF commanders argued that the expansion was militarily necessary: to establish a buffer zone, cut federal supply lines, bring the war's costs home to Addis Ababa's population, and increase pressure for a negotiated settlement that included withdrawal of all foreign forces. Critics argued it gave Abiy a nationalist narrative, hardened Amhara opposition to any TPLF-friendly settlement, and caused enormous civilian suffering.",
    source:"BBC; Reuters; ICG Ethiopia briefing, July 2021" },

  { date:"July 18, 2021", phase:2, cat:"humanitarian",
    title:"Guterres Warns UN Security Council: 400,000 in Famine in Tigray",
    summary:"UN Secretary-General António Guterres tells the Security Council that 400,000 people in Tigray are in famine conditions — the first formal famine declaration anywhere in a decade. Aid is deliberately blocked.",
    detail:"Guterres described the humanitarian situation in Tigray as 'the worst famine in the world in a decade' and described the blockade of Tigray as a deliberate act. He called for immediate, unimpeded humanitarian access. The Security Council meeting was contentious — China and Russia resisted strong language, and Ethiopia pushed back against what it described as interference.",
    source:"UN News, July 18, 2021; UN Security Council record" },

  { date:"July–August 2021", phase:2, cat:"humanitarian",
    title:"De Facto Humanitarian Blockade Formally Documented",
    summary:"Multiple UN agencies and NGOs formally document that Tigray is under a near-total humanitarian blockade: aid convoys turned back, banking suspended, communications cut, fuel blocked.",
    detail:"The UN later concluded in its joint investigation that humanitarian aid had been weaponized — used as a tool of collective punishment against Tigray's civilian population. Only 10–15% of required aid convoys were reaching Tigray. Banking, fuel access, and telecommunications remained largely cut. Aid agencies described the blockade as one of the most severe humanitarian access crises they had ever encountered.",
    source:"UN OCHA; WFP; UNICEF; Amnesty International" },

  { date:"August 2021", phase:2, cat:"diplomatic",
    title:"United States Imposes Sanctions on Eritrea; Calls for Force Withdrawal",
    summary:"The United States imposes targeted sanctions on Eritrean military officials and entities, and formally calls for the unconditional withdrawal of Eritrean forces from Tigray.",
    detail:"The US Treasury designated Eritrea's military and People's Front for Democracy and Justice (ruling party) as sanctions targets. The US also imposed aid restrictions on Ethiopia. Ethiopia's government rejected the sanctions as foreign interference. Eritrea's forces remained in Tigray.",
    source:"US Treasury; US State Department, August 2021" },

  { date:"September 2021", phase:2, cat:"diplomatic",
    title:"UN Human Rights Council Establishes Expert Investigation Commission",
    summary:"The UN Human Rights Council votes to create an independent International Commission of Human Rights Experts on Ethiopia to investigate violations by all parties in the Tigray conflict.",
    detail:"The vote was contentious, passing over Ethiopia's strong objections and with limited African Union support. The commission's mandate covered atrocities committed by Ethiopian federal forces, Eritrean forces, Amhara forces, and TDF forces. Ethiopia refused to cooperate with the investigation. The commission's findings, published in 2022-2023, documented widespread war crimes by all parties.",
    source:"UN Human Rights Council, September 2021" },

  { date:"October–November 2021", phase:2, cat:"military",
    title:"TDF Captures Dessie and Kombolcha — Advances Within 400km of Addis Ababa",
    summary:"TDF and allied Oromo Liberation Army forces capture major Amhara towns of Dessie and Kombolcha, advancing to within 400km of the capital. Panic spreads in Addis Ababa.",
    detail:"The fall of Dessie and Kombolcha — key logistics hubs on the arterial road to Addis Ababa — triggered a crisis response in the capital. Western embassies issued evacuation advisories. The US Special Envoy Jeffrey Feltman traveled urgently to Addis Ababa. Abiy Ahmed called on all Ethiopians to take up arms and announced he would personally lead troops at the front.",
    source:"Reuters; BBC; AP, October–November 2021" },

  { date:"November 2, 2021", phase:2, cat:"political",
    title:"Ethiopia Declares National State of Emergency",
    summary:"PM Abiy Ahmed declares a six-month national state of emergency, granting sweeping detention powers and calling all Ethiopians to take up arms against the TDF advance.",
    detail:"The state of emergency was the most significant domestic security measure since the Oromo protests of 2016–2018. It enabled detention without charge, restricted freedom of movement and expression, and mobilized civilian militia. Thousands of ethnic Tigrayans in Addis Ababa were detained in the days following the declaration.",
    source:"Reuters; HRW, November 2021" },

  { date:"November 3–15, 2021", phase:2, cat:"atrocity",
    title:"Mass Arbitrary Detention of Ethnic Tigrayans in Addis Ababa",
    summary:"Following the state of emergency declaration, thousands of ethnic Tigrayans in Addis Ababa are arrested — in many documented cases, solely because of their ethnicity.",
    detail:"Human Rights Watch documented arrests of Tigrayan business owners, professionals, civil servants, and ordinary residents. Some were interrogated and released; others were detained for extended periods. HRW described the detentions as collective punishment — a serious violation of international humanitarian law — and noted they fit a pattern of ethnic targeting.",
    source:"Human Rights Watch, November 2021; Amnesty International" },

  { date:"December 2021", phase:2, cat:"military",
    title:"TDF Announces Strategic Withdrawal from Amhara and Afar",
    summary:"The TDF announces withdrawal from Amhara and Afar back to Tigray — driven by military setbacks from drone warfare, supply overextension, and diplomatic calculations.",
    detail:"Federal forces had acquired Turkish Bayraktar TB2 and Iranian Shahed-129 combat drones, which proved devastating against TDF supply lines and massed formations. The TDF's overextended supply lines, combined with drone strikes, made the positions increasingly untenable. The withdrawal was also framed as a goodwill gesture for peace negotiations. Federal forces rapidly retook lost towns.",
    source:"Reuters; BBC; Military Times; ICG, December 2021" },

  /* ── PHASE 3 ── */
  { date:"January–March 2022", phase:3, cat:"military",
    title:"Ethiopian Offensive Resumes — Drone Warfare Intensifies in Tigray",
    summary:"Ethiopian forces launch a major new offensive in Tigray. Drone strikes — using Turkish and Iranian-supplied UAVs — intensify against TDF positions and, according to human rights groups, civilian areas.",
    detail:"The Ethiopian offensive in early 2022 used drone technology as its primary tactical advantage. Human Rights Watch documented air strikes on markets, farms, and a facility for displaced persons in Tigray. The TDF suffered significant losses from drone strikes but was not destroyed. The war settled into a grinding stalemate.",
    source:"HRW (March 2022); Reuters; BBC" },

  { date:"March 2022", phase:3, cat:"humanitarian",
    title:"Limited Humanitarian Corridors Reopen After Months",
    summary:"Following intense international pressure, some humanitarian corridors into Tigray nominally reopen after months of near-total blockade.",
    detail:"Even with corridors nominally open, bureaucratic obstacles, checkpoints, fuel shortages, and insecurity meant actual aid delivery remained a tiny fraction of what was required. UN agencies continued to document catastrophic famine-level food insecurity affecting millions. The partial opening was hailed by Ethiopia but described by UN agencies as wholly insufficient.",
    source:"UN OCHA; WFP, March 2022" },

  { date:"July 24, 2022", phase:3, cat:"diplomatic",
    title:"Ethiopia Announces Indefinite Humanitarian Truce",
    summary:"The Ethiopian government announces an indefinite humanitarian truce — the most significant de-escalatory move since the war began. Battlefield exhaustion and international pressure are key factors.",
    detail:"The truce reflected growing international pressure, AU diplomatic efforts by High Representative Olusegun Obasanjo, and a military stalemate. The Ethiopian government presented it as a humanitarian gesture; analysts also noted strategic factors — drone-based offensives were not achieving decisive results and the war's economic cost was mounting.",
    source:"Reuters; BBC, July 24, 2022" },

  { date:"August 5, 2022", phase:3, cat:"diplomatic",
    title:"TPLF Accepts Humanitarian Truce — First Aid Convoys in Months Enter Tigray",
    summary:"The TPLF announces its acceptance of the humanitarian truce. Within days, the first significant UN aid convoys in months begin moving toward Tigray.",
    detail:"The TPLF's acceptance of the truce marked a genuine turning-point. WFP and other UN convoys moved into Tigray within days. Banking services were partially restored to Mekelle. Partial telecommunications reconnection began. However, aid remained far below need — estimates suggested Tigray had received less than 15% of required humanitarian supplies during the preceding year.",
    source:"Reuters; UN OCHA, August 2022" },

  { date:"October 2022", phase:3, cat:"diplomatic",
    title:"AU-Mediated Pretoria Peace Talks Begin",
    summary:"African Union-mediated peace talks between the Ethiopian government and TPLF open in Pretoria, South Africa, under the chairmanship of AU High Representative Olusegun Obasanjo.",
    detail:"The Pretoria talks were the culmination of months of AU diplomatic effort. Ethiopian government negotiators and senior TPLF figures sat across from each other in formal negotiations for the first time. Key issues: permanent ceasefire, TDF disarmament, humanitarian access, withdrawal of Eritrean and Amhara forces, and the future governance of Western Tigray. The Western Tigray issue was the most difficult.",
    source:"African Union; Reuters, October 2022" },

  { date:"November 2, 2022", phase:3, cat:"peace",
    title:"🕊️ Pretoria Agreement Signed — The Tigray War Officially Ends",
    summary:"The Agreement for Lasting Peace through a Permanent Cessation of Hostilities (CoHA) is signed in Pretoria after nearly two years of devastating war. The Tigray War officially ends.",
    detail:"The Pretoria Agreement committed all parties to: permanent cessation of hostilities; systematic and verifiable disarmament of the TDF; restoration of constitutional order; unimpeded humanitarian access; restoration of services; protection of civilians; and a commitment to accountability. The critical question of Eritrean forces and Western Tigray was addressed in principle but lacked the specificity the TPLF sought. The agreement was nonetheless a historic turning-point — but implementation would prove deeply contested.",
    source:"African Union; UN; Reuters; AP, November 2, 2022" },

  { date:"November 12, 2022", phase:3, cat:"peace",
    title:"Nairobi Talks: Implementation Framework Agreed",
    summary:"Follow-up talks in Nairobi produce an implementation framework for the Pretoria Agreement, including timelines and procedures for TDF disarmament and the restoration of federal authority.",
    detail:"The Nairobi declaration addressed practical implementation mechanisms — how TDF disarmament would proceed, how federal forces would return, and how the transition of governance would be managed. The most contentious issue — the withdrawal of Eritrean and Amhara forces from western Tigray — was addressed with commitments that would prove very difficult to enforce.",
    source:"African Union; UN News, November 12, 2022" },

  /* ── POST-WAR ── */
  { date:"January 2023", phase:4, cat:"peace",
    title:"TDF Formally Hands Over Heavy Weaponry to Ethiopian Forces",
    summary:"The Tigray Defense Forces formally hand over tanks, artillery, and armored vehicles to the Ethiopian National Defense Force — the most concrete military implementation step of the Pretoria Agreement.",
    detail:"The handover ceremonies marked a significant moment — the TDF's heavy weaponry was surrendered to federal authority. TDF fighters began a formal integration process into the ENDF. Questions remained about the completeness of disarmament and about the status of smaller arms. Despite this, the handover represented the Pretoria Agreement's most visible early success.",
    source:"Reuters; AU Monitoring Mission, January 2023" },

  { date:"March 2023", phase:4, cat:"political",
    title:"Tigray Interim Regional Administration (IRA) Established",
    summary:"The Tigray Interim Regional Administration is formally established under Getachew Reda as a transitional governing body, pending elections that had been delayed by the war.",
    detail:"The IRA faced the enormous task of governing a devastated region: rebuilding institutions, managing the return of displaced populations, navigating between Addis Ababa's demands and the TPLF Central Committee's expectations, and overseeing post-war reconstruction. The IRA's legitimacy was contested by some within the TPLF.",
    source:"Ethiopian government; Reuters, March 2023" },

  { date:"2023", phase:4, cat:"humanitarian",
    title:"USAID/WFP Grain Theft Scandal — Aid to Ethiopia Suspended",
    summary:"Investigations reveal a systematic, nationwide scheme to steal humanitarian grain intended for conflict-affected populations. USAID and WFP suspend food assistance to Ethiopia — with devastating consequences for Tigray.",
    detail:"The grain theft scandal — involving government officials, local actors, and fraudulent recipient registration at scale — led to a suspension of USAID and WFP food assistance across Ethiopia. The suspension was catastrophic for Tigray, where hundreds of thousands were already in severe food insecurity. Partial aid resumption came later, but trust was permanently damaged and coverage reduced significantly.",
    source:"AP (June 2023); Reuters; WFP investigation" },

  { date:"2024", phase:4, cat:"political",
    title:"Western Tigray Remains Occupied — IDPs Cannot Return",
    summary:"Two years after the Pretoria Agreement, Western Tigray remains under Amhara regional administration and Eritrean forces remain near the border. Hundreds of thousands of displaced Tigrayans cannot return home.",
    detail:"The failure to implement the withdrawal of Amhara and Eritrean forces from Tigray remains the single largest unresolved issue of the peace process. IDP camps in Mekelle, Shire, and Adigrat remain overcrowded. Western Tigrayan IDPs face starvation conditions. The issue continues to destabilize the peace process and remains the core driver of TPLF frustration with the Pretoria Agreement.",
    source:"HRW; IOM; ReliefWeb; Omna Tigray reports" },

  { date:"Late 2025", phase:4, cat:"humanitarian",
    title:"Starvation Deaths Documented at Hitsats IDP Camp",
    summary:"Researchers document starvation deaths among displaced persons at Hitsats camp — a visible indicator of the collapse of the post-war humanitarian system for Western Tigrayan IDPs.",
    detail:"Hitsats camp housed thousands of internally displaced persons from Western Tigray unable to return to their homes. The deaths were among the most starkly documented consequences of the combined humanitarian blockade, USAID suspension, and ongoing displacement crisis. They drew international attention to the fact that people were still dying from the Tigray War's consequences three years after the ceasefire.",
    source:"Omna Tigray; AP; on-site researchers, 2025" },

  { date:"May 2025", phase:4, cat:"political",
    title:"TPLF Party Registration Cancelled — Barred from June 2026 Elections",
    summary:"The Ethiopian National Electoral Board cancels the TPLF's party registration, effectively barring Tigray's dominant political force from participating in June 2026 national elections.",
    detail:"The cancellation mirrors the 2020 electoral dispute that directly preceded the outbreak of the war — a pattern of cyclical escalation that international analysts described with alarm. The International Crisis Group and ACLED flagged the deregistration as a major risk factor for renewed conflict. The TPLF described it as a final breach of the Pretoria Agreement's political commitments.",
    source:"ICG Horizon Report 2025; Addis Standard; HRW World Report 2026" },

  { date:"January 26–30, 2026", phase:4, cat:"military",
    title:"Renewed Clashes: TDF Operations in Tselemt; Federal Drone Strikes",
    summary:"TDF forces launch operations in the disputed Tselemt area of Western Tigray. The Ethiopian military responds with drone strikes in Central Tigray on January 30 — the most significant ceasefire breach since November 2022.",
    detail:"The Tselemt operation was part of TDF's effort to reclaim Western Tigrayan territory still occupied by Amhara forces, as required by the Pretoria Agreement but not implemented. Federal drone strikes targeted what the ENDF described as military assets, though local reports indicated civilian impact. Simultaneously, a new armed faction — the Tigray Peace Force (TPF), believed to have tacit federal backing — clashed with TDF near the Afar border, signaling a multi-party conflict was developing inside Tigray itself.",
    source:"Al Jazeera; BBC; ACLED Africa Overview March 2026; UN News, January 2026" },

  { date:"April 8, 2026", phase:4, cat:"political",
    title:"IRA Mandate Unilaterally Extended — TPLF Calls It Pretoria Violation",
    summary:"PM Abiy Ahmed's office announces a one-year extension of IRA President Tadesse Worede's mandate. The TPLF Central Committee immediately rejects this as a unilateral violation of the Pretoria Agreement.",
    detail:"The extension, made without TPLF consultation, triggered an open political rupture. TPLF Chairman Debretsion Gebremichael described it as violating the bilateral spirit of the agreement. Lt. Gen. Worede accepted the extension — deepening the split between the federally-aligned IRA technocrats and the TPLF old guard. The rupture created three competing centers of power within Tigray.",
    source:"Addis Standard; Martin Plaut; The Reporter Ethiopia, April 2026" },

  { date:"April 15–16, 2026", phase:4, cat:"political",
    title:"TPLF Axum Resolutions: Pre-War 2020 Council to Be Reinstated",
    summary:"The TPLF Central Committee meets in Axum and votes to reinstate the pre-war 2020 Regional Council — effectively declaring a parallel government and announcing the Pretoria Agreement 'completely annulled.'",
    detail:"The Axum resolutions represented the most direct challenge to the post-war order. The resolutions were endorsed by the Mekete leadership council on April 17–18. IRA President Worede warned on April 21 that the move 'nullifies the Pretoria Agreement' and could lead to renewed conflict. International observers, including the ICG and ACLED, described the situation as potentially repeating the pre-2020 escalation cycle.",
    source:"Addis Standard; ACLED; ICG Horizon Report; Martin Plaut, April 2026" },
];

/* ─── State ─── */
var activePhase = "all";
var activeCat   = "all";

/* ─── Build timeline ─── */
function render() {
  var root  = document.getElementById("tlRoot");
  var empty = document.getElementById("tlEmpty");

  /* Remove old phase banners and event items (keep empty node) */
  Array.from(root.querySelectorAll(".tl-phase-banner, .tl-item")).forEach(function(n){ n.remove(); });

  var lastPhase = null;
  var count = 0;

  EVENTS.forEach(function(ev, idx) {
    var phaseMatch = activePhase === "all" || String(ev.phase) === activePhase;
    var catMatch   = activeCat   === "all" || ev.cat === activeCat;
    var visible    = phaseMatch && catMatch;

    /* Phase banner */
    if (phaseMatch && ev.phase !== lastPhase) {
      var pm = PHASE_META[ev.phase];
      var banner = document.createElement("div");
      banner.className = "tl-phase-banner";
      banner.setAttribute("data-phase", ev.phase);
      banner.innerHTML =
        '<div class="tl-phase-banner-dot"></div>' +
        '<div class="tl-phase-banner-title">' + esc(pm.label) + '</div>' +
        '<div class="tl-phase-banner-dates">' + esc(pm.dates) + '</div>';
      banner.style.borderLeft = "4px solid " + pm.color;
      /* Hide banner if no visible events in this phase under current cat filter */
      root.insertBefore(banner, empty);
      lastPhase = ev.phase;
    }

    /* Event item */
    var item = document.createElement("div");
    item.className = "tl-item" + (visible ? "" : " hidden");
    item.setAttribute("data-phase", ev.phase);
    item.setAttribute("data-cat",   ev.cat);
    item.setAttribute("data-idx",   idx);

    item.innerHTML =
      '<div class="tl-card" id="card-' + idx + '">' +
        '<div class="tl-card-header" onclick="toggleCard(' + idx + ')" ' +
             'role="button" aria-expanded="false" aria-controls="detail-' + idx + '">' +
          '<div>' +
            '<div class="tl-card-meta">' +
              '<span class="tl-date-badge">' + esc(ev.date) + '</span>' +
              '<span class="tl-cat-badge">' + esc(CAT_LABEL[ev.cat] || ev.cat) + '</span>' +
            '</div>' +
            '<div class="tl-card-title">' + esc(ev.title) + '</div>' +
            '<div class="tl-card-summary">' + esc(ev.summary) + '</div>' +
          '</div>' +
          '<div class="tl-expand-icon" aria-hidden="true">▾</div>' +
        '</div>' +
        '<div class="tl-detail" id="detail-' + idx + '" role="region">' +
          '<p class="tl-detail-text">' + esc(ev.detail) + '</p>' +
          (ev.source
            ? '<div class="tl-detail-source"><strong>Sources:</strong> ' + esc(ev.source) + '</div>'
            : '') +
        '</div>' +
      '</div>';

    root.insertBefore(item, empty);
    if (visible) count++;
  });

  /* Update phase banners: hide if no visible children */
  Array.from(root.querySelectorAll(".tl-phase-banner")).forEach(function(banner) {
    var phase = banner.getAttribute("data-phase");
    var anyVisible = Array.from(root.querySelectorAll(".tl-item[data-phase='" + phase + "']"))
      .some(function(el){ return !el.classList.contains("hidden"); });
    banner.style.display = anyVisible ? "" : "none";
  });

  document.getElementById("visCount").textContent = count;
  empty.style.display = count === 0 ? "block" : "none";
}

function toggleCard(idx) {
  var card   = document.getElementById("card-"   + idx);
  var detail = document.getElementById("detail-" + idx);
  var header = card.querySelector(".tl-card-header");
  var isOpen = card.classList.contains("open");
  card.classList.toggle("open", !isOpen);
  header.setAttribute("aria-expanded", !isOpen);
}

function filterPhase(btn) {
  activePhase = btn.getAttribute("data-phase");
  document.querySelectorAll(".tl-tab").forEach(function(b){ b.classList.remove("active"); });
  btn.classList.add("active");
  render();
}

function filterCat(btn) {
  activeCat = btn.getAttribute("data-cat");
  document.querySelectorAll(".tl-chip").forEach(function(c){
    c.classList.toggle("inactive", c !== btn);
  });
  render();
}

function esc(s) {
  return String(s)
    .replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")
    .replace(/"/g,"&quot;");
}

/* Initial render */
document.addEventListener("DOMContentLoaded", render);
/* Fallback for MkDocs instant loading */
if (document.readyState !== "loading") render();
</script>
