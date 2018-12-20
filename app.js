const express = require('express');
const app = express();
const port = 3000;
const kingdom = require('./routes/kingdom.js')

app.use(express.urlencoded({ extended: false }));
app.set('view engine','ejs');

app.use('/kingdoms', kingdom);



app.listen(port, ()=> console.log(`server is listening on port ${port}`));
