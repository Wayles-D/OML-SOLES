import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-[url('https://res.cloudinary.com/dmb5ggmvg/image/upload/v1753045322/Oml_hero_img_qfjpdy.avif')]">
      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Brand Name */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 playfair-black tracking-wider animate-fade-in">
            OML SOLES
          </h1>
          
          {/* Tagline */}
          <p className="text-xl sm:text-2xl lg:text-3xl text-[#EAD1A9] mb-8 noto-sans-light-300 italic">
            ...the soft feel your feet needs
          </p>
          
          {/* Description */}
          <p className="text-base sm:text-lg lg:text-xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed inter-regular">
            Discover our collection of handmade footwear crafted with precision and care. Each pair is designed to provide comfort and style for every step you take.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
            <Link 
              to="/products" 
              className="text-lg px-10 py-2 rounded-3xl bg-[#8B4D1A] hover:border-white hover:border-2 text-white hover:text-white transition-all duration-300 inter-semibold"
            >
              Shop Now
            </Link>
            
            <Link 
              to="/contact" 
              className="text-lg px-10 py-2 rounded-3xl bg-white/10 backdrop-blur-sm hover:border-white hover:border-2  text-white hover:bg-[#6F4D38] transition-all duration-300 inter-semibold"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;