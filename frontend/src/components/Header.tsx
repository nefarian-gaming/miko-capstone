import React, { useState } from 'react';
import { FiSearch, FiUser, FiShoppingBag, FiMenu, FiX } from 'react-icons/fi';

interface HeaderProps {
  cartItemCount?: number;
  toggleCart?: () => void;
}

const Header: React.FC<HeaderProps> = ({ cartItemCount = 0, toggleCart = () => {} }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full shadow-sm">
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-[#F26522] to-[#ff7e42] text-white text-xs py-2 px-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">30 DAY HOPE TRIAL. FREE SHIPPING OVER £150.</div>
          <div className="text-center my-1 md:my-0">PAY IN 3 INSTALLMENTS @ 0% WITH <span className="font-semibold">KLARNA</span></div>
          <div className="cursor-pointer flex items-center hover:opacity-80 transition-opacity">CHF ▼</div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white py-5 backdrop-blur-sm bg-white/95">
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700 hover:text-[#F26522] transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>

          {/* Logo */}
          <div className="text-3xl font-bold text-gray-900 tracking-tighter flex-shrink-0">
            TOG <span className="font-light text-[#F26522]">トグ</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-10 text-sm font-medium text-gray-700 uppercase tracking-wider">
            <a href="#" className="hover:text-[#F26522] py-1 relative group">
              Knives
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#F26522] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
            <a href="#" className="hover:text-[#F26522] py-1 relative group">
              Sets
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#F26522] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
            <a href="#" className="hover:text-[#F26522] py-1 relative group">
              Storage
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#F26522] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
            <a href="#" className="hover:text-[#F26522] py-1 relative group">
              Sharpening
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#F26522] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
            <a href="#" className="hover:text-[#F26522] py-1 relative group">
              Boards
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#F26522] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
            <a href="#" className="hover:text-[#F26522] py-1 relative group">
              Higonokami
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#F26522] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
            <a href="#" className="hover:text-[#F26522] py-1 relative group">
              Accessories
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#F26522] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
          </nav>

          {/* Icons & Links */}
          <div className="flex items-center space-x-8">
            <a href="#" className="hidden lg:inline text-sm font-medium text-gray-700 hover:text-[#F26522] uppercase tracking-wider transition-colors relative group">
              About
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#F26522] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
            <a href="#" className="hidden lg:inline text-sm font-medium text-gray-700 hover:text-[#F26522] uppercase tracking-wider transition-colors relative group">
              News
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#F26522] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
            <button className="text-gray-700 hover:text-[#F26522] p-1 transition-colors">
              <FiSearch size={20} />
            </button>
            <button className="text-gray-700 hover:text-[#F26522] p-1 transition-colors">
              <FiUser size={20} />
            </button>
            <button
              className="text-gray-700 hover:text-[#F26522] relative p-1 transition-colors"
              onClick={toggleCart}
            >
              <FiShoppingBag size={20} />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#F26522] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center shadow-md transform transition-transform hover:scale-110">
                  {cartItemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`lg:hidden bg-white border-t border-gray-200 absolute w-full transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="container mx-auto px-4 py-3">
          <nav className="flex flex-col space-y-3 text-sm font-medium text-gray-700 uppercase">
            <a href="#" className="hover:text-[#F26522] py-2 border-b border-gray-100 transition-colors">Knives</a>
            <a href="#" className="hover:text-[#F26522] py-2 border-b border-gray-100 transition-colors">Sets</a>
            <a href="#" className="hover:text-[#F26522] py-2 border-b border-gray-100 transition-colors">Storage</a>
            <a href="#" className="hover:text-[#F26522] py-2 border-b border-gray-100 transition-colors">Sharpening</a>
            <a href="#" className="hover:text-[#F26522] py-2 border-b border-gray-100 transition-colors">Boards</a>
            <a href="#" className="hover:text-[#F26522] py-2 border-b border-gray-100 transition-colors">Higonokami</a>
            <a href="#" className="hover:text-[#F26522] py-2 border-b border-gray-100 transition-colors">Accessories</a>
            <a href="#" className="hover:text-[#F26522] py-2 border-b border-gray-100 transition-colors">About</a>
            <a href="#" className="hover:text-[#F26522] py-2 transition-colors">News</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;