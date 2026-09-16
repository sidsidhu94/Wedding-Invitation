import React, { useState } from 'react';
import { Palette, Type, X, Check, Sparkles } from 'lucide-react';

const colorThemes = [
  {
    id: 'peacock',
    name: 'Peacock Blue & Gold',
    bg: '#051923',
    cardBg: '#082032',
    accent: '#d4af37',
    gradient: 'from-[#082032] via-[#0b4f6c] to-[#051923]',
    preview: ['#051923', '#0b4f6c', '#d4af37']
  },
  {
    id: 'crimson',
    name: 'Royal Crimson & Gold',
    bg: '#2b0910',
    cardBg: '#420d18',
    accent: '#f59e0b',
    gradient: 'from-[#420d18] via-[#701a2b] to-[#2b0910]',
    preview: ['#2b0910', '#701a2b', '#f59e0b']
  },
  {
    id: 'emerald',
    name: 'Kerala Emerald & Gold',
    bg: '#022c22',
    cardBg: '#064e3b',
    accent: '#eab308',
    gradient: 'from-[#064e3b] via-[#047857] to-[#022c22]',
    preview: ['#022c22', '#047857', '#eab308']
  },
  {
    id: 'navy',
    name: 'Midnight Navy & Champagne',
    bg: '#090d16',
    cardBg: '#0f172a',
    accent: '#fef08a',
    gradient: 'from-[#0f172a] via-[#1e293b] to-[#090d16]',
    preview: ['#090d16', '#1e293b', '#fef08a']
  },
  {
    id: 'maroon',
    name: 'Imperial Maroon & Gold',
    bg: '#1f040a',
    cardBg: '#380813',
    accent: '#facc15',
    gradient: 'from-[#380813] via-[#5c0d20] to-[#1f040a]',
    preview: ['#1f040a', '#5c0d20', '#facc15']
  }
];

const fontPairings = [
  {
    id: 'great-vibes',
    name: 'Great Vibes & Cinzel',
    calligraphy: "'Great Vibes', cursive",
    serif: "'Cinzel', serif"
  },
  {
    id: 'alex-brush',
    name: 'Alex Brush & Garamond',
    calligraphy: "'Alex Brush', cursive",
    serif: "'Cormorant Garamond', serif"
  },
  {
    id: 'monte-carlo',
    name: 'MonteCarlo & Playfair',
    calligraphy: "'MonteCarlo', cursive",
    serif: "'Playfair Display', serif"
  },
  {
    id: 'cinzel-dec',
    name: 'Cinzel Decorative & Modern',
    calligraphy: "'Cinzel Decorative', serif",
    serif: "'Cinzel', serif"
  }
];

const ThemeCustomizer = ({ activeTheme, setActiveTheme, activeFont, setActiveFont }) => {
  const [isOpen, setIsOpen] = useState(false);

  const applyTheme = (theme) => {
    setActiveTheme(theme);
    document.documentElement.style.setProperty('--bg-main', theme.bg);
    document.documentElement.style.setProperty('--bg-card', theme.cardBg);
    document.documentElement.style.setProperty('--accent-gold', theme.accent);
  };

  const applyFont = (font) => {
    setActiveFont(font);
    document.documentElement.style.setProperty('--font-calligraphy', font.calligraphy);
    document.documentElement.style.setProperty('--font-cinzel', font.serif);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Drawer Panel */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 p-5 rounded-2xl bg-[#082032]/95 border-2 border-amber-400/80 backdrop-blur-xl shadow-2xl text-stone-100 space-y-5 animate-in fade-in slide-in-from-bottom-5">
          <div className="flex items-center justify-between border-b border-amber-500/30 pb-3">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <h3 className="font-cinzel text-sm font-bold text-amber-300 uppercase tracking-wider">
                Theme & Style Customizer
              </h3>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-stone-400 hover:text-amber-300 p-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Color Palettes Section */}
          <div>
            <label className="block text-xs font-cinzel text-stone-300 uppercase tracking-wider mb-2 font-semibold flex items-center gap-1.5">
              <Palette className="w-3.5 h-3.5 text-amber-400" />
              <span>Select Color Palette</span>
            </label>
            <div className="grid grid-cols-1 gap-2">
              {colorThemes.map((t) => (
                <button
                  key={t.id}
                  onClick={() => applyTheme(t)}
                  className={`p-2.5 rounded-xl border flex items-center justify-between transition-all cursor-pointer ${
                    activeTheme.id === t.id
                      ? 'border-amber-400 bg-amber-500/20 shadow-md'
                      : 'border-stone-800 bg-slate-900/60 hover:border-amber-500/50'
                  }`}
                >
                  <span className="text-xs font-garamond font-semibold text-stone-200">{t.name}</span>
                  <div className="flex items-center gap-1">
                    {t.preview.map((color, i) => (
                      <span
                        key={i}
                        className="w-3.5 h-3.5 rounded-full border border-stone-600 shadow-sm"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                    {activeTheme.id === t.id && <Check className="w-4 h-4 text-amber-400 ml-1" />}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Typography Pairings Section */}
          <div>
            <label className="block text-xs font-cinzel text-stone-300 uppercase tracking-wider mb-2 font-semibold flex items-center gap-1.5">
              <Type className="w-3.5 h-3.5 text-amber-400" />
              <span>Select Calligraphy & Font</span>
            </label>
            <div className="grid grid-cols-1 gap-2">
              {fontPairings.map((f) => (
                <button
                  key={f.id}
                  onClick={() => applyFont(f)}
                  className={`p-2.5 rounded-xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                    activeFont.id === f.id
                      ? 'border-amber-400 bg-amber-500/20 shadow-md'
                      : 'border-stone-800 bg-slate-900/60 hover:border-amber-500/50'
                  }`}
                >
                  <span className="text-xs font-garamond font-semibold text-stone-200">{f.name}</span>
                  {activeFont.id === f.id && <Check className="w-4 h-4 text-amber-400" />}
                </button>
              ))}
            </div>
          </div>

        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative p-3 rounded-full border-2 border-amber-400 bg-gradient-to-tr from-amber-500 to-amber-600 text-slate-950 shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center cursor-pointer"
        title="Customize Theme Colors & Fonts"
      >
        <Palette className="w-5 h-5 text-slate-950 group-hover:rotate-12 transition-transform" />
      </button>
    </div>
  );
};

export default ThemeCustomizer;
