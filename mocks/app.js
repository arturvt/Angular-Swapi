const express = require('express')
const app = express()
const port = 3000;
const people = require('./routes/people');
const planet = require('./routes/planet');

app.get('/', (_, res) => {
  res.send('Hello World!')
})

app.use('/api/people', people);
app.use('/api/planets', planet);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})