import React, { useState } from "react";
import "./CategoriesPage.css";

const PLANT_CATEGORIES = [
  { key: "bonsai", label: "Cây Bonsai" },
  { key: "fruit", label: "Cây ăn trái" },
  { key: "flower", label: "Cây hoa" },
  { key: "fengshui", label: "Cây phong thủy" },
];

const PLANTS = [
  {
    _id: "1",
    name: "Bonsai Tùng La Hán",
    type: "bonsai",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
  },
  {
    _id: "2",
    name: "Mai Vàng",
    type: "flower",
    image:
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
  },
  {
    _id: "3",
    name: "Cây Lộc Vừng",
    type: "fengshui",
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80",
  },
  {
    _id: "4",
    name: "Ổi Đào",
    type: "fruit",
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
  },
  {
    _id: "5",
    name: "Hoa Giấy",
    type: "flower",
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
  },
];

export default function CategoriesPage() {
  const [selectedType, setSelectedType] = useState("");
  const [search, setSearch] = useState("");

  const filteredPlants = PLANTS.filter(
    (plant) =>
      (selectedType === "" || plant.type === selectedType) &&
      plant.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="categories-page">
      <h2>Danh mục cây cảnh</h2>
      <div className="filters">
        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
        >
          <option value="">Tất cả nhóm cây</option>
          {PLANT_CATEGORIES.map((cat) => (
            <option key={cat.key} value={cat.key}>
              {cat.label}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Tìm kiếm theo tên..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="plant-list">
        {filteredPlants.length === 0 ? (
          <div className="no-result">Không tìm thấy cây phù hợp.</div>
        ) : (
          filteredPlants.map((plant) => (
            <div className="plant-card" key={plant._id}>
              <img src={plant.image} alt={plant.name} />
              <h3>{plant.name}</h3>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
