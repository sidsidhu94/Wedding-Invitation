import React from 'react';

/**
 * PeacockFeather Component
 * Authentic South Indian Peacock Feather SVG illustration
 */
const PeacockFeather = ({ className = "w-16 h-24", flipped = false }) => {
  return (
    <div className={`inline-block ${flipped ? 'transform -scale-x-100' : ''} ${className}`}>
      <svg viewBox="0 0 120 180" className="w-full h-full filter drop-shadow-[0_4px_8px_rgba(0,95,115,0.3)]">
        <defs>
          <linearGradient id="stemGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#d4af37" />
            <stop offset="50%" stopColor="#ca8a04" />
            <stop offset="100%" stopColor="#854d0e" />
          </linearGradient>

          <radialGradient id="eyeCenter" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#030712" />
            <stop offset="35%" stopColor="#0f4c5c" />
            <stop offset="70%" stopColor="#0284c7" />
            <stop offset="90%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#eab308" />
          </radialGradient>
        </defs>

        {/* Peacock Stem */}
        <path d="M60 175 Q58 120 60 40" stroke="url(#stemGold)" strokeWidth="3" strokeLinecap="round" fill="none" />

        {/* Outer Green & Teal Barb Rays */}
        <path d="M60 40 Q20 30 10 70 M60 50 Q15 50 15 90 M60 60 Q20 70 25 110 M60 70 Q30 90 35 130" stroke="#059669" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.8" />
        <path d="M60 40 Q100 30 110 70 M60 50 Q105 50 105 90 M60 60 Q100 70 95 110 M60 70 Q90 90 85 130" stroke="#0284c7" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.8" />

        {/* Golden Fine Barbs */}
        <path d="M60 40 Q30 20 20 50 M60 30 Q35 10 40 40 M60 30 Q85 10 80 40 M60 40 Q90 20 100 50" stroke="#eab308" strokeWidth="1.2" strokeLinecap="round" fill="none" />

        {/* Peacock Eye (Ocellus) */}
        {/* Outer Gold Ring */}
        <ellipse cx="60" cy="42" rx="28" ry="34" fill="#ca8a04" opacity="0.9" />
        {/* Emerald Layer */}
        <ellipse cx="60" cy="42" rx="22" ry="27" fill="#047857" />
        {/* Bright Turquoise Ring */}
        <ellipse cx="60" cy="42" rx="16" ry="20" fill="#0284c7" />
        {/* Deep Peacock Blue Core */}
        <ellipse cx="60" cy="42" rx="11" ry="14" fill="url(#eyeCenter)" />
        {/* Shimmer Highlight */}
        <circle cx="56" cy="38" r="3" fill="#ffffff" opacity="0.7" />
      </svg>
    </div>
  );
};

export default PeacockFeather;
