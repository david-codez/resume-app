import Image from 'next/image'
import styles from './EducationSection.module.css'

export default function EducationSection({ schools }) {
  return (
    <section id="education" aria-labelledby="education-heading" className={`frame ${styles.section}`}>
      <div data-reveal>
        <h2 id="education-heading" className={`section-heading ${styles.heading}`}>Education</h2>
      </div>
      <ul className={styles.list}>
        {schools.map((school) => (
          <li key={school.id} className={styles.entry} data-reveal>
            {school.image ? (
              <Image
                src={school.image}
                alt={`${school.school} graduation photo`}
                width={800}
                height={600}
                sizes="(min-width: 900px) 18vw, 33vw"
                className={styles.photo}
              />
            ) : null}
            <div className={styles.caption}>
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
    </section>
  )
}
