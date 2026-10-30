import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import SiteHead from '../../components/SiteHead'
import { iconFor } from '../../components/iconMap'
import projects from '../../content/projects.json'

export async function getStaticPaths() {
  return {
    paths: projects.map((project) => ({ params: { slug: project.slug } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const project = projects.find((candidate) => candidate.slug === params.slug)
  return { props: { project } }
}

export default function ProjectPage({ project }) {
  return (
    <>
      <SiteHead
        title={`${project.name} · David Daniel`}
        description={project.summary}
        path={`/portfolio/${project.slug}`}
      />
      <main>
        <Container className="py-5">
          <Link href="/#projects" className="d-inline-block mb-3">Back to projects</Link>
          <h1>{project.name}</h1>
          <p className="lead">{project.summary}</p>
          <Row className="g-4 align-items-start">
            <Col md={7}>
              <Image
                src={project.image}
                alt={`${project.name} screenshot`}
                width={960}
                height={600}
                style={{ width: '100%', height: 'auto' }}
                className="rounded border"
                priority
              />
            </Col>
            <Col md={5}>
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary mb-4">
                Open live demo
              </a>
              <h2 className="h5">Built with</h2>
              <ul className="list-inline">
                {project.stack.map((tool) => {
                  const Icon = iconFor(tool.icon)
                  return (
                    <li key={tool.name} className="list-inline-item me-3">
                      <Icon aria-hidden="true" /> {tool.name}
                    </li>
                  )
                })}
              </ul>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  )
}
