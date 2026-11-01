const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

function monthIndex(monthYear, today) {
  if (monthYear === 'Present') {
    return today.getFullYear() * 12 + today.getMonth()
  }
  const [monthName, year] = monthYear.split(' ')
  return Number(year) * 12 + MONTHS.indexOf(monthName)
}

/**
 * Counts the months a role lasted, inclusive of both ends, so "May 2015" to "May 2015" is 1.
 *
 * @param {string} start a "Month YYYY" date such as "September 2012"
 * @param {string} end a "Month YYYY" date, or "Present"
 * @param {Date} [today] the date "Present" resolves to
 * @returns {number} whole months worked
 */
export function monthsWorked(start, end, today = new Date()) {
  return monthIndex(end, today) - monthIndex(start, today) + 1
}

/**
 * Turns a month count into the short tenure label shown beside a role's dates.
 *
 * @param {number} months whole months worked, at least 1
 * @returns {string | null} a label such as "2 yrs 3 mos", or null to show no label
 */
export function formatTenure(months) {
  // TODO(David): word the tenure label.
  return null
}
