// Mock Data for OML Soles E-commerce Platform

// Product Categories
export const categories = [
  { id: "all", name: "All Shoes", slug: "all" },
  { id: "men", name: "Men", slug: "men" },
  { id: "women", name: "Women", slug: "women" },
  { id: "sneakers", name: "Sneakers", slug: "sneakers" },
  { id: "sandals", name: "Sandals", slug: "sandals" },
  { id: "office", name: "Office Shoes", slug: "office-shoes" },
  { id: "casual", name: "Casual", slug: "casual" },
];

// Products Data
export const products = [
  {
    id: 1,
    name: "Classic Oxford Shoes",
    description:
      "Hand-stitched leather oxford with comfortable sole. Perfect for office and formal occasions.",
    price: 85000,
    originalPrice: null,
    category: "men",
    gender: "men",
    image:
      "https://res.cloudinary.com/dmb5ggmvg/image/upload/v1764427835/0ea55ecb-61e6-41fc-aada-49c24ac89f5d.png",
    images: [
      "https://res.cloudinary.com/dmb5ggmvg/image/upload/v1764427815/db2efeaf-e306-4961-bf67-b9cd85784699.png",
      "https://res.cloudinary.com/dmb5ggmvg/image/upload/v1764427815/db2efeaf-e306-4961-bf67-b9cd85784699.png",
    ],
    sizes: ["40", "41", "42", "43", "44", "45"],
    colors: ["Brown", "Black"],
    inStock: true,
    featured: true,
    rating: 4.8,
    reviews: 124,
  },
  {
    id: 2,
    name: "Comfortable Sneakers",
    description:
      "Premium leather sneakers with cushioned soles for all-day comfort.",
    price: 72000,
    originalPrice: null,
    category: "sneakers",
    gender: "men",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
    ],
    sizes: ["40", "41", "42", "43", "44", "45", "46"],
    colors: ["White", "Black", "Gray"],
    inStock: true,
    featured: true,
    rating: 4.9,
    reviews: 203,
  },
  {
    id: 3,
    name: "Elegant Heels",
    description:
      "Elegant heels designed for comfort and style. Perfect for special occasions.",
    price: 95000,
    originalPrice: null,
    category: "women",
    gender: "women",
    image:
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&q=80",
    ],
    sizes: ["36", "37", "38", "39", "40", "41"],
    colors: ["Nude", "Black", "Red"],
    inStock: true,
    featured: true,
    rating: 4.7,
    reviews: 156,
  },
  {
    id: 4,
    name: "Comfort Loafers",
    description:
      "Soft leather loafers with memory foam insoles for ultimate comfort.",
    price: 68000,
    originalPrice: null,
    category: "men",
    gender: "men",
    image:
      "https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=800&q=80",
    ],
    sizes: ["40", "41", "42", "43", "44", "45"],
    colors: ["Brown", "Black", "Tan"],
    inStock: true,
    featured: true,
    rating: 4.6,
    reviews: 98,
  },
  {
    id: 5,
    name: "Beach Sandals",
    description:
      "Handmade leather sandals with ergonomic design for summer comfort.",
    price: 35000,
    originalPrice: null,
    category: "sandals",
    gender: "men",
    image:
      "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=800&q=80",
    ],
    sizes: ["40", "41", "42", "43", "44", "45"],
    colors: ["Brown", "Black", "Tan"],
    inStock: true,
    featured: true,
    rating: 4.5,
    reviews: 87,
  },
  {
    id: 6,
    name: "Running Shoes",
    description:
      "Performance running shoes with leather uppers and advanced cushioning.",
    price: 78000,
    originalPrice: null,
    category: "sneakers",
    gender: "men",
    image:
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800&q=80",
    ],
    sizes: ["40", "41", "42", "43", "44", "45", "46"],
    colors: ["Red", "Blue", "Black"],
    inStock: true,
    featured: true,
    rating: 4.8,
    reviews: 178,
  },
  {
    id: 7,
    name: "Leather Boots",
    description: "Premium leather boots crafted for durability and style.",
    price: 120000,
    originalPrice: null,
    category: "men",
    gender: "men",
    image:
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=800&q=80",
    ],
    sizes: ["40", "41", "42", "43", "44", "45"],
    colors: ["Brown", "Black"],
    inStock: true,
    featured: true,
    rating: 4.9,
    reviews: 145,
  },
  {
    id: 8,
    name: "Ballet Flats",
    description:
      "Comfortable ballet flats with soft leather that complements any outfit.",
    price: 45000,
    originalPrice: null,
    category: "casual",
    gender: "women",
    image:
      "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=800&q=80",
    ],
    sizes: ["36", "37", "38", "39", "40", "41"],
    colors: ["Pink", "Black", "Beige"],
    inStock: true,
    featured: true,
    rating: 4.6,
    reviews: 112,
  },
  {
    id: 9,
    name: "Women's Sneakers",
    description:
      "Stylish sneakers for women with premium cushioning and support.",
    price: 65000,
    originalPrice: null,
    category: "sneakers",
    gender: "women",
    image:
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80",
    ],
    sizes: ["36", "37", "38", "39", "40", "41"],
    colors: ["White", "Pink", "Gray"],
    inStock: true,
    featured: false,
    rating: 4.7,
    reviews: 134,
  },
  {
    id: 10,
    name: "Office Pumps",
    description:
      "Professional pumps perfect for the workplace with all-day comfort.",
    price: 82000,
    originalPrice: null,
    category: "office",
    gender: "women",
    image:
      "https://images.unsplash.com/photo-1596702062351-8c2c14d1fdd0?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1596702062351-8c2c14d1fdd0?w=800&q=80",
    ],
    sizes: ["36", "37", "38", "39", "40", "41"],
    colors: ["Black", "Navy", "Burgundy"],
    inStock: true,
    featured: false,
    rating: 4.8,
    reviews: 167,
  },
  {
    id: 11,
    name: "Strappy Sandals",
    description:
      "Elegant strappy sandals for warm weather and special occasions.",
    price: 55000,
    originalPrice: null,
    category: "women",
    gender: "women",
    image:
      "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?w=800&q=80",
    ],
    sizes: ["36", "37", "38", "39", "40", "41"],
    colors: ["Gold", "Silver", "Black"],
    inStock: true,
    featured: false,
    rating: 4.5,
    reviews: 89,
  },
  {
    id: 12,
    name: "Canvas Sneakers",
    description:
      "Lightweight canvas sneakers perfect for everyday casual wear.",
    price: 38000,
    originalPrice: null,
    category: "sneakers",
    gender: "men",
    image:
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&q=80",
    ],
    sizes: ["40", "41", "42", "43", "44", "45"],
    colors: ["White", "Navy", "Gray"],
    inStock: true,
    featured: false,
    rating: 4.4,
    reviews: 76,
  },
   {
    id: 13,
    name: "Beach Sandals",
    description:
      "Handmade leather sandals with ergonomic design for summer comfort.",
    price: 35000,
    originalPrice: null,
    category: "sandals",
    gender: "men",
    image:
      "https://res.cloudinary.com/dmb5ggmvg/image/upload/v1764427878/77b3bece-0202-4926-a36f-1081d3390a83.png",
    images: [
      "https://res.cloudinary.com/dmb5ggmvg/image/upload/v1764427878/77b3bece-0202-4926-a36f-1081d3390a83.png",
    ],
    sizes: ["40", "41", "42", "43", "44", "45"],
    colors: ["Brown", "Black", "Tan"],
    inStock: true,
    featured: true,
    rating: 4.5,
    reviews: 87,
  },
];

// Helper Functions
export const formatPrice = (price) => {
  return `₦${price.toLocaleString("en-NG")}`;
};

export const getProductById = (id) => {
  return products.find((product) => product.id === parseInt(id));
};

export const getProductsByCategory = (categorySlug) => {
  if (categorySlug === "all") return products;
  return products.filter((product) => product.category === categorySlug);
};

export const getProductsByGender = (gender) => {
  return products.filter((product) => product.gender === gender);
};

export const getFeaturedProducts = (limit = 8) => {
  return products.filter((product) => product.featured).slice(0, limit);
};

export const searchProducts = (query) => {
  const lowerQuery = query.toLowerCase();
  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(lowerQuery) ||
      product.description.toLowerCase().includes(lowerQuery) ||
      product.category.toLowerCase().includes(lowerQuery)
  );
};

// Homepage Sections Data
export const homepageSections = {
  hero: {
    title: "OML SOLES",
    tagline: "...the soft feel your feet needs",
    description:
      "Discover our collection of handmade footwear crafted with precision and care. Each pair is designed to provide comfort and style for every step you take.",
    ctaButtons: [
      { text: "Shop Now", link: "/products", type: "primary" },
      { text: "Contact Us", link: "/contact", type: "secondary" },
    ],
  },

  collection: {
    title: "Our Footwear Collection",
    subtitle:
      "Discover our handcrafted shoes made with quality materials and attention to detail.",
    categories: categories,
  },

  features: [
    {
      id: 1,
      icon: "✓",
      title: "Quality Materials",
      description: "Premium leather and materials sourced for durability",
    },
    {
      id: 2,
      icon: "✓",
      title: "Handcrafted",
      description: "Each pair is carefully crafted by skilled artisans",
    },
    {
      id: 3,
      icon: "✓",
      title: "Comfort First",
      description: "Designed with ergonomics and comfort in mind",
    },
    {
      id: 4,
      icon: "✓",
      title: "Fast Delivery",
      description: "Quick delivery across Nigeria within 2-5 days",
    },
  ],

  testimonials: [
    {
      id: 1,
      name: "Adebayo Johnson",
      location: "Lagos",
      rating: 5,
      comment:
        "Best shoes I've ever owned! The quality is exceptional and they're so comfortable.",
      image:
        "https://ui-avatars.com/api/?name=Adebayo+Johnson&background=6F4D38&color=fff",
    },
    {
      id: 2,
      name: "Chioma Okafor",
      location: "Abuja",
      rating: 5,
      comment:
        "I love my new heels! They're stylish and I can wear them all day without discomfort.",
      image:
        "https://ui-avatars.com/api/?name=Chioma+Okafor&background=6F4D38&color=fff",
    },
    {
      id: 3,
      name: "Ibrahim Musa",
      location: "Kano",
      rating: 5,
      comment:
        "Great customer service and amazing products. Highly recommended!",
      image:
        "https://ui-avatars.com/api/?name=Ibrahim+Musa&background=6F4D38&color=fff",
    },
  ],
};

// Contact Information
export const contactInfo = {
  phone: "+234 801 234 5678",
  whatsapp: "2348012345678",
  email: "info@omlsoles.com",
  address: "123 Footwear Street, Victoria Island, Lagos, Nigeria",
  socialMedia: {
    instagram: "https://instagram.com/omlsoles",
    facebook: "https://facebook.com/omlsoles",
    twitter: "https://twitter.com/omlsoles",
  },
  businessHours: {
    weekdays: "9:00 AM - 6:00 PM",
    saturday: "10:00 AM - 4:00 PM",
    sunday: "Closed",
  },
};

export default {
  categories,
  products,
  homepageSections,
  contactInfo,
  formatPrice,
  getProductById,
  getProductsByCategory,
  getProductsByGender,
  getFeaturedProducts,
  searchProducts,
};
