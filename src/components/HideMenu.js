import Whiteham from "../images/hamburger-white.png";
const HideMenu = () => {
  const Hiddenmenu = document.querySelector(".main-menu");
  Hiddenmenu.classList.remove("active-menu");
  const HamIcon = document.querySelector(".ham-menu");
  HamIcon.src = Whiteham;
};
export default HideMenu;
