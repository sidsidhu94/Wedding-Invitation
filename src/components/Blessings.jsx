import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Share2, Sparkles, Check, MessageCircle } from 'lucide-react';
import weddingData from '../data/weddingData';
import MandapIllustration from './decorations/MandapIllustration';

const Blessings = () => {
  const [copiedLink, setCopiedLink] = useState(false);

  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(
      `🪔 *Wedding Invitation* 🪔\n\n` +
      `We cordially invite you and your family to the wedding celebrations of\n` +
      `*Sidharth Pankajakshan & Anjusha M*\n\n` +
      `📅 *Wedding:* Sunday, 18th October 2026\n` +
      `📍 *Venue:* Karakkakavu Auditorium, Kalikkadavu, Kasaragod\n\n` +
      `📅 *Reception:* MON | 19 | OCT 2026 (6:00 PM - 9:00 PM)\n` +
      `📍 *Venue:* Exora Conventions, Talap\n\n` +
      `Please view the complete invitation card here:\n` +
      `${window.location.href}`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <section id="blessings" className="py-20 px-4 bg-wedding-gradient relative overflow-hidden text-center transition-colors duration-500">
      <div className="max-w-3xl mx-auto relative z-10">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl border-2 border-[var(--color-gold-border)] bg-[var(--color-bg-surface)]/90 backdrop-blur-md p-8 md:p-12 shadow-2xl space-y-8"
        >
          {/* Mandap Ornament */}
          <MandapIllustration className="w-24 h-14 mx-auto" />

          {/* Compliments Section */}
          <div className="space-y-1">
            <h3 className="font-cinzel text-xs md:text-sm text-[var(--color-gold-light)] uppercase tracking-widest font-semibold">
              With Best Compliments From
            </h3>
            <p className="font-calligraphy text-4xl md:text-5xl text-gold-gradient font-bold pt-1">
              {weddingData.compliments}
            </p>
          </div>

          <div className="w-20 h-[1px] bg-[var(--color-gold-border)] mx-auto" />

          {/* Blessing Request Note */}
          <div className="p-6 rounded-2xl bg-[var(--color-bg-card)]/80 border border-[var(--color-gold-border)] max-w-xl mx-auto">
            <Heart className="w-6 h-6 text-amber-400 fill-amber-400 mx-auto mb-3" />
            <p className="font-garamond font-bold text-xl md:text-2xl text-amber-100 italic leading-relaxed">
              "{weddingData.blessingNote}"
            </p>
          </div>

          {/* WhatsApp Share CTA */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleShareWhatsApp}
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-cinzel font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Share via WhatsApp</span>
            </button>

            <button
              onClick={handleCopyLink}
              className="w-full sm:w-auto px-6 py-3 rounded-full border border-amber-400/60 hover:bg-amber-400/10 text-amber-200 font-cinzel font-medium text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              {copiedLink ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-300">Link Copied!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-4 h-4" />
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
