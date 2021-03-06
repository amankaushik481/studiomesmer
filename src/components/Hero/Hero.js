import React, { useState } from "react";
import "./hero.css";

const Hero = () => {
  const Contact = () => {
    return (
      <div className={contact ? "contact__container" : "contact__containerr"}>
        <div className="contact__inside">
          <div className="contact__back">
            <div className="arrow">←</div>
            <button className="back__btn" onClick={handleClick}>
              Back
            </button>
          </div>
          <p className="contact__sayhello">
            <div className="orange"></div>&nbsp;Say Hello
          </p>
          <div className="inputs">
            <h3 className="contact__label">NAME</h3>
            <input
              className="contact__input"
              type="text"
              placeholder="Your name"
            />
          </div>
          <div className="inputs">
            <h3 className="contact__label">EMAIL</h3>
            <input
              className="contact__input"
              type="email"
              placeholder="Your name"
            />
          </div>
          <div className="inputs">
            <h3 className="contact__label">MESSAGE</h3>
            <input
              className="contact__input"
              type="text"
              placeholder="Start typing here"
            />
          </div>
          <div className="inputs">
            <button className="submit__btn">Submit →</button>
          </div>
        </div>
      </div>
    );
  };
  const [contact, setContact] = useState(false);
  function handleClick() {
    contact ? setContact(false) : setContact(true);
  }
  return (
    <div className="hero__container">
      <div className="logo__container">
        studio <br /> mesmer
      </div>
      <div className="hero__main">
        <div className="hero__left">
          <h2 className="cs__heading">COMING SOON</h2>
          <h1>10: 23: 22: 18</h1>
          <h3 className="timer__headings">
            <div className="timer">DAYS</div>
            <div className="timer">HOURS</div>
            <div className="timer">MINUTES</div>
            <div className="timer">SECONDS</div>
          </h3>
          <div className="email__container">
            <p className="email__para">Get notified when we launch</p>
            <div className="notify__section">
              <input
                className="email__input"
                type="email"
                placeholder="Email address"
              />
              <button className="notify__button">NOTIFY ME</button>
            </div>
          </div>
        </div>
        <div className="hero__right">
          <div>
            <p className="hero__right__para fc">
              <div className="yellow"></div>&nbsp;Studio Mesmer is a creative
              studio for the passionately curious.
            </p>
          </div>
          <div>
            <p className="hero__right__para sc">
              <div className="orange"></div>&nbsp;Want to talk?
            </p>
            <button className="contact__btn" onClick={handleClick}>
              Contact Us
            </button>
          </div>
          <div>
            <p className="hero__right__para tc">
              <div className="green"></div>&nbsp;Want to work with us?
            </p>
            <p className="email__example">
              <a href="gmail.com">example@example.com</a>
            </p>
          </div>
        </div>
        {/* {contact ? <Contact /> : ""} */}
        <Contact />
      </div>
    </div>
  );
};

export default Hero;
