import { Accordion, Container } from 'react-bootstrap'

export default function ExperienceSection({ roles }) {
  const newestRoleId = roles.length > 0 ? roles[0].id : undefined
  return (
    <section id="experience" aria-labelledby="experience-heading" className="py-5">
      <Container>
        <h2 id="experience-heading" className="text-center mb-4">Experience</h2>
        <Accordion defaultActiveKey={[newestRoleId]} alwaysOpen>
          {roles.map((role) => {
            const [primaryPosition, ...earlierPositions] = role.positions
            return (
              <Accordion.Item eventKey={role.id} key={role.id}>
                <Accordion.Header>
                  <span className="d-flex flex-column flex-sm-row justify-content-between w-100 me-3 gap-1">
                    <span>
                      <strong>{primaryPosition}</strong>
                      {' · '}
                      <span>{role.company}</span>
                      {role.location ? <span className="text-body-secondary"> · {role.location}</span> : null}
                    </span>
                    <span className="text-body-secondary text-nowrap">{`${role.start} – ${role.end}`}</span>
                  </span>
                </Accordion.Header>
                <Accordion.Body>
                  {earlierPositions.length > 0 ? (
                    <p className="text-body-secondary">
                      <strong>Previously:</strong> {earlierPositions.join(', ')}
                    </p>
                  ) : null}
                  {role.highlights.length > 0 ? (
                    <>
                      <h4 className="h6 text-uppercase">Highlights</h4>
                      <ul>
                        {role.highlights.map((highlight) => (
                          <li key={highlight}>{highlight}</li>
                        ))}
                      </ul>
                    </>
                  ) : null}
                  {role.notes ? (
                    <>
                      <h4 className="h6 text-uppercase">Notes</h4>
                      <p className="mb-0">{role.notes}</p>
                    </>
                  ) : null}
                </Accordion.Body>
              </Accordion.Item>
            )
          })}
        </Accordion>
      </Container>
    </section>
  )
}
