import React, { useState } from "react";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import "./Footer.styles.scss";

const Footer = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { userName, email, message } = formData;

  const inputHandler = (event) => {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  };

  const submitHandler = () => {
    setIsLoading(true);

    const contact = {
      _type: "contact",
      name: userName,
      email: email,
      message: message,
    };

    client
      .create(contact)
      .then(() => {
        setIsLoading(false);
        setIsSubmitted(true);
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      <h2 className="head-text">Take a Coffee & Chat with Me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:shreyasshahu786@gmail.com">
            shreyasshahu786@gmail.com
          </a>
        </div>

        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel:+91 8668980409">+91 8668980409</a>
        </div>
      </div>

      {!isSubmitted ? (
        <div className="app__footer-form">
          <div className="app__flex">
            <input
              className="p-text"
              placeholder="Your Name"
              name="userName"
              value={userName}
              onChange={inputHandler}
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={inputHandler}
            />
          </div>
          <div className="app__flex">
            <textarea
              className="p-text"
              placeholder="Your Message"
              name="message"
              value={message}
              onChange={inputHandler}
            />
          </div>
          <button type="button" className="p-text" onClick={submitHandler}>
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </div>
      ) : (
        <div className="head-text">
          <h3>Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__primarybg"
);
