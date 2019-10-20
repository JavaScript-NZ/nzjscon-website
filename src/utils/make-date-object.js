const { DateTime } = require(`luxon`)

const makeDateObject = dateString =>
  DateTime.fromISO(dateString).setZone("local")

module.exports = makeDateObject
