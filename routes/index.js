const routes = require('express').Router()
const kingdomRoutes = require('./kingdoms')
const soldierRoutes = require('./soldiers')

routes.get('/', function(req, res) {
  res.render('home')
})

routes.use('/kingdoms', kingdomRoutes)
routes.use('/soldiers', soldierRoutes)

module.exports = routes