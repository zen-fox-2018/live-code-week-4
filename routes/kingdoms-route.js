const express = require('express')
const router = express.Router()
const Model = require('../models')
const checkDistrict = require('../helpers/unassigned-district')

router.get('/', (req, res)=>{
  Model.Kingdom
  .findAll()
  .then(dataKingdom =>{
    res.render ('kingdoms.ejs', {dataKingdom})
  })
  .catch(err =>{
    res.send(err)
  })
})

router.get('/:kingdomId', (req,res)=>{
  let dataKingdom = null
  let dataDistrict = null

  Model.Kingdom
  .findOne({where:
    {id:req.params.kingdomId}
  })
  .then(kingdom =>{
    dataKingdom = kingdom

    return Model.District
    .findAll()
  })
  .then(district =>{
    dataDistrict = district
    // res.render('kingdoms-details.ejs', {dataKingdom, dataDistrict})
    return Model.Soldier
    .findAll({
      where:
       {KingdomId: req.params.kingdomId}
    })
    .then(dataSoldier =>{
      let jumlahPasukan = dataSoldier.length
      res.render('kingdoms-details.ejs', {dataKingdom, dataDistrict, jumlahPasukan})
      // return Model.District
      // .findAll({where:
      //   {id: dataKingdom.DistrictId}
      // })
      // .then(dataKingdomDistrict =>{
      //   let districtKingdom = checkDistrict(dataKingdomDistrict)

      //   res.render('kingdoms-details.ejs', {dataKingdom, dataDistrict, districtKingdom,  jumlahPasukan})
      // })
    })
  })
  .catch(err =>{
    res.send(err)
    console.log(err)
  })
})

router.post('/:kingdomId', (req,res)=>{
  let objSoldier = {
    name: req.body.name,
    attack: req.body.attack,
    createdAt: new Date,
    updatedAt: new Date,
    KingdomId: req.params.kingdomId
  }

  let objDistrict={
    DistrictId: req.body.districtName
  }

  Model.Soldier
  .create(objSoldier)
  .then(dataSoldier =>{
    // res.redirect('/kingdoms')

    return Model.Kingdom
    .update(objDistrict, {
      where:
      {id:req.params.kingdomId}
    })
  })
  .then(data =>{
    res.redirect('/kingdoms')
  })
  .catch(err =>{
    res.send(err)
    console.log(err);
  })
})

module.exports = router
