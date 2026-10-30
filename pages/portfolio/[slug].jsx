import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import SiteHead from '../../components/SiteHead'
import { iconFor } from '../../components/iconMap'
import projects from '../../content/projects.json'
import styles from './project.module.css'

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
        <Container className={styles.page}>
          <Link href="/#projects" className={styles.back}>Back to projects</Link>
          <h1 className={styles.title}>{project.name}</h1>
          <p className={styles.summary}>{project.summary}</p>
          <Row className="g-4 align-items-start">
            <Col md={7}>
              <div className={`glass-card ${styles.screenshot}`}>
                <Image
                  src={project.image}
                  alt={`${project.name} screenshot`}
                  width={960}
                  height={600}
                  className={styles.image}
                  priority
                />
              </div>
            </Col>
            <Col md={5}>
              <div className={`glass-card ${styles.panel}`}>
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn-accent ${styles.demo}`}
                >
                  Open live demo
                </a>
                <h2 className={styles.stackHeading}>Built with</h2>
                <ul className={styles.stack}>
                  {project.stack.map((tool) => {
                    const Icon = iconFor(tool.icon)
                    return (
                      <li key={tool.name} className={styles.tag}>
                        <Icon aria-hidden="true" />
                        <span>{tool.name}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  )
}
