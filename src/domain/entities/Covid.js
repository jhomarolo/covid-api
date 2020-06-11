const { entity, field } = require('gotu')

const Covid = entity('Covid', {
  code: field(String, { presense: true }),
  id: field(String),
  name: field(String),
})

module.exports = Covid
