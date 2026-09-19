import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Music, Play, Pause, ChevronUp, Mail } from 'lucide-react';
import TRACKS from '../data/musicTracks';

const MusicPlayer = ({ autoPlayTrigger, onReplayEnvelope }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [volume, setVolume] = useState(0.75);
  const [isMuted, setIsMuted] = useState(false);
  
  const audioRef = useRef(null);
  const fadeIntervalRef = useRef(null);
  const currentTrack = TRACKS[0];

  // Smooth Volume Fade-in helper
  const fadeInAndPlay = useCallback(() => {
    if (!audioRef.current) return;
    const audio = audioRef.current;
    
    if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);
    
    audio.volume = 0;
    const playPromise = audio.play();
    
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
          const targetVol = isMuted ? 0 : volume;
          let currentVol = 0;
          const step = Math.max(0.04, targetVol / 15);
          
          fadeIntervalRef.current = setInterval(() => {
            currentVol = Math.min(targetVol, currentVol + step);
            if (audio) audio.volume = currentVol;
            if (currentVol >= targetVol) {
              clearInterval(fadeIntervalRef.current);
            }
          }, 100);
        })
        .catch((e) => {
          console.log('Autoplay gesture required:', e);
        });
    }
  }, [isMuted, volume]);

  // Initialize audio once
  useEffect(() => {
    const audio = new Audio();
    audio.src = currentTrack.src;
    audio.loop = true;
    audio.volume = 0.75;
    audioRef.current = audio;

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    audio.addEventListener('play', onPlay);
    audio.addEventListener('pause', onPause);

    return () => {
      if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);
      audio.removeEventListener('play', onPlay);
      audio.removeEventListener('pause', onPause);
      audio.pause();
      audio.src = '';
      audio.remove();
    };
  }, [currentTrack.src]);

  // Handle volume updates
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  // Trigger audio on autoPlayTrigger (e.g. envelope open)
  useEffect(() => {
    if (autoPlayTrigger) {
      fadeInAndPlay();
    }
  }, [autoPlayTrigger, fadeInAndPlay]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      fadeInAndPlay();
    }
  };

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  return (
    <div className="fixed bottom-6 left-5 z-40">
      {/* Audio Panel Popup */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 22, stiffness: 260 }}
            className="absolute bottom-16 left-0 w-80 sm:w-88 p-4 rounded-3xl bg-[var(--color-bg-surface,#07261d)]/95 border-2 border-[var(--color-gold-border,rgba(225,190,101,0.4))] shadow-[0_12px_40px_rgba(0,0,0,0.7)] backdrop-blur-xl text-stone-100 space-y-4"
          >
            {/* Header with Track Details */}
            <div className="flex items-center justify-between border-b border-[var(--color-gold-border,rgba(225,190,101,0.3))]/50 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[var(--color-gold-mid,#e1be65)]/20 border border-[var(--color-gold-mid,#e1be65)] flex items-center justify-center text-[var(--color-gold-light,#fef4cf)]">
                  <Music className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-cinzel text-xs font-bold uppercase tracking-widest text-[var(--color-gold-light,#fef4cf)]">
                    Wedding Music
                  </h4>
                  <p className="font-garamond text-[11px] text-[var(--color-text-muted,#d4cfc3)]">
                    Auspicious Ceremonial BGM
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsExpanded(false)}
                className="text-[var(--color-text-muted,#d4cfc3)] hover:text-white p-1 rounded-full cursor-pointer"
                aria-label="Close music menu"
              >
                <ChevronUp className="w-4 h-4 rotate-180" />
              </button>
            </div>

            {/* Currently Playing Card */}
            <div className="p-3.5 rounded-2xl bg-[var(--color-bg-card,#0c3529)]/80 border border-[var(--color-gold-border,rgba(225,190,101,0.3))] flex items-center gap-3.5">
              {/* Spinning Vinyl Indicator */}
              <div className="relative w-12 h-12 shrink-0">
                <motion.div
                  animate={{ rotate: isPlaying ? 360 : 0 }}
                  transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
                  className="w-full h-full rounded-full bg-gradient-to-tr from-slate-950 via-stone-900 to-amber-950 border-2 border-[var(--color-gold-mid,#e1be65)] shadow-md flex items-center justify-center"
                >
                  <div className="w-4 h-4 rounded-full border border-amber-300/40 bg-amber-500/30 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold-light,#fef4cf)]" />
                  </div>
                </motion.div>
                {isPlaying && (
                  <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                )}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="px-1.5 py-0.5 rounded text-[9px] font-cinzel font-semibold bg-[var(--color-gold-mid,#e1be65)]/20 text-[var(--color-gold-light,#fef4cf)] border border-[var(--color-gold-mid,#e1be65)]/30">
                    {currentTrack.tag}
                  </span>
                  {isPlaying && (
                    <div className="flex items-end gap-0.5 h-3 ml-auto">
                      <span className="w-0.5 h-2.5 bg-[var(--color-gold-mid,#e1be65)] animate-pulse" />
                      <span className="w-0.5 h-3.5 bg-[var(--color-gold-mid,#e1be65)] animate-bounce" />
                      <span className="w-0.5 h-2 bg-[var(--color-gold-mid,#e1be65)] animate-pulse" />
                    </div>
                  )}
                </div>
                <p className="font-cinzel text-xs font-semibold text-stone-100 truncate mt-1">
                  {currentTrack.title}
                </p>
                <p className="font-garamond text-[11px] text-[var(--color-text-muted,#d4cfc3)] truncate">
                  {currentTrack.subtitle}
                </p>
              </div>
            </div>

            {/* Playback Controls & Volume */}
            <div className="flex items-center justify-between gap-4 pt-1">
              <button
                onClick={togglePlay}
                className="px-4 py-2.5 rounded-full bg-gradient-to-r from-[var(--color-gold-mid,#e1be65)] to-[var(--color-gold-dark,#b38b34)] text-slate-950 font-cinzel text-xs font-bold shadow-lg hover:scale-105 active:scale-95 transition-transform cursor-pointer flex items-center gap-2"
                title={isPlaying ? 'Pause Music' : 'Play Music'}
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-3.5 h-3.5 fill-slate-950" />
                    <span>Pause</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 fill-slate-950 ml-0.5" />
                    <span>Play</span>
                  </>
                )}
              </button>

              {/* Volume Slider & Mute */}
              <div className="flex items-center gap-2 flex-1 max-w-[150px]">
                <button
                  onClick={toggleMute}
                  className="text-stone-300 hover:text-[var(--color-gold-light,#fef4cf)] p-1 cursor-pointer"
                  title={isMuted ? 'Unmute' : 'Mute'}
                >
                  {isMuted || volume === 0 ? (
                    <VolumeX className="w-4 h-4 text-rose-400" />
                  ) : (
                    <Volume2 className="w-4 h-4 text-[var(--color-gold-mid,#e1be65)]" />
                  )}
                </button>
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
                  className="w-full h-1 bg-stone-700 rounded-lg appearance-none cursor-pointer accent-[var(--color-gold-mid,#e1be65)]"
                />
              </div>
            </div>

            {/* Replay Invitation Ceremony Button */}
            {onReplayEnvelope && (
              <div className="pt-2 border-t border-[var(--color-gold-border,rgba(225,190,101,0.2))]/40">
                <button
                  onClick={() => {
                    setIsExpanded(false);
                    onReplayEnvelope();
                  }}
                  className="w-full py-2.5 px-3 rounded-xl border border-[var(--color-gold-mid,#e1be65)]/40 bg-[var(--color-bg-card,#0c3529)]/60 hover:bg-[var(--color-gold-mid,#e1be65)]/20 text-[var(--color-gold-light,#fef4cf)] font-cinzel text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm"
                >
                  <Mail className="w-3.5 h-3.5 text-[var(--color-gold-mid,#e1be65)]" />
                  <span>Replay Envelope & Curtain Ceremony</span>
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Vinyl Capsule Button */}
      <div className="flex items-center gap-2">
        <motion.button
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          onClick={togglePlay}
          className={`relative p-3 rounded-full border-2 border-[var(--color-gold-mid,#e1be65)] backdrop-blur-xl shadow-[0_8px_25px_rgba(0,0,0,0.5)] transition-all flex items-center justify-center cursor-pointer ${
            isPlaying
              ? 'bg-gradient-to-tr from-amber-600 via-amber-400 to-amber-500 text-slate-950 shadow-amber-500/30'
              : 'bg-[var(--color-bg-surface,#07261d)]/95 text-[var(--color-gold-light,#fef4cf)] hover:bg-[var(--color-bg-card,#0c3529)]'
          }`}
          title={isPlaying ? 'Pause Background Music' : 'Play Background Music'}
          aria-label="Toggle Wedding Music"
        >
          {/* Animated Gold Groove Vinyl */}
          <motion.div
            animate={{ rotate: isPlaying ? 360 : 0 }}
            transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
            className="w-5 h-5 flex items-center justify-center"
          >
            {isPlaying ? (
              <Music className="w-4 h-4 text-slate-950" />
            ) : (
              <VolumeX className="w-4 h-4 text-[var(--color-gold-light,#fef4cf)]" />
            )}
          </motion.div>

          {/* Pulse Ripple on Play */}
          {isPlaying && (
            <span className="absolute -inset-1 rounded-full border-2 border-amber-400 animate-ping opacity-40 pointer-events-none" />
          )}
        </motion.button>

        {/* Small Capsule Pill */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => setIsExpanded(!isExpanded)}
          className="hidden sm:flex items-center gap-2 py-2 px-3.5 rounded-full bg-[var(--color-bg-surface,#07261d)]/90 border border-[var(--color-gold-border,rgba(225,190,101,0.4))] shadow-lg backdrop-blur-md text-[var(--color-gold-light,#fef4cf)] hover:border-[var(--color-gold-mid,#e1be65)] transition-all cursor-pointer"
        >
          <span className="font-cinzel text-[11px] font-semibold tracking-wider max-w-[170px] truncate">
            {currentTrack.title}
          </span>
          <ChevronUp
            className={`w-3.5 h-3.5 text-[var(--color-gold-mid,#e1be65)] transition-transform duration-200 ${
              isExpanded ? 'rotate-180' : ''
            }`}
          />
        </motion.button>
      </div>
    </div>
  );
};

export default MusicPlayer;
