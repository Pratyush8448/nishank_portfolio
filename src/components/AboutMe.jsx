import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaDownload } from 'react-icons/fa'

const NEWS_ITEMS = [
  'Data Analyst Agent deployed — visit Projects for a live demo ↗',
  'Currently exploring a book- Introduction to LLMs by Orielly',
  'New full-stack web project in progress — stay tuned for the drop',
]

function NewsTicker() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % NEWS_ITEMS.length)
    }, 10000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full overflow-hidden rounded-lg border border-violet-500/20 bg-violet-50/50 dark:bg-violet-500/5 mb-8">

      {/* Row 1 — LIVE + UPDATES */}
      <div className="flex items-center border-b border-violet-500/15">
        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-red-500 flex-shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          <span className="text-[10px] font-bold tracking-widest text-white uppercase font-mono">LIVE</span>
        </div>
        <div className="flex items-center px-3 py-1.5 bg-violet-600 flex-shrink-0">
          <span className="text-[10px] font-bold tracking-widest text-white uppercase font-mono">Updates</span>
        </div>
      </div>

      {/* Row 2 — scrolling news */}
      <div className="overflow-hidden relative h-8 flex items-center w-full">
        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            initial={{ x: '100%' }}
            animate={{ x: '-100%' }}
            transition={{ duration: 7, ease: 'linear' }}
            className="absolute whitespace-nowrap px-4 text-xs text-gray-600 dark:text-gray-300 font-mono"
          >
            {NEWS_ITEMS[index]}
          </motion.p>
        </AnimatePresence>
      </div>

    </div>
  )
}

export default function AboutMe() {
  return (
    <section className="relative py-28 px-6 bg-white dark:bg-[#0e0018] text-center overflow-hidden transition-colors duration-300">

      {/* Background blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full bg-violet-300/20 dark:bg-violet-600/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[200px] rounded-full bg-indigo-300/10 dark:bg-indigo-500/10 blur-2xl" />
      </div>

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative mb-14"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
          About Me
        </h2>
        <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500" />
      </motion.div>

      {/* Card */}
      <div className="relative max-w-3xl mx-auto">

        {/* Glow ring */}
        <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-violet-500/30 via-indigo-500/20 to-transparent dark:from-violet-500/20 dark:via-indigo-500/10 blur-sm pointer-events-none" />

        <div className="relative rounded-3xl bg-white/90 dark:bg-white/[0.03] backdrop-blur-xl border border-violet-200/60 dark:border-violet-500/15 p-8 md:p-12 text-left space-y-6">

          {/* News Ticker */}
          <NewsTicker />

          {/* Decorative quote mark */}
          <span className="text-6xl leading-none text-violet-300/50 dark:text-violet-500/30 font-serif select-none">
            "
          </span>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-gray-700 dark:text-gray-300 text-lg md:text-xl leading-relaxed -mt-6"
          >
            I'm <span className="font-semibold text-gray-900 dark:text-white">Pratyush Nishank</span> from Odisha — a curious human who loves exploring how things actually work. I'm interested in generative AI, data science, and intelligent systems, always learning, experimenting, and refining ideas. When I'm not building, you'll find me on a badminton court or thinking through the next thing to create.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-gray-500 dark:text-gray-400 text-base md:text-lg leading-relaxed"
          >
            If this resonates, feel free to reach out — I'm always open to interesting conversations.
          </motion.p>

          {/* Divider */}
          <div className="h-px bg-gray-200 dark:bg-white/10" />

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center gap-4 pt-2"
          >
            <motion.a
              href="https://nishank-resume.vercel.app/"
              download
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold text-sm tracking-wide shadow-lg shadow-violet-500/25 transition-all duration-200"
            >
              <FaDownload className="text-base" />
              Resume
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl border border-violet-400 dark:border-violet-500/50 text-violet-600 dark:text-violet-400 font-semibold text-sm tracking-wide hover:bg-violet-500 hover:text-white hover:border-violet-500 dark:hover:bg-violet-500 dark:hover:text-white transition-all duration-200"
            >
              Contact Me
            </motion.a>
          </motion.div>

        </div>
      </div>

    </section>
  )
}