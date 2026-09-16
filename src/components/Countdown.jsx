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
    // Target Date: 18th October 2026, 11:25 AM IST
    const targetDate = new Date("2026-10-18T11:25:00+05:30").getTime();

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
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-r from-[var(--color-bg-base)] via-[var(--color-bg-surface)] to-[var(--color-bg-base)] border-y border-[var(--color-gold-border)] relative transition-colors duration-500">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Header Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 text-[var(--color-gold-light)] text-sm font-garamond italic mb-1">
            <Sparkles className="w-4 h-4 text-[var(--color-gold-mid)]" />
            <span>Counting Down to the Muhurtham</span>
            <Sparkles className="w-4 h-4 text-[var(--color-gold-mid)]" />
          </div>
          <h2 className="font-cinzel text-2xl md:text-4xl font-bold text-gold-gradient uppercase tracking-widest">
            Until We Say "I Do"
          </h2>
          <p className="font-garamond text-[var(--color-text-muted)] text-sm mt-1">
            {weddingData.wedding.date}
          </p>
        </motion.div>

        {/* Timer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-3xl mx-auto">
          {timeUnits.map((unit, index) => (
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-4 md:p-6 rounded-2xl bg-[var(--color-bg-surface)]/90 border-2 border-[var(--color-gold-border)] shadow-xl backdrop-blur-md flex flex-col items-center justify-center group hover:border-[var(--color-gold-mid)] transition-all"
            >
              <div className="font-cinzel font-black text-4xl sm:text-5xl md:text-6xl text-gold-gradient drop-shadow-md">
                {String(unit.value).padStart(2, '0')}
              </div>
              <div className="font-cinzel text-xs md:text-sm text-stone-300 uppercase tracking-widest mt-2 font-semibold">
                {unit.label}
              </div>

              {/* Decorative Corner Dots */}
              <div className="absolute top-2 left-2 w-1.5 h-1.5 rounded-full bg-amber-400/60" />
              <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-amber-400/60" />
              <div className="absolute bottom-2 left-2 w-1.5 h-1.5 rounded-full bg-amber-400/60" />
              <div className="absolute bottom-2 right-2 w-1.5 h-1.5 rounded-full bg-amber-400/60" />
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-8 flex items-center justify-center gap-2 text-stone-300 font-garamond italic text-base">
          <Heart className="w-4 h-4 text-amber-400 fill-amber-400" />
          <span>Bless us with your presence on our special day</span>
          <Heart className="w-4 h-4 text-amber-400 fill-amber-400" />
        </div>

      </div>
    </section>
  );
};

export default Countdown;
