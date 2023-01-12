import React, { useRef } from "react";
import classes from "../../main.module.css";
import emailjs from "@emailjs/browser";

const Contact = (props) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_i0tu4z3",
        "template_p8ppdqu",
        form.current,
        "K-P0Lrcjx9aic3gfj"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact" className={classes["contact-section"]}>
      <div className={classes.contact}>
        <h2 className={classes["contact-title"]}>Contact Me</h2>
        <form
          ref={form}
          onSubmit={sendEmail}
          className={classes["contact-form"]}
        >
          <input
            type="text"
            placeholder="Full Name"
            name="user_name"
            required
          />
          <input type="email" placeholder="Email" name="user_email" required />
          <input type="text" placeholder="Subject" name="subject" required />
          <textarea
            placeholder="Your Message here..."
            name="message"
            cols="30"
            rows="10"
          ></textarea>
          <div className={classes["button-container"]}>
            <span className={classes.mask}>Send Message</span>
            <button type="submit">Send Message</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
