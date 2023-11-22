const connection = require('../config/connectDB')
const { getAllUsers, getUserByID } = require('../services/CRUDService');

let getHomepage = async (req, res) => {
    let results = await getAllUsers();
    return res.render('home', { dataUser: results });
}

let getUserPage = async (req, res) => {
    let id = req.params.userID
    let user = await getUserByID(id);
    return res.send(JSON.stringify(user));
}

let createNewUser = async (req, res) => {
    let userName = req.body.name;
    let email = req.body.email;
    let phone = req.body.phone;
    let password = req.body.password;

    await connection.query(`INSERT INTO users (name, email, password, phone)
    VALUES (?,?,?,?)`, [userName, email, password, phone])
    return res.redirect('/');
}
module.exports = {
    getHomepage, getUserPage, createNewUser
}