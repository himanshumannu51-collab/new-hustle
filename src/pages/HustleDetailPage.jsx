import React from 'react';

function HustleDetail({ hustle }) {
  return (
    <div>
      <h1>{hustle?.title || "Hustle Detail"}</h1>
      <p>{hustle?.description || "Description of the hustle goes here."}</p>
      <button onClick={() => window.history.back()}>Back to Hustles</button>
    </div>
  );
}

export default HustleDetail;

