import React from "react";
import classes from "../../main.module.css";
import ProjectCards from "./ProjectCards";
import test1 from "../../images/test1.jpg";
import test2 from "../../images/test2.jpg";
import test3 from "../../images/test3.jpg";

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
            img={test1}
            alt="Project 1 Image"
            title="Daydream Cookies"
            description="Full functional cart and ordering feature."
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
            title="Test 3"
            description="Whats been happening in your...WORLD!"
            git="https://www.google.com/"
          />
        </a>
      </div>
    </section>
  );
};

export default Projects;
