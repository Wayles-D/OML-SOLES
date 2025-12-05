import React from 'react';
import { homepageSections } from '../data/mockData';
import { HiCheckCircle, HiSparkles, HiHeart, HiTruck } from 'react-icons/hi2';

const Features = () => {
  const icons = [
    <HiCheckCircle className="w-8 h-8" />,
    <HiSparkles className="w-8 h-8" />,
    <HiHeart className="w-8 h-8" />,
    <HiTruck className="w-8 h-8" />
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-[#F5F5DC] to-[#EAD1A9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {homepageSections.features.map((feature, index) => (
            <div
              key={feature.id}
              className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-[#6F4D38] to-[#A07856] rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                {icons[index]}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-2 playfair-bold">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 inter-regular">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
