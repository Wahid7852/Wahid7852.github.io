import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./Styles.sass";
//Components
import Landing from "./components/Landing";
import LandingMenu from "./components/LandingMenu";
import AboutPreview from "./components/AboutPreview";
import PortfolioPreview from "./components/PortfolioPreview";
import ContactPreview from "./components/ContactPreview";

import reportWebVitals from "./reportWebVitals";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Router>
    <LandingMenu />
    <Routes>
      <Route path="/personal-portfolio" element={<Landing />} />
      <Route path="/personal-portfolio/about" element={<AboutPreview />} />
      <Route
        path="/personal-portfolio/portfolio"
        element={<PortfolioPreview />}
      />
      <Route path="/personal-portfolio/contact" element={<ContactPreview />} />
    </Routes>
  </Router>
);

reportWebVitals();
