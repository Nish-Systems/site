import React from 'react';

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] font-mono animate-in fade-in zoom-in duration-700">
      {/* The Centerpiece Layout */}
      <div className="flex items-center gap-4 md:gap-8 text-4xl md:text-6xl font-bold tracking-tighter text-gray-900 dark:text-white transition-colors duration-300">
        
        {/* Left Word */}
        <span>NICHE</span>

        {/* Center Logo Placeholder */}
        <div className="w-16 h-16 md:w-24 md:h-24 bg-black dark:bg-white text-white dark:text-black flex items-center justify-center rounded-sm">
           {/* Replace this SVG with your actual logo file */}
           <img src="logo_grey.svg" />
        </div>

        {/* Right Word */}
        <span>SYSTEMS</span>
      </div>

      {/* Tagline */}
      <p className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-400 tracking-wide uppercase">
        Software Engineering Consultants
      </p>
    </div>
  );
}