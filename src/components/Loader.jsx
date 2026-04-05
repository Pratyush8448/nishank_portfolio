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
    }, 900) // 🔥 tight + premium timing

    return () => clearTimeout(timer)
  }, [onFinish])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut", delay: 0.4 }}
      className="fixed inset-0 z-[9999] bg-black flex items-center justify-center pointer-events-none"
    >
      <motion.h1
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1], // 🔥 Apple-like easing
        }}
        className="text-3xl md:text-5xl font-semibold tracking-wide text-white"
      >
        Pratyush Nishank
      </motion.h1>
    </motion.div>
  )
}
