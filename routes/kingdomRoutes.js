const router = require('express').Router()
const Model = require('../models')

router.get('/', function( req, res ) {
  // res.send('Model.Kingdom.findAll')
  Model.Kingdom.findAll({
    include : 
    [{
      model : Model.District
    }],
    order: [
      ['id', 'ASC'],
  ],
  })
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
router.post('/:kingdomId', function ( req, res ) {
  // res.send(req.body.name)
  Model.District.findOne( {
    where : { districtName : req.body.name }
  })
    .then( data => {
      let cek = Model.District.owned(data)
      if (!cek) {
        Model.District.Update(
          { 
            KingdomId : req.params.kingdomId
          }, { 
            where : {
          districtName : req.body.name
        }}
        )
        .then( updated => {
          console.log('test');
        })
      } else {

      }
    })
    .then(updated => {
      console.log("hayo");
    })
    .catch( err => {
      // res.send(err)
    })
})

module.exports = router