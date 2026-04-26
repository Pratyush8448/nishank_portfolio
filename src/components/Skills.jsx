import { motion } from 'framer-motion'
import {
  FaPython, FaJava, FaCuttlefish,
  FaHtml5, FaCss3Alt, FaReact, FaJs,
  FaGithub, FaDocker, FaDatabase, FaEye,
  FaChartBar, FaFileExcel, FaLink, FaCogs,FaChartLine ,
} from 'react-icons/fa'
import {
  SiFastapi, SiOpenai, SiNumpy, SiPandas,
  SiJupyter, SiScikitlearn, SiPostman, SiAutocad,SiPlotly ,
} from 'react-icons/si'
import { TbRobotFace, TbBrain, TbVector } from 'react-icons/tb'
import { MdOutlineWeb, MdDataObject } from 'react-icons/md'
import { BiLineChart } from 'react-icons/bi'

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const programmingLanguages = [
  { name: 'Python',        icon: <FaPython />,     color: '#4dabf7' },
  { name: 'C Programming', icon: <FaCuttlefish />, color: '#a9e34b' },
  { name: 'C++',           icon: <FaCuttlefish />, color: '#74c0fc' },
  { name: 'Java',          icon: <FaJava />,       color: '#ff8787' },
]

const webTech = [
  { name: 'HTML5',      icon: <FaHtml5 />,  color: '#ff9a3c' },
  { name: 'CSS3',       icon: <FaCss3Alt />,color: '#4dabf7' },
  { name: 'JavaScript', icon: <FaJs />,     color: '#ffe066' },
  { name: 'React',      icon: <FaReact />,  color: '#61dafb' },
]

const ROW_1 = [
  { name: 'FastAPI',       icon: <SiFastapi />,     color: '#009688' },
  { name: 'RAG Systems',   icon: <TbRobotFace />,    color: '#fb923c' },
  { name: 'Postman',       icon: <SiPostman />,      color: '#ff6d00' },
  { name: 'Docker',        icon: <FaDocker />,       color: '#0db7ed' },
  { name: 'GitHub',        icon: <FaGithub />,       color: '#c084fc' },
]

const ROW_2 = [
  { name: 'Pandas',          icon: <SiPandas />,       color: '#a78bfa' },
  { name: 'NumPy',           icon: <SiNumpy />,        color: '#4dabf7' },
  { name: 'Scikit-Learn',    icon: <SiScikitlearn />,  color: '#fb923c' },
  { name: 'Jupyter',         icon: <SiJupyter />,      color: '#f97316' },
  { name: 'MySQL',           icon: <FaDatabase />,     color: '#00758F' },
  { name: 'Statistics',      icon: <FaChartBar />,     color: '#4ade80' },
  { name: 'Machine Learning',icon: <TbBrain />,        color: '#f472b6' },
  { name: 'Matplotlib',       icon: <SiPlotly />,        color: '#3b82f6' },
  { name: 'Excel',           icon: <FaFileExcel />,    color: '#22c55e' },
  { name: 'Seaborn', icon: <FaChartLine />, color: '#4c72b0' }
]

const ROW_3 = [
  { name: 'Seaborn',        icon: <FaChartBar />,     color: '#818cf8' },
  { name: 'Matplotlib',     icon: <BiLineChart />,    color: '#60a5fa' },
  { name: 'Data Wrangling', icon: <MdDataObject />,   color: '#fb923c' },
  { name: 'NLP',            icon: <TbBrain />,        color: '#f0abfc' },
  { name: 'Embeddings',     icon: <TbVector />,       color: '#34d399' },
  { name: 'Prompt Eng.',    icon: <SiOpenai />,       color: '#10a37f' },
  { name: 'API Testing',    icon: <SiPostman />,      color: '#ff6d00' },
  { name: 'Software Dev',   icon: <FaCogs />,         color: '#94a3b8' },
  { name: 'Data Pipelines', icon: <MdDataObject />,   color: '#fbbf24' },
]

/* ─────────────────────────────────────────────
   MARQUEE ROW
───────────────────────────────────────────── */
function MarqueeRow({ items, direction = 'left', speed = 32, opacity = 0.55 }) {
  const doubled = [...items, ...items, ...items]
  const animClass = direction === 'left' ? 'marquee-left' : 'marquee-right'
  return (
    <div className="marquee-track" style={{ opacity }}>
      <div className={`marquee-inner ${animClass}`} style={{ animationDuration: `${speed}s` }}>
        {doubled.map((item, i) => <Chip key={i} item={item} />)}
      </div>
    </div>
  )
}

function Chip({ item }) {
  const acc = item.color ?? '#a855f7'
  return (
    <span className="chip" style={{ '--acc': acc, borderColor: `${acc}38`, background: `${acc}0d` }}>
      <span className="chip-icon" style={{ color: acc, filter: `drop-shadow(0 0 6px ${acc}88)` }}>
        {item.icon}
      </span>
      <span className="chip-name">{item.name}</span>
    </span>
  )
}

/* ─────────────────────────────────────────────
   SKILL CARD
───────────────────────────────────────────── */
const cardV = {
  hidden:  { opacity: 0, y: 28, scale: 0.9 },
  visible: { opacity: 1, y: 0,  scale: 1, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
}

function SkillCard({ item }) {
  const acc = item.color ?? '#c084fc'
  return (
    <motion.div
      variants={cardV}
      whileHover={{ scale: 1.05, y: -6, transition: { duration: 0.2 } }}
      className="skill-card"
      style={{ '--acc': acc }}
    >
      <div className="sk-glow" />
      <div className="sk-topbar" style={{ background: `linear-gradient(90deg, transparent, ${acc}88, transparent)` }} />
      <div className="sk-icon" style={{ color: acc, filter: `drop-shadow(0 0 16px ${acc}bb)` }}>
        {item.icon}
      </div>
      <p className="sk-name">{item.name}</p>
      <span className="sk-corner sk-tl" />
      <span className="sk-corner sk-br" />
      <div className="sk-shimmer" style={{ background: `linear-gradient(90deg,transparent,${acc},transparent)` }} />
    </motion.div>
  )
}

/* ─────────────────────────────────────────────
   SECTION LABEL
───────────────────────────────────────────── */
function SectionLabel({ children, icon }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="sec-label"
    >
      <span className="sec-label-icon">{icon}</span>
      <span className="sec-label-text">{children}</span>
      <span className="sec-label-rule" />
    </motion.div>
  )
}

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
export default function Skills() {
  return (
    <section className="skills-root">

      {/* Ambient orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      {/* Marquee background */}
      <div className="marquee-bg" aria-hidden="true">
        <MarqueeRow items={ROW_1} direction="left"  speed={38} opacity={0.6} />
        <MarqueeRow items={ROW_2} direction="right" speed={44} opacity={0.5} />
        <MarqueeRow items={ROW_3} direction="left"  speed={34} opacity={0.6} />
        <MarqueeRow items={ROW_1} direction="right" speed={50} opacity={0.4} />
        <MarqueeRow items={ROW_2} direction="left"  speed={40} opacity={0.5} />
        <MarqueeRow items={ROW_3} direction="right" speed={36} opacity={0.45} />
      </div>

      {/* Center vignette */}
      <div className="vignette" />

      {/* CONTENT */}
      <div className="content-wrap">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="heading-block"
        >
          <h2 className="main-title">My Tech Stack</h2>
          <div className="title-bar" />
        
        </motion.div>

        {/* ── Web Dev ── */}
        <div className="section-block">
          <SectionLabel icon={<FaReact style={{ color: '#61dafb' }} />}>
            Web Development
          </SectionLabel>
          <motion.div
            className="card-grid"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-40px' }}
          >
            {webTech.map((item, i) => <SkillCard key={i} item={item} />)}
          </motion.div>
        </div>

        <div className="divider" />

        {/* ── Programming Languages ── */}
        <div className="section-block">
          <SectionLabel icon={<FaPython style={{ color: '#4dabf7' }} />}>
            Programming Languages
          </SectionLabel>
          <motion.div
            className="card-grid"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-40px' }}
          >
            {programmingLanguages.map((item, i) => <SkillCard key={i} item={item} />)}
          </motion.div>
        </div>

        <div className="divider" />

        {/* ── AI & Data Tools ── */}
        <div className="section-block">
          <SectionLabel icon={<TbBrain style={{ color: '#f472b6' }} />}>
            AI &amp; Data Science
          </SectionLabel>
          <motion.div
            className="card-grid card-grid--wide"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-40px' }}
          >
            {ROW_2.map((item, i) => <SkillCard key={i} item={item} />)}
          </motion.div>
        </div>

        <div className="divider" />

        {/* ── Tools & Infra ── */}
        <div className="section-block">
          <SectionLabel icon={<FaDocker style={{ color: '#0db7ed' }} />}>
            Tools
          </SectionLabel>
          <motion.div
            className="card-grid card-grid--wide"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-40px' }}
          >
            {ROW_1.map((item, i) => <SkillCard key={i} item={item} />)}
          </motion.div>
        </div>

      </div>

      <style>{`
        /* ═══════════════════════════════
           THEME TOKENS
        ═══════════════════════════════ */
        .skills-root {
          --sk-bg:                 #f5f0ff;
          --sk-vignette:           rgba(245,240,255,0.93);
          --sk-vignette-mid:       rgba(245,240,255,0.70);
          --sk-card-bg:            rgba(255,255,255,0.72);
          --sk-card-border:        rgba(139,92,246,0.20);
          --sk-card-hover-border:  rgba(139,92,246,0.55);
          --sk-name:               rgba(60,20,100,0.75);
          --sk-name-hover:         #7c3aed;
          --sk-chip-name:          rgba(80,30,130,0.85);
          --sk-eyebrow:            #7c3aed;
          --sk-hint:               rgba(109,40,217,0.35);
          --sk-label-color:        #7c3aed;
          --sk-label-bg:           rgba(139,92,246,0.08);
          --sk-label-border:       rgba(139,92,246,0.25);
          --sk-orb1-color:         rgba(139,92,246,0.15);
          --sk-orb2-color:         rgba(236,72,153,0.10);
          --sk-orb3-color:         rgba(16,163,127,0.08);
        }
        :is(.dark) .skills-root {
          --sk-bg:                 #050009;
          --sk-vignette:           rgba(5,0,9,0.92);
          --sk-vignette-mid:       rgba(5,0,9,0.72);
          --sk-card-bg:            rgba(15,4,30,0.65);
          --sk-card-border:        rgba(168,85,247,0.18);
          --sk-card-hover-border:  rgba(168,85,247,0.50);
          --sk-name:               rgba(255,255,255,0.65);
          --sk-name-hover:         rgba(240,171,252,0.95);
          --sk-chip-name:          rgba(220,200,255,0.85);
          --sk-eyebrow:            #a78bfa;
          --sk-hint:               rgba(167,139,250,0.38);
          --sk-label-color:        #c084fc;
          --sk-label-bg:           rgba(192,132,252,0.08);
          --sk-label-border:       rgba(192,132,252,0.25);
          --sk-orb1-color:         rgba(139,92,246,0.18);
          --sk-orb2-color:         rgba(236,72,153,0.12);
          --sk-orb3-color:         rgba(16,163,127,0.10);
        }

        /* ═══════════════════════════════
           ROOT
        ═══════════════════════════════ */
        .skills-root {
          position: relative;
          min-height: 100vh;
          background: var(--sk-bg);
          overflow: hidden;
          padding: 0;
          transition: background 0.3s;
        }

        /* ═══════════════════════════════
           AMBIENT ORBS
        ═══════════════════════════════ */
        .orb {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          filter: blur(80px);
          z-index: 0;
        }
        .orb-1 {
          width: 600px; height: 600px;
          background: radial-gradient(circle, var(--sk-orb1-color) 0%, transparent 70%);
          top: -200px; left: -150px;
        }
        .orb-2 {
          width: 500px; height: 500px;
          background: radial-gradient(circle, var(--sk-orb2-color) 0%, transparent 70%);
          bottom: -100px; right: -100px;
        }
        .orb-3 {
          width: 400px; height: 400px;
          background: radial-gradient(circle, var(--sk-orb3-color) 0%, transparent 70%);
          top: 40%; left: 50%; transform: translate(-50%,-50%);
        }

        /* ═══════════════════════════════
           MARQUEE BACKGROUND
        ═══════════════════════════════ */
        .marquee-bg {
          position: absolute;
          inset: 0;
          z-index: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          padding: 16px 0;
          pointer-events: none;
          overflow: hidden;
        }
        .marquee-track {
          width: 100%;
          overflow: hidden;
          mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
        }
        .marquee-inner {
          display: flex;
          gap: 12px;
          width: max-content;
          will-change: transform;
        }
        .marquee-left  { animation: scrollLeft  linear infinite; }
        .marquee-right { animation: scrollRight linear infinite; }
        @keyframes scrollLeft  { from { transform: translateX(0); }        to { transform: translateX(-33.333%); } }
        @keyframes scrollRight { from { transform: translateX(-33.333%); } to { transform: translateX(0); } }

        /* Chip */
        .chip {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: 999px;
          border: 1px solid;
          white-space: nowrap;
          flex-shrink: 0;
        }
        .chip-icon {
          font-size: 1rem;
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }
        .chip-name {
          font-family: 'Courier New', monospace;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.09em;
          text-transform: uppercase;
          color: var(--sk-chip-name);
        }

        /* Vignette */
        .vignette {
          position: absolute;
          inset: 0;
          z-index: 2;
          pointer-events: none;
          background: radial-gradient(
            ellipse 68% 62% at 50% 50%,
            var(--sk-vignette)     0%,
            var(--sk-vignette-mid) 35%,
            rgba(0,0,0,0)          65%,
            transparent            100%
          );
          transition: background 0.3s;
        }

        /* On small screens, pull vignette back so cards aren't hidden */
        @media (max-width: 640px) {
          .vignette {
            background: radial-gradient(
              ellipse 100% 55% at 50% 50%,
              var(--sk-vignette)     0%,
              var(--sk-vignette-mid) 30%,
              rgba(0,0,0,0)          60%,
              transparent            100%
            );
          }
          .marquee-bg { opacity: 0.4; }
        }

        /* ═══════════════════════════════
           CONTENT WRAPPER
        ═══════════════════════════════ */
        .content-wrap {
          position: relative;
          z-index: 3;
          max-width: 960px;
          margin: 0 auto;
          padding: 80px 24px 100px;
        }

        /* ═══════════════════════════════
           HEADING
        ═══════════════════════════════ */
        .heading-block {
          text-align: center;
          margin-bottom: 64px;
        }
        .main-title {
          font-size: clamp(2.4rem, 6vw, 4.5rem);
          font-weight: 900;
          letter-spacing: -0.04em;
          line-height: 1.05;
          margin-bottom: 16px;
        }
        :is(.dark) .main-title {
          background: linear-gradient(135deg, #f0abfc 0%, #c084fc 30%, #818cf8 60%, #67e8f9 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        :not(.dark) .main-title {
          background: linear-gradient(135deg, #7c3aed 0%, #a855f7 40%, #6366f1 80%, #0ea5e9 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .title-bar {
          width: 60px; height: 3px;
          border-radius: 99px;
          background: linear-gradient(90deg, #a855f7, #ec4899);
          margin: 0 auto 14px;
          box-shadow: 0 0 12px rgba(168,85,247,0.5);
        }
        .scroll-hint {
          font-size: 11px;
          letter-spacing: 0.16em;
          color: var(--sk-hint);
          font-family: 'Courier New', monospace;
          transition: color 0.3s;
        }

        /* ═══════════════════════════════
           SECTION LABEL
        ═══════════════════════════════ */
        .section-block { margin-bottom: 16px; }
        .sec-label {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
        }
        .sec-label-icon {
          font-size: 1.1rem;
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }
        .sec-label-text {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--sk-label-color);
          background: var(--sk-label-bg);
          border: 1px solid var(--sk-label-border);
          padding: 5px 18px;
          border-radius: 99px;
          white-space: nowrap;
          transition: color 0.3s, background 0.3s, border-color 0.3s;
        }
        .sec-label-rule {
          flex: 1; height: 1px;
          background: linear-gradient(90deg, rgba(168,85,247,0.4), transparent);
        }

        /* ═══════════════════════════════
           CARD GRID — fluid, works at every breakpoint
        ═══════════════════════════════ */
        .card-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
          gap: 14px;
        }
        /* Wide sections (9 items) shrink min slightly so they don't wrap weird */
        .card-grid--wide {
          grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
        }

        /* ═══════════════════════════════
           SKILL CARD
        ═══════════════════════════════ */
        .skill-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 24px 14px 20px;
          border-radius: 20px;
          border: 1px solid var(--sk-card-border);
          background: var(--sk-card-bg);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          min-height: 130px;
          cursor: default;
          transition: border-color 0.28s, box-shadow 0.28s, background 0.3s;
          position: relative;
          overflow: hidden;
        }
        :not(.dark) .skill-card {
          box-shadow: 0 2px 16px rgba(139,92,246,0.07);
        }
        .skill-card:hover {
          border-color: var(--sk-card-hover-border);
          box-shadow:
            0 0 0 1px rgba(168,85,247,0.22),
            0 20px 48px -14px rgba(168,85,247,0.3),
            inset 0 0 28px rgba(168,85,247,0.05);
        }

        /* glow */
        .sk-glow {
          position: absolute; inset: 0; border-radius: inherit;
          background: radial-gradient(circle at 50% 85%, color-mix(in srgb, var(--acc) 20%, transparent) 0%, transparent 65%);
          opacity: 0; transition: opacity 0.4s; pointer-events: none;
        }
        .skill-card:hover .sk-glow { opacity: 1; }

        /* top bar */
        .sk-topbar {
          position: absolute; top: 0; left: 15%; right: 15%;
          height: 1.5px; border-radius: 0 0 99px 99px;
          opacity: 0; transition: opacity 0.3s;
        }
        .skill-card:hover .sk-topbar { opacity: 1; }

        /* icon */
        .sk-icon {
          font-size: 2.2rem;
          display: flex; align-items: center;
          z-index: 1; transition: transform 0.3s, filter 0.3s;
        }
        .skill-card:hover .sk-icon { transform: scale(1.15); }

        /* name */
        .sk-name {
          font-size: 11px; font-weight: 700; letter-spacing: 0.05em;
          color: var(--sk-name); text-align: center; z-index: 1;
          line-height: 1.35; transition: color 0.2s;
        }
        .skill-card:hover .sk-name { color: var(--sk-name-hover); }

        /* shimmer */
        .sk-shimmer {
          position: absolute; bottom: 0; left: 12%; right: 12%; height: 1.5px;
          border-radius: 99px; transform: scaleX(0); transition: transform 0.38s ease;
        }
        .skill-card:hover .sk-shimmer { transform: scaleX(1); }

        /* corners */
        .sk-corner {
          position: absolute; width: 10px; height: 10px;
          border-color: rgba(168,85,247,0); transition: border-color 0.3s;
        }
        .sk-tl { top:8px; left:8px; border-top:1.5px solid; border-left:1.5px solid; border-radius:3px 0 0 0; }
        .sk-br { bottom:8px; right:8px; border-bottom:1.5px solid; border-right:1.5px solid; border-radius:0 0 3px 0; }
        .skill-card:hover .sk-corner { border-color: var(--acc); opacity: 0.6; }

        /* ═══════════════════════════════
           DIVIDER
        ═══════════════════════════════ */
        .divider {
          width: 80px; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(168,85,247,0.5), transparent);
          margin: 44px auto;
        }

        /* ═══════════════════════════════
           RESPONSIVE BREAKPOINTS
        ═══════════════════════════════ */

        /* Large tablets */
        @media (max-width: 900px) {
          .content-wrap { max-width: 720px; }
          .card-grid { grid-template-columns: repeat(auto-fill, minmax(130px, 1fr)); gap: 12px; }
          .card-grid--wide { grid-template-columns: repeat(auto-fill, minmax(110px, 1fr)); }
        }

        /* Small tablets / large phones */
        @media (max-width: 640px) {
          .content-wrap { padding: 56px 16px 72px; }
          .heading-block { margin-bottom: 44px; }
          .main-title { font-size: 2.2rem; }

          .card-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
          }
          .card-grid--wide {
            grid-template-columns: repeat(3, 1fr);
            gap: 10px;
          }

          .skill-card {
            min-height: 110px;
            padding: 18px 10px 14px;
            gap: 10px;
            border-radius: 16px;
          }
          .sk-icon { font-size: 1.8rem; }
          .sk-name { font-size: 10px; }

          .divider { margin: 32px auto; }
          .sec-label-text { font-size: 0.68rem; padding: 5px 14px; }
          .chip { padding: 6px 12px; gap: 6px; }
          .chip-name { font-size: 0.65rem; }
          .chip-icon { font-size: 0.85rem; }
        }

        /* Small phones */
        @media (max-width: 400px) {
          .content-wrap { padding: 48px 12px 64px; }
          .main-title { font-size: 1.9rem; }
          .card-grid { grid-template-columns: repeat(2, 1fr); gap: 8px; }
          .card-grid--wide { grid-template-columns: repeat(2, 1fr); gap: 8px; }
          .skill-card { min-height: 100px; padding: 16px 8px 12px; }
          .sk-icon { font-size: 1.6rem; }
          .sk-name { font-size: 9.5px; }
        }

        /* Very wide screens */
        @media (min-width: 1200px) {
          .content-wrap { max-width: 1100px; }
          .card-grid { grid-template-columns: repeat(4, 1fr); }
          .card-grid--wide { grid-template-columns: repeat(5, 1fr); }
          .skill-card { min-height: 150px; padding: 28px 16px 22px; }
          .sk-icon { font-size: 2.6rem; }
        }
      `}</style>
    </section>
  )
}
