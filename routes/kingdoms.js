const express = require('express')
const router = express.Router()
const Model = require('../models')
// const helpers =

router.get('/', (req, res) => {
    Model.Kingdom.findAll()
    .then(allKingdoms => {
        res.render('./kingdomTable', {
            allKingdoms: allKingdoms
        })
    })
    .catch(err => {
        res.send(err)
    })
})

router.get('/:kingdomId', (req, res) => {
    Model.Kingdom.findAll({
        include: [{model: Soldier}]
        }, 
        {where: 
            {KingdomId: req.params.kingdomId
        }
    })
    .then(data => {
        res.send(data)
    })
    // Model.Kingdom.findByPk(req.params.kingdomId)
    // .then(kingdomDetail => {
    //     res.send(kingdomDetail)
        // res.render('./kingdomDetail', {
        //     kingdomDetail: kingdomDetail
        // })
    // })
    .catch(err => {
        res.send(err)
    })
})

// router.post(':kingdomId', (req, res) => {
// })


module.exports = router