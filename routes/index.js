const routes = require('express').Router()
const kingdom = require('./kingdom')

routes.use('/kingdoms', kingdom)

module.exports = routes