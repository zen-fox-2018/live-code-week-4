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
    let kingdomdata = ''
    Model.Kingdom.findOne({include :[{model : Model.Soldier}], where : { id : req.params.kingdomId}})
    .then(data => {
        kingdomdata = data
     //  res.send(kingdomdata)
     return Model.Kingdom.findOne({include : [ {model : Model.District}], where: {id: req.params.kingdomId}})

    })
    .then(district => {
       res.render('kingdomdetail',{Kingdom : kingdomdata, district : district })
    })
    .catch(err => {
        res.send(err)
    })
})

router.post('/soldier/:kingdomId',function(req,res) {

    let obj = {
            name : req.body.name,
            attact :  Number(req.body.attact),
            KingdomId : req.params.kingdomId
    }
    Model.Soldier.create(obj)
    .then(soldier => {
        res.send(soldier)
    })
})


module.exports =  router