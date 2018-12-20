const express = require('express')
const router = express.Router()
const Model = require('../models')

router.get('/',(req,res)=>{
    Model.Kingdoms.findAll()
    .then(allKingdomData=>{
        // res.send(allKingdomData)
        res.render('Kingdom.ejs',{data:allKingdomData})
    })
    .catch(err=>{
        res.send(err)
    })
})

router.get('/:id',(req,res)=>{
    let kingdomId = req.params.id
    Model.Kingdoms.findByPk(kingdomId)
    .then(kingdomData=>{
        // res.send(kingdomData)
        res.render('detailKingdom.ejs',{data:kingdomData})
    })
    .catch(err=>{
        res.send(err)
    })
})


module.exports = router