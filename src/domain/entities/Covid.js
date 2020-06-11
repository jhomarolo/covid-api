const { entity, field } = require('gotu')

const Covid = entity('Covid', {
  country: field(String),
  state: field(String),
  geo: field(Array),
  deaths: field(Array),
  confirmed: field(Array),
  recovered: field(Array)
})

module.exports = Covid
