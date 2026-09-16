import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Navigation, Share2 } from 'lucide-react';
import weddingData from '../data/weddingData';
import WeddingRingIllustration from './decorations/WeddingRingIllustration';

const WeddingEvent = () => {
  const handleAddToCalendar = () => {
    // Google Calendar Event Link
    const startTime = "20261018T055500Z"; // 11:25 AM IST in UTC
    const endTime = "20261018T065500Z"; // 12:25 PM IST in UTC
    const title = encodeURIComponent(`Wedding Ceremony of Sidharth & Anjusha`);
    const details = encodeURIComponent(`Muhurtham: between 11-25 a.m. to 12-25 p.m.`);
    const location = encodeURIComponent(`${weddingData.wedding.venue}, ${weddingData.wedding.location}`);
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startTime}/${endTime}&details=${details}&location=${location}`;
    window.open(url, '_blank');
  };

  return (
    <section id="wedding" className="py-20 px-4 bg-[var(--color-bg-base)] relative transition-colors duration-500">
      <div className="max-w-4xl mx-auto">
        
        {/* Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl border-2 border-[var(--color-gold-border)] bg-gradient-to-b from-[var(--color-bg-surface)] via-[var(--color-bg-card)] to-[var(--color-bg-base)] p-8 md:p-12 shadow-2xl text-center overflow-hidden"
        >
          {/* Subtle Background Pattern */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

          {/* Wedding Ring Icon Header */}
          <div className="mb-4">
            <WeddingRingIllustration className="w-16 h-16 mx-auto" />
          </div>

          <span className="font-garamond text-amber-300 text-base md:text-lg italic">The Auspicious Ceremony</span>
          
          <h2 className="font-cinzel text-4xl md:text-5xl font-extrabold text-gold-gradient tracking-widest uppercase mt-1 mb-6">
            {weddingData.wedding.title}
          </h2>

          <div className="w-24 h-[2px] bg-amber-400 mx-auto mb-8" />

          {/* Event Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto text-stone-200 mb-8">
            
            {/* Date Box */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-amber-500/30 flex flex-col items-center">
              <div className="p-3 rounded-full bg-amber-500/10 border border-amber-400/40 text-amber-400 mb-3">
                <Calendar className="w-6 h-6" />
              </div>
              <span className="font-cinzel text-xs text-amber-400 tracking-widest uppercase mb-1">Date</span>
              <p className="font-cinzel font-bold text-lg text-stone-100">
                {weddingData.wedding.date}
              </p>
            </div>

            {/* Muhurtham Box */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-amber-500/30 flex flex-col items-center">
              <div className="p-3 rounded-full bg-amber-500/10 border border-amber-400/40 text-amber-400 mb-3">
                <Clock className="w-6 h-6" />
              </div>
              <span className="font-cinzel text-xs text-amber-400 tracking-widest uppercase mb-1">Muhurtham</span>
              <p className="font-garamond font-bold text-lg text-amber-200">
                {weddingData.wedding.muhurtham}
              </p>
            </div>

            {/* Venue Box */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-amber-500/30 flex flex-col items-center">
              <div className="p-3 rounded-full bg-amber-500/10 border border-amber-400/40 text-amber-400 mb-3">
                <MapPin className="w-6 h-6" />
              </div>
              <span className="font-cinzel text-xs text-amber-400 tracking-widest uppercase mb-1">Venue</span>
              <p className="font-cinzel font-bold text-lg text-stone-100">
                {weddingData.wedding.venue}
              </p>
              <p className="font-garamond text-stone-400 text-sm mt-0.5">
                {weddingData.wedding.location}
              </p>
            </div>

          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={weddingData.wedding.mapUrl}
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

export default WeddingEvent;
