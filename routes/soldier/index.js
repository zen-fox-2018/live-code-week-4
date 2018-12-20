const route = require(`express`).Router()

route.get(`/`, (req, res) => {
    res.send(`soldier`)
})
module.exports = route