const Routes = require('express').Router()
const {Soldier, District, Kingdom} = require('../../models')

Routes.get("/", (req, res) => {
    Kingdom.findAll({
        include: {
            model:Soldier
        }
    })
    .then((data) => {
        res.send(data)
    })
    .catch((err) => {
        res.send(err)
    })
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