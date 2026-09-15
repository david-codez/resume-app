import { FALLBACK_ICON, KNOWN_ICON_KEYS, iconFor } from '../../components/iconMap'
import profile from '../../content/profile.json'
import projects from '../../content/projects.json'
import skills from '../../content/skills.json'

test('every known icon key resolves to a component, never undefined', () => {
  const unresolved = KNOWN_ICON_KEYS.filter((key) => typeof iconFor(key) !== 'function')
  expect(unresolved).toEqual([])
})

test('an unknown key falls back to the generic code icon', () => {
  expect(iconFor('definitely-not-a-key')).toBe(FALLBACK_ICON)
})

test('covers every icon key the content files use', () => {
  const usedKeys = new Set([
    ...skills.flatMap((group) => group.skills.map((skill) => skill.icon)),
    ...projects.flatMap((project) => project.stack.map((tool) => tool.icon)),
    ...profile.social.map((link) => link.icon),
  ])
  const missing = [...usedKeys].filter((key) => !KNOWN_ICON_KEYS.includes(key))
  expect(missing).toEqual([])
})
