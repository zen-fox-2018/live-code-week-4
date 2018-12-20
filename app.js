const express = require('express')
const app = express()
const port = 3000
const Model = require('./models')

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
   let kingdomId = req.params.kingdomId
   Model.Kingdom.findByPk(kingdomId, {include:[
       {model: Model.Soldier}, {model: Model.District}
   ]})
    .then(Kingdom=> {
        res.send(Kingdom)
      
        // res.render('detailkingdom', {Kingdom})
    })
    .catch(err => res.send(err))

})










app.listen(port, () => console.log(` App listening on port ${port}!`))