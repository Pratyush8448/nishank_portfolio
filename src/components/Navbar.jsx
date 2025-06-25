// --- FILE: src/components/Navbar.jsx ---
import { motion } from 'framer-motion'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#0e0016] bg-opacity-80 backdrop-blur-md shadow-lg"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-violet-400 tracking-wide">Pratyush Pulak Nishank</h1>
        <ul className="flex space-x-6 text-lavender-300 font-medium text-sm md:text-base">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="hover:text-violet-400 transition-colors duration-300"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  )
}