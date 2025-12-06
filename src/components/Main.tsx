import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

import "../assets/styles/Main.scss";

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img
            src="https://i.postimg.cc/Kv7r7H6k/profile.jpg"
            alt="Avatar"
          />
        </div>
        <div className="content">
          <div className="social_icons">
            <a
              href="https://www.linkedin.com/in/richardrietdijk"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://github.com/richardrietdijk"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="mailto:info@richardrietdijk.com"
              target="_blank"
              rel="noreferrer"
            >
              <EmailIcon />
            </a>
            {/* <a
              href="https://drive.google.com/file/d/1smRqjHKIWdqecD0wnwzmv1j9EmavVQmz/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              CV
            </a> */}
          </div>
          <h1>Richard Rietdijk</h1>
          <p>Data Professional | 8+ years of experience at tech companies like Apple & SEGA</p>

          <div className="mobile_social_icons">
            <a
              href="https://github.com/richardrietdijk"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/richardrietdijk/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
