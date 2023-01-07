import React from "react";
import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";
import classes from "../../../main.module.css";
import Logo from "./Logo";

const NavBar = () => {
  return (
    <div className={classes.navbar}>
      <Logo />
      <Navigation />
      <MobileNavigation />
    </div>
  );
};

export default NavBar;
