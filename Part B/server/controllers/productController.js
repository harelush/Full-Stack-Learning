const productModel = require('../models/productModel');

const getAllProducts = async (req, res) => {
    const prodcuts = await productModel.getAllProducts();
    res.json(prodcuts);
}

const getProductsrById = async (req, res) => {
    const id = req.params.id;
    const result = await productModel.getProductById(id);
    if(!result) {
        res.status(404).send('Product not found');
    }

    res.json(result);
}

module.exports = { 
    getAllProducts,
    getProductsrById
}