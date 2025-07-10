import React from 'react';
import { Coffee, ShoppingBag, Wine, Cigarette, Car } from 'lucide-react';

const Necessities = () => {
  const categories = [
    {
      icon: Coffee,
      title: 'Food & Drinks',
      items: [
        { name: 'Traditional Egyptian Breakfast', price: '15-50 EGP', description: 'Ful medames, falafel, bread' },
        { name: 'Street Food', price: '30-100 EGP', description: 'Koshari, shawarma, falafel' },
        { name: 'Restaurant Meal', price: '70-150 EGP', description: 'Mid-range dining experience' },
        { name: 'Fresh Juice', price: '10-20 EGP', description: 'Mango, orange, sugarcane' },
        { name: 'Tea/Coffee', price: '10-40 EGP', description: 'Traditional Egyptian tea or Turkish coffee' },
        { name: 'Bottled Water', price: '5-15 EGP', description: 'Always recommended for tourists' }
      ],
      color: 'gold'
    },
    {
      icon: Car,
      title: 'Transportation',
      items: [
        { name: 'Cabs', price: '30-120 EGP', description: 'For Upto 10km' },
        { name: 'Cabs', price: '600-800 EGP', description: 'For upto 100km' },
        { name: 'Sharing vans', price: '5-10 EGP', description: 'To save Money' },
        { name: 'Trains', price: '50-200 EGP', description: 'For Long Distances' },
        { name: 'Car Rental', price: '25-75 EGP', description: 'If you want to drive yourself' },
        { name: 'Bikes', price: '15-40 EGP', description: 'For Faster Travel' }
      ],
      color: 'sand'
    },
    {
      icon: Wine,
      title: 'Smoking & Drinking',
      items: [
        { name: 'Cigarettes', price: '80-100 EGP', description: 'Cleopatra, L&M, Marlboro' },
        { name: 'Vapes', price: '600-2000 EGP', description: 'Reusable,disposeable' },
        { name: 'Local Beer (Stella)', price: '60-100 EGP', description: 'Popular Egyptian beer' },
        { name: 'Wine', price: '200-500 EGP', description: 'Limited selection available' },
        { name: 'Hookah', price: '25-70 EGP', description: 'Available at almost all cafes ' },
        { name: 'Note', price: 'Varies', description: 'Alcohol availability limited in some areas' }
      ],
      color: 'nile'
    },
    {
      icon: ShoppingBag,
      title: 'Groceries',
      items: [
        { name: 'Vegetables', price: '5-40 EGP', description: 'Per Kg' },
        { name: 'Fruits', price: '60-150 EGP', description: 'Per Kg' },
        { name: 'Milk', price: '45-60 EGP', description: 'Per Litre' },
        { name: 'Cooking Oil', price: '65-150 EGP', description: 'Per Litre' },
        { name: 'Cold Drinks', price: '10-45 EGP', description: 'Coca Cola,schweppes,sprite' },
        { name: 'Grains', price: '40-100 EGP', description: 'Per Kg' }
      ],
      color: 'gold'
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      gold: 'from-yellow-100 via-gold-200 to-nile-200',
      sand: 'from-sand-100 via-yellow-100 to-gold-100',
      nile: 'from-nile-100 via-gold-100 to-yellow-100',
    };
    return colors[color] || colors.gold;
  };

  const getIconColor = (color) => {
    const colors = {
      gold: 'text-gold-600',
      sand: 'text-sand-600',
      nile: 'text-nile-600',
    };
    return colors[color] || colors.gold;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-gold-200 to-nile-200 py-16 animate-fade-in">
      <div className="max-w-7xl mx-auto px-2 sm:px-8 lg:px-16">
        <div className="text-center mb-14">
          <h1 className="font-serif text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gold-600 via-nile-600 to-yellow-500 drop-shadow-xl mb-4">
            Basic Necessities in Egypt
          </h1>
          <p className="text-2xl text-gray-700 max-w-3xl mx-auto font-medium">
            Essential items and their approximate costs to help you budget for your Egyptian adventure
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div key={index} className="rounded-3xl shadow-2xl p-10 min-h-[420px] transform transition duration-500 hover:scale-105 hover:shadow-3xl bg-white bg-opacity-90 backdrop-blur-lg border-0 relative overflow-hidden group">
                <div className={`absolute -top-10 -right-10 opacity-20 group-hover:opacity-40 transition-all duration-500 h-40 w-40 rounded-full blur-2xl bg-gradient-to-br ${getColorClasses(category.color)}`}></div>
                <div className="flex items-center mb-6">
                  <IconComponent className={`h-14 w-14 ${getIconColor(category.color)} drop-shadow-lg`} aria-label={category.title} />
                  <h2 className="ml-4 text-4xl font-bold text-gray-900 drop-shadow">{category.title}</h2>
                </div>
                <div className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex justify-between items-start p-4 bg-gray-50 rounded-xl hover:bg-gold-50 transition-colors duration-200">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg text-gray-900 mb-1">{item.name}</h3>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                      <div className="ml-4 text-right">
                        <span className="font-bold text-xl text-gold-700">{item.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-16 bg-gradient-to-r from-gold-100 via-yellow-50 to-nile-100 rounded-3xl p-12 border-2 border-gold-200 shadow-xl">
          <h3 className="font-serif text-3xl font-extrabold text-gold-700 mb-8 flex items-center"><span className="h-8 w-8 mr-3 text-gold-500">💡</span> Money-Saving Tips</h3>
          <div className="grid md:grid-cols-2 gap-10">
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