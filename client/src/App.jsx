import React, { useState } from "react";
import Header from "./components/Header.jsx";
import HomePage from "./components/HomePage.jsx";
import CategoriesPage from "./components/CategoriesPage.jsx";

function PlantDetailPage() {
  return (
        <div className="plant-detail-page">
      <div className="plant-detail-main">
        <div className="plant-detail-info">
          <h2>Bonsai Tùng La Hán</h2>
          <div>
            <b>Tên khoa học:</b> Podocarpus macrophyllus
          </div>
          <div>
            <b>Tuổi đời:</b> 30 năm
          </div>
          <div>
            <b>Đặc điểm:</b> Dáng trực, thân xù xì, lá kim xanh quanh năm, thế
            đẹp cổ kính.
          </div>
          <div>
            <b>Cách chăm sóc:</b> Tưới nước đều, đặt nơi nhiều ánh sáng, bón
            phân hữu cơ định kỳ, cắt tỉa tạo dáng mỗi năm.
          </div>
        </div>
        <div className="plant-detail-gallery">
          <div className="gallery-grid">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
              alt="Bonsai 1"
            />
            <img
              src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80"
              alt="Bonsai 2"
            />
            <img
              src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80"
              alt="Bonsai 3"
            />
          </div>
          <div className="plant-detail-video">
            <iframe
              width="360"
              height="215"
              src="https://www.youtube.com/embed/2Vv-BfVoq4g"
              title="YouTube video"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactPage() {
  return (
    <div className="contact-page">
      <h2>Liên hệ với chủ vườn</h2>
      <div className="contact-info">
        <div>
          <b>Điện thoại:</b> <a href="tel:0823255558">0823.255.558</a>
        </div>
        <div>
          <b>Email:</b>{" "}
          <a href="mailto:greengarden@gmail.com">greengarden@gmail.com</a>
        </div>
        <div>
          <b>Zalo:</b>{" "}
          <a
            href="https://zalo.me/0823255558"
            target="_blank"
            rel="noopener noreferrer"
          >
            0823.255.558
          </a>
        </div>
      </div>
      <form className="contact-form">
        <input type="text" placeholder="Họ tên của bạn" required />
        <input type="email" placeholder="Email liên hệ" required />
        <textarea placeholder="Nội dung tin nhắn..." rows={4} required />
        <button type="submit">Gửi tin nhắn</button>
      </form>
    </div>
  );
}
import "./styles.css";

function App() {
  const [page, setPage] = useState("home");
  let content;
  if (page === "home") content = <HomePage />;
  else if (page === "categories") content = <CategoriesPage />;
  else if (page === "detail") content = <PlantDetailPage />;
  else if (page === "contact") content = <ContactPage />;
  else content = <HomePage />;
  return (
    <div>
      <Header page={page} setPage={setPage} />
      <main>{content}</main>
    </div>
  );
}

export default App;
