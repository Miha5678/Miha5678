const express = require ('express')
const bodyParser = require ('body-parser')
const cors = require ('cors')
const morgan = require ('morgan')
const authRoutes = require ('./routes/auth.js')
const app = express ()

app.use (morgan('dev'))
app.use (cors())
app.use (bodyParser.urlencoded({extended:true}))
app.use (bodyParser.json())
app.use ('/api/auth', authRoutes)

module.exports = app