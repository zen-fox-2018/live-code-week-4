const routes = require('express').Router()
const Model = require('../models')

routes.get('/', (req, res) => {
  res.send('soldier');
})

routes.post('/:kingdomId', (req, res) => {
  
})

module.exports = routes;