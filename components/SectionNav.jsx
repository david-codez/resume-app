import { Container, Nav, Navbar } from 'react-bootstrap'

const SECTIONS = [
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export default function SectionNav({ name }) {
  return (
    <Navbar as="nav" sticky="top" expand="sm" bg="body-tertiary" aria-label="Section navigation">
      <Container>
        <Navbar.Brand href="#top">{name}</Navbar.Brand>
        <Navbar.Toggle aria-controls="section-nav" />
        <Navbar.Collapse id="section-nav">
          <Nav className="ms-auto">
            {SECTIONS.map((section) => (
              <Nav.Link key={section.id} href={`#${section.id}`}>{section.label}</Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
