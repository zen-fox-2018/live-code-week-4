const express = require('express')
const router = express.Router()
const Model = require('../models')

router.get('/',(req,res)=>{
    Model.Kingdoms.findAll()
    .then(allKingdomData=>{
        // res.send(allKingdomData)
        res.render('Kingdom.ejs',{data:allKingdomData})
    })
    .catch(err=>{
        res.send(err)
    })
})

router.get('/:id',(req,res)=>{
    let kingdomId = req.params.id
    let kerajaan
    Model.Kingdoms.findByPk(kingdomId,{
        
        include : [
            {
                model : Model.Soldiers
            }
        ]
    })
    .then(kingdomData=>{
        // res.send(kingdomData)
        kerajaan = kingdomData
        return Model.District.findAll()
        // res.render('detailKingdom.ejs',{data:kingdomData})
    })
    .then(allDistrictData=>{
        // res.send(kerajaan)
        res.render('detailKingdom.ejs',{data:kerajaan, distrik : allDistrictData})
    })
    .catch(err=>{
        res.send(err)
    })
})

router.post('/:kingdomId',(req,res)=>{
    let idKerajaan = req.params.kingdomId
    let newKingdomData = req.body
    let objKingdom = {
        id : idKerajaan,
        DistrictId : newKingdomData['districtId']
    }
    Model.Kingdoms.update(objKingdom, {
        where : {id : idKerajaan}
    })
    .then(()=>{
        res.redirect(`/kingdoms/${idKerajaan}`)
    })
})


module.exports = router