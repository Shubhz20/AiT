import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, MapPin } from 'lucide-react';

// Import local images
import img1 from '../images/WhatsApp Image 2025-07-04 at 01.00.59.jpeg';
import img2 from '../images/WhatsApp Image 2025-07-04 at 21.02.15.jpeg';
import img3 from '../images/WhatsApp Image 2025-07-04 at 21.02.16.jpeg';
import img4 from '../images/WhatsApp Image 2025-07-04 at 21.03.03.jpeg';
import img5 from '../images/WhatsApp Image 2025-07-04 at 21.03.04.jpeg';
import img6 from '../images/WhatsApp Image 2025-07-05 at 22.19.16.jpeg';
import img7 from '../images/WhatsApp Image 2025-07-06 at 18.24.46.jpeg';

const galleryImages = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
];

function Flowing3DSlideshow() {
  const [index, setIndex] = useState(0);
  const total = galleryImages.length;
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % total);
    }, 2500);
    return () => clearInterval(interval);
  }, [total]);

  // Show 5 images at a time for 3D effect
  
  const getSlide = (i) => {
    const pos = ((i - index + total) % total);
    // 0=center, 1=right, 2=far right, total-1=left, total-2=far left
    if (pos === 0) return { z: 2, x: 0, scale: 1, opacity: 1, rotateY: 0, zIndex: 5 };
    if (pos === 1) return { z: 1, x: 120, scale: 0.85, opacity: 0.7, rotateY: -30, zIndex: 4 };
    if (pos === 2) return { z: 0, x: 220, scale: 0.7, opacity: 0.4, rotateY: -50, zIndex: 3 };
    if (pos === total - 1) return { z: 1, x: -120, scale: 0.85, opacity: 0.7, rotateY: 30, zIndex: 4 };
    if (pos === total - 2) return { z: 0, x: -220, scale: 0.7, opacity: 0.4, rotateY: 50, zIndex: 3 };
    return { z: -1, x: 0, scale: 0.5, opacity: 0, rotateY: 0, zIndex: 1 };
  };

  return (
    <div className="w-full flex justify-center my-12">
      <div className="relative w-full max-w-5xl h-[32rem] flex items-center justify-center perspective-[1600px]">
        {galleryImages.map((img, i) => {
          const slide = getSlide(i);
          return (
            <img
              key={i}
              src={img}
              alt={`Gallery ${i + 1}`}
              style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                width: '70%',
                height: '90%',
                objectFit: 'cover',
                borderRadius: '2rem',
                boxShadow: '0 12px 48px rgba(0,0,0,0.22)',
                transform: `translate(-50%, -50%) translateX(${slide.x * 1.4}px) scale(${slide.scale * 1.08}) rotateY(${slide.rotateY}deg)`,
                zIndex: slide.zIndex,
                opacity: slide.opacity,
                transition: 'all 1s cubic-bezier(.77,0,.18,1)',
                filter: slide.z === 2 ? 'brightness(1.08)' : 'brightness(0.82)',
                pointerEvents: slide.opacity > 0.5 ? 'auto' : 'none',
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

const Home = () => {
  const [showTitle, setShowTitle] = useState(true);
  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      if (window.scrollY < 40) {
        setShowTitle(true);
        lastScrollY = window.scrollY;
        return;
      }
      if (window.scrollY > lastScrollY) {
        setShowTitle(false); // scrolling down
      } else {
        setShowTitle(true); // scrolling up
      }
      lastScrollY = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className="relative">
      {/* Hero Section with Background Video */}
      <div className="relative h-screen overflow-hidden">
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://videos.pexels.com/video-files/3571264/3571264-uhd_2732_1440_25fps.mp4"
            type="video/mp4"
          />
        </video>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        
        {/* Content Overlay */}
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
          <div 
            className="max-w-4xl mx-auto animate-fade-in"
            style={{
              opacity: showTitle ? 1 : 0,
              transition: 'opacity 0.5s cubic-bezier(.77,0,.18,1)'
            }}
          >
            {showTitle && (
              <>
                <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight drop-shadow-[0_0_24px_rgba(255,215,0,0.8)]">
                  AIESEC in Tanta
                  <span className="block text-gold-400 text-lg md:text-xl font-medium mt-2 drop-shadow-[0_0_16px_rgba(255,215,0,0.7)]">Empowering Youth Leadership</span>
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
                  Join a global movement of young leaders making a positive impact in Tanta and beyond.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/accommodation"
                    className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
                  >
                    View Accommodations
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      {/* Rotating Gallery */}
      <Flowing3DSlideshow />

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-gold-600 to-gold-700 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Begin Your Egyptian Adventure?
          </h2>
          <p className="text-xl text-gold-100 mb-8">
            Start exploring our comprehensive travel sections to plan your perfect trip
          </p>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link
                to="/necessities"
                className="bg-white hover:bg-gray-100 text-gold-700 px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
                onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
              >
                Basic Necessities
              </Link>
              <Link
                to="/accommodation"
                className="bg-white hover:bg-gray-100 text-gold-700 px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
                onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
              >
                Accommodation
              </Link>
              <Link
                to="/local-phrases"
                className="bg-white hover:bg-gray-100 text-gold-700 px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
                onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
              >
                Local Phrases
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;