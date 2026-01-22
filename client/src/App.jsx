import React from "react";

import Header from "./components/Header.jsx";
import HomePage from "./components/HomePage.jsx";
import "./styles.css";

function App() {
  return (
    <div>
      <Header />
      <main>
        <HomePage />
      </main>
    </div>
  );
}

export default App;
