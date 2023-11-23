const path = require('path')

const controller = {
  detail: (req, res) => {
    console.log(req.params.sabor)
   
      res.sendFile(path.join(__dirname, '../views', 'detail.html'))
 
  },
  create: (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'create.html'))
  }
}

module.exports = controller;