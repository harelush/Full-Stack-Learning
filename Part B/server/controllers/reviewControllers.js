const reviewModel = require('../models/reviewModel');

const getAllReviews = async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    try {
        const reviews = await reviewModel.getAllReviews(page, limit);
        res.json(reviews);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching reviews' });
    }
};

const createReview = async (req, res) => {
    const { reviewerName, content } = req.body;

    try {
        const newReview = await reviewModel.createReview({ reviewerName, content });
        res.status(201).json({ message: 'Review added successfully', review: newReview });
    } catch (error) {
        res.status(500).json({ message: 'Error creating review' });
    }
};

module.exports = {
    getAllReviews,
    createReview,
};
