import './App.css'
import React from "react";
import About from "./components/about";
import Architecture from "./components/architecture ";
import Description from "./components/description";
import Features from "./components/features";
import Tools from "./components/tools";
import Nav from "./components/nav";
import Team from "./components/team";

function App() {
  return (
    <div className="App">
      <div className="header">
        <Nav />
      </div>
      <main className="main">
        <About />
        <Description />
        <Tools />

        <Features />
        <Architecture />
        <Team />

      </main>
    </div>
  );
}

export default App;
