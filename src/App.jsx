import { useState, useEffect } from 'react'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Journey from './components/Journey'
import Contact from './components/ContactForm'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2800) // Splash lasts ~2.8s
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <main className="bg-black text-white min-h-screen font-inter">
          <Navbar />

          <section id="home">
            <Hero />
          </section>

          <section id="about">
            <AboutMe />
          </section>

          <section id="projects">
            <Projects />
          </section>

          <section id="skills">
            <Skills />
          </section>

          <section id="journey">
            <Journey />
          </section>

          <section id="contact">
            <Contact />
          </section>
        </main>
      )}
    </>
  )
}

export default App
