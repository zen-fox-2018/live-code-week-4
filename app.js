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
        res.render('detailkingdom', {Kingdom:tempKingdom, checkDistrict, Districts, checkedRadioButtonDistrict})
    })
    .catch(err => res.send(err))
})











app.listen(port, () => console.log(` App listening on port ${port}!`))