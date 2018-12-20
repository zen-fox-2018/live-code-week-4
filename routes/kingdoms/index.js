const Routes = require('express').Router()
const{Kingdom, Soldier, District} = require("../../models")



Routes.get("/", (req, res) => {
    Kingdom.findAll()
        .then((kingdoms) => {
            res.render("kingdoms.ejs", {kingdoms})
        })
        .catch((err) => {
            
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
       return District.findAll()
    })
    .then(districts => {
        res.render("details.ejs", {kingdom, districts})
    })
    .catch(err => {
        res.redirect(`/kingdoms?error=${err}`)
    })
})

Routes.post('/:kingdomsId', (req, res) => {
    District.checkKingdom()
        .then(data => {
            if (data === true) {

            } else {
                Kingdom.findOne({where: {
                    id: req.params.kingdomsId
                }}) 
                .then(data => {
                    if (data) {
                        data.DistrictId = req.body.DistrictId
                      return  Kingdom.update(data, {id:req.params.kingdomsId})
                    }
                })
                .then((data) => {

                })
            }
        })
        .catch((err) => {
            console.log(err)
        })
})






module.exports = Routes