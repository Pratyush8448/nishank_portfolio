import { motion } from 'framer-motion'
import {
  FaPython, FaJava, FaCuttlefish, FaCogs,
  FaChartBar, FaFileCode, FaLink, FaEye, FaDatabase,
  FaFileExcel, FaGithub, FaDocker
} from 'react-icons/fa'
import {
  SiFastapi, SiOpenai, SiNumpy, SiPandas,
  SiJupyter, SiScikitlearn, SiPostman, SiAutocad
} from 'react-icons/si'
import { TbRobotFace } from 'react-icons/tb'
import { MdOutlineWeb } from 'react-icons/md'

const techSkills = [
  { name: 'FastAPI', icon: <SiFastapi />, color: '#009688' },
  { name: 'LangChain', icon: <FaLink />, color: '#4fc3f7' },
  { name: 'RAG Systems', icon: <TbRobotFace />, color: '#ffb300' },
  { name: 'OpenAI API', icon: <SiOpenai />, color: '#10a37f' },
  { name: 'OCR', icon: <FaEye />, color: '#9c27b0' },
  { name: 'Web Scraping', icon: <MdOutlineWeb />, color: '#3f51b5' },
  { name: 'API Testing', icon: <SiPostman />, color: '#ff6d00' },
  { name: 'Software Dev', icon: <FaCogs />, color: '#607d8b' },
  { name: 'MySQL', icon: <FaDatabase />, color: '#00758F' },
  { name: 'Pandas', icon: <SiPandas />, color: '#150458' },
  { name: 'NumPy', icon: <SiNumpy />, color: '#013243' },
  { name: 'Seaborn' },
  { name: 'Jupyter Notebook', icon: <SiJupyter />, color: '#f37626' },
  { name: 'Statistics', icon: <FaChartBar />, color: '#4caf50' },
  { name: 'Machine Learning', icon: <SiScikitlearn />, color: '#f7931e' },
  { name: 'AutoCAD', icon: <SiAutocad />, color: '#e53935' },
  { name: 'Microsoft Excel', icon: <FaFileExcel />, color: '#1D6F42' },
  { name: 'Flourish Studio', icon: <FaFileCode />, color: '#6a1b9a' },
  { name: 'GitHub', icon: <FaGithub />, color: '#f0f0f0' },
  { name: 'Docker', icon: <FaDocker />, color: '#0db7ed' },
]

const programmingLanguages = [
  { name: 'Python', icon: <FaPython />, color: '#306998' },
  { name: 'C Programming', icon: <FaCuttlefish />, color: '#5c6bc0' },
  { name: 'C++', icon: <FaCuttlefish />, color: '#1e88e5' },
  { name: 'Java', icon: <FaJava />, color: '#f44336' },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35, ease: 'easeOut' } },
}

function SkillCard({ skill, index }) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        scale: 1.06,
        y: -4,
        transition: { duration: 0.2 },
      }}
      className="skill-card group relative flex flex-col items-center justify-center gap-3 p-5 rounded-2xl cursor-default"
    >
      {/* Glow blob on hover */}
      <div
        className="glow-blob"
        style={{ background: skill.color ? `${skill.color}33` : '#a855f733' }}
      />

      {skill.icon ? (
        <div
          className="text-[2.2rem] z-10 transition-transform duration-300 group-hover:scale-110 drop-shadow-lg"
          style={{ color: skill.color }}
        >
          {skill.icon}
        </div>
      ) : (
        <div className="text-[2.2rem] z-10 font-bold text-violet-400 leading-none">
          ≈
        </div>
      )}

      <p className="text-xs font-semibold tracking-wide text-center z-10 text-gray-700 dark:text-gray-200 group-hover:text-violet-500 dark:group-hover:text-violet-300 transition-colors duration-200">
        {skill.name}
      </p>

      {/* Bottom accent line */}
      <div
        className="accent-line"
        style={{ background: skill.color ?? '#a855f7' }}
      />
    </motion.div>
  )
}

function LangCard({ lang }) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        scale: 1.07,
        y: -5,
        transition: { duration: 0.2 },
      }}
      className="lang-card group relative flex flex-col items-center justify-center gap-3 p-6 rounded-2xl cursor-default overflow-hidden"
    >
      <div
        className="lang-glow"
        style={{ background: `${lang.color}22` }}
      />
      <div
        className="text-[2.6rem] z-10 transition-transform duration-300 group-hover:scale-110"
        style={{ color: lang.color }}
      >
        {lang.icon}
      </div>
      <p className="text-sm font-bold tracking-wide z-10 text-gray-800 dark:text-white group-hover:text-violet-400 transition-colors duration-200">
        {lang.name}
      </p>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section className="skills-section py-24 px-6 text-center text-black dark:text-white transition-colors duration-300 relative overflow-hidden">

      {/* Background decorative blobs */}
      <div className="bg-blob blob-1" />
      <div className="bg-blob blob-2" />

      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: -28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, ease: 'easeOut' }}
        className="mb-16 relative z-10"
      >
        <p className="text-xs font-bold uppercase tracking-[0.35em] text-violet-400 mb-3">
          What I Work With
        </p>
        <h2 className="text-5xl font-extrabold tracking-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-purple-400 to-fuchsia-500">
            My Tech Stack
          </span>
        </h2>
        <div className="heading-underline mx-auto mt-4" />
      </motion.div>

      {/* — AI / Dev Tools — */}
      <div className="relative z-10 max-w-5xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-label mb-8"
        >
          <span className="label-pill">AI / Dev Tools</span>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        >
          {techSkills.map((skill, index) => (
            <SkillCard key={index} skill={skill} index={index} />
          ))}
        </motion.div>
      </div>

      {/* Divider */}
      <div className="section-divider mx-auto mb-20 relative z-10" />

      {/* — Programming Languages — */}
      <div className="relative z-10 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-label mb-8"
        >
          <span className="label-pill">Programming Languages</span>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-5"
        >
          {programmingLanguages.map((lang, index) => (
            <LangCard key={index} lang={lang} />
          ))}
        </motion.div>
      </div>

      {/* Inline styles */}
      <style>{`
        .skills-section {
          background: #ffffff;
          position: relative;
        }

        :is(.dark) .skills-section {
          background: #0d001a;
        }

        /* Background decorative blobs */
        .bg-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(90px);
          opacity: 0.12;
          pointer-events: none;
          z-index: 0;
        }
        .blob-1 {
          width: 520px;
          height: 520px;
          background: #a855f7;
          top: -120px;
          left: -160px;
        }
        .blob-2 {
          width: 400px;
          height: 400px;
          background: #7c3aed;
          bottom: -80px;
          right: -100px;
        }

        /* Heading underline */
        .heading-underline {
          width: 64px;
          height: 3px;
          border-radius: 99px;
          background: linear-gradient(90deg, #a855f7, #7c3aed);
        }

        /* Section label */
        .label-pill {
          display: inline-block;
          padding: 6px 18px;
          border-radius: 99px;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          color: #a855f7;
          border: 1.5px solid #a855f733;
          background: #a855f70d;
        }
        :is(.dark) .label-pill {
          color: #c084fc;
          border-color: #a855f755;
          background: #a855f715;
        }

        /* Skill card */
        .skill-card {
          background: #f3f0ff;
          border: 1px solid #e9d5ff;
          position: relative;
          overflow: hidden;
          transition: border-color 0.25s, box-shadow 0.25s;
        }
        :is(.dark) .skill-card {
          background: #1a0033;
          border-color: #3b0764;
        }
        .skill-card:hover {
          border-color: #a855f7;
          box-shadow: 0 8px 32px -8px #a855f744, 0 0 0 1px #a855f733;
        }
        :is(.dark) .skill-card:hover {
          box-shadow: 0 8px 32px -8px #7c3aed66, 0 0 0 1px #a855f755;
        }

        /* Glow blob inside card */
        .glow-blob {
          position: absolute;
          inset: 0;
          border-radius: 1rem;
          opacity: 0;
          transition: opacity 0.3s;
          pointer-events: none;
        }
        .skill-card:hover .glow-blob {
          opacity: 1;
        }

        /* Bottom accent line */
        .accent-line {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%) scaleX(0);
          width: 60%;
          height: 2px;
          border-radius: 99px;
          transition: transform 0.3s ease;
        }
        .skill-card:hover .accent-line {
          transform: translateX(-50%) scaleX(1);
        }

        /* Language card */
        .lang-card {
          background: #f3f0ff;
          border: 1.5px solid #e9d5ff;
          position: relative;
          overflow: hidden;
          transition: border-color 0.25s, box-shadow 0.25s;
        }
        :is(.dark) .lang-card {
          background: #1a0033;
          border-color: #3b0764;
        }
        .lang-card:hover {
          border-color: #a855f7;
          box-shadow: 0 10px 36px -8px #a855f755;
        }

        .lang-glow {
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 0.3s;
          pointer-events: none;
          border-radius: 1rem;
        }
        .lang-card:hover .lang-glow {
          opacity: 1;
        }

        /* Divider */
        .section-divider {
          width: 120px;
          height: 1px;
          background: linear-gradient(90deg, transparent, #a855f766, transparent);
        }
      `}</style>
    </section>
  )
} 