import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Navigation, Sparkles } from 'lucide-react';
import weddingData from '../data/weddingData';
import MandapIllustration from './decorations/MandapIllustration';

const ReceptionEvent = () => {
  const handleAddToCalendar = () => {
    // Reception: 19th Oct 2026, 6:00 PM - 9:00 PM IST (12:30 UTC to 15:30 UTC)
    const startTime = "20261019T123000Z";
    const endTime = "20261019T153000Z";
    const title = encodeURIComponent(`Wedding Reception of Sidharth & Anjusha`);
    const details = encodeURIComponent(`Time: 6:00 PM to 9:00 PM`);
    const location = encodeURIComponent(`${weddingData.reception.venue}, ${weddingData.reception.location}`);
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startTime}/${endTime}&details=${details}&location=${location}`;
    window.open(url, '_blank');
  };

  return (
    <section id="reception" className="py-20 px-4 bg-[var(--color-bg-base)] relative transition-colors duration-500">
      <div className="max-w-4xl mx-auto">
        
        {/* Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl border-2 border-[var(--color-gold-border)] bg-gradient-to-b from-[var(--color-bg-surface)] via-[var(--color-bg-card)] to-[var(--color-bg-base)] p-8 md:p-12 shadow-2xl text-center overflow-hidden"
        >
          {/* Mandap Header Ornament */}
          <MandapIllustration className="w-28 h-16 mx-auto mb-2" />

          <span className="font-garamond text-amber-300 text-base md:text-lg italic">The Grand Celebration</span>
          
          <h2 className="font-cinzel text-4xl md:text-5xl font-extrabold text-gold-gradient tracking-widest uppercase mt-1 mb-6">
            {weddingData.reception.title}
          </h2>

          <div className="w-24 h-[2px] bg-amber-400 mx-auto mb-10" />

          {/* Calendar Block Design (Exact Prompt Specification: MON | 19 | OCT 2026) */}
          <div className="inline-block bg-slate-900/90 border-2 border-amber-400/80 rounded-2xl p-6 md:p-8 shadow-2xl mb-8 max-w-md w-full">
            <div className="flex items-center justify-center gap-4 text-2xl sm:text-3xl md:text-4xl font-cinzel font-black text-amber-300 border-b border-amber-500/40 pb-4">
              <span>{weddingData.reception.day}</span>
              <span className="text-amber-500">|</span>
              <span className="text-amber-100 text-4xl sm:text-5xl md:text-6xl font-extrabold">{weddingData.reception.dateNum}</span>
              <span className="text-amber-500">|</span>
              <span>{weddingData.reception.month}</span>
            </div>
            <div className="pt-4 flex items-center justify-center gap-3">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span className="font-cinzel font-bold text-2xl md:text-3xl text-gold-gradient tracking-widest">
                {weddingData.reception.year}
              </span>
              <Sparkles className="w-4 h-4 text-amber-400" />
            </div>
          </div>

          {/* Time & Venue Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto text-stone-200 mb-8">
            
            {/* Time Box */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-amber-500/30 flex flex-col items-center">
              <div className="p-3 rounded-full bg-amber-500/10 border border-amber-400/40 text-amber-400 mb-3">
                <Clock className="w-6 h-6" />
              </div>
              <span className="font-cinzel text-xs text-amber-400 tracking-widest uppercase mb-1">Time</span>
              <p className="font-garamond font-bold text-xl text-stone-100">
                {weddingData.reception.time}
              </p>
            </div>

            {/* Venue Box */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-amber-500/30 flex flex-col items-center">
              <div className="p-3 rounded-full bg-amber-500/10 border border-amber-400/40 text-amber-400 mb-3">
                <MapPin className="w-6 h-6" />
              </div>
              <span className="font-cinzel text-xs text-amber-400 tracking-widest uppercase mb-1">Venue</span>
              <p className="font-cinzel font-bold text-xl text-stone-100">
                {weddingData.reception.venue}
              </p>
              <p className="font-garamond text-stone-400 text-base mt-0.5">
                {weddingData.reception.location}
              </p>
            </div>

          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={weddingData.reception.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-cinzel font-bold text-sm tracking-wider uppercase shadow-lg hover:shadow-amber-500/30 transition-all flex items-center gap-2"
            >
              <Navigation className="w-4 h-4" />
              <span>Get Directions</span>
            </a>

            <button
              onClick={handleAddToCalendar}
              className="px-6 py-3 rounded-full border border-amber-400/60 hover:bg-amber-400/10 text-amber-200 font-cinzel font-semibold text-sm tracking-wider uppercase transition-all flex items-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-amber-400" />
              <span>Add to Calendar</span>
            </button>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default ReceptionEvent;
