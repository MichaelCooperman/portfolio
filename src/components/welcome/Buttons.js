import React from "react";
import classes from "../../main.module.css";

const Buttons = (props) => {
  const { mask, text } = props;

  return (
    <div className={classes["button-container"]}>
      <span className={classes.mask}>{mask}</span>
      <button type="button" name="Hover">
        {text}
      </button>
    </div>
  );
};

export default Buttons;
