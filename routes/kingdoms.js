const express = require('express')
const router = express.Router()
const Model = require('../models')
const districtCheck = require('../helpers/districtCheck')
const troopsCheck = require('../helpers/troopsCheck')

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
        include: [{
            model: District
        }]
    })
    .then(data => {
        res.send(data)
    })
    // let kingdomDetail = null;
    // Model.Kingdom.findByPk(req.params.kingdomId)
    // .then(kingdomDetail => {
    //     // res.send(kingdomDetails)
    //     res.render('./kingdomDetail', {
    //         kingdomDetail: kingdomDetail,
    //         districtCheck: districtCheck,
    //         troopsCheck: troopsCheck
    //         // totalTroops: Model.Kingdom.jumlahPasukan()
    //     })
    // })
    .catch(err => {
        res.send(err)
    })
})

// router.post(':kingdomId', (req, res) => {
// })


module.exports = router