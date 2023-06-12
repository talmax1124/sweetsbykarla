// Page ID = 747613315347028
// App ID = 259204250032047
// Secret = 046a4ef56c11c6b510e6f15e64d83204

import React, { useEffect, useState } from "react";

const ReviewComponent = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(
          `https://graph.facebook.com/v11.0/747613315347028/ratings?access_token=a79eb9b80f0a88f8c4a2a70fa1bcb994`
        );
        const data = await response.json();
        if (data && data.data) {
          setReviews(data.data);
        }
      } catch (error) {
        console.error("Error fetching Facebook Page reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div className="section-styling">
      <h1 className="section-title">Testimonials</h1>
      {reviews.map((review) => (
        <div key={review.id}>
          <p>Rating: {review.rating}</p>
          <p>Review Text: {review.review_text}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewComponent;
