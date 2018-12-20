const route = require('express').Router()
const { Soldier } = require('../models')

route.post('/:kingdomId', (req,res) => {
    Soldier.create({
        name: req.body.name,
        attack: req.body.attack,
        KingdomId: req.params.kingdomId
    })
    .then((result) => {
        res.send('sukses')    
    }).catch((err) => {
        res.send(err)
    });
})


module.exports = route