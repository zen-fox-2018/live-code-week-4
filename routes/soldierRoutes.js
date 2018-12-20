const router = require('express').Router()
const Model = require('../models')

router.get('/:kingdomId', function( req, res ) {
  // res.send(req.params.kingdomId)
  res.render('formSoldier.ejs', { id : req.params.kingdomId })
})

router.post('/:kingdomId', function( req, res ) {
  Model.Soldier.create({
    name : req.body.name,
    attack : req.body.attack,
    KingdomId : req.params.kingdomId
    // createdAt : new Date(),
    // updatedAt : new Date()
  })
    .then( created => {
      res.redirect('/kingdomds/'+ req.param.kingdomId)
    })
    .catch( err => {
      res.send(err) ///////////////////
    })
})

module.exports = router
