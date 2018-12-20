const express = require('express')
const router = express.Router()
const Model = require('../models')

router.post('/:kingdomId',(req,res)=>{
    let soldier = req.body
    let kerajaanId = req.params.kingdomId
    // res.send(kerajaanId)
    let objSoldier = {
        name : soldier['name'],
        attack : soldier['attack'],
        KingdomId : kerajaanId
    }
    Model.Soldiers.create(objSoldier)
    .then(()=>{
        res.redirect(`/kingdoms/${kerajaanId}`)
    })
    .catch(err=>{
        res.send(err)
    })
})

module.exports = router