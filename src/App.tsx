import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Faculty from './components/Faculty';
import Results from './components/Results';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Resources from './components/Resources';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
        <Navigation />
        <main>
          <Hero />
          <About />
          <Faculty />
          <Results />
          <Gallery />
          <Reviews />
          <Resources />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;