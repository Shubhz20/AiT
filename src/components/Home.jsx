import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, MapPin } from 'lucide-react';

const Home = () => {
  return (
    <div className="relative">
      {/* Hero Section with Background Video */}
      <div className="relative h-screen overflow-hidden">
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://videos.pexels.com/video-files/3571264/3571264-uhd_2732_1440_25fps.mp4"
            type="video/mp4"
          />
        </video>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        
        {/* Content Overlay */}
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Explore Egypt
              <span className="block text-gold-400">Your Ultimate Travel Guide</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
              Discover the wonders of ancient Egypt, from the majestic pyramids to the vibrant culture of modern cities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/agenda"
                className="bg-gold-600 hover:bg-gold-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                Start Planning Your Trip
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/accommodation"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                View Accommodations
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Travel Guide?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive information to make your Egyptian adventure unforgettable
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-lg bg-gray-50 hover:bg-gold-50 transition-colors duration-300">
              <div className="bg-gold-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="h-8 w-8 text-gold-600" />
              </div>
              <h3 className="font-serif text-2xl font-semibold mb-4">Expert Recommendations</h3>
              <p className="text-gray-600">
                Curated by local experts and experienced travelers who know Egypt inside out
              </p>
            </div>

            <div className="text-center p-8 rounded-lg bg-gray-50 hover:bg-nile-50 transition-colors duration-300">
              <div className="bg-nile-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-nile-600" />
              </div>
              <h3 className="font-serif text-2xl font-semibold mb-4">Trusted by Thousands</h3>
              <p className="text-gray-600">
                Join thousands of satisfied travelers who have used our guide for their Egyptian journey
              </p>
            </div>

            <div className="text-center p-8 rounded-lg bg-gray-50 hover:bg-sand-50 transition-colors duration-300">
              <div className="bg-sand-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-8 w-8 text-sand-600" />
              </div>
              <h3 className="font-serif text-2xl font-semibold mb-4">Complete Coverage</h3>
              <p className="text-gray-600">
                From ancient monuments to modern amenities, we cover everything you need to know
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-gold-600 to-gold-700 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Begin Your Egyptian Adventure?
          </h2>
          <p className="text-xl text-gold-100 mb-8">
            Start exploring our comprehensive travel sections to plan your perfect trip
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              to="/necessities"
              className="bg-white hover:bg-gray-100 text-gold-700 px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              Basic Necessities
            </Link>
            <Link
              to="/accommodation"
              className="bg-white hover:bg-gray-100 text-gold-700 px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              Accommodation
            </Link>
            <Link
              to="/transportation"
              className="bg-white hover:bg-gray-100 text-gold-700 px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              Transportation
            </Link>
            <Link
              to="/local-phrases"
              className="bg-white hover:bg-gray-100 text-gold-700 px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              Local Phrases
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;