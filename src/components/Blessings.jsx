import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Share2, Check, MessageCircle, Sparkles } from 'lucide-react';
import weddingData from '../data/weddingData';
import MandapIllustration from './decorations/MandapIllustration';

const Blessings = () => {
  const [copiedLink, setCopiedLink] = useState(false);

  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(
      `🪔 *Wedding Invitation of Anjusha & Sidharth* 🪔\n\n` +
      `"Cordially invite your esteemed presence with family on the auspicious occasion of our Pre-Wedding Reception & Wedding."\n\n` +
      `💍 *Bride:* ${weddingData.bride.name} (${weddingData.bride.family})\n` +
      `🤵 *Groom:* ${weddingData.groom.name} (${weddingData.groom.family})\n\n` +
      `📅 *Part 1: Pre-Wedding Reception*\n` +
      `• Friday, 16th October 2026 (${weddingData.reception.time})\n` +
      `• Venue: ${weddingData.reception.venue}, ${weddingData.reception.location}\n` +
      `• Map: ${weddingData.reception.mapUrl}\n\n` +
      `📅 *Part 2: The Wedding Ceremony*\n` +
      `• Sunday, 18th October 2026 (Muhurtham: ${weddingData.wedding.muhurtham})\n` +
      `• Venue: ${weddingData.wedding.venue}, ${weddingData.wedding.location}\n` +
      `• Map: ${weddingData.wedding.mapUrl}\n\n` +
      `✨ With Best Compliments From: ${weddingData.compliments} ✨\n` +
      `🙏 ${weddingData.blessingNote} 🙏\n\n` +
      `Please view the complete royal invitation card here:\n` +
      `${window.location.href}`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  const handleCopyLink = () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2200);
    }
  };

  return (
    <section id="blessings" className="py-20 md:py-28 px-4 bg-wedding-gradient relative overflow-hidden text-center transition-colors duration-500">
      {/* Ambient Crimson & Gold Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-rose-950/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl border-2 border-amber-400/60 bg-gradient-to-b from-[#380813] via-[#2d0710] to-[#1a0308] p-8 sm:p-12 md:p-14 shadow-[0_30px_70px_rgba(0,0,0,0.95),_0_0_35px_rgba(225,190,101,0.2)] space-y-8"
        >
          {/* Mandap Arch Ornament */}
          <div className="pt-2">
            <MandapIllustration className="w-28 h-16 mx-auto text-amber-400 filter drop-shadow-[0_0_10px_rgba(225,190,101,0.4)]" />
          </div>

          {/* 1. Best Compliments Section */}
          <div className="space-y-2">
            <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-amber-400/10 border border-amber-300/30 text-amber-200 text-xs font-cinzel uppercase tracking-[0.25em] font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              With Auspicious Warmth
            </span>
            <h3 className="font-cinzel text-xs sm:text-sm text-amber-300/90 uppercase tracking-widest font-bold pt-2">
              With Best Compliments From
            </h3>
            <p className="font-brush text-5xl sm:text-6xl md:text-7xl text-gold-gradient font-normal leading-tight drop-shadow-md py-1">
              {weddingData.compliments}
            </p>
          </div>

          <div className="w-24 h-[1.5px] bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto" />

          {/* 2. Blessing Request Note */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#24040b]/90 border-2 border-amber-400/50 max-w-xl mx-auto shadow-inner relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-amber-400/5 to-transparent pointer-events-none" />
            
            <Heart className="w-7 h-7 text-amber-400 fill-amber-400/80 mx-auto mb-3 filter drop-shadow-[0_0_8px_rgba(225,190,101,0.5)]" />
            
            <p className="font-cinzel font-black text-xl sm:text-2xl md:text-3xl text-gold-gradient tracking-widest uppercase leading-relaxed">
              ✦ {weddingData.blessingNote} ✦
            </p>
          </div>

          {/* 3. Pre-filled WhatsApp Share & Copy CTA */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleShareWhatsApp}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white font-cinzel font-bold text-xs sm:text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2.5 shadow-lg hover:shadow-emerald-500/30 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Share via WhatsApp</span>
            </button>

            <button
              onClick={handleCopyLink}
              className="w-full sm:w-auto px-7 py-3.5 rounded-full border border-amber-400/60 bg-[#1f040a]/80 hover:bg-amber-400/20 active:scale-95 text-amber-200 font-cinzel font-bold text-xs sm:text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              {copiedLink ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-300">Invitation Link Copied!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-4 h-4 text-amber-400" />
                  <span>Copy Invitation Link</span>
                </>
              )}
            </button>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default Blessings;
