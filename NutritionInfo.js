/*
import React, { useState } from "react";

const NutritionInfo = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://api.example.com/nutrition/${query}`
      );
      const result = await response.json();
      setData(result);
      setShowModal(true); // Show the modal on successful data fetch
    } catch (error) {
      console.error("Error fetching nutrition data:", error);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <h1>Nutrition Information</h1>
      <input
        type="text"
        placeholder="Search food item"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {showModal && data && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={handleCloseModal}>
              &times;
            </span>
            <h2>{data.name}</h2>
            <p>Calories: {data.calories}</p>
            <p>Proteins: {data.proteins}</p>
            <p>Carbs: {data.carbs}</p>
          </div>
        </div>
      )}
    </div>
  );
};
*/

import React, { useState } from "react";

const NutritionInfo = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://api.example.com/nutrition/${query}`
      );
      const result = await response.json();
      setData(result);
      setShowModal(true); // Show the modal on successful data fetch
    } catch (error) {
      console.error("Error fetching nutrition data:", error);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <h1>Nutrition Information</h1>
      <input
        type="text"
        placeholder="Search food item"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {showModal && data && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={handleCloseModal}>
              &times;
            </span>
            <h2>{data.name}</h2>
            <p>Calories: {data.calories}</p>
            <p>Proteins: {data.proteins}</p>
            <p>Carbs: {data.carbs}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default NutritionInfo;
