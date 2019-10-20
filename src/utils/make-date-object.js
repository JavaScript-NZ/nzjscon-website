const { DateTime } = require(`luxon`)

const makeDateObject = dateString =>
  DateTime.fromISO(dateString)

module.exports = makeDateObject
