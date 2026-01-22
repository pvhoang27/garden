import React from "react";
import Header from "./components/Header";
import PlantList from "./components/PlantList";
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
