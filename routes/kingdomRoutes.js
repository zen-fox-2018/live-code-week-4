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
  Model.Kingdom.findOne({
    where: {id: req.params.id}
  })
  .then(data => {
    // res.render('kingdoms-details.ejs', {
    //   data: data
    // })
    res.send(data);
  })
  .catch(err => {
    res.send(err)
  })
})

routes.post(':/kingdomId', (req, res) => {

})

module.exports = routes;