import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./Styles.sass";
//Components
import Mainpage from "./components/Mainpage";
import SideMenu from "./components/SideMenu";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

import reportWebVitals from "./reportWebVitals";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Router>
    <SideMenu />
    <Routes>
      <Route path="/personal-portfolio" element={<Mainpage />} />
      <Route path="/personal-portfolio/about" element={<About />} />
      <Route path="/personal-portfolio/portfolio" element={<Portfolio />} />
      <Route path="/personal-portfolio/contact" element={<Contact />} />
    </Routes>
  </Router>
);

reportWebVitals();
