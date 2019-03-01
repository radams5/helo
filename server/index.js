const express = require('express')
require('dotenv').config()
const massive = require('massive')
ctrl = require('./controller')

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env
const app = express()
app.use(express.json())


massive(CONNECTION_STRING).then(db => {
  app.set('db', db)
  console.log('db connected')
  PORT = SERVER_PORT
  app.listen(PORT, () => {console.log('server running on 4000')})
})

app.post('/api/register', ctrl.register)
app.post('/api/login', ctrl.login)
// app.get('/api/posts', ctrl.getPosts)
