const routes = require('express').Router()
const kingdom = require('./kingdom')

routes.get('/kingdoms', kingdom)

module.exports = routes