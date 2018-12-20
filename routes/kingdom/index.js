const routes = require('express').Router()
const { Kingdom, Soldier, District } = require('../../models')

routes.get('/', (req, res) => {
    Kingdom.findAll()
        .then(kingdoms => {
            // res.send(kingdoms)
            res.render('kingdoms.ejs', { kingdoms: kingdoms })
        })
        .catch(err => {
            res.redirect(`/kingdoms/${req.params.kingdomId}?err=${err}`)
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
            res.redirect(`/kingdoms/${req.params.kingdomId}?err=${err}`)
        })
    // res.render('kingdomDetail.ejs')
})

routes.post('/:kingdomId', (req, res) => {
    Kingdom.getEnemy(req.body.id)
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
                        kingdom.Soldiers.forEach(soldier => {
                            atck += soldier.attack
                        });
                        if (atck < enemyAtck) {
                            res.redirect(`/kingdoms/${req.params.kingdomId}?err=Failed to get district`)
                        } else {
                            let obj = {
                                DistrictId: req.body.id
                            }
                            return Kingdom.update(obj, {where: {id: req.params.kingdomId}})
                        }
                    })
                    .catch(err => {
                        res.redirect(`/kingdoms/${req.params.kingdomId}?err=${err}`)
                    })
            }
        })
})

module.exports = routes