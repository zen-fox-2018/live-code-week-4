const Routes = require('express').Router()
const {Soldier} = require('../../models')

Routes.get("/", (req, res) => {
    res.send("soldier nih")
})



module.exports = Routes