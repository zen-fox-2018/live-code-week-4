const route = require('express').Router()
const { Soldier, Kingdom } = require('../models')

route.get('/', (req, res) => {
    Soldier.findAndCountAll({
        include: [{
            model: Kingdom
        }]
    })
    .then(soldiers => {
        res.send(soldiers.rows)
        // res.render('soldier.ejs', {soldiers})
    })
    .catch(err => {
        res.send(err)
    })
})

route.post('/:kingdomId', (req,res) => {
    // console.log(req.body, '==========')
    Soldier.create({
        name: req.body.name,
        attack: req.body.attack,
        KingdomId: req.params.kingdomId
    })
    .then((result) => {
        res.redirect(`/kingdoms/${req.params.kingdomId}`)  
    }).catch((err) => {
        res.send(err)
    });
})


module.exports = route