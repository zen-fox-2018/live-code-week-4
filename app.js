const express = require('express')
const app = express()
const port = 3000
const kingdoms = require('./routes/kingdoms')
const soldiers = require('./routes/soldiers')
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))

app.use('/kingdoms', kingdoms)
app.use('/soldiers', soldiers)
app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Server is listening on port ${port}!`))