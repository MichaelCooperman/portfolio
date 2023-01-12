import React, { useState } from "react";
import NavLinks from "./NavLinks";
import classes from "../../../main.module.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { GrClose } from "react-icons/gr";
import Logo from "./Logo";

const MobileNavigation = () => {
  const [open, setOpen] = useState(false);

  const openHamburger = (
    <RxHamburgerMenu
      size="30px"
      color="white"
      className={classes.hamburger}
      onClick={() => setOpen(!open)}
    />
  );

  const closedHamburger = (
    <GrClose
      size="30px"
      color="white"
      className={classes.hamburger}
      onClick={() => setOpen(!open)}
    />
  );

  const closeMobileMenu = () => setOpen(false);

  return (
    <nav className={classes["mobile-navigation"]}>
      <Logo />
      {open ? closedHamburger : openHamburger}
      {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
    </nav>
  );
};

export default MobileNavigation;
