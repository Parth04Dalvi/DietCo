import React, { useState } from "react";

const Calculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [activityLevel, setActivityLevel] = useState("");
  const [result, setResult] = useState(null);

  const calculateCalories = () => {
    // Example calorie calculation formula
    const bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    const activityMultiplier = activityLevel === "high" ? 1.75 : activityLevel === "moderate" ? 1.55 : 1.2;
    const calories = bmr * activityMultiplier;

    setResult(Math.round(calories));
  };

  return (
    <div>
      <h1>Calorie Calculator</h1>
      <input
        type="number"
        placeholder="Weight (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      <input
        type="number"
        placeholder="Height (cm)"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <select value={activityLevel} onChange={(e) => setActivityLevel(e.target.value)}>
        <option value="">Select Activity Level</option>
        <option value="low">Low</option>
        <option value="moderate">Moderate</option>
        <option value="high">High</option>
      </select>
      <button onClick={calculateCalories}>Calculate</button>

      {result && <p>Your daily calorie needs: {result} kcal</p>}
    </div>
  );
};

export default Calculator;