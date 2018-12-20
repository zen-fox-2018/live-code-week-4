const routes = require('express').Router()
const kingdomRoutes = require('./kingdoms')
const soldierRoutes = require('./soldiers')

routes.get('/', function(req, res) {
  res.render('zen_live_code_week_4')
})

routes.use('/kingdoms', kingdomRoutes)
routes.use('/soldiers', soldierRoutes)

module.exports = routes