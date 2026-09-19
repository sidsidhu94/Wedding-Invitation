import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';
import weddingData from '../data/weddingData';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Target Date from weddingData: 18th October 2026, 11:25 AM IST
    const targetDate = new Date(weddingData.wedding.rawDate).getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days, max: 300 },
    { label: 'Hours', value: timeLeft.hours, max: 24 },
    { label: 'Minutes', value: timeLeft.minutes, max: 60 },
    { label: 'Seconds', value: timeLeft.seconds, max: 60 },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#1f040a] via-[#2d0710] to-[#1f040a] border-y-2 border-amber-400/40 relative transition-colors duration-500 overflow-hidden">
      {/* Ambient Astronomical Gold Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        
        {/* Header Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 text-amber-300 text-xs sm:text-sm font-cinzel tracking-[0.25em] uppercase mb-2">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Auspicious Vedic Horologue</span>
            <Sparkles className="w-4 h-4 text-amber-400" />
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-extrabold text-gold-gradient uppercase tracking-widest drop-shadow-md">
            Countdown to Muhurtham
          </h2>
          <p className="font-garamond text-amber-100/80 text-base sm:text-lg italic mt-2">
            Sunday, 18th October 2026 • 11:25 AM to 12:25 PM IST
          </p>
          <div className="w-24 h-[1.5px] bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mt-4" />
        </motion.div>

        {/* Bespoke Concentric Gold Ring Timepiece Dials */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto">
          {timeUnits.map((unit, index) => {
            const circumference = 2 * Math.PI * 46;
            const progress = (unit.value % unit.max) / unit.max;
            const strokeDashoffset = circumference - progress * circumference;

            return (
              <motion.div
                key={unit.label}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className="relative flex flex-col items-center justify-center group"
              >
                {/* 120px Circular SVG Timepiece Dial */}
                <div className="relative w-36 h-36 sm:w-44 sm:h-44 flex items-center justify-center">
                  
                  {/* Subtle glowing shadow backing */}
                  <div className="absolute inset-2 rounded-full bg-amber-500/10 blur-md group-hover:bg-amber-400/20 transition-all" />

                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
                    <defs>
                      <linearGradient id={`goldRingGrad-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#fef4cf" />
                        <stop offset="40%" stopColor="#e1be65" />
                        <stop offset="80%" stopColor="#b38b34" />
                        <stop offset="100%" stopColor="#fef4cf" />
                      </linearGradient>
                    </defs>

                    {/* Outer Sunburst Ticks Ring */}
                    <circle
                      cx="60"
                      cy="60"
                      r="54"
                      fill="none"
                      stroke="rgba(225, 190, 101, 0.3)"
                      strokeWidth="1.5"
                      strokeDasharray="2 5"
                    />

                    {/* Middle Outer Decorative Border */}
                    <circle
                      cx="60"
                      cy="60"
                      r="50"
                      fill="none"
                      stroke="rgba(225, 190, 101, 0.45)"
                      strokeWidth="1"
                    />

                    {/* Concentric Base Track */}
                    <circle
                      cx="60"
                      cy="60"
                      r="45"
                      fill="#1f040a"
                      stroke="rgba(225, 190, 101, 0.2)"
                      strokeWidth="3.5"
                    />

                    {/* Active Progress Gold Ring */}
                    <circle
                      cx="60"
                      cy="60"
                      r="45"
                      fill="none"
                      stroke={`url(#goldRingGrad-${index})`}
                      strokeWidth="3.5"
                      strokeDasharray={circumference}
                      strokeDashoffset={strokeDashoffset}
                      strokeLinecap="round"
                      className="transition-all duration-1000 ease-linear"
                    />

                    {/* Inner Golden Rim */}
                    <circle
                      cx="60"
                      cy="60"
                      r="37"
                      fill="none"
                      stroke="rgba(225, 190, 101, 0.4)"
                      strokeWidth="1"
                    />

                    {/* Center Circular Disc */}
                    <circle
                      cx="60"
                      cy="60"
                      r="34"
                      fill="rgba(45, 7, 16, 0.95)"
                    />
                  </svg>

                  {/* Concentric Dial Center Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <div className="font-cinzel font-black text-3xl sm:text-4xl text-gold-gradient drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                      {String(unit.value).padStart(2, '0')}
                    </div>
                    <div className="font-cinzel text-[10px] sm:text-xs text-amber-200 tracking-[0.2em] uppercase font-bold mt-0.5">
                      {unit.label}
                    </div>
                  </div>

                  {/* Top / Bottom Jewel Ornaments */}
                  <div className="absolute top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-amber-300 shadow-[0_0_8px_rgba(225,190,101,0.8)]" />
                  <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-amber-400" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Traditional Timepiece Footer Note */}
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
