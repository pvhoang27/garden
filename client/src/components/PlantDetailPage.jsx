import React from "react";
import "./PlantDetailPage.css";

const PlantDetailPage = ({ plant }) => {
  if (!plant) return <div>Không tìm thấy thông tin cây.</div>;

  return (
    <div className="plant-detail-container">
      <h2>
        {plant.commonName} <span>({plant.scientificName})</span>
      </h2>
      <div className="plant-detail-info">
        <div>
          <strong>Tuổi đời:</strong> {plant.age}
        </div>
        <div>
          <strong>Đặc điểm:</strong> {plant.characteristics}
        </div>
        <div>
          <strong>Cách chăm sóc:</strong> {plant.care}
        </div>
      </div>
      <div className="plant-detail-gallery">
        <h3>Thư viện ảnh</h3>
        <div className="gallery-grid">
          {plant.images &&
            plant.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt="plant"
                className="gallery-img"
                onClick={() => window.open(img, "_blank")}
              />
            ))}
        </div>
      </div>
      {plant.video && (
        <div className="plant-detail-video">
          <h3>Video</h3>
          <div className="video-wrapper">
            <iframe
              src={plant.video}
              title="Plant Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlantDetailPage;
