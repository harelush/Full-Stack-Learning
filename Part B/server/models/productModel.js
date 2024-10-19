const postgres = require('../config/postgres');

async function getAllProducts() {
    const result = await postgres.query('SELECT * FROM products;');
    return result.rows;
}

async function getProductById(id) {
    const result = await postgres.query('SELECT * FROM products WHERE product_id = $1;', [id]);
    return result.rows[0];
}

module.exports = {
    getAllProducts,
    getProductById,
}