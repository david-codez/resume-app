import { Container, Nav, Navbar } from 'react-bootstrap'
import styles from './SectionNav.module.css'

const SECTIONS = [
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

export default function SectionNav({ name }) {
  return (
    <Navbar as="nav" sticky="top" expand="sm" className={styles.nav} aria-label="Section navigation">
      <Container>
        <Navbar.Brand href="#top" className={styles.brand}>{name}</Navbar.Brand>
        <Navbar.Toggle className={styles.toggler} aria-controls="section-nav" />
        <Navbar.Collapse id="section-nav">
          <Nav className="ms-auto">
            {SECTIONS.map((section) => (
              <Nav.Link key={section.id} href={`#${section.id}`} className={styles.link}>{section.label}</Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
