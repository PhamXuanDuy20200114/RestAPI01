const connection = require('../config/connectDB')
const { getAllUsers } = require('../services/CRUDService');

let getHomepage = async (req, res) => {
    let results = await getAllUsers();
    return res.render('home', { dataUser: results });
}

module.exports = {
    getHomepage
}