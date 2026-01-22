import React from "react";

export default function PlantCard({ plant }) {
  return (
    <div className="plant-card">
      <img src={plant.images[0]} alt={plant.name} loading="lazy" />
      <h3>{plant.name}</h3>
      <p>{plant.shortDesc}</p>
    </div>
  );
}
