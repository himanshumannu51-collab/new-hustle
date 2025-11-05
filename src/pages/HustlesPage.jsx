import React from "react";
import HustleCard from "../components/HustleCard";
import { hustles } from "../data/hustles";

const HustlesPage = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-4xl font-bold">All Hustles</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {hustles.map(h => <HustleCard key={h.id} hustle={h} />)}
      </div>
    </div>
  );
};

export default HustlesPage;
