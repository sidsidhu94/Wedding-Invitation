import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Copy, Check, ExternalLink } from 'lucide-react';
import weddingData from '../data/weddingData';

const Venue = () => {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const venues = [
    {
      type: "Wedding Venue",
      name: weddingData.wedding.venue,
      location: weddingData.wedding.location,
      date: weddingData.wedding.date,
      time: weddingData.wedding.muhurtham,
      mapUrl: weddingData.wedding.mapUrl,
      fullAddress: `${weddingData.wedding.venue}, ${weddingData.wedding.location}`
    },
    {
      type: "Reception Venue",
      name: weddingData.reception.venue,
      location: weddingData.reception.location,
      date: `${weddingData.reception.day} | ${weddingData.reception.dateNum} | ${weddingData.reception.month} ${weddingData.reception.year}`,
      time: weddingData.reception.time,
      mapUrl: weddingData.reception.mapUrl,
      fullAddress: `${weddingData.reception.venue}, ${weddingData.reception.location}`
    }
  ];

  const handleCopyAddress = (address, index) => {
    navigator.clipboard.writeText(address);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section id="venue" className="py-20 px-4 bg-[var(--color-bg-base)] relative transition-colors duration-500">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-garamond italic text-amber-300 text-lg">Finding Your Way</span>
            <h2 className="font-cinzel text-3xl md:text-5xl font-bold text-gold-gradient tracking-widest uppercase mt-1">
              Venue Locations
            </h2>
            <div className="w-28 h-[2px] bg-amber-400 mx-auto mt-3" />
          </motion.div>
        </div>

        {/* Venues Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {venues.map((venue, idx) => (
            <motion.div
              key={venue.type}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="rounded-3xl border-2 border-[var(--color-gold-border)] bg-[var(--color-bg-surface)]/85 backdrop-blur-md p-6 md:p-8 flex flex-col justify-between shadow-2xl relative"
            >
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--color-gold-border)] bg-[var(--color-gold-mid)]/10 text-[var(--color-gold-light)] text-xs font-cinzel tracking-widest uppercase mb-4">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{venue.type}</span>
                </div>

                <h3 className="font-cinzel font-bold text-2xl md:text-3xl text-gold-gradient mb-1">
                  {venue.name}
                </h3>
                
                <p className="font-garamond text-[var(--color-gold-light)] text-lg font-semibold mb-4">
                  {venue.location}
                </p>

                <div className="space-y-2 p-4 rounded-xl bg-[var(--color-bg-card)]/80 border border-[var(--color-gold-border)] text-[var(--color-text-muted)] font-garamond text-sm md:text-base mb-6">
                  <p><span className="text-amber-400 font-semibold">Date:</span> {venue.date}</p>
                  <p><span className="text-amber-400 font-semibold">Time:</span> {venue.time}</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-amber-500/20">
                <a
                  href={venue.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-4 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-cinzel font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions</span>
                </a>

                <button
                  onClick={() => handleCopyAddress(venue.fullAddress, idx)}
                  className="py-2.5 px-4 rounded-full border border-amber-400/50 hover:bg-amber-400/10 text-amber-200 font-cinzel font-medium text-xs uppercase tracking-wider transition-colors flex items-center gap-1.5 cursor-pointer"
                  title="Copy Address"
                >
                  {copiedIndex === idx ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-300">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy</span>
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
