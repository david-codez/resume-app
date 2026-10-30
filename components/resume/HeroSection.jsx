import Image from 'next/image'
import { Container } from 'react-bootstrap'
import { FaDownload, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import SocialLinks from '../SocialLinks'
import styles from './HeroSection.module.css'

export default function HeroSection({ profile }) {
  return (
    <header className={styles.hero}>
      <Container>
        <div className={styles.layout}>
          <div className={styles.copy}>
            <h1 className={`${styles.name} text-gradient`}>{profile.name}</h1>
            <p className={styles.title}>{profile.title}</p>
            <p className={styles.location}>
              <FaMapMarkerAlt aria-hidden="true" />
              <span>{profile.location}</span>
            </p>
            <p className={styles.summary}>{profile.summary}</p>
            {profile.about ? <p className={styles.about}>{profile.about}</p> : null}
            <div className={styles.actions}>
              <a href={profile.resumePdf} className="btn-accent">
                <FaDownload aria-hidden="true" /> Download resume (PDF)
              </a>
              <a href={`mailto:${profile.email}`} className="btn-ghost">
                <FaEnvelope aria-hidden="true" /> Email me
              </a>
            </div>
            <div className={styles.social}>
              <SocialLinks links={profile.social} />
            </div>
          </div>
          <div className={styles.portraitColumn}>
            <div className={styles.portraitFrame}>
              <div className={styles.portraitRing}>
                <Image
                  src={profile.headshot}
                  alt={`Portrait of ${profile.name}`}
                  width={600}
                  height={600}
                  sizes="(min-width: 768px) 320px, 80vw"
                  className={styles.portrait}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </header>
  )
}
