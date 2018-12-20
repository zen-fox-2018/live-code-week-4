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
    res.send(kingdoms)
  })
  .catch(err =>{
    res.send(err)
  })
})












app.listen(3000, function() {
  console.log("Listen to port 3000")
})

