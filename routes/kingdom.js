const Model = require('../models')
const express = require('express')
const router = express.Router()

router.get('/', function(req,res) {
  Model.Kingdom
    .findAll()
    .then(function(kingdoms) {
      res.render('kingdoms.ejs', {kingdoms:kingdoms})
      // res.send(kingdoms)
    })
    .catch(function(err) {
      res.redirect('/kingdoms?msg=somethingeror')
    })

})

router.get('/:kingdomId', function(req,res) {
  Model.Kingdom
    .findByPk(req.params.id)
    .then(function(kingdom) {
      res.send(kingdom)
    })
    .catch(function(err) {
      res.redirect('/kingdoms?msg=somethingeror')
    })
})

module.exports = router