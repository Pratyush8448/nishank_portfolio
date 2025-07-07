import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Lottie from 'lottie-react'
import animationData from '../assets/loader.json' // Make sure this path is correct

export default function Loader({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish()
    }, 3000) // Matches Lottie animation duration
    return () => clearTimeout(timer)
  }, [onFinish])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2.5, duration: 0.5 }}
      className="fixed inset-0 z-[9999] bg-[#0e0018] flex flex-col items-center justify-center"
    >
      {/* Lottie Animation */}
      <div className="w-64 h-64">
        <Lottie animationData={animationData} loop />
      </div>

      {/* Pulsing Name Text */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0, 1, 1],
        }}
        transition={{
          duration: 1.5,
          delay: 1,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="mt-6 text-2xl font-bold bg-gradient-to-r from-violet-400 via-pink-500 to-fuchsia-400 bg-clip-text text-transparent"
      >
        Pratyush Nishank
      </motion.div>
    </motion.div>
  )
}
