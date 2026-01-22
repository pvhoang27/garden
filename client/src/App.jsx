import React from "react";
import Header from "./components/Header.jsx";
import PlantList from "./components/PlantList.jsx";
import "./styles.css";

function App() {
  return (
    <div>
      <Header />
      <main>
        <PlantList />
      </main>
    </div>
  );
}

export default App;
