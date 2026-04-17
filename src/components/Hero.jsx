import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { BsChevronDown } from 'react-icons/bs'
import { FaEnvelope, FaCode } from 'react-icons/fa'
import profileImg from '../assets/pratyush.JPG'
import rocketBg from '../assets/rocket-bg.png'
import { useTheme } from "../theme"

export default function Hero() {
  const { theme } = useTheme()

  // 🎵 Easter Egg Logic — untouched
  const [clickCount, setClickCount] = useState(0)
  const lastClickTime = useRef(0)
  const audioRef = useRef(null)

  const handleImageClick = () => {
    const now = Date.now()
    if (now - lastClickTime.current > 1500) {
      setClickCount(1)
    } else {
      setClickCount(prev => prev + 1)
    }
    lastClickTime.current = now
    const newCount = clickCount + 1
    if (newCount === 2 && !audioRef.current.paused) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
      setClickCount(0)
      return
    }
    if (newCount === 4) {
      console.log("Lets go")
    }
    if (newCount === 3) {
      audioRef.current.volume = 0.15
      audioRef.current.play().catch(err => console.log(err))
      setClickCount(0)
    }
  }

  return (
    <section
      id="home"
      className="relative h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left px-6 overflow-hidden bg-white dark:bg-[#0e0018]"
      style={
        theme === "dark"
          ? {
              backgroundImage: `url(${rocketBg})`,
              backgroundSize: "cover",
              backgroundPosition: "bottom",
            }
          : {}
      }
    >
      {/* Overlay */}
      <div className="absolute inset-0 z-0 bg-white dark:bg-transparent dark:bg-gradient-to-t dark:from-[#0e0018]/90 dark:via-[#0e0018]/60 dark:to-transparent" />

      {/* Subtle radial glow behind content — light & dark */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-20 dark:opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(139,92,246,0.35) 0%, transparent 70%)',
          }}
        />
      </div>

      {/* Decorative ring behind profile */}
      <div className="relative z-10 mb-6 md:mb-0 md:mr-14 flex items-center justify-center">
        {/* Outer pulsing ring */}
        <motion.div
          className="absolute rounded-full border border-violet-400/20 dark:border-violet-500/20"
          style={{ width: 260, height: 260 }}
          animate={{ scale: [1, 1.07, 1], opacity: [0.4, 0.15, 0.4] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Middle ring */}
        <motion.div
          className="absolute rounded-full border border-violet-400/15 dark:border-violet-400/15"
          style={{ width: 230, height: 230 }}
          animate={{ scale: [1, 1.04, 1], opacity: [0.3, 0.1, 0.3] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
        />

        {/* Profile image */}
        <motion.img
          src={profileImg}
          alt="Pratyush Nishank"
          onClick={handleImageClick}
          initial={{ opacity: 0, scale: 0.75 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="cursor-pointer relative z-10 w-44 h-44 md:w-52 md:h-52 rounded-full object-cover"
          style={{
            border: '3px solid rgba(139,92,246,0.6)',
            boxShadow: '0 0 0 6px rgba(139,92,246,0.08), 0 0 40px rgba(139,92,246,0.35), 0 8px 32px rgba(0,0,0,0.25)',
          }}
        />
      </div>

      {/* Hidden Audio */}
      <audio ref={audioRef} src="/On Top trim.mp3" />

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="z-10 max-w-lg backdrop-blur-md bg-white/80 dark:bg-white/5 border border-violet-400/20 dark:border-violet-500/20 rounded-3xl px-8 py-10"
        style={{
          boxShadow: '0 8px 40px rgba(139,92,246,0.1), 0 1px 0 rgba(139,92,246,0.2) inset',
        }}
      >
        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7 }}
          className="text-sm tracking-[0.3em] text-violet-500/70 dark:text-violet-400/60 mb-3 font-medium"
        >
          Hi  I'm
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.9 }}
          className="text-5xl md:text-7xl font-black tracking-tight leading-none mb-1"
          style={{ fontFamily: "'Syne', 'DM Sans', sans-serif" }}
        >
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 45%, #ec4899 100%)',
            }}
          >
            Pratyush
          </span>
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.9 }}
          className="text-5xl md:text-7xl font-black tracking-tight leading-none mb-6 text-gray-900 dark:text-white"
          style={{ fontFamily: "'Syne', 'DM Sans', sans-serif" }}
        >
          Nishank
        </motion.h1>

        {/* Divider line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.7, ease: 'easeOut' }}
          className="origin-left h-px mb-5 w-32 md:mx-0 mx-auto"
          style={{ background: 'linear-gradient(90deg, rgba(139,92,246,0.7), transparent)' }}
        />

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.8 }}
          className="text-base md:text-lg text-gray-500 dark:text-gray-400 tracking-wide mb-8"
        >
          Always Learning · Always Evolving
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex gap-3 justify-center md:justify-start flex-wrap"
        >
          <a
            href="#projects"
            className="group flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, #7c3aed, #a855f7)',
              boxShadow: '0 4px 20px rgba(139,92,246,0.35)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.boxShadow = '0 6px 28px rgba(139,92,246,0.55)'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(139,92,246,0.35)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            <FaCode size={13} /> View Projects
          </a>

          <a
            href="#contact"
            className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 text-violet-600 dark:text-violet-300"
            style={{
              border: '1px solid rgba(139,92,246,0.35)',
              background: 'rgba(139,92,246,0.05)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(139,92,246,0.12)'
              e.currentTarget.style.borderColor = 'rgba(139,92,246,0.6)'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(139,92,246,0.05)'
              e.currentTarget.style.borderColor = 'rgba(139,92,246,0.35)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            <FaEnvelope size={13} /> Contact
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1.6, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 flex flex-col items-center gap-1 text-violet-400/60 dark:text-violet-400/50 hover:text-violet-500 transition-colors"
      >
        <span className="text-[10px] uppercase tracking-[0.25em] font-medium">Scroll</span>
        <BsChevronDown size={16} />
      </motion.a>
    </section>
  )
}