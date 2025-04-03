import React, { useEffect } from "react";

import sr from "../../utils/scrollReveal";
import AvaUrl from "../../assets/img/201616367.jpg";
import "./hero.styles.css";

const Hero = (props) => {
  useEffect(() => {
    sr.reveal(".home__title", {});
    sr.reveal(".button", { delay: 200 });
    sr.reveal(".home__img", { delay: 400 });
    sr.reveal(".home__social-icon", { interval: 200 });
    console.log("Hero");
  });

  return (
    <section className="home bd-grid" id="home">
      <div className="home__profile bd-grid">
        <div className="home__img">
          <img src={AvaUrl} style={{borderRadius: '50%'}}/>
        </div>
        <div className="home__social">
          <a
            href="https://github.com/ToSky1238?tab=repositories"
            className="home__social-icon"
          >
            <i className="bx bxl-github"></i>
          </a>
        </div>
      </div>
      <div className="home__data">
        <h1 className="home__title">
          Hi, <br />
          I'm <span className="home__title-color">Phuc Anh</span>
          <br />
          Web Developer
        </h1>
        <a href="#contact" className="button">
          Contact
        </a>
      </div>
    </section>
  );
};

export default Hero;
