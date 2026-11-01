/**
 * Returns the postal codes of the US states a resume highlight names, in the order they appear,
 * without duplicates. Drives the Experience map: the states of the active highlight light up.
 *
 * Highlights name states two ways: as postal codes ("(PA, WI, CO, IL ...)", "FL, MS, and TX")
 * and as full names ("the statewide ELT provider switch for Iowa"). `STATE_CODES` and
 * `STATE_TILES` in ./stateTiles hold every code and its full name.
 *
 * @param {string} highlight one resume highlight sentence
 * @returns {string[]} postal codes such as ['PA', 'WI'], or [] when it names no state
 */
export function statesMentioned(highlight) {
  // TODO(David): find the states named in `highlight`.
  return []
}
