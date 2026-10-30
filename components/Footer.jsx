import { Container } from 'react-bootstrap'
import SocialLinks from './SocialLinks'

export default function Footer({ profile }) {
  return (
    <footer id="contact" aria-labelledby="contact-heading" className="py-5 border-top">
      <Container className="text-center">
        <h2 id="contact-heading" className="h4">Contact</h2>
        <p>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </p>
        <div className="d-flex justify-content-center mb-3">
          <SocialLinks links={profile.social} size="1.5rem" />
        </div>
        <p className="small text-body-secondary mb-0">© {new Date().getFullYear()} {profile.name}</p>
      </Container>
    </footer>
  )
}
