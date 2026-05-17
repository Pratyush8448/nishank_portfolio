import { useState, useEffect } from 'react'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Journey from './components/Journey'
import Contact from './components/ContactForm'
import Spaceship from "./components/Spaceship";
import GithubStats from "./components/GithubStats"; 
import Certificates from './components/certificates'


import ThemeToggle from './components/ThemeToggle'
import { useTheme } from './theme'

function App() {
  const [loading, setLoading] = useState(true)

  useTheme() // 🔥 activate theme system

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2800) // 🔥 reduced (better UX + SEO)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {loading ? (
        <Loader onFinish={() => setLoading(false)} />
      ) : (
        <main className="bg-white text-black dark:bg-[#0e0018] dark:text-white min-h-screen font-inter transition-colors duration-300">

          <Spaceship />


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

          <section id="github">
            <GithubStats />
          </section>

          <section id="skills">
            <Skills />
          </section>

          {/* Certificates */}
          <section id="certificates">
            <Certificates />
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
