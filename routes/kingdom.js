const Model = require('../models')
const express = require('express')
const router = express.Router()
const getTotal = require('../helpers/getTotal')

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
  let id = req.params.kingdomId
  Model.Kingdom
    .findAll({where: {id : id}, include : {model : Model.District, model:Model.Soldier}})  
    .then(function(kingdom) {
      // res.send(kingdom[0])
      res.render('kingdomDetil.ejs' ,{kingdom:kingdom[0], getTotal:getTotal})
    }) 
    .catch(function(err) {
      res.send(err)
    }) 
})



module.exports = router