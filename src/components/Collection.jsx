import React, { useState } from 'react';
import { categories, getFeaturedProducts, getProductsByCategory } from '../data/mockData';
import ProductCard from './ProductCard';

const Collection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [displayedProducts, setDisplayedProducts] = useState(getFeaturedProducts(8));

  const handleCategoryChange = (categorySlug) => {
    setActiveCategory(categorySlug);
    
    if (categorySlug === 'all') {
      setDisplayedProducts(getFeaturedProducts(8));
    } else {
      const filtered = getProductsByCategory(categorySlug);
      setDisplayedProducts(filtered.slice(0, 8));
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 playfair-black">
            Our Footwear Collection
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto inter-regular">
            Discover our handcrafted shoes made with quality materials and attention to detail.
          </p>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-slide-in-left">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.slug)}
              className={`px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 inter-semibold ${
                activeCategory === category.slug
                  ? 'bg-[#6F4D38] text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-fade-in">
          {displayedProducts.map((product, index) => (
            <div
              key={product.id}
              className="animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* View All Button */}
        {displayedProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg inter-regular">
              No products found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Collection;
