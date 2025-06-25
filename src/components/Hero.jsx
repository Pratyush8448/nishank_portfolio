import React from 'react'
import { motion } from 'framer-motion'
import { BsChevronDown } from 'react-icons/bs'
import profileImg from '../assets/6B48B3C9-7CC4-4195-9181-367AE6226EAA.JPG'
import rocketBg from '../assets/rocket-bg.png' // 🚀 Your rocket background

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left px-6 bg-no-repeat bg-cover bg-bottom overflow-hidden"
      style={{ backgroundImage: `url(${rocketBg})` }}
    >
      {/* Optional soft overlay (faint for readability) */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0e0018]/80 via-[#0e0018]/50 to-transparent z-0" />

      {/* Profile image */}
      <motion.img
        src={profileImg}
        alt="Pratyush Nishank"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover border-4 border-violet-500 shadow-[0_0_20px_rgba(139,92,246,0.7)] mb-6 md:mb-0 md:mr-10 z-10"
      />

      {/* Glass card content */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 max-w-xl backdrop-blur-md bg-white/5 border border-violet-500/30 rounded-3xl px-8 py-10 shadow-lg"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-2xl md:text-3xl text-lavender-300 mb-2 tracking-wide"
        >
          Hi, I’m
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight"
        >
          <span className="bg-gradient-to-r from-violet-400 via-pink-500 to-fuchsia-400 bg-clip-text text-transparent drop-shadow-lg">
            Pratyush
          </span>{' '}
          <span className="text-white drop-shadow-md">Nishank</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-lg md:text-xl mt-4 text-lavender-300"
        >
          Decoding Data · Building AI · Living Tech
        </motion.p>
      </motion.div>

      {/* Scroll down chevron */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 text-violet-300 text-2xl hover:text-violet-400 transition-all z-10"
      >
        <BsChevronDown />
      </motion.div>
    </section>
  )
}