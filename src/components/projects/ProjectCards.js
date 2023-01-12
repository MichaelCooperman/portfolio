import React from "react";
import classes from "../../main.module.css";
import { BsGithub } from "react-icons/bs";

const ProjectCards = (props) => {
  const { title, description, git, img, alt } = props;

  return (
    <div className={classes.card}>
      <div className={classes["project-overlay"]}>
        <div className={classes["project-cards"]}>
          <a rel="noreferrer" target="_blank" href={git}>
            <BsGithub
              className={classes["github-btn"]}
              color="white"
              size="30px"
            />
          </a>
          <img className={classes["project-img"]} src={img} alt={alt} />
          <h6 className={classes["project-clickme"]}>Click To Preview</h6>
          <div className={classes["project-info"]}>
            <h4>{title}</h4>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;
