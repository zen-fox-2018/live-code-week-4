const express = require('express')

const route = require('./routes')
const kingdom = require('./routes/kingdom')
const soldier = require('./models/soldier')

const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))

app.use('/', route)
app.use('/kingdoms', kingdom)
app.use('/soldiers', soldier)

app.listen(port, (req, res) => {
    console.log('Running on port .... ', port)
})