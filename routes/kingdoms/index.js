const routes = require('express').Router()
const {Kingdom, Soldier, District} = require('../../models')
const getDistrictName = require('../../helpers/getDistrictName')

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
  Kingdom.findOne({where: {id: req.params.id}, include: [{model: District}, {model: Soldier}]})
    .then(function (kingdom) {
      res.render('kingdom-detail', {data: kingdom, getDistrictName: getDistrictName})
    })
    .catch(function (err) {
      res.send(err.message)
    })
})


module.exports = routes