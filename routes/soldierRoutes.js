const routes = require('express').Router()
const Model = require('../models')

routes.get('/', (req, res) => {
  res.send('soldier');
})

routes.post('/:kingdomId', (req, res) => {
  let id = req.params.kingdomId
  let obj = {
    name: req.body.name,
    attack: req.body.attack,
    KingdomId: req.params.kingdomId
  }
  Model.Soldier.create(obj)
  .then(data => {
    res.redirect(`/kingdoms/${id}`)
  })
  .catch(err => {
    res.send(err)
  })
})

module.exports = routes;