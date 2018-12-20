const route = require(`express`).Router()
const Model = require(`../../models`)

route.post(`/:id`, (req, res) => {
    Model.Soldier.create({
        name: req.body.name,
        attack: req.body.attack,
        KingdomId: req.params.id
    }).then((result) => {
        res.redirect(`/kingdoms/${req.params.id}`)
    }).catch((err) => {
        res.redirect(`/kingdoms/${req.params.id}?err=${err.errors[0].message}`)

    });

    // res.send(req.body)
})

module.exports = route