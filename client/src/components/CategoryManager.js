import React, { useState, useEffect } from "react";
import axios from "axios";

export default function CategoryManager() {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    axios.get("/api/categories").then((res) => setCategories(res.data));
  }, []);

  const handleAdd = async (e) => {
    e.preventDefault();
    const res = await axios.post("/api/categories", { name });
    setCategories([...categories, res.data]);
    setName("");
  };

  return (
    <div>
      <h3>Quản lý danh mục</h3>
      <form onSubmit={handleAdd}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Tên danh mục"
          required
        />
        <button type="submit">Thêm</button>
      </form>
      <ul>
        {categories.map((c) => (
          <li key={c._id}>{c.name}</li>
        ))}
      </ul>
    </div>
  );
}
