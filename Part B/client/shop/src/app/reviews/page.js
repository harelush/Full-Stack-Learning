'use client'

import { useState } from 'react';
import styles from './page.module.css';
import ReviewList from '../components/Review/ReviewList';
import ReviewForm from '../components/Review/ReviewForm';

const Reviews = () => {

    const [reviews, setReviews] = useState([
        { id: 1, reviewerName: 'John Doe', content: 'Great product! Highly recommended.' },
        { id: 2, reviewerName: 'Jane Smith', content: 'Works well, but could use some improvements.' },
    ]);

    const [newReview, setNewReview] = useState({
        reviewerName: '',
        content: '',
    });

    const handleNewReviewNameChange = (event) => {
        const { name, value } = event.target;

        setNewReview(prev => {
            return {
                ...prev,
                [name]: value,
            }
        })
    };

    const handleSendNewReview = (event) => {
        event.preventDefault();

        if (newReview.reviewerName && newReview.content) {
            setReviews(prevReviews => {
                return [...prevReviews, { ...newReview }]
            });

            setNewReview(
                {
                    reviewerName: '',
                    content: '',
                }
            );
        }
    }


    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Product Reviews</h1>
            <ReviewList 
                reviews={reviews}
            />
            <ReviewForm 
                newReview={newReview}
                handleNewReviewNameChange={handleNewReviewNameChange}
                handleSendNewReview={handleSendNewReview}
            />
        </div>
    );
}

export default Reviews;