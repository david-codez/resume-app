import Image from 'next/image'
import { Card, Col, Container, Row } from 'react-bootstrap'

export default function EducationSection({ schools }) {
  return (
    <section id="education" aria-labelledby="education-heading" className="py-5">
      <Container>
        <h2 id="education-heading" className="text-center mb-4">Education</h2>
        <Row className="g-4 justify-content-center">
          {schools.map((school) => (
            <Col key={school.id} sm={8} md={6} lg={4}>
              <Card className="h-100">
                {school.image ? (
                  <Image
                    src={school.image}
                    alt={`${school.school} graduation photo`}
                    width={800}
                    height={600}
                    className="card-img-top"
                    style={{ height: 'auto' }}
                  />
                ) : null}
                <Card.Body>
                  <Card.Title as="h3" className="h5">{school.credential}</Card.Title>
                  {school.major ? <Card.Text className="mb-1">{school.major}</Card.Text> : null}
                  <Card.Subtitle className="mb-2">{school.school}</Card.Subtitle>
                  {school.location ? <Card.Text className="text-body-secondary mb-1">{school.location}</Card.Text> : null}
                  <Card.Text className="text-body-secondary">{`${school.start} – ${school.end}`}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}
