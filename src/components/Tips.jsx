import React from 'react';
import { CheckCircle, XCircle, Sparkles } from 'lucide-react';

const doTips = [
  'Greet people politely and use basic Arabic phrases.',
  'Respect local customs and dress modestly, especially in religious sites.',
  'Drink bottled or filtered water.',
  'Carry small change for tips and minor purchases.',
  'Ask before taking photos of people, especially in rural areas.',
  'Use sunscreen and stay hydrated in the sun.',
  'Negotiate prices in markets, but do so respectfully.',
  'Try local foods and support small businesses.'
];

const dontTips = [
  "Don't display public affection in conservative areas.",
  "Don't drink tap water unless it's filtered or boiled.",
  "Don't criticize religion or politics.",
  "Don't enter mosques during prayer times unless invited.",
  "Don't hand money or items with your left hand.",
  "Don't expect punctuality—time is flexible in Egypt!",
  "Don't forget to bargain in markets, but don't be rude.",
  "Don't wear shoes inside homes or mosques."
];

const extraTips = [
  'Friday is a holy day—many businesses open late or close early.',
  'Uber and Careem are safer than hailing taxis on the street.',
  'Tipping (baksheesh) is customary for most services.',
  'Learn a few Arabic numbers for prices and directions.',
  'Women travelers: consider carrying a scarf for covering hair if needed.',
  'Traffic can be chaotic—cross streets carefully!',
  'Download offline maps before traveling.'
];

const cardBase =
  'rounded-3xl shadow-2xl p-12 min-h-[440px] transform transition duration-500 hover:scale-105 hover:shadow-3xl bg-white bg-opacity-90 backdrop-blur-lg border-0';

const Tips = () => (
  <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-gold-200 to-nile-200 py-16 animate-fade-in">
    <div className="max-w-7xl mx-auto px-2 sm:px-8 lg:px-16">
      <div className="flex flex-col items-center mb-14">
        <Sparkles className="h-14 w-14 text-gold-500 animate-bounce mb-2 drop-shadow-lg" />
        <h1 className="font-serif text-5xl font-extrabold text-center text-gold-700 mb-2">
          Mindblowing Travel Tips
        </h1>
        <p className="text-xl text-gray-700 text-center max-w-2xl mt-2 font-medium">
          Unlock the secrets to an unforgettable journey in Egypt. Follow these essential do's, don'ts, and extra tips for a safe, respectful, and amazing adventure!
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-10">
        {/* Do Card */}
        <div className={`${cardBase} border-t-8 border-green-400 relative overflow-hidden group`}> 
          <div className="absolute -top-10 -right-10 opacity-20 group-hover:opacity-40 transition-all duration-500">
            <CheckCircle className="h-40 w-40 text-green-300" />
          </div>
          <div className="flex items-center justify-center mb-6">
            <CheckCircle className="h-14 w-14 text-green-500 animate-pulse" />
            <h2 className="ml-4 text-4xl font-bold text-green-700 drop-shadow">Do</h2>
          </div>
          <ul className="list-disc list-inside space-y-4 text-xl text-gray-800 font-medium z-10 relative">
            {doTips.map((tip, idx) => <li key={idx} className="hover:text-green-600 transition-colors duration-200">{tip}</li>)}
          </ul>
        </div>
        {/* Don't Card */}
        <div className={`${cardBase} border-t-8 border-red-400 relative overflow-hidden group`}>
          <div className="absolute -top-10 -right-10 opacity-20 group-hover:opacity-40 transition-all duration-500">
            <XCircle className="h-40 w-40 text-red-300" />
          </div>
          <div className="flex items-center justify-center mb-6">
            <XCircle className="h-14 w-14 text-red-500 animate-pulse" />
            <h2 className="ml-4 text-4xl font-bold text-red-700 drop-shadow">Don't</h2>
          </div>
          <ul className="list-disc list-inside space-y-4 text-xl text-gray-800 font-medium z-10 relative">
            {dontTips.map((tip, idx) => <li key={idx} className="hover:text-red-600 transition-colors duration-200">{tip}</li>)}
          </ul>
        </div>
        {/* Extra Tips Card */}
        <div className={`${cardBase} border-t-8 border-yellow-400 relative overflow-hidden group`}>
          <div className="absolute -top-10 -right-10 opacity-20 group-hover:opacity-40 transition-all duration-500">
            <Sparkles className="h-40 w-40 text-yellow-300" />
          </div>
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="h-14 w-14 text-yellow-500 animate-pulse" />
            <h2 className="ml-4 text-4xl font-bold text-yellow-700 drop-shadow">Extra Tips</h2>
          </div>
          <ul className="list-disc list-inside space-y-4 text-xl text-gray-800 font-medium z-10 relative">
            {extraTips.map((tip, idx) => <li key={idx} className="hover:text-yellow-600 transition-colors duration-200">{tip}</li>)}
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Tips; 