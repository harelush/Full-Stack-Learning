const { query } = require('express');
const {Pool} = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'postgres',
    port: 5432,
});

pool.on('connect', () => {
    console.log('connected to the db');
});

module.exports = {
    query: (text, params) => pool.query(text, params),
}