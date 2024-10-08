const postgres = require('../config/postgres');

async function getAllCustomers() {
    const result = await postgres.query('SELECT * FROM customers');
    return result.rows;
}

module.exports = {
    getAllCustomers,
}