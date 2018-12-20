const route = require('express').Router()
const {Kingdom, Soldier, District} = require('../../models')
const sequelize = require('sequelize')
route.get('/' , (req, res ) => {
    Soldier.findAll({attributes: ['id' , 'kingdomName',[sequelize.fn('COUNT', sequelize.col('*')), 'totSoldier'] ,[sequelize.fn('SUM', sequelize.col('attack')), 'totalAtk']], group: ['kingdomName'] ,include: [{model:Kingdom}]})
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.send(err)
        })
})

route.post('/add/:kingdomId' , (req, res ) => {
    let obj = {
        name: req.body.name,
        attack : req.body.attack,
        KingdomId: req.params.kingdomId
    }
    Soldier.findAll({where: {
        KingdomId: req.params.kingdomId
    }})
        .then(jumlah => {
            if(jumlah.length > 20) {
                res.redirect(`/kingdoms/${req.params.kingdomId}?msg= failed to add soldier your soldier is more than 20`)
            } else {
                Soldier.create(obj)
                    .then(data => {
                        res.redirect(`/kingdoms/${req.params.kingdomId}?msg = success add soldier`)
                    })
                    .catch(err => {
                        res.redirect(`/kingdoms/${req.params.kingdomId}?msg= ${err}`)
                    })
            }
        })
        .catch(err => {
            res.send(err)
        })
})

module.exports = route