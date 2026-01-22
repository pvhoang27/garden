import React, { useEffect, useState } from "react";
import PlantCard from "./PlantCard";
import axios from "axios";

export default function PlantList() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    axios
      .get("/api/plants")
      .then((res) => setPlants(res.data))
      .catch(() => setPlants([]));
  }, []);

  return (
    <div className="plant-list">
      {plants.map((plant) => (
        <PlantCard key={plant._id} plant={plant} />
      ))}
    </div>
  );
}
