const express = require('express')
const app = express()
const Model = require('./models')

app.set('view engine','ejs')
app.use(express.urlencoded({extended:false}))

app.get('/', function(req, res) {
  res.send('Romawi Battle')
})

app.get('/kingdoms', function(req, res) {
  Model.Kingdom.findAll({})
  .then(kingdoms =>{
    res.render('viewKingdom.ejs',{data: kingdoms})
  })
  .catch(err =>{
    res.send(err)
  })
})

app.get('/kingdoms/:kingdomId', function(req, res) {
  Model.Kingdom.findByPk(req.params.id)
  .then(kingdoms =>{
    return  Model.Kingdom.findAll({})
    // console.log(kingdoms,'rrrrrrrrrrrrrrrrrrr')
    // res.send(kingdoms)
    // res.render('viewKingdomDetail.ejs',{
    //   data: kingdoms
    // })
  })
  .then(detail =>{
    res.render('viewKingdomDetail.ejs',{data: detail})
    // res.send(detail)
  })
  .catch(err =>{
    res.send(err)
  })
})





app.listen(3000, function() {
  console.log("Listen to port 3000")
})

