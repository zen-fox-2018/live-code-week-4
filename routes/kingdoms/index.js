const routes = require('express').Router()
const {Kingdom, Soldier, District} = require('../../models')
const getDistrictName = require('../../helpers/getDistrictName')
const totalAttack = require('../../helpers/totalAttack')

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
  let dataKingdom = null
  Kingdom.findOne({where: {id: req.params.id}, include: [{model: District}, {model: Soldier}]})
    .then(function (kingdom) {
      dataKingdom = kingdom
      return District.findAll()
    })
    .then(function(dataDistricts) {
      res.render('kingdom-detail', {data: dataKingdom, getDistrictName: getDistrictName, districts: dataDistricts})
    })
    .catch(function (err) {
      res.send(err.message)
    })
})

routes.post('/:id', function (req, res) {
  let kingdomOponentATK = 0
  let kingdomATK = 0
  console.log("===============");
  Kingdom.checkDistrict(req.body.DistrictId)
    .then(function(kingdomId) {
      if (kingdomId === null) {
        Kingdom.update({DistrictId: req.body.DistrictId }, {where: {id: req.params.id}})
          .then(function (kingdom) {
            res.redirect(`/kingdoms/${req.params.id}`)
          })
          .catch(function (err) {
            res.send(err.message)
          })
      }
      else {
        Kingdom.findOne({where: {id: req.params.id}, include: [{model: Soldier}]})
          .then(function (kingdom) {
            kingdomATK = totalAttack(kingdom.dataValues.Soldiers)
            return Kingdom.findOne({where: {id: kingdomId}, include: [{model: Soldier}]})
          })
          .then(function (kingdomOponent) {
            kingdomOponentATK = totalAttack(kingdomOponent.dataValues.Soldiers)
            if (kingdomOponentATK >= kingdomATK) {
              throw new Error('Failed to get District')
            }
            else {
              return Kingdom.update({DistrictId: req.body.DistrictId }, {where: {id: req.params.id}})
            }
          })
          .then(function() {
            return Kingdom.update({DistrictId: null }, {where: {id: kingdomId}})
          })
          .then(function() {
            res.redirect(`/kingdoms/${req.params.id}`)
          })
          .catch(function(err) {
            res.send(err)
          })
      }
    })
    .catch(function(err) {
      res.send(err)
    })
})

module.exports = routes