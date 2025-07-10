import React, { useState, useEffect } from 'react';
import { Star, User, MessageSquare, Send, ThumbsUp, Heart, Award, TrendingUp, Smile } from 'lucide-react';

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: 5,
    experience: '',
    recommendation: '',
    wouldRecommend: 'yes'
  });

  // Add state for user-submitted reviews
  const [userReviews, setUserReviews] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({
    averageRating: 0,
    totalReviews: 0,
    recommendationPercentage: 0
  });

  // Animate statistics on component mount
  useEffect(() => {
    const timer = setTimeout(() => {
      const totalReviews = userReviews.length;
      const averageRating = userReviews.length > 0 
        ? parseFloat((userReviews.reduce((sum, review) => sum + review.rating, 0) / userReviews.length).toFixed(1))
        : 0;
      const wouldRecommendCount = userReviews.filter(review => 
        review.wouldRecommend === 'yes' || review.rating >= 4
      ).length;
      const recommendationPercentage = totalReviews > 0 
        ? Math.round((wouldRecommendCount / totalReviews) * 100)
        : 0;

      setAnimatedStats({
        averageRating,
        totalReviews,
        recommendationPercentage
      });
    }, 500);

    return () => clearTimeout(timer);
  }, [userReviews]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Create new review object
    const newReview = {
      name: formData.name,
      location: 'User', // Default location for user submissions
      rating: formData.rating,
      date: new Date().toISOString().split('T')[0], // Current date in YYYY-MM-DD format
      text: formData.experience,
      helpful: 0,
      avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(formData.name)}&background=gold&color=fff&size=100`,
      isUserReview: true, // Flag to identify user-submitted reviews
      recommendation: formData.recommendation,
      wouldRecommend: formData.wouldRecommend
    };

    // Add new review to the beginning of user reviews
    setUserReviews(prev => [newReview, ...prev]);

    // Show success message
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      rating: 5,
      experience: '',
      recommendation: '',
      wouldRecommend: 'yes'
    });
    
    setIsSubmitting(false);
  };

  // Calculate updated statistics based only on user reviews
  const totalReviews = userReviews.length;
  const averageRating = userReviews.length > 0 
    ? (userReviews.reduce((sum, review) => sum + review.rating, 0) / userReviews.length).toFixed(1)
    : '0.0';
  const wouldRecommendCount = userReviews.filter(review => 
    review.wouldRecommend === 'yes' || review.rating >= 4
  ).length;
  const recommendationPercentage = totalReviews > 0 
    ? Math.round((wouldRecommendCount / totalReviews) * 100)
    : 0;

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 transition-all duration-300 ${i < rating ? 'text-gold-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  const renderRatingInput = () => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => setFormData(prev => ({ ...prev, rating: star }))}
            className="focus:outline-none transform hover:scale-110 transition-transform duration-200"
          >
            <Star
              className={`h-6 w-6 transition-all duration-200 ${
                star <= formData.rating ? 'text-gold-400 fill-current' : 'text-gray-300 hover:text-gold-300'
              }`}
            />
          </button>
        ))}
      </div>
    );
  };

  const getRatingEmoji = (rating) => {
    if (rating >= 4.5) return '🌟';
    if (rating >= 4) return '😊';
    if (rating >= 3) return '🙂';
    if (rating >= 2) return '😐';
    return '😔';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gold-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Success Message */}
        {showSuccess && (
          <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-bounce">
            <div className="flex items-center space-x-2">
              <Heart className="h-5 w-5" />
              <span>Thank you for your feedback! 🎉</span>
            </div>
          </div>
        )}

        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-gold-100 px-4 py-2 rounded-full mb-4">
            <MessageSquare className="h-5 w-5 text-gold-600" />
            <span className="text-gold-800 font-medium">Share Your Story</span>
          </div>
          <h1 className="font-serif text-4xl font-bold text-gray-900 mb-4">
            Traveler Feedback & Reviews ✨
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our community of explorers! Share your experience and discover what other travelers have to say about their experience
          </p>
          <div className="mt-4 flex justify-center space-x-4 text-sm text-gray-500">
            <span className="flex items-center space-x-1">
              <Star className="h-4 w-4 text-gold-400 fill-current" />
              <span>Real experiences</span>
            </span>
            <span className="flex items-center space-x-1">
              <Heart className="h-4 w-4 text-red-400" />
              <span>Community driven</span>
            </span>
            <span className="flex items-center space-x-1">
              <TrendingUp className="h-4 w-4 text-green-400" />
              <span>Always improving</span>
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Feedback Form */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-xl p-6 sticky top-8 border border-gold-200 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-gold-100 p-2 rounded-lg">
                  <MessageSquare className="h-6 w-6 text-gold-600" />
                </div>
                <div>
                  <h2 className="font-serif text-2xl font-bold text-gray-900">Share Your Experience</h2>
                  <p className="text-sm text-gray-600">Help others plan their perfect trip! 🗺️</p>
                </div>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name * 👤
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address * 📧
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Overall Rating * ⭐
                  </label>
                  {renderRatingInput()}
                  <p className="text-xs text-gray-500 mt-1">
                    {formData.rating === 5 && "Excellent! 🌟"}
                    {formData.rating === 4 && "Very Good! 😊"}
                    {formData.rating === 3 && "Good! 🙂"}
                    {formData.rating === 2 && "Fair! 😐"}
                    {formData.rating === 1 && "Poor! 😔"}
                  </p>
                </div>

                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Experience * 💭
                  </label>
                  <textarea
                    id="experience"
                    name="experience"
                    required
                    rows={4}
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all duration-200"
                    placeholder="Tell us about your experience using our travel guide... What did you love? What surprised you?"
                  />
                </div>

                <div>
                  <label htmlFor="recommendation" className="block text-sm font-medium text-gray-700 mb-1">
                    What would you improve? 💡
                  </label>
                  <textarea
                    id="recommendation"
                    name="recommendation"
                    rows={3}
                    value={formData.recommendation}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all duration-200"
                    placeholder="Any suggestions for improvement... We love feedback!"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Would you recommend this guide to others? * 🤝
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center p-2 rounded-lg hover:bg-gold-50 transition-colors duration-200 cursor-pointer">
                      <input
                        type="radio"
                        name="wouldRecommend"
                        value="yes"
                        checked={formData.wouldRecommend === 'yes'}
                        onChange={handleInputChange}
                        className="h-4 w-4 text-gold-600 focus:ring-gold-500 border-gray-300"
                      />
                      <span className="ml-2 text-sm text-gray-700">Yes, definitely! 🎉</span>
                    </label>
                    <label className="flex items-center p-2 rounded-lg hover:bg-gold-50 transition-colors duration-200 cursor-pointer">
                      <input
                        type="radio"
                        name="wouldRecommend"
                        value="maybe"
                        checked={formData.wouldRecommend === 'maybe'}
                        onChange={handleInputChange}
                        className="h-4 w-4 text-gold-600 focus:ring-gold-500 border-gray-300"
                      />
                      <span className="ml-2 text-sm text-gray-700">Maybe 🤔</span>
                    </label>
                    <label className="flex items-center p-2 rounded-lg hover:bg-gold-50 transition-colors duration-200 cursor-pointer">
                      <input
                        type="radio"
                        name="wouldRecommend"
                        value="no"
                        checked={formData.wouldRecommend === 'no'}
                        onChange={handleInputChange}
                        className="h-4 w-4 text-gold-600 focus:ring-gold-500 border-gray-300"
                      />
                      <span className="ml-2 text-sm text-gray-700">No 😕</span>
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-4 py-3 rounded-md font-semibold transition-all duration-200 flex items-center justify-center space-x-2 ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-gold-600 to-gold-700 hover:from-gold-700 hover:to-gold-800 text-white transform hover:scale-105'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      <span>Share Your Story ✨</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Reviews Display */}
          <div className="lg:col-span-2">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="font-serif text-2xl font-bold text-gray-900">Recent Reviews</h2>
                <p className="text-sm text-gray-600">Real experiences from our community</p>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-600">
                  {totalReviews} reviews • Average rating: {averageRating}/5 {getRatingEmoji(parseFloat(averageRating))}
                </div>
                <div className="text-xs text-gray-500">
                  Last updated: {new Date().toLocaleDateString()}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {userReviews.length === 0 ? (
                <div className="bg-white rounded-xl shadow-xl p-12 text-center border-2 border-dashed border-gold-200 hover:border-gold-300 transition-all duration-300">
                  <div className="bg-gold-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageSquare className="h-10 w-10 text-gold-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No Reviews Yet</h3>
                  <p className="text-gray-600 mb-4">
                    Be the first to share your experience! 🚀 Your feedback helps other travelers plan their perfect trip to Egypt.
                  </p>
                  <div className="text-sm text-gray-500">
                    Submit your review using the form on the left to get started. ✨
                  </div>
                </div>
              ) : (
                userReviews.map((review, index) => (
                  <div 
                    key={index} 
                    className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border-2 border-gold-200 transform hover:-translate-y-1"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start space-x-4">
                      <img
                        src={review.avatar}
                        alt={review.name}
                        className="w-12 h-12 rounded-full object-cover ring-2 ring-gold-200"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <h3 className="font-semibold text-gray-900">{review.name}</h3>
                            <p className="text-sm text-gray-600">{review.location} • {review.date}</p>
                            <span className="inline-flex items-center space-x-1 bg-gradient-to-r from-gold-100 to-yellow-100 text-gold-800 text-xs px-3 py-1 rounded-full mt-1">
                              <span className="w-2 h-2 bg-gold-400 rounded-full animate-pulse"></span>
                              <span>New Review</span>
                            </span>
                          </div>
                          <div className="flex items-center space-x-1">
                            {renderStars(review.rating)}
                          </div>
                        </div>
                        <p className="text-gray-700 mb-4 leading-relaxed">{review.text}</p>
                        
                        {/* Show recommendation and improvement suggestions for user reviews */}
                        {review.recommendation && (
                          <div className="mb-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border-l-4 border-blue-400">
                            <p className="text-sm text-gray-600 mb-1">
                              <strong>💡 Suggestions for improvement:</strong>
                            </p>
                            <p className="text-sm text-gray-700">{review.recommendation}</p>
                          </div>
                        )}
                        
                        <div className="flex items-center justify-between">
                          <button className="flex items-center space-x-2 text-sm text-gray-600 hover:text-gold-600 transition-colors duration-200 hover:scale-105 transform">
                            <ThumbsUp className="h-4 w-4" />
                            <span>Helpful ({review.helpful})</span>
                          </button>
                          <div className="flex items-center space-x-2">
                            <span className="text-xs text-gray-500">
                              {review.rating}/5 stars {getRatingEmoji(review.rating)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Enhanced Statistics */}
        <div className="mt-12 bg-gradient-to-r from-white to-gold-50 rounded-xl shadow-xl p-8 border border-gold-200">
          <div className="text-center mb-8">
            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-2">
              What Travelers Say About Our Guide 📊
            </h2>
            <p className="text-gray-600">Real statistics from our community</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-gold-100 to-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Star className="h-8 w-8 text-gold-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{animatedStats.averageRating}/5</div>
              <p className="text-gray-600">Average Rating</p>
              <p className="text-xs text-gray-500 mt-1">{getRatingEmoji(animatedStats.averageRating)}</p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <User className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{animatedStats.totalReviews}</div>
              <p className="text-gray-600">Happy Travelers</p>
              <p className="text-xs text-gray-500 mt-1">👥 Community</p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-green-100 to-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <ThumbsUp className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{animatedStats.recommendationPercentage}%</div>
              <p className="text-gray-600">Would Recommend</p>
              <p className="text-xs text-gray-500 mt-1">👍 Trusted</p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{userReviews.length}</div>
              <p className="text-gray-600">Total Reviews</p>
              <p className="text-xs text-gray-500 mt-1">🏆 Quality</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;