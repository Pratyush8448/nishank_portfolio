import { motion } from 'framer-motion'

export default function AboutMe() {
  return (
    <section className="py-20 px-4 text-center bg-[#121212]">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-lavender-300 mb-4"
      >
        About Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-lg max-w-2xl mx-auto text-gray-300"
      >
        I’m <strong className="text-violet-400">Pratyush Pulak Nishank</strong> — a 21-year-old student currently pursuing a B.Tech in Computer Science at Silicon University and a B.Sc. in Data Science and Applications at IIT Madras. I’m deeply interested in data science, machine learning, artificial intelligence and generative AI. I’m always eager to explore real-world applications of these technologies and connect with like-minded professionals. Outside of academics, I enjoy playing badminton to stay active and balanced.
      </motion.p>

      <motion.a
        href="/resume.pdf"
        download
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-8 inline-block px-6 py-3 bg-violet-400 hover:bg-violet-500 text-black font-semibold rounded-xl transition-all duration-300"
      >
        Download Resume
      </motion.a>
    </section>
  )
}
