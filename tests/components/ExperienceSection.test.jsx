import { render, screen, within } from '@testing-library/react'
import ExperienceSection from '../../components/resume/ExperienceSection'

const roles = [
  { id: 'acme', company: 'Acme', positions: ['Engineer', 'Junior Engineer'], location: 'Here, FL', start: 'October 2022', end: 'Present', highlights: ['Built the widget.', 'Shipped the gadget.'] },
  { id: 'diner', company: 'The Diner', positions: ['Server'], location: '', start: 'May 2015', end: 'August 2017', highlights: [], notes: 'I started as a busser and moved up.' },
  { id: 'quiet', company: 'Quiet Co', positions: ['Technician'], location: '', start: 'June 2018', end: 'July 2020', highlights: [] },
]

test('renders a region named Experience with every company and primary position', () => {
  render(<ExperienceSection roles={roles} />)
  const region = screen.getByRole('region', { name: 'Experience' })
  for (const text of ['Acme', 'Engineer', 'The Diner', 'Server', 'Quiet Co', 'Technician']) {
    expect(within(region).getByText(text)).toBeInTheDocument()
  }
})

test('lists earlier positions only for roles that had more than one', () => {
  render(<ExperienceSection roles={roles} />)
  expect(screen.getAllByText('Previously:')).toHaveLength(1)
  expect(screen.getByText(/Junior Engineer/)).toBeInTheDocument()
})

test('shows an en-dash date range for each role', () => {
  render(<ExperienceSection roles={roles} />)
  expect(screen.getByText('October 2022 – Present')).toBeInTheDocument()
  expect(screen.getByText('May 2015 – August 2017')).toBeInTheDocument()
  expect(screen.getByText('June 2018 – July 2020')).toBeInTheDocument()
})

test('renders highlights as list items and notes as a paragraph, each only when present', () => {
  render(<ExperienceSection roles={roles} />)
  expect(screen.getByText('Built the widget.').tagName).toBe('LI')
  expect(screen.getByText('Shipped the gadget.').tagName).toBe('LI')
  expect(screen.getByText('I started as a busser and moved up.').tagName).toBe('P')
  expect(screen.getAllByRole('heading', { level: 4, name: 'Highlights' })).toHaveLength(1)
  expect(screen.getAllByRole('heading', { level: 4, name: 'Notes' })).toHaveLength(1)
})

test('expands the most recent role by default and collapses the rest', () => {
  render(<ExperienceSection roles={roles} />)
  const toggles = screen.getAllByRole('button')
  expect(toggles).toHaveLength(3)
  expect(toggles[0]).toHaveAttribute('aria-expanded', 'true')
  expect(toggles[1]).toHaveAttribute('aria-expanded', 'false')
  expect(toggles[2]).toHaveAttribute('aria-expanded', 'false')
})

test('shows the location when a role has one', () => {
  render(<ExperienceSection roles={roles} />)
  expect(screen.getByText(/Here, FL/)).toBeInTheDocument()
})
