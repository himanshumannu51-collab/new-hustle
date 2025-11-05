import React, { useState } from 'react';
import HustleDetail from './HustleDetail';

const sampleHustles = [
  { id: 1, title: 'Freelance Writing', description: 'Write articles and get paid.' },
  { id: 2, title: 'Print on Demand', description: 'Sell custom merch online.' },
];

function Hustles() {
  const [selectedHustle, setSelectedHustle] = useState(null);

  if (selectedHustle) {
    return <HustleDetail hustle={selectedHustle} goBack={() => setSelectedHustle(null)} />;
  }

  return (
    <div>
      <h1>Explore the Best Hustles</h1>
      <ul>
        {sampleHustles.map((hustle) => (
          <li key={hustle.id}>
            <button onClick={() => setSelectedHustle(hustle)}>{hustle.title}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Hustles;
