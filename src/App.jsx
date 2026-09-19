import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Invitation from './components/Invitation';
import WeddingEvent from './components/WeddingEvent';
import Countdown from './components/Countdown';
import ReceptionEvent from './components/ReceptionEvent';
import Venue from './components/Venue';
import Blessings from './components/Blessings';
import MusicPlayer from './components/MusicPlayer';
import Footer from './components/Footer';

// Bespoke Royal Keepsake Gift Box Opening
import GiftBoxOpening from './components/openings/GiftBoxOpening';

function App() {
  const [invitationOpened, setInvitationOpened] = useState(false);
  const [replayCount, setReplayCount] = useState(0);
  const [autoPlayMusic, setAutoPlayMusic] = useState(false);

  const handleInviteStart = () => {
    setAutoPlayMusic(true);
  };

  const handleInviteOpen = () => {
    setInvitationOpened(true);
    setAutoPlayMusic(true);
  };

  const handleReplayInvite = () => {
    setReplayCount((c) => c + 1);
    setInvitationOpened(false);
  };

  return (
    <div className="min-h-screen bg-[var(--color-bg-base,#1f040a)] text-[var(--color-text-main,#fcf4f6)] selection:bg-amber-400 selection:text-slate-950 transition-colors duration-500">
      {/* Royal Keepsake Gift Box Opening Ceremony */}
      {!invitationOpened && (
        <GiftBoxOpening
          key={replayCount}
          onStartOpen={handleInviteStart}
          onOpen={handleInviteOpen}
        />
      )}

      {/* Sticky Navigation Bar - Only shown after invitation is opened */}
      {invitationOpened && <Navbar />}

      {/* Main Single Page Wedding Invitation Sections */}
      <main>
        <Hero />
        <Invitation />
        <WeddingEvent />
        <Countdown />
        <ReceptionEvent />
        <Venue />
        <Blessings />
      </main>

      {/* Floating Audio Vinyl Sound Engine */}
      <MusicPlayer
        autoPlayTrigger={autoPlayMusic}
        onReplayEnvelope={handleReplayInvite}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
