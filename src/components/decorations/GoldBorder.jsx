import React from 'react';

/**
 * GoldBorder Component
 * Renders an authentic ornate traditional Indian frame with gold corner filigrees,
 * styled to match the luxury Royal Emerald & Gold physical wedding stationery card.
 */
const GoldBorder = ({ children, className = "" }) => {
  return (
    <div className={`relative p-6 sm:p-8 md:p-12 rounded-3xl border-2 border-[var(--color-gold-border)] bg-[var(--color-bg-card)] text-[var(--color-text-main)] shadow-[0_25px_60px_rgba(0,0,0,0.85),_0_0_30px_rgba(225,190,101,0.1)] overflow-hidden ${className}`}>
      {/* Outer Fine Gold Line */}
      <div className="absolute inset-2 sm:inset-3 border border-[var(--color-gold-border)]/60 pointer-events-none rounded-2xl" />
      {/* Inner Decorative Dashed Border */}
      <div className="absolute inset-3 sm:inset-4 border border-dashed border-[var(--color-gold-mid)]/35 pointer-events-none rounded-2xl" />

      {/* Top Left Corner Filigree */}
      <svg className="absolute top-1.5 left-1.5 w-12 h-12 md:w-16 md:h-16 text-[var(--color-gold-mid)] pointer-events-none" viewBox="0 0 100 100" fill="currentColor">
        <path d="M0,0 L35,0 C35,15 25,25 0,35 Z" opacity="0.2" />
        <path d="M5,5 L45,5 C40,20 20,40 5,45 Z" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M10,10 L30,10 C25,18 18,25 10,30 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="15" cy="15" r="4" fill="currentColor" />
        <path d="M5,45 C20,45 40,25 45,5" fill="none" stroke="var(--color-gold-light)" strokeWidth="1" />
        <circle cx="45" cy="5" r="2.5" fill="var(--color-gold-light)" />
        <circle cx="5" cy="45" r="2.5" fill="var(--color-gold-light)" />
      </svg>

      {/* Top Right Corner Filigree */}
      <svg className="absolute top-1.5 right-1.5 w-12 h-12 md:w-16 md:h-16 text-[var(--color-gold-mid)] pointer-events-none transform rotate-90" viewBox="0 0 100 100" fill="currentColor">
        <path d="M0,0 L35,0 C35,15 25,25 0,35 Z" opacity="0.2" />
        <path d="M5,5 L45,5 C40,20 20,40 5,45 Z" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M10,10 L30,10 C25,18 18,25 10,30 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="15" cy="15" r="4" fill="currentColor" />
        <path d="M5,45 C20,45 40,25 45,5" fill="none" stroke="var(--color-gold-light)" strokeWidth="1" />
        <circle cx="45" cy="5" r="2.5" fill="var(--color-gold-light)" />
        <circle cx="5" cy="45" r="2.5" fill="var(--color-gold-light)" />
      </svg>

      {/* Bottom Left Corner Filigree */}
      <svg className="absolute bottom-1.5 left-1.5 w-12 h-12 md:w-16 md:h-16 text-[var(--color-gold-mid)] pointer-events-none transform -rotate-90" viewBox="0 0 100 100" fill="currentColor">
        <path d="M0,0 L35,0 C35,15 25,25 0,35 Z" opacity="0.2" />
        <path d="M5,5 L45,5 C40,20 20,40 5,45 Z" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M10,10 L30,10 C25,18 18,25 10,30 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="15" cy="15" r="4" fill="currentColor" />
        <path d="M5,45 C20,45 40,25 45,5" fill="none" stroke="var(--color-gold-light)" strokeWidth="1" />
        <circle cx="45" cy="5" r="2.5" fill="var(--color-gold-light)" />
        <circle cx="5" cy="45" r="2.5" fill="var(--color-gold-light)" />
      </svg>

      {/* Bottom Right Corner Filigree */}
      <svg className="absolute bottom-1.5 right-1.5 w-12 h-12 md:w-16 md:h-16 text-[var(--color-gold-mid)] pointer-events-none transform rotate-180" viewBox="0 0 100 100" fill="currentColor">
        <path d="M0,0 L35,0 C35,15 25,25 0,35 Z" opacity="0.2" />
        <path d="M5,5 L45,5 C40,20 20,40 5,45 Z" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M10,10 L30,10 C25,18 18,25 10,30 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="15" cy="15" r="4" fill="currentColor" />
        <path d="M5,45 C20,45 40,25 45,5" fill="none" stroke="var(--color-gold-light)" strokeWidth="1" />
        <circle cx="45" cy="5" r="2.5" fill="var(--color-gold-light)" />
        <circle cx="5" cy="45" r="2.5" fill="var(--color-gold-light)" />
      </svg>

      {/* Main Content inside frame */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default GoldBorder;
