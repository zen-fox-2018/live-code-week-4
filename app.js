const express = require('express')
const app = express()

// router
const Kingdoms = require('./routes/Kingdom.js')

app.set ('view engine', 'ejs')
app.use(express.urlencoded({extended:false}))
app.use(express.json())

//menggunakan router
app.use('/kingdoms',Kingdoms)



app.listen(3000, function(){
	console.log(`server listening to port 3000`)
})