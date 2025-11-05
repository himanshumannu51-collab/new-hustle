import React from "react";

const ToolCard = ({ tool }) => {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <img src={tool.logo} alt={tool.name} className="w-24 h-24 mx-auto"/>
      <h3 className="text-xl font-bold mt-2 text-center">{tool.name}</h3>
      <p className="text-gray-700 text-center mt-1">{tool.price} | ROI: {tool.roi}</p>
    </div>
  );
};

export default ToolCard;

