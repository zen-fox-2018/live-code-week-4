const express = require('express')
const router = express.Router()
const Model = require('../models')

router.get('/', (Req,res)=>{
  res.send('soldiers')
})

module.exports = router