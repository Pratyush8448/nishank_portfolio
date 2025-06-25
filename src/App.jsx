import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Journey from './components/Journey'
import Contact from './components/ContactForm'

function App() {
  return (
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
  )
}

export default App
