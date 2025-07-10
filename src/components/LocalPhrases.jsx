import React, { useState } from 'react';
import { Volume2, BookOpen, MessageCircle, Heart } from 'lucide-react';

const speakArabic = (text) => {
  if ('speechSynthesis' in window) {
    const synth = window.speechSynthesis;
    const speak = () => {
      const utterance = new window.SpeechSynthesisUtterance(text);
      utterance.lang = 'ar-EG';
      utterance.rate = 0.9;
      // Try to select an Arabic voice
      const voices = synth.getVoices();
      const arabicVoice = voices.find(v => v.lang && v.lang.startsWith('ar'));
      if (arabicVoice) utterance.voice = arabicVoice;
      synth.speak(utterance);
    };
    // Some browsers need getVoices to be loaded asynchronously
    if (synth.getVoices().length === 0) {
      synth.onvoiceschanged = speak;
      synth.getVoices(); // Trigger loading
    } else {
      speak();
    }
  } else {
    alert('Sorry, your browser does not support speech synthesis.');
  }
};

const LocalPhrases = () => {
  const [selectedCategory, setSelectedCategory] = useState('basic');

  const phraseCategories = {
    basic: {
      title: 'Basic Greetings',
      icon: MessageCircle,
      phrases: [
        { english: 'Hello', arabic: 'أهلاً وسهلاً', pronunciation: 'Ahlan wa sahlan', usage: 'General greeting' },
        { english: 'Good morning', arabic: 'صباح الخير', pronunciation: 'Sabah el khair', usage: 'Morning greeting' },
        { english: 'Good evening', arabic: 'مساء الخير', pronunciation: 'Masa el khair', usage: 'Evening greeting' },
        { english: 'How are you?', arabic: 'إزيك؟ / كيف حالك؟', pronunciation: 'Izzayak? / Kayf halak?', usage: 'Asking how someone is' },
        { english: 'Fine, thank you', arabic: 'كويس، شكراً', pronunciation: 'Kuwayyis, shukran', usage: 'Response to how are you' },
        { english: 'Thank you', arabic: 'شكراً', pronunciation: 'Shukran', usage: 'Expressing gratitude' },
        { english: 'You\'re welcome', arabic: 'عفواً', pronunciation: 'Afwan', usage: 'Response to thank you' },
        { english: 'Excuse me', arabic: 'عذراً', pronunciation: 'Uzran', usage: 'Getting attention politely' },
        { english: 'I\'m sorry', arabic: 'آسف', pronunciation: 'Asif', usage: 'Apologizing' },
        { english: 'Goodbye', arabic: 'مع السلامة', pronunciation: 'Ma\'a salama', usage: 'Saying goodbye' }
      ]
    },
    shopping: {
      title: 'Shopping & Money',
      icon: BookOpen,
      phrases: [
        { english: 'How much?', arabic: 'بكام؟', pronunciation: 'Bekam?', usage: 'Asking for price' },
        { english: 'Too expensive', arabic: 'غالي قوي', pronunciation: 'Ghali awi', usage: 'When price is high' },
        { english: 'Can you make it cheaper?', arabic: 'ممكن تخليه أرخص؟', pronunciation: 'Mumkin tkhallih arkhas?', usage: 'Bargaining' },
        { english: 'I want this', arabic: 'أنا عايز ده', pronunciation: 'Ana ayiz da', usage: 'Selecting an item' },
        { english: 'I don\'t want it', arabic: 'أنا مش عايزه', pronunciation: 'Ana mesh ayzo', usage: 'Declining an item' },
        { english: 'Do you have...?', arabic: 'عندك...؟', pronunciation: 'Andak...?', usage: 'Asking availability' },
        { english: 'Where is...?', arabic: 'فين...؟', pronunciation: 'Fein...?', usage: 'Asking for location' },
        { english: 'Give me change', arabic: 'إديني الباقي', pronunciation: 'Idini el baqi', usage: 'Asking for change' },
        { english: 'Final price', arabic: 'آخر كلام', pronunciation: 'Akher kalam', usage: 'Final offer in bargaining' },
        { english: 'Good price', arabic: 'سعر كويس', pronunciation: 'Ser kuwayyis', usage: 'Accepting a price' }
      ]
    },
    food: {
      title: 'Food & Dining',
      icon: Heart,
      phrases: [
        { english: 'I\'m hungry', arabic: 'أنا جعان', pronunciation: 'Ana jaan', usage: 'Expressing hunger' },
        { english: 'I\'m thirsty', arabic: 'أنا عطشان', pronunciation: 'Ana atshan', usage: 'Expressing thirst' },
        { english: 'What do you recommend?', arabic: 'إيه اللي تنصحني بيه؟', pronunciation: 'Eh elli tinsahni bih?', usage: 'Asking for recommendations' },
        { english: 'The bill, please', arabic: 'الحساب، لو سمحت', pronunciation: 'El hesab, law samaht', usage: 'Asking for the check' },
        { english: 'Delicious', arabic: 'لذيذ', pronunciation: 'Laziz', usage: 'Complimenting food' },
        { english: 'Spicy', arabic: 'حار', pronunciation: 'Har', usage: 'Describing spicy food' },
        { english: 'Not spicy', arabic: 'مش حار', pronunciation: 'Mesh har', usage: 'Requesting mild food' },
        { english: 'I don\'t eat meat', arabic: 'أنا ماباكلش لحمة', pronunciation: 'Ana mabaklish lahma', usage: 'Vegetarian preference' },
        { english: 'Water, please', arabic: 'مية، لو سمحت', pronunciation: 'Mayya, law samaht', usage: 'Ordering water' },
        { english: 'Tea or coffee?', arabic: 'شاي ولا قهوة؟', pronunciation: 'Shai walla ahwa?', usage: 'Common offer' }
      ]
    },
    directions: {
      title: 'Directions & Travel',
      icon: Volume2,
      phrases: [
        { english: 'Where is the bathroom?', arabic: 'فين الحمام؟', pronunciation: 'Fein el hammam?', usage: 'Finding restroom' },
        { english: 'How do I get to...?', arabic: 'إزاي أروح...؟', pronunciation: 'Izzay aruh...?', usage: 'Asking for directions' },
        { english: 'Is it far?', arabic: 'هو بعيد؟', pronunciation: 'Huwwa baid?', usage: 'Asking about distance' },
        { english: 'Close', arabic: 'قريب', pronunciation: 'Areeb', usage: 'Describing short distance' },
        { english: 'Far', arabic: 'بعيد', pronunciation: 'Baid', usage: 'Describing long distance' },
        { english: 'Right', arabic: 'يمين', pronunciation: 'Yameen', usage: 'Direction' },
        { english: 'Left', arabic: 'شمال', pronunciation: 'Shemal', usage: 'Direction' },
        { english: 'Straight', arabic: 'على طول', pronunciation: 'Ala tul', usage: 'Direction' },
        { english: 'Stop here', arabic: 'قف هنا', pronunciation: 'Uf hina', usage: 'In taxi/transport' },
        { english: 'I\'m lost', arabic: 'أنا تايه', pronunciation: 'Ana tayeh', usage: 'When lost' }
      ]
    }
  };

  const categories = Object.keys(phraseCategories);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-gold-200 to-nile-200 py-12 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-extrabold text-gold-700 mb-4 drop-shadow-xl">
            Essential Arabic Phrases
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium">
            Learn basic Arabic phrases to enhance your travel experience in Egypt
          </p>
        </div>
        {/* Category Selection */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const CategoryIcon = phraseCategories[category].icon;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-lg shadow-lg border-2 border-gold-200 hover:border-nile-400 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-gold-400 via-nile-200 to-yellow-300 text-white shadow-2xl'
                    : 'bg-white text-gold-700 hover:bg-gold-100 hover:text-nile-700'
                }`}
              >
                <CategoryIcon className="h-5 w-5" />
                <span>{phraseCategories[category].title}</span>
              </button>
            );
          })}
        </div>
        {/* Phrases Display */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden backdrop-blur-lg bg-opacity-90 border-0">
          <div className="bg-gradient-to-r from-gold-600 via-nile-400 to-yellow-400 text-white p-8 rounded-t-3xl">
            <div className="flex items-center space-x-3">
              {React.createElement(phraseCategories[selectedCategory].icon, { className: "h-8 w-8" })}
              <h2 className="font-serif text-3xl font-bold">
                {phraseCategories[selectedCategory].title}
              </h2>
            </div>
          </div>
          <div className="p-8">
            <div className="space-y-6">
              {phraseCategories[selectedCategory].phrases.map((phrase, index) => (
                <div key={index} className="bg-gradient-to-r from-yellow-50 via-gold-100 to-nile-50 rounded-xl p-6 hover:scale-[1.02] hover:shadow-xl transition-all duration-300">
                  <div className="grid md:grid-cols-3 gap-4 items-center">
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900 mb-1">
                        {phrase.english}
                      </h3>
                      <p className="text-sm text-gray-600">{phrase.usage}</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-nile-600 mb-2 font-arabic">
                        {phrase.arabic}
                      </div>
                      <div className="text-sm text-gold-600 font-medium">
                        {phrase.pronunciation}
                      </div>
                    </div>
                    <div className="text-center md:text-right">
                      <button
                        className="inline-flex items-center space-x-2 bg-gold-100 hover:bg-gold-200 text-gold-800 px-4 py-2 rounded-lg transition-colors duration-200 shadow-md"
                        onClick={() => speakArabic(phrase.arabic)}
                      >
                        <Volume2 className="h-4 w-4" />
                        <span className="text-sm font-medium">Listen</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Learning Tips */}
        <div className="mt-12 bg-gradient-to-r from-gold-100 via-yellow-50 to-nile-100 rounded-3xl p-12 border-2 border-gold-200 shadow-xl">
          <h2 className="font-serif text-3xl font-extrabold text-gold-700 mb-8 text-center">
            Arabic Learning Tips
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="text-center">
              <div className="bg-gold-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-8 w-8 text-gold-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Practice Daily</h3>
              <p className="text-gray-600">Use these phrases daily to build confidence and improve pronunciation.</p>
            </div>
            <div className="text-center">
              <div className="bg-nile-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Volume2 className="h-8 w-8 text-nile-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Listen Carefully</h3>
              <p className="text-gray-600">Pay attention to how locals pronounce words and try to mimic them.</p>
            </div>
            <div className="text-center">
              <div className="bg-sand-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-sand-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Use Body Language</h3>
              <p className="text-gray-600">Combine phrases with gestures to communicate more effectively.</p>
            </div>
            <div className="text-center">
              <div className="bg-gold-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-gold-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Be Patient</h3>
              <p className="text-gray-600">Don't worry about mistakes - locals appreciate your effort to speak Arabic.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocalPhrases;