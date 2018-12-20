const routes = require('express').Router()
const { Kingdom, Soldier, District } = require('../../models')

routes.get('/', (req, res) => {
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
    let kingdom = []
    Kingdom.findOne({
        where: {id: req.params.kingdomId},
        include: {model: Soldier}
    })
        .then(dataKingdom => {
            kingdom = dataKingdom
            return District.findAll()
        })
        .then(districts => {
            // res.send(kingdom.getSoldiers())
            res.render('kingdomDetail.ejs', { districts, kingdom })
        })
        .catch(err => {
            res.send(err)
        })
    // res.render('kingdomDetail.ejs')
})

routes.post('/:kingdomId', (req, res) => {

})

module.exports = routes