const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World1')
  res.end('Hello world2')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
