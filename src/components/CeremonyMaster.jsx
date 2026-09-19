import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/useTheme';
import PalaceGatewayOpening from './openings/PalaceGatewayOpening';
import GiftBoxOpening from './openings/GiftBoxOpening';
import ScrollOpening from './openings/ScrollOpening';
import EnvelopeOpening from './EnvelopeOpening';
import { Sparkles, Check } from 'lucide-react';

export const CeremonyMaster = ({ onOpen }) => {
  const { ceremony, setCeremony, OPENING_CEREMONIES } = useTheme();
  const [internalKey, setInternalKey] = useState(0);

  const handleSelectCeremony = (id) => {
    if (ceremony !== id) {
      setCeremony(id);
      setInternalKey((k) => k + 1);
    }
  };

  return (
    <div className="relative">
      {/* Top Floating Ceremony Switcher Bar - Lets user test and choose any of the 4 ceremonies */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-[60] max-w-[95vw] sm:max-w-xl w-full px-2 pointer-events-auto"
      >
        <div className="bg-[#1f040a]/95 backdrop-blur-md border border-amber-400/50 rounded-full p-1.5 shadow-2xl shadow-black/80 flex items-center justify-between gap-1 overflow-x-auto no-scrollbar">
          <div className="hidden sm:flex items-center gap-1.5 pl-3 pr-2 text-amber-300/80 text-[10px] font-serif uppercase tracking-widest whitespace-nowrap">
            <Sparkles className="w-3 h-3 text-amber-400 animate-spin-slow" />
            <span>Test Ceremonies:</span>
          </div>

          <div className="flex items-center gap-1 w-full sm:w-auto justify-center">
            {OPENING_CEREMONIES.map((c) => {
              const isActive = ceremony === c.id;
              return (
                <button
                  key={c.id}
                  onClick={() => handleSelectCeremony(c.id)}
                  title={c.description}
                  className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-serif transition-all duration-300 whitespace-nowrap ${
                    isActive
                      ? 'bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-slate-950 font-bold shadow-md shadow-amber-500/30 scale-105'
                      : 'text-amber-200/70 hover:text-amber-100 hover:bg-white/5 border border-transparent'
                  }`}
                >
                  <span className="text-sm">{c.emoji}</span>
                  <span className="text-[11px] tracking-wider">{c.shortName}</span>
                  {isActive && <Check className="w-3 h-3 text-slate-950 ml-0.5" />}
                </button>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* Render the Active Ceremony Component with dynamic key so it remounts when switched */}
      <AnimatePresence mode="wait">
        {ceremony === 'gateway' && (
          <PalaceGatewayOpening
            key={`gateway-${internalKey}`}
            onOpen={onOpen}
          />
        )}
        {ceremony === 'giftbox' && (
          <GiftBoxOpening
            key={`giftbox-${internalKey}`}
            onOpen={onOpen}
          />
        )}
        {ceremony === 'scroll' && (
          <ScrollOpening
            key={`scroll-${internalKey}`}
            onOpen={onOpen}
          />
        )}
        {ceremony === 'envelope' && (
          <EnvelopeOpening
            key={`envelope-${internalKey}`}
            onOpen={onOpen}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default CeremonyMaster;
