import { motion } from 'framer-motion'
import { FaDownload } from 'react-icons/fa'

export default function AboutMe() {
  return (
    <section className="py-24 px-6 bg-[#121212] text-center overflow-hidden">
      {/* Section Header */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold text-white mb-10"
      >
        About Me
      </motion.h2>

      {/* Description Block */}
      <div className="max-w-3xl mx-auto text-gray-300 text-lg md:text-xl leading-relaxed space-y-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hey, I’m <span className="text-violet-400 font-semibold">Pratyush Pulak Nishank</span>, a <span className="text-violet-300">21-year-old</span> tech enthusiast from <span className="text-sky-300 font-medium">Odisha</span>. I’m currently pursuing a <span className="text-sky-300">B.Tech in Computer Science</span> from <span className="font-medium text-cyan-300">Silicon University</span> and a parallel <span className="text-orange-300">B.Sc. in Data Science</span> from <span className="text-yellow-300 font-medium">IIT Madras</span>. My journey into tech is driven by a deep curiosity and a strong desire to build intelligent, impactful solutions using AI.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          My key areas of interest include <span className="text-violet-400 font-medium">machine learning</span>, <span className="text-teal-300 font-medium">agentic AI</span>, and <span className="text-pink-300 font-medium">generative AI</span>. I enjoy exploring advanced <span className="text-indigo-300 font-medium">LLM applications</span>, <span className="text-lime-300 font-medium">RAG pipelines</span>, and automation systems. On the engineering side, I love building polished frontends with <span className="text-blue-300 font-medium">React</span> and <span className="text-purple-300 font-medium">TailwindCSS</span>, as well as robust backend systems using <span className="text-emerald-300 font-medium">FastAPI</span>. Data structures, problem-solving, and optimization are core to how I approach projects.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          One of my big goals is to <span className="text-violet-400 font-semibold">keep learning constantly</span> — staying ahead of the curve and applying what I learn to build solutions that make a difference. Outside tech, you’ll usually find me on the badminton court or vibing to music to reset and refuel 🎧🏸.
        </motion.p>
      </div>

      {/* Resume CTA */}
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="mt-12"
      >
        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-violet-500 text-black font-semibold shadow-md hover:bg-violet-400 transition-all duration-300"
        >
          <FaDownload className="text-lg" />
          Download Resume
        </a>
      </motion.div>
    </section>
  )
}
