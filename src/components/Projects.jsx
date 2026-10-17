import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import Section from './Section'
import Reveal from './Reveal'
import LazyImage from './LazyImage'
import projectsData from '../assets/data/projects'

const linkClass =
  'inline-flex items-center gap-2 border-b border-ink pb-0.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent'

const Projects = () => (
  <Section id="projects" number="03" title="Projects" intro="A few things I've built recently.">
    <div className="grid gap-x-10 gap-y-16 md:grid-cols-2">
      {projectsData.map((project, i) => (
        <Reveal as="article" key={project.title} delay={(i % 2) * 100}>
          <div className="aspect-[16/9] overflow-hidden rounded-sm border border-line bg-panel">
            <LazyImage
              src={project.image}
              alt={`${project.title} screenshot`}
              width={960}
              height={440}
              className="h-full w-full object-cover"
            />
          </div>
          <h3 className="mt-6 flex items-baseline justify-between gap-4 text-2xl">
            {project.title}
            {project.year && <span className="font-sans text-sm text-muted">{project.year}</span>}
          </h3>
          <p className="mt-3 leading-relaxed text-muted">{project.description}</p>
          <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted">
            {project.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
          <div className="mt-6 flex gap-6">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className={linkClass}>
                <FaGithub aria-hidden="true" /> Code
              </a>
            )}
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer" className={linkClass}>
                <FaExternalLinkAlt aria-hidden="true" size={12} /> Live demo
              </a>
            )}
          </div>
        </Reveal>
      ))}
    </div>
  </Section>
)

export default Projects
