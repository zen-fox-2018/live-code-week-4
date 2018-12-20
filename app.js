const express = require('express');
const app = express();
const port = 3000;

// require routes
const homepage = require('./routes/home');
const kingdom = require('./routes/kingdom');


app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



// routes
app.use('/', homepage);
app.use('/kingdoms', kingdom)


app.listen(port, () => {
  console.log(`Running on port ${port}`);
});