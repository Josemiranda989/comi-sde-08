const fs = require('fs')
const path = require('path')
const { v4: uuidv4 } = require('uuid');
const bcryptjs = require('bcryptjs')

const usersPath = path.join(__dirname, '../data/users.json')
const users = JSON.parse(fs.readFileSync(usersPath, 'utf-8'))

module.exports = {
    register: (req, res) => {
        res.render('users/register.ejs')
    },
    processRegister: (req, res) => {
        // obtener la info del formulario
        let { email, password } = req.body
        // el usuario no tiene que estar registrado
        let userFound = users.find(user => user.email == email)
        if(userFound){
            return res.send('El usuario ya está registado con ese email')
        }
        // debemos guardar ese nuevo usuario
        const newUser = {
            id:  uuidv4(),
            email: email,
            password: bcryptjs.hashSync(password, 10),
        }
        users.push(newUser)
        fs.writeFileSync(usersPath, JSON.stringify(users, null, ' '))
        // redirigir a home
        res.redirect('/')
    },
    login: (req, res) => {
        console.log(req.session?.userLogged);
        res.render('users/login.ejs')
    },
    processLogin: (req, res) => {
        // obtener los datos del form
        let { email, password, rememberme} = req.body
        //  buscar usuario y checkear password y email si coincide con alguno de nuestra base
        let userFound = users.find(user => user.email == email)
        if(userFound && bcryptjs.compareSync(password, userFound.password)){
            // si existe, guardalo en session
            req.session.userLogged = userFound
            // el usuario puso recordarme?
            if(rememberme == 'on'){
                res.cookie('rememberme', userFound.email, {maxAge: 60000 * 60})
            }
            // redireccione al home
            console.log('Todo salió ok, estas logueado');
            res.redirect('/users/profile')
        } else {
            res.send('El password o email es incorrecto')
        }

    }, profile: (req, res)=>{
        res.render('users/profile.ejs', {user: req.session.userLogged})
    },
    logout:(req, res) =>{
        req.session.userLogged = undefined
        // req.session.destroy()
        res.clearCookie('rememberme')
        res.redirect('/')
    }
}