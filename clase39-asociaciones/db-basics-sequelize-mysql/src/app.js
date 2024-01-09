const path = require('path');
const express = require('express');
const app = express();

const indexRoutes = require('./routes/index.routes')
const productsRoutes = require('./routes/products.routes')
const usersRoutes = require('./routes/users.routes')


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

const port = process.env.PORT || 3000;

app.use(indexRoutes);
app.use('/productos', productsRoutes);
app.use('/usuarios', usersRoutes);

app.use(function(req, res, next) {
    res.status(404).send('Lo siento, lo que buscas no existe');
  });

app.listen(port, ()=> {
    console.log(`Server running in http://localhost:${port}`);
});