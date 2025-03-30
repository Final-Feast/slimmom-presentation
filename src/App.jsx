import './App.css'
import React from "react";
import About from "./components/about";
import Architecture from "./components/architecture ";
import Description from "./components/description";
import Features from "./components/features";
import Tools from "./components/tools";
import Nav from "./components/nav";

function App() {
  return (
    <div className="App">
      <div className="header">
        <Nav />
      </div>
      <main className="main">
        <About />
        <Description />
        <Features />
        <Architecture />
        <Tools />
      </main>
    </div>
  );
}

export default App;
