const express = require('express');
const homeController = require('../controller/homeController');

let route = express.Router();

const initWebroute = (app) => {
    route.get('/', homeController.getHomepage);
    route.get('/detail/user/:userID', homeController.getUserPage);
    route.post('/create-new-user', homeController.createNewUser)
    route.get('/about', (req, res) => {
        res.send('Hello I\'m Duy Gau');
    })

    return app.use('/', route);
}
// export default initWebroute;
module.exports = {
    initWebroute
};