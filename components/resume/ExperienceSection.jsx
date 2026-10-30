import { Container } from 'react-bootstrap'
import styles from './ExperienceSection.module.css'

function RoleHeading({ role }) {
  const [primaryPosition, ...earlierPositions] = role.positions
  return (
    <>
      <p className={styles.dates}>{`${role.start} – ${role.end}`}</p>
      <h3 className={styles.company}>{role.company}</h3>
      <p className={styles.position}>
        <strong>{primaryPosition}</strong>
        {role.location ? <span className={styles.location}> · {role.location}</span> : null}
      </p>
      {earlierPositions.length > 0 ? (
        <p className={styles.location}>
          <strong>Previously:</strong> {earlierPositions.join(', ')}
        </p>
      ) : null}
    </>
  )
}

function HighlightList({ highlights }) {
  return (
    <ul className={styles.highlights}>
      {highlights.map((highlight) => (
        <li key={highlight}>{highlight}</li>
      ))}
    </ul>
  )
}

export default function ExperienceSection({ roles }) {
  const [featuredRole, ...earlierRoles] = roles
  return (
    <section id="experience" aria-labelledby="experience-heading" className="site-section">
      <Container>
        <h2 id="experience-heading" className="section-title">Experience</h2>
        {featuredRole ? (
          <div className={`${styles.featuredEntry} reveal`}>
            <div className={`${styles.featured} glass-card`}>
              <RoleHeading role={featuredRole} />
              {featuredRole.highlights.length > 0 ? <HighlightList highlights={featuredRole.highlights} /> : null}
              {featuredRole.notes ? <p className={styles.notes}>{featuredRole.notes}</p> : null}
            </div>
          </div>
        ) : null}
        {earlierRoles.length > 0 ? (
          <div className="reveal">
            <p id="earlier-experience-label" className={styles.leadIn}>Earlier experience</p>
            <ul className={styles.grid} aria-labelledby="earlier-experience-label">
              {earlierRoles.map((role) => (
                <li className={`${styles.card} glass-card`} key={role.id}>
                  <RoleHeading role={role} />
                  {role.highlights.length > 0 ? <HighlightList highlights={role.highlights} /> : null}
                  {role.notes ? (
                    <details className={styles.details}>
                      <summary>Read more</summary>
                      <p className={styles.notes}>{role.notes}</p>
                    </details>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </Container>
    </section>
  )
}
