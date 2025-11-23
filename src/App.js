import React from 'react';
import './App.css';

// Components
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Research from './components/Research';
import Activities from './components/Activities';
import ImageCarousel from './components/ImageCarousel';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import DarkModeToggle from './components/DarkModeToggle';
import ScrollProgress from './components/ScrollProgress';

function App() {
  return (
    <div className="App">
      <ScrollProgress />
      <Navigation />
      <DarkModeToggle />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Research />
        <Activities />
        <ImageCarousel />
        <Contact />
      </main>
    </div>
  );
}

export default App;