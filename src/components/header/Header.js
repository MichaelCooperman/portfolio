import React from "react";
import classes from "../../main.module.css";
import NavBar from "./navbar/NavBar";

const Header = () => {
  return (
    <section className={classes["header-section"]}>
      <NavBar />
    </section>
  );
};

export default Header;
