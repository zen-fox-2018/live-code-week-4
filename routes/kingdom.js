const route = require('express').Router()
const { Kingdom, District } = require('../models')

route.get('/', (req,res) => {
    Kingdom.findAll()
    .then(kingdom => {
        // res.send(kingdom)
        res.render('kingdom.ejs', {kingdom})
    })
    .catch(err => {
        res.send(err)
    });
})

route.get('/:kingdomId', (req, res) => {
    Kingdom.findOne({
        where: {
            id: req.params.kingdomId
        },
        include: {
            model: District
        }
    })
    .then(kingdom => {
        // res.send(kingdom)
        res.render('kingdom-detail.ejs', {kingdom})
    })
    .catch(err => {
        res.send(err)
    })
})

module.exports = route