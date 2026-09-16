import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Users, Heart } from 'lucide-react';
import weddingData from '../data/weddingData';
import PeacockFeather from './decorations/PeacockFeather';

const FamilyDetails = () => {
  return (
    <section id="family" className="py-20 px-4 bg-wedding-gradient relative overflow-hidden transition-colors duration-500">
      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-garamond italic text-[var(--color-gold-light)] text-lg">Honoring Traditions & Roots</span>
            <h2 className="font-cinzel text-3xl md:text-5xl font-bold text-gold-gradient tracking-widest uppercase mt-1">
              Our Families
            </h2>
            <div className="w-28 h-[2px] bg-[var(--color-gold-mid)] mx-auto mt-3" />
          </motion.div>
        </div>

        {/* Family Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Groom's Family Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl border-2 border-[var(--color-gold-border)] bg-[var(--color-bg-surface)]/85 backdrop-blur-md p-6 md:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-2 right-2 opacity-30 pointer-events-none">
              <PeacockFeather className="w-16 h-28" />
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/40 bg-amber-500/10 text-amber-300 text-xs font-cinzel tracking-widest uppercase mb-4">
                <Users className="w-3.5 h-3.5" />
                <span>Groom's Family</span>
              </div>

              <h3 className="font-garamond font-bold text-2xl text-amber-200 mb-3 leading-snug">
                {weddingData.groom.parents}
              </h3>

              <div className="space-y-3 font-garamond text-stone-300 text-base md:text-lg">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-1" />
                  <p className="leading-relaxed">
                    {weddingData.groom.addressLines[0]}
                    <br />
                    {weddingData.groom.addressLines[1]}
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <Phone className="w-5 h-5 text-amber-400 shrink-0" />
                  <p className="font-semibold text-stone-100">
                    Mob : {weddingData.groom.mobile}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-amber-500/20 flex items-center justify-between text-xs text-stone-400 font-cinzel">
              <span>Kannur, Kerala</span>
              <span className="text-amber-400">✦</span>
            </div>
          </motion.div>

          {/* Bride's Family Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl border-2 border-[var(--color-gold-border)] bg-[var(--color-bg-surface)]/85 backdrop-blur-md p-6 md:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-2 right-2 opacity-30 pointer-events-none">
              <PeacockFeather className="w-16 h-28" flipped />
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/40 bg-amber-500/10 text-amber-300 text-xs font-cinzel tracking-widest uppercase mb-4">
                <Heart className="w-3.5 h-3.5 fill-amber-300" />
                <span>Bride's Family</span>
              </div>

              <h3 className="font-garamond font-bold text-2xl text-amber-200 mb-3 leading-snug">
                {weddingData.bride.parents}
              </h3>

              <div className="space-y-3 font-garamond text-stone-300 text-base md:text-lg">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-1" />
                  <p className="leading-relaxed">
                    {weddingData.bride.addressLines[0]}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-amber-500/20 flex items-center justify-between text-xs text-stone-400 font-cinzel">
              <span>Kasaragod, Kerala</span>
              <span className="text-amber-400">✦</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FamilyDetails;
