require('dotenv').config()

const express = require('express');
const app = express();
const routes = require('./routes/index');
const mongoose = require('./config/mongodb');

app.use(express.json());

app.use('/api', routes);

app.use((req, res, next)=> {
    res.status(404).json({
        error: 'Route Not Found',
    })
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})