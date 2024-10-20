'use client'

import { useState, useEffect, useRef } from 'react';
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

    const [page, setPage] = useState(1);
    const [fetching, setFetching] = useState(false);

    const reviewsContainerRef = useRef(null);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/reviews?page=${page}&limit=5`);

                if(!response.ok) {
                    throw new Error('Failed to fetch reviews');
                }

                const data = await response.json();
                console.log('got data ', data)
                setReviews((prevReviews) => [...prevReviews, ...data]);

                if (data.length === 0) {
                    setFetching(false);
                }
            } catch (e) {
                setError(e.message);
            } finally {
                setLoading(false);
            }
        };

        fetchReviews();
     }
    , [page]);

    useEffect(() => {
        const container = reviewsContainerRef.current;
        container.addEventListener('scroll', handleScroll);
        return () => {
            container.removeEventListener('scroll', handleScroll);
        };
    }, [loading, fetching]);

    const handleScroll = () => {
        console.log('scrolling');

        if (reviewsContainerRef.current) {
            const { scrollTop, scrollHeight, clientHeight } = reviewsContainerRef.current;
            if (scrollTop + clientHeight >= scrollHeight - 5 && !fetching && !loading) {
                console.log('finish scroll');
                setPage((prevPage) => prevPage + 1); // Fetch the next page
            }
        }
    };

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
                reviewsContainerRef={reviewsContainerRef}
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