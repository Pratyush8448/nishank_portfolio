import { motion } from 'framer-motion'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
)

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

export default function Contact() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm(
      'service_wuhif2m',
      'template_rqfy8vn',
      form.current,
      'naR8-pTHdE-6LTgtp'
    )
    .then(() => {
      alert("Message sent successfully!")
    })
    .catch(() => {
      alert("Failed to send message")
    })
  }

  return (
    <section className="relative py-24 px-6 bg-white dark:bg-[#0e0018] text-center overflow-hidden transition-colors duration-300">

      {/* Background blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-violet-300/20 dark:bg-violet-600/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[200px] rounded-full bg-indigo-300/10 dark:bg-indigo-500/10 blur-2xl" />
      </div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        className="relative mb-14"
      >
        <p className="text-sm font-semibold tracking-widest uppercase text-violet-500 dark:text-violet-400 mb-3">
          Contact
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
          Get in Touch
        </h2>
        <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500" />
      </motion.div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, ease: 'easeOut' }}
        className="relative max-w-xl mx-auto"
      >
        {/* Glow ring */}
        <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-violet-500/30 via-indigo-500/20 to-transparent dark:from-violet-500/20 dark:via-indigo-500/10 blur-sm pointer-events-none" />

        <div className="relative rounded-3xl bg-white/90 dark:bg-white/[0.03] backdrop-blur-xl border border-violet-200/60 dark:border-violet-500/15 p-8 md:p-10">

          <form ref={form} onSubmit={sendEmail} className="space-y-5 text-left">

            <div className="space-y-1.5">
              <label className="text-xs font-semibold tracking-widest uppercase text-gray-500 dark:text-gray-400">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-white/5 border border-transparent focus:border-violet-400 dark:focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-400/20 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 transition-all duration-200"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold tracking-widest uppercase text-gray-500 dark:text-gray-400">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Gmail"
                required
                className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-white/5 border border-transparent focus:border-violet-400 dark:focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-400/20 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 transition-all duration-200"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold tracking-widest uppercase text-gray-500 dark:text-gray-400">
                Message
              </label>
              <textarea
                name="message"
                placeholder="Hey...How can I help you with?"
                rows={5}
                required
                className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-white/5 border border-transparent focus:border-violet-400 dark:focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-400/20 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 transition-all duration-200 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-violet-600 hover:bg-violet-500 active:scale-[0.98] text-white font-semibold text-sm tracking-wide transition-all duration-200 shadow-lg shadow-violet-500/25"
            >
              Send Message
            </button>

          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-gray-200 dark:bg-white/10" />
            <span className="text-xs text-gray-400 dark:text-gray-600 tracking-widest uppercase">
              Find me on
            </span>
            <div className="flex-1 h-px bg-gray-200 dark:bg-white/10" />
          </div>

          <div className="flex items-center justify-center gap-4">

          <a
            href="https://github.com/Pratyush8448"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 hover:bg-gray-900 hover:text-white hover:border-gray-900 dark:hover:bg-white dark:hover:text-gray-900 active:scale-95 transition-all duration-200 text-sm font-medium"
          >
            <GitHubIcon />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/pratyush-pulak-nishank-02a10b311?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-blue-600 dark:text-blue-400 hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] dark:hover:bg-[#0A66C2] dark:hover:text-white active:scale-95 transition-all duration-200 text-sm font-medium"
          >
            <LinkedInIcon />
            LinkedIn
          </a>

        </div>

        </div>
      </motion.div>

    </section>
  )
}