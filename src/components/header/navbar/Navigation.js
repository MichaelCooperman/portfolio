import React from "react";
import NavLinks from "./NavLinks";
import classes from "../../../main.module.css";

const Navigation = () => {
  return (
    <nav className={classes["navigation"]}>
      <NavLinks />
    </nav>
  );
};

export default Navigation;
