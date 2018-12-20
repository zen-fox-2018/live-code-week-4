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

  let tmp = [];

  db.Kingdom.findOne({
    where: {
      id: req.params.id
    }
  })

    .then((result) => {
      tmp = result;
      return db.District.findAll()
    })
    .then(data => {
      res.send(data)
      // res.render('dataKingdom', { detailKingdoms: result }, { district: data });
    })
    .catch((err) => {
      res.send(err);
    });

});

router.post('/:id', (req, res) => {

  db.Soldier.create(
    {
      name: req.body.name,
      attack: req.body.attack,
      KingdomId: req.params.id
    }
  )
});


module.exports = router;