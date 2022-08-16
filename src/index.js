import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Styles
import "./assets/Styles.sass";
//Components/
import Landing from "./components/Landing";
import LandingMenu from "./components/LandingMenu";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

import reportWebVitals from "./reportWebVitals";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Router>
    <LandingMenu />
    <Routes>
      <Route path="/personal-portfolio" element={<Landing />} />
      <Route path="/personal-portfolio/about" element={<About />} />
      <Route path="/personal-portfolio/portfolio" element={<Portfolio />} />
      <Route path="/personal-portfolio/contact" element={<Contact />} />
    </Routes>
  </Router>
);

reportWebVitals();
