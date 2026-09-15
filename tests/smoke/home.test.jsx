import { render, screen } from '@testing-library/react'
import Home from '../../pages/index'

test('landing page renders the name heading', () => {
  render(<Home />)
  expect(screen.getByRole('heading', { name: 'David Daniel' })).toBeInTheDocument()
})
