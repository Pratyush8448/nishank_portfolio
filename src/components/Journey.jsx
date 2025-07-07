import { motion } from 'framer-motion'
import { FaSchool, FaUniversity, FaGraduationCap } from 'react-icons/fa'

const educationData = [
  {
    year: '2020',
    title: 'Matriculation - Vimala Convent School, Bhawanipatna (ICSE)',
    description: 'Scored 90% (450/500) | Developed early interest in programming',
    icon: <FaSchool className="text-pink-400" />,
  },
  {
    year: '2022',
    title: 'Class 12 - Young Blood Public School (CBSE)',
    description: 'Scored 90% (450/500) | PCM + CS stream',
    icon: <FaSchool className="text-yellow-400" />,
  },
  {
    year: '2023 - 2027',
    title: 'B.Tech in Computer Science - Silicon University',
    description: 'Pursuing core CS fundamentals, projects, and software development',
    icon: <FaUniversity className="text-cyan-400" />,
  },
  {
    year: '2023 - 2027',
    title: 'B.Sc. in Data Science - IIT Madras',
    description: 'Parallel degree in Data Science and Applications and AI',
    icon: <FaGraduationCap className="text-violet-400" />,
  },
]

export default function Journey() {
  return (
    <section className="py-20 px-6 bg-black text-white">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-16 text-violet-400"
      >
        My Journey
      </motion.h2>

      <div className="relative max-w-4xl mx-auto before:content-[''] before:absolute before:top-0 before:left-6 before:w-1 before:h-full before:bg-gradient-to-b before:from-violet-500 before:to-pink-400">
        {educationData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className="relative mb-12 pl-16"
          >
            {/* Dot marker */}
            <div className="absolute left-1 top-1.5 w-4 h-4 bg-gradient-to-br from-violet-500 to-pink-400 rounded-full shadow-md animate-pulse" />

            {/* Content block */}
            <div className="bg-white/5 border border-violet-500/20 p-5 rounded-xl backdrop-blur-md shadow-lg hover:shadow-violet-500/30 transition-all">
              <div className="flex items-center mb-2 text-violet-300 text-lg font-semibold gap-2">
                {item.icon}
                <span>{item.year}</span>
              </div>
              <h3 className="text-white text-base font-bold mb-1">{item.title}</h3>
              <p className="text-sm text-gray-300">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
