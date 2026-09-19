import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Heart, Sparkles, ShieldCheck } from 'lucide-react';
import weddingData from '../data/weddingData';
import PeacockFeather from './decorations/PeacockFeather';

const FamilyDetails = () => {
  return (
    <section id="family" className="py-20 md:py-28 px-4 bg-wedding-gradient relative overflow-hidden transition-colors duration-500">
      {/* Ambient Emerald & Warm Gold Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-emerald-950/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-300/30 text-amber-200 text-xs uppercase tracking-[0.25em] font-cinzel mb-2">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              Royal Heritage Pedigree
            </span>
            <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-gold-gradient uppercase tracking-widest mt-1">
              Family & Auspicious Lineage
            </h2>
            <p className="font-garamond text-amber-100/80 text-base sm:text-lg italic mt-2">
              Honoring generations of traditions, blessings, and cultural roots
            </p>
            <div className="w-28 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mt-4 shadow-[0_0_8px_rgba(225,190,101,0.5)]" />
          </motion.div>
        </div>

        {/* Royal Heritage Pedigree Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Bride's Royal Lineage Pedigree (Primary) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl border-2 border-amber-400/60 bg-gradient-to-b from-[#380813] via-[#2d0710] to-[#1a0308] p-7 sm:p-9 flex flex-col justify-between shadow-[0_30px_70px_rgba(0,0,0,0.95),_0_0_30px_rgba(225,190,101,0.2)] relative overflow-hidden group hover:border-amber-400 transition-all duration-300"
          >
            {/* Background Peacock Feather Flourish */}
            <div className="absolute top-2 right-2 opacity-20 pointer-events-none">
              <PeacockFeather className="w-20 h-36 text-amber-400" />
            </div>

            <div>
              {/* Header Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-400/50 bg-amber-400/10 text-amber-200 text-xs font-cinzel tracking-widest uppercase mb-5 font-bold">
                <Heart className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>Bride's Heritage • Nekraje</span>
              </div>

              {/* Pedigree Hierarchy Tree */}
              <div className="space-y-6">
                
                {/* Generation 1: Ancestral Elders / Grandparents */}
                <div className="relative pl-6 border-l-2 border-amber-400/40">
                  <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[#1f040a] border-2 border-amber-400 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-300" />
                  </div>
                  <span className="text-[10px] font-cinzel tracking-[0.2em] uppercase text-amber-300/80 font-bold block">
                    Ancestral Roots & Grandparents
                  </span>
                  <p className="font-garamond text-amber-100/90 text-sm sm:text-base italic mt-0.5">
                    Blessed by the revered memory & grace of Paternal & Maternal Elders of Nekraje
                  </p>
                </div>

                {/* Generation 2: Parents */}
                <div className="relative pl-6 border-l-2 border-amber-400/60">
                  <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[#1f040a] border-2 border-amber-400 flex items-center justify-center">
                    <Sparkles className="w-2.5 h-2.5 text-amber-300" />
                  </div>
                  <span className="text-[10px] font-cinzel tracking-[0.2em] uppercase text-amber-300/80 font-bold block">
                    Loving Parents
                  </span>
                  <h3 className="font-cinzel font-bold text-2xl sm:text-3xl text-gold-gradient mt-1 leading-snug">
                    {weddingData.bride.parents}
                  </h3>
                </div>

                {/* Generation 3: Bride */}
                <div className="relative pl-6">
                  <div className="absolute -left-[7px] top-1 w-3.5 h-3.5 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(225,190,101,0.8)]" />
                  <span className="text-[10px] font-cinzel tracking-[0.2em] uppercase text-amber-300 font-bold block">
                    Beloved Daughter
                  </span>
                  <p className="font-brush text-3xl sm:text-4xl text-amber-100 font-normal mt-0.5">
                    {weddingData.bride.name}
                  </p>
                </div>

              </div>

              {/* Family Residence */}
              <div className="mt-8 pt-5 border-t border-amber-400/30">
                <div className="flex items-start gap-2.5 text-amber-100 font-garamond text-base sm:text-lg">
                  <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-1" />
                  <p className="leading-relaxed">
                    {weddingData.bride.address}
                  </p>
                </div>
              </div>

              {/* Contact Numbers Styled in Subtle Gold Pill Buttons */}
              <div className="mt-5 flex flex-wrap items-center gap-2.5">
                <span className="text-xs font-cinzel text-amber-300/80 tracking-wider uppercase font-semibold mr-1">
                  Contact:
                </span>
                {weddingData.bride.mobiles && weddingData.bride.mobiles.length > 0 ? (
                  weddingData.bride.mobiles.map((mob) => (
                    <a
                      key={mob}
                      href={`tel:${mob}`}
                      className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-amber-400/60 bg-[#1f040a]/80 hover:bg-amber-400/20 text-amber-200 font-cinzel text-xs font-bold tracking-wider hover:border-amber-300 transition-all shadow-sm"
                    >
                      <Phone className="w-3 h-3 text-amber-300" />
                      <span>{mob}</span>
                    </a>
                  ))
                ) : (
                  <a
                    href="tel:9061437409"
                    className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-amber-400/60 bg-[#1f040a]/80 hover:bg-amber-400/20 text-amber-200 font-cinzel text-xs font-bold tracking-wider hover:border-amber-300 transition-all shadow-sm"
                  >
                    <Phone className="w-3 h-3 text-amber-300" />
                    <span>9061437409</span>
                  </a>
                )}
              </div>
            </div>

            {/* Pedigree Seal Footer */}
            <div className="mt-8 pt-4 border-t border-amber-400/20 flex items-center justify-between text-xs text-amber-300/70 font-cinzel">
              <span>Malangai Heritage • Nekraje</span>
              <span className="text-amber-400">✦</span>
            </div>
          </motion.div>

          {/* Groom's Royal Lineage Pedigree */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl border-2 border-amber-400/60 bg-gradient-to-b from-[#380813] via-[#2d0710] to-[#1a0308] p-7 sm:p-9 flex flex-col justify-between shadow-[0_30px_70px_rgba(0,0,0,0.95),_0_0_30px_rgba(225,190,101,0.2)] relative overflow-hidden group hover:border-amber-400 transition-all duration-300"
          >
            {/* Background Peacock Feather Flourish (Flipped) */}
            <div className="absolute top-2 right-2 opacity-20 pointer-events-none">
              <PeacockFeather className="w-20 h-36 text-amber-400" flipped />
            </div>

            <div>
              {/* Header Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-400/50 bg-amber-400/10 text-amber-200 text-xs font-cinzel tracking-widest uppercase mb-5 font-bold">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Groom's Heritage • Kannur</span>
              </div>

              {/* Pedigree Hierarchy Tree */}
              <div className="space-y-6">
                
                {/* Generation 1: Ancestral Elders / Grandparents */}
                <div className="relative pl-6 border-l-2 border-amber-400/40">
                  <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[#1f040a] border-2 border-amber-400 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-300" />
                  </div>
                  <span className="text-[10px] font-cinzel tracking-[0.2em] uppercase text-amber-300/80 font-bold block">
                    Ancestral Roots & Grandparents
                  </span>
                  <p className="font-garamond text-amber-100/90 text-sm sm:text-base italic mt-0.5">
                    Blessed by the revered memory & heritage of Paternal & Maternal Elders of Kannur
                  </p>
                </div>

                {/* Generation 2: Parents */}
                <div className="relative pl-6 border-l-2 border-amber-400/60">
                  <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[#1f040a] border-2 border-amber-400 flex items-center justify-center">
                    <Sparkles className="w-2.5 h-2.5 text-amber-300" />
                  </div>
                  <span className="text-[10px] font-cinzel tracking-[0.2em] uppercase text-amber-300/80 font-bold block">
                    Loving Parents
                  </span>
                  <h3 className="font-cinzel font-bold text-2xl sm:text-3xl text-gold-gradient mt-1 leading-snug">
                    {weddingData.groom.parents}
                  </h3>
                </div>

                {/* Generation 3: Groom */}
                <div className="relative pl-6">
                  <div className="absolute -left-[7px] top-1 w-3.5 h-3.5 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(225,190,101,0.8)]" />
                  <span className="text-[10px] font-cinzel tracking-[0.2em] uppercase text-amber-300 font-bold block">
                    Beloved Son
                  </span>
                  <p className="font-brush text-3xl sm:text-4xl text-amber-100 font-normal mt-0.5">
                    {weddingData.groom.name}
                  </p>
                </div>

              </div>

              {/* Family Residence */}
              <div className="mt-8 pt-5 border-t border-amber-400/30">
                <div className="flex items-start gap-2.5 text-amber-100 font-garamond text-base sm:text-lg">
                  <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-1" />
                  <p className="leading-relaxed">
                    {weddingData.groom.addressLines[0]}
                    <br />
                    {weddingData.groom.addressLines[1]}
                  </p>
                </div>
              </div>

              {/* Contact Pill */}
              <div className="mt-5 flex flex-wrap items-center gap-2.5">
                <span className="text-xs font-cinzel text-amber-300/80 tracking-wider uppercase font-semibold mr-1">
                  Family Seat:
                </span>
                <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-amber-400/50 bg-[#1f040a]/80 text-amber-200 font-cinzel text-xs font-bold tracking-wider">
                  Pallikunnu, Kannur
                </span>
              </div>
            </div>

            {/* Pedigree Seal Footer */}
            <div className="mt-8 pt-4 border-t border-amber-400/20 flex items-center justify-between text-xs text-amber-300/70 font-cinzel">
              <span>Devaki Heritage • Kannur</span>
              <span className="text-amber-400">✦</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FamilyDetails;
