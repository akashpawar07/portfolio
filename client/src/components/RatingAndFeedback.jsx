import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Star, User, MoreHorizontal, Edit3, ChevronLeft, ChevronRight, Check } from 'lucide-react';

export default function PortfolioRating() {
  const [userRating, setUserRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState('');
  const [userName, setUserName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showWriteReview, setShowWriteReview] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const API_BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;
  // const API_BASE_URL = 'https://portfolio-xe40.onrender.com'

  const fetchReviews = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_BASE_URL}/ratingandfeedback`);
      console.log("fetching data from backend = ", response.data);
      
      // Fix: Handle different possible response structures
      let reviewsData = [];
      if (response.data && Array.isArray(response.data)) {
        reviewsData = response.data;
      } else if (response.data && response.data.data && Array.isArray(response.data.data)) {
        reviewsData = response.data.data;
      } else if (response.data && response.data.reviews && Array.isArray(response.data.reviews)) {
        reviewsData = response.data.reviews;
      }
      
      setReviews([...reviewsData].reverse());
      setError(null);
    } catch (err) {
      // setError('Failed to load reviews. Please try again later.');
      console.error('Error fetching reviews:', err);
      // Fix: Ensure reviews is always an array even on error
      setReviews([]);
    } finally {
      setLoading(false);
    }
  };

  // Load reviews on component mount
  useEffect(() => {
    fetchReviews();
  }, []);

  // Generate avatar initials from name
  const getInitials = (name) => {
    if (!name || typeof name !== 'string') return 'UN';
    return name.split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  // Generate avatar from name and use it as avatar field
  const generateAvatar = (name) => {
    return getInitials(name);
  };

  // Calculate average rating - Fix: Add safety check
  const averageRating = (reviews && reviews.length > 0)
    ? reviews.reduce((sum, review) => sum + (review.rating || 0), 0) / reviews.length
    : 0;
  const totalReviews = reviews ? reviews.length : 0;

  // Get rating feedback words and emoji based on rating
  const getRatingFeedback = (rating) => {
    const feedbackData = {
      1: {
        words: ['Poor', 'Disappointing', 'Needs Work', 'Below Average'],
        emojis: ['😞', '👎', '😔', '💔']
      },
      2: {
        words: ['Fair', 'Could Be Better', 'Average', 'Okay'],
        emojis: ['😐', '🤔', '😕', '👌']
      },
      3: {
        words: ['Good', 'Satisfactory', 'Decent', 'Nice'],
        emojis: ['😊', '👍', '🙂', '✨']
      },
      4: {
        words: ['Great', 'Very Good', 'Impressive', 'Well Done'],
        emojis: ['😄', '🎉', '👏', '🌟']
      },
      5: {
        words: ['Excellent', 'Outstanding', 'Amazing', 'Perfect'],
        emojis: ['🤩', '🔥', '💯', '🚀']
      }
    };

    const data = feedbackData[rating] || feedbackData[3];
    const randomIndex = Math.floor(Math.random() * data.words.length);

    return {
      word: data.words[randomIndex],
      emoji: data.emojis[randomIndex]
    };
  };

  const handleRatingClick = (value) => {
    setUserRating(value);
  };

  // form submitting
  const handleSubmit = async () => {

    if (userRating > 0 && comment.trim() && userName.trim()) {
      setSubmitting(true);

      try {

        const newReview = {
          name: userName.trim(),
          rating: userRating,
          comment: comment.trim(),
        };

        // Posting the rating and feedback details to the backend using axios
        const response = await axios.post(`${API_BASE_URL}/ratingandfeedback`, newReview, {
          headers: {
            'Content-Type': 'application/json',
          },
        });

        console.log("savedReview data", response.data);

        // Create a properly structured review object for immediate display
        const newReviewForDisplay = {
          _id: response.data._id || response.data.id || Date.now(),
          name: response.data.name || userName.trim(),
          rating: response.data.rating || userRating,
          comment: response.data.comment || comment.trim(),
          createdAt: response.data.createdAt || new Date().toISOString(),
          updatedAt: response.data.updatedAt || new Date().toISOString()
        };

        // Debug: Log the formatted review
        // console.log("Formatted review for display:", newReviewForDisplay);

        // Fix: Ensure reviews is always an array before spreading
        const currentReviews = Array.isArray(reviews) ? reviews : [];
        setReviews([newReviewForDisplay, ...currentReviews]);
        
        setIsSubmitted(true);
        setShowWriteReview(false);
        setUserRating(0);
        setComment('');
        setUserName('');
        setError(null);

        // Reset success message after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 3000);
      } catch (err) {
        setError('Failed to submit review. Please try again.');
        console.error('Error submitting review:', err.response?.data || err.message);
        return
      } finally {
        setSubmitting(false);
      }
    }
  };

  const closeModal = () => {
    setShowWriteReview(false);
    setUserRating(0);
    setComment('');
    setUserName('');
    setError(null);
  };

  const closeSuccessModal = () => {
    setIsSubmitted(false);
  };

  const renderStars = (rating, size = 'w-4 h-4') => {
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`${size} ${star <= rating ? 'text-yellow-400 fill-current' : 'text-slate-300'
              }`}
          />
        ))}
      </div>
    );
  };

  const getRandomColor = (name) => {
    const colors = ['bg-indigo-500', 'bg-slate-600', 'bg-emerald-500', 'bg-rose-500', 'bg-purple-500', 'bg-amber-500', 'bg-orange-600', 'bg-purple-700', 'bg-slate-900'];
    return colors[name ? name.length % colors.length : 0];
  };

  const scrollLeft = () => {
    const container = document.getElementById('reviews-container');
    if (container) {
      container.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    const container = document.getElementById('reviews-container');
    if (container) {
      container.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  // Format time using createdAt or updatedAt with more precise timing
  const formatTime = (createdAt, updatedAt) => {
    const dateToUse = updatedAt || createdAt;
    if (!dateToUse) return 'Recently';

    try {
      const date = new Date(dateToUse);
      const now = new Date();
      const diffTime = now - date; // Get difference in milliseconds

      // Convert to different time units
      const diffMinutes = Math.floor(diffTime / (1000 * 60));
      const diffHours = Math.floor(diffTime / (1000 * 60 * 60));
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      const diffWeeks = Math.floor(diffDays / 7);
      const diffMonths = Math.floor(diffDays / 30);

      // Return appropriate time format
      if (diffMinutes < 1) return 'Just now';
      if (diffMinutes === 1) return '1 minute ago';
      if (diffMinutes < 60) return `${diffMinutes} minutes ago`;
      if (diffHours === 1) return '1 hour ago';
      if (diffHours < 24) return `${diffHours} hours ago`;
      if (diffDays === 1) return '1 day ago';
      if (diffDays < 7) return `${diffDays} days ago`;
      if (diffWeeks === 1) return '1 week ago';
      if (diffWeeks < 4) return `${diffWeeks} weeks ago`;
      if (diffMonths === 1) return '1 month ago';
      if (diffMonths < 12) return `${diffMonths} months ago`;

      const diffYears = Math.floor(diffDays / 365);
      if (diffYears === 1) return '1 year ago';
      return `${diffYears} years ago`;
    } catch {
      return 'Recently';
    }
  };

  if (loading) {
    return (
      <div className="md:w-[95vw] md:h-[75vh] md:ml-16 p-4 sm:mx-2 md:p-6  bg-neutral-100 rounded-md shadow-lg">
        <div className="flex items-center justify-center py-20">
          <div className="text-slate-600 text-3xl">Loading reviews...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="md:w-[95vw] h-[99vh] md:ml-16 p-4 sm:mx-2 md:p-6  bg-neutral-200 rounded-md shadow-lg my-6">
      {/* Error Message */}
      {error && (
        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
        <div className="flex items-center">
          <div className="flex items-center mr-4">
            <span className="text-lg sm:text-2xl font-bold text-slate-800">Portfolio Reviews</span>
          </div>
        </div>

        <button
          onClick={() => setShowWriteReview(true)}
          className="px-4 py-2 bg-indigo-600 text-neutral-50 rounded-md hover:bg-indigo-700 transition-colors font-bold text-md w-full sm:w-auto"
        >
          Write a Review
        </button>
      </div>

      {/* Rating Summary */}
      <div className="flex items-center mb-6">
        <div className="text-2xl md:text-3xl font-bold text-slate-800 mr-2">
          {averageRating.toFixed(1)}
        </div>
        <div className="mr-4">
          {renderStars(Math.round(averageRating), 'w-4 h-4 md:w-5 md:h-5')}
        </div>
        <div className="text-sm text-slate-600 font-medium">
          {totalReviews} reviews
        </div>
      </div>

      {/* Success Modal */}
      {isSubmitted && (
        <div className='fixed inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center bg-indigo-700 z-[50]'>
          <div className='md:mt-10 flex flex-col gap-2 items-center text-slate-800 shadow-4xl bg-neutral-50 w-[95%] md:w-[33vw] md:h-[55vh] mx-h-[40vh] rounded-md'>
            <div className='flex flex-col items-center justify-between gap-4 px-4 py-2 '>
              <div className='w-[60px] h-[60px] relative mt-[-30px] bg-[#2db02d] rounded-full flex items-center justify-center'>
                <Check className='w-[30px] h-[30px] text-white' />
              </div>
              <h1 className='font-bold text-2xl '>Thank You !</h1>
              <div className='flex flex-col justify-between items-center gap-7 md:mt-2'>
                <p className='text-center text-[16px]'>Thank you for your review, I appreciate your feedback</p>
                <button
                  className='p-2 mb-2 w-[50%] bg-[#2db02d] font-bold text-neutral-50 hover:bg-[#37c137] rounded-md'
                  onClick={closeSuccessModal}
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Write Review Modal */}
      {showWriteReview && (
        <div className='fixed inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center bg-gray-700 z-[50]'>
          <div className='md:mt-10 flex flex-col gap-2 items-center text-slate-800 shadow-4xl bg-neutral-50 w-[95%] md:w-[40vw] md:h-[84vh] mx-h-[60vh] rounded-md'>
            <div className='flex flex-col items-center justify-between gap-4 px-6 py-4 w-full'>
              <h1 className='font-bold text-xl '>Write a Review</h1>

              {/* Star Rating */}
              <div className="w-full">
                <label className="block text-sm font-bold text-slate-700 mb-2">Rating</label>
                <div className="flex justify-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onClick={() => handleRatingClick(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      className="p-1 transition-all duration-200 hover:scale-110"
                    >
                      <Star
                        className={`w-8 h-8 transition-colors duration-200 ${star <= (hoverRating || userRating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-slate-300 hover:text-yellow-200'
                          }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Name Input */}
              <div className="w-full">
                <label className="block text-sm font-bold text-slate-700 mb-2">Your Name</label>
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="Enter your full name"
                  className="w-full px-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-slate-700"
                />
              </div>

              {/* Comment */}
              <div className="w-full">
                <label className="block text-sm font-bold text-slate-700 mb-2">Comment</label>
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Share your experience with this portfolio..."
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none text-slate-700"
                  rows="4"
                />
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row justify-center gap-4 w-full">
                <button
                  onClick={closeModal}
                  disabled={submitting}
                  className="px-6 py-2 bg-slate-400 text-neutral-50 rounded-md hover:bg-slate-500 transition-colors font-bold disabled:opacity-50"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={userRating === 0 || !comment.trim() || !userName.trim() || submitting}
                  className={`px-6 py-2 rounded-md font-bold transition-colors ${userRating > 0 && comment.trim() && userName.trim() && !submitting
                    ? 'bg-[#2db02d] hover:bg-[#37c137] text-neutral-50'
                    : 'bg-slate-300 text-slate-500 cursor-not-allowed'
                    }`}
                >
                  {submitting ? 'Submitting...' : 'Submit'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Horizontal Scrollable Reviews */}
      <div className="relative">
        {/* Desktop Navigation Buttons */}
        <button
          onClick={scrollLeft}
          className="hidden md:flex absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-neutral-50 shadow-lg rounded-full p-2 hover:bg-slate-100 transition-colors border border-slate-200"
          style={{ marginLeft: '-20px' }}
        >
          <ChevronLeft className="w-5 h-5 text-slate-600" />
        </button>

        <button
          onClick={scrollRight}
          className="hidden md:flex absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-neutral-50 shadow-lg rounded-full p-2 hover:bg-slate-100 transition-colors border border-slate-200"
          style={{ marginRight: '-20px' }}
        >
          <ChevronRight className="w-5 h-5 text-slate-600" />
        </button>

        {/* Reviews Container */}
        <div
          id="reviews-container"
          className="flex overflow-x-auto scrollbar-hide space-x-4 pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {!reviews || reviews.length === 0 ? (
            <div className="flex-shrink-0 w-full mt-10 text-center py-12">
              <p className="text-slate-500 text-xl">No reviews yet. Be the first to write one! 🙅‍♀️</p>
            </div>
          ) : (
            reviews.map((review, index) => (
              <div
                key={review._id || index}
                className="flex-shrink-0 w-80 sm:w-96 p-4 bg-white border border-slate-200 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                {/* Review Header */}
                <div className="flex items-start space-x-3 mb-3">
                  <div className={`w-10 h-10 rounded-full ${getRandomColor(review.name)} flex items-center justify-center flex-shrink-0`}>
                    <span className="text-white font-bold text-sm">
                      {getInitials(review.name)}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-1">
                      <h4 className="font-bold text-slate-800 truncate">{review.name || 'Anonymous'}</h4>
                    </div>

                    <div className="flex items-center space-x-2 mb-2">
                      {renderStars(review.rating || 0)}
                      <span className="text-sm text-slate-500 font-medium">
                        {formatTime(review.createdAt, review.updatedAt)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Review Content */}
                <p className="text-slate-700 text-sm leading-relaxed mb-3 line-clamp-3">
                  {review.comment || 'No comment provided'}
                </p>

                {/* Actions */}
                <div className="flex items-center justify-between">
                  <button className="text-sm text-slate-600 hover:text-slate-800 transition-colors font-medium">
                    {(() => {
                      const feedback = getRatingFeedback(review.rating || 3);
                      return `${feedback.emoji} ${feedback.word}`;
                    })()}
                  </button>
                  <button className="text-slate-400 hover:text-slate-600 transition-colors">
                    <MoreHorizontal className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Mobile scroll indicator */}
      {reviews && reviews.length > 0 && (
        <div className="md:hidden text-center mt-4">
          <p className="text-sm text-slate-500 font-medium">← Swipe to see more reviews →</p>
        </div>
      )}
    </div>
  );
}