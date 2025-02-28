import React, { useState } from 'react';
import reviewService from '../../services/review';

const Review = () => {
  const [review, setReview] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await reviewService.createReview({ review });
    console.log('Review Submitted:', response);
  };

  return (
    <div>
      <h1>Leave a Review</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
          placeholder="Write your review here..."
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Review;