import Image from 'next/image'
import { Container } from 'react-bootstrap'
import styles from './EducationSection.module.css'

export default function EducationSection({ schools }) {
  return (
    <section id="education" aria-labelledby="education-heading" className="site-section">
      <Container>
        <h2 id="education-heading" className="section-title">Education</h2>
        <ul className={`${styles.list} reveal`}>
          {schools.map((school) => (
            <li key={school.id} className={`${styles.entry} glass-card`}>
              {school.image ? (
                <span className={styles.photoRing}>
                  <Image
                    src={school.image}
                    alt={`${school.school} graduation photo`}
                    width={72}
                    height={72}
                    className={styles.photo}
                  />
                </span>
              ) : null}
              <div className={styles.details}>
                <h3 className={styles.credential}>{school.credential}</h3>
                {school.major ? <p className={styles.major}>{school.major}</p> : null}
                <p className={styles.school}>{school.school}</p>
                <p className={styles.meta}>
                  {school.location ? <span>{school.location}</span> : null}
                  <span>{`${school.start} – ${school.end}`}</span>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
