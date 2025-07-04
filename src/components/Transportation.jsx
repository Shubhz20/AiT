import React from 'react';
import { Bus, Car, Train, Clock, MapPin, DollarSign } from 'lucide-react';

const Transportation = () => {
  const transportOptions = [
    {
      type: 'Metro/Subway',
      icon: Train,
      price: '5-10 EGP',
      duration: '20-45 min',
      image: 'https://images.pexels.com/photos/159306/pexels-photo-159306.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Modern metro system in Cairo. Clean, fast, and efficient.',
      pros: ['Very affordable', 'Avoids traffic', 'Air conditioned'],
      cons: ['Limited routes', 'Crowded during rush hours'],
      tips: 'First car is usually reserved for women during certain hours.'
    },
    {
      type: 'Public Bus',
      icon: Bus,
      price: '2-5 EGP',
      duration: '30-90 min',
      image: 'https://images.pexels.com/photos/1319650/pexels-photo-1319650.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Extensive bus network covering most areas of major cities.',
      pros: ['Cheapest option', 'Wide coverage', 'Frequent services'],
      cons: ['Can be very crowded', 'No AC on older buses', 'Language barrier'],
      tips: 'Have exact change ready and learn key Arabic phrases.'
    },
    {
      type: 'Taxi',
      icon: Car,
      price: '20-100 EGP',
      duration: '15-60 min',
      image: 'https://images.pexels.com/photos/409701/pexels-photo-409701.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Traditional white taxis and ride-hailing apps like Uber and Careem.',
      pros: ['Door-to-door service', 'Flexible timing', 'Air conditioned'],
      cons: ['More expensive', 'Traffic jams', 'Negotiate fare beforehand'],
      tips: 'Use ride-hailing apps for transparent pricing.'
    },
    {
      type: 'Microbus',
      icon: Bus,
      price: '3-8 EGP',
      duration: '20-45 min',
      image: 'https://images.pexels.com/photos/1319651/pexels-photo-1319651.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Minivans that follow fixed routes with flexible stops.',
      pros: ['More comfortable than buses', 'Frequent departures', 'Affordable'],
      cons: ['No fixed schedule', 'Can get crowded', 'Route knowledge needed'],
      tips: 'Learn the destination names in Arabic for easier communication.'
    },
    {
      type: 'Uber/Careem',
      icon: Car,
      price: '25-120 EGP',
      duration: '15-50 min',
      image: 'https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Popular ride-hailing services available in major Egyptian cities.',
      pros: ['Transparent pricing', 'GPS tracking', 'English support'],
      cons: ['Surge pricing during peak hours', 'Need internet connection'],
      tips: 'Download both apps as availability can vary by location.'
    },
    {
      type: 'Tuk-Tuk',
      icon: Car,
      price: '10-30 EGP',
      duration: '10-25 min',
      image: 'https://images.pexels.com/photos/1319652/pexels-photo-1319652.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Three-wheeled vehicles perfect for short distances and narrow streets.',
      pros: ['Very affordable', 'Navigate narrow streets', 'Fun experience'],
      cons: ['No AC', 'Not suitable for long distances', 'Negotiate price'],
      tips: 'Great for exploring local neighborhoods and short trips.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl font-bold text-gray-900 mb-4">
            Transportation in Egypt
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Navigate Egypt with confidence using our comprehensive transportation guide
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {transportOptions.map((option, index) => {
            const IconComponent = option.icon;
            return (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  <img
                    src={option.image}
                    alt={option.type}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-gold-600 text-white px-3 py-1 rounded-full flex items-center space-x-2">
                    <IconComponent className="h-4 w-4" />
                    <span className="font-semibold">{option.type}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1 text-gold-600">
                        <DollarSign className="h-4 w-4" />
                        <span className="font-bold">{option.price}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-nile-600">
                        <Clock className="h-4 w-4" />
                        <span className="font-semibold">{option.duration}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{option.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="font-semibold text-green-700 mb-2">Pros:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {option.pros.map((pro, proIndex) => (
                          <li key={proIndex} className="flex items-center space-x-2">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                            <span>{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-700 mb-2">Cons:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {option.cons.map((con, conIndex) => (
                          <li key={conIndex} className="flex items-center space-x-2">
                            <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                            <span>{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-gold-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-gold-800 mb-1">💡 Pro Tip:</h5>
                    <p className="text-sm text-gold-700">{option.tips}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="font-serif text-3xl font-bold text-gray-900 mb-6 text-center">
            Transportation Tips for Egypt
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-gold-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-gold-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Know Your Route</h3>
              <p className="text-gray-600">Download offline maps and learn key landmarks before traveling.</p>
            </div>
            <div className="text-center">
              <div className="bg-nile-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-nile-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Carry Small Bills</h3>
              <p className="text-gray-600">Always have small denominations for public transport and tips.</p>
            </div>
            <div className="text-center">
              <div className="bg-sand-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-sand-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Avoid Rush Hours</h3>
              <p className="text-gray-600">Travel between 10 AM - 3 PM or after 7 PM for less crowded rides.</p>
            </div>
            <div className="text-center">
              <div className="bg-gold-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="h-8 w-8 text-gold-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Safety First</h3>
              <p className="text-gray-600">Keep valuables secure and use reputable transportation services.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transportation;