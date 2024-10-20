'use client'

import { useState, useEffect } from 'react';
import styles from './page.module.css';
import ReviewList from '../components/Review/ReviewList';
import ReviewForm from '../components/Review/ReviewForm';

const Reviews = () => {

    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [newReview, setNewReview] = useState({
        reviewerName: '',
        content: '',
    });

    
    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/reviews');

                if(!response.ok) {
                    throw new Error('Failed to fetch reviews');
                }

                const data = await response.json();
                setReviews(data);
            } catch (e) {
                setError(e.message);
            } finally {
                setLoading(false);
            }
        };

        fetchReviews();
     }
    , []);

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

            {
                loading && <p>Loading...</p>
            }

            {
                error && <p>{error}</p>
            }

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