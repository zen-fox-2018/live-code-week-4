const express =  require('express')
const app =  express()
const port = 3000

app.set('view engine','ejs')
app.use(express.urlencoded({extended:false}))

app.listen(port, function() {
    console.log(`llisetn to port ${port}`);
    
})