import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, Heart, X, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

const RSVP = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    guests: '1',
    attending: 'yes',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) return;

    // Trigger celebratory confetti burst
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#d4af37', '#fef08a', '#0b4f6c', '#059669', '#dc2626']
    });

    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({ name: '', guests: '1', attending: 'yes', message: '' });
    if (onClose) onClose();
  };

  return (
    <section id="rsvp" className="py-20 px-4 bg-[var(--color-bg-base)] relative transition-colors duration-500">
      <div className="max-w-2xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="font-garamond italic text-[var(--color-gold-light)] text-lg">Send Your Wishes</span>
          <h2 className="font-cinzel text-3xl md:text-5xl font-bold text-gold-gradient tracking-widest uppercase mt-1">
            RSVP & Blessings
          </h2>
          <p className="font-garamond text-[var(--color-text-muted)] text-sm md:text-base mt-2">
            Please let us know if you will be gracing us with your presence.
          </p>
          <div className="w-24 h-[2px] bg-[var(--color-gold-mid)] mx-auto mt-3" />
        </div>

        {/* RSVP Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl border-2 border-[var(--color-gold-border)] bg-[var(--color-bg-surface)]/90 backdrop-blur-md p-6 md:p-10 shadow-2xl relative"
        >
          {submitted ? (
            <div className="text-center py-10 space-y-6">
              <div className="w-16 h-16 rounded-full bg-amber-500/20 border-2 border-amber-400 text-amber-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="font-cinzel text-2xl font-bold text-gold-gradient uppercase">
                Thank You, {formData.name}!
              </h3>
              <p className="font-garamond text-stone-300 text-lg max-w-md mx-auto leading-relaxed">
                Your response has been saved. We look forward to receiving your blessings and celebrating together!
              </p>
              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-full border border-amber-400 text-amber-300 hover:bg-amber-400/10 font-cinzel text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                Submit Another Response
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Full Name */}
              <div>
                <label className="block font-cinzel text-xs text-amber-300 uppercase tracking-widest mb-2 font-semibold">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-gold-border)] text-[var(--color-text-main)] placeholder-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-gold-mid)] font-garamond text-base transition-colors"
                />
              </div>

              {/* Attendance Choice */}
              <div>
                <label className="block font-cinzel text-xs text-[var(--color-gold-light)] uppercase tracking-widest mb-2 font-semibold">
                  Will You Attend? *
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, attending: 'yes' })}
                    className={`py-3 px-4 rounded-xl border text-center font-cinzel text-xs uppercase tracking-wider transition-all cursor-pointer ${
                      formData.attending === 'yes'
                        ? 'bg-[var(--color-gold-mid)] text-slate-950 border-[var(--color-gold-light)] font-bold shadow-md'
                        : 'bg-[var(--color-bg-card)] text-[var(--color-text-muted)] border-[var(--color-gold-border)] hover:border-[var(--color-gold-mid)]'
                    }`}
                  >
                    Joyfully Accept
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, attending: 'no' })}
                    className={`py-3 px-4 rounded-xl border text-center font-cinzel text-xs uppercase tracking-wider transition-all cursor-pointer ${
                      formData.attending === 'no'
                        ? 'bg-slate-700 text-stone-100 border-slate-500 font-bold'
                        : 'bg-[var(--color-bg-card)] text-[var(--color-text-muted)] border-[var(--color-gold-border)] hover:border-[var(--color-gold-mid)]'
                    }`}
                  >
                    Regretfully Decline
                  </button>
                </div>
              </div>

              {/* Number of Guests */}
              {formData.attending === 'yes' && (
                <div>
                  <label className="block font-cinzel text-xs text-[var(--color-gold-light)] uppercase tracking-widest mb-2 font-semibold">
                    Number of Guests Attending
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-gold-border)] text-[var(--color-text-main)] focus:outline-none focus:border-[var(--color-gold-mid)] font-garamond text-base transition-colors cursor-pointer"
                  >
                    <option value="1">1 Person</option>
                    <option value="2">2 Persons</option>
                    <option value="3">3 Persons</option>
                    <option value="4">4 Persons</option>
                    <option value="5+">5 or more (Family)</option>
                  </select>
                </div>
              )}

              {/* Personal Blessing / Message */}
              <div>
                <label className="block font-cinzel text-xs text-[var(--color-gold-light)] uppercase tracking-widest mb-2 font-semibold">
                  Personal Message / Blessings for the Couple
                </label>
                <textarea
                  rows="3"
                  placeholder="Share your warm wishes..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-gold-border)] text-[var(--color-text-main)] placeholder-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-gold-mid)] font-garamond text-base transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-cinzel font-bold text-sm tracking-widest uppercase shadow-lg hover:shadow-amber-500/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Submit RSVP & Blessings</span>
              </button>

            </form>
          )}

        </motion.div>

      </div>
    </section>
  );
};

export default RSVP;
