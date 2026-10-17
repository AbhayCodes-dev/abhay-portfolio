import { useState, useEffect, lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

// Below-the-fold sections are code-split with React.lazy: each one is its own JS chunk,
// fetched after the hero has painted instead of being part of the first bundle.
const About = lazy(() => import('./components/About'))
const Skills = lazy(() => import('./components/Skills'))
const Projects = lazy(() => import('./components/Projects'))
const Resume = lazy(() => import('./components/Resume'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))

const SectionFallback = () => (
  <div className="flex min-h-[50vh] items-center justify-center" role="status" aria-label="Loading section">
    <div className="h-7 w-7 animate-spin rounded-full border-2 border-accent border-t-transparent" />
  </div>
)

const applyTheme = (dark) => document.documentElement.classList.toggle('dark', dark)

function App() {
  // The initial theme is set by a tiny inline script in index.html (no flash on load)
  const [darkMode, setDarkMode] = useState(() => document.documentElement.classList.contains('dark'))

  const toggleTheme = () => {
    const next = !darkMode
    setDarkMode(next)
    applyTheme(next)
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light')
    } catch {
      /* storage unavailable (private mode): theme just won't persist */
    }
  }

  // Follow the system theme until the visitor picks one themselves
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = (e) => {
      let saved = null
      try {
        saved = localStorage.getItem('theme')
      } catch {
        /* ignore */
      }
      if (saved === null) {
        setDarkMode(e.matches)
        applyTheme(e.matches)
      }
    }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return (
    <>
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      <main id="main">
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <About />
          <Skills />
          <Projects />
          <Resume />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  )
}

export default App
