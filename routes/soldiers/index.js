const routes = require('express').Router()
const {Kingdom, Soldier} = require('../../models')
const totalAttack = require('../../helpers/totalAttack')

routes.get('/', function(req, res) {
  Kingdom.findAll({include: [{model: Soldier}]})
    .then(function(kingdoms) {
      res.render('soldiers', {data: kingdoms, totalAttack: totalAttack})
    })
    .catch(function(err) {
      res.send(err.message)
    })
})

routes.post('/:kingdomId', function(req, res) {
  let obj = {
    name: req.body.name,
    attack: req.body.attack,
    kingdomId: req.params.kingdomId
  }

  Soldier.create(obj)
    .then(function(soldier) {
      res.redirect(`/kingdoms/${obj.kingdomId}`)
    })
    .catch(function(err) {
      res.send(err.message)
    })
})



module.exports = routes