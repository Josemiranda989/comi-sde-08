const express = require('express');
const path = require('path');
const methodOverride = require('method-override')

const routerIndex = require('./routes/index')
// const routerDetail = require('./routes/productDetail')

const app = express();
// Configuraciones
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(methodOverride('_method'))

// Carpeta estatica
app.use(express.static(path.join(__dirname, 'public')));

// View engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));



app.use('/', routerIndex)
// app.use('/detail', routerDetail)

const port = 3030;
app.listen(port, () => {
    console.log(`Servidor iniciado en http://localhost:${port}`);
});


/* 
- Empiezan por app hacen toda la configuracion
- Si tienen ya creadas las vistas:
    - Crean un archivo en el controllador y renderizan la vista para ver que funcione
    - Van a routes, hacen la configuracion y requieren el archivo que crearon en el controlador
    - Van a APP requiren la ruta creada y setean la URL raiz y le asignan la variable que almacena la ruta
- Si no tienen las vistas:
    - Crean las vistas
    - Crean un archivo en el controllador y renderizan la vista para ver que funcione
    - Van a routes, hacen la configuracion y requieren el archivo que crearon en el controlador
    - Van a APP requiren la ruta creada y setean la URL raiz y le asignan la variable que almacena la ruta


FLUJO MVC:
APP
CONTROLADOR
ROUTES
APP
*/ 