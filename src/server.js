const express = require('express');
const configViewEngine = require('./config/viewEngine');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 1906;

configViewEngine(app);

app.get('/', (req, res) => {
    res.render('home');
})

app.listen(port, () => {
    console.log(`App running on: http://localhost:${port}`);
})