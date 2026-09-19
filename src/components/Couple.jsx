import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Camera } from 'lucide-react';
import weddingData from '../data/weddingData';
import PeacockFeather from './decorations/PeacockFeather';

// Imported Portrait Assets
import defaultGroomImg from '../assets/groom.png';
import defaultBrideImg from '../assets/bride.png';

const Couple = () => {
  const [groomPhoto, setGroomPhoto] = useState(defaultGroomImg);
  const [bridePhoto, setBridePhoto] = useState(defaultBrideImg);
  const [showPhotoUploader, setShowPhotoUploader] = useState(false);
  const [customGroomUrl, setCustomGroomUrl] = useState('');
  const [customBrideUrl, setCustomBrideUrl] = useState('');

  const handleApplyCustomPhotos = (e) => {
    e.preventDefault();
    if (customGroomUrl.trim()) setGroomPhoto(customGroomUrl.trim());
    if (customBrideUrl.trim()) setBridePhoto(customBrideUrl.trim());
    setShowPhotoUploader(false);
  };

  return (
    <section id="couple" className="py-20 px-4 bg-peacock-gradient relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-garamond italic text-amber-300 text-lg md:text-xl">Two Hearts, One Eternal Union</span>
            <h2 className="font-cinzel text-3xl md:text-5xl font-bold text-gold-gradient tracking-wider uppercase mt-1">
              The Groom & The Bride
            </h2>
            <div className="w-28 h-[2px] bg-amber-400 mx-auto mt-3" />

            {/* Photo Customizer Toggle */}
            <div className="mt-4">
              <button
                onClick={() => setShowPhotoUploader(!showPhotoUploader)}
                className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-amber-500/40 bg-slate-900/60 hover:bg-amber-500/20 text-amber-300 text-xs font-cinzel tracking-wider transition-all cursor-pointer"
              >
                <Camera className="w-3.5 h-3.5" />
                <span>{showPhotoUploader ? 'Close Photo Options' : 'Custom Photo Link'}</span>
              </button>
            </div>

            {/* Custom Photo URL Input Form */}
            {showPhotoUploader && (
              <form onSubmit={handleApplyCustomPhotos} className="mt-4 max-w-md mx-auto p-4 rounded-2xl bg-slate-900/90 border border-amber-400/60 text-left space-y-3">
                <div>
                  <label className="block text-[11px] font-cinzel text-amber-300 uppercase tracking-widest mb-1">
                    Groom Photo URL (Sidharth)
                  </label>
                  <input
                    type="url"
                    placeholder="https://..."
                    value={customGroomUrl}
                    onChange={(e) => setCustomGroomUrl(e.target.value)}
                    className="w-full px-3 py-1.5 rounded-lg bg-[#082032] border border-amber-500/30 text-stone-100 text-xs focus:outline-none focus:border-amber-400"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-cinzel text-amber-300 uppercase tracking-widest mb-1">
                    Bride Photo URL (Anjusha)
                  </label>
                  <input
                    type="url"
                    placeholder="https://..."
                    value={customBrideUrl}
                    onChange={(e) => setCustomBrideUrl(e.target.value)}
                    className="w-full px-3 py-1.5 rounded-lg bg-[#082032] border border-amber-500/30 text-stone-100 text-xs focus:outline-none focus:border-amber-400"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-cinzel font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Update Couple Photos
                </button>
              </form>
            )}

          </motion.div>
        </div>

        {/* Groom & Bride Portrait Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-stretch max-w-4xl mx-auto">
          
          {/* Groom Portrait Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group relative rounded-3xl border-2 border-amber-500/50 bg-slate-900/90 backdrop-blur-md p-6 md:p-8 flex flex-col items-center text-center shadow-2xl hover:border-amber-400 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute top-4 left-4 opacity-40">
              <PeacockFeather className="w-12 h-20" />
            </div>

            {/* Regal Gold Photo Frame */}
            <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full p-2 bg-gradient-to-tr from-amber-500 via-amber-300 to-amber-600 shadow-[0_0_30px_rgba(212,175,55,0.4)] mb-6 group-hover:scale-105 transition-transform duration-500">
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-amber-200 relative bg-[#082032]">
                <img
                  src={groomPhoto}
                  alt={weddingData.groom.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-amber-500 text-slate-950 p-2.5 rounded-full shadow-lg">
                <Sparkles className="w-5 h-5" />
              </div>
            </div>

            <span className="font-cinzel text-amber-400 text-xs tracking-widest uppercase mb-1 font-semibold">The Groom</span>
            <h3 className="font-calligraphy text-4xl md:text-5xl text-gold-gradient font-bold mb-3">
              {weddingData.groom.name}
            </h3>

            <div className="w-20 h-[1px] bg-amber-500/40 my-3" />

            <div className="space-y-2 text-stone-300 font-garamond text-base md:text-lg">
              <p className="font-semibold text-amber-200">{weddingData.groom.parents}</p>
              <p className="text-stone-400 text-sm">{weddingData.groom.addressLines[0]}</p>
              <p className="text-stone-400 text-sm">{weddingData.groom.addressLines[1]}</p>
            </div>
          </motion.div>

          {/* Bride Portrait Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group relative rounded-3xl border-2 border-amber-500/50 bg-slate-900/90 backdrop-blur-md p-6 md:p-8 flex flex-col items-center text-center shadow-2xl hover:border-amber-400 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute top-4 right-4 opacity-40">
              <PeacockFeather className="w-12 h-20" flipped />
            </div>

            {/* Regal Gold Photo Frame */}
            <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full p-2 bg-gradient-to-tr from-amber-500 via-amber-300 to-amber-600 shadow-[0_0_30px_rgba(212,175,55,0.4)] mb-6 group-hover:scale-105 transition-transform duration-500">
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-amber-200 relative bg-[#082032]">
                <img
                  src={bridePhoto}
                  alt={weddingData.bride.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-2 -left-2 bg-amber-500 text-slate-950 p-2.5 rounded-full shadow-lg">
                <Heart className="w-5 h-5 fill-slate-950" />
              </div>
            </div>

            <span className="font-cinzel text-amber-400 text-xs tracking-widest uppercase mb-1 font-semibold">The Bride</span>
            <h3 className="font-calligraphy text-4xl md:text-5xl text-gold-gradient font-bold mb-3">
              {weddingData.bride.name}
            </h3>

            <div className="w-20 h-[1px] bg-amber-500/40 my-3" />

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
