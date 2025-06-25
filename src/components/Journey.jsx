// --- FILE: src/components/Journey.jsx ---
import { motion } from 'framer-motion'
import { FaSchool, FaUniversity, FaGraduationCap } from 'react-icons/fa'

const educationData = [
  {
    year: '2020',
    title: 'Matriculation - Vimala Convent School, Bhawanipatna (ICSE)',
    description: 'Scored 90% (450/500) | Developed early interest in programming',
    icon: <FaSchool />,
  },
  {
    year: '2022',
    title: 'Class 12 - Young Blood Public School (CBSE)',
    description: 'Scored 90% (450/500) | PCM + CS stream',
    icon: <FaSchool />,
  },
  {
    year: '2023 - 2027',
    title: 'B.Tech in Computer Science - Silicon University',
    description: 'Pursuing core CS fundamentals, projects, and software development',
    icon: <FaUniversity />,
  },
  {
    year: '2023 - 2027',
    title: 'B.Sc. in Data Science - IIT Madras',
    description: 'Parallel degree in Data Science and Applications and AI',
    icon: <FaGraduationCap />,
  },
]

export default function Journey() {
  return (
    <section className="py-20 px-6 bg-black text-white text-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-lavender-300 mb-12"
      >
        My Journey
      </motion.h2>

      <div className="relative border-l-4 border-violet-400 ml-6 max-w-4xl mx-auto">
        {educationData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className="mb-10 pl-6"
          >
            <div className="flex items-center mb-2 text-violet-400 text-xl">
              <div className="mr-2 text-2xl">{item.icon}</div>
              <span>{item.year}</span>
            </div>
            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
            <p className="text-sm text-lavender-300">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
