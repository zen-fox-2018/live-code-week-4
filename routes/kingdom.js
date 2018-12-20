const express = require('express');
const router = express.Router();
const sequelize = require('sequelize');
const Model = require('../models')

router.get('/', function(req, res) {
  Model.Kingdom.findAll()
  .then(dataKingdom => {
    res.render('kingdoms.ejs', {
      dataKingdom : dataKingdom
    })
    // res.send(dataKingdom)
  })
})



module.exports = router;
