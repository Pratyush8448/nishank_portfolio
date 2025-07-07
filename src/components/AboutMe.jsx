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
      <div className="max-w-3xl mx-auto text-gray-300 text-lg md:text-xl leading-relaxed space-y-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hello, I’m <span className="text-violet-400 font-semibold">Pratyush Pulak Nishank</span>, a <span className="text-violet-300">21-year-old</span> computer science and data science student, driven by curiosity and a deep interest in AI.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          I am pursuing a <span className="text-sky-300">B.Tech in Computer Science</span> from Silicon University and a <span className="text-orange-300">B.Sc. in Data Science</span> from IIT Madras.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          My academic focus lies in machine learning, AI agents, and generative AI. I'm particularly interested in building scalable systems using LLMs, RAG pipelines, and intelligent automation.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Beyond academics, I enjoy playing badminton — it helps me maintain balance and energy.
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
