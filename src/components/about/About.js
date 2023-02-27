import React from "react";
import classes from "../../main.module.css";
import { SiTailwindcss } from "react-icons/si";
import { DiCss3, DiSass, DiReact, DiJavascript } from "react-icons/di";
import { AiFillHtml5 } from "react-icons/ai";
import Buttons from "../welcome/Buttons";

const About = () => {
  return (
    <section id="about" className={classes["about-section"]}>
      <div className={classes.about}>
        <div>
          <h2>About Me</h2>
          <p>
            My Name is Michael Cooperman, also known as Mike. I Front-End Web
            Developer with a passion for building multi-platform websites using
            Responsive Web Design.
            <br />I enjoy expanding my knowledge of programming and building eye
            appealing, fully responsive websites.
            <br /> During my free time I like to go longboarding, watching
            movies, and playing games online with friends.
          </p>
        </div>

        <h2 className={classes["skill-title"]}>Skills</h2>
        <div className={classes.skills}>
          <div className={classes["top-skills"]}>
            <div className={classes["skill-container"]}>
              <DiJavascript color="yellow" size="50px" />
              <h5>JS</h5>
            </div>
            <div className={classes["skill-container"]}>
              <DiCss3 color="#2965f1" size="50px" />
              <h5>CSS</h5>
            </div>
            <div className={classes["skill-container"]}>
              <AiFillHtml5 color="#f06529" size="48px" />
              <h5>HTML</h5>
            </div>
          </div>
          <div className={classes["bottom-skills"]}>
            <div className={classes["skill-container"]}>
              <DiSass color="#CD6799" size="50px" />
              <h5>Sass</h5>
            </div>
            <div className={classes["skill-container"]}>
              <SiTailwindcss color="#4fc3f7" size="50px" />
              <h5>Tailwind</h5>
            </div>
            <div className={classes["skill-container"]}>
              <DiReact color="#61DBFB" size="50px" />
              <h5>React</h5>
            </div>
          </div>
        </div>
        <div className={classes["about-buttons"]}>
          <a
            href="https://github.com/MichaelCooperman"
            rel="noreferrer"
            target="_blank"
          >
            <div className={classes["about-btn"]}>
              <Buttons mask="Github" text="Github" />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/michael-cooperman-9578b4263/"
            rel="noreferrer"
            target="_blank"
          >
            <div className={classes["about-btn"]}>
              <Buttons mask="LinkedIn" text="LinkedIn" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
