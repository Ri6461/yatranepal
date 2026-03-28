import React, { useState } from 'react';
import { Card } from '../Common/Card';

const dummyReviews = [
  { id: 1, user: 'John Doe', rating: 5, text: 'Amazing trip! The guide was fantastic.' },
  { id: 2, user: 'Jane Smith', rating: 4, text: 'Great experience, but hotels could be better.' }
];

const ReviewsSection = ({ packageId }) => {
  const [reviews, setReviews] = useState(dummyReviews);
  const [newReview, setNewReview] = useState({ rating: 5, text: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!newReview.text.trim()) return;
    setReviews([{ id: Date.now(), user: 'You', ...newReview }, ...reviews]);
    setNewReview({ rating: 5, text: '' });
  };

  return (
    <div className="mt-5">
      <h3>User Reviews</h3>
      {/* Review Form */}
      <Card className="mb-4">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Rating</label>
            <select className="form-select" value={newReview.rating} onChange={e => setNewReview({...newReview, rating: Number(e.target.value)})}>
              {[5,4,3,2,1].map(num => <option key={num} value={num}>{num} Stars</option>)}
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Your Experience</label>
            <textarea className="form-control" rows="3" required value={newReview.text} onChange={e => setNewReview({...newReview, text: e.target.value})}></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit Review</button>
        </form>
      </Card>

      {/* Reviews List */}
      <div className="reviews-list">
        {reviews.map(review => (
          <Card key={review.id} className="mb-2">
            <div className="d-flex justify-content-between">
              <strong>{review.user}</strong>
              <span className="text-warning">
                {'★'.repeat(review.rating)}{'☆'.repeat(5-review.rating)}
              </span>
            </div>
            <p className="mt-2 mb-0 text-muted">{review.text}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};
export default ReviewsSection;
