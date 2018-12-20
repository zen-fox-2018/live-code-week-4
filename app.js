const express = require('express')
const app = express()
const port = 3000
const Model = require('./models')
const checkDistrict = require('./helpers/checkDistrict')
const checkedRadioButtonDistrict = require('./helpers/checkedRadioButtonDistrict')

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:false}))




app.get('/', (req, res) => res.render('home'))

app.get('/kingdoms', (req, res)=> {
    Model.Kingdom.findAll()
    .then(Kingdoms=> {
        // res.send(Kingdoms)
        res.render('kingdom.ejs', {Kingdoms})
    })
    .catch(err => res.send(err))
})

app.get('/kingdoms/:kingdomId', (req, res)=> {
    let info = req.query.info
    let err = req.query.err
    let tempKingdom = {}
   let kingdomId = req.params.kingdomId
   Model.Kingdom.findByPk(kingdomId, {include:[
       {model: Model.Soldier}, {model: Model.District}
   ]})
    .then(Kingdom=> {
        // res.send(Kingdom)
        tempKingdom= Kingdom
        return Model.District.findAll()
    })
    .then(Districts => {
        // res.send(tempKingdom)
        res.render('detailkingdom', {Kingdom:tempKingdom, checkDistrict, Districts, checkedRadioButtonDistrict, info, err})
    })
    .catch(err => res.send(err))
})

app.post('/soldiers/:kingdomId', (req, res)=> {
    let kingdomId = req.params.kingdomId
    let objSoldier = {
        name: req.body.name,
        attack : req.body.attack,
        KingdomId: kingdomId
    }
    Model.Soldier.create(objSoldier)
    .then(()=> {
        res.redirect(`/kingdoms/${kingdomId}?info=Success add soldier`)
    })
    .catch(err=> res.redirect(`/kingdoms/${kingdomId}?err=${err}`))
})

app.post('/kingdoms/:kingdomId', (req, res)=> {
   let kingdomId =  req.params.kingdomId 
   let districId = req.body.DistrictId 
    let objUpdate = {
        DistrictId: districId
    }
    Model.Kingdom.update(objUpdate, {where : {
        id:kingdomId
    } , individualHooks : true})
    .then(()=> {
        res.redirect(`/kingdoms/${kingdomId}?info=Success get District`)
    })
    .catch(err=> {
        res.redirect(`/kingdoms/${kingdomId}?err=${err}`)
    })
})

app.get('/soldiers', (req, res)=> {
    
})







app.listen(port, () => console.log(` App listening on port ${port}!`))