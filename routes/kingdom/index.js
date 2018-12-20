const route = require(`express`).Router()
const Model = require(`../../models`)
const getDistrict = require(`../../helpers/getDistrict`)
const getColor = require(`../../helpers/getColor`)

route.get(`/`, (req, res) => {
    Model.Kingdom.findAll()
        .then((result) => {
            res.render(`./kingdom/index.ejs`, {
                data: result,
                err: req.query.err,
                getColor: getColor
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
            Model.District.findAll()
                .then((district) => {
                    
                    res.render(`./kingdom/detail.ejs`, {
                        data: result,
                        getDistrict: getDistrict,
                        err: req.query.err,
                        district: result.DistrictId ? district : district
                    })
                }).catch((err) => {
                    res.send(err)
                });
        }).catch((err) => {
            res.send(err)
        });
})

route.post(`/:id`, (req, res) => {
    //TODO: DO NOT DELETE
    Model.Kingdom.update({
        DistrictId: req.body.DistrictId
    }, {
            where: {
            id: req.params.id
        }
    }).then((result) => {
        res.redirect(`/kingdoms/${req.params.id}`)
    }).catch((err) => {
        
    });

})

module.exports = route