const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const Model = require('./models')

app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))

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

app.get('/kingdoms/:id', (req, res) => {
  let id = req.params.id
  Model.Kingdom.findOne({
    where: {
      id: id
    },
    include: {
      model: Model.Soldier
    }
  })

  .then((kingdom) => {
    // res.send(kingdom)
    res.render('detail-kingdom' ,{
      kingdom: kingdom
    })
  })

  .catch((err) => {
    res.send(err)
  })
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))