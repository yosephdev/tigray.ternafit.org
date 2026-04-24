/**
 * Tigray Knowledge Base — Homepage Script
 * Ternafit NGO  |  tigray.ternafit.org
 * Lightweight vanilla JS — no dependencies
 */

(function () {
  'use strict';

  /* ── 1. STICKY NAV SCROLL EFFECT ──────────────────────── */
  const nav = document.querySelector('.nav');
  if (nav) {
    const onScroll = () => {
      nav.classList.toggle('scrolled', window.scrollY > 40);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ── 2. MOBILE MENU TOGGLE ─────────────────────────────── */
  const toggle = document.querySelector('.nav__toggle');
  const menu   = document.querySelector('.nav__menu');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const isOpen = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen);
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!nav.contains(e.target)) {
        menu.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        menu.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    });

    // Close when a nav link is clicked (on mobile)
    menu.querySelectorAll('.nav__link').forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ── 3. ANIMATED STAT COUNTERS ─────────────────────────── */
  function animateCounter(el) {
    const rawTarget = el.dataset.target;
    if (!rawTarget) return;

    const suffix = rawTarget.replace(/[\d,.]/g, '').trim(); // e.g. "K+", "%"
    const target = parseFloat(rawTarget.replace(/[^\d.]/g, ''));
    const isDecimal = rawTarget.includes('.');
    const duration  = 1800; // ms
    const start     = performance.now();

    const step = (now) => {
      const elapsed  = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased    = 1 - Math.pow(1 - progress, 3);
      const current  = target * eased;
      const display  = isDecimal
        ? current.toFixed(1)
        : Math.floor(current).toLocaleString();
      el.textContent = display + suffix;
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }

  /* ── 4. INTERSECTION OBSERVER (fade-in + counters) ─────── */
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  if (!prefersReducedMotion) {
    // Fade-in for general elements
    const fadeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            fadeObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.fade-in').forEach(el => fadeObserver.observe(el));
  } else {
    // Show everything immediately if motion is reduced
    document.querySelectorAll('.fade-in').forEach(el => el.classList.add('visible'));
  }

  // Counter observer (fires once element enters viewport)
  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );
  document.querySelectorAll('.stats__number[data-target]').forEach(el => {
    counterObserver.observe(el);
  });

  /* ── 5. STATS TABS ──────────────────────────────────────── */
  const tabButtons = document.querySelectorAll('.key-stats__tab');
  const tabPanels  = document.querySelectorAll('.key-stats__panel');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;
      tabButtons.forEach(b => {
        b.classList.toggle('active', b === btn);
        b.setAttribute('aria-selected', b === btn ? 'true' : 'false');
      });
      tabPanels.forEach(p => {
        const isActive = p.id === target;
        p.classList.toggle('active', isActive);
        p.hidden = !isActive;
      });
    });

    // Keyboard nav (arrow keys)
    btn.addEventListener('keydown', (e) => {
      const tabs  = [...tabButtons];
      const index = tabs.indexOf(e.currentTarget);
      let next;
      if (e.key === 'ArrowRight') next = tabs[(index + 1) % tabs.length];
      if (e.key === 'ArrowLeft')  next = tabs[(index - 1 + tabs.length) % tabs.length];
      if (next) { next.focus(); next.click(); }
    });
  });

  /* ── 6. NEWSLETTER FORM ─────────────────────────────────── */
  const nlForm = document.querySelector('.newsletter__form');
  if (nlForm) {
    nlForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = nlForm.querySelector('.newsletter__input');
      const btn   = nlForm.querySelector('.newsletter__submit');
      const email = input ? input.value.trim() : '';
      if (!email) return;

      // Simple mailto fallback — replace with real API endpoint
      const mailtoHref = `mailto:contact@ternafit.org?subject=Newsletter+Subscription&body=Please+subscribe+me:+${encodeURIComponent(email)}`;
      const note = nlForm.nextElementSibling;

      btn.textContent = 'Subscribed! ✓';
      btn.disabled = true;
      if (input) { input.disabled = true; }
      if (note) { note.textContent = 'Thank you! We\'ll be in touch soon.'; }

      // Optionally open mailto
      // window.location.href = mailtoHref;
    });
  }

  /* ── 7. SCROLL-TO-TOP BUTTON ────────────────────────────── */
  const scrollTopBtn = document.getElementById('scroll-top');
  if (scrollTopBtn) {
    const toggleScrollBtn = () => {
      scrollTopBtn.classList.toggle('visible', window.scrollY > 500);
    };
    window.addEventListener('scroll', toggleScrollBtn, { passive: true });

    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ── 8. ANCHOR SMOOTH SCROLL (hash links) ───────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const id = anchor.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        const navH = nav ? nav.offsetHeight : 0;
        const top  = target.getBoundingClientRect().top + window.scrollY - navH - 16;
        window.scrollTo({ top, behavior: 'smooth' });
        target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
      }
    });
  });

  /* ── 9. COLOUR MODE TOGGLE ─────────────────────────────── */
  const themeToggleBtn = document.getElementById('theme-toggle');

  // On load: apply saved preference (dark is the default)
  const savedTheme = localStorage.getItem('tkb-theme');
  if (savedTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    if (themeToggleBtn) themeToggleBtn.setAttribute('aria-label', 'Switch to dark mode');
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const isLight = document.documentElement.getAttribute('data-theme') === 'light';
      if (isLight) {
        // Switch to dark
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('tkb-theme', 'dark');
        themeToggleBtn.setAttribute('aria-label', 'Switch to light mode');
      } else {
        // Switch to light
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('tkb-theme', 'light');
        themeToggleBtn.setAttribute('aria-label', 'Switch to dark mode');
      }
    });
  }

  /* ── 10. SEARCH REDIRECT ─────────────────────────────────── */
  const searchInput = document.getElementById('hero-search');
  if (searchInput) {
    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const q = searchInput.value.trim();
        if (q) {
          window.location.href = `https://tigray.ternafit.org/search/?q=${encodeURIComponent(q)}`;
        }
      }
    });
  }

})();
