import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Play, Disc, Music2 } from 'lucide-react';

/**
 * Wedding Background Music Player (Single Track)
 * Track: "Raga of Revenge (From DC)" by Anirudh Ravichander
 */
const TRACK = {
  title: 'Raga of Revenge',
  movie: 'DC',
  composer: 'Anirudh Ravichander',
  src: '/audio/wedding-bgm.m4a',
};

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [isMuted, setIsMuted] = useState(false);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const [showPrompt, setShowPrompt] = useState(true);

  const audioRef = useRef(null);

  // Sync volume changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  // Toggle Play / Pause
  const togglePlay = () => {
    setShowPrompt(false);
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch((err) => console.log('Audio playback error:', err));
      }
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    setIsMuted((prev) => !prev);
  };

  return (
    <div className="fixed bottom-5 left-5 z-50 select-none">
      {/* Hidden HTML5 Audio Element */}
      <audio
        ref={audioRef}
        src={TRACK.src}
        loop
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      {/* Gentle Floating Invitation Banner on First Visit */}
      <AnimatePresence>
        {showPrompt && !isPlaying && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            onClick={togglePlay}
            className="mb-2 cursor-pointer flex items-center gap-2 px-3.5 py-2 rounded-full bg-[var(--color-bg-surface)]/95 border border-[var(--color-gold-border)] shadow-[0_4px_20px_var(--color-gold-shadow)] text-[var(--color-gold-light)] text-xs tracking-wide backdrop-blur-md hover:border-[var(--color-gold-mid)] transition-all group"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-gold-mid)] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-gold-mid)]" />
            </span>
            <Music2 className="w-3.5 h-3.5 text-[var(--color-gold-mid)] group-hover:rotate-12 transition-transform" />
            <span className="font-cinzel tracking-wider">Play {TRACK.title} ({TRACK.movie})</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Audio Capsule */}
      <div className="flex items-center gap-3 bg-[var(--color-bg-surface)]/90 backdrop-blur-md border-2 border-[var(--color-gold-border)] rounded-full px-3 py-2 shadow-[0_6px_25px_rgba(0,0,0,0.6)] hover:border-[var(--color-gold-mid)] transition-all">
        {/* Vinyl Disc Icon / Play Button */}
        <button
          onClick={togglePlay}
          className="relative group p-2 rounded-full bg-[var(--color-gold-mid)] text-slate-950 flex items-center justify-center shadow-md hover:brightness-110 transition-all cursor-pointer"
          title={isPlaying ? 'Pause Music' : `Play ${TRACK.title}`}
          aria-label={isPlaying ? 'Pause Music' : `Play ${TRACK.title}`}
        >
          {isPlaying ? (
            <Disc className="w-4 h-4 animate-spin [animation-duration:3s]" />
          ) : (
            <Play className="w-4 h-4 ml-0.5 fill-slate-950" />
          )}

          {/* Glowing pulse ring when playing */}
          {isPlaying && (
            <span className="absolute -inset-1 rounded-full border border-[var(--color-gold-mid)] animate-ping opacity-40 pointer-events-none" />
          )}
        </button>

        {/* Track Title and Information */}
        <div
          onClick={togglePlay}
          className="cursor-pointer max-w-[150px] sm:max-w-[190px] overflow-hidden"
          title={isPlaying ? 'Click to Pause' : 'Click to Play'}
        >
          <p className="text-xs font-cinzel text-amber-200 tracking-wide truncate font-semibold">
            {TRACK.title}
          </p>
          <p className="text-[10px] text-amber-300/70 truncate font-garamond italic">
            {TRACK.movie} • {TRACK.composer}
          </p>
        </div>

        {/* Mini Equalizer Bars */}
        <div className="flex items-end gap-[2px] h-3.5 shrink-0 px-1" onClick={togglePlay}>
          {isPlaying ? (
            <>
              <span className="w-[3px] bg-amber-400 rounded-full animate-[bounce_0.8s_ease-in-out_infinite] h-2" />
              <span className="w-[3px] bg-amber-400 rounded-full animate-[bounce_1.1s_ease-in-out_infinite_0.2s] h-3.5" />
              <span className="w-[3px] bg-amber-400 rounded-full animate-[bounce_0.9s_ease-in-out_infinite_0.4s] h-2.5" />
              <span className="w-[3px] bg-amber-400 rounded-full animate-[bounce_1.2s_ease-in-out_infinite_0.1s] h-1.5" />
            </>
          ) : (
            <>
              <span className="w-[3px] bg-stone-500 rounded-full h-1" />
              <span className="w-[3px] bg-stone-500 rounded-full h-1.5" />
              <span className="w-[3px] bg-stone-500 rounded-full h-1" />
              <span className="w-[3px] bg-stone-500 rounded-full h-0.5" />
            </>
          )}
        </div>

        {/* Volume Control Button and Popout Slider */}
        <div
          className="relative flex items-center"
          onMouseEnter={() => setShowVolumeSlider(true)}
          onMouseLeave={() => setShowVolumeSlider(false)}
        >
          <button
            onClick={toggleMute}
            className="p-1 rounded-full text-stone-300 hover:text-amber-300 transition-colors cursor-pointer"
            title={isMuted ? 'Unmute' : 'Mute'}
            aria-label="Toggle mute"
          >
            {isMuted || volume === 0 ? (
              <VolumeX className="w-4 h-4 text-rose-400" />
            ) : (
              <Volume2 className="w-4 h-4 text-amber-400" />
            )}
          </button>

          {/* Hover Volume Slider */}
          <AnimatePresence>
            {showVolumeSlider && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: -10 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.8, x: -10 }}
                transition={{ duration: 0.15 }}
                className="absolute left-full ml-2 flex items-center gap-2 bg-[var(--color-bg-surface)]/95 border border-[var(--color-gold-border)] rounded-full px-2.5 py-1.5 shadow-xl backdrop-blur-md"
              >
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={isMuted ? 0 : volume}
                  onChange={(e) => {
                    setVolume(parseFloat(e.target.value));
                    if (isMuted) setIsMuted(false);
                  }}
                  className="w-16 h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
                  aria-label="Volume Slider"
                />
                <span className="text-[10px] text-stone-300 font-mono w-6 text-right">
                  {isMuted ? '0%' : `${Math.round(volume * 100)}%`}
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
