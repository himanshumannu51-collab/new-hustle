import React from "react";

const HustleCard = ({ hustle }) => {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <img src={hustle.image} alt={hustle.title} className="rounded w-full h-48 object-cover"/>
      <h3 className="text-xl font-bold mt-2">{hustle.title}</h3>
      <p className="text-gray-700 mt-1">{hustle.earnings}</p>
    </div>
  );
};

export default HustleCard;

