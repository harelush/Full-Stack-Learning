const postgres = require('../config/postgres');

async function createInvoice({totalAmount}) {
    // At the moment. customer is not implemented on the front end. using temp customer 1; 
    // TODO change later.
    const TEMP_CUSTOMER_ID = 1; 
    const QUERY = 'INSERT INTO public.invoices(customer_id, date, total_amount) VALUES ( $1, $2, $3);';
    

    const result = await postgres.query(QUERY, [TEMP_CUSTOMER_ID, new Date(), totalAmount]);

    return result;
}

module.exports = {
    createInvoice,
}