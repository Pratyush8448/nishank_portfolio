import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { BsChevronDown } from 'react-icons/bs'
import { FaEnvelope, FaCode } from 'react-icons/fa'
import profileImg from '../assets/pratyush.JPG'
import rocketBg from '../assets/rocket-bg.png'
import { useTheme } from "../theme"

export default function Hero() {
  const { theme } = useTheme()

  // 🎵 Easter Egg Logic
  const [clickCount, setClickCount] = useState(0)
  const lastClickTime = useRef(0)
  const audioRef = useRef(null)

  const handleImageClick = () => {
  const now = Date.now();

  // Reset if too slow
  if (now - lastClickTime.current > 1500) {
    setClickCount(1);
  } else {
    setClickCount(prev => prev + 1);
  }

  lastClickTime.current = now;

  const newCount = clickCount + 1;

  // 🔴 Stop on 2 clicks
  if (newCount === 2 && !audioRef.current.paused) {
    console.log("Stopping audio...");
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    setClickCount(0);
    return;
  }

  // 🟡 Hint on 4 clicks
  if (newCount === 4) {
    console.log("Lets go");
  }

  // 🟢 Play on 5 clicks
  if (newCount === 5) {
    console.log("Playing audio...");
    audioRef.current.volume = 0.15;
    audioRef.current.play().catch(err => console.log(err));
    setClickCount(0);
  }
};

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

      {/* Profile Image */}
      <motion.img
        src={profileImg}
        alt="Pratyush Nishank"
        onClick={handleImageClick}   
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="cursor-pointer w-40 h-40 md:w-56 md:h-56 rounded-full object-cover border-4 border-violet-500 shadow-[0_0_25px_rgba(139,92,246,0.8)] mb-6 md:mb-0 md:mr-10 z-10"
      />

      {/* Hidden Audio */}
      <audio ref={audioRef} src="/On Top trim.mp3" />

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 max-w-xl backdrop-blur-md bg-white/80 dark:bg-white/5 border border-violet-500/30 rounded-3xl px-8 py-10 shadow-xl"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-2xl md:text-3xl text-gray-700 dark:text-lavender-300 mb-2"
        >
          Hi, I’m
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight"
        >
          <span className="bg-gradient-to-r from-violet-500 via-pink-500 to-fuchsia-500 dark:from-violet-400 dark:via-pink-500 dark:to-fuchsia-400 bg-clip-text text-transparent">
            Pratyush
          </span>{' '}
          <span className="text-black dark:text-white">Nishank</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-lg md:text-xl mt-4 text-gray-700 dark:text-gray-300"
        >
          Always Learning · Always Evolving        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 1 }}
          className="mt-6 flex gap-4 justify-center md:justify-start"
        >
          <a href="#projects" className="flex items-center gap-2 px-5 py-3 rounded-xl bg-violet-500 text-white dark:text-black hover:bg-violet-600 transition-all shadow-lg">
            <FaCode /> View Projects
          </a>

          <a href="#contact" className="flex items-center gap-2 px-5 py-3 rounded-xl border border-violet-400 text-violet-600 dark:text-violet-300 hover:bg-violet-500 hover:text-white dark:hover:text-black transition-all shadow-lg">
            <FaEnvelope /> Contact
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 text-violet-600 dark:text-violet-300 text-2xl"
      >
        <BsChevronDown />
      </motion.a>
    </section>
  )
}