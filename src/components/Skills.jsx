import { motion } from 'framer-motion'
import {
  FaPython, FaJava, FaCuttlefish, FaCogs,
  FaChartBar, FaFileCode, FaLink, FaEye
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
  { name: 'Pandas', icon: <SiPandas />, color: '#150458' },
  { name: 'NumPy', icon: <SiNumpy />, color: '#013243' },
  { name: 'Seaborn' }, // optional
  { name: 'Jupyter Notebook', icon: <SiJupyter />, color: '#f37626' },
  { name: 'Statistics', icon: <FaChartBar />, color: '#4caf50' },
  { name: 'Machine Learning', icon: <SiScikitlearn />, color: '#f7931e' },
  { name: 'AutoCAD', icon: <SiAutocad />, color: '#e53935' },
]

const programmingLanguages = [
  { name: 'Python', icon: <FaPython />, color: '#306998' },
  { name: 'C Programming', icon: <FaCuttlefish />, color: '#5c6bc0' },
  { name: 'C++', icon: <FaCuttlefish />, color: '#1e88e5' },
  { name: 'Java', icon: <FaJava />, color: '#f44336' },
]

export default function Skills() {
  return (
    <section className="py-20 px-6 bg-[#14001f] text-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-lavender-300 mb-12"
      >
        My Tech Stack
      </motion.h2>

      {/* Tools & Tech Section */}
      <h3 className="text-2xl font-semibold text-violet-400 mb-6">AI / Dev Tools</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16">
        {techSkills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1, rotate: 2 }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="flex flex-col items-center justify-center bg-[#1f0030] p-4 rounded-xl text-white shadow-md hover:shadow-violet-500/50 transition-all"
          >
            {skill.icon ? (
              <>
                <div className="text-4xl mb-2" style={{ color: skill.color }}>{skill.icon}</div>
                <p className="text-sm font-medium">{skill.name}</p>
              </>
            ) : (
              <p className="text-sm font-semibold">{skill.name}</p>
            )}
          </motion.div>
        ))}
      </div>

      {/* Programming Languages Section */}
      <h3 className="text-2xl font-semibold text-violet-400 mb-6">Programming Languages</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
        {programmingLanguages.map((lang, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="flex flex-col items-center justify-center bg-[#1f0030] p-4 rounded-xl text-white shadow-md hover:shadow-lavender-300/50 transition-all"
          >
            <div className="text-4xl mb-2" style={{ color: lang.color }}>{lang.icon}</div>
            <p className="text-sm font-medium">{lang.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
