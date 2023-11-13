const express = require('express');
const configViewEngine = require('./config/viewEngine');

const app = express();
const port = 1906;

configViewEngine(app);

app.get('/', (req, res) => {
    res.render('home');
})

app.listen(port, () => {
    console.log(`App running on: http://localhost:${port}`);
})