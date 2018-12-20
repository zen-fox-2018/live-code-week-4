const express = require('express')
const app = express()
const kingdoms = require('./routes/kingdomRoutes');
let port = 3000

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended : false }))


app.get('/', function( req, res ) {
  res.send('ini express')
})

app.use('/kingdoms', kingdoms)



app.listen(port, function() {
  console.log('This is listening to port:', port);
})