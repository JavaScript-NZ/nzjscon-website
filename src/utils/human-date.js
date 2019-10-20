const { DateTime } = require(`luxon`)
const makeDateObject = require(`./make-date-object`)

const humanDate = dateString =>
  makeDateObject(dateString).toLocaleString(DateTime.DATE_HUGE)

module.exports = humanDate
