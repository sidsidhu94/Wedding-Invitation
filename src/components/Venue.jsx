import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Copy, Check, Clock, Calendar, Compass, Sparkles } from 'lucide-react';
import weddingData from '../data/weddingData';

const Venue = () => {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const venues = [
    {
      id: "wedding-venue",
      partBadge: "Ceremonial Part 1",
      type: "The Wedding Mandap",
      name: weddingData.wedding.venue,
      location: `${weddingData.wedding.location}, Kasaragod`,
      landmark: "Near NH 66 Kalikkadavu Junction (Spacious auditorium parking available)",
      date: weddingData.wedding.date,
      time: `Muhurtham: ${weddingData.wedding.muhurtham}`,
      mapUrl: weddingData.wedding.mapUrl,
      fullAddress: `${weddingData.wedding.venue}, ${weddingData.wedding.location}, Kasaragod, Kerala`
    },
    {
      id: "reception-venue",
      partBadge: "Ceremonial Part 2",
      type: "Pre-Wedding Reception",
      name: weddingData.reception.venue,
      location: weddingData.reception.location,
      landmark: "Malangai House, Nekraje P.O., via Kasaragod - Cherkala route",
      date: "Friday, 16th October 2026",
      time: `Celebration: ${weddingData.reception.time}`,
      mapUrl: weddingData.reception.mapUrl, // https://maps.app.goo.gl/v3pajVgHFih3v5kx5?g_st=aw
      fullAddress: `${weddingData.reception.venue}, Malangai House, Nekraje P.O., Kasaragod, Kerala`
    }
  ];

  const handleCopyAddress = (address, index) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(address);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2200);
    }
  };

  return (
    <section id="venue" className="py-20 md:py-28 px-4 bg-[var(--color-bg-base)] relative transition-colors duration-500 overflow-hidden">
      {/* Ambient Crimson Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-rose-950/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-300/30 text-amber-200 text-xs uppercase tracking-[0.25em] font-cinzel mb-2">
              <Compass className="w-3.5 h-3.5 text-amber-400" />
              Interactive Travel Guide
            </span>
            <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-extrabold text-gold-gradient uppercase tracking-wider">
              Venue & Route Directions
            </h2>
            <p className="font-garamond text-amber-100/80 text-base sm:text-lg italic mt-2">
              Join our celebrations across Kasaragod & Kalikkadavu
            </p>
            <div className="w-28 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mt-4 shadow-[0_0_10px_rgba(225,190,101,0.5)]" />
          </motion.div>
        </div>

        {/* Venues Architectural Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {venues.map((venue, idx) => (
            <motion.div
              key={venue.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.2 }}
              className="rounded-3xl border-2 border-amber-400/60 bg-gradient-to-b from-[#380813] via-[#2d0710] to-[#1a0308] p-7 sm:p-9 flex flex-col justify-between shadow-[0_30px_70px_rgba(0,0,0,0.95),_0_0_30px_rgba(225,190,101,0.15)] relative overflow-hidden group hover:border-amber-400 transition-all duration-300"
            >
              {/* Subtle Jharokha Arch SVG Top Accent */}
              <div className="absolute top-0 left-0 right-0 h-8 opacity-25 pointer-events-none">
                <svg viewBox="0 0 400 30" className="w-full h-full text-amber-400" preserveAspectRatio="none">
                  <path d="M0,0 L400,0 L400,5 Q300,25 200,10 Q100,25 0,5 Z" fill="currentColor" />
                </svg>
              </div>

              <div>
                {/* Part Badge & Ceremony Type */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-amber-400/50 bg-amber-400/10 text-amber-200 text-xs font-cinzel tracking-widest uppercase font-semibold">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>{venue.partBadge}</span>
                  </span>

                  <span className="text-xs font-cinzel text-amber-300/80 uppercase tracking-wider font-bold">
                    {venue.type}
                  </span>
                </div>

                {/* Venue Name */}
                <h3 className="font-cinzel font-bold text-2xl sm:text-3xl text-gold-gradient mb-1 drop-shadow-sm">
                  {venue.name}
                </h3>
                
                {/* Location / City */}
                <p className="font-garamond text-amber-100 text-lg font-semibold mb-4 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{venue.location}</span>
                </p>

                {/* Timing & Date Plaque */}
                <div className="space-y-2 p-4 rounded-2xl bg-[#24040b]/85 border border-amber-400/30 text-amber-100 font-garamond text-sm sm:text-base mb-5 shadow-inner">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-amber-400 shrink-0" />
                    <span><strong className="text-amber-300 font-cinzel text-xs uppercase tracking-wider">Date:</strong> {venue.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                    <span><strong className="text-amber-300 font-cinzel text-xs uppercase tracking-wider">Timing:</strong> {venue.time}</span>
                  </div>
                </div>

                {/* Landmark Hint Cue */}
                <div className="p-3 rounded-xl bg-amber-400/10 border border-amber-300/20 text-amber-200/90 text-xs font-garamond mb-6">
                  <strong className="font-cinzel text-[10px] tracking-wider uppercase text-amber-300 block mb-0.5">
                    Landmark Cue:
                  </strong>
                  {venue.landmark}
                </div>
              </div>

              {/* Action Buttons: Direct Google Maps & 1-Click Copy */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-amber-400/30">
                <a
                  href={venue.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 py-3 px-5 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-cinzel font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(225,190,101,0.35)] hover:shadow-[0_0_22px_rgba(225,190,101,0.55)] cursor-pointer"
                >
                  <Navigation className="w-4 h-4 text-slate-950" />
                  <span>Open in Google Maps</span>
                </a>

                <button
                  onClick={() => handleCopyAddress(venue.fullAddress, idx)}
                  className="w-full sm:w-auto py-3 px-5 rounded-full border border-amber-400/60 bg-[#1f040a]/80 hover:bg-amber-400/20 text-amber-200 font-cinzel font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                  title="Copy Full Venue Address"
                >
                  {copiedIndex === idx ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-300">Address Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-amber-300" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Venue;
