import React from "react";
import NavLinks from "./NavLinks";
import classes from "../../../main.module.css";
import Logo from "./Logo";

const Navigation = () => {
  return (
    <div className={classes["navigation"]}>
      <Logo />
      <NavLinks />
    </div>
  );
};

export default Navigation;
