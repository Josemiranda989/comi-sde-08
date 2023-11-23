
const controller = {
  home: (req, res) => {
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
    res.render('home', { juegos })
  }
}

module.exports = controller;