const bodyParser = require('body-parser')
const chaves = require('./chavesRoute')
const binas = require('./binasRoute')

module.exports = app => {
    app.use(
      bodyParser.json(),
      chaves,
      binas
      )
    }