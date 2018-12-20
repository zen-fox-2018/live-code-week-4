const route = require('express').Router()

route.get('/', (req,res) => {
    // res.send('HELLO')
    res.render('home.ejs')
})

module.exports = route