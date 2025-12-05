import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductById, formatPrice } from '../data/mockData';
import { HiMinus, HiPlus, HiShoppingBag, HiArrowLeft, HiTruck, HiShieldCheck } from 'react-icons/hi2';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    const productData = getProductById(id);
    if (productData) {
      setProduct(productData);
      setSelectedImage(0);
    }
  }, [id]);

  const handleQuantityChange = (action) => {
    if (action === 'increment') {
      setQuantity(prev => prev + 1);
    } else if (action === 'decrement' && quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }

    // TODO: Add to cart logic (will be implemented with backend)
    console.log({
      product: product.id,
      size: selectedSize,
      quantity: quantity
    });

    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 playfair-black">Product not found</h2>
          <button
            onClick={() => navigate('/')}
            className="text-[#6F4D38] hover:text-[#5a3d2a] flex items-center gap-2 mx-auto font-semibold transition-colors"
          >
            <HiArrowLeft className="w-5 h-5" />
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const allImages = product.images && product.images.length > 0 ? product.images : [product.image];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Header Section */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-600 hover:text-[#6F4D38] transition-all group"
          >
            <HiArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-semibold">Continue Shopping</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column - Image Gallery (Sticky) */}
          <div className="lg:col-span-6">
            <div className="lg:sticky lg:top-8 space-y-3">
              {/* Main Image */}
              <div className="relative aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50 shadow-lg group">
                <img
                  src={allImages[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-[#6F4D38] text-white px-4 py-2 rounded-full shadow-lg">
                  <span className="text-xs font-bold capitalize tracking-wide">
                    {product.category}
                  </span>
                </div>
              </div>

              {/* Thumbnail Images */}
              {allImages.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                  {allImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`aspect-square rounded-lg overflow-hidden border-2 transition-all shadow-sm hover:shadow-md ${
                        selectedImage === index
                          ? 'border-[#6F4D38] ring-2 ring-[#6F4D38] ring-offset-1 scale-105'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${product.name} view ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Product Information */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Product Title */}
            <div className="space-y-2">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight playfair-black">
                {product.name}
              </h1>
              <p className="text-base text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Price Section */}
            <div className="bg-gradient-to-r from-[#6F4D38]/5 to-[#6F4D38]/10 rounded-xl p-5 border border-[#6F4D38]/20">
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-bold text-[#6F4D38]">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-400 line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
              </div>
            </div>

            {/* Size Selection */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-gray-900">
                  Select Size
                </h3>
                {selectedSize && (
                  <span className="text-sm text-[#6F4D38] font-semibold">
                    Size {selectedSize} selected
                  </span>
                )}
              </div>
              <div className="grid grid-cols-6 gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`aspect-square rounded-lg border-2 font-semibold text-base transition-all ${
                      selectedSize === size
                        ? 'border-[#6F4D38] bg-[#6F4D38] text-white shadow-md scale-105'
                        : 'border-gray-300 text-gray-700 hover:border-[#6F4D38] hover:scale-105 bg-white'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-gray-900">Quantity</h3>
              <div className="flex items-center gap-3">
                <div className="flex items-center bg-white border-2 border-gray-300 rounded-lg overflow-hidden shadow-sm">
                  <button
                    onClick={() => handleQuantityChange('decrement')}
                    className="p-3 hover:bg-gray-50 transition-colors disabled:opacity-50"
                    disabled={quantity <= 1}
                  >
                    <HiMinus className="w-4 h-4 text-gray-700" />
                  </button>
                  <span className="px-6 py-3 font-bold text-lg text-gray-900 min-w-[70px] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => handleQuantityChange('increment')}
                    className="p-3 hover:bg-gray-50 transition-colors"
                  >
                    <HiPlus className="w-4 h-4 text-gray-700" />
                  </button>
                </div>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className={`w-full py-4 rounded-xl font-bold text-base flex items-center justify-center gap-3 transition-all shadow-lg ${
                addedToCart
                  ? 'bg-green-600 text-white scale-105'
                  : product.inStock
                  ? 'bg-[#6F4D38] text-white hover:bg-[#5a3d2a] hover:scale-105 hover:shadow-xl'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              <HiShoppingBag className="w-6 h-6" />
              {addedToCart ? 'Added to Cart!' : 'Add to Cart'}
            </button>

            {/* Service Features */}
            <div className="grid grid-cols-1 gap-3 pt-2">
              <div className="flex items-start gap-3 p-3 bg-white rounded-lg border border-gray-200 shadow-sm">
                <div className="w-10 h-10 bg-[#6F4D38]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <HiTruck className="w-5 h-5 text-[#6F4D38]" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-0.5 text-sm">Fast Delivery</h4>
                  <p className="text-xs text-gray-600">
                    Delivery within 2-5 business days across Nigeria
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 bg-white rounded-lg border border-gray-200 shadow-sm">
                <div className="w-10 h-10 bg-[#6F4D38]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <HiShieldCheck className="w-5 h-5 text-[#6F4D38]" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-0.5 text-sm">Quality Guarantee</h4>
                  <p className="text-xs text-gray-600">
                    Handcrafted with premium materials and attention to detail
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
