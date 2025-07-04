import React from 'react';
import { DollarSign, MapPin, Utensils, Plane, Coffee, Car } from 'lucide-react';

const ExtraCharges = () => {
  const commonExpenses = [
    {
      category: 'Tourist Fees',
      icon: DollarSign,
      items: [
        { name: 'Tourist Tax (per night)', price: '10-15 EGP', description: 'Applied at most hotels' },
        { name: 'Tourist Police Registration', price: '0-25 EGP', description: 'Sometimes required for long stays' },
        { name: 'Photography Tickets', price: '50-300 EGP', description: 'Extra cost at major tourist sites' },
        { name: 'Video Recording Permits', price: '100-500 EGP', description: 'Required for professional filming' }
      ],
      color: 'gold'
    },
    {
      category: 'Museum & Site Entry',
      icon: MapPin,
      items: [
        { name: 'Pyramid Interior Access', price: '100-400 EGP', description: 'Great Pyramid costs more' },
        { name: 'Egyptian Museum', price: '180 EGP', description: 'Audio guide extra 50 EGP' },
        { name: 'Valley of the Kings', price: '240 EGP', description: '3 tombs included, extra tombs cost more' },
        { name: 'Philae Temple', price: '140 EGP', description: 'Boat ride included' }
      ],
      color: 'nile'
    },
    {
      category: 'Service Charges',
      icon: Utensils,
      items: [
        { name: 'Restaurant Service Charge', price: '10-12%', description: 'Usually added automatically' },
        { name: 'Hotel Service Fee', price: '5-10%', description: 'On top of room rate' },
        { name: 'Tour Guide Tips', price: '50-100 EGP/day', description: 'Expected for good service' },
        { name: 'Cruise Ship Gratuities', price: '7-10 USD/day', description: 'Distributed among staff' }
      ],
      color: 'sand'
    },
    {
      category: 'Transportation',
      icon: Car,
      items: [
        { name: 'Airport Pickup', price: '150-400 EGP', description: 'Depends on distance and vehicle type' },
        { name: 'Highway Tolls', price: '5-20 EGP', description: 'On major highways' },
        { name: 'Parking Fees', price: '5-25 EGP', description: 'At tourist attractions' },
        { name: 'Ferry Crossings', price: '5-50 EGP', description: 'Varies by route and vehicle' }
      ],
      color: 'nile'
    }
  ];

  const tantaCafes = [
    {
      name: 'Café Riche',
      distance: '2.5 km from city center',
      specialty: 'Traditional Egyptian coffee',
      dishes: ['Turkish Coffee', 'Shisha', 'Baklava', 'Egyptian Tea'],
      price: '15-45 EGP',
      image: 'https://images.pexels.com/photos/1546039/pexels-photo-1546039.jpeg?auto=compress&cs=tinysrgb&w=800',
      atmosphere: 'Historic ambiance with traditional decor'
    },
    {
      name: 'Costa Coffee Tanta',
      distance: '1.2 km from downtown',
      specialty: 'International coffee chains',
      dishes: ['Cappuccino', 'Pastries', 'Sandwiches', 'Iced Drinks'],
      price: '25-65 EGP',
      image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=800',
      atmosphere: 'Modern western-style coffee shop'
    },
    {
      name: 'Al Malky Café',
      distance: '1.8 km from main square',
      specialty: 'Local Egyptian cuisine',
      dishes: ['Ful Medames', 'Falafel', 'Fresh Juice', 'Egyptian Breakfast'],
      price: '10-30 EGP',
      image: 'https://images.pexels.com/photos/1850595/pexels-photo-1850595.jpeg?auto=compress&cs=tinysrgb&w=800',
      atmosphere: 'Authentic local experience'
    },
    {
      name: 'Cilantro Café',
      distance: '0.8 km from Tanta Mall',
      specialty: 'Premium coffee and desserts',
      dishes: ['Specialty Coffee', 'Cheesecake', 'Croissants', 'Smoothies'],
      price: '30-80 EGP',
      image: 'https://images.pexels.com/photos/1833336/pexels-photo-1833336.jpeg?auto=compress&cs=tinysrgb&w=800',
      atmosphere: 'Upscale café with modern interior'
    },
    {
      name: 'Nile View Café',
      distance: '3.2 km from city center',
      specialty: 'Scenic riverside dining',
      dishes: ['Grilled Fish', 'Mixed Grill', 'Fresh Salads', 'Traditional Sweets'],
      price: '40-120 EGP',
      image: 'https://images.pexels.com/photos/1537635/pexels-photo-1537635.jpeg?auto=compress&cs=tinysrgb&w=800',
      atmosphere: 'Beautiful river views and outdoor seating'
    },
    {
      name: 'Students\' Corner Café',
      distance: '0.5 km from Tanta University',
      specialty: 'Budget-friendly student hangout',
      dishes: ['Instant Coffee', 'Simple Sandwiches', 'Local Snacks', 'Tea'],
      price: '5-20 EGP',
      image: 'https://images.pexels.com/photos/1907227/pexels-photo-1907227.jpeg?auto=compress&cs=tinysrgb&w=800',
      atmosphere: 'Casual and budget-friendly for students'
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      gold: 'bg-gold-50 border-gold-200',
      sand: 'bg-sand-50 border-sand-200',
      nile: 'bg-nile-50 border-nile-200'
    };
    return colors[color] || colors.gold;
  };

  const getIconColor = (color) => {
    const colors = {
      gold: 'text-gold-600',
      sand: 'text-sand-600',
      nile: 'text-nile-600'
    };
    return colors[color] || colors.gold;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl font-bold text-gray-900 mb-4">
            Extra Charges & Local Recommendations
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Be prepared for additional costs and discover the best cafés in Tanta
          </p>
        </div>

        {/* Common Extra Charges */}
        <div className="mb-16">
          <h2 className="font-serif text-3xl font-bold text-gray-900 mb-8 text-center">
            Common Extra Charges
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {commonExpenses.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className={`p-6 ${getColorClasses(category.color)} border-b`}>
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <IconComponent className={`h-8 w-8 ${getIconColor(category.color)}`} />
                      </div>
                      <h3 className="font-serif text-2xl font-semibold text-gray-900">
                        {category.category}
                      </h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      {category.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex justify-between items-start p-4 bg-gray-50 rounded-lg">
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 mb-1">{item.name}</h4>
                            <p className="text-sm text-gray-600">{item.description}</p>
                          </div>
                          <div className="ml-4 text-right">
                            <span className="font-bold text-lg text-gray-900">{item.price}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Famous Cafés in Tanta */}
        <div className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-gray-900 mb-8 text-center">
            Famous Cafés in Tanta
          </h2>
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {tantaCafes.map((cafe, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative">
                  <img
                    src={cafe.image}
                    alt={cafe.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-gold-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {cafe.price}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold text-gray-900 mb-2">
                    {cafe.name}
                  </h3>
                  <div className="flex items-center space-x-2 mb-3 text-sm text-gray-600">
                    <MapPin className="h-4 w-4" />
                    <span>{cafe.distance}</span>
                  </div>
                  <p className="text-sm text-nile-600 font-medium mb-2">{cafe.specialty}</p>
                  <p className="text-gray-600 text-sm mb-4">{cafe.atmosphere}</p>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Popular Dishes:</h4>
                    <div className="flex flex-wrap gap-2">
                      {cafe.dishes.map((dish, dishIndex) => (
                        <span
                          key={dishIndex}
                          className="bg-gold-100 px-3 py-1 rounded-full text-sm text-gold-700"
                        >
                          {dish}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Money Saving Tips */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="font-serif text-3xl font-bold text-gray-900 mb-6 text-center">
            Money-Saving Tips for Extra Charges
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-gold-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-gold-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Budget Ahead</h3>
              <p className="text-gray-600">Add 20-30% to your budget for unexpected fees and tips.</p>
            </div>
            <div className="text-center">
              <div className="bg-nile-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-nile-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Ask Before You Pay</h3>
              <p className="text-gray-600">Always confirm prices and ask about additional fees upfront.</p>
            </div>
            <div className="text-center">
              <div className="bg-sand-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Coffee className="h-8 w-8 text-sand-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Local vs Tourist</h3>
              <p className="text-gray-600">Local cafés often offer better prices than tourist-oriented venues.</p>
            </div>
            <div className="text-center">
              <div className="bg-gold-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Plane className="h-8 w-8 text-gold-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Service Charges</h3>
              <p className="text-gray-600">Check if service charges are included before adding extra tips.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraCharges;