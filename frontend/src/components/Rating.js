import React, { useState } from 'react';

const Rating = ({ rating, onRate }) => {
    const [hoverRating, setHoverRating] = useState(0);

    return (
        <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
                <button
                    key={star}
                    onClick={() => onRate(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    className={`text-2xl ${star <= (hoverRating || rating) ? 'text-yellow-500' : 'text-gray-300'}`}
                >
                    ★
                </button>
            ))}
        </div>
    );
};

export default Rating;