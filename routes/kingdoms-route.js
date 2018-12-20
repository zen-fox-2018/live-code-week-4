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
  Model.Kingdom
  .findOne({where:
    {id:req.params.kingdomsId}
  })
  .then(dataKingdom =>{
    res.render('kingdoms-details.ejs', {dataKingdom})
  })
  .catch(err =>{
    res.send(err)
    console.log(err)
  })
})

module.exports = router
