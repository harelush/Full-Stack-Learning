import ReviewCard from './ReviewCard';
import styles from './ReviewList.module.css';

const ReviewList = ({ reviews, reviewsContainerRef }) => {
    console.log('now data is', reviews)

    return (
        <div className={styles.reviewList} ref={reviewsContainerRef}>
            {
                reviews.map((review) => {
                    return (
                        <ReviewCard
                            key={review._id}
                            reviewerName={review.reviewerName}
                            content={review.content}
                        />
                    )
                })
            }
        </div>
    );
}

export default ReviewList;