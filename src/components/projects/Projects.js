import React from "react";
import classes from "../../main.module.css";
import ProjectCards from "./ProjectCards";
import test1 from "../../images/test1.jpg";
import test2 from "../../images/test2.jpg";
import test3 from "../../images/test3.jpg";
import test4 from "../../images/test4.jpg";
// import underconstruction from "../../images/underconstruction.jpg";

const Projects = () => {
  return (
    <section id="projects" className={classes["projects-section"]}>
      <div className={classes["project-title"]}>
        <h2>Projects</h2>
      </div>
      <div className={classes.projects}>
        <ProjectCards
          site="https://sharpshootersbjj.netlify.app/"
          img={test4}
          alt="Sharp Shooter BJJ Image"
          title="Sharp Shooters BJJ"
          description="Worked with a UI/UX designer to build a prototype project for a client. Focuses on an engaging web interface that is user friendly. Built with React and Sass."
          git="https://github.com/MichaelCooperman/SharpShooters-BJJ"
        />
        <ProjectCards
          site="https://daydreamcookies.netlify.app/"
          img={test1}
          alt="Daydream Cookies Image"
          title="Daydream Cookies"
          description="Showcases fully functional shopping experience. Including a working cart modal made with React and Sass."
          git="https://github.com/MichaelCooperman/Cookie-Store"
        />
        <ProjectCards
          site="https://airbnb-clone-mc.netlify.app/"
          img={test2}
          alt="Airbnb Clone Image"
          title="Airbnb Clone"
          description="Uses an API and database to present rental homes. Category feature for different types of homes, made using React and Sass."
          git="https://github.com/MichaelCooperman/Airbnb-Clone"
        />
        <ProjectCards
          site="https://front-end-quiz-app.netlify.app/"
          img={test3}
          alt="Front-End Quiz Image"
          title="Front-End Quiz"
          description="Fun study guide for anyone learning Front-End Web Development, used use-context to access props globally. Made with React, React Router and Sass."
          git="https://github.com/MichaelCooperman/Front-End-Quiz"
        />

        {/* <ProjectCards
          site=""
          img={underconstruction}
          alt=""
          title="Project 5 Under Construction"
          description=""
          git=""
        /> */}
      </div>
    </section>
  );
};

export default Projects;
