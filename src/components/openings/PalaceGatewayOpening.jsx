import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, Volume2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import weddingData from '../../data/weddingData';

// Cascading petals generator
const GATE_PETALS = Array.from({ length: 26 }).map((_, i) => ({
  id: i,
  left: (i * 3.8 + ((i * 19) % 11)) % 100,
  duration: 3.8 + ((i * 3) % 3.5),
  delay: ((i * 7) % 12) * 0.08,
  size: 14 + ((i * 4) % 12),
  drift: ((i * 11) % 20) - 10,
  rotateEnd: (i * 85) % 360,
  type: i % 3 === 0 ? 'rose' : i % 3 === 1 ? 'jasmine' : 'gold',
}));

const GatePetalsShower = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden z-40">
    {GATE_PETALS.map((p) => (
      <motion.div
        key={p.id}
        initial={{ y: -30, x: `${p.left}vw`, opacity: 0, rotate: 0 }}
        animate={{
          y: '110vh',
          x: `${p.left + p.drift}vw`,
          opacity: [0, 0.95, 0.95, 0],
          rotate: p.rotateEnd,
        }}
        transition={{ duration: p.duration, delay: p.delay, ease: 'easeOut' }}
        className="absolute top-0 pointer-events-none"
        style={{ width: p.size, height: p.size }}
      >
        {p.type === 'jasmine' ? (
          <div
            className="w-full h-full rounded-full bg-gradient-to-br from-white via-rose-50 to-amber-50 shadow-sm border border-amber-100/60"
            style={{ borderRadius: '60% 40% 70% 30% / 50% 60% 40% 50%' }}
          />
        ) : p.type === 'rose' ? (
          <div
            className="w-full h-full rounded-full bg-gradient-to-br from-rose-500 via-rose-700 to-amber-950 shadow-sm border border-rose-300/30"
            style={{ borderRadius: '55% 45% 65% 35% / 60% 40% 60% 40%' }}
          />
        ) : (
          <div
            className="w-full h-full rounded-full bg-gradient-to-tr from-amber-300 via-yellow-200 to-amber-500 shadow-sm"
            style={{ borderRadius: '70% 30% 60% 40% / 60% 40% 70% 30%' }}
          />
        )}
      </motion.div>
    ))}
  </div>
);

const PalaceGatewayOpening = ({ onOpen }) => {
  // Phase: 'locked' -> 'unlocking' -> 'doors-open' -> 'opened'
  const [phase, setPhase] = useState('locked');
  const [showPetals, setShowPetals] = useState(false);

  const handleOpenGates = () => {
    if (phase !== 'locked') return;

    setPhase('unlocking');
    setShowPetals(true);

    // Auspicious Celestial & Gold Confetti Burst
    confetti({
      particleCount: 100,
      spread: 85,
      origin: { y: 0.52 },
      colors: ['#dfbd69', '#fef4cf', '#38bdf8', '#e0c274', '#ffffff', '#f59e0b'],
    });

    // Step 2: Swing doors outward in 3D
    setTimeout(() => {
      setPhase('doors-open');
    }, 400);

    // Step 3: Complete ceremony, trigger audio fade-in & reveal celebration
    setTimeout(() => {
      setPhase('opened');
      if (onOpen) onOpen();
    }, 2000);
  };

  const handleInstantSkip = () => {
    setPhase('opened');
    if (onOpen) onOpen();
  };

  return (
    <AnimatePresence>
      {phase !== 'opened' && (
        <motion.div
          key="palace-gateway-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1.2, ease: 'easeInOut' } }}
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden select-none bg-[#030712]"
        >
          {/* Ambient Royal Courtyard Illumination */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(223,189,105,0.22)_0%,_rgba(6,11,23,0.85)_55%,_#020409_100%)] pointer-events-none" />

          {/* Starlight Constellations Background */}
          <div className="absolute inset-0 bg-[radial-gradient(#dfbd69_1px,transparent_1px)] [background-size:36px_36px] opacity-15 pointer-events-none" />

          {/* Golden Petal Cascade */}
          {showPetals && <GatePetalsShower />}

          {/* Top Ceremony Bar & Skip Button */}
          <div className="absolute top-6 left-6 right-6 z-40 flex items-center justify-between pointer-events-auto">
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-950/70 border border-amber-400/40 backdrop-blur-md text-amber-200 text-xs font-cinzel shadow-lg">
              <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
              <span>Royal Palace Gateway • Grand Entrance</span>
            </div>

            <button
              onClick={handleInstantSkip}
              className="group flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-slate-950/70 hover:bg-slate-900 border border-amber-400/40 text-stone-200 hover:text-amber-300 font-cinzel text-xs tracking-wider transition-all cursor-pointer backdrop-blur-md shadow-lg"
            >
              <span>Skip to Invite</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* MAIN 3D PALACE GATEWAY STAGE */}
          <div
            className="relative z-30 w-full max-w-2xl px-4 flex flex-col items-center justify-center"
            style={{ perspective: 1400 }}
          >
            {/* Grand Mandap Gateway Frame */}
            <div className="relative w-full max-w-[500px] h-[580px] sm:h-[620px] rounded-t-full border-4 border-[#dfbd69] shadow-[0_0_80px_rgba(223,189,105,0.35)] overflow-hidden bg-gradient-to-b from-[#0e1b38] via-[#091124] to-[#040814] flex items-center justify-center">
              
              {/* Backlit Palace Hallway Interior (Revealed when gates swing open) */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 bg-[radial-gradient(ellipse_at_center,_#1c356b_0%,_#0b162f_60%,_#050c1b_100%)]">
                <div className="w-20 h-20 rounded-full bg-amber-400/10 border border-amber-400/40 flex items-center justify-center mb-3 shadow-[0_0_30px_rgba(223,189,105,0.4)]">
                  <span className="font-calligraphy text-4xl text-amber-200 font-bold">A&S</span>
                </div>
                <h3 className="font-cinzel text-xs tracking-[0.3em] uppercase text-amber-300 font-semibold mb-2">
                  {weddingData.invitationText.eventTitle}
                </h3>
                <h2 className="font-calligraphy text-4xl sm:text-5xl text-gold-shine font-bold">
                  {weddingData.bride.shortName} & {weddingData.groom.shortName}
                </h2>
                <p className="font-garamond text-amber-100/80 text-sm mt-3">
                  Pre-Wedding Reception: 16th Oct • Wedding: 18th Oct 2026
                </p>
                <div className="mt-4 flex items-center gap-1.5 text-xs text-amber-400 font-cinzel animate-pulse">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Entering The Royal Hall...</span>
                </div>
              </div>

              {/* 3D DOUBLE PALACE DOORS */}
              <div className="absolute inset-0 flex">
                
                {/* LEFT PALACE DOOR */}
                <motion.div
                  initial={{ rotateY: 0 }}
                  animate={
                    phase === 'doors-open'
                      ? { rotateY: -110, opacity: 0.25 }
                      : phase === 'unlocking'
                      ? { rotateY: -8 }
                      : { rotateY: 0 }
                  }
                  transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
                  style={{
                    transformOrigin: 'left center',
                    transformStyle: 'preserve-3d',
                  }}
                  className="w-1/2 h-full bg-gradient-to-r from-[#172b54] via-[#0f1d3c] to-[#0a142c] border-r-2 border-[#dfbd69] relative shadow-2xl overflow-hidden"
                >
                  {/* Laser-Carved Jali Lattice Pattern */}
                  <div
                    className="absolute inset-4 border-2 border-amber-400/40 rounded-tl-full opacity-60 pointer-events-none"
                    style={{
                      backgroundImage:
                        'radial-gradient(#dfbd69 1.5px, transparent 1.5px), radial-gradient(#dfbd69 1.5px, transparent 1.5px)',
                      backgroundSize: '20px 20px',
                      backgroundPosition: '0 0, 10px 10px',
                    }}
                  />
                  
                  {/* Ornate Wood Paneling Carvings */}
                  <div className="absolute inset-6 border border-amber-400/30 rounded-tl-full pointer-events-none" />
                  <div className="absolute bottom-8 left-6 right-4 h-32 border border-amber-400/30 rounded-lg pointer-events-none bg-amber-500/5" />
                  
                  {/* Left Antique Brass Studs */}
                  <div className="absolute top-1/4 right-3 flex flex-col gap-8">
                    {[1, 2, 3, 4].map((n) => (
                      <span
                        key={n}
                        className="w-3 h-3 rounded-full bg-gradient-to-br from-yellow-200 via-amber-400 to-amber-700 shadow-md border border-amber-200/50"
                      />
                    ))}
                  </div>

                  {/* Left Latch Half */}
                  <div className="absolute top-1/2 -translate-y-1/2 right-0 w-8 h-20 rounded-l-2xl bg-gradient-to-l from-amber-400 via-yellow-500 to-amber-700 border-l border-y border-amber-200 shadow-lg flex items-center justify-end pr-1" />
                </motion.div>

                {/* RIGHT PALACE DOOR */}
                <motion.div
                  initial={{ rotateY: 0 }}
                  animate={
                    phase === 'doors-open'
                      ? { rotateY: 110, opacity: 0.25 }
                      : phase === 'unlocking'
                      ? { rotateY: 8 }
                      : { rotateY: 0 }
                  }
                  transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
                  style={{
                    transformOrigin: 'right center',
                    transformStyle: 'preserve-3d',
                  }}
                  className="w-1/2 h-full bg-gradient-to-l from-[#172b54] via-[#0f1d3c] to-[#0a142c] border-l-2 border-[#dfbd69] relative shadow-2xl overflow-hidden"
                >
                  {/* Laser-Carved Jali Lattice Pattern */}
                  <div
                    className="absolute inset-4 border-2 border-amber-400/40 rounded-tr-full opacity-60 pointer-events-none"
                    style={{
                      backgroundImage:
                        'radial-gradient(#dfbd69 1.5px, transparent 1.5px), radial-gradient(#dfbd69 1.5px, transparent 1.5px)',
                      backgroundSize: '20px 20px',
                      backgroundPosition: '0 0, 10px 10px',
                    }}
                  />

                  {/* Ornate Wood Paneling Carvings */}
                  <div className="absolute inset-6 border border-amber-400/30 rounded-tr-full pointer-events-none" />
                  <div className="absolute bottom-8 right-6 left-4 h-32 border border-amber-400/30 rounded-lg pointer-events-none bg-amber-500/5" />

                  {/* Right Antique Brass Studs */}
                  <div className="absolute top-1/4 left-3 flex flex-col gap-8">
                    {[1, 2, 3, 4].map((n) => (
                      <span
                        key={n}
                        className="w-3 h-3 rounded-full bg-gradient-to-br from-yellow-200 via-amber-400 to-amber-700 shadow-md border border-amber-200/50"
                      />
                    ))}
                  </div>

                  {/* Right Latch Half */}
                  <div className="absolute top-1/2 -translate-y-1/2 left-0 w-8 h-20 rounded-r-2xl bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-700 border-r border-y border-amber-200 shadow-lg flex items-center justify-start pl-1" />
                </motion.div>

              </div>

              {/* CENTER ANTIQUE ORNAMENTAL LATCH RING MEDALLION */}
              <AnimatePresence>
                {phase !== 'doors-open' && (
                  <motion.div
                    initial={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0, transition: { duration: 0.4 } }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-35"
                  >
                    <button
                      onClick={handleOpenGates}
                      aria-label="Unlock and open the royal palace gates"
                      className="group relative cursor-pointer outline-none focus:ring-4 focus:ring-amber-400/50 rounded-full transition-transform duration-300 hover:scale-110 active:scale-95"
                    >
                      {/* Expanding Interactive Halo Ring */}
                      <span className="absolute -inset-4 rounded-full border border-amber-400/60 animate-ping opacity-70 pointer-events-none" />

                      {/* Main Antique Latch Ring Base */}
                      <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-[#dfbd69] via-[#b08d3b] to-[#715418] p-1 shadow-[0_10px_35px_rgba(0,0,0,0.9),_inset_0_2px_6px_rgba(255,255,255,0.6)] flex items-center justify-center">
                        
                        {/* Sunburst Filigree Ring */}
                        <div className="w-full h-full rounded-full bg-gradient-to-tr from-[#0b162f] to-[#14264e] border-2 border-amber-300/80 flex flex-col items-center justify-center text-center p-2">
                          {/* Royal Monogram */}
                          <span className="font-calligraphy text-2xl sm:text-3xl text-gradient bg-gradient-to-b from-yellow-100 via-amber-200 to-amber-400 bg-clip-text text-transparent font-bold drop-shadow leading-tight">
                            S & A
                          </span>

                          {/* Ornamental Heavy Latch Knocker Ring */}
                          <motion.div
                            animate={{ rotate: [0, 8, -8, 0] }}
                            transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
                            className="w-10 h-7 border-3 border-amber-300 rounded-b-full mt-0.5 shadow-md flex items-center justify-center"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-200" />
                          </motion.div>

                          {/* Action Prompt */}
                          <span className="font-cinzel text-[7px] sm:text-[8px] tracking-[0.25em] text-amber-200 font-bold uppercase mt-1">
                            ENTER
                          </span>
                        </div>
                      </div>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Decorative Traditional Archway Crest */}
              <div className="absolute top-0 inset-x-0 h-24 z-20 pointer-events-none flex flex-col items-center pt-2">
                <div className="px-6 py-1.5 rounded-full bg-slate-950/80 border border-amber-400/50 backdrop-blur-md shadow-md">
                  <span className="font-cinzel text-[10px] sm:text-xs text-amber-200 tracking-[0.3em] uppercase font-bold">
                    ✦ Sri Sidharth & Anjusha ✦
                  </span>
                </div>
              </div>

            </div>

            {/* Bottom Invitation Prompt */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-6 text-center space-y-2 z-30"
            >
              <p className="font-garamond italic text-base sm:text-lg text-amber-200 font-medium drop-shadow-md">
                Tap the antique brass latch to swing open the palace gates & play music
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-slate-950/60 border border-amber-400/30 text-xs font-cinzel text-amber-300 shadow-md">
                <Volume2 className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                <span>En Jeevan (Vaikom Vijayalakshmi)</span>
              </div>
            </motion.div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PalaceGatewayOpening;
