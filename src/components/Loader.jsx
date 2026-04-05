import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Lottie from 'lottie-react'
import animationData from '../assets/loader.json'

export default function Loader({ onFinish }) {
  useEffect(() => {
    const isBot = /bot|crawler|spider|crawling/i.test(navigator.userAgent)

    if (isBot) {
      onFinish()
      return
    }

    const timer = setTimeout(() => {
      onFinish()
    }, 800) // 🔥 reduced from 3000ms

    return () => clearTimeout(timer)
  }, [onFinish])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 0.5, duration: 0.4 }} // 🔥 faster fade
      className="fixed inset-0 z-[9999] bg-[#0e0018] flex flex-col items-center justify-center"
    >
      {/* Lottie Animation */}
      <div className="w-56 h-56">
        <Lottie animationData={animationData} loop />
      </div>

      {/* Name Text (helps branding, minimal SEO value) */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0, 1, 1],
        }}
        transition={{
          duration: 1.2,
          delay: 0.3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="mt-5 text-xl font-bold bg-gradient-to-r from-violet-400 via-pink-500 to-fuchsia-400 bg-clip-text text-transparent"
      >
        Pratyush Nishank
      </motion.div>
    </motion.div>
  )
}
