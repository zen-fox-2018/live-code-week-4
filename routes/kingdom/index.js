const route = require('express').Router()
const {Kingdom, Soldier, District} = require('../../models')
const genDis = require('../../helper/genDistrict')

route.get('/', (req, res) => {
    let msg = null 
    if(req.query) {
        msg = req.query.msg
    }
    Kingdom.findAll()
        .then(data => {
            res.render('kingdoms.ejs', {data, msg})
        })
        .catch(err => {
            res.redirect('/?msg= Error getting all kingdom')
        })
})

route.get('/:kingdomId' , (req, res ) => {
    let msg = null 
    if(req.query) {
        msg = req.query.msg
    }
    Kingdom.findOne({ where: {id: req.params.kingdomId}, include: {model: Soldier}}) //soldier yg instance belom bisa jd pk ini dulu
    .then(data => {
        District.findAll()
            .then(dataDis => {
                let dis = genDis(data.id)
                res.render('detailKingdom.ejs' , {data, dataDis, dis, msg})
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
    // Kingdom.findAll({where: {
    //     DistrictId: req.body.DistrictId
    // }})
    //     .then(data => {
    //         if(data == '[]') {
                Kingdom.findByPk(req.params.kingdomId) //g bs keupdate
                    .then(mykingdom => {
                        mykingdom.save({DistrictId: req.body.DistrictId})
                            .then(habisup => {
                                res.redirect(`/kingdoms/${req.params.kingdomId}?msg = success add district`)
                            })
                            .catch(errUp => {
                                res.send(errUp)
                            })
                    })
            // } 
            // else {
            //     Kingdom.findOne({where: {id: req.params.kingdomId}, include: [{model: Soldier}]})
            //         .then(dataKingdom => {
            //             // res.send(dataKingdom)
            //             let atkLawan = 0
            //             let atkMe = 0
            //             for (let i = 0; i < data.Soldiers.length; i++) {
            //                 atkLawan += data.Soldiers[i].attack
            //             }
            //             for (let i = 0; i < dataKingdom.Soldiers.length; i++) {
            //                 atkMe += dataKingdom.Soldiers[i].attack
            //             }

            //             if(atkLawan < atkMe) {
            //                 dataKingdom.save({DistrictId: req.body.DistrictId})
            //                     .then(success => {
            //                         data.save({DistrictId: null})
            //                             .then(successDel => {
            //                                 res.redirect(`/kingdoms/${req.params.kingdomId}?msg = success add district`)
            //                             })
            //                             .catch(errDel => {res.send(errDel)})
            //                     })
            //                     .catch(errSave => {
            //                         res.redirect(`/kingdoms/${req.params.kingdomId}?msg = failed add district`)
            //                     })
            //             } else {
            //                 res.redirect(`/kingdoms/${req.params.kingdomId}?msg = failed add district`)
            //             }
            //         })
            //         .catch(errKingdom => {
            //             res.send(errKingdom)
            //         })
                // res.send(data)
            // }
        // })
        // .catch(err => {
        //     res.send(err)
        // })
})

module.exports = route