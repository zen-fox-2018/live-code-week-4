const router = require('express').Router()
const Model = require('../models')

router.get('/', (req, res) => {
    Model.Kingdom
    .findAll({
        attributes:['kingdomName']
    })
    .then((kingdom) => {
        res.send(kingdom)
        res.render('kingdom', {kingdom: kingdom})
    })
    .catch((err) => {
        res.send(err)
    })
})

router.get('/:kingdomId', (req, res) => {

})

router.post('/:kingdomId', (req, res) => {

})


module.exports = router