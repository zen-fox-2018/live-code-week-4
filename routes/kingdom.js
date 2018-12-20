const router = require('express').Router()
const Model = require('../models')

router.get('/', (req, res) => {
    Model.Kingdom
    .findAll()
    .then((kingdom) => {
        res.render('kingdom', {kingdom: kingdom})
    })
    .catch((err) => {
        res.send(err)
    })
})

router.get('/:kingdomId', (req, res) => {
    let theId = req.params.id
    let kingdomData = null
    Model.Kingdom
    .findOne({include: [{
        model: Model.District
    }, {
        model: Model.Soldier
    }]}, {where: {
        id: theId
    }})
    .then((kingdom) => {
        // res.send(kingdom)
        kingdomData = kingdom
        return Model.District.findAll()
    })
    .then(district => {
        // res.send(district)
        res.render('kingdomDetail', {kingdom: kingdomData, district: district})
    })
    .catch((err) => {
        res.send(err)
    })
})

router.post('/:kingdomId', (req, res) => {

})


module.exports = router