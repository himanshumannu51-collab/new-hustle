import React from "react";

const GuidesPage = () => {
  const guides = [
    { id: 1, title: "Complete Beginner Guide", link: "#" },
    { id: 2, title: "Tool Comparison Sheet", link: "#" },
    { id: 3, title: "Client Acquisition Playbook", link: "#" },
  ];

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-4xl font-bold">Guides</h1>
      <ul className="space-y-2">
        {guides.map(g => (
          <li key={g.id}>
            <a href={g.link} className="text-blue-500 hover:underline">{g.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GuidesPage;

