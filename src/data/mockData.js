// Mock Data for OML Soles E-commerce Platform

// Product Categories
export const categories = [
  { id: "all", name: "All Shoes", slug: "all" },
  { id: "men", name: "Men", slug: "men" },
  { id: "women", name: "Women", slug: "women" },
  { id: "sandals", name: "Sandals", slug: "sandals" },
  { id: "slippers", name: "Slippers", slug: "slippers" },
  { id: "slides", name: "Slides", slug: "slides" },
];

// Products Data
export const products = [
  {
    id: 16,
    name: "Chunky Lace-up Shoe",
    description:
      "Hand-stitched leather lace-up shoes with a chunky sole for added comfort and style. ",
    price: 46000,
    originalPrice: null,
    category: "men",
    gender: "men",
    image:
      "https://res.cloudinary.com/dmb5ggmvg/image/upload/v1764427835/0ea55ecb-61e6-41fc-aada-49c24ac89f5d.png",
    images: [
      "https://res.cloudinary.com/dmb5ggmvg/image/upload/v1764427835/0ea55ecb-61e6-41fc-aada-49c24ac89f5d.png",
      "https://res.cloudinary.com/dmb5ggmvg/image/upload/v1764427815/db2efeaf-e306-4961-bf67-b9cd85784699.png",
    ],
    sizes: ["40", "41", "42", "43", "44", "45"],
    inStock: true,
    featured: true
  },
   {
    id: 15,
    name: "OML Coverhead Slide",
    description:
      "OML Coverhead Slide is a premium leather slide with a flat sole for added comfort and style.",
    price: 26500,
    originalPrice: null,
    category: "slides",
    gender: "men",
    image:
      "https://res.cloudinary.com/dmb5ggmvg/image/upload/v1764969195/073e9115-2bb1-4fb6-b122-dfa02765bebd.png",
    images: [
      "https://res.cloudinary.com/dmb5ggmvg/image/upload/v1764969195/073e9115-2bb1-4fb6-b122-dfa02765bebd.png",
      "https://res.cloudinary.com/dmb5ggmvg/image/upload/v1764969378/5040beeb-a757-42ff-b1a9-c045c0b815d7.png",
    ],
    sizes: ["40", "41", "42", "43", "44", "45", "46"],
    inStock: true,
    featured: true
  },
  {
    id: 14,
    name: "Skin Leather Sandal",
    description:
      "OML Skin Leather Sandal is a premium leather sandal with a flat  sole for added comfort and style. ",
    price: 28000,
    originalPrice: null,
    category: "sandals",
    gender: "men",
    image:
      "https://res.cloudinary.com/dmb5ggmvg/image/upload/v1764428248/ec876db4-359b-4716-89fc-dc80410edb8d.png",
    images: [
      "https://res.cloudinary.com/dmb5ggmvg/image/upload/v1764428248/ec876db4-359b-4716-89fc-dc80410edb8d.png",
      "https://res.cloudinary.com/dmb5ggmvg/image/upload/v1764428248/ec876db4-359b-4716-89fc-dc80410edb8d.png",
    ],
    sizes: ["40", "41", "42", "43", "44", "45"],
    inStock: true,
    featured: true
  },
  {
    id: 13,
    name: "OML Hermes Slippers",
    description:
      "Well made leather slippers with a flat sole for added comfort and style. ",
    price: 28000,
    originalPrice: null,
    category: "slippers",
    gender: "men",
    image:
      "https://res.cloudinary.com/dmb5ggmvg/image/upload/v1764428156/8cf43c71-122f-499c-908e-5c6cc20ca61e.png",
    images: [
      "https://res.cloudinary.com/dmb5ggmvg/image/upload/v1764428248/ec876db4-359b-4716-89fc-dc80410edb8d.png",
      "https://res.cloudinary.com/dmb5ggmvg/image/upload/v1764428248/ec876db4-359b-4716-89fc-dc80410edb8d.png",
    ],
    sizes: ["40", "41", "42", "43", "44", "45"],
    inStock: true,
    featured: true
  },
  {
    id: 12,
    name: "OML X Slide",
    description:
      "Premium leather sneakers with cushioned soles for all-day comfort.",
    price: 20000,
    originalPrice: null,
    category: "slides",
    gender: "men",
    image:
      "https://res.cloudinary.com/dmb5ggmvg/image/upload/v1764428376/adcf9919-23a4-4d0f-b04a-32bd8c94e417.png",
    images: [
      "https://res.cloudinary.com/dmb5ggmvg/image/upload/v1764428393/502109ab-ea3d-4b29-a4be-66cf8f2beef7.png",
      "https://res.cloudinary.com/dmb5ggmvg/image/upload/v1764428393/502109ab-ea3d-4b29-a4be-66cf8f2beef7.png",
    ],
    sizes: ["40", "41", "42", "43", "44", "45", "46"],
    inStock: true,
    featured: true
  },
  {
    id: 11,
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
    inStock: true,
    featured: true
  },
  {
    id: 10,
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
    inStock: true,
    featured: true
  },
  {
    id: 9,
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
    inStock: true,
    featured: true
  },
  {
    id: 8,
    name: "Suede CrissXCross Slide",
    description:
      "Performance running shoes with leather uppers and advanced cushioning.",
    price: 78000,
    originalPrice: null,
    category: "slides",
    gender: "men",
    image:
      "https://res.cloudinary.com/dmb5ggmvg/image/upload/v1764968873/ab7bb236-93cd-4780-9224-54bb5f69da60.png",
    images: [
      "https://res.cloudinary.com/dmb5ggmvg/image/upload/v1764968873/ab7bb236-93cd-4780-9224-54bb5f69da60.png",
    ],
    sizes: ["40", "41", "42", "43", "44", "45", "46"],
    inStock: true,
    featured: true
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
    inStock: true,
    featured: true
  },
  {
    id: 6,
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
    inStock: true,
    featured: true
  },
  {
    id: 5,
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
    inStock: true,
    featured: false
  },
  {
    id: 4,
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
    inStock: true,
    featured: false
  },
  {
    id: 3,
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
    inStock: true,
    featured: false
  },
  {
    id: 2,
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
    inStock: true,
    featured: false
  },
   {
    id: 1,
    name: "Double Strap Leather Sandal",
    description:
      "Handmade leather sandals with ergonomic design for summer comfort.",
    price: 24500,
    originalPrice: null,
    category: "sandals",
    gender: "men",
    image:
      "https://res.cloudinary.com/dmb5ggmvg/image/upload/v1764427878/77b3bece-0202-4926-a36f-1081d3390a83.png",
    images: [
      "https://res.cloudinary.com/dmb5ggmvg/image/upload/v1764427878/77b3bece-0202-4926-a36f-1081d3390a83.png",
    ],
    sizes: ["40", "41", "42", "43", "44", "45"],
    inStock: true,
    featured: true
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
