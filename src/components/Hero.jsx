import React from 'react'
import { motion } from 'framer-motion'
import { BsChevronDown } from 'react-icons/bs'
import profileImg from '../assets/6B48B3C9-7CC4-4195-9181-367AE6226EAA.JPG'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left px-6 bg-gradient-to-br from-[#1a012d] via-[#400187] to-[#230035] overflow-hidden"
    >
      {/* Blurred background swirl */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-violet-800 via-indigo-900 to-black opacity-30 animate-pulse blur-2xl" />

      {/* Profile Image */}
      <motion.img
        src={profileImg}
        alt="Pratyush Nishank"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover border-4 border-violet-500 shadow-[0_0_20px_rgba(139,92,246,0.7)] mb-6 md:mb-0 md:mr-10 z-10"
      />

      {/* Glass Card Content */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 max-w-xl backdrop-blur-md bg-white/5 border border-violet-500/30 rounded-3xl px-8 py-10"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-violet-300 drop-shadow-lg">
          Hi, I’m Pratyush Nishank 👋
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-lg md:text-xl mt-4 text-lavender-300"
        >
          AI Enthusiast | Data Science Student | CS Undergrad
        </motion.p>
      </motion.div>

      {/* Scroll Down Chevron */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 text-violet-300 text-2xl"
      >
        <BsChevronDown />
      </motion.div>
    </section>
  )
}
