const postgres = require('../config/postgres');

async function getAllProducts() {
    const QUERY = 'SELECT product_id as id, image_src, product_name, price FROM public.products';
    const result = await postgres.query(QUERY);
    return result.rows;
}

module.exports = {
    getAllProducts,
}