/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import("./web.css");
function Web() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="web">
      <div className="web-option">
        <a href="#projects">
          <i class="fi-rr-edit-alt option-icon"></i>Projects
        </a>
      </div>
      <div className="web-option">
        <a href="#skills">
          <i class="fi-rr-laptop option-icon"></i>Skills
        </a>
      </div>
      <div className="web-option">
        <a href="#work">
          <i class="fi-rr-briefcase option-icon"></i>Work
        </a>
      </div>
      <div className="web-option">
        <a href="#contact">
          <i class="fi-rr-smartphone option-icon"></i>Contact
        </a>
      </div>
      <div className="web-option" onClick={() => toggleTheme()}>
        {theme === "light" ? (
          <a href="#">
            <i class="fi-rr-moon option-icon"></i>Dark
          </a>
        ) : (
          <a href="#">
            <i class="fi-rr-sun option-icon"></i>Light
          </a>
        )}
      </div>
    </div>
  );
}

export default Web;
