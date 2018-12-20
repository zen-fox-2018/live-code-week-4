const routes = require('express').Router();
const Model = require('../models');

routes.get('/', (req, res) => {
  res.send('district');
})


module.exports = routes;