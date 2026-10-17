import { FaDownload, FaExternalLinkAlt } from 'react-icons/fa'
import Section from './Section'
import Reveal from './Reveal'
import site from '../assets/data/site'
import { experience, education, highlights } from '../assets/data/resume'

const resumeUrl = `${import.meta.env.BASE_URL}${site.resumeFile}`

const Label = ({ children }) => (
  <h3 className="mb-3 text-sm font-medium tracking-widest text-muted uppercase font-sans">{children}</h3>
)

const Entries = ({ title, items }) => (
  <div>
    <Label>{title}</Label>
    <ul className="border-t border-line">
      {items.map((item, i) => (
        <li key={i} className="border-b border-line py-5">
          <p className="font-serif text-xl">{item.title}</p>
          <p className="mt-1 text-sm text-muted">
            {item.org} &middot; {item.period}
          </p>
          {item.points?.length > 0 && (
            <ul className="mt-3 list-disc space-y-1 pl-5 text-muted">
              {item.points.map((p, j) => (
                <li key={j}>{p}</li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  </div>
)

const Resume = () => (
  <Section id="resume" number="04" title="Resume" panel>
    <div className="grid gap-12 md:grid-cols-[1fr_1.5fr] md:gap-16">
      <Reveal>
        <p className="text-lg leading-relaxed text-muted">
          A short snapshot of my background. The PDF has the full details.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={resumeUrl}
            download
            className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 font-medium text-accent-ink transition-opacity hover:opacity-90"
          >
            <FaDownload aria-hidden="true" /> Download PDF
          </a>
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-ink px-6 py-3 font-medium transition-colors hover:border-accent hover:text-accent"
          >
            <FaExternalLinkAlt aria-hidden="true" size={13} /> View online
          </a>
        </div>
      </Reveal>

      <Reveal delay={120} className="space-y-12">
        <div>
          <Label>Highlights</Label>
          <ul className="border-t border-line">
            {highlights.map((h, i) => (
              <li key={i} className="border-b border-line py-4">
                {h}
              </li>
            ))}
          </ul>
        </div>
        {experience.length > 0 && <Entries title="Experience" items={experience} />}
        {education.length > 0 && <Entries title="Education" items={education} />}
      </Reveal>
    </div>
  </Section>
)

export default Resume
