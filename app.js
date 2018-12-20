const express = require(`express`)
const app = express()
var kingdom = require(`./routes/kingdom/index.js`)
var soldier = require(`./routes/soldier/index.js`)

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.set(`view engine`, `ejs`)

app.use(`/kingdoms`, kingdom)
app.use(`/soldiers`, soldier)
app.get('/', (req, res) => {
    res.redirect(`/kingdoms`)
});

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});