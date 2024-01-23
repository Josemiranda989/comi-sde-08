const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const app = express();

const indexRouter = require('./routes/index');
//Aquí llamo a las rutas de las APIs
const apiArtistasRouter = require('./routes/api/artistas');
const apiGenerosRouter = require('./routes/api/generos');
const apiMediosRouter = require('./routes/api/medios');
const apiAlbumesRouter = require('./routes/api/albumes');
const apiCancionesRouter = require('./routes/api/canciones');

// view engine setup
app.set('views', path.resolve(__dirname, './views'));
app.set('view engine', 'ejs');

app.use(express.static(path.resolve(__dirname, '../public')));

//URL encode  - Para que nos pueda llegar la información desde el formulario al req.body
app.use(express.urlencoded({ extended: false }));

//Aquí estoy disponiendo la posibilidad para utilizar el seteo en los formularios para el usod e los metodos put ó delete
app.use(methodOverride('_method'));

app.use('/', indexRouter);

//Aquí creo la colección de mis recursos de APIs
app.use('/api/artistas', apiArtistasRouter);
app.use('/api/generos', apiGenerosRouter);
app.use('/api/medios', apiMediosRouter);
app.use('/api/albumes', apiAlbumesRouter);
app.use('/api/canciones', apiCancionesRouter);

//app.use('/api/actors',apiActorsRouter);
//app.use('/api/genres',apiGenresRouter);


//Activando el servidor desde express
const port = 3000
app.listen(port, () => console.log('Servidor corriendo en el puerto http://localhost:' + port));
