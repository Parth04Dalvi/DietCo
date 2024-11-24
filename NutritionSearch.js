import React, { useState } from 'react';

const NutritionSearch = () => {
  const [foodItem, setFoodItem] = useState('');
  const [nutritionData, setNutritionData] = useState(null);

  const fetchNutritionData = async () => {
    const apiUrl = "https://trackapi.nutritionix.com/v2/natural/nutrients";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-app-id": "6507aef0",
        "x-app-key": "e66d1caead37ef1fcb0a1e59b2ea9a24",
      },
      body: JSON.stringify({ query: foodItem }),
    };

    try {
      const response = await fetch(apiUrl, options);
      const data = await response.json();
      if (response.ok) {
        setNutritionData(data.foods[0]);
      } else {
        alert("No nutrition data found for this item");
      }
    } catch (error) {
      console.error("Error fetching nutrition data:", error);
    }
  };

  return (
    <div>
      <h2>Find Nutrition Information</h2>
      <input
        type="text"
        value={foodItem}
        onChange={(e) => setFoodItem(e.target.value)}
        placeholder="Enter food item..."
      />
      <button onClick={fetchNutritionData}>Search</button>
      {nutritionData && (
        <div>
          <h3>Nutrition Info for {nutritionData.food_name}</h3>
          <p>Calories: {nutritionData.nf_calories} kcal</p>
          <p>Carbs: {nutritionData.nf_total_carbohydrate} g</p>
          <p>Fat: {nutritionData.nf_total_fat} g</p>
          <p>Protein: {nutritionData.nf_protein} g</p>
        </div>
      )}
    </div>
  );
};

export default NutritionSearch;