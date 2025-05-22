import React from 'react';

function DessertsCards({ data }) {
  return (
    <div className="dessert-list">
      {data.map((dessert) => (
        <div key={dessert.id} className="dessert-card">
          <h3>{dessert.title}</h3>
          {/* <img src={dessert.image} alt={dessert.title} /> */}
          <p>{dessert.description}</p>
        </div>
      ))}
    </div>
  );
}

export default DessertsCards;