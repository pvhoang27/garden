import React, { useEffect, useState } from "react";
import PlantCard from "./PlantCard.jsx";
import axios from "axios";

const MOCK_PLANTS = [
  {
    _id: "1",
    name: "Bonsai Tùng La Hán",
    shortDesc: "Cây bonsai cổ thụ, dáng đẹp, tuổi đời 30 năm.",
    images: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    ],
  },
  {
    _id: "2",
    name: "Mai Vàng",
    shortDesc: "Cây mai vàng nở rực rỡ mỗi dịp Tết.",
    images: [
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
    ],
  },
  {
    _id: "3",
    name: "Cây Lộc Vừng",
    shortDesc: "Lá xanh quanh năm, hoa đỏ rực, mang ý nghĩa tài lộc.",
    images: [
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80",
    ],
  },
];

export default function PlantList() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    axios
      .get("/api/plants")
      .then((res) => {
        if (Array.isArray(res.data) && res.data.length > 0) setPlants(res.data);
        else setPlants(MOCK_PLANTS);
      })
      .catch(() => setPlants(MOCK_PLANTS));
  }, []);

  return (
    <div className="plant-list">
      {plants.map((plant) => (
        <PlantCard key={plant._id} plant={plant} />
      ))}
    </div>
  );
}
