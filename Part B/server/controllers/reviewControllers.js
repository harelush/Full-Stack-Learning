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
    try {
        const reviews =  await reviewModel.getAllReviews();
        
        res.json(reviews);
    } catch(error) {
        res.status(500).json({error: 'Error getting all reviews'});
    }
}


module.exports = { 
    createReview,
    getAllReviews,
}