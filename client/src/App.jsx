import React, { useState } from "react";
import Header from "./components/Header.jsx";
import HomePage from "./components/HomePage.jsx";
import CategoriesPage from "./components/CategoriesPage.jsx";

function PlantDetailPage() {
  return (
    <div style={{ maxWidth: 900, margin: "2rem auto", padding: "1rem" }}>
      <h2>Chi tiết cây</h2>
      <p>Thông tin chi tiết về cây sẽ hiển thị ở đây.</p>
    </div>
  );
}

function ContactPage() {
  return (
    <div style={{ maxWidth: 900, margin: "2rem auto", padding: "1rem" }}>
      <h2>Liên hệ</h2>
      <p>Thông tin liên hệ sẽ hiển thị ở đây.</p>
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
