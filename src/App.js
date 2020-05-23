import React from "react";
import NavBar from "./components/Nav";
import MainPage from "./components/stripe/pages/index";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <MainPage />
    </div>
  );
}

export default App;
