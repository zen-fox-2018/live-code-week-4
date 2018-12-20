const routes = require('express').Router();
const Model = require('../models');

routes.get('/', (req, res) => {
  res.send('district');
})

routes.post(':/kingdomId', (req, res) => {
  let id = req.params.kingdomId
  Model.Kingdom.update(obj, {
    where: {DistrictId: req.body.districtId}
  })
  .then(data => {
    res.redirect(`/kingdoms/${id}`)
  })
  .catch(err => {
    res.send(err)
  })
})

module.exports = routes;