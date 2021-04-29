const express = require('express')

const PORT = 12103
const app = express()

app.use((req, res, next) => {
  res.header("Accept-CH", Object.keys(req.query).join(','));
  next();
});

app.use(express.static('public'))

app.listen(PORT, () => console.log(`Listening http://localhost:${PORT}`))
