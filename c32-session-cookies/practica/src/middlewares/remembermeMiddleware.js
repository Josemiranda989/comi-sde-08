const fs = require('fs')
const path = require('path')

module.exports = (req, res, next) => {
    if(req.cookies.rememberme != undefined && req.session.userLogged == undefined){
        const usersPath = path.join(__dirname, '../data/users.json')
        const users = JSON.parse(fs.readFileSync(usersPath, 'utf-8'))
        let userFound = users.find(user => user.email == req.cookies.rememberme)
        req.session.userLogged = userFound
    }
    next()
}