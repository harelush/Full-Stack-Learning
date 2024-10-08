require('dotenv').config()

const express = require('express');
const app = express();
const routes = require('./routes/index');

app.use(express.json());

app.use('/api', routes);

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})