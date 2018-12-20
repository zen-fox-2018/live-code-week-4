const router = require('express').Router()
const Model = require('../models')

router.get('/', function( req, res ) {
  // res.send('Model.Kingdom.findAll')
  Model.Kingdom.findAll()
    .then( allKingdom => {
      // res.send(allKingdom)
      res.render('kingdomViews.ejs', { data : allKingdom })
    })
    .catch( err => {
      res.send(err)
    })
})

router.get('/:kingdomId', function( req, res ) {
  Model.Kingdom.findOne( {
    include : [{
      model : Model.Soldier
    }],
    where : { id : req.params.kingdomId } 
  } )
    .then( kingdom => {
      let pasukan = kingdom.pasukan()
      res.render('kingdomDetails.ejs', { data : kingdom , pasukan : pasukan})
    })
    .catch( err => {
      res.send(err)
    })
})


module.exports = router