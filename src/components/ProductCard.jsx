import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { formatPrice } from '../data/mockData';
import { HiHeart, HiOutlineHeart } from 'react-icons/hi2';

const ProductCard = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group">
      {/* Product Image */}
      <div className="relative overflow-hidden aspect-square">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </Link>
        
        {/* Wishlist Button */}
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-3 right-3 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-all z-10"
          aria-label="Add to wishlist"
        >
          {isFavorite ? (
            <HiHeart className="w-6 h-6 text-red-500" />
          ) : (
            <HiOutlineHeart className="w-6 h-6 text-gray-600" />
          )}
        </button>

        {/* Category Badge */}
        <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
          <span className="text-xs font-semibold text-[#6F4D38] capitalize inter-semibold">
            {product.category}
          </span>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-[#6F4D38] transition-colors line-clamp-1 inter-bold">
            {product.name}
          </h3>
        </Link>
        
        <p className="text-sm text-gray-600 mb-3 line-clamp-2 inter-regular">
          {product.description}
        </p>

        {/* Price */}
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-[#6F4D38] inter-bold">
            {formatPrice(product.price)}
          </span>
          
          {/* Rating */}
          <div className="flex items-center gap-1">
            <span className="text-yellow-400">★</span>
            <span className="text-sm font-semibold text-gray-700 inter-semibold">
              {product.rating}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
