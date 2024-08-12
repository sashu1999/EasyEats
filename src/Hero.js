import React from 'react';
import './styles.css'; // Ensure the CSS file is imported
import heroImage from './logo/main_image.jpg';

function Hero() {
    const navigateTo = (section) => {
        window.location.href = `#${section.toLowerCase().replace(/\s+/g, '-')}`;
      };
  return (
    <section className="hero-about">
      <div className="hero-about-content">
        <img src={heroImage} alt="Hero" className="hero-image" />
        <div className="about-content">
          <h1>Personalized Meal Plans Just for You!</h1>
          <h2>Enter your dietary preferences, and we'll do the rest.</h2>
          <div className="button-container">
            <button onClick={() => navigateTo('Input')}>Cook Up A Storm</button>
          </div>
          <div className="about-text">
          <p className="justified-text">We provide personalized meal plans tailored to your dietary preferences. Our service ensures you get a balanced diet with meals you love.</p>
          <p className="justified-text">Simply input your dietary preferences, and we'll generate a meal plan and grocery list just for you. Enjoy delicious meals every day!</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;