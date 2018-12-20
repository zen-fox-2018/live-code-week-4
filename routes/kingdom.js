const Model = require('../models')
const express = require('express')
const router = express.Router()
const getTotal = require('../helpers/getTotal')
const getDistrict = require('../helpers/getDistrict')

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
  let msg = req.query.msg ||null
  let id = req.params.kingdomId
  let districts = null
  Model.District.findAll({include : {model : Model.Kingdom}})
    .then(function(Districts) {
      districts = Districts
      return Model.Kingdom
      .findAll({where: {id : id}, include : {model : Model.District, model:Model.Soldier}}) 
    })
  .then(function(kingdom) {
    res.send(kingdom)
    // res.render('kingdomDetil.ejs' ,{kingdom:kingdom[0], getTotal:getTotal, msg:msg, getDistrict:getDistrict, districts:districts})
  }) 
  .catch(function(err) {
    res.send(err)
  }) 
})

router.post('/:kingdomId', function(req, res) {
  Model.Kingdom.update({DistrictId : req.body.district}, {where : {id : req.params.kingdomId}, individualHooks:true})
    .then(function(row) {
      res.redirect(`/kingdoms/${req.params.kingdomId}`)
    })
    .catch(function(err) {
      console.log(err)
      res.redirect(`/kingdoms/${req.params.kingdomId}?msg=error`)
    })
})



module.exports = router

