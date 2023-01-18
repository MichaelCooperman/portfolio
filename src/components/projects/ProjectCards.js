import React, { useState } from "react";
import classes from "../../main.module.css";

const ProjectCards = (props) => {
  const [readMore, setReadMore] = useState(true);
  const [goBack, setGoBack] = useState(false);

  const { title, description, git, img, alt, site } = props;

  const handleReadMore = () => {
    setReadMore((readMore) => !readMore);
    setGoBack((goBack) => goBack);
  };

  const handleReset = () => {
    setReadMore(true);
    setGoBack(false);
  };

  const frontStyles = { display: readMore ? "flex" : "none" };

  const backStyles = { display: !goBack ? "none" : "flex" } && {
    display: !readMore ? "flex" : "none",
  };

  return (
    <div className={classes["card-1"]}>
      <div className={classes["overlay"]}></div>
      <div className={classes["card-front"]} style={frontStyles}>
        <div className={classes["project-stuff"]}>
          <a href={site} rel="noreferrer" target="_blank">
            <h4>{title}</h4>
            <h6 className={classes["project-clickme"]}>Click To Preview</h6>
          </a>
          <button className={classes["project-more"]} onClick={handleReadMore}>
            Read More...
          </button>
        </div>

        <img src={img} alt={alt} />
      </div>

      <div className={classes["card-back"]} style={backStyles}>
        <h4>{title}</h4>
        <p>{description}</p>
        <div className={classes["card-back-bottom"]}>
          <a rel="noreferrer" target="_blank" href={git}>
            <button className={classes["card-back-btns"]}>Github</button>
          </a>
          <a rel="noreferrer" target="_blank" href={site}>
            <button className={classes["card-back-btns"]}>Preview</button>
          </a>
          <button className={classes["card-back-btns"]} onClick={handleReset}>
            Go Back...
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;
