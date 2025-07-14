import React from 'react';
import { Wifi, Car, Coffee, Utensils, Tv, Wind, Star, MapPin, Users, Home, Clock, DollarSign } from 'lucide-react';

const Accommodation = () => {
  const accommodationTypes = [
    {
      name: 'Basic',
      type: 'Shared Accommodation',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      rating: 3,
      facilities: ['Basic Kitchen', 'Shared Bathroom', 'Shared Living Space'],
      description: 'Free basic shared accommodation with essential infrastructure.',
      pros: ['Free accommodation', 'Basic shelter', 'Cultural exchange opportunities'],
      cons: ['Simple infrastructure', 'No WiFi or AC', 'Basic furnishings']
    },
    {
      name: 'Mid Upgraded',
      type: 'Shared Accommodation',
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      rating: 4,
      facilities: ['WiFi', 'AC', 'Basic Kitchen', 'Shared Bathroom', 'Shared Living Room', 'Furnishings'],
      description: 'Shared accommodation with improved infrastructure and better amenities. Great balance of cost and comfort.',
      pros: ['Better infrastructure', 'Kitchen access', 'Community living', 'Good location'],
      cons: ['No common area']
    },
    {
      name: 'Premium Upgraded',
      type: 'Shared Accommodation',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
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
          {accommodationTypes.map((accommodation, index) => (
            <div key={index} className="bg-white rounded-3xl shadow-2xl overflow-hidden backdrop-blur-lg bg-opacity-90 border-0 hover:scale-[1.02] hover:shadow-3xl transition-all duration-300">
              <div className="relative">
                <img
                  src={accommodation.image}
                  alt={accommodation.name}
                  className="w-full h-48 object-cover"
                />
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accommodation;