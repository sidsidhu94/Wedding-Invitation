import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Navigation, Sparkles } from 'lucide-react';
import weddingData from '../data/weddingData';
import WeddingRingIllustration from './decorations/WeddingRingIllustration';

const WeddingEvent = () => {
  const handleAddToCalendar = () => {
    // Google Calendar Event Link: 18th Oct 2026, 11:25 AM to 12:25 PM IST (05:55 UTC to 06:55 UTC)
    const startTime = "20261018T055500Z";
    const endTime = "20261018T065500Z";
    const title = encodeURIComponent(`Wedding Ceremony: Anjusha & Sidharth`);
    const details = encodeURIComponent(`Muhurtham: ${weddingData.wedding.muhurtham}\nVenue: ${weddingData.wedding.venue}, ${weddingData.wedding.location}`);
    const location = encodeURIComponent(`${weddingData.wedding.venue}, ${weddingData.wedding.location}`);
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startTime}/${endTime}&details=${details}&location=${location}`;
    window.open(url, '_blank');
  };

  return (
    <section id="wedding" className="py-20 md:py-24 px-4 bg-[var(--color-bg-base)] relative transition-colors duration-500 overflow-hidden">
      {/* Ambient Crimson Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-900/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Ceremonial Itinerary Part 1 Badge */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-300/30 text-amber-200 text-xs uppercase tracking-[0.25em] font-cinzel mb-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              Ceremonial Itinerary • Part 1 of 2
            </span>
            <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-gold-gradient uppercase tracking-wider">
              The Sacred Muhurtham
            </h2>
            <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mt-3 shadow-[0_0_8px_rgba(225,190,101,0.5)]" />
          </motion.div>
        </div>

        {/* Architectural Jharokha Arch Silhouette Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl border-2 border-amber-400/60 bg-gradient-to-b from-[#380813] via-[#2d0710] to-[#1a0308] p-6 sm:p-10 md:p-12 shadow-[0_30px_70px_rgba(0,0,0,0.95),_0_0_30px_rgba(225,190,101,0.2)] text-center overflow-hidden"
        >
          {/* Scalloped Jharokha Arch Top Silhouette (SVG) */}
          <div className="absolute top-0 left-0 right-0 h-10 overflow-hidden pointer-events-none opacity-40">
            <svg viewBox="0 0 600 40" className="w-full h-full text-amber-400" preserveAspectRatio="none">
              <path d="M0,0 L600,0 L600,10 Q500,35 400,20 Q300,5 200,20 Q100,35 0,10 Z" fill="currentColor" />
            </svg>
          </div>

          {/* Icon Header */}
          <div className="relative z-10 pt-4 mb-4">
            <WeddingRingIllustration className="w-16 h-16 mx-auto text-amber-400 filter drop-shadow-[0_0_12px_rgba(225,190,101,0.5)]" />
          </div>

          <span className="font-garamond text-amber-200/90 text-lg md:text-xl italic font-semibold">
            Under Auspicious Vedic Stars
          </span>
          
          <h3 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-black text-gold-gradient tracking-widest uppercase mt-1 mb-6 drop-shadow-md">
            {weddingData.wedding.title} CEREMONY
          </h3>

          <div className="w-24 h-[1.5px] bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-8" />

          {/* Event Details Architectural Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-3xl mx-auto mb-8">
            
            {/* Auspicious Date Box */}
            <div className="p-6 rounded-2xl bg-[#24040b]/90 border border-amber-400/40 flex flex-col items-center shadow-lg relative group hover:border-amber-400 transition-colors">
              <div className="p-3 rounded-full bg-amber-400/15 border border-amber-300/40 text-amber-300 mb-3 shadow-sm">
                <Calendar className="w-6 h-6" />
              </div>
              <span className="font-cinzel text-xs text-amber-300 tracking-[0.2em] uppercase mb-1.5 font-bold">Auspicious Date</span>
              <p className="font-cinzel font-bold text-lg text-white">
                {weddingData.wedding.date}
              </p>
            </div>

            {/* Muhurtham Timing Box (Highlighted) */}
            <div className="p-6 rounded-2xl bg-gradient-to-b from-amber-400/15 via-[#24040b]/90 to-[#190207] border-2 border-amber-400/70 flex flex-col items-center shadow-xl relative group">
              <div className="p-3 rounded-full bg-amber-400/25 border border-amber-300/60 text-amber-200 mb-3 shadow-[0_0_10px_rgba(225,190,101,0.4)]">
                <Clock className="w-6 h-6" />
              </div>
              <span className="font-cinzel text-xs text-amber-200 tracking-[0.2em] uppercase mb-1.5 font-bold">Muhurtham</span>
              <p className="font-garamond font-bold text-xl sm:text-2xl text-amber-200 leading-tight">
                {weddingData.wedding.muhurtham}
              </p>
            </div>

            {/* Venue Box */}
            <div className="p-6 rounded-2xl bg-[#24040b]/90 border border-amber-400/40 flex flex-col items-center shadow-lg relative group hover:border-amber-400 transition-colors">
              <div className="p-3 rounded-full bg-amber-400/15 border border-amber-300/40 text-amber-300 mb-3 shadow-sm">
                <MapPin className="w-6 h-6" />
              </div>
              <span className="font-cinzel text-xs text-amber-300 tracking-[0.2em] uppercase mb-1.5 font-bold">Mandap Venue</span>
              <p className="font-cinzel font-bold text-lg text-white">
                {weddingData.wedding.venue}
              </p>
              <p className="font-garamond text-amber-100/75 text-sm mt-0.5">
                {weddingData.wedding.location}, Kasaragod
              </p>
            </div>

          </div>

          {/* Action Buttons with Gold Borders & Pin Icons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href={weddingData.wedding.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-cinzel font-black text-xs sm:text-sm tracking-widest uppercase border border-amber-300 shadow-[0_0_20px_rgba(225,190,101,0.4)] hover:shadow-[0_0_28px_rgba(225,190,101,0.6)] hover:scale-105 transition-all flex items-center gap-2"
            >
              <Navigation className="w-4 h-4 text-slate-950" />
              <span>Get Directions to Mandap</span>
            </a>

            <button
              onClick={handleAddToCalendar}
              className="px-6 py-3 rounded-full border border-amber-400/60 bg-[#1f040a]/80 hover:bg-amber-400/20 text-amber-200 font-cinzel font-bold text-xs sm:text-sm tracking-wider uppercase transition-all flex items-center gap-2 cursor-pointer shadow-md"
            >
              <Calendar className="w-4 h-4 text-amber-300" />
              <span>Add to Calendar</span>
            </button>
          </div>

          {/* Timeline Connector Indicator to Reception */}
          <div className="mt-10 pt-4 flex flex-col items-center">
            <div className="w-[1.5px] h-8 bg-gradient-to-b from-amber-400 to-transparent" />
            <span className="text-[10px] uppercase font-cinzel tracking-[0.25em] text-amber-300/70 mt-1">
              Followed by the Grand Celebrations
            </span>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default WeddingEvent;
