const Routes = require('express').Router()
const{Kingdom} = require('../../models')



Routes.get("/", (req, res) => {
    Kingdom.findAll()
        .then((kingdoms) => {
            res.render("kingdoms.ejs", {kingdoms})
        })
        .catch((err) => {
            res.redirect(`/?error= ${err}`)
        })
})






module.exports = Routes