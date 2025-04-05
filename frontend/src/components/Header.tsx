import React from 'react';
import { FiSearch, FiUser, FiShoppingBag } from 'react-icons/fi';

const Header: React.FC = () => {
  return (
    <header className="bg-white py-4 border-b border-gray-200">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-900 tracking-tighter">TOG <span className="font-light">トグ</span></div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
          <a href="#" className="hover:text-gray-900">Knives</a>
          <a href="#" className="hover:text-gray-900">Sets</a>
          <a href="#" className="hover:text-gray-900">Storage</a>
          <a href="#" className="hover:text-gray-900">Sharpening</a>
          <a href="#" className="hover:text-gray-900">Boards</a>
          <a href="#" className="hover:text-gray-900">Higonokami</a>
          <a href="#" className="hover:text-gray-900">Accessories</a>
        </nav>

        {/* Icons & Links */}
        <div className="flex items-center space-x-4">
          <a href="#" className="hidden lg:inline text-xs font-medium text-gray-500 hover:text-gray-900 uppercase tracking-wider">About</a>
          <a href="#" className="hidden lg:inline text-xs font-medium text-gray-500 hover:text-gray-900 uppercase tracking-wider">News</a>
          <button className="text-gray-500 hover:text-gray-900">
            <FiSearch size={18} />
          </button>
          <button className="text-gray-500 hover:text-gray-900">
            <FiUser size={18} />
          </button>
          <button className="text-gray-500 hover:text-gray-900">
            <FiShoppingBag size={18} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;