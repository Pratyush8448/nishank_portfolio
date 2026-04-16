import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ThemeToggle from "./ThemeToggle"
import {
  FaHome,
  FaUser,
  FaLaptopCode,
  FaTools,
  FaEnvelope,
} from 'react-icons/fa'

const navItems = [
  { name: 'Home', icon: <FaHome />, href: '#home' },
  { name: 'About', icon: <FaUser />, href: '#about' },
  { name: 'Projects', icon: <FaLaptopCode />, href: '#projects' },
  { name: 'Skills', icon: <FaTools />, href: '#skills' },
  { name: 'Contact', icon: <FaEnvelope />, href: '#contact' },
]

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home')
  const [hoveredItem, setHoveredItem] = useState(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { threshold: 0.6 }
    )

    navItems.forEach((item) => {
      const section = document.querySelector(item.href)
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <motion.nav
      initial={{ opacity: 0, y: -40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-4 w-full z-50 flex justify-center px-3 sm:px-4"
    >
      {/* Glow */}
      <div className="absolute w-[260px] sm:w-[320px] h-10 bg-violet-600/20 blur-2xl rounded-full pointer-events-none" />

      {/* Container */}
      <div className="relative flex items-center justify-center gap-2 sm:gap-3 w-full max-w-[92vw] sm:max-w-[480px]
        px-2 sm:px-3 py-2 rounded-full
        bg-[#0e0020]/80 backdrop-blur-xl
        border border-violet-500/20
        shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
      >

        {/* Nav Items */}
        <div className="flex items-center gap-1 sm:gap-2">
          {navItems.map((item, index) => {
            const isActive = activeSection === item.href.substring(1)
            const isHovered = hoveredItem === index

            return (
              <motion.a
                key={index}
                href={item.href}
                onHoverStart={() => setHoveredItem(index)}
                onHoverEnd={() => setHoveredItem(null)}
                className="relative flex flex-col items-center justify-center rounded-full"
                style={{
                  padding: '6px 8px',
                  minWidth: '44px',
                  textDecoration: 'none',
                  color: isActive
                    ? '#c4b5fd'
                    : 'rgba(139,92,246,0.5)',
                }}
              >
                {/* Background */}
                <AnimatePresence>
                  {(isActive || isHovered) && (
                    <motion.span
                      layoutId="navBg"
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.85 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: isActive
                          ? 'rgba(109,40,217,0.25)'
                          : 'rgba(139,92,246,0.08)',
                      }}
                    />
                  )}
                </AnimatePresence>

                {/* Icon */}
                <motion.div
                  animate={{
                    scale: isActive ? 1.15 : isHovered ? 1.08 : 1,
                  }}
                  transition={{ type: 'spring', stiffness: 500, damping: 20 }}
                  className="relative z-10 text-[14px] mb-[2px]"
                >
                  {item.icon}
                </motion.div>

                {/* Label (responsive hide on mobile) */}
                <span className="hidden sm:block relative z-10 text-[9px] tracking-wide">
                  {item.name}
                </span>

                {/* Active dot */}
                {isActive && (
                  <motion.div
                    layoutId="dot"
                    className="relative z-10 mt-[2px] w-[3px] h-[3px] rounded-full bg-violet-400"
                  />
                )}
              </motion.a>
            )
          })}
        </div>

        {/* Divider */}
        <div className="w-px h-5 bg-violet-500/20 mx-1 sm:mx-2" />

        {/* Theme Toggle */}
        <div className="scale-90 sm:scale-100">
          <ThemeToggle />
        </div>

      </div>
    </motion.nav>
  )
}