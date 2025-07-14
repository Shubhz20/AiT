import React from 'react';
import { MapPin, Clock, Star, Camera, Users, Building } from 'lucide-react';

const Agenda = () => {
  const famousPlaces = [
    {
      name: 'Pyramids of Giza',
      location: 'Giza',
      type: 'Ancient Wonder',
      duration: 'Full Day',
      price: '200 EGP',
      image: 'https://images.pexels.com/photos/71241/pexels-photo-71241.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Marvel at the last remaining wonder of the ancient world.',
      rating: 5,
      activities: ['Photography', 'Camel rides', 'Pyramid interior tours']
    },
    {
      name: 'Egyptian Museum',
      location: 'Cairo',
      type: 'Museum',
      duration: '3-4 hours',
      price: '180 EGP',
      image: 'https://images.pexels.com/photos/87009/earth-soil-creep-moon-87009.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Discover treasures of ancient Egypt including Tutankhamun artifacts.',
      rating: 5,
      activities: ['Guided tours', 'Photography', 'Audio guides']
    },
    {
      name: 'Khan El Khalili Bazaar',
      location: 'Cairo',
      type: 'Historic Market',
      duration: '2-3 hours',
      price: 'Free entry',
      image: 'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Experience traditional Egyptian market culture and shopping.',
      rating: 4,
      activities: ['Shopping', 'Traditional crafts', 'Local food']
    },
    {
      name: 'Citadel of Saladin',
      location: 'Cairo',
      type: 'Historic Fortress',
      duration: '2-3 hours',
      price: '100 EGP',
      image: 'https://images.pexels.com/photos/1320687/pexels-photo-1320687.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Medieval Islamic fortification with stunning city views.',
      rating: 4,
      activities: ['History tours', 'Photography', 'Mosque visits']
    },
    {
      name: 'Valley of the Kings',
      location: 'Luxor',
      type: 'Archaeological Site',
      duration: 'Half Day',
      price: '240 EGP',
      image: 'https://images.pexels.com/photos/1320689/pexels-photo-1320689.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Ancient royal burial ground with elaborate tomb paintings.',
      rating: 5,
      activities: ['Tomb visits', 'Hieroglyph viewing', 'Photography']
    },
    {
      name: 'Abu Simbel Temples',
      location: 'Aswan',
      type: 'Ancient Temple',
      duration: 'Full Day',
      price: '255 EGP',
      image: 'https://images.pexels.com/photos/1320690/pexels-photo-1320690.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Magnificent temples carved into rock faces by Ramesses II.',
      rating: 5,
      activities: ['Temple tours', 'Photography', 'Sunrise viewing']
    }
  ];

  const tantaActivities = [
    {
      name: 'Galaxy Bowling Center',
      type: 'Entertainment',
      location: 'Downtown Tanta',
      price: '25-40 EGP/game',
      image: 'https://images.pexels.com/photos/4192513/pexels-photo-4192513.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Modern bowling alley with 12 lanes and snack bar.',
      hours: '2 PM - 12 AM',
      activities: ['Bowling', 'Arcade games', 'Food & drinks']
    },
    {
      name: 'Fun City Arcade',
      type: 'Gaming Center',
      location: 'Tanta Mall',
      price: '10-50 EGP/game',
      image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Large arcade with video games, racing simulators, and prizes.',
      hours: '10 AM - 11 PM',
      activities: ['Video games', 'Racing games', 'Prize machines']
    },
    {
      name: 'Tanta Cultural Center',
      type: 'Cultural Site',
      location: 'City Center',
      price: '15-30 EGP',
      image: 'https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Local cultural events, exhibitions, and performances.',
      hours: '9 AM - 9 PM',
      activities: ['Art exhibitions', 'Local performances', 'Cultural events']
    },
    {
      name: 'Al-Ahly Sports Club',
      type: 'Sports & Recreation',
      location: 'Sports District',
      price: '30-60 EGP/day',
      image: 'https://images.pexels.com/photos/1321909/pexels-photo-1321909.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Sports facilities including tennis, swimming, and fitness.',
      hours: '6 AM - 10 PM',
      activities: ['Swimming', 'Tennis', 'Fitness center']
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

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl font-bold text-gray-900 mb-4">
            Trip Agenda & Places to Visit
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover Egypt's most iconic destinations and local attractions in Tanta
          </p>
        </div>

        {/* Tanta Local Activities */}
        <div className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-gray-900 mb-8 text-center">
            Local Activities in Tanta
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {tantaActivities.map((activity, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  <img
                    src={activity.image}
                    alt={activity.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-nile-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {activity.type}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold text-gray-900 mb-2">
                    {activity.name}
                  </h3>
                  <div className="flex items-center space-x-4 mb-3 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{activity.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{activity.hours}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{activity.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-bold text-nile-600">{activity.price}</span>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Available Activities:</h4>
                    <div className="flex flex-wrap gap-2">
                      {activity.activities.map((act, actIndex) => (
                        <span
                          key={actIndex}
                          className="bg-nile-100 px-3 py-1 rounded-full text-sm text-nile-700"
                        >
                          {act}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Planning Tips */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="font-serif text-3xl font-bold text-gray-900 mb-6 text-center">
            Trip Planning Tips
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-gold-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-gold-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Best Time to Visit</h3>
              <p className="text-gray-600">October to April offers pleasant weather for sightseeing.</p>
            </div>
            <div className="text-center">
              <div className="bg-nile-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="h-8 w-8 text-nile-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Photography Tips</h3>
              <p className="text-gray-600">Early morning and late afternoon provide the best lighting.</p>
            </div>
            <div className="text-center">
              <div className="bg-sand-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-sand-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Guided Tours</h3>
              <p className="text-gray-600">Consider hiring local guides for historical context and insights.</p>
            </div>
            <div className="text-center">
              <div className="bg-gold-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8 text-gold-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Advance Booking</h3>
              <p className="text-gray-600">Book popular attractions and activities in advance to avoid disappointment.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agenda;