import { useEffect, useState } from 'react'
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa'

const links = [
  { name: 'About', id: 'about' },
  { name: 'Skills', id: 'skills' },
  { name: 'Projects', id: 'projects' },
  { name: 'Resume', id: 'resume' },
  { name: 'Contact', id: 'contact' },
]

const Navbar = ({ darkMode, toggleTheme }) => {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  // Highlight the link of the section currently under the header
  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      let current = ''
      for (const { id } of links) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 120) current = id
      }
      setActive(current)
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  const linkClass = (id) =>
    `transition-colors hover:text-accent ${active === id ? 'text-accent' : 'text-ink'}`

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:rounded-md focus:bg-accent focus:px-3 focus:py-2 focus:text-accent-ink"
      >
        Skip to content
      </a>
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 sm:px-8" aria-label="Main">
        <a href="#home" className="font-serif text-2xl font-medium tracking-tight">
          Abhay<span className="text-accent">.</span>
        </a>

        <div className="flex items-center gap-1 sm:gap-2">
          <ul className="hidden items-center gap-8 text-[15px] font-medium md:flex">
            {links.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} className={linkClass(l.id)} aria-current={active === l.id ? 'true' : undefined}>
                  {l.name}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={darkMode ? 'Switch to light theme' : 'Switch to dark theme'}
            className="ml-2 flex h-10 w-10 items-center justify-center rounded-md text-ink transition-colors hover:text-accent md:ml-6"
          >
            {darkMode ? <FaSun aria-hidden="true" /> : <FaMoon aria-hidden="true" />}
          </button>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="flex h-10 w-10 items-center justify-center rounded-md text-ink transition-colors hover:text-accent md:hidden"
          >
            {open ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-line bg-bg md:hidden">
          <ul className="mx-auto max-w-5xl px-5 py-2 sm:px-8">
            {links.map((l) => (
              <li key={l.id} className="border-b border-line last:border-b-0">
                <a href={`#${l.id}`} onClick={() => setOpen(false)} className={`block py-4 text-lg font-medium ${linkClass(l.id)}`}>
                  {l.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}

export default Navbar
