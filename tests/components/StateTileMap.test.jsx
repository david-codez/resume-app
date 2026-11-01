import { render, screen } from '@testing-library/react'
import StateTileMap from '../../components/resume/StateTileMap'
import { STATE_CODES } from '../../components/resume/stateTiles'

test('draws one labelled tile for every state and DC', () => {
  render(<StateTileMap workedStates={[]} activeStates={[]} />)
  expect(STATE_CODES).toHaveLength(51)
  for (const code of ['FL', 'IA', 'AK', 'DC']) {
    expect(screen.getByText(code)).toBeInTheDocument()
  }
})

test('names the worked and the highlighted states in its accessible label', () => {
  render(<StateTileMap workedStates={['PA', 'IA', 'FL']} activeStates={['IA']} />)
  expect(screen.getByRole('img')).toHaveAccessibleName(
    'Map of the United States. States in this work: Pennsylvania, Iowa, Florida. Highlighted now: Iowa.',
  )
})

test('says none when nothing is highlighted', () => {
  render(<StateTileMap workedStates={[]} activeStates={[]} />)
  expect(screen.getByRole('img').getAttribute('aria-label')).toMatch(/Highlighted now: none\.$/)
})
