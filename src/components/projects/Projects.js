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
        <ProjectCards
          site="https://daydreamcookies.netlify.app/"
          img={test1}
          alt="Project 1 Image"
          title="Daydream Cookies"
          description="Showcases fully functional shopping experience. Including a working cart modal made with React and Sass."
          git="https://github.com/MichaelCooperman/Cookie-Store"
        />
        <ProjectCards
          site="https://airbnb-clone-mc.netlify.app/"
          img={test2}
          alt="Project 2 Image"
          title="Airbnb Clone"
          description="Uses an API and database to present rental homes. Category feature for different types of homes, made using React and Sass."
          git="https://github.com/MichaelCooperman/Airbnb-Clone"
        />
        <ProjectCards
          site="https://www.google.com/"
          img={test3}
          alt="Project 3 Image"
          title="Project 3"
          description="Project 3 is under construction and will be up soon!"
          git="https://www.google.com/"
        />
      </div>
    </section>
  );
};

export default Projects;
