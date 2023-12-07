const express = require('express')
const cookieParser = require('cookie-parser')
const path = require('path')
const session = require('express-session')
const remembermeMiddleware = require('./middlewares/remembermeMiddleware')

const app = express()

app.set('views', path.resolve(__dirname, './views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({
    extended:true
}))
app.use(express.json())
app.use(session({
    secret: 'Me encanta la milanesa',
    resave: true,
    saveUninitialized: false
}))
app.use(cookieParser())
app.use(remembermeMiddleware)

app.use(express.static(path.resolve(__dirname, './public')));

const mainRoutes = require('./routes/main.routes')
const userRoutes = require('./routes/users.routes')
app.use('/', mainRoutes)
app.use('/users', userRoutes)

const port = 3000
app.listen(port, ()=>{
    console.log(`Servidor corriendo en http://localhost:${port}`);
})