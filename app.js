const express =  require('express')
const app =  express()
const port = 3000
const Kingdoms = require('./routes/kingdoms')
app.set('view engine','ejs')
app.use(express.urlencoded({extended:false}))

app.use('/kingdoms', Kingdoms)
app.listen(port, function() {
    console.log(`llisetn to port ${port}`);
    
})