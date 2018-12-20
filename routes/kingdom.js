const router = require('express').Router()
const Model = require('../models')
const setDistrict = require('../helpers/setDistrict')
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
        kingdomData = kingdom
        return Model.District.findAll()
    })
    .then(district => {
        res.render('kingdomDetail', {kingdom: kingdomData, districtName: setDistrict(kingdomData.District), district: district})
    })
    .catch((err) => {
        res.send(err)
    })
})

router.post('/:kingdomId', (req, res) => {
    Model.District.findOne({where: {
        districtName: req.body.name
    }})
    .then(theDistrict => {
        let districtId = theDistrict.id
        return Model.Kingdom.update({
               DistrictId: districtId
            },{where: {
                id: req.params.id
            }})
    })
    .then(() => {
        res.redirect('/kingdoms')
    })
    .catch(err => {
        res.send(err)
    })
    
})


module.exports = router