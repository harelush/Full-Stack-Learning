const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewControllers');

router.get('/', reviewController.getAllReviews);
router.post('/', reviewController.createReview);

module.exports = router;
