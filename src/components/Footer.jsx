import React from 'react';
import weddingData from '../data/weddingData';
import PeacockFeather from './decorations/PeacockFeather';

const Footer = () => {
  return (
    <footer className="bg-[var(--color-bg-base)] border-t border-[var(--color-gold-border)] py-12 px-4 text-center relative overflow-hidden transition-colors duration-500">
      <div className="max-w-4xl mx-auto space-y-6">
        
        {/* Peacock Feather Icon */}
        <div className="flex justify-center">
          <PeacockFeather className="w-12 h-20 opacity-80" />
        </div>

        {/* Monogram / Names */}
        <h3 className="font-calligraphy text-4xl md:text-5xl text-gold-gradient font-bold">
          {weddingData.groom.shortName} <span className="text-[var(--color-gold-mid)] font-serif text-2xl">&</span> {weddingData.bride.shortName}
        </h3>

        <p className="font-cinzel text-xs text-[var(--color-gold-light)]/80 tracking-widest uppercase">
          Sunday, 18th October 2026 • Kerala, India
        </p>

        <div className="w-24 h-[1px] bg-[var(--color-gold-border)] mx-auto" />

        {/* Closing Blessing */}
        <p className="font-garamond text-[var(--color-text-muted)] text-sm italic">
          "{weddingData.blessingNote}"
        </p>

        <p className="text-[11px] font-sans text-[var(--color-text-subtle)] tracking-wider">
          © 2026 Sidharth & Anjusha Wedding Celebration. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
