import React from "react";
import ToolCard from "../components/ToolCard";
import { tools } from "../data/tools";

const ToolsPage = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-4xl font-bold">All Tools</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {tools.map(t => <ToolCard key={t.id} tool={t} />)}
      </div>
    </div>
  );
};

export default ToolsPage;

