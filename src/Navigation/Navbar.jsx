import React from "react";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { PiMagnifyingGlassDuotone } from "react-icons/pi";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { CgMenuRight } from "react-icons/cg";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navigationItems = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/Products" },
    { name: "About", path: "/About" },
    { name: "Contact", path: "/Contact" },
  ];

  return (
    <header className="backdrop-blur-xl bg-white/0 md:shadow-md md:border-b md:border-[#34170D] fixed top-0 left-0 w-full pt-2 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between ">
          {/* Logo */}
          <Link to="/">
            <div className="flex items-center space-x-1">
              <img
                src="https://res.cloudinary.com/dmb5ggmvg/image/upload/v1762986195/Oml-soles-LOGO_wd520s.jpg"
                alt="Brand-logo"
                className="h-16 w-16 rounded-sm"
              />
              <div className="gap-y-0">
              <h1 className="relative text-2xl poppins-black text-[#6F4D38] hidden lg:block playfair-black">OML SOLES</h1>
              <p className="relative text-[8px] hidden lg:block text-right text-[#6F4D38]">...the soft feel your feet needs</p>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 justify-items-center">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="relative text-[#A07856] font-bold after:content-[''] after:block after:h-0.5 after:bg-[#6F4D38] after:scale-x-0 after:origin-center after:transition-transform after:duration-700 hover:after:scale-x-100"
              >
                {item.name}
              </Link>
            ))}
            <div className="flex space-x-2 focus-within:border-[#A07856] focus-within:border-2 p-1 bg-[#CBB799] rounded-xl">
            <PiMagnifyingGlassDuotone />
              <input type="search" name="search" id="search" placeholder="Search for Shoes..." className="text-xs outline-none"/>
            </div>
            <AiOutlineWhatsApp className="text-green-400 w-6 h-6"/>
            <div className="relative">
            <HiMiniShoppingCart className="text-[#6F4D38] w-6 h-6"/>
            <p className="text-[8px] absolute -top-2 -right-2 bg-red-500 text-white px-1.5 py-px rounded-full">5</p>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-black p-2"
            >
              {isMenuOpen ? <GrClose size={24} className="text-[#6F4D38]"/> : <CgMenuRight size={24} className="text-[#6F4D38]"/>}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block px-3 py-2 text-white hover:text-white/60 font-medium hover:bg-[#6F4D38]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
