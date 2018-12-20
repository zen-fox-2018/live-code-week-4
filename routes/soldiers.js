const express = require('express')
const router = express.Router()
const Model = require('../models')

router.post('/:kingdomId', (req, res) => {
    let newSoldier = {
        name: req.body.name,
        attack: req.body.attack,
        createdAt: new Date,
        updatedAt: new Date
    }
    Model.Soldier.create(newSoldier)
    .then(() => {
        res.redirect(`/kingdoms/${req.params.kingdomId}`)
    })
    .catch(err => {
        res.redirect(`/kingdoms/${req.params.kingdomId}?error=${err.errors[0].message}`)
    })
})

module.exports = router