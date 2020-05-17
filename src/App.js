import React from "react";
import NavBar from "./components/Nav";
import SignUp from "./components/SignUpModal";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <SignUp />
    </div>
  );
}

export default App;
