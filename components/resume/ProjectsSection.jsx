import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { iconFor } from '../iconMap'
import styles from './ProjectsSection.module.css'

export default function ProjectsSection({ projects }) {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="site-section">
      <Container>
        <h2 id="projects-heading" className="section-title">Projects</h2>
        <Row className="g-4 reveal">
          {projects.map((project) => (
            <Col key={project.slug} md={6} lg={4}>
              <article className={`glass-card glass-card-interactive position-relative h-100 ${styles.card}`}>
                <div className={styles.frame}>
                  <Image
                    src={project.image}
                    alt={`${project.name} screenshot`}
                    width={640}
                    height={400}
                    className={styles.screenshot}
                  />
                </div>
                <div className={styles.body}>
                  <h3 className={styles.name}>
                    <Link href={`/portfolio/${project.slug}`} className={`stretched-link ${styles.link}`}>
                      {project.name}
                    </Link>
                  </h3>
                  <p className={styles.summary}>{project.summary}</p>
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
              </article>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}
