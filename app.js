const express = require('express')
const app = express()
const port = 3000
const Kingdom = require('./routes/kingdom')
const Soldier = require('./routes/soldier')

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))

app.use('/kingdoms', Kingdom)
app.use('/soldiers', Soldier)

app.listen(port, () => {
    console.log(`Now you're on port ${port}`)
})