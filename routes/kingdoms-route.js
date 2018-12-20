const express = require('express')
const router = express.Router()
const Model = require('../models')

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

router.get('/:kingdomsId', (req,res)=>{
  let dataKingdom = null
  let jumlahPasukan = null 

  Model.Kingdom
  .findOne({where:
    {id:req.params.kingdomsId}
  })
  .then(data =>{
    dataKingdom = data

    return Model.District
    .findAll()
  })
  .then(dataDistrict =>{
    res.render('kingdoms-details.ejs', {dataKingdom, dataDistrict})
    // res.send(dataDistrict)
    // res.send(Model.Soldier.count(req.params.kingdomsId))
  })
  .catch(err =>{
    res.send(err)
    console.log(err)
  })
})

router.post('/:kingdomsId', (req,res)=>{
  let objSoldier = {
    name: req.body.name,
    attack: req.body.attack,
    createdAt: new Date,
    updatedAt: new Date,
    KingdomId: req.params.kingdomsId
  }

  Model.Soldier
  .create(objSoldier)
  .then(dataSoldier =>{
    res.redirect('/kingdoms')
  })
  .catch(err =>{
    res.send(err)
    console.log(err);
  })
})

module.exports = router
