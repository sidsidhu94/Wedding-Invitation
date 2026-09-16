import React from 'react';

/**
 * GaneshaHeader component - Traditional Lord Ganesha SVG motif
 */
const GaneshaHeader = ({ className = "w-16 h-16 md:w-20 md:h-20" }) => {
  return (
    <div className={`flex flex-col items-center justify-center my-2 ${className}`}>
      <svg 
        viewBox="0 0 100 100" 
        className="w-full h-full text-amber-500 filter drop-shadow-[0_2px_4px_rgba(212,175,55,0.4)]"
        fill="currentColor"
      >
        {/* Decorative Sun / Halo Backing */}
        <circle cx="50" cy="48" r="42" fill="none" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 2" opacity="0.6" />
        <circle cx="50" cy="48" r="38" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.8" />
        
        {/* Crown / Mukut */}
        <path d="M42 20 L50 6 L58 20 L55 25 L45 25 Z" fill="url(#goldGradient)" />
        <circle cx="50" cy="14" r="2.5" fill="#fef08a" />
        <path d="M40 25 Q50 22 60 25 L58 28 Q50 26 42 28 Z" fill="url(#goldGradient)" />

        {/* Ears */}
        {/* Left Ear */}
        <path d="M42 28 C28 26 18 36 24 50 C28 60 40 54 42 46 Z" fill="url(#goldGradient)" opacity="0.9" />
        <path d="M38 32 C28 32 24 40 28 48 Q34 50 38 42 Z" fill="none" stroke="#78350f" strokeWidth="1" />
        
        {/* Right Ear */}
        <path d="M58 28 C72 26 82 36 76 50 C72 60 60 54 58 46 Z" fill="url(#goldGradient)" opacity="0.9" />
        <path d="M62 32 C72 32 76 40 72 48 Q66 50 62 42 Z" fill="none" stroke="#78350f" strokeWidth="1" />

        {/* Head & Trunk */}
        <path d="M42 28 Q50 32 58 28 Q60 42 56 50 Q52 58 54 66 Q56 74 66 74 Q68 74 68 70 Q64 68 60 64 Q56 60 52 50 Q48 44 42 28 Z" fill="url(#goldGradient)" />

        {/* Tusk */}
        <path d="M44 48 L38 50 L44 51 Z" fill="#fff" stroke="url(#goldGradient)" strokeWidth="0.5" />
        
        {/* Tilak / Modak detail on forehead */}
        <path d="M47 30 Q50 24 53 30 Q50 36 47 30 Z" fill="#dc2626" />
        <circle cx="50" cy="38" r="1.8" fill="#dc2626" />
        <line x1="45" y1="33" x2="55" y2="33" stroke="url(#goldGradient)" strokeWidth="1.2" />

        {/* Eye lines */}
        <path d="M43 38 Q46 36 48 39" stroke="#451a03" strokeWidth="1.2" fill="none" />
        <path d="M57 38 Q54 36 52 39" stroke="#451a03" strokeWidth="1.2" fill="none" />

        {/* Gold Gradients */}
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="30%" stopColor="#d4af37" />
            <stop offset="70%" stopColor="#b45309" />
            <stop offset="100%" stopColor="#fef08a" />
          </linearGradient>
        </defs>
      </svg>
      {/* Om / Mantram Symbol Subtitle */}
      <span className="font-serif text-amber-600 text-xs tracking-widest mt-1 opacity-90 select-none">
        || श्री गणेशाय नमः ||
      </span>
    </div>
  );
};

export default GaneshaHeader;
