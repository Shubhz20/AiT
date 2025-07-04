import React, { useState } from 'react';
import { Star, User, MessageSquare, Send, ThumbsUp } from 'lucide-react';

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: 5,
    experience: '',
    recommendation: '',
    wouldRecommend: 'yes'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your feedback! Your review helps other travelers.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      rating: 5,
      experience: '',
      recommendation: '',
      wouldRecommend: 'yes'
    });
  };

  const sampleReviews = [
    {
      name: 'Sarah Johnson',
      location: 'UK',
      rating: 5,
      date: '2024-01-15',
      text: 'This travel guide was absolutely invaluable for my trip to Egypt! The local phrases section helped me connect with locals, and the accommodation recommendations were spot-on. The transportation guide saved me both time and money.',
      helpful: 24,
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      name: 'Ahmed Hassan',
      location: 'UAE',
      rating: 5,
      date: '2024-01-10',
      text: 'As someone who visits Egypt frequently, I found this guide extremely comprehensive. The extra charges section was particularly helpful - I wish I had this information years ago! Great work on covering both tourist attractions and local experiences.',
      helpful: 18,
      avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      name: 'Maria Rodriguez',
      location: 'Spain',
      rating: 4,
      date: '2024-01-08',
      text: 'Fantastic resource for first-time visitors to Egypt. The agenda section helped me plan my itinerary perfectly. I especially loved the recommendations for activities in Tanta - found some hidden gems there! The only thing missing might be more vegetarian food options.',
      helpful: 15,
      avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      name: 'David Chen',
      location: 'Australia',
      rating: 5,
      date: '2024-01-05',
      text: 'This guide made my Egyptian adventure so much smoother! The transportation section was incredibly detailed and accurate. I used the local phrases daily and people were so friendly when I attempted Arabic. Highly recommend!',
      helpful: 22,
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      name: 'Emma Thompson',
      location: 'Canada',
      rating: 4,
      date: '2024-01-02',
      text: 'Great comprehensive guide! The accommodation section helped me find perfect places to stay within my budget. The local café recommendations in Tanta were excellent - tried 4 out of 6 and loved them all. Very well organized and easy to navigate.',
      helpful: 12,
      avatar: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      name: 'James Wilson',
      location: 'USA',
      rating: 5,
      date: '2023-12-28',
      text: 'Outstanding travel resource! Used this for my 2-week Egypt trip and it exceeded expectations. The money-saving tips alone saved me hundreds of dollars. The cultural insights and local phrases made my experience so much richer. Thank you!',
      helpful: 31,
      avatar: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=100'
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? 'text-gold-400 fill-current' : 'text-gray-300'}`}
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
            className="focus:outline-none"
          >
            <Star
              className={`h-6 w-6 transition-colors duration-200 ${
                star <= formData.rating ? 'text-gold-400 fill-current' : 'text-gray-300 hover:text-gold-300'
              }`}
            />
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl font-bold text-gray-900 mb-4">
            Traveler Feedback & Reviews
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Share your experience and read what other travelers have to say about our Egypt travel guide
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Feedback Form */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-8">
              <div className="flex items-center space-x-3 mb-6">
                <MessageSquare className="h-6 w-6 text-gold-600" />
                <h2 className="font-serif text-2xl font-bold text-gray-900">Share Your Experience</h2>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Overall Rating *
                  </label>
                  {renderRatingInput()}
                </div>

                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Experience *
                  </label>
                  <textarea
                    id="experience"
                    name="experience"
                    required
                    rows={4}
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    placeholder="Tell us about your experience using our travel guide..."
                  />
                </div>

                <div>
                  <label htmlFor="recommendation" className="block text-sm font-medium text-gray-700 mb-1">
                    What would you improve?
                  </label>
                  <textarea
                    id="recommendation"
                    name="recommendation"
                    rows={3}
                    value={formData.recommendation}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    placeholder="Any suggestions for improvement..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Would you recommend this guide to others? *
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="wouldRecommend"
                        value="yes"
                        checked={formData.wouldRecommend === 'yes'}
                        onChange={handleInputChange}
                        className="h-4 w-4 text-gold-600 focus:ring-gold-500 border-gray-300"
                      />
                      <span className="ml-2 text-sm text-gray-700">Yes, definitely!</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="wouldRecommend"
                        value="maybe"
                        checked={formData.wouldRecommend === 'maybe'}
                        onChange={handleInputChange}
                        className="h-4 w-4 text-gold-600 focus:ring-gold-500 border-gray-300"
                      />
                      <span className="ml-2 text-sm text-gray-700">Maybe</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="wouldRecommend"
                        value="no"
                        checked={formData.wouldRecommend === 'no'}
                        onChange={handleInputChange}
                        className="h-4 w-4 text-gold-600 focus:ring-gold-500 border-gray-300"
                      />
                      <span className="ml-2 text-sm text-gray-700">No</span>
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gold-600 hover:bg-gold-700 text-white px-4 py-2 rounded-md font-semibold transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Send className="h-4 w-4" />
                  <span>Submit Feedback</span>
                </button>
              </form>
            </div>
          </div>

          {/* Reviews Display */}
          <div className="lg:col-span-2">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="font-serif text-2xl font-bold text-gray-900">Recent Reviews</h2>
              <div className="text-sm text-gray-600">
                {sampleReviews.length} reviews • Average rating: 4.7/5
              </div>
            </div>

            <div className="space-y-6">
              {sampleReviews.map((review, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start space-x-4">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <h3 className="font-semibold text-gray-900">{review.name}</h3>
                          <p className="text-sm text-gray-600">{review.location} • {review.date}</p>
                        </div>
                        <div className="flex items-center space-x-1">
                          {renderStars(review.rating)}
                        </div>
                      </div>
                      <p className="text-gray-700 mb-4 leading-relaxed">{review.text}</p>
                      <div className="flex items-center justify-between">
                        <button className="flex items-center space-x-2 text-sm text-gray-600 hover:text-gold-600 transition-colors duration-200">
                          <ThumbsUp className="h-4 w-4" />
                          <span>Helpful ({review.helpful})</span>
                        </button>
                        <span className="text-xs text-gray-500">
                          {review.rating}/5 stars
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h2 className="font-serif text-3xl font-bold text-gray-900 mb-6 text-center">
            What Travelers Say About Our Guide
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-gold-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-gold-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">4.7/5</div>
              <p className="text-gray-600">Average Rating</p>
            </div>
            <div className="text-center">
              <div className="bg-nile-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="h-8 w-8 text-nile-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">2,500+</div>
              <p className="text-gray-600">Happy Travelers</p>
            </div>
            <div className="text-center">
              <div className="bg-sand-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ThumbsUp className="h-8 w-8 text-sand-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">96%</div>
              <p className="text-gray-600">Would Recommend</p>
            </div>
            <div className="text-center">
              <div className="bg-gold-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="h-8 w-8 text-gold-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">850+</div>
              <p className="text-gray-600">Reviews</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;