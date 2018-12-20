const route = require('express').Router()
const kingdom = require('./kingdom')
const soldier = require('./soldier')

route.get('/', (req, res) => {
    res.render('home.ejs')
})
route.use('/kingdoms', kingdom)
route.use('/soldiers', soldier)
route.get('/*' , (req, res ) => {
    res.render('home.ejs')
})
module.exports = route