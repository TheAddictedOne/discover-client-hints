const fs = require('fs')
const path = require('path')
const https = require('https')
const express = require('express')

const PORT = 443
const app = express()
const server = https.createServer({
  key: fs.readFileSync(path.resolve(__dirname, 'localhost-key.pem')),
  cert: fs.readFileSync(path.resolve(__dirname, 'localhost.pem'))
}, app)

app.use((req, res, next) => {
  const value = Object.keys(req.query).join(',')
  console.log(value)
  res.header("Accept-CH", value);
  next();
 });

app.use(express.static('public'))

server.listen(PORT, () => console.log(`Listening https://localhost:${PORT}`))
