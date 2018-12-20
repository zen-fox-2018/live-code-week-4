const route = require('express').Router()
const {Kingdom, Soldier, District} = require('../../models')

route.get('/', (req, res) => {
    Kingdom.findAll()
        .then(data => {
            res.render('kingdoms.ejs', {data})
        })
        .catch(err => {
            res.redirect('/?msg= Error getting all kingdom')
        })
})

route.get('/:kingdomId' , (req, res ) => {
    Kingdom.findOne({ where: {id: req.params.kingdomId}, include: {model: Soldier}}) //soldier yg instance belom bisa jd pk ini dulu
    .then(data => {
        // res.send(data)
        District.findAll()
            .then(dataDis => {
                res.render('detailKingdom.ejs' , {data, dataDis})
            })
            .catch(errdis => {
                console.log(errdis,'errrrdis')
                res.send(errdis)
            })
    })
    .catch(err => {
        console.log(err, 'errrr')
        res.send(err)
    })
})

route.post('/:kingdomId' , (req, res ) => {

})

module.exports = route