let juegos = [
  {
    id: 1,
    nombre: 'Call of duty'
  },
  {
    id: 2,
    nombre: 'Overwatch'
  },
  {
    id: 3,
    nombre: 'Batman'
  }
]

const controller = {
  detail: (req, res) => {
    let id = req.params.id
    let juegoEncontrado = juegos.find(juego => juego.id == id)
    if(juegoEncontrado){
      res.render('products/detail', { juego: juegoEncontrado })
    } else {
      res.redirect('/')
    }
  },
  create: (req, res) => {
    res.render('products/create')
  }
}

module.exports = controller;