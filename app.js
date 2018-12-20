const express = require(`express`)
var kingdom = require(`./routes/kingdom/index.js`)
var soldier = require(`./routes/soldier/index.js`)
const app = express()

app.set(`view engine`, `ejs`)
app.set(express.urlencoded({ extended: true }))
app.set(express.json())

app.use(`/kingdoms`, kingdom)
app.use(`/soldiers`, soldier)
app.get('/', (req, res) => {
    res.redirect(`/kingdoms`)
});

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});