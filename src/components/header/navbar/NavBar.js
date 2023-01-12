import React from "react";
import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";
import classes from "../../../main.module.css";

const NavBar = () => {
  return (
    <div className={classes.navbar}>
      <Navigation />
      <MobileNavigation />
    </div>
  );
};

export default NavBar;
