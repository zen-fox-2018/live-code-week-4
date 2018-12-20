const route = require('express').Router()
const {Kingdom, Soldier, District} = require('../../models')

route.post('/add/:kingdomId' , (req, res ) => {
    let obj = {
        name: req.body.name,
        attack : req.body.attack,
        KingdomId: req.params.KingdomId
    }
    Soldier.create(obj)
        .then(data => {
            res.redirect(`/kingdoms/${req.params.kingdomId}?msg = success add soldier`)
        })
        .catch(err => {
            res.redirect(`/kingdoms/${req.params.kingdomId}?msg= ${err}`)
        })
})

module.exports = route