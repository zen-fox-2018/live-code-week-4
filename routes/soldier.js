const Model = require('../models')
const express = require('express')
const router = express.Router()

router.post('/:kingdomId', function(req, res) {
  let soldier = {
    name: req.body.name,
    attack: req.body.attack,
    KingdomId : req.params.kingdomId
  }
  Model.Soldier
    .create(soldier)
    .then(function(soldier) {
      res.redirect(`/kingdoms/${req.params.kingdomId}`)
    })
    .catch(function(err) {
      res.redirect(`/kingdoms/${req.params.kingdomId}?msg=${err}`)
    })
})

module.exports = router