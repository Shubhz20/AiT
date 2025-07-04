import React from 'react';
import { Wifi, Car, Coffee, Utensils, Tv, Wind, Star } from 'lucide-react';

const Accommodation = () => {
  const accommodations = [
    {
      name: 'Luxury Hotel Suite',
      type: 'Hotel',
      price: '800-1500 EGP/night',
      image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 5,
      facilities: ['WiFi', 'AC', 'Breakfast', 'Room Service', 'Pool', 'Gym'],
      description: 'Luxurious accommodation with all amenities and excellent service.'
    },
    {
      name: 'Mid-Range Hotel Room',
      type: 'Hotel',
      price: '300-600 EGP/night',
      image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4,
      facilities: ['WiFi', 'AC', 'Breakfast', 'TV'],
      description: 'Comfortable rooms with essential amenities for a pleasant stay.'
    },
    {
      name: 'Budget Hotel Room',
      type: 'Hotel',
      price: '150-300 EGP/night',
      image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 3,
      facilities: ['WiFi', 'AC', 'TV'],
      description: 'Basic accommodation perfect for budget-conscious travelers.'
    },
    {
      name: 'Traditional Riad',
      type: 'Boutique',
      price: '400-800 EGP/night',
      image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4,
      facilities: ['WiFi', 'Breakfast', 'Courtyard', 'Traditional Decor'],
      description: 'Authentic Egyptian architecture with modern comforts.'
    },
    {
      name: 'Hostel Dorm Bed',
      type: 'Hostel',
      price: '80-150 EGP/night',
      image: 'https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 3,
      facilities: ['WiFi', 'Shared Kitchen', 'Common Area'],
      description: 'Perfect for backpackers and solo travelers on a budget.'
    },
    {
      name: 'Apartment Rental',
      type: 'Apartment',
      price: '200-500 EGP/night',
      image: 'https://images.pexels.com/photos/1428348/pexels-photo-1428348.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4,
      facilities: ['WiFi', 'Kitchen', 'Living Room', 'Washer'],
      description: 'Self-contained accommodation ideal for longer stays.'
    }
  ];

  const facilityIcons = {
    'WiFi': Wifi,
    'AC': Wind,
    'Breakfast': Coffee,
    'Room Service': Utensils,
    'TV': Tv,
    'Pool': Car,
    'Gym': Car,
    'Kitchen': Utensils,
    'Living Room': Tv,
    'Washer': Car,
    'Shared Kitchen': Utensils,
    'Common Area': Tv,
    'Courtyard': Car,
    'Traditional Decor': Star
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
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl font-bold text-gray-900 mb-4">
            Accommodation Options
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From luxury hotels to budget hostels, find the perfect place to stay during your Egyptian adventure
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          {accommodations.map((accommodation, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
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
              
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold text-gray-900 mb-2">
                  {accommodation.name}
                </h3>
                <p className="text-gray-600 mb-4">{accommodation.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-gold-600">{accommodation.price}</span>
                </div>

                <div className="space-y-3">
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
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="font-serif text-3xl font-bold text-gray-900 mb-6 text-center">
            Booking Tips for Egypt
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-gold-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-gold-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Book in Advance</h3>
              <p className="text-gray-600">Especially during peak season (October-April) and holidays.</p>
            </div>
            <div className="text-center">
              <div className="bg-nile-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wifi className="h-8 w-8 text-nile-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Check WiFi</h3>
              <p className="text-gray-600">Ensure reliable internet connection if you need to stay connected.</p>
            </div>
            <div className="text-center">
              <div className="bg-sand-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wind className="h-8 w-8 text-sand-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">AC is Essential</h3>
              <p className="text-gray-600">Air conditioning is crucial, especially during summer months.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accommodation;