import React, { useState } from 'react';
import { Wifi, Car, Coffee, Utensils, Tv, Wind, Star, MapPin, Users, Home, Clock, DollarSign } from 'lucide-react';
// Old accommodation images for Basic and Premium
import basicImg1 from '../images/accomodation/WhatsApp Image 2025-07-26 at 16.19.54.jpeg';
import basicImg2 from '../images/accomodation/WhatsApp Image 2025-07-26 at 16.19.54 (1).jpeg';
import basicImg3 from '../images/accomodation/WhatsApp Image 2025-07-26 at 16.19.55.jpeg';
import basicImg4 from '../images/accomodation/WhatsApp Image 2025-07-26 at 16.19.55 (1).jpeg';
import basicImg5 from '../images/accomodation/WhatsApp Image 2025-07-26 at 16.19.55 (2).jpeg';
import basicImg6 from '../images/accomodation/WhatsApp Image 2025-07-26 at 16.19.56.jpeg';
// Recently added images for Mid Upgraded
import midImg1 from '../images/basic-acc/WhatsApp Image 2025-07-15 at 20.10.10 (1).jpeg';
import midImg2 from '../images/basic-acc/WhatsApp Image 2025-07-15 at 20.10.20 (2).jpeg';
import midImg3 from '../images/basic-acc/WhatsApp Image 2025-07-15 at 20.10.20 (3).jpeg';
import midImg4 from '../images/basic-acc/WhatsApp Image 2025-07-15 at 20.10.20 (4).jpeg';
import premiumImg1 from '../images/prem/WhatsApp Image 2025-07-16 at 01.35.06.jpeg';
import premiumImg2 from '../images/prem/WhatsApp Image 2025-07-16 at 01.35.06 (1).jpeg';
import premiumImg3 from '../images/prem/WhatsApp Image 2025-07-16 at 01.35.06 (2).jpeg';
import premiumImg4 from '../images/prem/WhatsApp Image 2025-07-17 at 00.55.30.jpeg';

const Accommodation = () => {
  // Separate slider indexes for each card
  const [basicIndex, setBasicIndex] = useState(0);
  const [midIndex, setMidIndex] = useState(0);
  const [premiumIndex, setPremiumIndex] = useState(0);
  
  // Image arrays for each accommodation type
  const basicImages = [basicImg1, basicImg2, basicImg3, basicImg4, basicImg5, basicImg6];
  const midImages = [midImg1, midImg2, midImg3, midImg4];
  const premiumImages = [premiumImg1, premiumImg2, premiumImg3, premiumImg4];

  const accommodationTypes = [
    {
      name: 'Basic',
      type: 'Shared Accommodation',
      rating: 3,
      facilities: ['Basic Kitchen', 'Shared Bathroom', 'Shared Living Space'],
      description: 'Free basic shared accommodation with essential infrastructure.',
      pros: ['Free accommodation', 'Basic shelter', 'Cultural exchange opportunities'],
      cons: ['Simple infrastructure', 'No WiFi or AC', 'Basic furnishings']
    },
    {
      name: 'Mid Upgraded',
      type: 'Shared Accommodation',
      rating: 4,
      facilities: ['WiFi', 'AC', 'Basic Kitchen', 'Shared Bathroom', 'Shared Living Room', 'Furnishings'],
      description: 'Shared accommodation with improved infrastructure and better amenities. Great balance of cost and comfort.',
      pros: ['Better infrastructure', 'Kitchen access', 'Community living', 'Good location'],
      cons: ['No common area']
    },
    {
      name: 'Premium Upgraded',
      type: 'Shared Accommodation',
      rating: 5,
      facilities: ['WiFi', 'AC', 'Full Kitchen', 'Shared Bathroom', 'Shared Living Room', 'Premium Furnishings', 'Big Rooms', 'More Living Space'],
      description: 'Shared accommodation with premium infrastructure and high-quality amenities. Best for those who want comfort while sharing.',
      pros: ['Premium infrastructure', 'High-quality furnishings', 'All amenities', 'Great locations', 'Spacious rooms', 'Generous living areas'],
      cons: []
    }
  ];

  const facilityIcons = {
    'WiFi': Wifi,
    'AC': Wind,
    'Kitchen': Utensils,
    'TV': Tv,
    'Security': Car,
    'Balcony': Car,
    'Private Room': Home,
    'Living Room': Tv,
    'Private Bathroom': Home,
    'Basic Kitchen': Utensils,
    'Shared Bathroom': Home
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? 'text-gold-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  // Handler for slider navigation
  const handleSlider = (cardType, dir) => {
    let images, setIndex;
    switch(cardType) {
      case 'basic':
        images = basicImages;
        setIndex = setBasicIndex;
        break;
      case 'mid':
        images = midImages;
        setIndex = setMidIndex;
        break;
      case 'premium':
        images = premiumImages;
        setIndex = setPremiumIndex;
        break;
      default:
        return;
    }
    setIndex((prev) => (prev + dir + images.length) % images.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-gold-200 to-nile-200 py-12 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-extrabold text-gold-700 mb-4 drop-shadow-xl">
            Accommodation Options
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium">
            Discover the different accommodation options available in Tanta for long-term stays
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-10">
          {accommodationTypes.map((accommodation, index) => {
            let images, currentIndex, cardType;
            switch(accommodation.name) {
              case 'Basic':
                images = basicImages;
                currentIndex = basicIndex;
                cardType = 'basic';
                break;
              case 'Mid Upgraded':
                images = midImages;
                currentIndex = midIndex;
                cardType = 'mid';
                break;
              case 'Premium Upgraded':
                images = premiumImages;
                currentIndex = premiumIndex;
                cardType = 'premium';
                break;
              default:
                images = basicImages;
                currentIndex = 0;
                cardType = 'basic';
            }

            return (
              <div key={index} className="bg-white rounded-3xl shadow-2xl overflow-hidden backdrop-blur-lg bg-opacity-90 border-0 hover:scale-[1.02] hover:shadow-3xl transition-all duration-300">
                <div className="relative">
                  {/* Image slider for all cards */}
                  <div className="relative w-full h-64 flex items-center justify-center bg-gray-100">
                    <img
                      src={images[currentIndex]}
                      alt={`DEBUG: ${accommodation.name} ${currentIndex+1} - ${images[currentIndex]}`}
                      className="w-full h-64 object-cover rounded-lg bg-red-200"
                      onError={e => { e.target.style.background = '#fbbf24'; e.target.alt = 'Image not found'; }}
                    />
                    {/* Left arrow */}
                    <button
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-gold-200 rounded-full p-2 shadow-md"
                      onClick={e => {
                        e.stopPropagation();
                        handleSlider(cardType, -1);
                      }}
                      aria-label="Previous photo"
                    >
                      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
                    </button>
                    {/* Right arrow */}
                    <button
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-gold-200 rounded-full p-2 shadow-md"
                      onClick={e => {
                        e.stopPropagation();
                        handleSlider(cardType, 1);
                      }}
                      aria-label="Next photo"
                    >
                      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
                    </button>
                    {/* Dots indicator */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                      {images.map((_, i) => (
                        <span
                          key={i}
                          className={`inline-block w-2 h-2 rounded-full ${i === currentIndex ? 'bg-gold-500' : 'bg-gray-300'}`}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="absolute top-4 left-4 bg-gold-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {accommodation.type}
                  </div>
                  <div className="absolute top-4 right-4 bg-white bg-opacity-90 px-3 py-1 rounded-full flex items-center space-x-1">
                    {renderStars(accommodation.rating)}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-2">
                    {accommodation.name}
                  </h3>
                  <p className="text-gray-700 mb-4 font-medium">{accommodation.description}</p>
                  <div className="space-y-3 mb-4">
                    <h4 className="font-semibold text-gray-900">Facilities:</h4>
                    <div className="flex flex-wrap gap-2">
                      {accommodation.facilities.map((facility, facilityIndex) => {
                        const IconComponent = facilityIcons[facility] || Star;
                        return (
                          <div
                            key={facilityIndex}
                            className="flex items-center space-x-1 bg-gray-100 px-3 py-1 rounded-full text-sm"
                          >
                            <IconComponent className="h-4 w-4 text-gray-600" />
                            <span className="text-gray-700">{facility}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div>
                      <h4 className="font-semibold text-green-700 mb-2">Pros:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {accommodation.pros.map((pro, proIndex) => (
                          <li key={proIndex} className="flex items-center">
                            <span className="text-green-500 mr-2">✓</span>
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {accommodation.cons.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-red-700 mb-2">Cons:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {accommodation.cons.map((con, conIndex) => (
                            <li key={conIndex} className="flex items-center">
                              <span className="text-red-500 mr-2">✗</span>
                              {con}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Accommodation;