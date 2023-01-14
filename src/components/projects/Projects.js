import React from "react";
import classes from "../../main.module.css";
import ProjectCards from "./ProjectCards";
import test1 from "../../images/test1.jpg";
import test2 from "../../images/test2.jpg";
import test3 from "../../images/test3.jpg";
import { DiSass, DiReact } from "react-icons/di";

const Projects = () => {
  return (
    <section id="projects" className={classes["projects-section"]}>
      <div className={classes["project-title"]}>
        <h2>Projects</h2>
      </div>
      <div className={classes.projects}>
        <a
          className={classes.test}
          rel="noreferrer"
          target="_blank"
          href="https://daydreamcookies.netlify.app/"
        >
          <ProjectCards
            lan1={<DiSass color="#CD6799" size="40px" />}
            lan2={<DiReact color="#61DBFB" size="40px" />}
            img={test1}
            alt="Project 1 Image"
            title="Daydream Cookies"
            description="Showcases fully functional shopping experience. "
            git="https://github.com/MichaelCooperman/Cookie-Store"
          />
        </a>
        <a
          className={classes.test}
          rel="noreferrer"
          target="_blank"
          href="https://airbnb-clone-mc.netlify.app/"
        >
          <ProjectCards
            lan1={<DiSass color="#CD6799" size="40px" />}
            lan2={<DiReact color="#61DBFB" size="40px" />}
            img={test2}
            alt="Project 2 Image"
            title="Airbnb Clone"
            description="Uses an API and database to present rental homes."
            git="https://github.com/MichaelCooperman/Airbnb-Clone"
          />
        </a>
        <a
          className={classes.test}
          rel="noreferrer"
          target="_blank"
          href="https://jacekjeznach.com/"
        >
          <ProjectCards
            img={test3}
            alt="Project 3 Image"
            title="Project 3"
            description="Project 3 is under construction and will be up soon!"
            git="https://www.google.com/"
          />
        </a>
      </div>
    </section>
  );
};

export default Projects;
