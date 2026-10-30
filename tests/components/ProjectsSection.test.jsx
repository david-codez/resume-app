import { render, screen, within } from '@testing-library/react'
import ProjectsSection from '../../components/resume/ProjectsSection'

const projects = [
  { slug: 'hangman', name: 'Hangman', summary: 'A word game.', demoUrl: 'https://hangman.example.com', image: '/images/hangman-screenshot.png', stack: [{ name: 'React', icon: 'react' }] },
  { slug: 'pokedex', name: 'Pokedex', summary: 'A creature browser.', demoUrl: 'https://pokedex.example.com', image: '/images/pokedex-screenshot.png', stack: [{ name: 'React', icon: 'react' }] },
]

test('renders a region named Projects with a card per project linking to its page', () => {
  render(<ProjectsSection projects={projects} />)
  const region = screen.getByRole('region', { name: 'Projects' })
  expect(within(region).getByRole('link', { name: 'Hangman' })).toHaveAttribute('href', '/portfolio/hangman')
  expect(within(region).getByRole('link', { name: 'Pokedex' })).toHaveAttribute('href', '/portfolio/pokedex')
  expect(within(region).getByText('A word game.')).toBeInTheDocument()
  expect(within(region).getByText('A creature browser.')).toBeInTheDocument()
})

test('every project screenshot has a descriptive alt', () => {
  render(<ProjectsSection projects={projects} />)
  expect(screen.getByRole('img', { name: 'Hangman screenshot' })).toBeInTheDocument()
  expect(screen.getByRole('img', { name: 'Pokedex screenshot' })).toBeInTheDocument()
})
