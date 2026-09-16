import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Calendar, Sparkles, Heart } from 'lucide-react';
import weddingData from '../data/weddingData';
import PeacockFeather from './decorations/PeacockFeather';

const Hero = () => {
  const [replayKey, setReplayKey] = useState(0);

  const scrollToInvitation = () => {
    const el = document.querySelector('#invitation');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 pb-12 overflow-hidden bg-wedding-gradient transition-colors duration-500">
      {/* Decorative Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-[var(--color-gold-mid)]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-[var(--color-gradient-start)]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-[var(--color-gold-dark)]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative Peacock Feathers on Screen Corners */}
      <div className="absolute top-12 left-2 md:left-8 opacity-75 pointer-events-none transform -rotate-45">
        <PeacockFeather className="w-20 h-32 md:w-32 md:h-48" />
      </div>
      <div className="absolute top-12 right-2 md:right-8 opacity-75 pointer-events-none transform rotate-45">
        <PeacockFeather className="w-20 h-32 md:w-32 md:h-48" flipped />
      </div>
      <div className="absolute bottom-16 left-4 md:left-12 opacity-60 pointer-events-none transform rotate-12">
        <PeacockFeather className="w-16 h-28 md:w-24 md:h-40" />
      </div>
      <div className="absolute bottom-16 right-4 md:right-12 opacity-60 pointer-events-none transform -rotate-12">
        <PeacockFeather className="w-16 h-28 md:w-24 md:h-40" flipped />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        {/* Top Auspicious Emblem */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full border border-[var(--color-gold-border)] bg-[var(--color-bg-surface)]/80 backdrop-blur-md mb-6 shadow-lg"
        >
          <Sparkles className="w-4 h-4 text-[var(--color-gold-mid)]" />
          <span className="font-garamond text-[var(--color-gold-light)] text-sm md:text-base tracking-[0.25em] uppercase font-semibold">
            Wedding Invitation
          </span>
          <Sparkles className="w-4 h-4 text-[var(--color-gold-mid)]" />
        </motion.div>

        {/* Auspicious Tagline */}
        <motion.p
          initial={{ opacity: 0, letterSpacing: '0.1em' }}
          animate={{ opacity: 1, letterSpacing: '0.2em' }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="font-garamond italic text-[var(--color-gold-light)]/85 text-sm md:text-lg mb-3 uppercase tracking-widest"
        >
          Together with their families
        </motion.p>

        {/* Grand Cinematic Opening Name Animation */}
        <div
          key={replayKey}
          onClick={() => setReplayKey((k) => k + 1)}
          className="my-3 cursor-pointer group select-none"
          title="Click to replay name entrance animation"
        >
          {/* Groom's Name Reveal */}
          <div className="overflow-hidden py-1">
            <motion.h1
              initial={{ opacity: 0, y: 50, filter: 'blur(12px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{
                duration: 1.2,
                delay: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-calligraphy text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-gold-shine drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)] leading-tight tracking-wide"
            >
              {weddingData.groom.name}
            </motion.h1>
          </div>

          {/* Ornate Animated Centerpiece Ampersand */}
          <div className="flex items-center justify-center gap-3 md:gap-6 my-2 md:my-4">
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.6 }}
              className="flex items-center gap-1.5"
            >
              <span className="w-12 sm:w-20 md:w-32 h-[1px] bg-gradient-to-r from-transparent to-[var(--color-gold-mid)]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold-mid)] shadow-[0_0_8px_var(--color-gold-mid)]" />
            </motion.div>

            {/* Glowing Ampersand Badge */}
            <motion.div
              initial={{ scale: 0, rotate: -180, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{
                type: 'spring',
                stiffness: 200,
                damping: 18,
                delay: 0.7,
              }}
              className="relative flex items-center justify-center"
            >
              <span className="font-calligraphy text-3xl sm:text-4xl md:text-5xl text-[var(--color-gold-light)] italic px-2">
                &
              </span>
              {/* Subtle expanding halo ring */}
              <motion.span
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.7, 0.3] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                className="absolute inset-0 rounded-full border border-[var(--color-gold-mid)]/40 pointer-events-none"
              />
            </motion.div>

            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.6 }}
              className="flex items-center gap-1.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold-mid)] shadow-[0_0_8px_var(--color-gold-mid)]" />
              <span className="w-12 sm:w-20 md:w-32 h-[1px] bg-gradient-to-l from-transparent to-[var(--color-gold-mid)]" />
            </motion.div>
          </div>

          {/* Bride's Name Reveal */}
          <div className="overflow-hidden py-1">
            <motion.h1
              initial={{ opacity: 0, y: 50, filter: 'blur(12px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{
                duration: 1.2,
                delay: 0.85,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-calligraphy text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-gold-shine drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)] leading-tight tracking-wide"
            >
              {weddingData.bride.name}
            </motion.h1>
          </div>
        </div>

        {/* Date Display */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mt-6 mb-8 flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-xl border border-[var(--color-gold-border)] bg-[var(--color-bg-surface)]/85 backdrop-blur-md shadow-lg">
            <Calendar className="w-4 h-4 text-[var(--color-gold-mid)]" />
            <p className="font-cinzel text-[var(--color-gold-light)] text-base md:text-xl tracking-wider font-semibold">
              {weddingData.wedding.date}
            </p>
          </div>
          <p className="font-garamond text-[var(--color-text-muted)] text-sm md:text-base mt-2 tracking-[0.2em] uppercase">
            Kasaragod & Kannur, Kerala
          </p>
        </motion.div>

        {/* View Invitation CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3 }}
        >
          <button
            onClick={scrollToInvitation}
            className="group relative inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-[var(--color-gold-mid)] via-[var(--color-gold-light)] to-[var(--color-gold-dark)] text-slate-950 font-cinzel font-bold text-sm md:text-base tracking-widest uppercase shadow-[0_0_25px_var(--color-gold-shadow)] hover:shadow-[0_0_35px_var(--color-gold-shadow)] hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <span>View Invitation</span>
            <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </button>
        </motion.div>
      </div>

      {/* Bottom Scroll Cue Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-70">
        <span className="text-[10px] uppercase font-cinzel tracking-widest text-[var(--color-gold-light)] mb-1">Scroll</span>
        <div className="w-5 h-8 rounded-full border-2 border-[var(--color-gold-border)] flex justify-center p-1">
          <div className="w-1 h-2 bg-[var(--color-gold-mid)] rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
