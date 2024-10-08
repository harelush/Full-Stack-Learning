const express = require('express');
const router = express.Router();
const itemRoutes = require('./itemRoutes');
const customerRoutes = require('./customerRoutes');


router.use('/items', itemRoutes);
router.use('/customers', customerRoutes);


module.exports = router;