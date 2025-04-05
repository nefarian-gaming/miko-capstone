import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gray-800 text-white" style={{ height: 'calc(100vh - 65px)' }}> {/* Adjust height based on header */}
      <img
        src="/images/hero-background.jpg" // Use local image path
        alt="Knife sharpening close up"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Optional overlay for better text contrast */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center z-10">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          THE BEST KNIFE<br />FOR WESTERN FOOD.
        </h1>
        <p className="text-2xl md:text-4xl font-light mb-8">SINCE 2013.</p>
        <button className="btn btn-accent inline-flex items-center">
          SHOP NOW
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Hero;