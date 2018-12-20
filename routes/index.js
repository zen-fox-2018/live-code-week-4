const Routes = require("express").Router()
const kingdomsRoutes = require('./kingdoms')
const soldiersRoutes = require('./soldiers')


Routes.get('/', (req, res) => {
    res.render("home.ejs")
})

Routes.use("/kingdoms", kingdomsRoutes)
Routes.use('/soldiers', soldiersRoutes)









module.exports = Routes