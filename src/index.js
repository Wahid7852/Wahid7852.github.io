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
      <Route path="/catherine-mitagvaria" element={<Mainpage />} />
      <Route path="/catherine-mitagvaria/about" element={<About />} />
      <Route path="/catherine-mitagvaria/portfolio" element={<Portfolio />} />
      <Route path="/catherine-mitagvaria/contact" element={<Contact />} />
    </Routes>
  </Router>
);

reportWebVitals();
