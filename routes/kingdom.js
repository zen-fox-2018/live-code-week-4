const router = require('express').Router();
const db = require('../models');

router.get('/', (req, res) => {

  db.Kingdom.findAll()

    .then((result) => {
      res.render('kingdom', { dataKingdoms: result });
    })
    .catch((err) => {
      res.send(err);
    });
})

router.get('/:id', (req, res) => {

});


module.exports = router;