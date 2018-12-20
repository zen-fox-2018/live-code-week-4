const routes = require('express').Router()
const { Kingdom, Soldier, District } = require('../../models')

routes.get('/kingdoms', (req, res) => {
    Kingdom.findAll()
        .then(kingdoms => {
            // res.send(kingdoms)
            res.render('kingdoms.ejs', { kingdoms: kingdoms })
        })
        .catch(err => {
            res.send(err)
        })
})

routes.get('/:kingdomId', (req, res) => {
    Kingdom.findOne({where: {id: req.params/kingdomId}})
        .then(kingdom => {
            res.send(kingdom)
        })
        .catch(err => {
            res.send(err)
        })
    // res.render('kingdomDetail.ejs')
})

routes.post('/:kingdomId', (req, res) => {

})

module.exports = routes