import { motion } from 'framer-motion'
import {
  FaPython, FaJava, FaCuttlefish, FaCogs,
  FaChartBar, FaFileCode, FaLink, FaEye, FaDatabase,
  FaFileExcel, FaGithub, FaDocker, FaHtml5, FaCss3Alt, FaReact, FaJs
} from 'react-icons/fa'
import {
  SiFastapi, SiOpenai, SiNumpy, SiPandas,
  SiJupyter, SiScikitlearn, SiPostman, SiAutocad
} from 'react-icons/si'
import { TbRobotFace } from 'react-icons/tb'
import { MdOutlineWeb } from 'react-icons/md'

const techSkills = [
  { name: 'FastAPI',         icon: <SiFastapi />,     color: '#009688' },
  { name: 'LangChain',       icon: <FaLink />,         color: '#4fc3f7' },
  { name: 'RAG Systems',     icon: <TbRobotFace />,    color: '#ffb300' },
  { name: 'OpenAI API',      icon: <SiOpenai />,       color: '#10a37f' },
  { name: 'OCR',             icon: <FaEye />,          color: '#9c27b0' },
  { name: 'Web Scraping',    icon: <MdOutlineWeb />,   color: '#3f51b5' },
  { name: 'API Testing',     icon: <SiPostman />,      color: '#ff6d00' },
  { name: 'Software Dev',    icon: <FaCogs />,         color: '#607d8b' },
  { name: 'MySQL',           icon: <FaDatabase />,     color: '#00758F' },
  { name: 'Pandas',          icon: <SiPandas />,       color: '#150458' },
  { name: 'NumPy',           icon: <SiNumpy />,        color: '#4dabcf' },
  { name: 'Seaborn',         icon: null,               color: '#4878d0' },
  { name: 'Jupyter Notebook',icon: <SiJupyter />,      color: '#f37626' },
  { name: 'Statistics',      icon: <FaChartBar />,     color: '#4caf50' },
  { name: 'Machine Learning',icon: <SiScikitlearn />,  color: '#f7931e' },
  { name: 'AutoCAD',         icon: <SiAutocad />,      color: '#e53935' },
  { name: 'Microsoft Excel', icon: <FaFileExcel />,    color: '#1D6F42' },
  { name: 'Flourish Studio', icon: <FaFileCode />,     color: '#6a1b9a' },
  { name: 'GitHub',          icon: <FaGithub />,       color: '#f0f0f0' },
  { name: 'Docker',          icon: <FaDocker />,       color: '#0db7ed' },
]

const programmingLanguages = [
  { name: 'Python',        icon: <FaPython />,    color: '#306998' },
  { name: 'C Programming', icon: <FaCuttlefish />,color: '#5c6bc0' },
  { name: 'C++',           icon: <FaCuttlefish />,color: '#1e88e5' },
  { name: 'Java',          icon: <FaJava />,      color: '#f44336' },
]

// NEW — Web technologies
const webTech = [
  { name: 'HTML5',   icon: <FaHtml5 />,    color: '#e34f26' },
  { name: 'CSS3',    icon: <FaCss3Alt />,  color: '#1572b6' },
  { name: 'JavaScript', icon: <FaJs />,    color: '#f7df1e' },
  { name: 'React',   icon: <FaReact />,    color: '#61dafb' },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.045 } },
}

const cardVariants = {
  hidden:  { opacity: 0, y: 28, scale: 0.93 },
  visible: { opacity: 1, y: 0,  scale: 1, transition: { duration: 0.38, ease: [0.22, 1, 0.36, 1] } },
}

// ── Skill card (AI / Dev tools) ──────────────────────────────
function SkillCard({ skill }) {
  const accent = skill.color ?? '#a855f7'
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ scale: 1.07, y: -5, transition: { duration: 0.2 } }}
      className="skill-card group relative flex flex-col items-center justify-center gap-2.5 p-5 rounded-2xl cursor-default overflow-hidden"
    >
      {/* radial glow */}
      <div className="card-glow" style={{ background: `radial-gradient(circle at 50% 80%, ${accent}30 0%, transparent 70%)` }} />

      {/* icon or fallback */}
      {skill.icon ? (
        <div
          className="text-[2rem] z-10 transition-transform duration-300 group-hover:scale-115 drop-shadow-lg"
          style={{ color: accent, filter: `drop-shadow(0 0 6px ${accent}66)` }}
        >
          {skill.icon}
        </div>
      ) : (
        <div
          className="text-[1.4rem] z-10 font-black leading-none"
          style={{ color: accent }}
        >
          ≋
        </div>
      )}

      <p className="text-[11px] font-semibold tracking-wide text-center z-10 text-gray-600 dark:text-gray-300 group-hover:text-violet-500 dark:group-hover:text-violet-300 transition-colors duration-200 leading-tight">
        {skill.name}
      </p>

      {/* bottom shimmer line */}
      <div className="shimmer-line" style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }} />
    </motion.div>
  )
}

// ── Language / Web card (larger) ─────────────────────────────
function BigCard({ item }) {
  const accent = item.color ?? '#a855f7'
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ scale: 1.06, y: -6, transition: { duration: 0.2 } }}
      className="big-card group relative flex flex-col items-center justify-center gap-3 p-6 rounded-2xl cursor-default overflow-hidden"
    >
      <div className="card-glow" style={{ background: `radial-gradient(circle at 50% 90%, ${accent}35 0%, transparent 70%)` }} />

      <div
        className="text-[2.6rem] z-10 transition-transform duration-300 group-hover:scale-110"
        style={{ color: accent, filter: `drop-shadow(0 0 8px ${accent}55)` }}
      >
        {item.icon}
      </div>

      <p className="text-[13px] font-bold tracking-wide z-10 text-gray-800 dark:text-white group-hover:text-violet-400 dark:group-hover:text-violet-300 transition-colors duration-200">
        {item.name}
      </p>

      {/* corner accent */}
      <div className="corner-accent" style={{ borderColor: `${accent}55` }} />
    </motion.div>
  )
}

// ── Section label ─────────────────────────────────────────────
function SectionLabel({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex items-center gap-3 mb-8"
    >
      <span className="label-dot" />
      <span className="label-pill">{children}</span>
      <span className="label-rule" />
    </motion.div>
  )
}

// ── Main component ────────────────────────────────────────────
export default function Skills() {
  return (
    <section className="skills-section py-28 px-6 text-center text-black dark:text-white transition-colors duration-300 relative overflow-hidden">

      {/* Atmospheric blobs */}
      <div className="bg-blob blob-1" />
      <div className="bg-blob blob-2" />
      <div className="bg-blob blob-3" />

      {/* ── Heading ── */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mb-20 relative z-10"
      >
        <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-violet-400 mb-4 flex items-center justify-center gap-2">
          <span className="inline-block w-6 h-px bg-violet-400/50" />
          What I Work With
          <span className="inline-block w-6 h-px bg-violet-400/50" />
        </p>
        <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-purple-400 to-fuchsia-500">
            My Tech Stack
          </span>
        </h2>
        <div className="heading-underline mx-auto mt-5" />
      </motion.div>

      {/* ── AI / Dev Tools ── */}
      <div className="relative z-10 max-w-5xl mx-auto mb-20">
        <SectionLabel>AI / Dev Tools</SectionLabel>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5"
        >
          {techSkills.map((skill, i) => <SkillCard key={i} skill={skill} />)}
        </motion.div>
      </div>

      {/* Divider */}
      <div className="section-divider mx-auto mb-20 relative z-10" />

      {/* ── Web Technologies (NEW) ── */}
      <div className="relative z-10 max-w-3xl mx-auto mb-20">
        <SectionLabel>Web Dev</SectionLabel>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-5"
        >
          {webTech.map((item, i) => <BigCard key={i} item={item} />)}
        </motion.div>
      </div>

      {/* Divider */}
      <div className="section-divider mx-auto mb-20 relative z-10" />

      {/* ── Programming Languages ── */}
      <div className="relative z-10 max-w-3xl mx-auto">
        <SectionLabel>Programming Languages</SectionLabel>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-5"
        >
          {programmingLanguages.map((lang, i) => <BigCard key={i} item={lang} />)}
        </motion.div>
      </div>

      {/* ── Inline styles ── */}
      <style>{`
        /* ─ Section background ─ */
        .skills-section { background: #ffffff; position: relative; }
        :is(.dark) .skills-section { background: #0d001a; }

        /* ─ Atmospheric blobs ─ */
        .bg-blob {
          position: absolute; border-radius: 50%;
          filter: blur(100px); opacity: 0.1; pointer-events: none; z-index: 0;
        }
        .blob-1 { width: 560px; height: 560px; background: #a855f7; top: -140px; left: -180px; }
        .blob-2 { width: 420px; height: 420px; background: #7c3aed; bottom: -80px; right: -100px; }
        .blob-3 { width: 300px; height: 300px; background: #ec4899; top: 40%; left: 50%; transform: translate(-50%,-50%); opacity: 0.06; }

        /* ─ Heading underline ─ */
        .heading-underline {
          width: 72px; height: 3px; border-radius: 99px;
          background: linear-gradient(90deg, #a855f7, #ec4899);
        }

        /* ─ Section label ─ */
        .label-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: linear-gradient(135deg, #a855f7, #ec4899);
          flex-shrink: 0;
        }
        .label-pill {
          display: inline-block; padding: 5px 16px; border-radius: 99px;
          font-size: 0.78rem; font-weight: 700; letter-spacing: 0.07em;
          color: #a855f7;
          border: 1.5px solid rgba(168,85,247,0.25);
          background: rgba(168,85,247,0.07);
          white-space: nowrap;
        }
        :is(.dark) .label-pill {
          color: #c084fc;
          border-color: rgba(168,85,247,0.4);
          background: rgba(168,85,247,0.12);
        }
        .label-rule {
          flex: 1; height: 1px;
          background: linear-gradient(90deg, rgba(168,85,247,0.3), transparent);
        }

        /* ─ Shared glow ─ */
        .card-glow {
          position: absolute; inset: 0; opacity: 0;
          transition: opacity 0.35s; pointer-events: none;
        }

        /* ─ Skill card (small) ─ */
        .skill-card {
          background: #f5f0ff;
          border: 1px solid #ede9fe;
          transition: border-color 0.25s, box-shadow 0.25s;
          min-height: 110px;
        }
        :is(.dark) .skill-card {
          background: rgba(26,0,51,0.8);
          border-color: rgba(59,7,100,0.8);
          backdrop-filter: blur(8px);
        }
        .skill-card:hover {
          border-color: #a855f7;
          box-shadow: 0 8px 32px -8px rgba(168,85,247,0.35), 0 0 0 1px rgba(168,85,247,0.2);
        }
        :is(.dark) .skill-card:hover {
          box-shadow: 0 8px 32px -8px rgba(124,58,237,0.5), 0 0 0 1px rgba(168,85,247,0.35);
        }
        .skill-card:hover .card-glow { opacity: 1; }

        /* shimmer line */
        .shimmer-line {
          position: absolute; bottom: 0; left: 10%; right: 10%; height: 1.5px;
          border-radius: 99px; transform: scaleX(0); transition: transform 0.3s ease;
        }
        .skill-card:hover .shimmer-line { transform: scaleX(1); }

        /* ─ Big card (langs / web) ─ */
        .big-card {
          background: #f5f0ff;
          border: 1.5px solid #ede9fe;
          min-height: 140px;
          transition: border-color 0.25s, box-shadow 0.25s;
        }
        :is(.dark) .big-card {
          background: rgba(26,0,51,0.8);
          border-color: rgba(59,7,100,0.8);
          backdrop-filter: blur(8px);
        }
        .big-card:hover {
          border-color: #a855f7;
          box-shadow: 0 12px 40px -10px rgba(168,85,247,0.4), 0 0 0 1px rgba(168,85,247,0.2);
        }
        :is(.dark) .big-card:hover {
          box-shadow: 0 12px 40px -10px rgba(124,58,237,0.55), 0 0 0 1px rgba(168,85,247,0.4);
        }
        .big-card:hover .card-glow { opacity: 1; }

        /* corner accent */
        .corner-accent {
          position: absolute; top: 8px; right: 8px;
          width: 18px; height: 18px;
          border-top: 1.5px solid transparent; border-right: 1.5px solid transparent;
          border-radius: 0 6px 0 0;
          transition: border-color 0.3s;
        }
        .big-card:hover .corner-accent { border-color: inherit; }

        /* ─ Divider ─ */
        .section-divider {
          width: 140px; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(168,85,247,0.5), transparent);
        }

        /* scale-115 utility for hover */
        .group-hover\\:scale-115:is(:where(.group:hover) *) { transform: scale(1.15); }
      `}</style>
    </section>
  )
}
