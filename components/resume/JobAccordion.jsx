import { Accordion, Col, Row } from 'react-bootstrap'

export default function JobAccordion({ job }) {
  const dateString = `${job.startYear} – ${job.endYear}`
  return (
    <Accordion.Item eventKey={String(job.id)} className="job-accordion">
      <Accordion.Header>
        <span className="d-flex justify-content-between w-100 me-3">
          <span>{job.company}</span>
          <span className="text-body-secondary">{dateString}</span>
        </span>
      </Accordion.Header>
      <Accordion.Body>
        <Row>
          <Col>
            <h5 className="accordion-header">Position(s):</h5>
            <ul>
              {job.position.map((position) => (
                <li key={position}>{position}</li>
              ))}
            </ul>
          </Col>
          <Col>
            <h5 className="accordion-header">Job Description:</h5>
            <p>{job.description}</p>
          </Col>
          <Col>
            <h5 className="accordion-header">Notes:</h5>
            <p>{job.personalNotes}</p>
          </Col>
        </Row>
      </Accordion.Body>
    </Accordion.Item>
  )
}
