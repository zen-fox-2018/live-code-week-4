const express = require('express');
const router = express.Router();
const sequelize = require('sequelize');
const Model = require('../models')

//============ awal===============
router.get('/', function(req, res) {
  Model.Kingdom.findAll()
  .then(dataKingdom => {
    res.render('kingdoms.ejs', {
      dataKingdom : dataKingdom
    })
    // res.send(dataKingdom)
  })
})

//=============kingdom details===========
router.get('/:id', function(req, res) {
  let paramsId = req.params.id;
  let dataSoldier = null;
  Model.Kingdom.findOne({
    where : {
      id : paramsId
    },
    include : [{
      model : Model.Soldier
    }]
  })
  .then(dataSoldier =>{
    dataSoldier = dataKingdom;
    return Model.Kingdom.findOne({
      where : {
        id : paramsId
      },
      include : [{
        model : Model.District
      }]
    })
  })
  .then (dataDistrict => {
    // res.render('kingdomdetail.ejs',{
    //   dataDistrict : dataDistrict,
    //   dataSoldier : dataSoldier
    // })
    res.send(dataDistrict)
  })
  .catch(err =>{
    res.send('err',err)
  })
})



module.exports = router;
