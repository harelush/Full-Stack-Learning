const postgres = require('../config/postgres');

async function getAllProducts() {
    const QUERY = 'SELECT product_id AS id, image_src AS image, product_name AS name, price FROM products';
    const result = await postgres.query(QUERY);

    return result.rows;
}

async function getProductById(id) {
    const QUERY = 'SELECT product_id AS id, image_src AS image, product_name AS name, price, description FROM products where product_id = $1';
    const result = await postgres.query(QUERY, [id]);
    return result.rows[0];
}

module.exports = {
    getAllProducts,
    getProductById,
}