import React from "react";
import classes from "../../main.module.css";
import { BsGithub } from "react-icons/bs";
import {
  AiFillLinkedin,
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillYoutube,
} from "react-icons/ai";

const Footer = () => {
  return (
    <section className={classes["footer-section"]}>
      <div className={classes.footer}>
        <div className={classes["footer-links"]}>
          <a href="/#about">About Me</a>
          <a href="/#about">Projects</a>
          <a href="/#about">Contact</a>
          <a href="/#about">About Me</a>
        </div>
        <div className={classes["footer-socials"]}>
          <BsGithub color="white" size="35px" />
          <AiFillLinkedin color="white" size="40px" />
          <AiFillInstagram color="white" size="40px" />
          <AiOutlineTwitter color="white" size="40px" />
          <AiFillYoutube color="white" size="40px" />
        </div>
      </div>
    </section>
  );
};

export default Footer;
