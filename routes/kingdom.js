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
    include: [
      {
        model: db.District,
      }, {
        model: db.Soldier
      }
    ],
    where: {
      id: req.params.id
    }
  })

    .then((result) => {
      // res.send(result)
      res.render('dataKingdom', { detailKingdoms: result});
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

    .then((result) => {
      res.redirect('/kingdoms');
    })
    .catch((err) => {
      res.send(err);
    });
});


module.exports = router;