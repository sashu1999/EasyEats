import React from 'react';
import './styles.css'; // Assuming you will create a CSS file for styling

const Result = ({ result, handleGoAgain }) => {
  const { GroceryList, MealPlan } = result.result;
  const days = Object.keys(MealPlan);
  const halfLength = Math.ceil(days.length / 2);
  
  return (
    <section id="result">
      <div className="meal-plan">
        <h2>Meal Plan</h2>
        <div className="days-grid">
          <div className="day-line">
            {days.slice(0, halfLength).map(day => (
              <div key={day} className="meal-day">
                <h3>{day}</h3>
                {MealPlan[day]["Breakfast"] && (
                  <div className="meal-item">
                    <strong>Breakfast:</strong> {MealPlan[day]["Breakfast"]}
                  </div>
                )}
                {MealPlan[day]["Lunch"] && (
                  <div className="meal-item">
                    <strong>Lunch:</strong> {MealPlan[day]["Lunch"]}
                  </div>
                )}
                {MealPlan[day]["Dinner"] && (
                  <div className="meal-item">
                    <strong>Dinner:</strong> {MealPlan[day]["Dinner"]}
                  </div>
                )}
                {MealPlan[day]["Snack"] && (
                  <div className="meal-item">
                    <strong>Snack 1:</strong> {MealPlan[day]["Snack"]}
                  </div>
                )}
                {MealPlan[day]["Afternoon Snack"] && (
                  <div className="meal-item">
                    <strong>Snack 2:</strong> {MealPlan[day]["Afternoon Snack"]}
                  </div>
                )}
              </div>
            ))}
          </div>
          {days.length > halfLength && (
            <div className="day-line">
              {days.slice(halfLength).map(day => (
                <div key={day} className="meal-day">
                  <h3>{day}</h3>
                  {MealPlan[day]["Breakfast"] && (
                    <div className="meal-item">
                      <strong>Breakfast:</strong> {MealPlan[day]["Breakfast"]}
                    </div>
                  )}
                  {MealPlan[day]["Lunch"] && (
                    <div className="meal-item">
                      <strong>Lunch:</strong> {MealPlan[day]["Lunch"]}
                    </div>
                  )}
                  {MealPlan[day]["Dinner"] && (
                    <div className="meal-item">
                      <strong>Dinner:</strong> {MealPlan[day]["Dinner"]}
                    </div>
                  )}
                  {MealPlan[day]["Snack"] && (
                    <div className="meal-item">
                      <strong>Snack 1:</strong> {MealPlan[day]["Snack"]}
                    </div>
                  )}
                  {MealPlan[day]["Afternoon Snack"] && (
                    <div className="meal-item">
                      <strong>Snack 2:</strong> {MealPlan[day]["Afternoon Snack"]}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
        <button onClick={handleGoAgain}>Go Again</button>
      </div>
      <div className="grocery-list">
        <h2>Grocery List</h2>
        <ul className="grocery-list-columns">
          {GroceryList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Result;
