from flask import Flask, request, jsonify
from flask_cors import CORS
import openai
import json


app = Flask(__name__)
CORS(app)

openai.api_key = 'your_api_key'

@app.route('/get-meal', methods=['POST'])
def handle_data():
    data = request.json
    output = generate_meal_plan_and_grocery_list(data)
    return jsonify({
        "message": "Data received successfully",
        "result": output
    }), 200

def generate_meal_plan_and_grocery_list(data):
    prompt = f"""
    Based on the following dietary restrictions and preferences, generate a personalized meal plan for {data['mealsPerDay']} meals per day and a grocery list:
    
    - Allergies: {data['allergies']}
    - Diet Type: {data['dietType']}
    - Foods to Avoid: {data['foodsToAvoid']}
    - Cuisine Preferences: {data['cuisinePreferences']}
    - Favorite Ingredients: {data['favoriteIngredients']}
    - Disliked Ingredients: {data['dislikedIngredients']}
    - Meal Variety: {data['mealVariety']}
    - Cooking Time: {data['cookingTime']}
    - Caloric Intake: {data['caloricIntake']}
    - Macronutrient Preferences: {data['macronutrientPreferences']}
    - Dietary Goals: {data['dietaryGoals']}
    - Budget: {data['budget']}
    - Preferred Stores: {data['preferredStores']}
    - Bulk Buying: {data['bulkBuying']}
    - Cooking Skill Level: {data['cookingSkillLevel']}
    - Meal Prep Frequency: {data['mealPrepFrequency']}
    - Special Schedules: {data['specialSchedules']}

    I need the response to be within 4000 characters.

    Give the response in the form of a JSON. Just give me JSON and no other text. Don't display in code format
    """

    response = openai.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": prompt}
        ],
        max_tokens=4096, 
    )

    output = response.choices[0].message.content

    json_output = json.loads(output)

    return json_output

if __name__ == '__main__':
    app.run(debug=True)