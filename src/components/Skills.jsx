import Section from './Section'
import Reveal from './Reveal'
import LazyImage from './LazyImage'
import skillsData from '../assets/data/skills'

const groups = [
  { title: 'Languages', match: ['Programming Languages'] },
  { title: 'Frontend', match: ['Frontend'] },
  { title: 'Backend', match: ['Backend'] },
  { title: 'Tools & infrastructure', match: ['Version Control', 'Database', 'DevOps'] },
].map((g) => ({ ...g, skills: skillsData.filter((s) => g.match.includes(s.category)) }))

const Skills = () => (
  <Section id="skills" number="02" title="Skills" panel intro="The languages and tools I use most.">
    <div className="grid gap-x-16 gap-y-12 md:grid-cols-2">
      {groups.map((group, i) => (
        <Reveal key={group.title} delay={(i % 2) * 100}>
          <h3 className="mb-3 text-sm font-medium tracking-widest text-muted uppercase font-sans">{group.title}</h3>
          <ul className="border-t border-line">
            {group.skills.map((skill) => (
              <li key={skill.name} className="flex items-center gap-4 border-b border-line py-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm bg-white p-1.5">
                  <LazyImage src={skill.icon} alt="" width={28} height={28} className="h-full w-full object-contain" />
                </span>
                <span className="font-medium">{skill.name}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      ))}
    </div>
  </Section>
)

export default Skills
