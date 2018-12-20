const express = require('express')
const app = express()
const Model = require('./models')

app.set('view engine','ejs')
app.use(express.urlencoded({extended:false}))

app.get('/', function(req, res) {
  res.send('Hello World')
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
    res.send(kingdoms.kingdomName) 
    // res.render('viewKingdomDetail.ejs',{
    //   data: kingdoms
    // })
  })
  .catch(err =>{
    res.send(err)
  })
})





app.listen(3000, function() {
  console.log("Listen to port 3000")
})

