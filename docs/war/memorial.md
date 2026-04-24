---
title: "War Memorial — Tigray 2020–2022"
description: "A digital memorial dedicated to those who lost their lives during the Tigray War (2020-2022). Honoring victims, preserving memory, and committing to peace."
tags:
  - war-memorial
  - tigray-war
  - human-rights
  - peace
---

<style>
/* ═══════════════════════════════════════════════════════════════
   MEMORIAL PAGE — Scoped styles (prefixed .mem- to avoid collisions)
   Hooks into MkDocs Material's existing CSS variable system.
   ═══════════════════════════════════════════════════════════════ */

/* ── Core palette (adapts to light/dark mode) ── */
:root {
  --mem-flame:        #f59e0b;
  --mem-flame-bright: #fbbf24;
  --mem-flame-deep:   #d97706;
  --mem-glow:         rgba(245, 158, 11, 0.35);
  --mem-navy:         #0d1a2a;
  --mem-navy-mid:     #1b2d42;
  --mem-gold:         #c49a2a;
  --mem-gold-light:   #e8b94f;
  --mem-red:          #7f1d1d;
  --mem-red-bg:       rgba(127, 29, 29, 0.08);
  --mem-card-bg:      #ffffff;
  --mem-page-bg:      #f8f9fa;
  --mem-text:         #1a1a2e;
  --mem-text-soft:    #4a4a6a;
  --mem-border:       #e2e8f0;
  --mem-radius:       10px;
  --mem-shadow:       0 2px 12px rgba(0,0,0,0.08);
}

[data-md-color-scheme="slate"] {
  --mem-card-bg:   #1b2d42;
  --mem-page-bg:   #0d1a2a;
  --mem-text:      rgba(228,232,240,0.93);
  --mem-text-soft: rgba(228,232,240,0.60);
  --mem-border:    rgba(228,232,240,0.12);
  --mem-shadow:    0 2px 12px rgba(0,0,0,0.30);
  --mem-red-bg:    rgba(127, 29, 29, 0.18);
}

/* ── Hero ── */
.mem-hero {
  background: linear-gradient(160deg, #0a0f1a 0%, #0d1f3c 50%, #1a2d1a 100%);
  border-radius: var(--mem-radius);
  padding: 3rem 2rem 2.5rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  margin-bottom: 2rem;
}
.mem-hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse 60% 40% at 50% 20%, rgba(245,158,11,0.12) 0%, transparent 70%);
  pointer-events: none;
}
.mem-hero-eyebrow {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--mem-gold-light);
  margin-bottom: 0.75rem;
}
.mem-hero h1 {
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 0.5rem;
  line-height: 1.2;
  border: none !important;
}
.mem-hero-sub {
  font-size: 1.05rem;
  color: rgba(255,255,255,0.72);
  max-width: 520px;
  margin: 0 auto 2rem;
  line-height: 1.6;
}
.mem-hero-divider {
  width: 48px;
  height: 2px;
  background: var(--mem-flame);
  margin: 0 auto 2rem;
  border-radius: 2px;
}

/* ── Impact stats bar ── */
.mem-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  gap: 1rem;
  background: rgba(0,0,0,0.25);
  border-top: 1px solid rgba(255,255,255,0.08);
  border-radius: 0 0 8px 8px;
  padding: 1.5rem 1rem;
  margin: 0 -2rem -2.5rem;
}
.mem-stat {
  text-align: center;
}
.mem-stat-num {
  display: block;
  font-size: 1.6rem;
  font-weight: 800;
  color: var(--mem-flame-bright);
  line-height: 1.1;
}
.mem-stat-label {
  display: block;
  font-size: 0.7rem;
  color: rgba(255,255,255,0.55);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-top: 0.25rem;
}

/* ── Section wrapper ── */
.mem-section {
  margin: 2rem 0;
}
.mem-section-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--mem-text);
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--mem-border);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.mem-section-title .mem-icon {
  font-size: 1.2rem;
  flex-shrink: 0;
}

/* ── Cards grid ── */
.mem-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}
.mem-card {
  background: var(--mem-card-bg);
  border: 1px solid var(--mem-border);
  border-left: 4px solid var(--mem-gold);
  border-radius: var(--mem-radius);
  padding: 1.2rem 1.1rem;
  box-shadow: var(--mem-shadow);
  position: relative;
  transition: transform 0.15s, box-shadow 0.15s;
}
.mem-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0,0,0,0.12);
}
.mem-card-icon {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  display: block;
}
.mem-card-title {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--mem-text);
  margin-bottom: 0.3rem;
}
.mem-card-desc {
  font-size: 0.8rem;
  color: var(--mem-text-soft);
  line-height: 1.5;
}
.mem-coming-soon {
  display: inline-block;
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  background: rgba(196,154,42,0.15);
  color: var(--mem-gold);
  border: 1px solid rgba(196,154,42,0.30);
  border-radius: 4px;
  padding: 2px 7px;
  margin-top: 0.6rem;
}
[data-md-color-scheme="slate"] .mem-coming-soon {
  background: rgba(232,185,79,0.15);
  color: var(--mem-gold-light);
  border-color: rgba(232,185,79,0.30);
}

/* ── Alert / admonition style ── */
.mem-alert {
  background: var(--mem-red-bg);
  border-left: 4px solid #991b1b;
  border-radius: 0 var(--mem-radius) var(--mem-radius) 0;
  padding: 1rem 1.2rem;
  margin: 1.5rem 0;
  color: var(--mem-text);
}
.mem-alert strong {
  color: #991b1b;
  display: block;
  margin-bottom: 0.3rem;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
[data-md-color-scheme="slate"] .mem-alert strong {
  color: #fca5a5;
}

/* ══════════════════════════════════════
   CANDLE SECTION
   ══════════════════════════════════════ */
.mem-candle-section {
  background: var(--mem-card-bg);
  border: 1px solid var(--mem-border);
  border-radius: var(--mem-radius);
  padding: 2rem;
  text-align: center;
  box-shadow: var(--mem-shadow);
  margin: 2rem 0;
}
.mem-candle-section h3 {
  color: var(--mem-text);
  margin-bottom: 0.5rem;
}
.mem-candle-section p {
  color: var(--mem-text-soft);
  font-size: 0.9rem;
  max-width: 400px;
  margin: 0 auto 1.5rem;
}

/* SVG candle container */
.mem-candle-wrap {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 140px;
  margin-bottom: 1.2rem;
  cursor: pointer;
  position: relative;
}
.mem-candle-wrap:focus {
  outline: 2px dashed var(--mem-gold);
  outline-offset: 8px;
  border-radius: 4px;
}

/* Candle SVG elements */
.mem-candle-svg .candle-body { fill: #f0ebe0; }
.mem-candle-svg .candle-stripe { fill: rgba(0,0,0,0.06); }
.mem-candle-svg .candle-top { fill: #e8e0d0; }
.mem-candle-svg .wick { stroke: #3d2b1f; stroke-width: 1.5; stroke-linecap: round; }
.mem-candle-svg .wick-ember { fill: #3d2b1f; }

/* Flame — hidden until lit */
.mem-candle-svg .flame-group {
  transform-origin: 50% 90%;
  opacity: 0;
  transition: opacity 0.4s;
}
.mem-candle-svg .flame-outer { fill: var(--mem-flame); }
.mem-candle-svg .flame-inner { fill: var(--mem-flame-bright); }
.mem-candle-svg .flame-core  { fill: #fff9c4; }

/* Glow ring — hidden until lit */
.mem-candle-svg .glow {
  fill: none;
  stroke: var(--mem-flame);
  stroke-width: 12;
  stroke-opacity: 0;
  transition: stroke-opacity 0.4s;
  filter: blur(6px);
}

/* LIT state */
.mem-candle-wrap.lit .flame-group {
  opacity: 1;
  animation: candle-flicker 2.2s ease-in-out infinite;
}
.mem-candle-wrap.lit .glow {
  stroke-opacity: 0.25;
  animation: glow-pulse 2.5s ease-in-out infinite;
}
.mem-candle-wrap.lit .wick-ember {
  fill: var(--mem-flame);
}

@keyframes candle-flicker {
  0%   { transform: scaleX(1.00) scaleY(1.00) rotate(-1.0deg); }
  15%  { transform: scaleX(0.93) scaleY(1.08) rotate( 1.5deg); }
  30%  { transform: scaleX(1.06) scaleY(0.95) rotate(-0.5deg); }
  50%  { transform: scaleX(0.97) scaleY(1.04) rotate( 0.8deg); }
  65%  { transform: scaleX(1.03) scaleY(0.98) rotate(-1.2deg); }
  80%  { transform: scaleX(0.95) scaleY(1.06) rotate( 0.5deg); }
  100% { transform: scaleX(1.00) scaleY(1.00) rotate(-1.0deg); }
}
@keyframes glow-pulse {
  0%, 100% { stroke-opacity: 0.20; }
  50%       { stroke-opacity: 0.35; }
}

/* Candle counter */
.mem-candle-count {
  font-size: 0.8rem;
  color: var(--mem-text-soft);
  margin-top: 0.3rem;
}
.mem-candle-count span {
  font-weight: 700;
  color: var(--mem-flame);
}

/* Candle message */
.mem-candle-msg {
  display: none;
  background: rgba(245,158,11,0.10);
  border: 1px solid rgba(245,158,11,0.30);
  border-radius: var(--mem-radius);
  padding: 0.8rem 1.2rem;
  font-size: 0.88rem;
  color: var(--mem-text);
  margin-top: 1rem;
  max-width: 380px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.5;
}
.mem-candle-msg.visible { display: block; }

.mem-btn {
  display: inline-block;
  background: var(--mem-navy-mid);
  color: #ffffff !important;
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 6px;
  padding: 0.55rem 1.4rem;
  font-size: 0.88rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s, transform 0.1s;
  text-decoration: none !important;
  line-height: 1.4;
}
.mem-btn:hover {
  background: #243550;
  transform: translateY(-1px);
}
.mem-btn-gold {
  background: var(--mem-gold);
  color: #1a1a2e !important;
  border-color: transparent;
}
.mem-btn-gold:hover { background: #d4aa35; }
.mem-btn-sm {
  font-size: 0.78rem;
  padding: 0.35rem 0.9rem;
}

/* ══════════════════════════════════════
   PEACE PLEDGE FORM
   ══════════════════════════════════════ */
.mem-pledge-section {
  background: var(--mem-card-bg);
  border: 1px solid var(--mem-border);
  border-top: 4px solid var(--mem-navy-mid);
  border-radius: var(--mem-radius);
  padding: 2rem;
  box-shadow: var(--mem-shadow);
  margin: 2rem 0;
}
.mem-pledge-section h3 {
  color: var(--mem-text);
  margin-bottom: 0.4rem;
}
.mem-pledge-section > p {
  color: var(--mem-text-soft);
  font-size: 0.88rem;
  margin-bottom: 1.2rem;
}
.mem-form {
  display: grid;
  gap: 0.8rem;
}
.mem-form label {
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--mem-text);
  display: block;
  margin-bottom: 0.25rem;
}
.mem-form input[type="text"],
.mem-form input[type="email"] {
  width: 100%;
  padding: 0.55rem 0.85rem;
  border: 1px solid var(--mem-border);
  border-radius: 6px;
  background: var(--mem-page-bg);
  color: var(--mem-text);
  font-size: 0.9rem;
  box-sizing: border-box;
  transition: border-color 0.15s, box-shadow 0.15s;
}
.mem-form input:focus {
  outline: none;
  border-color: var(--mem-gold);
  box-shadow: 0 0 0 3px rgba(196,154,42,0.18);
}
[data-md-color-scheme="slate"] .mem-form input {
  background: #162233;
  border-color: rgba(228,232,240,0.18);
  color: rgba(228,232,240,0.93);
}
.mem-form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.8rem;
}
@media (max-width: 480px) {
  .mem-form-row { grid-template-columns: 1fr; }
}
.mem-pledge-thanks {
  display: none;
  text-align: center;
  padding: 1.5rem;
  background: rgba(22, 163, 74, 0.08);
  border: 1px solid rgba(22, 163, 74, 0.25);
  border-radius: var(--mem-radius);
}
.mem-pledge-thanks.visible { display: block; }
.mem-pledge-thanks-icon { font-size: 2.5rem; margin-bottom: 0.5rem; }
.mem-pledge-thanks h4 {
  color: var(--mem-text);
  margin: 0.3rem 0;
}
.mem-pledge-thanks p {
  font-size: 0.85rem;
  color: var(--mem-text-soft);
}
.mem-pledge-count {
  font-size: 0.78rem;
  color: var(--mem-text-soft);
  margin-top: 0.8rem;
  text-align: center;
}

/* ══════════════════════════════════════
   FEATURE CARD — interactive / coming soon
   ══════════════════════════════════════ */
.mem-feature-card {
  background: var(--mem-card-bg);
  border: 1px solid var(--mem-border);
  border-radius: var(--mem-radius);
  padding: 1.4rem;
  box-shadow: var(--mem-shadow);
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: box-shadow 0.2s, transform 0.15s;
  text-align: left;
  width: 100%;
  color: var(--mem-text);
}
.mem-feature-card:hover {
  box-shadow: 0 6px 24px rgba(0,0,0,0.14);
  transform: translateY(-2px);
}
.mem-feature-card-icon {
  font-size: 2rem;
  display: block;
  margin-bottom: 0.6rem;
}
.mem-feature-card-title {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--mem-text);
  margin-bottom: 0.3rem;
}
.mem-feature-card-desc {
  font-size: 0.8rem;
  color: var(--mem-text-soft);
  line-height: 1.5;
}
.mem-feature-card .mem-overlay-badge {
  position: absolute;
  top: 0.7rem;
  right: 0.7rem;
  font-size: 0.6rem;
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  background: var(--mem-gold);
  color: #1a1a2e;
  border-radius: 4px;
  padding: 2px 6px;
}

/* ── Narrative block ── */
.mem-narrative {
  background: var(--mem-card-bg);
  border: 1px solid var(--mem-border);
  border-left: 4px solid var(--mem-flame);
  border-radius: 0 var(--mem-radius) var(--mem-radius) 0;
  padding: 1.2rem 1.4rem;
  margin: 1.5rem 0;
  box-shadow: var(--mem-shadow);
}
.mem-narrative p {
  margin: 0;
  color: var(--mem-text);
  font-size: 0.95rem;
  line-height: 1.75;
}

/* ── Contribution stub ── */
.mem-contribute {
  background: var(--mem-card-bg);
  border: 1px dashed var(--mem-border);
  border-radius: var(--mem-radius);
  padding: 1.2rem 1.4rem;
  margin: 2rem 0;
  font-size: 0.85rem;
  color: var(--mem-text-soft);
  text-align: center;
}
.mem-contribute a {
  color: var(--mem-gold);
  font-weight: 600;
}
[data-md-color-scheme="slate"] .mem-contribute a {
  color: var(--mem-gold-light);
}

/* ── Responsive fixes ── */
@media (max-width: 640px) {
  .mem-hero { padding: 2rem 1.2rem 0; }
  .mem-stats { margin: 0 -1.2rem -2rem; grid-template-columns: repeat(2, 1fr); }
  .mem-grid { grid-template-columns: 1fr; }
  .mem-candle-section, .mem-pledge-section { padding: 1.4rem 1rem; }
}
</style>

<!-- ═════════════════════════════════════════════
     HERO
     ═════════════════════════════════════════════ -->
<div class="mem-hero">
  <p class="mem-hero-eyebrow">Tigray War 2020 – 2022</p>
  <h1>Never Again Memorial</h1>
  <p class="mem-hero-sub">A digital memorial dedicated to those who lost their lives. Built to honor victims, preserve memory, and ensure this history is never forgotten.</p>
  <div class="mem-hero-divider"></div>

  <div class="mem-stats">
    <div class="mem-stat">
      <span class="mem-stat-num">300K–500K</span>
      <span class="mem-stat-label">Estimated deaths</span>
    </div>
    <div class="mem-stat">
      <span class="mem-stat-num">2.7M</span>
      <span class="mem-stat-label">Displaced at peak</span>
    </div>
    <div class="mem-stat">
      <span class="mem-stat-num">86%</span>
      <span class="mem-stat-label">Health facilities damaged</span>
    </div>
    <div class="mem-stat">
      <span class="mem-stat-num">2 yrs</span>
      <span class="mem-stat-label">Duration of siege</span>
    </div>
  </div>
</div>

<br>

<div class="mem-alert">
  <strong>⚠️ Content Advisory</strong>
  This memorial contains references to mass casualties, atrocities, and humanitarian catastrophe. Content is based on verified international sources. Reader discretion is advised.
</div>

<!-- ═════════════════════════════════════════════
     NARRATIVE
     ═════════════════════════════════════════════ -->
<div class="mem-narrative">
  <p>Between November 2020 and November 2022, the Tigray region of northern Ethiopia was the site of one of the 21st century's deadliest conflicts. Hundreds of thousands of people were killed through direct violence, famine used as a weapon, and the collapse of medical services. This page is a dedication to their memory — and a commitment that the world will not forget what happened here.</p>
</div>

<!-- ═════════════════════════════════════════════
     VIRTUAL CANDLE
     ═════════════════════════════════════════════ -->
<div class="mem-candle-section">
  <h3>🕯️ Light a Virtual Candle</h3>
  <p>A small act of remembrance. Click the candle below to light it in honor of those lost during the Tigray War.</p>

  <div class="mem-candle-wrap" id="candleWrap" role="button" tabindex="0"
       aria-label="Click to light a memorial candle" onclick="lightCandle()" onkeydown="if(event.key==='Enter'||event.key===' ')lightCandle()">
    <svg class="mem-candle-svg" width="60" height="140" viewBox="0 0 60 140" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <!-- Glow -->
      <circle class="glow" cx="30" cy="42" r="18"/>
      <!-- Flame group -->
      <g class="flame-group">
        <!-- Outer flame -->
        <ellipse class="flame-outer" cx="30" cy="40" rx="9" ry="14"/>
        <!-- Inner flame -->
        <ellipse class="flame-inner" cx="30" cy="43" rx="5.5" ry="9"/>
        <!-- Core -->
        <ellipse class="flame-core" cx="30" cy="46" rx="2.5" ry="4"/>
      </g>
      <!-- Wick -->
      <line class="wick" x1="30" y1="54" x2="30" y2="60"/>
      <circle class="wick-ember" cx="30" cy="54" r="1.5"/>
      <!-- Candle top -->
      <rect class="candle-top" x="17" y="58" width="26" height="5" rx="2"/>
      <!-- Candle body -->
      <rect class="candle-body" x="19" y="62" width="22" height="72" rx="3"/>
      <!-- Decorative stripes -->
      <rect class="candle-stripe" x="19" y="80" width="22" height="3" rx="1"/>
      <rect class="candle-stripe" x="19" y="100" width="22" height="3" rx="1"/>
      <rect class="candle-stripe" x="19" y="120" width="22" height="3" rx="1"/>
    </svg>
  </div>

  <p class="mem-candle-count">
    <span id="candleNum">0</span> candles lit in this session
  </p>

  <div class="mem-candle-msg" id="candleMsg">
    ❤️ Your remembrance is noted. This virtual flame honours those who perished during the Tigray War. A full interactive memorial wall with persistent candle records is being built with community input.
  </div>
</div>

<!-- ═════════════════════════════════════════════
     MEMORIAL COMPONENTS
     ═════════════════════════════════════════════ -->
<div class="mem-section">
  <div class="mem-section-title"><span class="mem-icon">🏛️</span> Memorial Components</div>
  <div class="mem-grid">

    <button class="mem-feature-card" onclick="comingSoon('Remembrance Wall')" aria-label="Digital Remembrance Wall — Coming Soon">
      <span class="mem-overlay-badge">Coming Soon</span>
      <span class="mem-feature-card-icon">🧱</span>
      <div class="mem-feature-card-title">Digital Remembrance Wall</div>
      <div class="mem-feature-card-desc">A searchable wall of names and memories, submitted by families and survivors worldwide.</div>
    </button>

    <button class="mem-feature-card" onclick="comingSoon('Personal Stories & Testimonies')" aria-label="Personal Stories — Coming Soon">
      <span class="mem-overlay-badge">Coming Soon</span>
      <span class="mem-feature-card-icon">📖</span>
      <div class="mem-feature-card-title">Personal Stories & Testimonies</div>
      <div class="mem-feature-card-desc">First-hand accounts from survivors, witnesses, and those who lost family members.</div>
    </button>

    <button class="mem-feature-card" onclick="comingSoon('Photo Documentation')" aria-label="Photo Documentation — Coming Soon">
      <span class="mem-overlay-badge">Coming Soon</span>
      <span class="mem-feature-card-icon">📷</span>
      <div class="mem-feature-card-title">Photo Documentation</div>
      <div class="mem-feature-card-desc">Verified photographic evidence and community-submitted images preserving visual memory.</div>
    </button>

    <button class="mem-feature-card" onclick="comingSoon('Interactive Memorial Map')" aria-label="Interactive Map — Coming Soon">
      <span class="mem-overlay-badge">Coming Soon</span>
      <span class="mem-feature-card-icon">🗺️</span>
      <div class="mem-feature-card-title">Interactive Memorial Map</div>
      <div class="mem-feature-card-desc">A geographic record of documented incidents, destroyed villages, and mass casualty sites.</div>
    </button>

    <button class="mem-feature-card" onclick="comingSoon('Community Tributes')" aria-label="Community Tributes — Coming Soon">
      <span class="mem-overlay-badge">Coming Soon</span>
      <span class="mem-feature-card-icon">🤝</span>
      <div class="mem-feature-card-title">Community Tributes</div>
      <div class="mem-feature-card-desc">Messages of solidarity and tribute from the global Tigrayan diaspora and international supporters.</div>
    </button>

  </div>
</div>

<!-- ═════════════════════════════════════════════
     REMEMBRANCE FEATURES
     ═════════════════════════════════════════════ -->
<div class="mem-section">
  <div class="mem-section-title"><span class="mem-icon">🕊️</span> Remembrance Features</div>
  <div class="mem-grid">

    <div class="mem-card">
      <span class="mem-card-icon">🕯️</span>
      <div class="mem-card-title">Virtual Candle Lighting</div>
      <div class="mem-card-desc">Light a persistent virtual candle visible to all visitors — a global act of collective remembrance.</div>
      <span class="mem-coming-soon">Preview above ↑</span>
    </div>

    <button class="mem-card" onclick="comingSoon('Memory Submission System')" style="text-align:left;cursor:pointer;background:var(--mem-card-bg);">
      <span class="mem-card-icon">✉️</span>
      <div class="mem-card-title">Memory Submission System</div>
      <div class="mem-card-desc">Submit a memory, photograph, or story of someone lost. Reviewed and published with care.</div>
      <span class="mem-coming-soon">Coming Soon</span>
    </button>

    <button class="mem-card" onclick="comingSoon('Family Story Collections')" style="text-align:left;cursor:pointer;background:var(--mem-card-bg);">
      <span class="mem-card-icon">👨‍👩‍👧‍👦</span>
      <div class="mem-card-title">Family Story Collections</div>
      <div class="mem-card-desc">Curated family histories documenting who the victims were beyond the statistics.</div>
      <span class="mem-coming-soon">Coming Soon</span>
    </button>

    <button class="mem-card" onclick="comingSoon('Survivor Testimonies')" style="text-align:left;cursor:pointer;background:var(--mem-card-bg);">
      <span class="mem-card-icon">🎙️</span>
      <div class="mem-card-title">Survivor Testimonies</div>
      <div class="mem-card-desc">Audio, video, and written testimonies from survivors — crucial evidence for accountability.</div>
      <span class="mem-coming-soon">Coming Soon</span>
    </button>

  </div>
</div>

<!-- ═════════════════════════════════════════════
     PEACE PLEDGE
     ═════════════════════════════════════════════ -->
<div class="mem-pledge-section" id="peacePledge">
  <h3>✊ Peace Pledge</h3>
  <p>Add your name to the global list of people who commit to remembering what happened in Tigray and working toward a world where it cannot happen again.</p>

  <div id="pledgeForm">
    <form class="mem-form" onsubmit="submitPledge(event)">
      <div class="mem-form-row">
        <div>
          <label for="pledgeName">Your Name *</label>
          <input type="text" id="pledgeName" name="name" placeholder="Full name" required autocomplete="name">
        </div>
        <div>
          <label for="pledgeEmail">Email (optional)</label>
          <input type="email" id="pledgeEmail" name="email" placeholder="you@example.com" autocomplete="email">
        </div>
      </div>
      <div>
        <label for="pledgeCountry">Country</label>
        <input type="text" id="pledgeCountry" name="country" placeholder="Where you're writing from" autocomplete="country-name">
      </div>
      <div style="margin-top:0.4rem;">
        <button type="submit" class="mem-btn mem-btn-gold">Sign the Peace Pledge →</button>
      </div>
    </form>
    <p class="mem-pledge-count">A permanent pledge registry is being developed. Your entry will be honoured when it launches.</p>
  </div>

  <div class="mem-pledge-thanks" id="pledgeThanks">
    <div class="mem-pledge-thanks-icon">🕊️</div>
    <h4>Thank you for your pledge.</h4>
    <p>Your commitment to peace and remembrance has been noted. Future features will honour this pledge as part of an international registry. Together, we say: <em>Never Again.</em></p>
  </div>
</div>

<!-- ═════════════════════════════════════════════
     EDUCATIONAL RESOURCES
     ═════════════════════════════════════════════ -->
<div class="mem-section">
  <div class="mem-section-title"><span class="mem-icon">📚</span> Educational Resources</div>
  <p style="color:var(--mem-text-soft);font-size:0.88rem;margin-bottom:1rem;">Understanding the Tigray War requires context. The following resources are being developed to support education, conflict prevention, and reconciliation.</p>

  <div class="mem-grid">

    <button class="mem-feature-card" onclick="comingSoon('Conflict Prevention Materials')" aria-label="Conflict Prevention Materials — Coming Soon">
      <span class="mem-overlay-badge">Coming Soon</span>
      <span class="mem-feature-card-icon">🛡️</span>
      <div class="mem-feature-card-title">Conflict Prevention</div>
      <div class="mem-feature-card-desc">Structured materials on early warning signs, ethnic conflict dynamics, and prevention frameworks.</div>
    </button>

    <button class="mem-feature-card" onclick="comingSoon('Peace Education Resources')" aria-label="Peace Education — Coming Soon">
      <span class="mem-overlay-badge">Coming Soon</span>
      <span class="mem-feature-card-icon">🌿</span>
      <div class="mem-feature-card-title">Peace Education</div>
      <div class="mem-feature-card-desc">Curricula and resources for schools, universities, and community educators covering the Tigray War.</div>
    </button>

    <button class="mem-feature-card" onclick="comingSoon('Human Rights Documentation')" aria-label="Human Rights Documentation — Coming Soon">
      <span class="mem-overlay-badge">Coming Soon</span>
      <span class="mem-feature-card-icon">⚖️</span>
      <div class="mem-feature-card-title">Human Rights Documentation</div>
      <div class="mem-feature-card-desc">Compiled evidence from UN, HRW, Amnesty International, and independent investigators.</div>
    </button>

    <button class="mem-feature-card" onclick="comingSoon('Historical Context Materials')" aria-label="Historical Context — Coming Soon">
      <span class="mem-overlay-badge">Coming Soon</span>
      <span class="mem-feature-card-icon">🏺</span>
      <div class="mem-feature-card-title">Historical Context</div>
      <div class="mem-feature-card-desc">The political, ethnic, and historical background essential to understanding how the war began.</div>
    </button>

    <button class="mem-feature-card" onclick="comingSoon('Reconciliation Resources')" aria-label="Reconciliation Resources — Coming Soon">
      <span class="mem-overlay-badge">Coming Soon</span>
      <span class="mem-feature-card-icon">🤲</span>
      <div class="mem-feature-card-title">Reconciliation</div>
      <div class="mem-feature-card-desc">Resources on transitional justice, reconciliation processes, and community healing after mass atrocity.</div>
    </button>

  </div>
</div>

<!-- ═════════════════════════════════════════════
     COMMUNITY PARTICIPATION
     ═════════════════════════════════════════════ -->
<div class="mem-section">
  <div class="mem-section-title"><span class="mem-icon">🌍</span> Community Participation</div>
  <div class="mem-grid">

    <button class="mem-feature-card" onclick="comingSoon('Memorial Contribution System')" aria-label="Memorial Contributions — Coming Soon">
      <span class="mem-overlay-badge">Coming Soon</span>
      <span class="mem-feature-card-icon">🖊️</span>
      <div class="mem-feature-card-title">Memorial Contributions</div>
      <div class="mem-feature-card-desc">Submit names, stories, images, or documents to expand the memorial's permanent record.</div>
    </button>

    <button class="mem-feature-card" onclick="comingSoon('Community Remembrance Events')" aria-label="Community Events — Coming Soon">
      <span class="mem-overlay-badge">Coming Soon</span>
      <span class="mem-feature-card-icon">📅</span>
      <div class="mem-feature-card-title">Remembrance Events</div>
      <div class="mem-feature-card-desc">A calendar of diaspora memorial events, vigils, and online commemorations around the world.</div>
    </button>

    <button class="mem-feature-card" onclick="comingSoon('Educational Partnerships')" aria-label="Educational Partnerships — Coming Soon">
      <span class="mem-overlay-badge">Coming Soon</span>
      <span class="mem-feature-card-icon">🏫</span>
      <div class="mem-feature-card-title">Educational Partnerships</div>
      <div class="mem-feature-card-desc">Collaborations with schools, universities, and research institutions to integrate Tigray into curricula.</div>
    </button>

    <button class="mem-feature-card" onclick="comingSoon('International Solidarity')" aria-label="International Solidarity — Coming Soon">
      <span class="mem-overlay-badge">Coming Soon</span>
      <span class="mem-feature-card-icon">🌐</span>
      <div class="mem-feature-card-title">International Solidarity</div>
      <div class="mem-feature-card-desc">Connecting advocates, journalists, and organisations working on accountability and justice for Tigray.</div>
    </button>

  </div>
</div>

<!-- ═════════════════════════════════════════════
     LINKS
     ═════════════════════════════════════════════ -->
<div style="display:flex;flex-wrap:wrap;gap:0.75rem;margin:2rem 0 1rem;">
  <a href="../../war/path-to-war/" class="mem-btn">← The Path to War</a>
  <a href="../../war/human-rights-atrocities/" class="mem-btn">Human Rights Documentation</a>
  <a href="../../war/timeline/" class="mem-btn">War Timeline</a>
  <a href="../../06-war-memorial/" class="mem-btn mem-btn-gold">War Memorial Overview</a>
</div>

---

!!! note "This memorial is being developed with community input and sensitivity."
    The full memorial will be built in consultation with survivors, diaspora communities, and human rights organisations. For current documentation, see the main [War & Memorial section](../../06-war-memorial/).

<div class="mem-contribute">
  <em>This page is a living memorial. <a href="../../contribute/">Help expand it</a> by contributing names, stories, photographs, or verified documentation to the memorial record. Every contribution matters.</em>
</div>

<script>
/* ═══════════════════════════════════════════════
   MEMORIAL PAGE — Vanilla JS interactions
   ═══════════════════════════════════════════════ */

/* ── Candle session counter (not persistent — session only) ── */
var candleCount = 0;
var candleLit = false;

function lightCandle() {
  var wrap = document.getElementById('candleWrap');
  var msg  = document.getElementById('candleMsg');
  var num  = document.getElementById('candleNum');

  if (!candleLit) {
    wrap.classList.add('lit');
    candleLit = true;
  }

  candleCount++;
  num.textContent = candleCount;

  /* Show message on first light */
  if (candleCount === 1) {
    msg.classList.add('visible');
  }
}

/* ── Peace Pledge ── */
function submitPledge(e) {
  e.preventDefault();

  var name = document.getElementById('pledgeName').value.trim();
  if (!name) {
    document.getElementById('pledgeName').focus();
    return;
  }

  document.getElementById('pledgeForm').style.display   = 'none';
  document.getElementById('pledgeThanks').classList.add('visible');

  /* Smooth scroll to thanks message */
  document.getElementById('pledgeThanks').scrollIntoView({ behavior: 'smooth', block: 'center' });
}

/* ── Generic "Coming Soon" notice ── */
function comingSoon(feature) {
  /* Non-blocking notification — replace with a modal if desired */
  var msg = feature
    ? '\u201C' + feature + '\u201D is in development.'
    : 'This feature is in development.';
  msg += '\n\nSign up for updates via the newsletter at the bottom of the homepage, or contribute to its development at tigray.ternafit.org/contribute/';

  /* Use a brief inline toast if the browser supports it cleanly */
  showToast(msg);
}

/* ── Lightweight toast (no external library) ── */
function showToast(message) {
  var existing = document.getElementById('mem-toast');
  if (existing) existing.remove();

  var toast = document.createElement('div');
  toast.id = 'mem-toast';
  toast.setAttribute('role', 'status');
  toast.setAttribute('aria-live', 'polite');
  toast.style.cssText = [
    'position:fixed',
    'bottom:1.5rem',
    'left:50%',
    'transform:translateX(-50%)',
    'background:#1b2d42',
    'color:#e4e8f0',
    'border:1px solid rgba(228,232,240,0.15)',
    'border-radius:10px',
    'padding:0.9rem 1.4rem',
    'font-size:0.85rem',
    'max-width:min(440px, 90vw)',
    'line-height:1.55',
    'box-shadow:0 8px 32px rgba(0,0,0,0.35)',
    'z-index:9999',
    'white-space:pre-line',
    'text-align:left',
    'opacity:0',
    'transition:opacity 0.25s'
  ].join(';');

  toast.innerHTML =
    '<strong style="display:block;color:#e8b94f;margin-bottom:0.3rem;font-size:0.75rem;text-transform:uppercase;letter-spacing:0.06em;">Coming Soon</strong>' +
    escapeHtml(message) +
    '<button onclick="this.parentNode.remove()" aria-label="Dismiss" style="display:block;margin-top:0.7rem;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:#e4e8f0;border-radius:6px;padding:0.3rem 0.9rem;font-size:0.78rem;cursor:pointer;">Dismiss</button>';

  document.body.appendChild(toast);
  requestAnimationFrame(function() { toast.style.opacity = '1'; });

  /* Auto-dismiss after 6 s */
  setTimeout(function() {
    if (toast.parentNode) {
      toast.style.opacity = '0';
      setTimeout(function() { if (toast.parentNode) toast.remove(); }, 280);
    }
  }, 6000);
}

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/* ── Keyboard support: allow Enter/Space on candle wrap ── */
document.getElementById('candleWrap').addEventListener('keydown', function(e) {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    lightCandle();
  }
});
</script>
