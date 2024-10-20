const mongoose = require('mongoose');


const reviewSchema = new mongoose.Schema({
    reviewerName: {type: String, required: true},
    content: {type: String, required: true},
    date: {type: Date, default: Date.now},
});

const Review = mongoose.model('Review', reviewSchema);

async function getAllReviews() {
    return await Review.find();
}

async function createReview(review) {
    const newReview = new Review(review);
    await newReview.save();

    return newReview;
}

module.exports = {
    createReview,
    getAllReviews,
}