import React from 'react';
import Header from './Header';
import Hero from './Hero';
import HowItWorks from './HowItWorks';
import Input from './Input'
import './styles.css';

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="how-it-works">
          <HowItWorks />
        </section>
        <section id="input">
          <Input />
        </section>
      </main>
    </div>
  );
}

export default App;