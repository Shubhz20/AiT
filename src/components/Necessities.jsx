import React from 'react';
import { Coffee, ShoppingBag, Wine, Cigarette } from 'lucide-react';

const Necessities = () => {
  const categories = [
    {
      icon: Coffee,
      title: 'Food & Drinks',
      items: [
        { name: 'Traditional Egyptian Breakfast', price: '15-25 EGP', description: 'Ful medames, falafel, bread' },
        { name: 'Street Food', price: '5-15 EGP', description: 'Koshari, shawarma, falafel' },
        { name: 'Restaurant Meal', price: '50-150 EGP', description: 'Mid-range dining experience' },
        { name: 'Fresh Juice', price: '10-20 EGP', description: 'Mango, orange, sugarcane' },
        { name: 'Tea/Coffee', price: '5-15 EGP', description: 'Traditional Egyptian tea or Turkish coffee' },
        { name: 'Bottled Water', price: '3-5 EGP', description: 'Always recommended for tourists' }
      ],
      color: 'gold'
    },
    {
      icon: ShoppingBag,
      title: 'Clothes',
      items: [
        { name: 'Cotton T-Shirts', price: '50-150 EGP', description: 'Perfect for hot weather' },
        { name: 'Traditional Galabiya', price: '100-300 EGP', description: 'Comfortable local clothing' },
        { name: 'Scarves/Hijabs', price: '30-100 EGP', description: 'For visiting mosques' },
        { name: 'Sandals', price: '80-200 EGP', description: 'Comfortable walking shoes' },
        { name: 'Sun Hat', price: '25-75 EGP', description: 'Essential for desert visits' },
        { name: 'Light Jacket', price: '150-400 EGP', description: 'For cooler evenings' }
      ],
      color: 'sand'
    },
    {
      icon: Wine,
      title: 'Cigarettes & Alcohol',
      items: [
        { name: 'Local Cigarettes', price: '15-25 EGP', description: 'Cleopatra, L&M brands' },
        { name: 'International Cigarettes', price: '35-50 EGP', description: 'Marlboro, Camel' },
        { name: 'Local Beer (Stella)', price: '15-25 EGP', description: 'Popular Egyptian beer' },
        { name: 'Wine', price: '200-500 EGP', description: 'Limited selection available' },
        { name: 'Spirits', price: '300-800 EGP', description: 'Available in hotels and duty-free' },
        { name: 'Note', price: 'Varies', description: 'Alcohol availability limited in some areas' }
      ],
      color: 'nile'
    },
    {
      icon: Cigarette,
      title: 'Hookah',
      items: [
        { name: 'Café Hookah Session', price: '30-60 EGP', description: 'Traditional shisha experience' },
        { name: 'Hotel Hookah', price: '80-150 EGP', description: 'Premium tourist locations' },
        { name: 'Hookah Tobacco', price: '20-40 EGP', description: 'Various flavors available' },
        { name: 'Portable Hookah', price: '200-500 EGP', description: 'Souvenir option' },
        { name: 'Traditional Café', price: '25-45 EGP', description: 'Authentic local experience' },
        { name: 'Fruit Flavored', price: '35-65 EGP', description: 'Apple, grape, mint varieties' }
      ],
      color: 'gold'
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      gold: 'bg-gold-50 border-gold-200 hover:bg-gold-100',
      sand: 'bg-sand-50 border-sand-200 hover:bg-sand-100',
      nile: 'bg-nile-50 border-nile-200 hover:bg-nile-100'
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
            Basic Necessities in Egypt
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Essential items and their approximate costs to help you budget for your Egyptian adventure
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
                <div className={`p-6 ${getColorClasses(category.color)} border-b`}>
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <IconComponent className={`h-8 w-8 ${getIconColor(category.color)}`} />
                    </div>
                    <h2 className="font-serif text-2xl font-semibold text-gray-900">
                      {category.title}
                    </h2>
                  </div>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex justify-between items-start p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 mb-1">{item.name}</h3>
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

        <div className="mt-12 bg-gold-50 rounded-lg p-8 border border-gold-200">
          <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-4">💡 Money-Saving Tips</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Bargaining</h4>
              <p className="text-gray-700">Always negotiate prices in markets and with street vendors. Start at 50% of the asking price.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Local Spots</h4>
              <p className="text-gray-700">Eat where locals eat for authentic food at better prices. Tourist areas are typically more expensive.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Cash is King</h4>
              <p className="text-gray-700">Carry Egyptian pounds for better deals. Many places offer discounts for cash payments.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Timing</h4>
              <p className="text-gray-700">Shop during midday when it's less crowded for better bargaining opportunities.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Necessities;