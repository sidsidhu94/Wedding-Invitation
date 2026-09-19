import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart, Clock } from 'lucide-react';
import weddingData from '../data/weddingData';

/* ─────────────────────────────────────────────────────
   Traditional Kerala Nilavilakku (Brass Oil Lamp) SVG
   ───────────────────────────────────────────────────── */
const Nilavilakku = ({ className = "w-20 h-28" }) => (
  <div className={`relative flex flex-col items-center justify-center ${className}`}>
    {/* Flickering Flame Glow Aura */}
    <motion.div
      animate={{ scale: [1, 1.2, 0.95, 1.15, 1], opacity: [0.75, 0.95, 0.65, 0.9, 0.75] }}
      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      className="absolute -top-3 w-10 h-10 rounded-full bg-amber-400/30 blur-md pointer-events-none"
    />
    <svg viewBox="0 0 100 140" className="w-full h-full filter drop-shadow-[0_4px_10px_rgba(212,175,55,0.5)]" fill="none">
      <defs>
        <linearGradient id="lampGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fef4cf" />
          <stop offset="35%" stopColor="#e1be65" />
          <stop offset="75%" stopColor="#b38b34" />
          <stop offset="100%" stopColor="#fef4cf" />
        </linearGradient>
        <linearGradient id="flameGrad" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#dc2626" />
          <stop offset="40%" stopColor="#f59e0b" />
          <stop offset="80%" stopColor="#fef08a" />
          <stop offset="100%" stopColor="#ffffff" />
        </linearGradient>
      </defs>
      {/* Animated Sacred Flame */}
      <motion.path
        animate={{
          d: [
            "M50 8 C47 16 43 22 46 26 C48 29 52 29 54 26 C57 22 53 16 50 8 Z",
            "M50 6 C46 15 42 22 45 26 C47 30 53 30 55 26 C58 22 54 15 50 6 Z",
            "M50 9 C48 17 44 22 47 26 C49 29 51 29 53 26 C56 22 52 17 50 9 Z"
          ]
        }}
        transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
        fill="url(#flameGrad)"
        filter="drop-shadow(0 0 4px #f59e0b)"
      />
      {/* Wick holder */}
      <path d="M48 25 L52 25 L51 30 L49 30 Z" fill="#78350f" />
      <circle cx="50" cy="31" r="3" fill="url(#lampGold)" />
      {/* Oil Plate */}
      <path d="M30 35 C30 33 70 33 70 35 C68 40 32 40 30 35 Z" fill="url(#lampGold)" stroke="#78350f" strokeWidth="0.5" />
      <ellipse cx="50" cy="34.5" rx="20" ry="2" fill="#fef4cf" opacity="0.6" />
      {/* Upper Column */}
      <path d="M47 37 L53 37 L52 48 L48 48 Z" fill="url(#lampGold)" />
      <circle cx="50" cy="50" r="4.5" fill="url(#lampGold)" stroke="#78350f" strokeWidth="0.5" />
      {/* Stem */}
      <path d="M48 54 L52 54 L53 85 L47 85 Z" fill="url(#lampGold)" />
      <circle cx="50" cy="70" r="3.5" fill="url(#lampGold)" />
      <circle cx="50" cy="86" r="5" fill="url(#lampGold)" stroke="#78350f" strokeWidth="0.5" />
      {/* Lower Flange */}
      <path d="M38 91 C38 89 62 89 62 91 C60 95 40 95 38 91 Z" fill="url(#lampGold)" />
      {/* Pedestal Base */}
      <path d="M46 95 L54 95 L58 118 L42 118 Z" fill="url(#lampGold)" />
      <path d="M26 120 C26 116 74 116 74 120 L76 128 C76 132 24 132 24 128 Z" fill="url(#lampGold)" stroke="#78350f" strokeWidth="0.7" />
      <ellipse cx="50" cy="122" rx="24" ry="3" fill="#fef4cf" opacity="0.5" />
      <ellipse cx="50" cy="128" rx="26" ry="3.5" fill="#78350f" opacity="0.3" />
    </svg>
  </div>
);

/* ═══════════════════════════════════════════════════════
   MAIN COUNTDOWN COMPONENT — 3 LUXURY STYLES + TOGGLE
   ═══════════════════════════════════════════════════════ */
const Countdown = () => {
  const [activeStyle, setActiveStyle] = useState('astrolabe');
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date(weddingData.wedding.rawDate).getTime();
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days, max: 365 },
    { label: 'Hours', value: timeLeft.hours, max: 24 },
    { label: 'Minutes', value: timeLeft.minutes, max: 60 },
    { label: 'Seconds', value: timeLeft.seconds, max: 60 },
  ];

  const styles = [
    { id: 'astrolabe', emoji: '🪔', name: 'Nilavilakku & Astrolabe' },
    { id: 'medallions', emoji: '👑', name: 'Royal Medallions' },
    { id: 'letterpress', emoji: '📜', name: 'Letterpress Plaque' },
  ];

  return (
    <section
      id="countdown"
      className="py-20 md:py-28 px-4 bg-gradient-to-b from-[#180308] via-[#2a060f] to-[#180308] border-y-2 border-amber-400/40 relative transition-colors duration-500 overflow-hidden"
    >
      {/* Ambient Gold Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 text-amber-300 text-xs sm:text-sm font-cinzel tracking-[0.25em] uppercase mb-2">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Auspicious Vedic Horologue</span>
            <Sparkles className="w-4 h-4 text-amber-400" />
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-extrabold text-gold-gradient uppercase tracking-widest drop-shadow-md">
            Countdown to Muhurtham
          </h2>
          <p className="font-garamond text-amber-100/85 text-base sm:text-lg italic mt-2">
            Sunday, 18th October 2026 • 11:25 AM to 12:25 PM IST
          </p>
          <div className="w-28 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mt-4 shadow-[0_0_8px_rgba(225,190,101,0.6)]" />
        </motion.div>

        {/* ── INTERACTIVE 3-STYLE TOGGLE ── */}
        <div className="inline-flex items-center p-1.5 rounded-full bg-black/60 border border-amber-400/50 backdrop-blur-md shadow-xl mb-12 max-w-full overflow-x-auto">
          {styles.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveStyle(s.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full font-cinzel text-xs font-bold tracking-wider transition-all duration-300 cursor-pointer shrink-0 ${
                activeStyle === s.id
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-md shadow-amber-500/30'
                  : 'text-amber-200/80 hover:text-white hover:bg-white/5'
              }`}
            >
              <span>{s.emoji}</span>
              <span className="hidden sm:inline">{s.name}</span>
            </button>
          ))}
        </div>

        {/* ── ANIMATED STYLE SWITCHER ── */}
        <AnimatePresence mode="wait">

          {/* ═════════════════════════════════════════════════════
             STYLE 1 : SACRED NILAVILAKKU & ASTROLABE TIMEPIECE
             ═════════════════════════════════════════════════════ */}
          {activeStyle === 'astrolabe' && (
            <motion.div
              key="style-astrolabe"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.45 }}
              className="flex flex-col items-center justify-center"
            >
              {/* Central Nilavilakku */}
              <div className="mb-6 flex flex-col items-center">
                <Nilavilakku className="w-20 h-28 sm:w-24 sm:h-32" />
                <span className="font-garamond italic text-xs sm:text-sm text-amber-300/90 tracking-widest mt-2 font-medium">
                  Auspicious Divine Flame
                </span>
              </div>

              {/* 4 Vedic Astrolabe Dials */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl w-full mx-auto">
                {timeUnits.map((unit, index) => {
                  const circumference = 2 * Math.PI * 46;
                  const progress = (unit.value % unit.max) / unit.max;
                  const strokeDashoffset = circumference - progress * circumference;

                  return (
                    <motion.div
                      key={unit.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="relative flex flex-col items-center justify-center group"
                    >
                      <div className="relative w-36 h-36 sm:w-44 sm:h-44 flex items-center justify-center">
                        {/* Glow halo */}
                        <div className="absolute inset-2 rounded-full bg-amber-500/10 blur-md group-hover:bg-amber-400/25 transition-all" />

                        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
                          <defs>
                            <linearGradient id={`astroGold-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#fef4cf" />
                              <stop offset="35%" stopColor="#e1be65" />
                              <stop offset="70%" stopColor="#b38b34" />
                              <stop offset="100%" stopColor="#fef4cf" />
                            </linearGradient>
                          </defs>
                          {/* Sunburst Star Marks */}
                          <circle cx="60" cy="60" r="55" fill="none" stroke="rgba(225,190,101,0.35)" strokeWidth="1.5" strokeDasharray="2 6" />
                          {/* Astrolabe Bevel Border */}
                          <circle cx="60" cy="60" r="50" fill="none" stroke="rgba(225,190,101,0.5)" strokeWidth="1.2" />
                          {/* Base Track */}
                          <circle cx="60" cy="60" r="46" fill="#1c0409" stroke="rgba(225,190,101,0.2)" strokeWidth="3.5" />
                          {/* Active Progress Arc */}
                          <circle
                            cx="60" cy="60" r="46" fill="none"
                            stroke={`url(#astroGold-${index})`}
                            strokeWidth="3.5"
                            strokeDasharray={circumference}
                            strokeDashoffset={strokeDashoffset}
                            strokeLinecap="round"
                            className="transition-all duration-1000 ease-linear"
                          />
                          {/* Inner Disc */}
                          <circle cx="60" cy="60" r="35" fill="rgba(46,7,16,0.95)" stroke="rgba(225,190,101,0.45)" strokeWidth="1" />
                        </svg>

                        {/* Orbiting Spark (Seconds only) */}
                        {unit.label === 'Seconds' && (
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 60, ease: 'linear' }}
                            className="absolute inset-0 pointer-events-none flex items-start justify-center"
                          >
                            <span className="w-2.5 h-2.5 rounded-full bg-amber-300 shadow-[0_0_10px_#fef08a] -mt-1" />
                          </motion.div>
                        )}

                        {/* Value & Label */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                          <div className="font-cinzel font-black text-3xl sm:text-4xl text-gold-gradient drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                            {String(unit.value).padStart(2, '0')}
                          </div>
                          <div className="font-cinzel text-[10px] sm:text-xs text-amber-200 tracking-[0.2em] uppercase font-bold mt-0.5">
                            {unit.label}
                          </div>
                        </div>

                        {/* Jewel Ornaments */}
                        <div className="absolute top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-amber-300 shadow-[0_0_8px_rgba(225,190,101,0.8)]" />
                        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-amber-400" />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* ═════════════════════════════════════════════════════
             STYLE 2 : ROYAL FINE JEWELLERY MINTED MEDALLIONS
             ═════════════════════════════════════════════════════ */}
          {activeStyle === 'medallions' && (
            <motion.div
              key="style-medallions"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.45 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto"
            >
              {timeUnits.map((unit, index) => (
                <motion.div
                  key={unit.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="relative group rounded-3xl p-5 sm:p-7 bg-gradient-to-b from-[#380813] via-[#2b060f] to-[#1a0308] border-2 border-amber-400/70 shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_25px_rgba(225,190,101,0.2)] flex flex-col items-center justify-center hover:scale-105 transition-all duration-300 overflow-hidden"
                >
                  {/* Guilloché Pattern */}
                  <div
                    className="absolute inset-0 opacity-15 pointer-events-none"
                    style={{
                      background:
                        'radial-gradient(circle, transparent 20%, #e1be65 20%, #e1be65 21%, transparent 21%), radial-gradient(circle, transparent 40%, #e1be65 40%, #e1be65 41%, transparent 41%)',
                      backgroundSize: '16px 16px',
                    }}
                  />

                  {/* 3D Gold Medallion Ring */}
                  <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full p-2 bg-gradient-to-br from-[#fef4cf] via-[#e1be65] to-[#855e16] shadow-[0_10px_25px_rgba(0,0,0,0.8),inset_0_2px_4px_rgba(255,255,255,0.6)] flex items-center justify-center">
                    {/* Beaded Rim */}
                    <div className="absolute inset-1.5 rounded-full border-2 border-dashed border-amber-950/40" />

                    {/* Dark Royal Core */}
                    <div className="w-full h-full rounded-full bg-gradient-to-b from-[#24040a] to-[#120104] border border-amber-400/50 flex flex-col items-center justify-center shadow-inner">
                      <span className="font-cinzel font-black text-3xl sm:text-4xl text-gold-gradient drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                        {String(unit.value).padStart(2, '0')}
                      </span>
                    </div>

                    {/* Glowing Pip (Seconds) */}
                    {unit.label === 'Seconds' && (
                      <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-amber-200 border-2 border-amber-500 shadow-[0_0_12px_#fef08a] animate-ping" />
                    )}
                  </div>

                  {/* Label Pill */}
                  <div className="mt-4 px-4 py-1 rounded-full bg-amber-400/15 border border-amber-300/40 text-amber-200 font-cinzel text-xs uppercase tracking-[0.25em] font-extrabold shadow-sm">
                    {unit.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* ═════════════════════════════════════════════════════
             STYLE 3 : GILDED LETTERPRESS RIBBON & CALENDAR PLAQUE
             ═════════════════════════════════════════════════════ */}
          {activeStyle === 'letterpress' && (
            <motion.div
              key="style-letterpress"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.45 }}
              className="relative max-w-3xl mx-auto rounded-3xl p-6 sm:p-10 bg-gradient-to-b from-[#fdfbf7] via-[#faf4ea] to-[#f4ebe0] border-[3px] border-amber-500/70 shadow-[0_30px_70px_rgba(0,0,0,0.95)] text-slate-900 overflow-hidden"
            >
              {/* Kasavu Gold Ribbon */}
              <div className="absolute top-0 inset-x-0 h-3 bg-gradient-to-r from-amber-600 via-amber-300 to-amber-600 border-b border-amber-700/40" />

              {/* Inner Dashed Border */}
              <div className="absolute inset-3 border-2 border-dashed border-amber-800/30 rounded-2xl pointer-events-none" />

              {/* Top Header */}
              <div className="flex items-center justify-between text-amber-800/60 pb-4 border-b border-amber-700/25">
                <span className="font-cinzel text-[11px] uppercase tracking-[0.2em] font-bold text-amber-900">
                  ✦ Sacred Muhurtham Calendar ✦
                </span>
                <Clock className="w-4 h-4 text-amber-800" />
              </div>

              {/* 4 Mechanical Flip-Card Plaques */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-6">
                {timeUnits.map((unit, index) => (
                  <motion.div
                    key={unit.label}
                    initial={{ opacity: 0, rotateX: -20 }}
                    animate={{ opacity: 1, rotateX: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="relative rounded-2xl p-4 sm:p-5 bg-gradient-to-b from-[#24040a] via-[#1a0207] to-[#120104] border-2 border-amber-500/60 shadow-xl flex flex-col items-center justify-center text-center overflow-hidden"
                  >
                    {/* Split Crease */}
                    <div className="absolute inset-x-0 top-1/2 h-[1px] bg-amber-400/30 z-10 pointer-events-none" />

                    {/* Top Rivets */}
                    <div className="absolute top-1.5 left-2 w-1.5 h-1.5 rounded-full bg-amber-400/70" />
                    <div className="absolute top-1.5 right-2 w-1.5 h-1.5 rounded-full bg-amber-400/70" />

                    <span className="font-cinzel font-black text-4xl sm:text-5xl text-gold-gradient drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] py-1">
                      {String(unit.value).padStart(2, '0')}
                    </span>
                    <span className="font-cinzel text-[10px] sm:text-xs text-amber-300/90 tracking-[0.25em] uppercase font-bold mt-1">
                      {unit.label}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Footer */}
              <div className="mt-6 pt-4 border-t border-amber-700/20 text-center">
                <p className="font-garamond italic text-amber-950 font-bold text-sm sm:text-base">
                  Karakkakavu Auditorium, Kalikkadavu • Sunday, 18th October 2026
                </p>
              </div>
            </motion.div>
          )}

        </AnimatePresence>

        {/* Footer Note */}
        <div className="mt-12 flex items-center justify-center gap-2.5 text-amber-200/90 font-garamond italic text-base sm:text-lg">
          <Heart className="w-4 h-4 text-amber-400 fill-amber-400" />
          <span>Counting down every sacred second until the Thali Kettu Muhurtham</span>
          <Heart className="w-4 h-4 text-amber-400 fill-amber-400" />
        </div>

      </div>
    </section>
  );
};

export default Countdown;
