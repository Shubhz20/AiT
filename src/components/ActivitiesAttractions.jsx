import React from 'react';
import { MapPin, Utensils, Coffee, Car, Camera, Building, TreePine, ShoppingBag, BookOpen, Music, Users, Trophy, GraduationCap, Heart } from 'lucide-react';
import chilloutImg from '../images/attracctions/WhatsApp Image 2025-07-15 at 23.45.00 copy.jpeg';

const ActivitiesAttractions = () => {
  const localActivities = [
    {
      category: 'Spiritual & Historical',
      icon: Building,
      items: [
        { name: 'Ahmad al-Badawi Mosque & Shrine', description: 'Sacred site for Sufi Muslims; center of the October Sufi Festival (Mawlid)', duration: '2-3 hours', cost: 'Free entry' },
        { name: 'Tanta Museum', description: 'Houses artifacts from Pharaonic, Coptic, and Islamic periods', duration: '1-2 hours', cost: '10 EGP' },
        { name: 'Tanta Opera House & Cultural Center', description: 'Live music, plays, and cultural events', duration: '2-4 hours', cost: '50-150 EGP' }
      ],
      color: 'gold'
    },
    {
      category: 'Nature & Relaxation',
      icon: TreePine,
      items: [
        { name: 'Al-Saadi Park & El-Tahrir Garden', description: 'Ideal for walks, reading, or relaxing', duration: '1-3 hours', cost: 'Free' },
        { name: 'Tanta University Campus', description: 'Peaceful academic environment with beautiful gardens', duration: '1-2 hours', cost: 'Free' },
        { name: 'Nile River Walk', description: 'Scenic riverside promenade for evening strolls', duration: '1-2 hours', cost: 'Free' }
      ],
      color: 'nile'
    },
    {
      category: 'Shopping & Markets',
      icon: ShoppingBag,
      items: [
        { name: 'Tanta Souqs (Markets)', description: 'Full of sweets, textiles, perfumes, and antiques', duration: '2-4 hours', cost: 'Free entry' },
        { name: 'Tanta Central Market', description: 'Traditional souk with local goods and street food', duration: '2-3 hours', cost: 'Free entry' },
        { name: 'Tanta Mall', description: 'Modern shopping center with international brands', duration: '2-4 hours', cost: 'Free entry' }
      ],
      color: 'sand'
    },
    {
      category: 'Sports & Community',
      icon: Trophy,
      items: [
        { name: 'Tanta Sporting Club', description: 'Pools, tennis, soccer, fitness events', duration: '2-4 hours', cost: '50-100 EGP' },
        { name: 'Local Festivals', description: 'Seasonal celebrations and cultural events', duration: '3-6 hours', cost: 'Free' },
        { name: 'Traditional Music Performances', description: 'Live performances at local cafés', duration: '1-2 hours', cost: '20-50 EGP' }
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

  const localAttractions = [
    {
      name: 'Chillout Spot',
      type: 'Relaxation',
      description: 'A cozy place to relax, unwind, and enjoy the local vibe. Perfect for a break during your trip.',
      bestTime: 'Afternoon or evening',
      tips: 'Bring a book or enjoy a coffee with friends',
      image: chilloutImg,
      activities: ['Relaxing', 'Socializing', 'Reading']
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
            Activities & Attractions in Tanta
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the best local activities, attractions, and cafés in Tanta
          </p>
        </div>

        {/* Local Activities */}
        <div className="mb-16">
          <h2 className="font-serif text-3xl font-bold text-gray-900 mb-8 text-center">
            Local Activities & Attractions
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {localActivities.map((category, index) => {
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
                        <div key={itemIndex} className="p-4 bg-gray-50 rounded-lg">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-semibold text-gray-900">{item.name}</h4>
                            <span className="text-sm text-gray-500">{item.duration}</span>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                          <div className="text-right">
                            <span className="font-bold text-lg text-gray-900">{item.cost}</span>
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

        {/* Top Attractions */}
        <div className="mb-16">
          <h2 className="font-serif text-3xl font-bold text-gray-900 mb-8 text-center">
            Top Attractions in Tanta
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {localAttractions.map((attraction, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative">
                  <img
                    src={attraction.image}
                    alt={attraction.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-gold-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {attraction.type}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold text-gray-900 mb-2">
                    {attraction.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{attraction.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Best Time:</h4>
                      <p className="text-sm text-gray-600">{attraction.bestTime}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Tips:</h4>
                      <p className="text-sm text-gray-600">{attraction.tips}</p>
                    </div>
                  </div>

                  {attraction.activities && (
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Activities:</h4>
                      <div className="flex flex-wrap gap-2">
                        {attraction.activities.map((activity, activityIndex) => (
                          <span
                            key={activityIndex}
                            className="bg-nile-100 px-3 py-1 rounded-full text-sm text-nile-700"
                          >
                            {activity}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
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

        {/* Local Tips */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="font-serif text-3xl font-bold text-gray-900 mb-6 text-center">
            Local Tips for Exploring Tanta
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-gold-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="h-8 w-8 text-gold-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Best Photo Spots</h3>
              <p className="text-gray-600">Visit Al-Badawi Mosque and Nile promenade for stunning photos.</p>
            </div>
            <div className="text-center">
              <div className="bg-nile-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Coffee className="h-8 w-8 text-nile-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Café Culture</h3>
              <p className="text-gray-600">Experience local life by visiting traditional cafés and trying Egyptian coffee.</p>
            </div>
            <div className="text-center">
              <div className="bg-sand-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="h-8 w-8 text-sand-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Market Shopping</h3>
              <p className="text-gray-600">Bargain at local markets for authentic souvenirs and local products.</p>
            </div>
            <div className="text-center">
              <div className="bg-gold-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-gold-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Cultural Respect</h3>
              <p className="text-gray-600">Dress modestly and respect local customs when visiting religious sites.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivitiesAttractions;