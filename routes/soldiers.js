const express = require('express')
const router = express.Router()
const Model = require('../models')

router.post('/:kingdomId', (req, res) => {
    res.send(req.body)
    // let newSoldier = {
    //     name:
    // }
    // Model.Soldier.create(newSoldier)
    // // .then
    // res.redirect(`/kingdoms/${req.params.kingdomId}`)
})

module.exports = router