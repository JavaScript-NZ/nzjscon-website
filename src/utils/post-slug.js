const slugify = require(`slugify`)
const { DateTime } = require(`luxon`)

const postSlug = (title, date) => `/news/${slugify(title, { lower: true })}-${DateTime.fromISO(date).toISODate()}`

module.exports = postSlug
