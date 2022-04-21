import React from "react";
import "../scss/app.scss";
import SectionOne from "./SectionOne";

// <!-- Menu de navegacion -->

const Header = () => {
  let nav = document.getElementById("nav");

  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 10) {
      document.getElementById("nav").style.backgroundColor = "#2D067A";
    } else {
      document.getElementById("nav").style.backgroundColor = "transparent";
    }
  });
  return (
    <div className="navbarSection">
      <div className="navBarContainer">
        <div className="navBar" id="nav">
          <img src="/images/logo/logo.png" alt="" />
          <nav>
            <ul>
              <li>HOME</li>
              <li>ABOUT</li>
              <li>SRVICES</li>
              <li>ROADMAP</li>
              <li>TEAM</li>
              <li>CONTACT</li>
            </ul>
          </nav>
          <div>
            {/* <input type="button" value="Sig in" class="btn" /> */}
            <input type="button" value="Create account" class="btn btnThree" />
          </div>
        </div>
      </div>
      <SectionOne />
    </div>
  );
};

export default Header;
