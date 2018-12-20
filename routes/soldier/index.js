const routes = require('express').Router()
const { Kingdom, Soldier, District } = require('../../models')

routes.post('/:kingdomId', (req, res) => {
    let obj = {
        name: req.body.name,
        attack: req.body.attack,
        KingdomId: req.params.kingdomId   
    }
    Soldier.create(obj)
        .then(() => {
            res.redirect(`/kingdoms/${req.params.kingdomId}`)
        })
        .catch(err => {
            res.redirect(`/kingdoms/${req.params.kingdomId}?err=${err.errors[0].message}`)
        })
})

module.exports = routes