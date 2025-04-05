import React from 'react';
import heroImage from '../assets/Best-Delicacies-in-Cebu-lechon-2.png';

const Hero: React.FC = () => {
  return (
    <div
      className="relative text-white"
      style={{
        height: '60vh',
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center z-10">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          THE BEST KNIFE<br />FOR WESTERN FOOD.
        </h1>
        <p className="text-base md:text-lg font-light mb-8">SINCE 2019.</p>
        <button
          className="bg-accent text-white px-6 py-3 font-medium text-sm tracking-wide uppercase flex items-center"
          style={{ backgroundColor: '#F59E0B' }}
        >
          SHOP NOW
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Hero;