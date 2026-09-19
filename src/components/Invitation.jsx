import React from 'react';
import { motion } from 'framer-motion';
import weddingData from '../data/weddingData';
import GaneshaHeader from './decorations/GaneshaHeader';
import MandapIllustration from './decorations/MandapIllustration';
import { Phone, Calendar, MapPin, Sparkles } from 'lucide-react';

const Invitation = () => {
  return (
    <section id="invitation" className="py-20 md:py-28 px-4 bg-[var(--color-bg-base)] relative transition-colors duration-500 overflow-hidden">
      {/* Ambient Crimson & Warm Molten Gold Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[720px] h-[720px] bg-gradient-radial from-rose-900/25 via-amber-600/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-300/30 text-amber-200 text-xs uppercase tracking-[0.3em] font-cinzel mb-3 shadow-inner">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              Royal Wedding Stationery
            </span>
            <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-gold-gradient tracking-wider uppercase">
              {weddingData.invitationText.eventTitle}
            </h2>
            <div className="w-28 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mt-4 shadow-[0_0_10px_rgba(225,190,101,0.6)]" />
          </motion.div>
        </div>

        {/* Master Handcrafted Physical Luxury Wedding Card */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl p-2.5 sm:p-4 bg-gradient-to-b from-[#380813] via-[#2d0710] to-[#1a0308] border-2 border-amber-400/60 shadow-[0_35px_80px_rgba(0,0,0,0.95),_0_0_35px_rgba(225,190,101,0.25)]"
        >
          {/* Inner Antique Gold Foil Debossed Rim */}
          <div className="rounded-2xl border border-amber-300/40 p-1.5 sm:p-2 bg-[#190207]/85 shadow-inner">
            
            {/* Main Parchment Surface (Warm Royal Ivory Cotton Letterpress Paper) */}
            <div
              className="relative rounded-xl bg-gradient-to-b from-[#fdfbf7] via-[#faf4ea] to-[#f4ebe0] text-slate-900 p-6 sm:p-10 md:p-14 text-center overflow-hidden"
              style={{
                boxShadow: 'inset 0 0 50px rgba(180, 130, 40, 0.15), inset 0 2px 8px rgba(0,0,0,0.06)',
              }}
            >
              {/* Subtle Cotton Paper Grain Overlay */}
              <div
                className="absolute inset-0 opacity-15 pointer-events-none"
                style={{
                  backgroundImage: `radial-gradient(circle at 50% 50%, #b45309 1px, transparent 1px)`,
                  backgroundSize: '12px 12px',
                }}
              />

              {/* Multi-layered Gold Filigree Borders */}
              <div className="absolute inset-3 border-2 border-amber-700/40 rounded-lg pointer-events-none" />
              <div className="absolute inset-5 border border-dashed border-amber-800/25 rounded-md pointer-events-none" />

              {/* 4 Traditional Indian Corner Filigrees (SVG) */}
              <svg className="absolute top-3 left-3 w-8 h-8 sm:w-10 sm:h-10 text-amber-700/80 pointer-events-none" viewBox="0 0 100 100" fill="currentColor">
                <path d="M0,0 L40,0 C40,18 30,30 0,40 Z" opacity="0.25" />
                <path d="M6,6 L50,6 C45,22 22,45 6,50 Z" fill="none" stroke="currentColor" strokeWidth="2.5" />
                <circle cx="16" cy="16" r="4.5" fill="currentColor" />
                <circle cx="50" cy="6" r="3" fill="#b45309" />
                <circle cx="6" cy="50" r="3" fill="#b45309" />
              </svg>

              <svg className="absolute top-3 right-3 w-8 h-8 sm:w-10 sm:h-10 text-amber-700/80 pointer-events-none transform rotate-90" viewBox="0 0 100 100" fill="currentColor">
                <path d="M0,0 L40,0 C40,18 30,30 0,40 Z" opacity="0.25" />
                <path d="M6,6 L50,6 C45,22 22,45 6,50 Z" fill="none" stroke="currentColor" strokeWidth="2.5" />
                <circle cx="16" cy="16" r="4.5" fill="currentColor" />
                <circle cx="50" cy="6" r="3" fill="#b45309" />
                <circle cx="6" cy="50" r="3" fill="#b45309" />
              </svg>

              <svg className="absolute bottom-3 left-3 w-8 h-8 sm:w-10 sm:h-10 text-amber-700/80 pointer-events-none transform -rotate-90" viewBox="0 0 100 100" fill="currentColor">
                <path d="M0,0 L40,0 C40,18 30,30 0,40 Z" opacity="0.25" />
                <path d="M6,6 L50,6 C45,22 22,45 6,50 Z" fill="none" stroke="currentColor" strokeWidth="2.5" />
                <circle cx="16" cy="16" r="4.5" fill="currentColor" />
                <circle cx="50" cy="6" r="3" fill="#b45309" />
                <circle cx="6" cy="50" r="3" fill="#b45309" />
              </svg>

              <svg className="absolute bottom-3 right-3 w-8 h-8 sm:w-10 sm:h-10 text-amber-700/80 pointer-events-none transform rotate-180" viewBox="0 0 100 100" fill="currentColor">
                <path d="M0,0 L40,0 C40,18 30,30 0,40 Z" opacity="0.25" />
                <path d="M6,6 L50,6 C45,22 22,45 6,50 Z" fill="none" stroke="currentColor" strokeWidth="2.5" />
                <circle cx="16" cy="16" r="4.5" fill="currentColor" />
                <circle cx="50" cy="6" r="3" fill="#b45309" />
                <circle cx="6" cy="50" r="3" fill="#b45309" />
              </svg>

              {/* 1. Centered Gold Lord Ganesha at the Top (WITHOUT any text subtitles) */}
              <div className="relative z-10 flex flex-col items-center pt-2 pb-4">
                <GaneshaHeader className="w-16 h-16 md:w-20 md:h-20 mx-auto text-amber-700 filter drop-shadow-[0_2px_5px_rgba(180,83,9,0.3)]" />
                <div className="w-20 h-[1.5px] bg-gradient-to-r from-transparent via-amber-700/60 to-transparent mt-3" />
              </div>

              {/* 2. Host Family (Bride's Parents) */}
              <div className="relative z-10 my-4 pb-6 border-b border-amber-700/25">
                <p className="font-cinzel text-[11px] sm:text-xs uppercase tracking-[0.25em] text-amber-900 font-bold mb-1.5">
                  Invitation From
                </p>
                <h3 className="font-cinzel font-bold text-2xl sm:text-3xl text-stone-900 tracking-wide leading-snug">
                  {weddingData.bride.parents}
                </h3>
                <p className="font-garamond text-stone-700 text-sm sm:text-base italic mt-1 max-w-md mx-auto">
                  {weddingData.bride.address}
                </p>
                {weddingData.bride.mobile && (
                  <div className="mt-3 flex items-center justify-center gap-2">
                    <a
                      href={`tel:${weddingData.bride.mobiles?.[0] || '9061437409'}`}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100/90 border border-amber-300 text-amber-950 font-cinzel text-xs font-semibold hover:bg-amber-200 transition-colors shadow-sm"
                    >
                      <Phone className="w-3 h-3 text-amber-800" />
                      <span>Mob: {weddingData.bride.mobile}</span>
                    </a>
                  </div>
                )}
              </div>

              {/* 3. Ceremonial Invitation Text */}
              <div className="relative z-10 my-6 space-y-2">
                <p className="font-garamond italic text-stone-800 text-lg sm:text-xl md:text-2xl font-medium leading-relaxed max-w-xl mx-auto">
                  {weddingData.invitationText.greeting}
                </p>
                <p className="font-garamond italic text-stone-600 text-base sm:text-lg">
                  {weddingData.invitationText.occasion}
                </p>
                <h4 className="font-cinzel font-extrabold text-amber-900 text-xl sm:text-2xl md:text-3xl tracking-widest uppercase pt-1 drop-shadow-sm">
                  {weddingData.invitationText.eventTitle}
                </h4>
              </div>

              {/* 4. Couple Names in Romantic Calligraphy ("Alex Brush") & Embossed Lineage Badges */}
              <div className="relative z-10 my-8 py-2">
                {/* Bride Section */}
                <div className="py-2">
                  <h1 className="font-brush text-5xl sm:text-7xl md:text-8xl text-amber-950 font-normal leading-tight drop-shadow-[0_2px_6px_rgba(180,83,9,0.2)]">
                    {weddingData.bride.name}
                  </h1>
                  
                  {/* Bride Lineage Embossed Badge */}
                  <div className="inline-block mt-2 px-5 py-2 rounded-xl bg-gradient-to-r from-amber-50/90 via-amber-100/70 to-amber-50/90 border border-amber-400/60 shadow-sm">
                    <p className="font-cinzel font-semibold text-xs sm:text-sm text-amber-950 tracking-wider">
                      {weddingData.bride.family}
                    </p>
                    <p className="font-garamond text-stone-700 text-xs mt-0.5">
                      {weddingData.bride.address}
                    </p>
                  </div>
                </div>

                {/* Ornate Divider with Mandap Illustration */}
                <div className="my-6">
                  <MandapIllustration className="w-28 h-14 mx-auto opacity-85 text-amber-800" />
                  <div className="flex items-center justify-center gap-4 my-2">
                    <span className="w-16 sm:w-28 h-[1.5px] bg-gradient-to-r from-transparent via-amber-700 to-transparent" />
                    <span className="font-brush text-3xl sm:text-4xl text-amber-900 italic px-2">with</span>
                    <span className="w-16 sm:w-28 h-[1.5px] bg-gradient-to-l from-transparent via-amber-700 to-transparent" />
                  </div>
                </div>

                {/* Groom Section */}
                <div className="py-2">
                  <h1 className="font-brush text-5xl sm:text-7xl md:text-8xl text-amber-950 font-normal leading-tight drop-shadow-[0_2px_6px_rgba(180,83,9,0.2)]">
                    {weddingData.groom.name}
                  </h1>

                  {/* Groom Lineage Embossed Badge */}
                  <div className="inline-block mt-2 px-5 py-2 rounded-xl bg-gradient-to-r from-amber-50/90 via-amber-100/70 to-amber-50/90 border border-amber-400/60 shadow-sm">
                    <p className="font-cinzel font-semibold text-xs sm:text-sm text-amber-950 tracking-wider">
                      {weddingData.groom.family}
                    </p>
                    <p className="font-garamond text-stone-700 text-xs mt-0.5">
                      {weddingData.groom.address}
                    </p>
                  </div>
                </div>
              </div>

              {/* 5. Auspicious Ceremonial Itinerary Plaques */}
              <div className="relative z-10 mt-10 pt-8 border-t border-amber-700/30 grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                {/* Part 1: Pre-Wedding Reception */}
                <div className="p-5 rounded-2xl bg-gradient-to-b from-amber-50/90 to-amber-100/70 border-2 border-amber-600/40 shadow-sm space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-cinzel tracking-widest uppercase px-2.5 py-0.5 rounded-full bg-amber-800 text-amber-100 font-bold">
                      Part 1: Reception
                    </span>
                    <span className="text-xs text-amber-900 font-bold">Fri, Oct 16</span>
                  </div>
                  <p className="font-cinzel font-bold text-base text-stone-900 flex items-center gap-2 pt-1">
                    <Calendar className="w-4 h-4 text-amber-800 shrink-0" />
                    <span>Friday, 16th October 2026</span>
                  </p>
                  <p className="font-garamond text-stone-800 text-sm font-semibold">
                    Time: {weddingData.reception.time}
                  </p>
                  <p className="font-garamond text-stone-700 text-xs flex items-start gap-1.5 pt-1">
                    <MapPin className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
                    <span>{weddingData.reception.venue}, {weddingData.reception.location}</span>
                  </p>
                </div>

                {/* Part 2: The Wedding */}
                <div className="p-5 rounded-2xl bg-gradient-to-b from-amber-50/90 to-amber-100/70 border-2 border-amber-600/40 shadow-sm space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-cinzel tracking-widest uppercase px-2.5 py-0.5 rounded-full bg-amber-800 text-amber-100 font-bold">
                      Part 2: The Wedding
                    </span>
                    <span className="text-xs text-amber-900 font-bold">Sun, Oct 18</span>
                  </div>
                  <p className="font-cinzel font-bold text-base text-stone-900 flex items-center gap-2 pt-1">
                    <Calendar className="w-4 h-4 text-amber-800 shrink-0" />
                    <span>{weddingData.wedding.date}</span>
                  </p>
                  <p className="font-garamond text-stone-800 text-sm font-semibold">
                    Muhurtham: {weddingData.wedding.muhurtham}
                  </p>
                  <p className="font-garamond text-stone-700 text-xs flex items-start gap-1.5 pt-1">
                    <MapPin className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
                    <span>{weddingData.wedding.venue}, {weddingData.wedding.location}</span>
                  </p>
                </div>
              </div>

              {/* 6. Bottom Gilded Seal */}
              <div className="relative z-10 mt-8 pt-6 border-t border-amber-700/30 flex flex-col items-center">
                <div className="px-6 py-2.5 rounded-full bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 text-slate-950 font-cinzel text-xs font-black tracking-[0.25em] uppercase shadow-md">
                  ✦ {weddingData.blessingNote} ✦
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Invitation;
