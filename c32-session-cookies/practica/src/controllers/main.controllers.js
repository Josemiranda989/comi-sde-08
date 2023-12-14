module.exports = {
    home:(req, res) =>{
        if(req.session.visits == undefined){
            req.session.visits = 0;
        }
        req.session.visits++

        res.render('home.ejs', {visits: req.session.visits, user: req.session.userLogged})
    },
    visits: (req, res) => {
        res.render('visits.ejs', {visits: req.session.visits})
    }
}