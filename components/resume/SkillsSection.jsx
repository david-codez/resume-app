import { Col, Container, Row } from 'react-bootstrap'
import { brandColorFor, iconFor } from '../iconMap'

export default function SkillsSection({ skillGroups }) {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="py-5">
      <Container>
        <h2 id="skills-heading" className="text-center mb-4">Skills</h2>
        {skillGroups.map((group) => (
          <Row key={group.category} className="mb-3 align-items-md-center">
            <Col xs={12} md={3}>
              <h3 className="h6 text-uppercase text-body-secondary mb-2 mb-md-0">{group.category}</h3>
            </Col>
            <Col xs={12} md={9}>
              <ul className="list-unstyled d-flex flex-wrap gap-2 mb-0">
                {group.skills.map((skill) => {
                  const Icon = iconFor(skill.icon)
                  const brandColor = brandColorFor(skill.icon)
                  return (
                    <li
                      key={skill.name}
                      className="skill-chip d-inline-flex align-items-center gap-2 border rounded-pill px-3 py-1 small text-nowrap"
                      style={brandColor ? { '--skill-brand-color': brandColor } : undefined}
                    >
                      <Icon aria-hidden="true" size="1.25rem" className="skill-icon" />
                      <span>{skill.name}</span>
                    </li>
                  )
                })}
              </ul>
            </Col>
          </Row>
        ))}
      </Container>
    </section>
  )
}
