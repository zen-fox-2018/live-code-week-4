const route = require(`express`).Router()
const Model = require(`../../models`)
const getDistrict = require(`../../helpers/getDistrict`)

route.get(`/`, (req, res) => {
    Model.Kingdom.findAll()
        .then((result) => {
            res.render(`./kingdom/index.ejs`, {
                data: result,
                err: req.query.err
            })
        }).catch((err) => {
            res.send(err)
        });
})

route.get(`/:id`, (req, res) => {
    Model.Kingdom.findOne({
        where: {
            id: req.params.id
        },
        include: [{
            model: Model.Soldier
        }]
    })
        .then((result) => {
            // res.send(result)
            res.render(`./kingdom/detail.ejs`, {
                data: result,
                getDistrict: getDistrict,
                err: req.query.err
            })
        }).catch((err) => {
            res.send(err)
        });
})

module.exports = route