'use strict'

const express = require('express')
const app = express()
const port = 3000
const Routes = require('./routes')

app.set('view engine', "ejs")
app.use(express.urlencoded({extended:false}))


app.use("/", Routes)


app.listen(port, () => {
    console.log('you are listening to port 3000')
})