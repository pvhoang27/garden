import React, { useState } from "react";
import CategoryManager from "./CategoryManager";
import PlantManager from "./PlantManager";

export default function AdminDashboard() {
  const [tab, setTab] = useState("plants");
  return (
    <div>
      <h2>Admin Dashboard</h2>
      <nav>
        <button onClick={() => setTab("plants")}>Quản lý cây cảnh</button>
        <button onClick={() => setTab("categories")}>Quản lý danh mục</button>
      </nav>
      {tab === "plants" ? <PlantManager /> : <CategoryManager />}
    </div>
  );
}
