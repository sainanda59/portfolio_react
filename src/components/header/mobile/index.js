/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import("./mobile.css");
function Mobile({ isOpen, setIsOpen }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  useEffect(() => (document.body.className = theme));

  return (
    <div className="mobile">
      <div className="close-icon" onClick={() => setIsOpen(!isOpen)}>
        <i class="fi-rr-cross-circle"></i>
      </div>
      <div className="mobile-options">
        <div className="mobile-option">
          <a href="#project">
            <i class="fi-rr-edit-alt option-icon"></i>Projects
          </a>
        </div>
        <div className="mobile-option">
          <a href="#skills">
            <i class="fi-rr-laptop option-icon"></i>Skills
          </a>
        </div>
        <div className="mobile-option">
          <a href="#work">
            <i class="fi-rr-briefcase option-icon"></i>Work
          </a>
        </div>
        <div className="mobile-option">
          <a href="#contact">
            <i class="fi-rr-smartphone option-icon"></i>Contact
          </a>
        </div>
        <div className="mobile-option" onClick={() => toggleTheme()}>
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
    </div>
  );
}

export default Mobile;
