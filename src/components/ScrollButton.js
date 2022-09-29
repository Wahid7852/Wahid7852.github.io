import React, { useState } from "react";
import Button from "./Button";
import ScrollToTop from "../helpers/ScrollToTop";
const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };
  window.addEventListener("scroll", toggleVisible);

  return (
    <Button
      className="scroll-button"
      onClick={ScrollToTop}
      style={{ display: visible ? "inline" : "none" }}
    />
  );
};

export default ScrollButton;
