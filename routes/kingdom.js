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
  let dataKingdom = null;
  Model.Kingdom.findOne({
    where : {
      id : paramsId
    },
    include : [{
      model : Model.Soldier
    }]
  })
  .then(dataKingdom =>{
    dataKingdom = dataKingdom;
    res.render('kingdomdetail.ejs',{
      dataKingdom : dataKingdom
    })
    // res.send(dataKingdom)
  })
  .catch(err =>{
    res.send('err',err)
  })
})



module.exports = router;
