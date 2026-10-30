import { Col, Container, Row } from 'react-bootstrap'
import { brandColorFor, iconFor } from '../iconMap'
import styles from './SkillsSection.module.css'

export default function SkillsSection({ skillGroups }) {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="site-section">
      <Container>
        <h2 id="skills-heading" className="section-title">Skills</h2>
        <Row className="reveal g-4">
          {skillGroups.map((group, groupIndex) => (
            <Col key={group.category} lg={groupIndex === skillGroups.length - 1 && skillGroups.length % 2 === 1 ? 12 : 6}>
              <div className="glass-card h-100 p-4">
                <h3 className={styles.categoryTitle}>{group.category}</h3>
                <ul className={`${styles.skillGrid} list-unstyled mb-0`}>
                  {group.skills.map((skill) => {
                    const Icon = iconFor(skill.icon)
                    const brandColor = brandColorFor(skill.icon)
                    return (
                      <li
                        key={skill.name}
                        className={styles.skillCell}
                        style={brandColor ? { '--skill-brand-color': brandColor } : undefined}
                      >
                        <Icon aria-hidden="true" size="1.75rem" className={styles.skillIcon} />
                        <span className={styles.skillName}>{skill.name}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}
