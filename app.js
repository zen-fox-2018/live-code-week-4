const express = require('express')
const kingdom = require('./routes/kingdom')

const app = express()
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:false}))
app.get
app.use('/kingdoms', kingdom)
app.get('/', function(req, res) {
  res.render('./partials/nav.ejs')
})

app.listen(3000, function() {
  console.log('PORT 3000 START...')
})