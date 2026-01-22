import React from "react";

export default function PlantDetail({ plant }) {
  if (!plant) return null;
  return (
    <div>
      <h2>{plant.name}</h2>
      <div>
        {plant.images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={plant.name}
            loading="lazy"
            style={{ maxWidth: "100%", margin: "8px 0" }}
          />
        ))}
      </div>
      {plant.video && (
        <iframe
          src={plant.video}
          title="Video"
          width="100%"
          height="300"
          allowFullScreen
        />
      )}
      <div dangerouslySetInnerHTML={{ __html: plant.desc }} />
    </div>
  );
}
