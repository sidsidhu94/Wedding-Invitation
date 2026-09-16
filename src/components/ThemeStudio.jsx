import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, Type, Check, X, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeStudio = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme, font, setFont, THEMES, FONTS } = useTheme();

  return (
    <>
      {/* Floating Trigger Button */}
      <div className="fixed top-24 right-5 z-40">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(true)}
          className="group flex items-center gap-2 px-3.5 py-2 rounded-full bg-[var(--color-bg-surface)]/95 border-2 border-[var(--color-gold-border)] shadow-[0_6px_25px_rgba(0,0,0,0.4)] backdrop-blur-md text-[var(--color-gold-light)] hover:border-[var(--color-gold-mid)] transition-all cursor-pointer"
          title="Customize Wedding Theme & Fonts"
          aria-label="Customize Wedding Theme & Fonts"
        >
          <Palette className="w-4 h-4 text-[var(--color-gold-mid)] group-hover:rotate-45 transition-transform" />
          <span className="font-cinzel text-xs font-semibold tracking-wider hidden sm:inline">
            Colors & Fonts
          </span>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
          </span>
        </motion.button>
      </div>

      {/* Drawer / Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg rounded-3xl bg-[var(--color-bg-surface)] border-2 border-[var(--color-gold-border)] p-6 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            >
              {/* Decorative Header Glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-[var(--color-gold-mid)]/10 rounded-full blur-2xl pointer-events-none" />

              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[var(--color-gold-border)]/40 relative z-10">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-gold-border)] text-[var(--color-gold-light)]">
                    <Palette className="w-5 h-5 text-[var(--color-gold-mid)]" />
                  </div>
                  <div>
                    <h3 className="font-cinzel text-base md:text-lg font-bold text-gold-gradient">
                      Wedding Aesthetic Studio
                    </h3>
                    <p className="font-garamond text-xs text-[var(--color-text-muted)]">
                      Explore luxury color palettes & typography combinations
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] hover:bg-white/5 transition-colors cursor-pointer"
                  aria-label="Close aesthetic studio"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="space-y-6 py-4 overflow-y-auto pr-1 flex-1">
                {/* 1. Color Palettes */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-cinzel text-xs uppercase tracking-widest text-[var(--color-gold-light)] font-bold flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[var(--color-gold-mid)]" />
                      Curated Color Palettes
                    </span>
                    <span className="text-[10px] text-[var(--color-text-muted)] font-garamond italic">
                      Click to apply live
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {THEMES.map((item) => {
                      const isSelected = theme === item.id;
                      return (
                        <button
                          key={item.id}
                          onClick={() => setTheme(item.id)}
                          className={`group text-left p-3 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                            isSelected
                              ? 'border-[var(--color-gold-mid)] bg-[var(--color-bg-card)] shadow-lg ring-1 ring-[var(--color-gold-mid)]'
                              : 'border-white/10 hover:border-[var(--color-gold-border)] hover:bg-white/5 bg-[var(--color-bg-base)]/60'
                          }`}
                        >
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <p className="font-cinzel text-xs font-semibold text-[var(--color-text-main)]">
                                {item.name}
                              </p>
                              <span className="text-[10px] font-garamond text-[var(--color-text-muted)] line-clamp-1">
                                {item.description}
                              </span>
                            </div>
                            {isSelected && (
                              <div className="w-4 h-4 rounded-full bg-[var(--color-gold-mid)] text-black flex items-center justify-center shrink-0 ml-1">
                                <Check className="w-2.5 h-2.5 stroke-[3]" />
                              </div>
                            )}
                          </div>

                          {/* Swatch preview dots */}
                          <div className="flex items-center gap-1.5 mt-2">
                            {item.swatches.map((color, idx) => (
                              <span
                                key={idx}
                                className="w-5 h-5 rounded-full border border-black/30 shadow-sm"
                                style={{ backgroundColor: color }}
                              />
                            ))}
                            <span className="text-[10px] uppercase font-cinzel ml-auto px-1.5 py-0.5 rounded bg-black/40 text-[var(--color-gold-light)] border border-white/5">
                              {item.badge}
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 2. Typography Styles */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-cinzel text-xs uppercase tracking-widest text-[var(--color-gold-light)] font-bold flex items-center gap-1.5">
                      <Type className="w-3.5 h-3.5 text-[var(--color-gold-mid)]" />
                      Professional Fonts (Couple Names)
                    </span>
                    <span className="text-[10px] text-[var(--color-text-muted)] font-garamond italic">
                      Live preview
                    </span>
                  </div>

                  <div className="grid grid-cols-1 gap-2.5">
                    {FONTS.map((item) => {
                      const isSelected = font === item.id;
                      return (
                        <button
                          key={item.id}
                          onClick={() => setFont(item.id)}
                          className={`p-3.5 rounded-2xl border transition-all text-left flex items-center justify-between cursor-pointer ${
                            isSelected
                              ? 'border-[var(--color-gold-mid)] bg-[var(--color-bg-card)] shadow-lg ring-1 ring-[var(--color-gold-mid)]'
                              : 'border-white/10 hover:border-[var(--color-gold-border)] hover:bg-white/5 bg-[var(--color-bg-base)]/60'
                          }`}
                        >
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <p className="font-cinzel text-xs font-semibold text-[var(--color-text-main)]">
                                {item.name}
                              </p>
                              <span className="text-[10px] px-1.5 py-0.5 rounded bg-[var(--color-gold-mid)]/15 text-[var(--color-gold-light)] font-cinzel">
                                {item.badge}
                              </span>
                            </div>
                            <p className={`${item.className} text-xl md:text-2xl text-gold-gradient mt-1`}>
                              {item.preview}
                            </p>
                            <p className="text-[11px] font-garamond text-[var(--color-text-muted)] mt-0.5">
                              {item.subtitle}
                            </p>
                          </div>

                          {isSelected && (
                            <div className="w-5 h-5 rounded-full bg-[var(--color-gold-mid)] text-black flex items-center justify-center shrink-0 ml-3">
                              <Check className="w-3 h-3 stroke-[3]" />
                            </div>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="pt-4 border-t border-[var(--color-gold-border)]/30 flex items-center justify-between">
                <span className="text-[11px] text-[var(--color-text-muted)] font-garamond italic">
                  Changes apply immediately & save automatically
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-5 py-2 rounded-xl bg-gradient-to-r from-[var(--color-gold-mid)] to-[var(--color-gold-dark)] text-slate-950 font-cinzel text-xs font-bold uppercase tracking-wider shadow-lg hover:brightness-110 transition-all cursor-pointer"
                >
                  Done
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ThemeStudio;
