// HowItWorks.js
import React from 'react';
import './styles.css'; // Ensure the CSS file is imported

function HowItWorks() {
  return (
    <section className="how-it-works">
      <div className="how-it-works-container">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <span className="step-number">1.</span>
            <div className="step-content">
              <h3>Input Your Dietary Preferences</h3>
              <p>Tell us about your dietary needs and preferences.</p>
            </div>
          </div>
          <div className="step">
            <span className="step-number">2.</span>
            <div className="step-content">
              <h3>Get Your Personalized Meal Plan</h3>
              <p>Receive a meal plan tailored to your preferences.</p>
            </div>
          </div>
          <div className="step">
            <span className="step-number">3.</span>
            <div className="step-content">
              <h3>Receive a Grocery List</h3>
              <p>Get a grocery list with all the ingredients you need.</p>
            </div>
          </div>
          <div className="step">
            <span className="step-number">4.</span>
            <div className="step-content">
              <h3>Enjoy Your Meals!</h3>
              <p>Prepare and enjoy delicious meals every day.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;