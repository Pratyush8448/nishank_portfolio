import { useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Loader({ onFinish }) {
  useEffect(() => {
    const isBot = /bot|crawler|spider|crawling/i.test(navigator.userAgent)

    if (isBot) {
      onFinish()
      return
    }

    const timer = setTimeout(() => {
      onFinish()
    }, 1100) // 🔥 tighter total duration

    return () => clearTimeout(timer)
  }, [onFinish])

  const words = ["Pratyush", "Pulak", "Nishank"]

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 0.8, duration: 0.3 }}
      className="fixed inset-0 z-[9999] bg-[#0e0018] flex items-center justify-center pointer-events-none"
    >
      <div className="text-3xl md:text-5xl font-extrabold flex gap-3">
        {words.map((word, index) => (
          <motion.span
            key={word}
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              delay: index * 0.2,
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1], 
            }}
            className="bg-gradient-to-r from-violet-400 via-pink-500 to-fuchsia-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(236,72,153,0.4)]"
          >
            {word}
          </motion.span>
        ))}
      </div>
    </motion.div>
  )
}
