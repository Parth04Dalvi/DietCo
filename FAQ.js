import React, { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqs = [
    {
      question: "What is DietCo?",
      answer: "DietCo is a personalized nutrition and diet tracking platform.",
    },
    {
      question: "How do I upload my nutrition plan?",
      answer: "You can upload your nutrition plan on the 'Nutrition Plans' page.",
    },
    {
      question: "How is my data used?",
      answer: "Your data is used to provide personalized nutrition insights and suggestions.",
    },
    // Add more FAQs as needed
  ];

  return (
    <div>
      <h1>Frequently Asked Questions</h1>
      {faqs.map((faq, index) => (
        <div key={index}>
          <h3 onClick={() => toggleFAQ(index)}>{faq.question}</h3>
          {activeIndex === index && <p>{faq.answer}</p>}
        </div>
      ))}
    </div>
  );
};

export default FAQ;