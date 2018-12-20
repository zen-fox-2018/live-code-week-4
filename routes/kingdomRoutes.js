const routes = require('express').Router();
const Model = require('../models');

routes.get('/', (req, res) => {
  Model.Kingdom.findAll()
    .then(data => {
      res.render('kingdoms.ejs', {
        data: data
      })
    })
    .catch(err => {
      res.send(err)
    })
})


routes.get('/:kingdomId', (req, res) => {
  let data = null
  Model.Kingdom.findOne({
    // include: { model: Model.District },
    where: { id: req.params.kingdomId },
  })
  // console.log(Model.Kingdom.getDistrict())
    .then(kingdom => {
      data = kingdom
      return Model.District.findAll()
    })
    .then(district => {
      res.render('kingdoms-details.ejs', {
        data: data,
        district: district,
        // specificDistrict: Model.Kingdom.getDistrict()
      })
    })
    .catch(err => {
      res.send(err)
    })
})

routes.post(':/kingdomId', (req, res) => {

})

module.exports = routes;