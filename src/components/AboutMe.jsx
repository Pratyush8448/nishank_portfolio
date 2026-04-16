import { motion } from 'framer-motion'
import { FaDownload } from 'react-icons/fa'

export default function AboutMe() {
  return (
    <section className="py-24 px-6 bg-white dark:bg-[#121212] text-center overflow-hidden transition-colors duration-300">
      
      {/* Section Header */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-10"
      >
        About Me
      </motion.h2>

      {/* Description Block */}
      <div className="max-w-3xl mx-auto text-gray-700 dark:text-gray-300 text-lg md:text-xl leading-relaxed space-y-8">

 <motion.p
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  I’m Pratyush Nishank from Odisha — a curious builder who loves exploring how things actually work. I’m interested in generative AI, data science, and intelligent systems, always learning, experimenting, and refining ideas. When I’m not building, you’ll find me on a badminton court or thinking through the next thing to create.

</motion.p>

<motion.p
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.3, duration: 0.6 }}
>
  If this resonates, feel free to reach out — I’m always open to interesting conversations.
</motion.p>

      </div>

      <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.5 }}
      className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
    >

      {/* Resume Button */}
      <a
        href="https://nishank-resume.vercel.app/"
        download
        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg 
        bg-violet-500 text-white dark:text-black 
        font-semibold shadow-md 
        hover:bg-violet-400 transition-all duration-300"
      >
        <FaDownload className="text-lg" />
        Resume
      </a>

      {/* Contact Button */}
      <a
        href="#contact"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg 
        border border-violet-500 text-violet-500 
        font-semibold shadow-sm 
        hover:bg-violet-500 hover:text-white transition-all duration-300"
      >
        Contact Me
      </a>

    </motion.div>
    </section>
  )
}