const orderModel = require('../models/orderModel');
const invoiceModel = require('../models/invoiceModel');

const createOrder = async (req, res) => {
    try {
        const {totalAmount} = req.body;

        // Add here evertything that needs to order processs.




        const newInvoice = await invoiceModel.createInvoice({totalAmount});

        res.status(201);
    } catch(error) {

        console.log(error);
        res.status(500).json({error: 'Error creating new order'});
    }
}



module.exports = { 
    createOrder,
}