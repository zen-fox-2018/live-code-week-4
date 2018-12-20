const Routes = require('express').Router()
const{Kingdom, Soldier, District} = require("../../models")



Routes.get("/", (req, res) => {
    Kingdom.findAll()
        .then((kingdoms) => {
            res.render("kingdoms.ejs", {kingdoms})
        })
        .catch((err) => {
            console.log(err, "========")
            res.redirect(`/?error= ${err}`)
        })
})

Routes.get("/:kingdomsId", (req, res) => {
    // res.send(req.params)
    let kingdom = null
    Kingdom.findOne({
        where: {
            id: req.params.kingdomsId,
        },
        include: {
            model:Soldier
        }
    })
    .then(Kingdom => {
        kingdom = Kingdom
        res.render("details.ejs", {kingdom})
    })
    .catch(err => {
        console.log(err, "###########")
        res.redirect(`/kingdoms?error=${err}`)
    })
})

Routes.post('/:kingdomsId', (req, res) => {
    res.send(req.body)
})






module.exports = Routes