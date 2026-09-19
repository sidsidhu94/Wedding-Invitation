import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Gift } from 'lucide-react';
import confetti from 'canvas-confetti';
import weddingData from '../../data/weddingData';
import GaneshaHeader from '../decorations/GaneshaHeader';

export const GiftBoxOpening = ({ onOpen, onStartOpen }) => {
  // Phase: 'closed' -> 'untying' -> 'lid-opening' -> 'card-rising' -> 'opened'
  const [phase, setPhase] = useState('closed');

  const handleOpenBox = () => {
    if (phase !== 'closed') return;

    // Synchronously start music playback right on user click gesture
    if (typeof window !== 'undefined' && window.__playWeddingMusic) {
      window.__playWeddingMusic();
    }
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('play-wedding-music'));
    }
    if (onStartOpen) onStartOpen();

    setPhase('untying');

    // Auspicious Rose Gold & Molten Gold Confetti Shower
    setTimeout(() => {
      confetti({
        particleCount: 100,
        spread: 85,
        origin: { y: 0.52 },
        colors: ['#dfbd69', '#fef0cb', '#e5a882', '#be123c', '#9f1239', '#ffffff'],
      });
      setPhase('lid-opening');
    }, 450);

    setTimeout(() => {
      setPhase('card-rising');
    }, 1100);

    setTimeout(() => {
      setPhase('opened');
      if (onOpen) onOpen();
    }, 2200);
  };

  return (
    <AnimatePresence>
      {phase !== 'opened' && (
        <motion.div
          key="giftbox-ceremony-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1.1, ease: 'easeInOut' } }}
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden select-none bg-[#120206]"
        >
          {/* Ambient Royal Crimson Velvet Background */}
          <div className="absolute inset-0 bg-gradient-radial from-[#380813] via-[#1f040a] to-[#0a0104] opacity-95" />

          {/* Subtly moving warm gold and ruby aura */}
          <motion.div
            animate={{
              scale: [1, 1.18, 1],
              opacity: [0.35, 0.65, 0.35],
            }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute w-[620px] h-[620px] rounded-full bg-gradient-to-tr from-rose-600/25 via-amber-500/20 to-transparent blur-3xl pointer-events-none"
          />

          {/* 3D Scene Wrapper */}
          <div className="relative z-10 flex flex-col items-center justify-center p-4 max-w-lg w-full [perspective:1400px]">
            {/* Header Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-center mb-5"
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-300/30 text-amber-300 text-xs uppercase tracking-[0.3em] font-cinzel shadow-inner">
                <Gift className="w-3.5 h-3.5 text-amber-300" />
                Royal Keepsake Gift Box
              </span>
            </motion.div>

            {/* Rigid Box Presentation Container */}
            <div
              className="relative w-full max-w-[420px] h-[450px] sm:h-[470px] flex items-center justify-center cursor-pointer group"
              onClick={handleOpenBox}
            >
              {/* Box Base (Deep Royal Burgundy Velvet Interior) */}
              <div
                className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#2a050d] via-[#1f040a] to-[#140206] border-2 border-amber-400/50 shadow-2xl overflow-hidden"
                style={{
                  boxShadow: '0 30px 60px -15px rgba(0,0,0,0.95), inset 0 2px 25px rgba(0,0,0,0.85)',
                }}
              >
                {/* Velvet fabric weave texture */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `radial-gradient(circle at 50% 50%, #9f1239 1px, transparent 1px)`,
                    backgroundSize: '8px 8px',
                  }}
                />

                {/* Satin Lining Border */}
                <div className="absolute inset-3 rounded-xl border border-amber-400/30 pointer-events-none" />
                <div className="absolute inset-4 rounded-lg border border-amber-300/20 pointer-events-none" />
              </div>

              {/* Inside Wedding Card (Rises up when lid opens) */}
              <motion.div
                initial={{ y: 20, scale: 0.94, opacity: 0 }}
                animate={
                  phase === 'card-rising' || phase === 'opened'
                    ? { y: -45, scale: 1, opacity: 1 }
                    : phase === 'lid-opening'
                    ? { y: 0, scale: 0.96, opacity: 0.9 }
                    : { y: 20, scale: 0.94, opacity: 0 }
                }
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="absolute w-[88%] h-[84%] rounded-xl bg-gradient-to-b from-[#fdfbf7] via-[#fcf4f6] to-[#f7e9ec] p-6 text-slate-900 shadow-2xl border-2 border-amber-400 flex flex-col items-center justify-between z-20 text-center"
                style={{
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 30px rgba(223, 189, 105, 0.3)',
                }}
              >
                {/* Gold corner ornaments */}
                <div className="absolute top-2 left-2 w-5 h-5 border-t-2 border-l-2 border-amber-700/80" />
                <div className="absolute top-2 right-2 w-5 h-5 border-t-2 border-r-2 border-amber-700/80" />
                <div className="absolute bottom-2 left-2 w-5 h-5 border-b-2 border-l-2 border-amber-700/80" />
                <div className="absolute bottom-2 right-2 w-5 h-5 border-b-2 border-r-2 border-amber-700/80" />

                {/* Card Inner Border */}
                <div className="absolute inset-2 border border-amber-600/30 rounded-lg pointer-events-none" />

                {/* Top Auspicious Ganesha Emblem */}
                <div className="pt-1">
                  <GaneshaHeader className="w-10 h-10 mx-auto text-amber-700" />
                  <p className="text-[10px] tracking-[0.25em] uppercase font-cinzel text-amber-900 font-bold mt-1">
                    {weddingData.invitationText.eventTitle}
                  </p>
                  <p className="text-[10px] tracking-wide text-stone-600 italic font-serif">
                    {weddingData.invitationText.greeting}
                  </p>
                </div>

                {/* Couple Names (Traditional Pinyon Script - Bride Centric) */}
                <div className="my-auto py-1">
                  <h2 className="font-pinyon text-4xl sm:text-5xl text-amber-950 leading-tight">
                    {weddingData.bride.name}
                  </h2>
                  <div className="flex items-center justify-center gap-2 my-0.5 text-amber-800">
                    <div className="h-[1px] w-10 bg-gradient-to-r from-transparent via-amber-700 to-transparent" />
                    <span className="font-serif italic text-xs">with</span>
                    <div className="h-[1px] w-10 bg-gradient-to-r from-transparent via-amber-700 to-transparent" />
                  </div>
                  <h2 className="font-pinyon text-4xl sm:text-5xl text-amber-950 leading-tight">
                    {weddingData.groom.name}
                  </h2>
                </div>

                {/* Date & Muhurtham Details */}
                <div className="mb-1 text-center space-y-1">
                  <div className="inline-block px-3.5 py-1 rounded-full bg-amber-100/90 border border-amber-300/80 text-amber-950 font-cinzel text-[11px] font-semibold tracking-wider">
                    {weddingData.reception.day}, 16th October 2026 • {weddingData.reception.time}
                  </div>
                  <p className="text-[10px] text-stone-600 font-serif tracking-wider uppercase">
                    {weddingData.reception.venue}, {weddingData.reception.location}
                  </p>
                  <p className="text-[9px] font-cinzel text-amber-800 font-semibold tracking-widest uppercase pt-0.5">
                    ✦ {weddingData.blessingNote} ✦
                  </p>
                </div>
              </motion.div>

              {/* Box 3D Hardcover Lid (Imperial Crimson Velvet & Gold) */}
              <motion.div
                initial={{ rotateX: 0, y: 0, opacity: 1 }}
                animate={
                  phase === 'lid-opening' || phase === 'card-rising' || phase === 'opened'
                    ? {
                        rotateX: -115,
                        y: -130,
                        opacity: [1, 1, 0],
                        transformOrigin: 'top center',
                      }
                    : {
                        rotateX: 0,
                        y: 0,
                        opacity: 1,
                        transformOrigin: 'top center',
                      }
                }
                transition={{
                  duration: 1.2,
                  ease: [0.25, 1, 0.5, 1],
                  opacity: { delay: 0.6, duration: 0.5 },
                }}
                className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#380813] via-[#2d0710] to-[#1a0308] border-2 border-amber-400/80 shadow-2xl z-30 flex flex-col items-center justify-center p-6 overflow-hidden"
                style={{
                  boxShadow:
                    '0 35px 70px -15px rgba(0,0,0,0.95), 0 0 40px rgba(223, 189, 105, 0.3)',
                }}
              >
                {/* Gold embossed filigree border on lid */}
                <div className="absolute inset-3 rounded-xl border-2 border-amber-400/50 pointer-events-none" />
                <div className="absolute inset-5 rounded-lg border border-amber-300/30 pointer-events-none" />

                {/* Corner filigree accents */}
                <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-amber-400 pointer-events-none" />
                <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-amber-400 pointer-events-none" />
                <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-amber-400 pointer-events-none" />
                <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-amber-400 pointer-events-none" />

                {/* Monogram Seal in Center */}
                <div className="relative z-10 flex flex-col items-center justify-center text-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-amber-600 via-yellow-400 to-amber-200 p-[2px] shadow-2xl mb-3">
                    <div className="w-full h-full rounded-full bg-[#20050c] flex items-center justify-center border border-amber-400/50">
                      <span className="font-pinyon font-bold text-3xl tracking-widest text-amber-200">
                        A & S
                      </span>
                    </div>
                  </div>

                  <p className="font-cinzel tracking-[0.25em] text-[11px] uppercase text-amber-300/90 font-semibold">
                    {weddingData.invitationText.eventTitle}
                  </p>
                  <p className="font-pinyon text-3xl sm:text-4xl text-amber-200 mt-1">
                    {weddingData.bride.shortName} & {weddingData.groom.shortName}
                  </p>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-amber-300/80 mt-1.5 font-cinzel">
                    16th & 18th October 2026
                  </p>
                </div>

                {/* Silk Ribbon Band Horizontal (Royal Crimson & Gold Trim) */}
                <motion.div
                  animate={
                    phase === 'untying' || phase === 'lid-opening' || phase === 'card-rising'
                      ? { scaleX: 0, opacity: 0 }
                      : { scaleX: 1, opacity: 1 }
                  }
                  transition={{ duration: 0.6 }}
                  className="absolute left-0 right-0 h-11 bg-gradient-to-r from-red-950 via-rose-700 to-red-950 opacity-95 shadow-md border-y-2 border-amber-400 flex items-center justify-center pointer-events-none"
                >
                  <div className="w-full h-[2px] bg-amber-300/70" />
                </motion.div>

                {/* Silk Ribbon Band Vertical (Royal Crimson & Gold Trim) */}
                <motion.div
                  animate={
                    phase === 'untying' || phase === 'lid-opening' || phase === 'card-rising'
                      ? { scaleY: 0, opacity: 0 }
                      : { scaleY: 1, opacity: 1 }
                  }
                  transition={{ duration: 0.6 }}
                  className="absolute top-0 bottom-0 w-11 bg-gradient-to-b from-red-950 via-rose-700 to-red-950 opacity-95 shadow-md border-x-2 border-amber-400 flex items-center justify-center pointer-events-none"
                >
                  <div className="h-full w-[2px] bg-amber-300/70" />
                </motion.div>

                {/* Satin Bow Knot in Center (Interactive) */}
                <motion.div
                  animate={
                    phase === 'closed'
                      ? { scale: [1, 1.06, 1] }
                      : { scale: [1, 1.4, 0], opacity: [1, 1, 0] }
                  }
                  transition={{
                    scale: phase === 'closed' ? { duration: 2, repeat: Infinity } : { duration: 0.5 },
                  }}
                  className="absolute z-20 w-24 h-24 flex items-center justify-center pointer-events-none"
                >
                  {/* SVG Handcrafted Silk Bow Knot in Royal Crimson & Gold */}
                  <svg viewBox="0 0 100 100" className="w-24 h-24 filter drop-shadow-2xl">
                    <defs>
                      <linearGradient id="crimsonRibbon" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#4c0519" />
                        <stop offset="30%" stopColor="#be123c" />
                        <stop offset="60%" stopColor="#e11d48" />
                        <stop offset="100%" stopColor="#881337" />
                      </linearGradient>
                      <linearGradient id="goldTrim" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#b45309" />
                        <stop offset="50%" stopColor="#fef08a" />
                        <stop offset="100%" stopColor="#d97706" />
                      </linearGradient>
                    </defs>
                    {/* Left loop */}
                    <path
                      d="M 50,50 C 35,25 10,30 20,52 C 28,68 45,55 50,50 Z"
                      fill="url(#crimsonRibbon)"
                      stroke="url(#goldTrim)"
                      strokeWidth="1.8"
                    />
                    {/* Right loop */}
                    <path
                      d="M 50,50 C 65,25 90,30 80,52 C 72,68 55,55 50,50 Z"
                      fill="url(#crimsonRibbon)"
                      stroke="url(#goldTrim)"
                      strokeWidth="1.8"
                    />
                    {/* Tails */}
                    <path
                      d="M 46,54 C 38,70 30,85 24,92 C 30,88 38,80 48,58 Z"
                      fill="url(#crimsonRibbon)"
                      stroke="url(#goldTrim)"
                      strokeWidth="1"
                      opacity="0.95"
                    />
                    <path
                      d="M 54,54 C 62,70 70,85 76,92 C 70,88 62,80 52,58 Z"
                      fill="url(#crimsonRibbon)"
                      stroke="url(#goldTrim)"
                      strokeWidth="1"
                      opacity="0.95"
                    />
                    {/* Center rosette knot */}
                    <circle cx="50" cy="50" r="11" fill="url(#crimsonRibbon)" stroke="url(#goldTrim)" strokeWidth="2" />
                    <circle cx="50" cy="50" r="6" fill="#fef08a" opacity="0.8" />
                  </svg>
                </motion.div>
              </motion.div>
            </div>

            {/* Hint & CTA button */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-6 flex flex-col items-center"
            >
              <button
                onClick={handleOpenBox}
                disabled={phase !== 'closed'}
                className="group flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-slate-950 font-cinzel font-bold tracking-wider text-sm shadow-xl shadow-amber-500/25 hover:shadow-amber-400/40 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-slate-950 group-hover:rotate-12 transition-transform" />
                <span>
                  {phase === 'closed'
                    ? 'Pull Ribbon & Open Box'
                    : phase === 'untying'
                    ? 'Untying Satin Ribbon...'
                    : 'Unveiling Invitation...'}
                </span>
              </button>

              <p className="text-[11px] text-amber-200/70 mt-3 font-cinzel tracking-widest uppercase">
                Tap anywhere on the gift box to open
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GiftBoxOpening;
