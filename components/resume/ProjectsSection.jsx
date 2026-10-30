import Image from 'next/image'
import Link from 'next/link'
import { Card, Col, Container, Row } from 'react-bootstrap'

export default function ProjectsSection({ projects }) {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="py-5">
      <Container>
        <h2 id="projects-heading" className="text-center mb-4">Projects</h2>
        <Row className="g-4 justify-content-center">
          {projects.map((project) => (
            <Col key={project.slug} sm={6} lg={4}>
              <Card className="h-100">
                <Image
                  src={project.image}
                  alt={`${project.name} screenshot`}
                  width={640}
                  height={400}
                  className="card-img-top"
                  style={{ height: 'auto' }}
                />
                <Card.Body>
                  <Card.Title as="h3" className="h5">
                    <Link href={`/portfolio/${project.slug}`} className="stretched-link text-decoration-none">
                      {project.name}
                    </Link>
                  </Card.Title>
                  <Card.Text>{project.summary}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}
