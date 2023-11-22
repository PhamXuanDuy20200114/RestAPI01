const express = require('express');
const configViewEngine = require('./config/viewEngine');
require('dotenv').config();
const { initWebroute } = require('./route/web')
//const connection = require('./config/connectDB');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 1906;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

configViewEngine(app);

initWebroute(app);

// connection.query('SELECT * FROM users', (err, result, fields) => {
//     console.log(result)
// })

app.listen(port, () => {
    console.log(`App running on: http://localhost:${port}`);
})