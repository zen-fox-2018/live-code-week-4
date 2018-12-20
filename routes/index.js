const route = require('express').Router()

route.get('/', (req,res) => {
    res.send('HELLO')
})

module.exports = route