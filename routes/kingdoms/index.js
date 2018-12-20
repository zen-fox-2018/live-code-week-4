const routes = require('express').Router()
const {Kingdom, Soldier, District} = require('../../models')

routes.get('/', function (req, res) {
  Kingdom.findAll()
    .then(function(kingdoms) {
      res.render('kingdoms', {data: kingdoms})
    })
    .catch(function(err) {
      res.send(err.message)
    })
})

routes.get('/:id', function (req, res) {
  Kingdom.findOne({where: {id: req.params.id}, include: [{model: District}]})
    .then(function (kingdom) {
      res.send(kingdom)
    })
    .catch(function (err) {
      res.send(err.message)
    })
})

module.exports = routes