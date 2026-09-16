import React from 'react';

/**
 * MandapIllustration Component
 * Stylized Indian Wedding Arch / Kalash Mandap SVG vector
 */
const MandapIllustration = ({ className = "w-24 h-16" }) => {
  return (
    <div className={`flex justify-center items-center ${className}`}>
      <svg viewBox="0 0 200 120" className="w-full h-full text-amber-500" fill="currentColor">
        {/* Arch Pillars */}
        <path d="M30 110 L30 50 Q30 45 35 45 L35 110 Z" fill="url(#mandapGold)" />
        <path d="M170 110 L170 50 Q170 45 165 45 L165 110 Z" fill="url(#mandapGold)" />

        {/* Pillar Bases & Capitals */}
        <rect x="25" y="105" width="15" height="7" rx="1" fill="#78350f" />
        <rect x="160" y="105" width="15" height="7" rx="1" fill="#78350f" />
        <rect x="25" y="42" width="15" height="5" rx="1" fill="#78350f" />
        <rect x="160" y="42" width="15" height="5" rx="1" fill="#78350f" />

        {/* Decorative Arch */}
        <path d="M30 45 Q100 15 170 45 Q100 28 30 45 Z" fill="url(#mandapGold)" />
        <path d="M40 45 Q100 25 160 45" fill="none" stroke="#78350f" strokeWidth="1.5" strokeDasharray="3 2" />

        {/* Hanging Floral Toran Drops */}
        <circle cx="60" cy="50" r="3" fill="#ef4444" />
        <line x1="60" y1="45" x2="60" y2="50" stroke="#78350f" strokeWidth="1" />
        
        <circle cx="80" cy="54" r="3.5" fill="#f59e0b" />
        <line x1="80" y1="43" x2="80" y2="54" stroke="#78350f" strokeWidth="1" />
        
        <circle cx="100" cy="56" r="4" fill="#dc2626" />
        <line x1="100" y1="42" x2="100" y2="56" stroke="#78350f" strokeWidth="1" />
        
        <circle cx="120" cy="54" r="3.5" fill="#f59e0b" />
        <line x1="120" y1="43" x2="120" y2="54" stroke="#78350f" strokeWidth="1" />
        
        <circle cx="140" cy="50" r="3" fill="#ef4444" />
        <line x1="140" y1="45" x2="140" y2="50" stroke="#78350f" strokeWidth="1" />

        {/* Top Central Kalash Motif */}
        <path d="M92 25 C92 18 108 18 108 25 C108 30 92 30 92 25 Z" fill="url(#mandapGold)" />
        <path d="M96 18 Q100 12 104 18 Z" fill="#16a34a" />
        <circle cx="100" cy="11" r="3" fill="#dc2626" />

        <defs>
          <linearGradient id="mandapGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="50%" stopColor="#d4af37" />
            <stop offset="100%" stopColor="#92400e" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default MandapIllustration;
