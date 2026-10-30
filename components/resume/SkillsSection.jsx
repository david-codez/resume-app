import { Container } from 'react-bootstrap'
import { brandColorFor, iconFor } from '../iconMap'

export default function SkillsSection({ skillGroups }) {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="py-5">
      <Container>
        <h2 id="skills-heading" className="text-center mb-4">Skills</h2>
        {skillGroups.map((group) => (
          <div key={group.category} className="mb-4">
            <h3 className="h6 text-uppercase text-body-secondary mb-3">{group.category}</h3>
            <ul className="skill-grid list-unstyled mb-0">
              {group.skills.map((skill) => {
                const Icon = iconFor(skill.icon)
                const brandColor = brandColorFor(skill.icon)
                return (
                  <li
                    key={skill.name}
                    className="skill-cell d-flex flex-column align-items-center gap-2 text-center small"
                    style={brandColor ? { '--skill-brand-color': brandColor } : undefined}
                  >
                    <Icon aria-hidden="true" size="2rem" className="skill-icon" />
                    <span>{skill.name}</span>
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </Container>
    </section>
  )
}
