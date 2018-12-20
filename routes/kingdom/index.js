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
            res.render('kingdomDetail.ejs', { districts, kingdom, err: req.query.err })
        })
        .catch(err => {
            res.send(err)
        })
    // res.render('kingdomDetail.ejs')
})

routes.post('/:kingdomId', (req, res) => {
    Kingdom.getEnemy()
        .then(enemy => {
            if (!enemy) {
                let obj = {
                    DistrictId: req.body.id
                }
                return Kingdom.update(obj, {where: {id: req.params.kingdomId}})
            } else {
                let atck = 0
                let enemyAtck = 0
                enemy.Soldiers.forEach(soldier => {
                    enemyAtck += soldier.attack
                });
                Kingdom.findOne({
                    where: {id: req.params.kingdomId},
                    include: {model: Soldier}
                })
                    .then(kingdom => {

                    })
            }
        })
})

module.exports = routes