import React, { useState } from 'react';
import Result from './Result';
import './styles.css'; // Ensure the CSS file is imported

function InputSection() {
  const [formData, setFormData] = useState({
    allergies: '',
    dietType: '',
    foodsToAvoid: '',
    cuisinePreferences: '',
    favoriteIngredients: '',
    dislikedIngredients: '',
    mealsPerDay: '',
    mealTypes: '',
    mealVariety: '',
    cookingTime: '',
    caloricIntake: '',
    macronutrientPreferences: '',
    dietaryGoals: '',
    budget: '',
    preferredStores: '',
    bulkBuying: '',
    cookingSkillLevel: '',
    mealPrepFrequency: '',
    specialSchedules: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const [showErrorPopup, setShowErrorPopup] = useState(false);

  const [result, setResult] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:5000/get-meal', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        const result = await response.json();
        console.log('Success:', result);
        setResult(result);
        setShowResult(true);
      } else {
        setShowErrorPopup(true);
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      setShowErrorPopup(true);
      console.error('Error:', error);
    }
  };

  const handleGoAgain = () => {
    setShowResult(false);
    setResult(null);
  };

  const handleCancel = () => {
    setShowErrorPopup(false);
  };

    return (
      <section className="input-section">
        {!showResult ? (
        <form className="dietary-restrictions-form" onSubmit={handleSubmit}>
          <h3>Dietary Restrictions</h3>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="allergies">Allergies: <span style={{color: 'red'}}>*</span></label>
              <input type="text" id="allergies" name="allergies" placeholder="nuts, shellfish, dairy" value={formData.allergies} onChange={handleChange} required />
            </div>
            
            <div className="form-group">
              <label htmlFor="diet-type">Diet Type: <span style={{color: 'red'}}>*</span></label>
              <select id="diet-type" name="dietType" value={formData.dietType} onChange={handleChange} required>
                <option value="">Select a diet type</option>
                <option value="vegetarian">Vegetarian</option>
                <option value="vegan">Vegan</option>
                <option value="gluten-free">Gluten-Free</option>
                <option value="keto">Keto</option>
                <option value="paleo">Paleo</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="foods-to-avoid">Foods to Avoid: <span style={{color: 'red'}}>*</span></label>
              <input type="text" id="foods-to-avoid" name="foodsToAvoid" placeholder="sugar, processed foods, red meat" value={formData.foodsToAvoid} onChange={handleChange} required />
            </div>
          </div>
          
          <h3>Meal Preferences</h3>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="cuisine-preferences">Cuisine Preferences: <span style={{color: 'red'}}>*</span></label>
              <input type="text" id="cuisine-preferences" name="cuisinePreferences" placeholder="Italian, Indian, Mediterranean" value={formData.cuisinePreferences} onChange={handleChange} required />
            </div>
            
            <div className="form-group">
              <label htmlFor="favorite-ingredients">Favorite Ingredients: <span style={{color: 'red'}}>*</span></label>
              <input type="text" id="favorite-ingredients" name="favoriteIngredients" placeholder="chicken, broccoli, garlic" value={formData.favoriteIngredients} onChange={handleChange} required />
            </div>
            
            <div className="form-group">
              <label htmlFor="disliked-ingredients">Disliked Ingredients: <span style={{color: 'red'}}>*</span></label>
              <input type="text" id="disliked-ingredients" name="dislikedIngredients" placeholder="cilantro, mushrooms, tofu" value={formData.dislikedIngredients} onChange={handleChange} required />
            </div>
          </div>
          
          <h3>Meal Plan Details</h3>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="meals-per-day">Number of Meals per Day: <span style={{color: 'red'}}>*</span></label>
              <input type="number" id="meals-per-day" name="mealsPerDay" placeholder="3, 5" value={formData.mealsPerDay} onChange={handleChange} required />
            </div>
            
            <div className="form-group">
              <label htmlFor="meal-types">Meal Types: <span style={{color: 'red'}}>*</span></label>
              <input type="text" id="meal-types" name="mealTypes" placeholder="breakfast, lunch, dinner, snacks" value={formData.mealTypes} onChange={handleChange} required />
            </div>
            
            <div className="form-group">
              <label htmlFor="meal-variety">Meal Variety:</label>
              <select id="meal-variety" name="mealVariety" value={formData.mealVariety} onChange={handleChange}>
                <option value="">Select an option</option>
                <option value="different">Different Meals</option>
                <option value="repeating">Repeating Meals</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="cooking-time">Cooking Time: <span style={{color: 'red'}}>*</span></label>
              <input type="text" id="cooking-time" name="cookingTime" placeholder="30 mins, 1 hour" value={formData.cookingTime} onChange={handleChange} required />
            </div>
          </div>
          
          <h3>Nutritional Goals</h3>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="caloric-intake">Caloric Intake:</label>
              <input type="number" id="caloric-intake" name="caloricIntake" placeholder="2000" value={formData.caloricIntake} onChange={handleChange} />
            </div>
            
            <div className="form-group">
              <label htmlFor="macronutrient-preferences">Macronutrient Preferences:</label>
              <input type="text" id="macronutrient-preferences" name="macronutrientPreferences" placeholder="high protein, low carb" value={formData.macronutrientPreferences} onChange={handleChange} />
            </div>
            
            <div className="form-group">
              <label htmlFor="dietary-goals">Dietary Goals:</label>
              <input type="text" id="dietary-goals" name="dietaryGoals" placeholder="weight loss, muscle gain, balanced diet" value={formData.dietaryGoals} onChange={handleChange} />
            </div>
          </div>
          
          <h3>Shopping and Budget Preferences</h3>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="budget">Budget:</label>
              <input type="text" id="budget" name="budget" placeholder="weekly, monthly" value={formData.budget} onChange={handleChange} />
            </div>
            
            <div className="form-group">
              <label htmlFor="preferred-stores">Preferred Stores:</label>
              <input type="text" id="preferred-stores" name="preferredStores" placeholder="Walmart, Whole Foods" value={formData.preferredStores} onChange={handleChange} />
            </div>
            
            <div className="form-group">
              <label htmlFor="bulk-buying">Bulk Buying:</label>
              <input type="text" id="bulk-buying" name="bulkBuying" placeholder="yes, no" value={formData.bulkBuying} onChange={handleChange} />
            </div>
          </div>
          
          <h3>Lifestyle and Schedule</h3>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="cooking-skill-level">Cooking Skill Level:</label>
              <input type="text" id="cooking-skill-level" name="cookingSkillLevel" placeholder="beginner, intermediate, expert" value={formData.cookingSkillLevel} onChange={handleChange} />
            </div>
            
            <div className="form-group">
              <label htmlFor="meal-prep-frequency">Meal Prep Frequency:</label>
              <input type="text" id="meal-prep-frequency" name="mealPrepFrequency" placeholder="daily, meal prepping for the week" value={formData.mealPrepFrequency} onChange={handleChange} />
            </div>
            
            <div className="form-group">
              <label htmlFor="special-schedules">Special Schedules:</label>
              <input type="text" id="special-schedules" name="specialSchedules" placeholder="meals that can be frozen and reheated" value={formData.specialSchedules} onChange={handleChange} />
            </div>
          </div>
          
          <div className="text-box">
            <button>Cook Up</button>
          </div>
        </form>) : (
          <div>
          <Result result={result} handleGoAgain={handleGoAgain}/>
        </div>
        )}
        {showErrorPopup && (
        <div className="error-popup">
          <div className="error-popup-content">
            <p>Error: Please try later.</p>
            <button onClick={handleCancel}>Cancel</button>
          </div>
        </div>
      )}
      </section>
    );
  }

export default InputSection;