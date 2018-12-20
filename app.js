const express = require('express')
const app = express()
const kingdoms = require('./routes/kingdoms-route')

app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/kingdoms', kingdoms)


app.listen(3000, () =>{
  console.log('server is listening on port 3000....');
})