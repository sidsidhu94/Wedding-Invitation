import React from 'react';
import { motion } from 'framer-motion';
import weddingData from '../data/weddingData';
import GoldBorder from './decorations/GoldBorder';
import GaneshaHeader from './decorations/GaneshaHeader';
import MandapIllustration from './decorations/MandapIllustration';

const Invitation = () => {
  return (
    <section id="invitation" className="py-16 md:py-24 px-4 bg-[var(--color-bg-base)] relative transition-colors duration-500">
      <div className="max-w-3xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center mb-10">
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-gold-gradient tracking-wider uppercase">
            Wedding Reception Invitation
          </h2>
          <div className="w-28 h-[2px] bg-[var(--color-gold-mid)] mx-auto mt-3 shadow-[0_0_8px_var(--color-gold-mid)]" />
        </div>

        {/* Physical Invitation Card Frame (Emerald & Antique Gold Stationery Card) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Subtle Ambient Backing Glow */}
          <div className="absolute -inset-1 rounded-3xl bg-[var(--color-gold-mid)]/15 blur-xl pointer-events-none" />

          <GoldBorder>
            <div className="text-center py-4 px-2 sm:px-6 md:px-8 space-y-6">
              
              {/* Lord Ganesha Top Icon - Centered without Hindi Writing */}
              <div className="flex justify-center items-center">
                <GaneshaHeader className="w-16 h-16 md:w-20 md:h-20 mx-auto" />
              </div>

              {/* Groom's Host Family & Address */}
              <div className="border-b border-[var(--color-gold-border)]/50 pb-6 space-y-1.5">
                <h3 className="font-garamond font-bold text-xl md:text-2xl text-[var(--color-gold-light)]">
                  {weddingData.groom.parents}
                </h3>
                <p className="font-garamond text-[var(--color-text-muted)] text-sm md:text-base leading-relaxed">
                  {weddingData.groom.addressLines[0]}
                  <br />
                  {weddingData.groom.addressLines[1]}
                </p>
                <p className="font-cinzel text-xs text-[var(--color-gold-mid)] tracking-wider mt-1 font-semibold">
                  Mob : {weddingData.groom.mobile}
                </p>
              </div>

              {/* Invitation Text Wording */}
              <div className="py-2 space-y-2">
                <p className="font-garamond italic text-[var(--color-gold-light)] text-lg md:text-xl">
                  {weddingData.invitationText.greeting}
                </p>
                <p className="font-garamond italic text-[var(--color-text-muted)] text-base md:text-lg">
                  {weddingData.invitationText.occasion}
                </p>
                <h4 className="font-cinzel font-bold text-gold-gradient text-lg md:text-2xl tracking-widest uppercase pt-2">
                  {weddingData.invitationText.eventTitle}
                </h4>
              </div>

              {/* Groom Name (Romantic Flourish Brush Calligraphy) */}
              <div className="py-2">
                <h2 className="font-calligraphy text-4xl sm:text-6xl md:text-7xl text-gold-shine font-bold drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)] py-1">
                  {weddingData.groom.name}
                </h2>
              </div>

              {/* Groom Lineage */}
              <div className="bg-[var(--color-bg-base)]/85 p-4 md:p-5 rounded-2xl border border-[var(--color-gold-border)]/60 text-[var(--color-text-muted)] text-xs md:text-sm font-garamond leading-relaxed space-y-2 max-w-xl mx-auto shadow-inner">
                <p>{weddingData.groom.lineage1}</p>
                <p className="italic font-bold text-[var(--color-gold-mid)] font-serif">and</p>
                <p>{weddingData.groom.lineage2}</p>
              </div>

              {/* Decorative Mandap Divider */}
              <div className="my-6">
                <MandapIllustration className="w-28 h-14 mx-auto opacity-90" />
                <div className="flex items-center justify-center gap-3 my-2">
                  <span className="w-16 sm:w-24 h-[1px] bg-gradient-to-r from-transparent to-[var(--color-gold-mid)]" />
                  <span className="font-calligraphy italic text-[var(--color-gold-light)] font-bold text-2xl px-2">weds</span>
                  <span className="w-16 sm:w-24 h-[1px] bg-gradient-to-l from-transparent to-[var(--color-gold-mid)]" />
                </div>
              </div>

              {/* Bride Name (Romantic Flourish Brush Calligraphy) */}
              <div className="py-2">
                <h2 className="font-calligraphy text-4xl sm:text-6xl md:text-7xl text-gold-shine font-bold drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)] py-1">
                  {weddingData.bride.name}
                </h2>
              </div>

              {/* Bride Family & Address */}
              <div className="pt-2 space-y-1.5 text-[var(--color-text-muted)]">
                <h3 className="font-garamond font-bold text-lg md:text-xl text-[var(--color-gold-light)]">
                  {weddingData.bride.parents}
                </h3>
                <p className="font-garamond text-sm md:text-base">
                  {weddingData.bride.addressLines[0]}
                </p>
              </div>

              {/* Bottom Card Footer Ornament */}
              <div className="pt-6 border-t border-[var(--color-gold-border)]/40">
                <p className="font-cinzel text-xs text-[var(--color-gold-mid)] tracking-[0.25em] uppercase font-semibold">
                  ✦ Cordially Invited ✦
                </p>
              </div>

            </div>
          </GoldBorder>
        </motion.div>
      </div>
    </section>
  );
};

export default Invitation;
