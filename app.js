const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const Model = require('./models')
const getDistrict = require('./helpers/getDistrict')

app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended: false}))

app.get('/kingdoms', (req, res) => {
  Model.Kingdom.findAll()
    .then((kingdoms) => {
      // res.send(kingdoms)
      res.render('kingdoms', {
        kingdoms: kingdoms
      })
    })

    .catch((err) => {
      res.send(err)
    })
})

app.get('/kingdoms/:kingdomId', (req, res) => {
  let id = req.params.kingdomId
  let err = req.query.err
  let detailKingdom = {}
  let listDistricts = []

  Model.Kingdom.findOne({
    where: {
      id: id
    },
    include: {
      model: Model.District
    }
  })

  .then((kingdom) => {
    detailKingdom = kingdom
    return Model.District.findAll()
  })

  .then((districts) => {
    listDistricts = districts
    return Model.Soldier.getJumlahPasukan(id)
  })

  .then((jumlah) => {
    // res.send(listDistricts)
    res.render('detail-kingdom' ,{
      kingdom: detailKingdom,
      jumlahPasukan: jumlah,
      getDistrict: getDistrict,
      districts: listDistricts,
      err: err
    })
  })

  .catch((err) => {
    res.send(err)
  })
})

app.post('/soldiers/:kingdomId', (req, res) => {
  let kingdomId = req.params.kingdomId
  let newSoldier = {
    name: req.body.soldierName,
    attack: req.body.attack,
    KingdomId:kingdomId
  }
  // res.send(newSoldier)
  Model.Soldier.create(newSoldier)
    .then((soldier) => {
      res.redirect(`/kingdoms/${kingdomId}`)
    })

    .catch((err) => {
      // res.send(err)
      res.redirect(`/kingdoms/${kingdomId}?err=${err}`)
    })
})

app.post('/kingdoms/:kingdomId', (req, res) => {
  let kingdomId = req.params.kingdomId
  // res.send(kingdomId)
  let districtId = req.body.districtId
  Model.Kingdom.update(
    {
      DistrictId: districtId
    }, {
      where: {
        id: kingdomId
      }
    }
  )
    .then((data) => {
      res.redirect(`/kingdoms/${kingdomId}`)
    })

    .catch((err) => {
      res.send(err)
    })
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))