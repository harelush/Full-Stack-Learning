const express = require('express');
const router = express.Router();
const itemRoutes = require('./itemRoutes');
const customerRoutes = require('./customerRoutes');
const productRoutes = require('./productRoutes');
const reviewRoutes = require('./reviewRoutes');
const orderRoutes = require('./orderRoutes');

router.use('/items', itemRoutes);
router.use('/customers', customerRoutes);
router.use('/prodcuts', productRoutes);
router.use('/reviews', reviewRoutes);
router.use('/orders', orderRoutes);



module.exports = router;