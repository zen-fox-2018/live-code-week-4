const router = require('express').Router()
const Model = require('../models')

router.post('/:kingdomId', (req, res) => {
    let newData = {
        name: req.body.name,
        attack: req.body.attack,
        KingdomId: req.params.id
    }
    Model.Soldier
    .create(newData)
    .then(() => {
        res.redirect('/kingdoms/:kingdomId')
    })
    .catch((err) => {
        res.send(err)
    })
})

module.exports = router