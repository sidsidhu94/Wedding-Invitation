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
          <p className="font-garamond italic text-amber-300 text-lg">Traditional Card Panel</p>
          <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-gold-gradient tracking-wide uppercase">
            Wedding Invitation
          </h2>
          <div className="w-24 h-[2px] bg-amber-500/60 mx-auto mt-2" />
        </div>

        {/* Physical Invitation Card Frame (Ivory Panel) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <GoldBorder className="text-[#1c1917]">
            <div className="text-center py-4 px-2 md:px-8 space-y-6">
              
              {/* Lord Ganesha Top Icon */}
              <GaneshaHeader className="w-16 h-16 md:w-20 md:h-20" />

              {/* Groom's Host Family & Address */}
              <div className="border-b border-[#d4af37]/30 pb-6 space-y-1">
                <h3 className="font-garamond font-bold text-lg md:text-xl text-[#78350f]">
                  {weddingData.groom.parents}
                </h3>
                <p className="font-garamond text-stone-700 text-sm md:text-base leading-relaxed">
                  {weddingData.groom.addressLines[0]}
                  <br />
                  {weddingData.groom.addressLines[1]}
                </p>
                <p className="font-garamond font-semibold text-stone-800 text-sm mt-1">
                  Mob : {weddingData.groom.mobile}
                </p>
              </div>

              {/* Invitation Text Wording */}
              <div className="py-2 space-y-2">
                <p className="font-garamond italic text-stone-800 text-base md:text-lg">
                  {weddingData.invitationText.greeting}
                </p>
                <p className="font-garamond italic text-stone-700 text-base md:text-lg">
                  {weddingData.invitationText.occasion}
                </p>
                <h4 className="font-cinzel font-bold text-[#b45309] text-base md:text-xl tracking-wider uppercase pt-2">
                  {weddingData.invitationText.eventTitle}
                </h4>
              </div>

              {/* Groom Name (Prominent) */}
              <div className="py-2">
                <h2 className="font-calligraphy text-4xl sm:text-5xl md:text-6xl text-[#78350f] font-bold drop-shadow-sm">
                  {weddingData.groom.name}
                </h2>
              </div>

              {/* Groom Lineage */}
              <div className="bg-[#fef3c7]/40 p-4 rounded-lg border border-[#fde68a] text-stone-800 text-xs md:text-sm font-garamond leading-relaxed space-y-2 max-w-xl mx-auto">
                <p>{weddingData.groom.lineage1}</p>
                <p className="italic font-bold text-[#b45309]">and</p>
                <p>{weddingData.groom.lineage2}</p>
              </div>

              {/* Decorative Mandap Divider */}
              <div className="my-6">
                <MandapIllustration className="w-32 h-16 mx-auto" />
                <div className="flex items-center justify-center gap-3 my-2">
                  <span className="w-16 h-[1px] bg-[#d4af37]" />
                  <span className="font-garamond italic text-[#78350f] font-bold text-lg">weds</span>
                  <span className="w-16 h-[1px] bg-[#d4af37]" />
                </div>
              </div>

              {/* Bride Name (Prominent) */}
              <div className="py-2">
                <h2 className="font-calligraphy text-4xl sm:text-5xl md:text-6xl text-[#78350f] font-bold drop-shadow-sm">
                  {weddingData.bride.name}
                </h2>
              </div>

              {/* Bride Family & Address */}
              <div className="pt-2 space-y-1 text-stone-800">
                <h3 className="font-garamond font-bold text-base md:text-lg text-[#78350f]">
                  {weddingData.bride.parents}
                </h3>
                <p className="font-garamond text-stone-700 text-sm md:text-base">
                  {weddingData.bride.addressLines[0]}
                </p>
              </div>

              {/* Bottom Card Footer Ornament */}
              <div className="pt-4 border-t border-[#d4af37]/30">
                <p className="font-cinzel text-xs text-[#b45309] tracking-widest uppercase">
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
