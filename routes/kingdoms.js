const express = require('express')
const router = express.Router()
const Model = require('../models')

router.get('/',function(req,res) {
    Model.Kingdom.findAll()
    .then(data => {
        res.render('kingdoms.ejs', {kingdoms:data})
    })
    .catch(err =>{
        res.send(err)
    })
})

router.get('/:kingdomId', function(req,res) {
    let kingdom = ''
    Model.Kingdom.findOne({include :[{model : Model.Soldier}], where : { id : req.params.kingdomId}})
    .then(data => {
        kingdom = data
        return Model.kingdom.findOne({include : [ {model : Model.District}], where: {id: req.params.kingdomId}})
      //  res.render('kingdomdetail', {Kingdom: data})
        //res.send(data)
    })
    .then(kingdoms => {
        res.send(kingdoms)
    })
    .catch(err => {
        res.redirect('/:kingdomId/?error=data slah')
    })
})


module.exports =  router