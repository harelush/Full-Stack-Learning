const customerModel = require('../models/customerModel');

const getAllCustomers = async (req, res) => {
    const customers = await customerModel.getAllCustomers();
    res.json(customers);
}

module.exports = { 
    getAllCustomers,
}