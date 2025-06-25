import { motion } from 'framer-motion'
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaSnapchatGhost,
} from 'react-icons/fa'

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-[#14001f] text-center text-white"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-lavender-300 mb-12"
      >
        Get in Touch
      </motion.h2>

      <form className="max-w-xl mx-auto space-y-6">
        <input
          type="text"
          placeholder="Pratyush Pulak Nishank"
          className="w-full p-3 bg-[#1f0030] text-white border border-violet-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
        />
        <input
          type="email"
          placeholder="pratyushnishank286@gmail.com"
          className="w-full p-3 bg-[#1f0030] text-white border border-violet-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
        />
      </form>

      {/* Social Links */}
      <div className="flex justify-center flex-wrap gap-6 mt-16">
        {/* Individual icon buttons */}
        <a
          href="https://www.linkedin.com/in/pratyush-pulak-nishank-02a10b311"
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl p-4 rounded-full bg-[#1f0030] text-violet-400 hover:text-white hover:bg-violet-600 shadow-md transition-transform transform hover:scale-125"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Pratyush8448"
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl p-4 rounded-full bg-[#1f0030] text-violet-400 hover:text-white hover:bg-violet-700 shadow-md transition-transform transform hover:scale-125"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/pratyush.nishank/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl p-4 rounded-full bg-[#1f0030] text-pink-400 hover:text-white hover:bg-pink-500 shadow-md transition-transform transform hover:scale-125"
        >
          <FaInstagram />
        </a>
        <a
          href="https://twitter.com/PratyushNi89170"
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl p-4 rounded-full bg-[#1f0030] text-sky-400 hover:text-white hover:bg-sky-500 shadow-md transition-transform transform hover:scale-125"
        >
          <FaTwitter />
        </a>
        <a
          href="https://snapchat.com/t/7sQaGVNG"
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl p-4 rounded-full bg-[#1f0030] text-yellow-300 hover:text-black hover:bg-yellow-300 shadow-md transition-transform transform hover:scale-125"
        >
          <FaSnapchatGhost />
        </a>
      </div>
    </section>
  )
}
