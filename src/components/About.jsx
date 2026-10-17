import Section from './Section'
import Reveal from './Reveal'

const competencies = [
  'Web Development',
  'UI/UX Design',
  'Problem Solving',
  'Team Collaboration',
  'Agile Methodologies',
  'Continuous Learning',
  'System Architecture',
  'Performance Optimization',
]

const About = () => (
  <Section id="about" number="01" title="About me">
    <div className="grid gap-12 md:grid-cols-[1.4fr_1fr] md:gap-16">
      <Reveal className="space-y-5 text-lg leading-relaxed">
        <p>
          I&rsquo;m a developer driven by curiosity and a habit of building things. My journey in programming is fuelled by a
          desire to solve problems and ship useful digital products.
        </p>
        <p className="text-muted">
          Collaboration is at the heart of my work. I enjoy environments where creativity meets technical depth, and I keep
          exploring new technologies to see what&rsquo;s possible.
        </p>
        <p className="text-muted">
          My approach combines technical skills with a user-first mindset, aiming for experiences that feel intuitive.
        </p>
        <a
          href="#contact"
          className="inline-block border-b border-ink pb-0.5 font-medium transition-colors hover:border-accent hover:text-accent"
        >
          Get in touch &rarr;
        </a>
      </Reveal>

      <Reveal delay={120}>
        <h3 className="mb-4 text-sm font-medium tracking-widest text-muted uppercase font-sans">What I bring</h3>
        <ul className="border-t border-line">
          {competencies.map((c) => (
            <li key={c} className="border-b border-line py-3">
              {c}
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  </Section>
)

export default About
