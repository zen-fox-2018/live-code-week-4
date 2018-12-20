const Routes = require('express').Router()
const {Soldier, District} = require('../../models')

Routes.get("/", (req, res) => {
    res.send("soldier nih")
})
Routes.post('/:kingdomId', (req, res) => {
    // res.send(req.params)
    let insert = {
        name: req.body.name,
        attack: req.body.attack,
        KingdomId: Number(req.params.kingdomId)
    }
    console.log(insert)
    Soldier.create(insert) 
        .then(soldier => {
            res.redirect(`/kingdoms/${req.params.kingdomId}`)
        })
        .catch((err) => {
            console.log(err)
            res.redirect(`/kingdoms/${req.params.kingdomId}?error= ${err}`)
        })
    // Soldier.create()
})


module.exports = Routes