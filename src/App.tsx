import React from 'react';
import Hero from './components/pages/Hero/Hero';
import Values from './components/pages/Values/Values';
import Modules from './components/pages/Modules/Modules';
import Contact from './components/pages/Contact/Contact';

function App() {
  return (
    <div className='App'>
      <Hero />
      <Values />
      <Modules />
      <Contact />
    </div>
  );
}

export default App;
