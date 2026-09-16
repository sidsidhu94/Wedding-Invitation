import React from 'react';

/**
 * GoldBorder Component
 * Renders an authentic ornate traditional Indian frame with gold corner filigrees
 */
const GoldBorder = ({ children, className = "" }) => {
  return (
    <div className={`relative p-5 md:p-10 rounded-lg border-2 border-[#d4af37]/80 bg-[#fdfbf7] text-[#1c1917] shadow-2xl overflow-hidden ${className}`}>
      {/* Outer Fine Gold Line */}
      <div className="absolute inset-2 border border-[#d4af37]/40 pointer-events-none rounded" />
      {/* Inner Decorative Dashed Border */}
      <div className="absolute inset-3 border border-dashed border-[#b45309]/30 pointer-events-none rounded" />

      {/* Top Left Corner Filigree */}
      <svg className="absolute top-1 left-1 w-12 h-12 md:w-16 md:h-16 text-[#d4af37] pointer-events-none" viewBox="0 0 100 100" fill="currentColor">
        <path d="M0,0 L35,0 C35,15 25,25 0,35 Z" opacity="0.15" />
        <path d="M5,5 L45,5 C40,20 20,40 5,45 Z" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M10,10 L30,10 C25,18 18,25 10,30 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="15" cy="15" r="4" fill="currentColor" />
        <path d="M5,45 C20,45 40,25 45,5" fill="none" stroke="#78350f" strokeWidth="1" />
        <circle cx="45" cy="5" r="2.5" fill="#78350f" />
        <circle cx="5" cy="45" r="2.5" fill="#78350f" />
      </svg>

      {/* Top Right Corner Filigree */}
      <svg className="absolute top-1 right-1 w-12 h-12 md:w-16 md:h-16 text-[#d4af37] pointer-events-none transform rotate-90" viewBox="0 0 100 100" fill="currentColor">
        <path d="M0,0 L35,0 C35,15 25,25 0,35 Z" opacity="0.15" />
        <path d="M5,5 L45,5 C40,20 20,40 5,45 Z" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M10,10 L30,10 C25,18 18,25 10,30 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="15" cy="15" r="4" fill="currentColor" />
        <path d="M5,45 C20,45 40,25 45,5" fill="none" stroke="#78350f" strokeWidth="1" />
        <circle cx="45" cy="5" r="2.5" fill="#78350f" />
        <circle cx="5" cy="45" r="2.5" fill="#78350f" />
      </svg>

      {/* Bottom Left Corner Filigree */}
      <svg className="absolute bottom-1 left-1 w-12 h-12 md:w-16 md:h-16 text-[#d4af37] pointer-events-none transform -rotate-90" viewBox="0 0 100 100" fill="currentColor">
        <path d="M0,0 L35,0 C35,15 25,25 0,35 Z" opacity="0.15" />
        <path d="M5,5 L45,5 C40,20 20,40 5,45 Z" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M10,10 L30,10 C25,18 18,25 10,30 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="15" cy="15" r="4" fill="currentColor" />
        <path d="M5,45 C20,45 40,25 45,5" fill="none" stroke="#78350f" strokeWidth="1" />
        <circle cx="45" cy="5" r="2.5" fill="#78350f" />
        <circle cx="5" cy="45" r="2.5" fill="#78350f" />
      </svg>

      {/* Bottom Right Corner Filigree */}
      <svg className="absolute bottom-1 right-1 w-12 h-12 md:w-16 md:h-16 text-[#d4af37] pointer-events-none transform rotate-180" viewBox="0 0 100 100" fill="currentColor">
        <path d="M0,0 L35,0 C35,15 25,25 0,35 Z" opacity="0.15" />
        <path d="M5,5 L45,5 C40,20 20,40 5,45 Z" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M10,10 L30,10 C25,18 18,25 10,30 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="15" cy="15" r="4" fill="currentColor" />
        <path d="M5,45 C20,45 40,25 45,5" fill="none" stroke="#78350f" strokeWidth="1" />
        <circle cx="45" cy="5" r="2.5" fill="#78350f" />
        <circle cx="5" cy="45" r="2.5" fill="#78350f" />
      </svg>

      {/* Main Content inside frame */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default GoldBorder;
