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

export default function ExperienceSection({ roles }) {
  const [featuredRole, ...earlierRoles] = roles
  return (
    <section id="experience" aria-labelledby="experience-heading" className="site-section">
      <Container>
        <h2 id="experience-heading" className="section-title">Experience</h2>
        {featuredRole ? (
          <ol className={`${styles.timeline} reveal`}>
            <li className={styles.entry}>
              <div className={`${styles.featured} glass-card`}>
                <RoleHeading role={featuredRole} />
                {featuredRole.highlights.length > 0 ? (
                  <ul className={styles.highlights}>
                    {featuredRole.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                ) : null}
                {featuredRole.notes ? <p className={styles.notes}>{featuredRole.notes}</p> : null}
              </div>
            </li>
            {earlierRoles.map((role) => (
              <li className={styles.entry} key={role.id}>
                <div className={styles.compact}>
                  <RoleHeading role={role} />
                  {role.highlights.length > 0 ? (
                    <ul className={styles.highlights}>
                      {role.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  ) : null}
                  {role.notes ? (
                    <details className={styles.details}>
                      <summary>Read more</summary>
                      <p className={styles.notes}>{role.notes}</p>
                    </details>
                  ) : null}
                </div>
              </li>
            ))}
          </ol>
        ) : null}
      </Container>
    </section>
  )
}
