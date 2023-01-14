import React from "react";
import classes from "../../main.module.css";
import Buttons from "./Buttons";

const Welcome = () => {
  return (
    <section id="welcome" className={classes["welcome-section"]}>
      <div className={classes.welcome}>
        <h1>Hello,</h1>
        <h1>I'm Mike</h1>
        <p>A Front-End Web Developer.</p>
        <a href="/#contact">
          <Buttons mask="Get in touch." text="Get in touch." />
        </a>
      </div>
    </section>
  );
};

export default Welcome;
