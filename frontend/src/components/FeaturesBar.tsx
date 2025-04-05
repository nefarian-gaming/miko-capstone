import React from 'react';
import { FiAward, FiHome, FiGlobe, FiCreditCard } from 'react-icons/fi';

const FeaturesBar: React.FC = () => {
  return (
    <div className="bg-white py-6 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-xs text-gray-500 uppercase tracking-wider">
          <div className="flex flex-col items-center space-y-1">
            <FiAward size={20} className="mb-1 text-gray-400"/>
            <span>Lifetime Guarantee</span>
          </div>
          <div className="flex flex-col items-center space-y-1">
            <FiHome size={20} className="mb-1 text-gray-400"/>
            <span>30 Day Home Trial</span>
          </div>
          <div className="flex flex-col items-center space-y-1">
            <FiGlobe size={20} className="mb-1 text-gray-400"/>
            <span>Worldwide Delivery</span>
          </div>
          <div className="flex flex-col items-center space-y-1">
            <FiCreditCard size={20} className="mb-1 text-gray-400"/>
            <span>Pay in 3 Instalments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesBar;