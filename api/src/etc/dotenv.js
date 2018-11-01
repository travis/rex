if (process.env.IGNORE_DOTENV == 'true') {
  console.log(`IGNORE_DOTENV == ${process.env.IGNORE_DOTENV} skipping .env`)
  module.exports = null
} else {
  const dotenv = require('dotenv')
  dotenv.config()
  module.exports = dotenv
}
