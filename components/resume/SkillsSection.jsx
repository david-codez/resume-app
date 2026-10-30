import { Col, Container, Row } from 'react-bootstrap'
import { iconFor } from '../iconMap'

export default function SkillsSection({ skillGroups }) {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="py-5">
      <Container>
        <h2 id="skills-heading" className="text-center mb-4">Skills</h2>
        {skillGroups.map((group) => (
          <div key={group.category} className="mb-4">
            <h3 className="h6 text-uppercase text-body-secondary text-center mb-3">{group.category}</h3>
            <Row as="ul" className="list-unstyled justify-content-center g-3 mb-0">
              {group.skills.map((skill) => {
                const Icon = iconFor(skill.icon)
                return (
                  <Col as="li" key={skill.name} xs={6} sm={4} md={3} lg={2} className="text-center">
                    <Icon aria-hidden="true" size="2.5rem" className="skill-icon" />
                    <div className="small mt-1">{skill.name}</div>
                  </Col>
                )
              })}
            </Row>
          </div>
        ))}
      </Container>
    </section>
  )
}
