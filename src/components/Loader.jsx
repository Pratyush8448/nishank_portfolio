import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Loader({ onFinish }) {
  const [progress, setProgress] = useState(0)
  const [label, setLabel] = useState('INITIALIZING')
  const [stats, setStats] = useState({ sys: '——', net: '——', mem: '——' })
  const [done, setDone] = useState(false)
  const rafRef = useRef(null)
  const progressRef = useRef(0)
  const lastTimeRef = useRef(null)

  const words = ['Pratyush', 'Pulak', 'Nishank']

  const labelMilestones = [
    { at: 0,  text: 'BOOTING CORE' },
    { at: 20, text: 'LOADING ASSETS' },
    { at: 40, text: 'SYNCING ENV' },
    { at: 60, text: 'RESOLVING NET' },
    { at: 80, text: 'MOUNT COMPLETE' },
    { at: 95, text: 'INIT DONE' },
  ]

  const tickerItems = [
    'BOOTING CORE', 'LOADING ASSETS', 'INIT SEQUENCE',
    'SYNCING DATA',  'RESOLVING DNS',  'MOUNTING FS',
  ]

 useEffect(() => {
  const isBot = /bot|crawler|spider|crawling/i.test(navigator.userAgent)
  if (isBot) { onFinish(); return }

  // ✅ Remove the fixed setTimeout — let the RAF loop call onFinish instead
  const step = (ts) => {
    if (!lastTimeRef.current) lastTimeRef.current = ts
    const delta = ts - lastTimeRef.current
    lastTimeRef.current = ts

    const speed = progressRef.current < 80 ? 0.045 : 0.018
    progressRef.current = Math.min(100, progressRef.current + speed * delta)
    const p = progressRef.current

    setProgress(p)
    // ... your label/stats updates

    if (p < 100) {
      rafRef.current = requestAnimationFrame(step)
    } else {
      setLabel('LAUNCH READY')
      setStats({ sys: '100%', net: '100%', mem: '100%' })
      setTimeout(() => {
        setDone(true)
        setTimeout(onFinish, 400) // ✅ onFinish fires AFTER the fade-out
      }, 600) // ✅ 600ms pause at 100% before fading
    }
  }

  rafRef.current = requestAnimationFrame(step)

  return () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current)
  }
}, [onFinish])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
          style={{ background: '#060010' }}
        >
          {/* Grid background */}
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(120,0,255,0.07) 1px, transparent 1px),
              linear-gradient(90deg, rgba(120,0,255,0.07) 1px, transparent 1px)
            `,
            backgroundSize: '32px 32px',
          }} />

          {/* Vignette */}
          <div className="absolute inset-0" style={{
            background: 'radial-gradient(ellipse at center, transparent 40%, #060010 100%)',
          }} />

          {/* Scan line */}
          <div className="absolute left-0 right-0 h-px pointer-events-none" style={{
            background: 'linear-gradient(90deg, transparent, rgba(180,80,255,0.3), rgba(255,80,220,0.5), rgba(180,80,255,0.3), transparent)',
            animation: 'scanline 3s linear infinite',
          }} />

          {/* Corner brackets */}
          {[
            'top-3 left-3',
            'top-3 right-3 rotate-90',
            'bottom-3 left-3 -rotate-90',
            'bottom-3 right-3 rotate-180',
          ].map((pos, i) => (
            <svg key={i} className={`absolute w-8 h-8 opacity-40 ${pos}`} viewBox="0 0 32 32" fill="none">
              <path d="M2 18 L2 2 L18 2" stroke="#b060ff" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          ))}

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center" style={{ width: 320 }}>
            {/* Names */}
            <div className="flex gap-3 mb-7">
              {words.map((word, i) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.3, duration: 0.3, ease: 'easeOut' }}
                  style={{
                    fontSize: 28,
                    fontWeight: 800,
                    background: 'linear-gradient(135deg, #b060ff 0%, #ff50d0 50%, #ff80c0 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    letterSpacing: 1,
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </div>

            {/* Label & percent */}
            <div className="flex justify-between w-full mb-2">
              <span style={{
                fontSize: 9, letterSpacing: 3,
                color: 'rgba(180,80,255,0.7)',
                fontFamily: 'monospace',
              }}>
                {label}
              </span>
              <span style={{
                fontSize: 13, fontFamily: 'monospace', fontWeight: 700,
                color: '#e060ff', letterSpacing: 1,
              }}>
                {Math.round(progress)}%
              </span>
            </div>

            {/* Loading bar */}
            <div className="w-full relative" style={{
              height: 6,
              background: 'rgba(100,0,180,0.15)',
              borderRadius: 99,
              border: '1px solid rgba(160,40,255,0.2)',
            }}>
              <div style={{
                position: 'absolute', inset: 1,
                background: 'rgba(255,255,255,0.02)',
                borderRadius: 99, overflow: 'hidden',
              }}>
                <div style={{
                  height: '100%',
                  width: `${progress}%`,
                  borderRadius: 99,
                  background: 'linear-gradient(90deg, #6010c0, #b040ff, #ff50d8, #ff80c8)',
                  position: 'relative',
                  transition: 'width 0.04s linear',
                }}>
                  {/* Glowing tip */}
                  <div style={{
                    position: 'absolute', right: -1, top: '50%',
                    transform: 'translateY(-50%)',
                    width: 3, height: 10,
                    background: '#fff',
                    borderRadius: 2,
                    boxShadow: '0 0 6px #ff80ff',
                  }} />
                  {/* Pulse glow */}
                  <div style={{
                    position: 'absolute', right: 0, top: '50%',
                    transform: 'translateY(-50%)',
                    width: 20, height: 20,
                    borderRadius: '50%',
                    background: 'rgba(255,100,220,0.6)',
                    filter: 'blur(6px)',
                    animation: 'pulseGlow 0.8s ease-in-out infinite',
                  }} />
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="flex justify-between w-full mt-2">
              {[['SYS', stats.sys], ['NET', stats.net], ['MEM', stats.mem]].map(([k, v]) => (
                <span key={k} style={{
                  fontSize: 9, fontFamily: 'monospace',
                  color: 'rgba(160,80,220,0.5)', letterSpacing: 1,
                }}>
                  {k} <span style={{ color: 'rgba(220,120,255,0.8)' }}>{v}</span>
                </span>
              ))}
            </div>

            {/* Ticker */}
            <div className="w-full overflow-hidden mt-5" style={{
              borderTop: '1px solid rgba(120,0,200,0.2)',
              borderBottom: '1px solid rgba(120,0,200,0.2)',
              padding: '4px 0',
            }}>
              <div style={{
                display: 'flex', whiteSpace: 'nowrap', width: 'max-content',
                animation: 'ticker 8s linear infinite',
              }}>
                {[...tickerItems, ...tickerItems].map((t, i) => (
                  <span key={i} style={{
                    fontSize: 8, fontFamily: 'monospace',
                    color: 'rgba(160,80,220,0.4)',
                    letterSpacing: 2, padding: '0 16px',
                  }}>
                    // {t} //
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Global keyframes */}
          <style>{`
            @keyframes scanline {
              0% { top: -2px; }
              100% { top: 100%; }
            }
            @keyframes pulseGlow {
              0%, 100% { opacity: 0.4; }
              50% { opacity: 1; }
            }
            @keyframes ticker {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
