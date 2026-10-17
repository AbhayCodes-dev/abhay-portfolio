import Reveal from './Reveal'

/** Shared wrapper: numbered label, serif heading, optional intro. `panel` gives the section a solid tinted background. */
const Section = ({ id, number, title, intro, panel = false, children }) => (
  <section id={id} className={`py-20 sm:py-28 ${panel ? 'bg-panel' : ''}`}>
    <div className="mx-auto max-w-5xl px-5 sm:px-8">
      <Reveal className="mb-12 max-w-2xl">
        <p className="mb-3 text-sm font-medium tracking-widest text-accent">{number}</p>
        <h2 className="text-3xl sm:text-4xl">{title}</h2>
        {intro && <p className="mt-4 text-lg text-muted">{intro}</p>}
      </Reveal>
      {children}
    </div>
  </section>
)

export default Section
