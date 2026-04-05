import { motion } from 'framer-motion'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

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
    <section className="py-20 px-6 bg-white dark:bg-[#14001f] text-center">

      <h2 className="text-4xl font-bold mb-12">Get in Touch</h2>

      <form ref={form} onSubmit={sendEmail} className="max-w-xl mx-auto space-y-6">

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full p-3 bg-gray-100 dark:bg-[#1f0030] rounded-lg"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full p-3 bg-gray-100 dark:bg-[#1f0030] rounded-lg"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          required
          className="w-full p-3 bg-gray-100 dark:bg-[#1f0030] rounded-lg"
        />

        <button
          type="submit"
          className="px-6 py-3 bg-violet-500 text-white rounded-lg"
        >
          Send Message
        </button>

      </form>
    </section>
  )
}