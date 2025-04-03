import React from "react";

import "./footer.styles.css";

const Footer = (props) => {
  return (
    <footer className="footer">
      <p className="footer__title">Phuc Anh</p>
      <div className="footer__social">
        <a
          href="https://github.com/ToSky1238?tab=repositories"
          className="footer__icon"
        >
          <i className="fab fa-github"></i>
        </a>
      </div>
      <p>&#169; {new Date().getFullYear()}2025 copyright Phuc Anh</p>
    </footer>
  );
};

export default Footer;
