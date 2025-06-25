import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
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
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-4 w-full z-50 flex justify-center px-4"
    >
      <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-5 px-4 py-3 rounded-full bg-[#1a002d]/80 backdrop-blur-md shadow-xl border border-violet-700/30 max-w-[360px] w-full">
        {navItems.map((item, index) => {
          const isActive = activeSection === item.href.substring(1)
          return (
            <a
              key={index}
              href={item.href}
              className={`flex flex-col items-center justify-center text-sm min-w-[50px] ${
                isActive
                  ? 'text-violet-400 font-semibold'
                  : 'text-lavender-300 hover:text-violet-200'
              }`}
            >
              <div
                className={`text-lg mb-0.5 ${
                  isActive ? 'scale-105' : ''
                } transition-transform`}
              >
                {item.icon}
              </div>
              <span className="text-[10px] sm:text-xs">{item.name}</span>
              {isActive && (
                <motion.div
                  layoutId="underline"
                  className="mt-1 w-1.5 h-1.5 rounded-full bg-violet-500"
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
            </a>
          )
        })}
      </div>
    </motion.nav>
  )
}
