import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import ThemeStudio from './components/ThemeStudio';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Invitation from './components/Invitation';
import Couple from './components/Couple';
import WeddingEvent from './components/WeddingEvent';
import Countdown from './components/Countdown';
import ReceptionEvent from './components/ReceptionEvent';
import FamilyDetails from './components/FamilyDetails';
import Venue from './components/Venue';
import Blessings from './components/Blessings';
import RSVP from './components/RSVP';
import MusicPlayer from './components/MusicPlayer';
import Footer from './components/Footer';

function App() {
  const handleOpenRsvp = () => {
    const el = document.querySelector('#rsvp');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[var(--color-bg-base)] text-[var(--color-text-main)] selection:bg-[var(--color-gold-mid)] selection:text-slate-950 transition-colors duration-500">
        {/* Sticky Navigation Bar */}
        <Navbar onOpenRsvp={handleOpenRsvp} />

        {/* Interactive Theme & Font Studio Switcher */}
        <ThemeStudio />

        {/* Main Single Page Wedding Invitation Sections */}
        <main>
          <Hero />
          <Invitation />
          <Couple />
          <WeddingEvent />
          <Countdown />
          <ReceptionEvent />
          <FamilyDetails />
          <Venue />
          <Blessings />
          <RSVP />
        </main>

        {/* Floating Background Music Player */}
        <MusicPlayer />

        {/* Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
