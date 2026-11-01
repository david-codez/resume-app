import Image from 'next/image'
import styles from './AboutSection.module.css'

const SIZES = {
  portrait: '(max-width: 900px) 72vw, 28vw',
  landscape: '(max-width: 900px) 88vw, 40vw',
}

export default function AboutSection({ moments }) {
  return (
    <section id="about" aria-labelledby="about-heading" className={styles.section}>
      <div className={styles.stage}>
        <h2 id="about-heading" className={styles.heading}>About me</h2>
      </div>
      <ol className={`frame ${styles.moments}`}>
        {moments.map((moment) => (
          <li key={moment.id} className={`${styles.moment} ${styles[moment.orientation]}`} data-reveal>
            <figure className={styles.figure}>
              <span className={styles.photo}>
                <Image src={moment.image} alt={moment.alt} fill sizes={SIZES[moment.orientation]} className={styles.image} />
              </span>
              <figcaption className={styles.caption}>
                <h3 className={styles.title}>{moment.title}</h3>
                <p className={styles.place}>{moment.place}</p>
                <p className={styles.sentence}>{moment.caption}</p>
              </figcaption>
            </figure>
          </li>
        ))}
      </ol>
    </section>
  )
}
