const express = require('express')
require('dotenv').config()
const massive = require('massive')

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env
const app = express()
app.use(express.json())


massive(CONNECTION_STRING).then(db => {
  app.set('db', db)
  console.log('db connected')
  PORT = SERVER_PORT
  app.listen(PORT, () => {console.log('server running on 4000')})
})

