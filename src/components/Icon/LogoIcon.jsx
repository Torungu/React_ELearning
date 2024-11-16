import React from "react";
import logoIcon from "./../../assets/img/cyberlogo-white.png";

const LogoIcon = ({ w = "200px", h = "100%" }) => {
  return <img style={{ width: w, height: h }} src={logoIcon} alt="" />;
};

export default LogoIcon;
