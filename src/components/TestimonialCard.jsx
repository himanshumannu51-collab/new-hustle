import React from "react";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <p className="italic">"{testimonial.message}"</p>
      <p className="font-bold mt-2">- {testimonial.name}</p>
    </div>
  );
};

export default TestimonialCard;

