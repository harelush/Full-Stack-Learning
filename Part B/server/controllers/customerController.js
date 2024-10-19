const customerModel = require('../models/customerModel');

const getAllCustomers = async (req, res) => {
    customers.getById()
    const customers = await customerModel.getAllCustomers();
    res.json(customers);
}

const getCustomerById = async (req, res) => {
    const id = req.params.id;
    const result = await customerModel.getCustomerById(id);
    if(!result) {
        res.status(404).send('Customer not found');
    }

    res.json(result);
}

module.exports = { 
    getAllCustomers,
    getCustomerById
}