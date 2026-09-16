import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Invitation from './components/Invitation';
import WeddingEvent from './components/WeddingEvent';
import Countdown from './components/Countdown';
import ReceptionEvent from './components/ReceptionEvent';
import FamilyDetails from './components/FamilyDetails';
import Venue from './components/Venue';
import Blessings from './components/Blessings';
import MusicPlayer from './components/MusicPlayer';
import Footer from './components/Footer';

// Handcrafted Royal Envelope & Velvet Curtain Raiser Ceremony
import EnvelopeOpening from './components/EnvelopeOpening';

function App() {
  const [envelopeOpened, setEnvelopeOpened] = useState(false);
  const [replayCount, setReplayCount] = useState(0);
  const [autoPlayMusic, setAutoPlayMusic] = useState(false);

  const handleEnvelopeOpen = () => {
    setEnvelopeOpened(true);
    setAutoPlayMusic(true);
  };

  const handleReplayEnvelope = () => {
    setReplayCount((c) => c + 1);
    setEnvelopeOpened(false);
  };

  return (
    <div className="min-h-screen bg-[var(--color-bg-base,#041a13)] text-[var(--color-text-main,#fbf9f5)] selection:bg-amber-500 selection:text-slate-950 transition-colors duration-500">
      {/* Handcrafted Royal Envelope & Velvet Curtain Raiser Overlay */}
      {!envelopeOpened && (
        <EnvelopeOpening key={replayCount} onOpen={handleEnvelopeOpen} />
      )}

      {/* Sticky Navigation Bar */}
      <Navbar onReplayInvite={handleReplayEnvelope} />

      {/* Main Single Page Wedding Invitation Sections */}
      <main>
        <Hero />
        <Invitation />
        <WeddingEvent />
        <Countdown />
        <ReceptionEvent />
        <FamilyDetails />
        <Venue />
        <Blessings />
      </main>

      {/* Floating Audio Vinyl Sound Engine */}
      <MusicPlayer
        autoPlayTrigger={autoPlayMusic}
        onReplayEnvelope={handleReplayEnvelope}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
