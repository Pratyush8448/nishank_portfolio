import React, { useRef, useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { BsChevronDown } from 'react-icons/bs'
import { FaEnvelope, FaCode } from 'react-icons/fa'
import profileImg from '../assets/pratyush.JPG'
import rocketBg from '../assets/rocket-bg.png'
import { useTheme } from "../theme"

// ── 1. Typewriter ──────────────────────────────────────────────
const roles = ["A Human Being.", "Full-Stack Developer", "Data Scientist","GenAI Engineer"]

function Typewriter() {
  const [display, setDisplay] = useState('')
  const state = useRef({ roleIndex: 0, charIndex: 0, deleting: false, timer: null })

  useEffect(() => {
    const tick = () => {
      const s    = state.current
      const word = roles[s.roleIndex]

      if (!s.deleting) {
        // Typing forward
        s.charIndex++
        setDisplay(word.slice(0, s.charIndex))
        if (s.charIndex === word.length) {
          // Finished typing — pause then start deleting
          s.deleting = true
          s.timer = setTimeout(tick, 1800)
          return
        }
        s.timer = setTimeout(tick, 85)
      } else {
        // Deleting
        s.charIndex--
        setDisplay(word.slice(0, s.charIndex))
        if (s.charIndex === 0) {
          // Finished deleting — move to next word
          s.deleting = false
          s.roleIndex = (s.roleIndex + 1) % roles.length
          s.timer = setTimeout(tick, 400) // brief pause before next word
          return
        }
        s.timer = setTimeout(tick, 45)
      }
    }

    state.current.timer = setTimeout(tick, 600) // initial delay
    return () => clearTimeout(state.current.timer)
  }, []) // runs once — all state is in the ref

  return (
    <p
      className="text-sm font-mono mb-2 flex items-center gap-1"
      style={{ color: 'rgba(180,150,255,0.7)' }}
    >
      &gt;&nbsp;
      <span style={{ color: 'rgba(236,72,153,0.95)' }}>{display}</span>
      <span
        className="inline-block w-0.5 h-[14px] ml-0.5"
        style={{
          background: 'rgba(236,72,153,0.9)',
          animation: 'cursorBlink 1s step-end infinite',
        }}
      />
      <style>{`@keyframes cursorBlink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>
    </p>
  )
}

// ── 2. Count-up stats ──────────────────────────────────────────
function useCountUp(target, delay = 600) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    const timeout = setTimeout(() => {
      let start = 0
      const step = Math.ceil(target / 40)
      const interval = setInterval(() => {
        start = Math.min(start + step, target)
        setVal(start)
        if (start >= target) clearInterval(interval)
      }, 35)
      return () => clearInterval(interval)
    }, delay)
    return () => clearTimeout(timeout)
  }, [target, delay])
  return val
}

function Stats() {
  const projects = useCountUp(12, 1000)
  const commits  = useCountUp(340, 1000)
  const techs    = useCountUp(15, 1000)

  return (
    <div
      className="flex gap-6 mt-6 pt-5"
      style={{ borderTop: '1px solid rgba(139,92,246,0.12)' }}
    >
      {[
        ['PROJECTS',     projects, '+'],
        ['COMMITS',      commits,  '+'],
        ['TECHNOLOGIES', techs,    ''],
      ].map(([label, val, suffix]) => (
        <div key={label}>
          <p
            className="text-xl font-black leading-none text-white"
            style={{ fontFamily: "'Syne','DM Sans',sans-serif" }}
          >
            {val}{suffix}
          </p>
          <p
            className="text-[9px] font-mono tracking-widest mt-1"
            style={{ color: 'rgba(139,92,246,0.5)' }}
          >
            {label}
          </p>
        </div>
      ))}
    </div>
  )
}

// ── Main Hero ──────────────────────────────────────────────────
export default function Hero() {
  const { theme } = useTheme()

  const sectionRef    = useRef(null)
  const canvasRef     = useRef(null)
  const mouseRef      = useRef({ x: -999, y: -999 })
  const particlesRef  = useRef([])
  const rafRef        = useRef(null)
  const cursorDotRef  = useRef(null)
  const cursorRingRef = useRef(null)

  // 🎵 Easter egg
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
    if (newCount === 4) console.log("Lets go")
    if (newCount === 3) {
      audioRef.current.volume = 0.15
      audioRef.current.play().catch(err => console.log(err))
      setClickCount(0)
    }
  }

  // 🎇 Particle system
  const COLORS = [
    'rgba(139,92,246,',
    'rgba(168,85,247,',
    'rgba(236,72,153,',
    'rgba(167,60,240,',
    'rgba(220,80,255,',
  ]
  const REPEL_RADIUS = 100
  const REPEL_FORCE  = 6
  const N = 110
  const rand = (a, b) => a + Math.random() * (b - a)

  const initParticles = useCallback((W, H) => {
    particlesRef.current = Array.from({ length: N }, () => ({
      x: rand(0, W), y: rand(0, H),
      ox: 0, oy: 0,
      vx: rand(-0.12, 0.12), vy: rand(-0.12, 0.12),
      r: rand(1.2, 2.8),
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      alpha: rand(0.25, 0.85),
    }))
  }, [])

  useEffect(() => {
    const canvas  = canvasRef.current
    const section = sectionRef.current
    if (!canvas || !section) return
    const ctx = canvas.getContext('2d')

    const resize = () => {
      canvas.width  = section.offsetWidth
      canvas.height = section.offsetHeight
      initParticles(canvas.width, canvas.height)
    }
    resize()
    window.addEventListener('resize', resize)

    const connect = (a, b) => {
      const dx = a.x - b.x, dy = a.y - b.y
      const d  = Math.sqrt(dx * dx + dy * dy)
      if (d < 110) {
        ctx.beginPath()
        ctx.moveTo(a.x, a.y)
        ctx.lineTo(b.x, b.y)
        ctx.strokeStyle = `rgba(139,92,246,${0.13 * (1 - d / 110)})`
        ctx.lineWidth = 0.5
        ctx.stroke()
      }
    }

    const frame = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const pts = particlesRef.current
      const mx  = mouseRef.current.x
      const my  = mouseRef.current.y

      for (let i = 0; i < pts.length; i++) {
        const p  = pts[i]
        const dx = p.x - mx, dy = p.y - my
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < REPEL_RADIUS && dist > 0) {
          const force = (REPEL_RADIUS - dist) / REPEL_RADIUS
          p.ox += (dx / dist) * force * REPEL_FORCE
          p.oy += (dy / dist) * force * REPEL_FORCE
        }

        p.ox *= 0.87; p.oy *= 0.87
        p.x  += p.vx + p.ox
        p.y  += p.vy + p.oy

        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width)  p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        for (let j = i + 1; j < pts.length; j++) connect(p, pts[j])

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = p.color + p.alpha + ')'
        ctx.fill()
      }

      rafRef.current = requestAnimationFrame(frame)
    }

    rafRef.current = requestAnimationFrame(frame)

    const handleMouseMove = e => {
      const rect = section.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      mouseRef.current = { x, y }

      if (cursorDotRef.current) {
        cursorDotRef.current.style.left    = x + 'px'
        cursorDotRef.current.style.top     = y + 'px'
        cursorDotRef.current.style.opacity = '1'
      }
      if (cursorRingRef.current) {
        cursorRingRef.current.style.left    = x + 'px'
        cursorRingRef.current.style.top     = y + 'px'
        cursorRingRef.current.style.opacity = '1'
      }
    }

    const handleMouseLeave = () => {
      mouseRef.current = { x: -999, y: -999 }
      if (cursorDotRef.current)  cursorDotRef.current.style.opacity  = '0'
      if (cursorRingRef.current) cursorRingRef.current.style.opacity = '0'
    }

    section.addEventListener('mousemove',  handleMouseMove)
    section.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', resize)
      section.removeEventListener('mousemove',  handleMouseMove)
      section.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [initParticles])

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left px-6 overflow-hidden bg-white dark:bg-[#0e0018] cursor-none"
      style={
        theme === 'dark'
          ? { backgroundImage: `url(${rocketBg})`, backgroundSize: 'cover', backgroundPosition: 'bottom' }
          : {}
      }
    >
      {/* ── Particle canvas (dark only) ── */}
      {theme === 'dark' && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 z-0 pointer-events-none"
          style={{ opacity: 0.75 }}
        />
      )}

      {/* ── Dual custom cursor ── */}
      <div
        ref={cursorDotRef}
        className="absolute pointer-events-none z-[999] w-2.5 h-2.5 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-0"
        style={{
          background: 'rgba(236,72,153,0.95)',
          boxShadow: '0 0 10px rgba(236,72,153,0.7)',
          transition: 'left 0.03s linear, top 0.03s linear, opacity 0.2s',
        }}
      />
      <div
        ref={cursorRingRef}
        className="absolute pointer-events-none z-[998] w-8 h-8 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-0"
        style={{
          border: '1px solid rgba(139,92,246,0.6)',
          transition: 'left 0.12s ease, top 0.12s ease, opacity 0.2s',
        }}
      />

      {/* ── Overlay ── */}
      <div className="absolute inset-0 z-0 bg-white dark:bg-transparent dark:bg-gradient-to-t dark:from-[#0e0018]/90 dark:via-[#0e0018]/60 dark:to-transparent" />

      {/* ── Radial glow ── */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-20 dark:opacity-30"
          style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.35) 0%, transparent 70%)' }}
        />
        <div
          className="absolute top-16 right-24 w-48 h-48 rounded-full opacity-0 dark:opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(236,72,153,0.4) 0%, transparent 70%)',
            animation: 'floatOrb 6s ease-in-out infinite',
          }}
        />
        <style>{`@keyframes floatOrb{0%,100%{transform:translateY(0)}50%{transform:translateY(-18px)}}`}</style>
      </div>

      {/* ── Profile + rings + status badge ── */}
      <div className="relative z-10 mb-6 md:mb-0 md:mr-14 flex flex-col items-center">
        <div className="relative flex items-center justify-center">
          <motion.div
            className="absolute rounded-full border border-violet-400/20 dark:border-violet-500/20"
            style={{ width: 260, height: 260 }}
            animate={{ scale: [1, 1.07, 1], opacity: [0.4, 0.15, 0.4] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute rounded-full border border-violet-400/15 dark:border-violet-400/15"
            style={{ width: 230, height: 230 }}
            animate={{ scale: [1, 1.04, 1], opacity: [0.3, 0.1, 0.3] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
          />

          <motion.img
            src={profileImg}
            alt="Pratyush Nishank"
            onClick={handleImageClick}
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
            transition={{
              opacity: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
              scale:   { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
              y:       { duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 },
            }}
            className="cursor-pointer relative z-10 w-44 h-44 md:w-52 md:h-52 rounded-full object-cover"
            style={{
              border: '3px solid rgba(139,92,246,0.6)',
              boxShadow: '0 0 0 6px rgba(139,92,246,0.08), 0 0 40px rgba(139,92,246,0.4), 0 8px 32px rgba(0,0,0,0.25)',
            }}
          />
        </div>

      </div>

      {/* Hidden audio */}
      <audio ref={audioRef} src="/On Top trim.mp3" />

      {/* ── Card ── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="z-10 max-w-lg backdrop-blur-md bg-white/80 dark:bg-white/5 border border-violet-400/20 dark:border-violet-500/20 rounded-3xl px-8 py-10"
        style={{ boxShadow: '0 8px 40px rgba(139,92,246,0.1), 0 1px 0 rgba(139,92,246,0.2) inset' }}
      >
        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7 }}
          className="text-sm tracking-[0.3em] text-violet-500/70 dark:text-violet-400/60 mb-3 font-medium flex items-center gap-2 md:justify-start justify-center"
        >
          <span className="inline-block w-5 h-px bg-violet-400/40" />
          HI, I'M
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.9 }}
          className="text-5xl md:text-7xl font-black tracking-tight leading-none mb-1"
          style={{ fontFamily: "'Syne','DM Sans',sans-serif" }}
        >
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 45%, #ec4899 100%)' }}
          >
            Pratyush
          </span>
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.9 }}
          className="text-5xl md:text-7xl font-black tracking-tight leading-none mb-5 text-gray-900 dark:text-white"
          style={{ fontFamily: "'Syne','DM Sans',sans-serif" }}
        >
          Nishank
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.7, ease: 'easeOut' }}
          className="origin-left h-px mb-4 w-32 md:mx-0 mx-auto"
          style={{ background: 'linear-gradient(90deg, rgba(139,92,246,0.7), transparent)' }}
        />

        {/* ── Typewriter ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <Typewriter />
        </motion.div>

        {/* Tagline */}
        <p
          className="text-[10px] font-mono tracking-[0.2em] mb-7 md:text-left text-center"
          style={{ color: 'rgba(213, 200, 246, 0.35)' }}
        >
          ALWAYS LEARNING · ALWAYS EVOLVING
        </p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="flex gap-3 justify-center md:justify-start flex-wrap"
        >
          <a
            href="#projects"
            className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-300"
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
              e.currentTarget.style.background   = 'rgba(139,92,246,0.12)'
              e.currentTarget.style.borderColor  = 'rgba(139,92,246,0.6)'
              e.currentTarget.style.transform    = 'translateY(-2px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background   = 'rgba(139,92,246,0.05)'
              e.currentTarget.style.borderColor  = 'rgba(139,92,246,0.35)'
              e.currentTarget.style.transform    = 'translateY(0)'
            }}
          >
            <FaEnvelope size={13} /> Contact
          </a>
        </motion.div>

        
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1.6, duration: 2, repeat: Infinity }}
        className="absolute bottom-8 flex flex-col items-center gap-2 hover:text-violet-500 transition-colors"
        style={{ color: 'rgba(139,92,246,0.45)' }}
      >
        <span className="text-[9px] uppercase tracking-[0.25em] font-mono">Scroll</span>
        <div
          className="w-px h-7"
          style={{ background: 'linear-gradient(180deg, rgba(139,92,246,0.6), transparent)' }}
        />
        <BsChevronDown size={14} />
      </motion.a>
    </section>
  )
}
