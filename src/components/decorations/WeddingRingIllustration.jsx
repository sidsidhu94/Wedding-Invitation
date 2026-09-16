import React from 'react';

/**
 * WeddingRingIllustration Component
 * Interlocking antique gold wedding rings icon
 */
const WeddingRingIllustration = ({ className = "w-12 h-12" }) => {
  return (
    <div className={`flex justify-center items-center ${className}`}>
      <svg viewBox="0 0 100 80" className="w-full h-full filter drop-shadow-[0_2px_4px_rgba(212,175,55,0.4)]">
        <defs>
          <linearGradient id="ringGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="40%" stopColor="#d4af37" />
            <stop offset="80%" stopColor="#b45309" />
            <stop offset="100%" stopColor="#fef08a" />
          </linearGradient>
        </defs>

        {/* Left Ring */}
        <circle cx="38" cy="42" r="22" fill="none" stroke="url(#ringGold)" strokeWidth="6" />
        <circle cx="38" cy="42" r="25" fill="none" stroke="#78350f" strokeWidth="0.8" opacity="0.6" />

        {/* Diamond Solitaire on Left Ring */}
        <path d="M38 14 L42 20 L38 24 L34 20 Z" fill="#e0f2fe" stroke="#0284c7" strokeWidth="0.8" />
        <circle cx="38" cy="19" r="1.5" fill="#ffffff" />

        {/* Right Ring Interlocking */}
        <circle cx="62" cy="42" r="22" fill="none" stroke="url(#ringGold)" strokeWidth="6" />
        <circle cx="62" cy="42" r="25" fill="none" stroke="#78350f" strokeWidth="0.8" opacity="0.6" />

        {/* Sparkle Rays */}
        <line x1="38" y1="6" x2="38" y2="10" stroke="#fef08a" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="30" y1="12" x2="33" y2="15" stroke="#fef08a" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="46" y1="12" x2="43" y2="15" stroke="#fef08a" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </div>
  );
};

export default WeddingRingIllustration;
