import { Container } from 'react-bootstrap'
import SocialLinks from './SocialLinks'
import styles from './Footer.module.css'

export default function Footer({ profile }) {
  return (
    <footer id="contact" aria-labelledby="contact-heading" className={styles.footer}>
      <Container>
        <h2 id="contact-heading" className={`${styles.heading} text-gradient`}>Let's work together</h2>
        <a href={`mailto:${profile.email}`} className={`btn-accent ${styles.email}`}>{profile.email}</a>
        <div className={styles.social}>
          <SocialLinks links={profile.social} size="1.75rem" />
        </div>
        <p className={`small mb-0 ${styles.copyright}`}>© {new Date().getFullYear()} {profile.name}</p>
      </Container>
    </footer>
  )
}
