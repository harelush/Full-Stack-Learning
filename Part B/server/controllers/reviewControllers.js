const reviewModel = require('../models/reviewModel');

const createReview = async (req, res) => {
    try {
        const {reviewerName, content} = req.body;

        const newReview = await reviewModel.createReview({reviewerName, content});

        res.status(201).json(newReview);
    } catch(error) {
        res.status(500).json({error: 'Error creating new review'});
    }
}

const getAllReviews = async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;

    try {
        const reviews =  await reviewModel.getAllReviews(page, limit);
        
        res.json(reviews);
    } catch(error) {
        res.status(500).json({error: 'Error getting all reviews'});
    }
}


module.exports = { 
    createReview,
    getAllReviews,
}