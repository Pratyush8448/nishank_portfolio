// --- FILE: src/components/Contact.jsx ---
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
        <textarea
          rows="5"
          placeholder="Your Message"
          className="w-full p-3 bg-[#1f0030] text-white border border-violet-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-lg font-semibold transition-all duration-300"
        >
          Send Message
        </button>
      </form>

      {/* Social Links */}
      <div className="flex justify-center gap-6 mt-12 text-3xl text-violet-400">
        <a
          href="https://www.linkedin.com/in/pratyush-pulak-nishank-02a10b311"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-violet-600 transition-transform transform hover:scale-110"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Pratyush8448"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-violet-600 transition-transform transform hover:scale-110"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/pratyush.nishank/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-400 transition-transform transform hover:scale-110"
        >
          <FaInstagram />
        </a>
        <a
          href="https://twitter.com/PratyushNi89170"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-sky-400 transition-transform transform hover:scale-110"
        >
          <FaTwitter />
        </a>
        <a
          href="https://snapchat.com/t/7sQaGVNG"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-300 transition-transform transform hover:scale-110"
        >
          <FaSnapchatGhost />
        </a>
      </div>
    </section>
  )
}
