const express = require('express')
const app = express()
const port = 3000

const indexRoutes = require('./routes/index.routes')

// Config para body
app.use(express.urlencoded())
app.use(express.json())

app.use('/', indexRoutes)

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})
