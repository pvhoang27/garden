import React, { useState, useEffect } from "react";
import axios from "axios";

export default function PlantManager() {
  const [plants, setPlants] = useState([]);
  const [name, setName] = useState("");
  const [shortDesc, setShortDesc] = useState("");
  const [desc, setDesc] = useState("");
  const [images, setImages] = useState([]);
  const [video, setVideo] = useState("");

  useEffect(() => {
    axios.get("/api/plants").then((res) => setPlants(res.data));
  }, []);

  const handleAdd = async (e) => {
    e.preventDefault();
    // Chỉ gửi link ảnh, upload ảnh cần backend hỗ trợ thêm
    const res = await axios.post("/api/plants", {
      name,
      shortDesc,
      desc,
      images,
      video,
    });
    setPlants([...plants, res.data]);
    setName("");
    setShortDesc("");
    setDesc("");
    setImages([]);
    setVideo("");
  };

  return (
    <div>
      <h3>Quản lý cây cảnh</h3>
      <form onSubmit={handleAdd}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Tên cây"
          required
        />
        <input
          value={shortDesc}
          onChange={(e) => setShortDesc(e.target.value)}
          placeholder="Mô tả ngắn"
        />
        <textarea
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          placeholder="Mô tả chi tiết"
        />
        <input
          value={video}
          onChange={(e) => setVideo(e.target.value)}
          placeholder="Link video"
        />
        <input
          value={images}
          onChange={(e) => setImages(e.target.value.split(","))}
          placeholder="Link ảnh (cách nhau dấu phẩy)"
        />
        <button type="submit">Thêm cây</button>
      </form>
      <ul>
        {plants.map((p) => (
          <li key={p._id}>{p.name}</li>
        ))}
      </ul>
    </div>
  );
}
