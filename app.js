const express = require('express')
const app = express()

const districtRoutes = require('./routes/districtRoutes.js')
const kingdomRoutes = require('./routes/kingdomRoutes.js')
const soldierRoutes = require('./routes/soldierRoutes.js')

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))

app.use('/districts', districtRoutes)
app.use('/kingdoms', kingdomRoutes)
app.use('/soldiers', soldierRoutes)


app.get('/', (req, res) => {
  res.send('home');
})

app.listen(3000, () => {
  console.log('listening to port ----- 3000');
})