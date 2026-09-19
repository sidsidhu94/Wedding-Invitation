import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, Scroll } from 'lucide-react';
import confetti from 'canvas-confetti';
import weddingData from '../../data/weddingData';

export const ScrollOpening = ({ onOpen }) => {
  // Phase: 'rolled' -> 'breaking-seal' -> 'unrolling' -> 'opened'
  const [phase, setPhase] = useState('rolled');

  const handleUnrollScroll = () => {
    if (phase !== 'rolled') return;

    setPhase('breaking-seal');

    // Auspicious Gold Confetti Shower
    setTimeout(() => {
      confetti({
        particleCount: 110,
        spread: 90,
        origin: { y: 0.5 },
        colors: ['#dfbd69', '#fef4cf', '#d97706', '#ffffff', '#fbbf24'],
      });
      setPhase('unrolling');
    }, 450);

    setTimeout(() => {
      setPhase('opened');
      if (onOpen) onOpen();
    }, 2200);
  };

  const handleInstantSkip = () => {
    setPhase('opened');
    if (onOpen) onOpen();
  };

  return (
    <AnimatePresence>
      {phase !== 'opened' && (
        <motion.div
          key="scroll-ceremony-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1.1, ease: 'easeInOut' } }}
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden select-none bg-[#030712]"
        >
          {/* Cosmic Navy Background */}
          <div className="absolute inset-0 bg-gradient-radial from-[#0e1b38] via-[#070e1d] to-[#02050c] opacity-95" />

          {/* Ambient golden aura glow */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.55, 0.3],
            }}
            transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute w-[650px] h-[650px] rounded-full bg-gradient-to-tr from-amber-500/20 via-yellow-400/10 to-transparent blur-3xl pointer-events-none"
          />

          {/* Instant Skip Button */}
          <button
            onClick={handleInstantSkip}
            className="absolute top-6 right-6 z-50 flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 hover:bg-slate-800 text-amber-200/90 text-xs tracking-widest uppercase border border-amber-400/30 backdrop-blur-md transition-all shadow-lg hover:scale-105 active:scale-95"
          >
            <span>Skip Opening</span>
            <ArrowRight className="w-3.5 h-3.5 text-amber-300" />
          </button>

          {/* Main Scroll Container */}
          <div className="relative z-10 flex flex-col items-center justify-center p-4 max-w-lg w-full">
            {/* Header Badge */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-center mb-5"
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-300/30 text-amber-300 text-xs uppercase tracking-[0.3em] font-serif shadow-inner">
                <Scroll className="w-3.5 h-3.5 text-amber-300" />
                Royal Patrika & Farman
              </span>
            </motion.div>

            {/* Scroll Mechanism */}
            <div
              className="relative w-full max-w-[420px] flex flex-col items-center justify-center cursor-pointer select-none"
              onClick={handleUnrollScroll}
            >
              {/* TOP FINIAL ROD */}
              <motion.div
                initial={{ y: 0 }}
                animate={
                  phase === 'unrolling' || phase === 'opened'
                    ? { y: -160 }
                    : { y: 0 }
                }
                transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-30 w-full flex items-center justify-center"
              >
                {/* Left Finial Knob */}
                <div className="w-7 h-10 rounded-l-full bg-gradient-to-r from-amber-600 via-amber-300 to-amber-500 border border-amber-200/70 shadow-lg shadow-amber-900/50 flex items-center justify-center">
                  <div className="w-2 h-6 rounded-full bg-amber-800/40" />
                </div>
                {/* Carved Rod */}
                <div className="flex-1 h-8 rounded-sm bg-gradient-to-b from-amber-300 via-amber-500 to-amber-700 border-y border-amber-200 shadow-md relative overflow-hidden flex items-center justify-between px-3">
                  <div className="h-[2px] w-full bg-amber-200/60" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-200/40 to-transparent animate-pulse" />
                </div>
                {/* Right Finial Knob */}
                <div className="w-7 h-10 rounded-r-full bg-gradient-to-l from-amber-600 via-amber-300 to-amber-500 border border-amber-200/70 shadow-lg shadow-amber-900/50 flex items-center justify-center">
                  <div className="w-2 h-6 rounded-full bg-amber-800/40" />
                </div>
              </motion.div>

              {/* UNROLLING PARCHMENT BODY */}
              <motion.div
                initial={{ height: 110, opacity: 0.95 }}
                animate={
                  phase === 'unrolling' || phase === 'opened'
                    ? { height: 420, opacity: 1 }
                    : { height: 110, opacity: 0.95 }
                }
                transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-[92%] overflow-hidden bg-gradient-to-b from-[#fbf7ed] via-[#f7eedc] to-[#eeddc0] shadow-2xl border-x-2 border-amber-400/80 flex flex-col justify-between items-center text-center p-5 z-20"
                style={{
                  boxShadow:
                    '0 25px 60px -10px rgba(0,0,0,0.85), inset 0 0 30px rgba(180, 83, 9, 0.15)',
                }}
              >
                {/* Vintage aged parchment texture overlay */}
                <div
                  className="absolute inset-0 opacity-25 pointer-events-none"
                  style={{
                    backgroundImage: `radial-gradient(circle at 50% 50%, #b45309 1px, transparent 1px)`,
                    backgroundSize: '12px 12px',
                  }}
                />

                {/* Ornate Gold Border lines */}
                <div className="absolute inset-2 border border-amber-600/40 rounded pointer-events-none" />
                <div className="absolute inset-3 border border-amber-500/20 rounded pointer-events-none" />

                {/* Auspicious Shloka / Vedic Emblem (Visible both when rolled and unrolled) */}
                <div className="relative z-10 pt-1">
                  <div className="w-9 h-9 mx-auto rounded-full bg-amber-500/10 border border-amber-600/30 flex items-center justify-center text-amber-800 text-lg font-serif">
                    ॐ
                  </div>
                  <p className="font-serif text-[9px] uppercase tracking-[0.25em] text-amber-900 font-semibold mt-1">
                    {weddingData.invitationText.eventTitle}
                  </p>
                </div>

                {/* Revealed Royal Invitation Content */}
                <div className="relative z-10 my-auto py-1">
                  <motion.p
                    animate={
                      phase === 'unrolling' || phase === 'opened'
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.8 }
                    }
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="text-xs text-slate-700 italic tracking-wide max-w-xs mx-auto mb-2 font-serif"
                  >
                    {weddingData.invitationText.greeting}
                  </motion.p>

                  {/* Couple Names (Bride Centric) */}
                  <div className="my-1">
                    <h2 className="font-montecarlo text-4xl sm:text-5xl text-amber-900 leading-tight drop-shadow-sm">
                      {weddingData.bride.name}
                    </h2>
                    <p className="font-serif italic text-amber-700 text-sm my-0.5">with</p>
                    <h2 className="font-montecarlo text-4xl sm:text-5xl text-amber-900 leading-tight drop-shadow-sm">
                      {weddingData.groom.name}
                    </h2>
                  </div>

                  <motion.div
                    animate={
                      phase === 'unrolling' || phase === 'opened'
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 10 }
                    }
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="mt-2"
                  >
                    <div className="inline-block px-4 py-1 rounded-full bg-amber-100 border border-amber-400/60 text-amber-950 font-serif text-xs font-semibold tracking-wider shadow-sm">
                      Pre-Wedding: 16th Oct • Wedding: 18th Oct 2026
                    </div>
                  </motion.div>
                </div>

                {/* Footer Venue Blessing */}
                <div className="relative z-10 pb-1">
                  <p className="text-[10px] text-amber-800 font-serif uppercase tracking-widest font-medium">
                    {weddingData.reception.venue}, {weddingData.reception.location}
                  </p>
                </div>

                {/* Auspicious Wax Ribbon Clasp (Visible when rolled, snaps when opened) */}
                <AnimatePresence>
                  {phase === 'rolled' && (
                    <motion.div
                      key="scroll-wax-seal"
                      exit={{ scale: 1.4, opacity: 0, rotate: 15 }}
                      transition={{ duration: 0.45 }}
                      className="absolute inset-0 z-30 flex items-center justify-center bg-black/10 backdrop-blur-[1px]"
                    >
                      {/* Ribbon Band */}
                      <div className="absolute w-full h-8 bg-gradient-to-r from-red-900 via-rose-700 to-red-900 shadow-lg border-y border-amber-400 flex items-center justify-center">
                        <div className="w-full h-[1px] bg-amber-300/60" />
                      </div>

                      {/* Golden Wax Seal */}
                      <div className="relative z-40 w-16 h-16 rounded-full bg-gradient-to-tr from-amber-700 via-yellow-400 to-amber-500 shadow-2xl p-[3px] border-2 border-yellow-200 animate-pulse">
                        <div className="w-full h-full rounded-full bg-amber-900 flex flex-col items-center justify-center text-amber-200 border border-amber-400/50 shadow-inner">
                          <span className="font-serif font-bold text-lg">शुभ</span>
                          <span className="text-[8px] uppercase tracking-widest text-amber-300/80">
                            VIVAH
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* BOTTOM FINIAL ROD */}
              <motion.div
                initial={{ y: 0 }}
                animate={
                  phase === 'unrolling' || phase === 'opened'
                    ? { y: 160 }
                    : { y: 0 }
                }
                transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-30 w-full flex items-center justify-center"
              >
                {/* Left Finial Knob */}
                <div className="w-7 h-10 rounded-l-full bg-gradient-to-r from-amber-600 via-amber-300 to-amber-500 border border-amber-200/70 shadow-lg shadow-amber-900/50 flex items-center justify-center">
                  <div className="w-2 h-6 rounded-full bg-amber-800/40" />
                </div>
                {/* Carved Rod */}
                <div className="flex-1 h-8 rounded-sm bg-gradient-to-b from-amber-300 via-amber-500 to-amber-700 border-y border-amber-200 shadow-md relative overflow-hidden flex items-center justify-between px-3">
                  <div className="h-[2px] w-full bg-amber-200/60" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-200/40 to-transparent animate-pulse" />
                </div>
                {/* Right Finial Knob */}
                <div className="w-7 h-10 rounded-r-full bg-gradient-to-l from-amber-600 via-amber-300 to-amber-500 border border-amber-200/70 shadow-lg shadow-amber-900/50 flex items-center justify-center">
                  <div className="w-2 h-6 rounded-full bg-amber-800/40" />
                </div>
              </motion.div>
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-6 flex flex-col items-center"
            >
              <button
                onClick={handleUnrollScroll}
                disabled={phase !== 'rolled'}
                className="group flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-slate-950 font-serif font-semibold tracking-wider text-sm shadow-xl shadow-amber-500/25 hover:shadow-amber-400/40 hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <Sparkles className="w-4 h-4 text-slate-950 group-hover:rotate-12 transition-transform" />
                <span>
                  {phase === 'rolled'
                    ? 'Break Seal & Unroll Patrika'
                    : phase === 'breaking-seal'
                    ? 'Breaking Auspicious Seal...'
                    : 'Unrolling Royal Scroll...'}
                </span>
              </button>

              <p className="text-[11px] text-amber-200/60 mt-3 font-serif tracking-widest uppercase">
                Tap anywhere on the scroll to unroll
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollOpening;
