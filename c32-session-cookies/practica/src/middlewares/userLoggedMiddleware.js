module.exports = (req, res, next) => {
    if(!req.session.userLogged){
        console.log('No eres tu? anda al login');
        return res.redirect('/users/login')
    }

    console.log('pasaste esta verificacion, estas logueado');
    next()
}