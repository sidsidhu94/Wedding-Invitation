import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Volume2, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import weddingData from '../data/weddingData';
import GaneshaHeader from './decorations/GaneshaHeader';

// Realistic Multi-flower Petals: Jasmine, Royal Rose, and Golden Flakes
const STATIC_PETALS = Array.from({ length: 28 }).map((_, i) => ({
  id: i,
  left: (i * 3.7 + ((i * 17) % 13)) % 100,
  duration: 4.2 + ((i * 3) % 4.5),
  delay: ((i * 5) % 15) * 0.08,
  size: 13 + ((i * 5) % 14),
  drift: ((i * 13) % 24) - 12,
  rotateEnd: (i * 95) % 360,
  type: i % 3 === 0 ? 'rose' : i % 3 === 1 ? 'jasmine' : 'gold',
}));

// Realistic Petal Shower Component
const PetalShower = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-40">
      {STATIC_PETALS.map((petal) => (
        <motion.div
          key={petal.id}
          initial={{ y: -40, x: `${petal.left}vw`, opacity: 0, rotate: 0 }}
          animate={{
            y: '110vh',
            x: `${petal.left + petal.drift}vw`,
            opacity: [0, 0.95, 0.95, 0],
            rotate: petal.rotateEnd,
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            ease: 'easeOut',
          }}
          className="absolute top-0 pointer-events-none"
          style={{ width: petal.size, height: petal.size }}
        >
          {petal.type === 'jasmine' ? (
            // Fragrant White Jasmine Petal
            <div
              className="w-full h-full rounded-full bg-gradient-to-br from-white via-rose-50 to-amber-50 shadow-sm opacity-90 transform -rotate-12 border border-amber-100/60"
              style={{ borderRadius: '60% 40% 70% 30% / 50% 60% 40% 50%' }}
            />
          ) : petal.type === 'rose' ? (
            // Velvety Royal Rose Petal
            <div
              className="w-full h-full rounded-full bg-gradient-to-br from-rose-600 via-rose-800 to-[#380813] shadow-md opacity-95 transform rotate-25 border border-rose-400/30"
              style={{ borderRadius: '55% 45% 65% 35% / 60% 40% 60% 40%' }}
            />
          ) : (
            // Auspicious Rose Gold / Golden Sparkle Flake
            <div
              className="w-full h-full rounded-full bg-gradient-to-tr from-[#e5a882] via-[#f5be9e] to-amber-200 shadow-sm opacity-95 transform rotate-45"
              style={{ borderRadius: '70% 30% 60% 40% / 60% 40% 70% 30%' }}
            />
          )}
        </motion.div>
      ))}
    </div>
  );
};

const EnvelopeOpening = ({ onOpen }) => {
  // Opening state: 'sealed' -> 'breaking' -> 'card-up' -> 'opened'
  const [openingPhase, setOpeningPhase] = useState('sealed');
  const [showPetals, setShowPetals] = useState(false);

  const handleBreakSeal = () => {
    if (openingPhase !== 'sealed') return;

    setOpeningPhase('breaking');
    setShowPetals(true);

    // Auspicious Golden & Rose Gold confetti & spark burst
    confetti({
      particleCount: 110,
      spread: 85,
      origin: { y: 0.55 },
      colors: ['#e5a882', '#f5be9e', '#fcf4f6', '#dfbd69', '#d97706', '#ffffff', '#9f1239'],
    });

    // Step 2: Lift Flap and Reveal Card
    setTimeout(() => {
      setOpeningPhase('card-up');
    }, 450);

    // Step 3: Complete ceremony, play music, open curtains
    setTimeout(() => {
      setOpeningPhase('opened');
      if (onOpen) onOpen();
    }, 1900);
  };

  const handleInstantSkip = () => {
    setOpeningPhase('opened');
    if (onOpen) onOpen();
  };

  return (
    <AnimatePresence>
      {openingPhase !== 'opened' && (
        <motion.div
          key="curtain-envelope-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1.1, ease: 'easeInOut' } }}
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden select-none bg-[#030d14]"
        >
          {/* Subtle Candlelight Ambient Glow Behind Center */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(225,190,101,0.18)_0%,_rgba(4,26,19,0.85)_55%,_#020907_100%)] pointer-events-none" />

          {/* Optional Petals Falling After Seal Breaks */}
          {showPetals && <PetalShower />}

          {/* LEFT ROYAL VELVET CURTAIN */}
          <motion.div
            initial={{ x: 0 }}
            animate={openingPhase === 'card-up' ? { x: '-102%' } : { x: 0 }}
            transition={{ duration: 1.6, ease: [0.76, 0, 0.24, 1] }}
            className="absolute top-0 bottom-0 left-0 w-[51%] z-30 pointer-events-none shadow-[20px_0_50px_rgba(0,0,0,0.9)] overflow-hidden"
            style={{
              background:
                'repeating-linear-gradient(90deg, var(--color-curtain-start, #4a0c1a) 0px, var(--color-curtain-mid, #380813) 40px, var(--color-curtain-dark, #1f040a) 80px, var(--color-curtain-mid, #380813) 120px, var(--color-curtain-start, #4a0c1a) 160px)',
            }}
          >
            {/* Velvet Drapery Ripple Highlights */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-transparent to-black/65 pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,_rgba(229,168,130,0.2),_transparent_70%)] pointer-events-none" />

            {/* Golden Bullion Border Trim on Edge */}
            <div className="absolute top-0 bottom-0 right-0 w-3 bg-gradient-to-b from-amber-400 via-rose-200 to-amber-600 border-l border-amber-200/50 shadow-lg flex flex-col justify-around py-4">
              {Array.from({ length: 30 }).map((_, i) => (
                <span key={i} className="w-full h-1 bg-amber-950/60 block my-1" />
              ))}
            </div>

            {/* Left Braided Gold Rope & Bullion Tassel */}
            <div className="absolute top-1/2 -translate-y-1/2 right-4 flex items-center gap-1 opacity-85">
              <div className="w-3 h-28 rounded-full bg-gradient-to-b from-amber-300 via-[#e5a882] to-amber-700 shadow-md border border-amber-200/60" />
            </div>
          </motion.div>

          {/* RIGHT ROYAL VELVET CURTAIN */}
          <motion.div
            initial={{ x: 0 }}
            animate={openingPhase === 'card-up' ? { x: '102%' } : { x: 0 }}
            transition={{ duration: 1.6, ease: [0.76, 0, 0.24, 1] }}
            className="absolute top-0 bottom-0 right-0 w-[51%] z-30 pointer-events-none shadow-[-20px_0_50px_rgba(0,0,0,0.9)] overflow-hidden"
            style={{
              background:
                'repeating-linear-gradient(90deg, var(--color-curtain-start, #4a0c1a) 0px, var(--color-curtain-mid, #380813) 40px, var(--color-curtain-dark, #1f040a) 80px, var(--color-curtain-mid, #380813) 120px, var(--color-curtain-start, #4a0c1a) 160px)',
            }}
          >
            {/* Velvet Drapery Ripple Highlights */}
            <div className="absolute inset-0 bg-gradient-to-l from-black/45 via-transparent to-black/65 pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,_rgba(229,168,130,0.2),_transparent_70%)] pointer-events-none" />

            {/* Golden Bullion Border Trim on Edge */}
            <div className="absolute top-0 bottom-0 left-0 w-3 bg-gradient-to-b from-amber-400 via-rose-200 to-amber-600 border-r border-amber-200/50 shadow-lg flex flex-col justify-around py-4">
              {Array.from({ length: 30 }).map((_, i) => (
                <span key={i} className="w-full h-1 bg-amber-950/60 block my-1" />
              ))}
            </div>

            {/* Right Braided Gold Rope & Bullion Tassel */}
            <div className="absolute top-1/2 -translate-y-1/2 left-4 flex items-center gap-1 opacity-85">
              <div className="w-3 h-28 rounded-full bg-gradient-to-b from-amber-300 via-[#e5a882] to-amber-700 shadow-md border border-amber-200/60" />
            </div>
          </motion.div>

          {/* TOP CONTROLS & SKIP BUTTON */}
          <div className="absolute top-6 left-6 right-6 z-40 flex items-center justify-between pointer-events-auto">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/50 border border-[var(--color-gold-border,rgba(229,168,130,0.4))] backdrop-blur-md text-[var(--color-gold-light,#fcf4f6)] text-xs font-cinzel">
              <Sparkles className="w-3.5 h-3.5 text-[var(--color-gold-mid,#e5a882)]" />
              <span>Royal Wedding Unveiling</span>
            </div>

            <button
              onClick={handleInstantSkip}
              className="group flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-black/50 hover:bg-black/80 border border-[var(--color-gold-border,rgba(229,168,130,0.4))] text-stone-200 hover:text-[var(--color-gold-mid,#e5a882)] font-cinzel text-xs tracking-wider transition-all cursor-pointer backdrop-blur-md"
            >
              <span>Skip to Invite</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* MAIN HANDCRAFTED ENVELOPE CARD STAGE */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 1.05, opacity: 0, transition: { duration: 0.7 } }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-35 max-w-lg w-11/12 sm:w-full mx-auto"
            style={{ perspective: 1200 }}
          >
            {/* ENVELOPE CONTAINER */}
            <div className="relative mx-auto w-full max-w-[440px] h-[340px] sm:h-[370px] rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.85)] flex items-center justify-center">
              
              {/* 1. BACK ENVELOPE INTERIOR (Lined with traditional gold damask pattern) */}
              <div className="absolute inset-0 rounded-2xl bg-[var(--color-bg-card,#380813)] border-2 border-[var(--color-gold-border,rgba(229,168,130,0.5))] overflow-hidden shadow-inner">
                {/* Damask silk pattern overlay */}
                <div
                  className="absolute inset-0 opacity-25"
                  style={{
                    backgroundImage:
                      'radial-gradient(var(--color-gold-mid, #e5a882) 1.5px, transparent 1.5px), radial-gradient(var(--color-gold-mid, #e5a882) 1.5px, var(--color-bg-card, #380813) 1.5px)',
                    backgroundSize: '24px 24px',
                    backgroundPosition: '0 0, 12px 12px',
                  }}
                />
              </div>

              {/* 2. THE WEDDING INVITATION CARD (Tucked inside, glides up on seal break) */}
              <motion.div
                initial={{ y: 0, opacity: 0.95 }}
                animate={
                  openingPhase === 'card-up' || openingPhase === 'breaking'
                    ? { y: -120, scale: 1.04, opacity: 1, boxShadow: '0 20px 50px rgba(0,0,0,0.7)' }
                    : { y: 0, scale: 0.98, opacity: 0.95 }
                }
                transition={{ duration: 1.1, ease: [0.33, 1, 0.68, 1] }}
                className="absolute w-[92%] h-[92%] rounded-xl bg-gradient-to-b from-[#fdfbf7] via-[#fbf7ed] to-[#f4ece1] border-2 border-[var(--color-gold-mid,#e5a882)]/80 shadow-2xl p-6 flex flex-col justify-between items-center text-center text-slate-900 z-10 overflow-hidden"
              >
                {/* Cotton Paper Subtle Texture */}
                <div className="absolute inset-2 border border-dashed border-[#b45309]/35 rounded-lg pointer-events-none" />

                {/* Top Auspicious Ganesha Ornament */}
                <div className="relative z-10 pt-1">
                  <GaneshaHeader className="w-12 h-12 md:w-14 md:h-14 mx-auto" />
                </div>

                {/* Main Card Content */}
                <div className="relative z-10 my-auto space-y-1">
                  <p className="font-cinzel text-[10px] sm:text-xs text-[#9a3412] tracking-[0.2em] uppercase font-semibold">
                    {weddingData.invitationText.eventTitle}
                  </p>
                  
                  {/* Couple Names (Bride Centric) */}
                  <h2 className="font-calligraphy text-2xl sm:text-3xl md:text-4xl text-[#78350f] font-bold leading-snug drop-shadow-sm pt-1">
                    {weddingData.bride.shortName} <span className="font-serif text-amber-600 text-xl font-normal">&</span> {weddingData.groom.shortName}
                  </h2>

                  <p className="font-garamond text-stone-700 text-xs sm:text-sm font-semibold pt-1">
                    Pre-Wedding: 16th Oct • Wedding: 18th Oct 2026
                  </p>
                  <p className="font-cinzel text-[10px] text-stone-500 tracking-wider uppercase">
                    {weddingData.reception.venue}, {weddingData.reception.location}
                  </p>
                </div>

                {/* Bottom Auspicious Blessing Tag */}
                <div className="relative z-10 pb-1">
                  <span className="font-garamond italic text-[11px] text-[#92400e] font-semibold">
                    {weddingData.blessingNote}
                  </span>
                </div>
              </motion.div>

              {/* 3. ENVELOPE FRONT POCKET (Lower triangular pouch folds) */}
              <div className="absolute inset-x-0 bottom-0 h-44 z-20 overflow-hidden rounded-b-2xl pointer-events-none">
                {/* Left Diagonal Fold */}
                <div
                  className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-tr from-[var(--color-bg-surface,#2d0710)] to-[var(--color-bg-card,#380813)] border-t border-[var(--color-gold-border,rgba(229,168,130,0.3))]"
                  style={{ clipPath: 'polygon(0 0, 50% 55%, 0 100%)' }}
                />
                {/* Right Diagonal Fold */}
                <div
                  className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-[var(--color-bg-surface,#2d0710)] to-[var(--color-bg-card,#380813)] border-t border-[var(--color-gold-border,rgba(229,168,130,0.3))]"
                  style={{ clipPath: 'polygon(100% 0, 50% 55%, 100% 100%)' }}
                />
                {/* Bottom Main Flap Fold */}
                <div
                  className="absolute bottom-0 inset-x-0 h-full bg-gradient-to-t from-[var(--color-bg-base,#1f040a)] via-[var(--color-bg-surface,#2d0710)] to-[var(--color-bg-card,#380813)] border-t-2 border-[var(--color-gold-border,rgba(229,168,130,0.4))] shadow-2xl"
                  style={{ clipPath: 'polygon(0 100%, 50% 40%, 100% 100%)' }}
                />
              </div>

              {/* Envelope Postmark / Family Stamp Details */}
              <div className="absolute bottom-4 inset-x-6 z-25 text-center pointer-events-none opacity-85">
                <p className="font-cinzel text-[10px] text-[var(--color-gold-light,#fcf4f6)]/90 tracking-[0.2em] uppercase font-semibold">
                  Kannur & Kasaragod, Kerala
                </p>
                <p className="font-garamond italic text-[11px] text-[var(--color-gold-mid,#e5a882)]/80">
                  Devaki, ENORA House No. 50
                </p>
              </div>

              {/* 4. 3D ENVELOPE TOP FLAP (Folds up when seal breaks) */}
              <motion.div
                initial={{ rotateX: 0 }}
                animate={
                  openingPhase === 'breaking' || openingPhase === 'card-up'
                    ? { rotateX: -180, zIndex: 5 }
                    : { rotateX: 0, zIndex: 25 }
                }
                transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1] }}
                style={{
                  transformOrigin: 'top center',
                  transformStyle: 'preserve-3d',
                }}
                className="absolute inset-x-0 top-0 h-44 z-25 pointer-events-none"
              >
                {/* Top Flap Outer Texture */}
                <div
                  className="w-full h-full bg-gradient-to-b from-[var(--color-curtain-start,#4a0c1a)] via-[var(--color-bg-surface,#2d0710)] to-[var(--color-bg-base,#1f040a)] border-b-2 border-[var(--color-gold-mid,#e5a882)]/50 shadow-xl"
                  style={{ clipPath: 'polygon(0 0, 100% 0, 50% 98%)' }}
                />
              </motion.div>

              {/* 5. PHYSICAL WAX SEAL (Embossed couple monogram "S & A") */}
              <motion.div
                initial={{ scale: 1 }}
                animate={
                  openingPhase === 'breaking'
                    ? { scale: [1, 1.25, 0], opacity: [1, 1, 0], filter: 'brightness(1.5)' }
                    : openingPhase === 'card-up'
                    ? { scale: 0, opacity: 0 }
                    : { scale: 1, opacity: 1 }
                }
                transition={{ duration: 0.5 }}
                className="absolute top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-35"
              >
                <button
                  onClick={handleBreakSeal}
                  aria-label="Break wax seal and open wedding invitation"
                  className="group relative cursor-pointer outline-none focus:ring-4 focus:ring-rose-400/50 rounded-full transition-transform duration-300 hover:scale-110 active:scale-95"
                >
                  {/* Subtle Expanding Halo Ring */}
                  <span className="absolute -inset-3 rounded-full border border-[var(--color-gold-mid,#e5a882)]/60 animate-ping opacity-60 pointer-events-none" />

                  {/* Wax Seal Body - Rich Crimson & Metallic Gold Rim */}
                  <div className="relative w-20 h-20 sm:w-22 sm:h-22 rounded-full bg-gradient-to-br from-[#9b1d28] via-[#650b16] to-[#38040d] border-3 border-[var(--color-gold-mid,#e5a882)] shadow-[0_8px_25px_rgba(0,0,0,0.8),_inset_0_2px_4px_rgba(255,255,255,0.3)] flex flex-col items-center justify-center text-center">
                    
                    {/* Organic Melted Wax Texture Edging */}
                    <div className="absolute inset-1 rounded-full border border-amber-300/40 opacity-70 pointer-events-none" />

                    {/* Couple Monogram "S & A" */}
                    <span className="font-calligraphy text-2xl sm:text-3xl text-gradient bg-gradient-to-b from-amber-100 via-[#f5be9e] to-[#e5a882] bg-clip-text text-transparent font-black leading-tight drop-shadow select-none mt-1">
                      S & A
                    </span>

                    {/* Tap Cue Subtitle */}
                    <span className="font-cinzel text-[8px] tracking-[0.2em] uppercase text-amber-200/85 font-semibold mt-0.5 select-none">
                      OPEN
                    </span>
                  </div>
                </button>
              </motion.div>

            </div>

            {/* Bottom Invitation Prompt */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-6 text-center space-y-1.5"
            >
              <p className="font-garamond italic text-base sm:text-lg text-amber-200/90 font-medium">
                Tap the wax seal to unveil the wedding invitation & play music
              </p>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/40 border border-amber-500/30 text-[11px] font-cinzel text-amber-300/85 shadow-sm">
                <Volume2 className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                <span>En Jeevan (Vaikom Vijayalakshmi)</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EnvelopeOpening;
