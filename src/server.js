const express = require('express');
const configViewEngine = require('./config/viewEngine');
require('dotenv').config();
const { initWebroute } = require('./route/web')

const app = express();
const port = process.env.PORT || 1906;

configViewEngine(app);

initWebroute(app);


app.listen(port, () => {
    console.log(`App running on: http://localhost:${port}`);
})