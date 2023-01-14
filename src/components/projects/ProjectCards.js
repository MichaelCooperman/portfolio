import React from "react";
import classes from "../../main.module.css";
import { BsGithub } from "react-icons/bs";

const ProjectCards = (props) => {
  const { title, description, git, img, alt, lan1, lan2 } = props;

  return (
    <div className={classes.card}>
      <div className={classes["project-overlay"]}>
        <div className={classes["project-cards"]}>
          {/* <div className={classes["project-top"]}> */}
          <div className={classes["project-lans"]}>
            {lan1}
            {lan2}
          </div>
          <a rel="noreferrer" target="_blank" href={git}>
            <BsGithub
              className={classes["github-btn"]}
              color="white"
              size="30px"
            />
          </a>
          {/* </div> */}

          <img className={classes["project-img"]} src={img} alt={alt} />
          <h6 className={classes["project-clickme"]}>Click To Preview</h6>
          <div className={classes["project-info"]}>
            <h4>{title}</h4>
            <p>{description}</p>
          </div>
        </div>
      </div>
      <div className={classes["project-des"]}></div>
    </div>
  );
};

export default ProjectCards;
