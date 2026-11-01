import Image from 'next/image'
import Link from 'next/link'
import { iconFor } from '../iconMap'
import styles from './ProjectsSection.module.css'

export default function ProjectsSection({ projects }) {
  return (
    <section id="projects" aria-labelledby="projects-heading" className={`frame ${styles.section}`}>
      <div data-reveal>
        <h2 id="projects-heading" className="section-heading">Projects</h2>
      </div>
      <div className={styles.list}>
        {projects.map((project) => (
          <article key={project.slug} className={styles.project} data-reveal>
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className={styles.shot} tabIndex={-1}>
              <Image
                src={project.image}
                alt={`${project.name} screenshot`}
                width={1152}
                height={720}
                sizes="(min-width: 900px) 56vw, 100vw"
                className={styles.image}
              />
            </a>
            <div className={styles.copy}>
              <h3 className={styles.title}>
                <Link href={`/portfolio/${project.slug}`} className={styles.titleLink}>{project.name}</Link>
              </h3>
              <p className={styles.summary}>{project.summary}</p>
              <ul className={styles.stack}>
                {project.stack.map((tool) => {
                  const Icon = iconFor(tool.icon)
                  return (
                    <li key={tool.name}>
                      <Icon aria-hidden="true" />
                      <span>{tool.name}</span>
                    </li>
                  )
                })}
              </ul>
              <p className={styles.links}>
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="button">Live demo</a>
                <Link href={`/portfolio/${project.slug}`} className="text-link">Project page</Link>
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
