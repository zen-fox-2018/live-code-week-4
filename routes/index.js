const routes = require('express').Router()
const kingdom = require('./kingdom')
const soldier = require('./soldier')
const district = require('./district')

routes.use('/kingdoms', kingdom)
routes.use('/soldiers', soldier)
routes.use('/district', district)

module.exports = routes