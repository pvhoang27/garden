import React from "react";
import "./HomePage.css";

const featuredPlants = [
  {
    name: "Bonsai Tùng La Hán",
    desc: "Cây bonsai cổ thụ, dáng đẹp, tuổi đời 30 năm.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Mai Vàng",
    desc: "Cây mai vàng nở rực rỡ mỗi dịp Tết.",
    image:
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Cây Lộc Vừng",
    desc: "Lá xanh quanh năm, hoa đỏ rực, mang ý nghĩa tài lộc.",
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80",
  },
];

export default function HomePage() {
  return (
    <div className="homepage">
      <section className="intro-section">
        <h1>Green Garden Showcase</h1>
        <p className="intro-text">
          Chào mừng bạn đến với bảo tàng số về vườn cây cảnh của gia đình chúng
          tôi! Nơi đây lưu giữ và trưng bày những tác phẩm cây cảnh đặc sắc, mỗi
          cây là một câu chuyện, một vẻ đẹp riêng biệt. Hãy cùng chiêm ngưỡng và
          cảm nhận tình yêu thiên nhiên qua từng tán lá, thân cây.
        </p>
      </section>
      <section className="featured-section">
        <h2>Cây Nổi Bật</h2>
        <div className="featured-list">
          {featuredPlants.map((plant, idx) => (
            <div className="featured-card" key={idx}>
              <img src={plant.image} alt={plant.name} />
              <h3>{plant.name}</h3>
              <p>{plant.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
