import React from 'react';

function HustleDetail({ hustle, goBack }) {
  return (
    <div>
      <h1>{hustle.title}</h1>
      <p>{hustle.description}</p>
      <button onClick={goBack}>Back to Hustles</button>
    </div>
  );
}

export default HustleDetail;
