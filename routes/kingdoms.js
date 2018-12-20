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
    let kingdom = null;
    Model.Kingdom.findByPk(req.params.kingdomId)
    .then(kingdomDetail => {
        kingdom = kingdomDetail
        return Model.District.findAll()
    })
    .then(allDistricts => {
        res.send(allDistricts)
        let err = req.query.error
        res.render('./kingdomDetail', {
            kingdomDetail: kingdom,
            districtCheck: districtCheck,
            troopsCheck: troopsCheck,
            allDistricts: allDistricts,
            err: err,
            totalTroops: Model.Kingdom.jumlahPasukan()
        })
    })
    .catch(err => {
        res.send(err)
    })
})

// router.post(':kingdomId', (req, res) => {

// })


module.exports = router