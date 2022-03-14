import React from "react";
import { NavBar } from "../components";
import { Header, About, Skills, Work, Footer } from "../containers";
import "./App.styles.scss";

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Footer />
    </div>
  );
};

export default App;
