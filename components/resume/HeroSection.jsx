import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import { FaDownload, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { iconFor } from '../iconMap'

export default function HeroSection({ profile }) {
  return (
    <header className="py-5">
      <Container>
        <Row className="align-items-center g-4">
          <Col md={4} className="text-center">
            <Image
              src={profile.headshot}
              alt={`Portrait of ${profile.name}`}
              width={240}
              height={240}
              className="rounded-circle"
              priority
            />
          </Col>
          <Col md={8}>
            <h1 className="display-4 mb-1">{profile.name}</h1>
            <p className="h3 text-body-secondary mb-2">{profile.title}</p>
            <p className="mb-3">
              <FaMapMarkerAlt aria-hidden="true" /> {profile.location}
            </p>
            <p className="lead">{profile.summary}</p>
            {profile.about ? <p>{profile.about}</p> : null}
            <div className="d-flex flex-wrap gap-2 mb-3">
              <a href={profile.resumePdf} className="btn btn-primary">
                <FaDownload aria-hidden="true" /> Download resume (PDF)
              </a>
              <a href={`mailto:${profile.email}`} className="btn btn-outline-light">
                <FaEnvelope aria-hidden="true" /> Email me
              </a>
            </div>
            <ul className="list-inline mb-0">
              {profile.social.map((link) => {
                const Icon = iconFor(link.icon)
                return (
                  <li key={link.url} className="list-inline-item">
                    <a
                      href={link.url}
                      aria-label={link.label}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                    >
                      <Icon size="1.75rem" aria-hidden="true" />
                    </a>
                  </li>
                )
              })}
            </ul>
          </Col>
        </Row>
      </Container>
    </header>
  )
}
