import React from 'react';
import { Link } from 'react-router-dom';
import { contactInfo } from '../data/mockData';
import { FaInstagram, FaFacebook, FaTwitter, FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-[#34170D] to-[#6F4D38] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="https://res.cloudinary.com/dmb5ggmvg/image/upload/v1762986195/Oml-soles-LOGO_wd520s.jpg"
                alt="OML Soles Logo"
                className="h-12 w-12 rounded-lg"
              />
              <div>
                <h3 className="text-2xl font-bold playfair-black">OML SOLES</h3>
                <p className="text-xs text-gray-300 noto-sans-light-300">The Brand for Your Feet</p>
              </div>
            </div>
            <p className="text-sm text-gray-300 mb-4 inter-regular">
              Handcrafted Nigerian footwear combining traditional craftsmanship with modern style.
            </p>
            
            {/* Social Media */}
            <div className="flex gap-3">
              <a
                href={contactInfo.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href={contactInfo.socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                aria-label="Facebook"
              >
                <FaFacebook className="w-5 h-5" />
              </a>
              <a
                href={contactInfo.socialMedia.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                aria-label="Twitter"
              >
                <FaTwitter className="w-5 h-5" />
              </a>
              <a
                href={`https://wa.me/${contactInfo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-green-500 hover:bg-green-600 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 playfair-bold">Quick Links</h4>
            <ul className="space-y-2 inter-regular">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-bold mb-4 playfair-bold">Customer Service</h4>
            <ul className="space-y-2 inter-regular">
              <li>
                <Link to="/shipping" className="text-gray-300 hover:text-white transition-colors">
                  Shipping & Delivery
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-gray-300 hover:text-white transition-colors">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-white transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4 playfair-bold">Contact Us</h4>
            <ul className="space-y-3 inter-regular">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="w-5 h-5 mt-1 flex-shrink-0 text-[#EAD1A9]" />
                <span className="text-sm text-gray-300">
                  {contactInfo.address}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="w-5 h-5 flex-shrink-0 text-[#EAD1A9]" />
                <a href={`tel:${contactInfo.phone}`} className="text-sm text-gray-300 hover:text-white transition-colors">
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="w-5 h-5 flex-shrink-0 text-[#EAD1A9]" />
                <a href={`mailto:${contactInfo.email}`} className="text-sm text-gray-300 hover:text-white transition-colors">
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-300 inter-regular text-center md:text-left">
              © {currentYear} OML Soles. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-300 inter-regular">
              <span>Designed and Developed by</span>
              <a
                href="https://wayles-portfolio.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#EAD1A9] hover:text-white font-semibold transition-colors inter-semibold"
              >
                WAYLES
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
