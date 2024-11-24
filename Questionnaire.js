import React, { useState } from "react";

const Questionnaire = () => {
  const [formData, setFormData] = useState({
    age: "",
    weight: "",
    goals: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // API call to submit questionnaire
    fetch("https://api.example.com/questionnaire", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Questionnaire submitted:", data);
      })
      .catch((error) => {
        console.error("Error submitting questionnaire:", error);
      });
  };

  return (
    <div>
      <h1>Health Questionnaire</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
        />
        <input
          type="number"
          name="weight"
          placeholder="Weight"
          value={formData.weight}
          onChange={handleChange}
        />
        <input
          type="text"
          name="goals"
          placeholder="Fitness Goals"
          value={formData.goals}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Questionnaire;