const express = require('express')
const port = 3000
const app = express()
const route = require('./routes')

app.set('view engine' , 'ejs')
app.use(express.urlencoded({extended: false}))
app.use('/', route)

app.listen(port, () => {
    console.log(`App listening to port ${port}`)
})