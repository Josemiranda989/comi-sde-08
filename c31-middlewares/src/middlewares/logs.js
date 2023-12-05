const { appendFileSync } = require('fs')
const { join } = require('path')

module.exports = function (req, res, next) {
    const time = new Date()
    const minutes = time.getMinutes()
    const hours = time.getHours()
    
    let msg = `El usuario ingresó en la URL: ${req.url} a las ${hours}:${minutes}hs
`
    appendFileSync(join(__dirname, '../data/logs.txt'), msg)
    next()
}
