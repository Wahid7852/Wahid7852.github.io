import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  {Navigation}  from "./components/index.js";
import { Landing, About, Portfolio, Contact } from "./routes/index.js";
import "./core-ui/Styles.sass";

const App = () => {
    return (
        <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    );
  };

  export default App;