import { STATE_TILES, stateName } from './stateTiles'
import styles from './StateTileMap.module.css'

const TILE = 40
const GAP = 4
const COLUMNS = 12
const ROWS = 8
const WIDTH = COLUMNS * (TILE + GAP) - GAP
const HEIGHT = ROWS * (TILE + GAP) - GAP

function describe(codes) {
  if (codes.length === 0) {
    return 'none'
  }
  return codes.map(stateName).join(', ')
}

export default function StateTileMap({ workedStates, activeStates }) {
  const worked = new Set(workedStates)
  const active = new Set(activeStates)
  const label = `Map of the United States. States in this work: ${describe(workedStates)}. Highlighted now: ${describe(activeStates)}.`
  return (
    <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} className={styles.map} role="img" aria-label={label}>
      {Object.entries(STATE_TILES).map(([code, [, row, column]]) => {
        const tone = active.has(code) ? styles.active : worked.has(code) ? styles.worked : styles.rest
        return (
          <g key={code} className={`${styles.tile} ${tone}`} transform={`translate(${column * (TILE + GAP)} ${row * (TILE + GAP)})`}>
            <rect width={TILE} height={TILE} />
            <text x={TILE / 2} y={TILE / 2} dominantBaseline="central" textAnchor="middle">{code}</text>
          </g>
        )
      })}
    </svg>
  )
}
