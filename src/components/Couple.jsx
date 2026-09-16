import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';
import weddingData from '../data/weddingData';
import PeacockFeather from './decorations/PeacockFeather';

const Couple = () => {
  return (
    <section id="couple" className="py-20 px-4 bg-wedding-gradient relative overflow-hidden transition-colors duration-500">
      {/* Background Decor */}
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-garamond italic text-[var(--color-gold-light)] text-lg">Two Hearts, One Journey</span>
            <h2 className="font-cinzel text-3xl md:text-5xl font-bold text-gold-gradient tracking-wider uppercase mt-1">
              The Groom & The Bride
            </h2>
            <div className="w-28 h-[2px] bg-[var(--color-gold-mid)] mx-auto mt-3" />
          </motion.div>
        </div>

        {/* Couple Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-stretch max-w-4xl mx-auto">
          
          {/* Groom Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group relative rounded-2xl border-2 border-[var(--color-gold-border)] bg-[var(--color-bg-surface)]/85 backdrop-blur-md p-6 md:p-8 flex flex-col items-center text-center shadow-2xl hover:border-[var(--color-gold-mid)] transition-all duration-300"
          >
            <div className="absolute top-4 left-4">
              <PeacockFeather className="w-10 h-16 opacity-60" />
            </div>

            {/* Avatar Frame / Silhouette */}
            <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full p-1.5 bg-gradient-to-tr from-[var(--color-gold-dark)] via-[var(--color-gold-light)] to-[var(--color-gold-mid)] shadow-xl mb-6">
              <div className="w-full h-full rounded-full bg-[var(--color-bg-card)] flex items-center justify-center overflow-hidden border-2 border-[var(--color-gold-border)]">
                <span className="font-cinzel font-bold text-4xl text-[var(--color-gold-light)]">SP</span>
              </div>
              <div className="absolute -bottom-2 -right-2 bg-amber-500 text-slate-950 p-2 rounded-full shadow-md">
                <Sparkles className="w-5 h-5" />
              </div>
            </div>

            <span className="font-cinzel text-amber-400 text-xs tracking-widest uppercase mb-1">The Groom</span>
            <h3 className="font-calligraphy text-4xl md:text-5xl text-gold-gradient font-bold mb-3">
              {weddingData.groom.name}
            </h3>

            <div className="w-16 h-[1px] bg-amber-500/40 my-3" />

            <div className="space-y-2 text-stone-300 font-garamond text-base md:text-lg">
              <p className="font-semibold text-amber-200">{weddingData.groom.parents}</p>
              <p className="text-stone-400 text-sm">{weddingData.groom.addressLines[0]}</p>
              <p className="text-stone-400 text-sm">{weddingData.groom.addressLines[1]}</p>
            </div>
          </motion.div>

          {/* Bride Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group relative rounded-2xl border-2 border-[var(--color-gold-border)] bg-[var(--color-bg-surface)]/85 backdrop-blur-md p-6 md:p-8 flex flex-col items-center text-center shadow-2xl hover:border-[var(--color-gold-mid)] transition-all duration-300"
          >
            <div className="absolute top-4 right-4">
              <PeacockFeather className="w-10 h-16 opacity-60" flipped />
            </div>

            {/* Avatar Frame / Silhouette */}
            <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full p-1.5 bg-gradient-to-tr from-[var(--color-gold-dark)] via-[var(--color-gold-light)] to-[var(--color-gold-mid)] shadow-xl mb-6">
              <div className="w-full h-full rounded-full bg-[var(--color-bg-card)] flex items-center justify-center overflow-hidden border-2 border-[var(--color-gold-border)]">
                <span className="font-cinzel font-bold text-4xl text-[var(--color-gold-light)]">AM</span>
              </div>
              <div className="absolute -bottom-2 -left-2 bg-amber-500 text-slate-950 p-2 rounded-full shadow-md">
                <Heart className="w-5 h-5 fill-slate-950" />
              </div>
            </div>

            <span className="font-cinzel text-amber-400 text-xs tracking-widest uppercase mb-1">The Bride</span>
            <h3 className="font-calligraphy text-4xl md:text-5xl text-gold-gradient font-bold mb-3">
              {weddingData.bride.name}
            </h3>

            <div className="w-16 h-[1px] bg-amber-500/40 my-3" />

            <div className="space-y-2 text-stone-300 font-garamond text-base md:text-lg">
              <p className="font-semibold text-amber-200">{weddingData.bride.parents}</p>
              <p className="text-stone-400 text-sm">{weddingData.bride.addressLines[0]}</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Couple;
