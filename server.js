const express = require('express')
const serverStatic = require('server-static')
const path = require('path')

const app = express()

app.use('/', serverStatic(path.join(__dirname, '/dist')))

const PORT = process.env.port||'8080';
app.listen(port)

console.log('port: ' + port)