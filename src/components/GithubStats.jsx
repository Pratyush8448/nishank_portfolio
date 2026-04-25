import { GitHubCalendar } from "react-github-calendar";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { FaGithub, FaStar, FaCodeBranch, FaFire } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";
import { useRef } from "react";

/* ─────────────────────────────────────────────
   3D TILT CARD WRAPPER
───────────────────────────────────────────── */
function TiltCard({ children, className = "" }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), { stiffness: 300, damping: 30 });

  function handleMouseMove(e) {
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top)  / rect.height - 0.5);
  }
  function handleMouseLeave() { x.set(0); y.set(0); }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   STAT PILL
───────────────────────────────────────────── */
function StatPill({ icon, label, value, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, y: 10 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.05, transition: { duration: 0.15 } }}
      className="stat-pill"
    >
      <span className="stat-pill__icon">{icon}</span>
      <div className="stat-pill__body">
        <span className="stat-pill__value">{value}</span>
        <span className="stat-pill__label">{label}</span>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
export default function GithubStats() {
  return (
    <section className="gh-root">

      {/* ── Background blobs (same as original + enhanced) ── */}
      <div className="gh-blobs" aria-hidden="true">
        <div className="gh-blob gh-blob--top" />
        <div className="gh-blob gh-blob--bottom" />
        <div className="gh-blob gh-blob--mid" />
        {/* Subtle grid lines */}
        <div className="gh-grid" />
      </div>

      {/* ── Heading ── */}
      <motion.div
        initial={{ opacity: 0, y: -28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="gh-heading"
      >
        <div className="gh-eyebrow">
          <FaGithub className="gh-eyebrow__icon" />
          <span>Activity</span>
        </div>
        <h2 className="gh-title">GitHub <span className="gh-title--accent">Stats</span></h2>
        <div className="gh-title-bar" />
      </motion.div>


      {/* ── Calendar card ── */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="gh-card-wrap"
        style={{ perspective: 1000 }}
      >
        <TiltCard className="gh-card">

          {/* Glow ring */}
          <div className="gh-card__glow" aria-hidden="true" />

          {/* Card top bar */}
          <div className="gh-card__topbar">
            <div className="gh-card__dots">
              <span className="dot dot--red" />
              <span className="dot dot--amber" />
              <span className="dot dot--green" />
            </div>
            <span className="gh-card__tab">
              <FaGithub className="gh-card__tab-icon" />
              pratyush8448
            </span>
            <a
              href="https://github.com/Pratyush8448"
              target="_blank"
              rel="noopener noreferrer"
              className="gh-card__ext"
              aria-label="Open GitHub profile"
            >
              <HiOutlineExternalLink />
            </a>
          </div>

          {/* Calendar */}
          <div className="gh-calendar-wrap">
            <GitHubCalendar
              username="Pratyush8448"
              blockSize={14}
              blockMargin={4}
              fontSize={12}
              theme={{
                light: ["#ede9fe", "#c4b5fd", "#a78bfa", "#7c3aed", "#4c1d95"],
                dark:  ["#1e1333", "#3b1f6e", "#5b21b6", "#7c3aed", "#a78bfa"],
              }}
            />
          </div>

          {/* Legend */}
          <div className="gh-legend">
            <span className="gh-legend__label">Less</span>
            {["#ede9fe","#c4b5fd","#a78bfa","#7c3aed","#4c1d95"].map((c, i) => (
              <span key={i} style={{ background: c }} className="gh-legend__swatch gh-legend__swatch--light" />
            ))}
            {["#1e1333","#3b1f6e","#5b21b6","#7c3aed","#a78bfa"].map((c, i) => (
              <span key={i} style={{ background: c }} className="gh-legend__swatch gh-legend__swatch--dark" />
            ))}
            <span className="gh-legend__label">More</span>
          </div>

        </TiltCard>
      </motion.div>

      {/* ── CTA button ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.25, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="gh-cta"
      >
        <a
          href="https://github.com/Pratyush8448"
          target="_blank"
          rel="noopener noreferrer"
          className="gh-cta__btn"
        >
          <FaGithub className="gh-cta__btn-icon" />
          <span>View Profile</span>
          <HiOutlineExternalLink className="gh-cta__btn-ext" />
          <span className="gh-cta__btn-glow" aria-hidden="true" />
        </a>
      </motion.div>

      {/* ── Styles ── */}
      <style>{`
        /* ═══════════════════════════════
           TOKENS — matches your theme exactly
        ═══════════════════════════════ */
        .gh-root {
          --gh-bg-light:          #ffffff;
          --gh-bg-dark:           #0e0018;
          --gh-card-bg-light:     rgba(255,255,255,0.92);
          --gh-card-bg-dark:      rgba(255,255,255,0.03);
          --gh-card-border-light: rgba(139,92,246,0.25);
          --gh-card-border-dark:  rgba(139,92,246,0.15);
          --gh-glow-light:        rgba(139,92,246,0.18);
          --gh-glow-dark:         rgba(139,92,246,0.12);
          --gh-text-light:        #1a1033;
          --gh-text-dark:         #ffffff;
          --gh-muted-light:       rgba(109,40,217,0.5);
          --gh-muted-dark:        rgba(167,139,250,0.55);
          --gh-pill-bg-light:     rgba(139,92,246,0.07);
          --gh-pill-bg-dark:      rgba(139,92,246,0.10);
          --gh-pill-border-light: rgba(139,92,246,0.22);
          --gh-pill-border-dark:  rgba(139,92,246,0.20);
          --gh-accent:            #7c3aed;
          --gh-accent2:           #a78bfa;
          --gh-pink:              #ec4899;

          position: relative;
          padding: 96px 24px 100px;
          text-align: center;
          overflow: hidden;
          background: var(--gh-bg-light);
          transition: background 0.3s;
        }
        :is(.dark) .gh-root { background: var(--gh-bg-dark); }

        /* ═══════════════════════════════
           BACKGROUND
        ═══════════════════════════════ */
        .gh-blobs {
          position: absolute; inset: 0;
          pointer-events: none; overflow: hidden;
        }
        .gh-blob {
          position: absolute; border-radius: 50%;
          filter: blur(72px);
        }
        .gh-blob--top {
          width: 640px; height: 320px;
          left: 50%; top: -120px; transform: translateX(-50%);
          background: rgba(139,92,246,0.12);
        }
        :is(.dark) .gh-blob--top { background: rgba(109,40,217,0.08); }

        .gh-blob--bottom {
          width: 420px; height: 220px;
          left: 10%; bottom: 0;
          background: rgba(99,102,241,0.08);
        }
        :is(.dark) .gh-blob--bottom { background: rgba(99,102,241,0.07); }

        .gh-blob--mid {
          width: 300px; height: 200px;
          right: 5%; top: 30%;
          background: rgba(236,72,153,0.06);
          filter: blur(60px);
        }

        /* subtle dot-grid */
        .gh-grid {
          position: absolute; inset: 0;
          background-image: radial-gradient(circle, rgba(139,92,246,0.12) 1px, transparent 1px);
          background-size: 28px 28px;
          opacity: 0.45;
          mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%);
          -webkit-mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%);
        }
        :is(.dark) .gh-grid { opacity: 0.2; }

        /* ═══════════════════════════════
           HEADING
        ═══════════════════════════════ */
        .gh-heading {
          position: relative; z-index: 2;
          margin-bottom: 40px;
        }
        .gh-eyebrow {
          display: inline-flex; align-items: center; gap: 7px;
          font-size: 11px; font-weight: 700; letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--gh-accent);
          background: rgba(139,92,246,0.08);
          border: 1px solid rgba(139,92,246,0.22);
          padding: 5px 14px; border-radius: 99px;
          margin-bottom: 16px;
        }
        :is(.dark) .gh-eyebrow { color: var(--gh-accent2); }
        .gh-eyebrow__icon { font-size: 12px; }

        .gh-title {
          font-size: clamp(2.4rem, 6vw, 4rem);
          font-weight: 900; letter-spacing: -0.04em; line-height: 1.05;
          color: var(--gh-text-light);
          margin-bottom: 14px;
        }
        :is(.dark) .gh-title { color: var(--gh-text-dark); }
        .gh-title--accent {
          background: linear-gradient(135deg, #7c3aed 0%, #a855f7 50%, #6366f1 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        :is(.dark) .gh-title--accent {
          background: linear-gradient(135deg, #c084fc 0%, #a78bfa 50%, #818cf8 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .gh-title-bar {
          width: 52px; height: 3px; border-radius: 99px;
          background: linear-gradient(90deg, #7c3aed, #ec4899);
          margin: 0 auto 12px;
          box-shadow: 0 0 10px rgba(124,58,237,0.45);
        }
        .gh-subtitle {
          font-size: 13px; letter-spacing: 0.04em;
          color: var(--gh-muted-light);
          font-family: 'Courier New', monospace;
        }
        :is(.dark) .gh-subtitle { color: var(--gh-muted-dark); }

        /* ═══════════════════════════════
           STAT PILLS
        ═══════════════════════════════ */
        .gh-pills {
          position: relative; z-index: 2;
          display: flex; flex-wrap: wrap;
          justify-content: center; gap: 12px;
          margin-bottom: 36px;
        }
        .stat-pill {
          display: flex; align-items: center; gap: 10px;
          padding: 10px 20px;
          border-radius: 99px;
          background: var(--gh-pill-bg-light);
          border: 1px solid var(--gh-pill-border-light);
          backdrop-filter: blur(12px);
          cursor: default;
          transition: border-color 0.25s, box-shadow 0.25s, background 0.25s;
        }
        :is(.dark) .stat-pill {
          background: var(--gh-pill-bg-dark);
          border-color: var(--gh-pill-border-dark);
        }
        .stat-pill:hover {
          border-color: rgba(139,92,246,0.55);
          box-shadow: 0 0 18px rgba(139,92,246,0.18);
          background: rgba(139,92,246,0.10);
        }
        .stat-pill__icon {
          font-size: 14px; color: var(--gh-accent);
          display: flex; align-items: center;
        }
        :is(.dark) .stat-pill__icon { color: var(--gh-accent2); }
        .stat-pill__body {
          display: flex; flex-direction: column; align-items: flex-start; gap: 0;
        }
        .stat-pill__value {
          font-size: 15px; font-weight: 800; letter-spacing: -0.02em;
          color: var(--gh-text-light); line-height: 1.1;
        }
        :is(.dark) .stat-pill__value { color: var(--gh-text-dark); }
        .stat-pill__label {
          font-size: 10px; font-weight: 600; letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--gh-muted-light);
        }
        :is(.dark) .stat-pill__label { color: var(--gh-muted-dark); }

        /* ═══════════════════════════════
           CARD
        ═══════════════════════════════ */
        .gh-card-wrap {
          position: relative; z-index: 2;
          max-width: 900px; margin: 0 auto;
        }
        .gh-card {
          position: relative;
          border-radius: 24px;
          background: var(--gh-card-bg-light);
          border: 1px solid var(--gh-card-border-light);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          padding: 20px 24px 20px;
          overflow: hidden;
          box-shadow:
            0 4px 24px rgba(139,92,246,0.08),
            0 1px 0 rgba(255,255,255,0.6) inset;
          transition: border-color 0.3s, box-shadow 0.3s;
        }
        :is(.dark) .gh-card {
          background: var(--gh-card-bg-dark);
          border-color: var(--gh-card-border-dark);
          box-shadow:
            0 0 0 1px rgba(139,92,246,0.10),
            0 24px 64px rgba(0,0,0,0.4);
        }
        .gh-card:hover {
          border-color: rgba(139,92,246,0.4);
          box-shadow:
            0 0 0 1px rgba(139,92,246,0.22),
            0 24px 56px -8px rgba(139,92,246,0.15);
        }
        :is(.dark) .gh-card:hover {
          border-color: rgba(139,92,246,0.28);
          box-shadow:
            0 0 0 1px rgba(139,92,246,0.18),
            0 32px 80px rgba(0,0,0,0.5),
            0 0 40px -10px rgba(139,92,246,0.2);
        }

        /* glow ring */
        .gh-card__glow {
          position: absolute; inset: -1px; border-radius: 24px;
          background: linear-gradient(135deg, rgba(139,92,246,0.25) 0%, rgba(99,102,241,0.15) 50%, transparent 100%);
          opacity: 0; pointer-events: none;
          transition: opacity 0.4s;
          filter: blur(1px);
        }
        :is(.dark) .gh-card__glow {
          background: linear-gradient(135deg, rgba(139,92,246,0.15) 0%, rgba(99,102,241,0.08) 50%, transparent 100%);
        }
        .gh-card:hover .gh-card__glow { opacity: 1; }

        /* top bar */
        .gh-card__topbar {
          display: flex; align-items: center; gap: 10px;
          margin-bottom: 20px;
        }
        .gh-card__dots { display: flex; gap: 6px; align-items: center; }
        .dot {
          width: 11px; height: 11px; border-radius: 50%;
          transition: transform 0.2s;
        }
        .gh-card:hover .dot { transform: scale(1.15); }
        .dot--red   { background: rgba(248,113,113,0.75); }
        .dot--amber { background: rgba(251,191,36,0.75); }
        .dot--green { background: rgba(52,211,153,0.75); }

        .gh-card__tab {
          margin-left: auto;
          display: flex; align-items: center; gap: 6px;
          font-size: 11px; font-weight: 600; letter-spacing: 0.06em;
          font-family: 'Courier New', monospace;
          color: rgba(109,40,217,0.55);
          background: rgba(139,92,246,0.06);
          border: 1px solid rgba(139,92,246,0.15);
          padding: 4px 12px; border-radius: 99px;
          user-select: none;
        }
        :is(.dark) .gh-card__tab {
          color: rgba(167,139,250,0.6);
          background: rgba(139,92,246,0.08);
          border-color: rgba(139,92,246,0.18);
        }
        .gh-card__tab-icon { font-size: 11px; }

        .gh-card__ext {
          display: flex; align-items: center;
          font-size: 14px; color: rgba(109,40,217,0.4);
          transition: color 0.2s, transform 0.2s;
          text-decoration: none;
        }
        :is(.dark) .gh-card__ext { color: rgba(167,139,250,0.4); }
        .gh-card__ext:hover { color: var(--gh-accent); transform: scale(1.15); }
        :is(.dark) .gh-card__ext:hover { color: var(--gh-accent2); }

        /* ═══════════════════════════════
           CALENDAR — scrollable on mobile
        ═══════════════════════════════ */
        .gh-calendar-wrap {
          overflow-x: auto;
          overflow-y: hidden;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: thin;
          scrollbar-color: rgba(139,92,246,0.25) transparent;
          padding-bottom: 4px;
        }
        .gh-calendar-wrap::-webkit-scrollbar { height: 4px; }
        .gh-calendar-wrap::-webkit-scrollbar-track { background: transparent; }
        .gh-calendar-wrap::-webkit-scrollbar-thumb {
          background: rgba(139,92,246,0.25); border-radius: 99px;
        }
        /* Give calendar itself a min-width so it doesn't collapse on tiny screens */
        .gh-calendar-wrap > div { min-width: 640px; }

        /* ═══════════════════════════════
           LEGEND
        ═══════════════════════════════ */
        .gh-legend {
          display: flex; align-items: center; justify-content: flex-end;
          gap: 5px; margin-top: 14px;
        }
        .gh-legend__label {
          font-size: 10px; font-weight: 600; letter-spacing: 0.06em;
          text-transform: uppercase;
          color: rgba(109,40,217,0.45);
        }
        :is(.dark) .gh-legend__label { color: rgba(167,139,250,0.45); }
        .gh-legend__swatch {
          width: 12px; height: 12px; border-radius: 3px;
          display: block;
          transition: transform 0.15s;
        }
        .gh-legend__swatch:hover { transform: scale(1.3); }
        .gh-legend__swatch--light { display: block; }
        .gh-legend__swatch--dark  { display: none; }
        :is(.dark) .gh-legend__swatch--light { display: none; }
        :is(.dark) .gh-legend__swatch--dark  { display: block; }

        /* ═══════════════════════════════
           CTA BUTTON
        ═══════════════════════════════ */
        .gh-cta {
          position: relative; z-index: 2;
          margin-top: 40px; display: flex; justify-content: center;
        }
        .gh-cta__btn {
          position: relative;
          display: inline-flex; align-items: center; gap: 9px;
          padding: 13px 28px;
          border-radius: 99px;
          background: rgba(255,255,255,0.85);
          border: 1px solid rgba(139,92,246,0.28);
          color: var(--gh-accent);
          font-size: 13px; font-weight: 700; letter-spacing: 0.04em;
          text-decoration: none;
          backdrop-filter: blur(16px);
          transition: border-color 0.25s, box-shadow 0.25s, transform 0.2s, background 0.25s;
          overflow: hidden;
        }
        :is(.dark) .gh-cta__btn {
          background: rgba(26,0,48,0.7);
          border-color: rgba(139,92,246,0.28);
          color: var(--gh-accent2);
        }
        .gh-cta__btn:hover {
          border-color: rgba(139,92,246,0.65);
          box-shadow: 0 0 28px rgba(139,92,246,0.25), 0 8px 24px rgba(139,92,246,0.12);
          transform: translateY(-2px) scale(1.02);
        }
        .gh-cta__btn:active { transform: translateY(0) scale(0.98); }

        .gh-cta__btn-icon  { font-size: 16px; }
        .gh-cta__btn-ext   { font-size: 13px; opacity: 0.6; }

        .gh-cta__btn-glow {
          position: absolute; inset: 0; border-radius: 99px;
          background: linear-gradient(135deg, rgba(139,92,246,0.2), rgba(236,72,153,0.15));
          opacity: 0; pointer-events: none;
          transition: opacity 0.3s;
        }
        .gh-cta__btn:hover .gh-cta__btn-glow { opacity: 1; }

        /* ═══════════════════════════════
           RESPONSIVE
        ═══════════════════════════════ */
        @media (max-width: 768px) {
          .gh-root { padding: 72px 16px 80px; }
          .gh-card { padding: 16px 16px 18px; border-radius: 20px; }
          .gh-title { font-size: 2.2rem; }
        }
        @media (max-width: 480px) {
          .gh-root { padding: 56px 12px 64px; }
          .gh-title { font-size: 1.9rem; }
          .stat-pill { padding: 8px 14px; gap: 8px; }
          .stat-pill__value { font-size: 13px; }
          .gh-card { padding: 14px 12px 16px; border-radius: 18px; }
          .gh-cta__btn { padding: 11px 22px; font-size: 12px; }
        }
        @media (min-width: 1200px) {
          .gh-root { padding: 112px 24px 120px; }
          .gh-card { padding: 28px 32px 24px; }
        }
      `}</style>
    </section>
  );
}
