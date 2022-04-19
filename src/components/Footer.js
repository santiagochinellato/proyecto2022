import React from "react";

import "../scss/app.scss";

const Footer = () => {
  return (
    <footer>
      <div class="contenedorInfoFooter">
        <div class="logoAndInfo">
          <img class="logoFooter" src="./images/logo/logo.png" alt="" />
          <p>
            Insurance is too complicated. Draft understands its customers and
            make the process simple for them. 
          </p>
          <input type="button" value="Ask Question" class="btn btnTwo" />
        </div>
        <div class="menuOneFooter">
          <h6>Community</h6>
          <ul>
            <li>For talents</li>
            <li>For Companies</li>
            <li>Facebook group</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div class="menuTwoFooter">
          <h6>About us</h6>
          <ul>
            <li>Meet the Team</li>
            <li>Our Story</li>
            <li>Career</li>
          </ul>
        </div>
        <div class="contactFooter">
          <h6>Contacts</h6>
          <p>
            Feel free to get in touch with us via phone or send us a message.
          </p>
          <p class="infoColor">+1-301-340-3946</p>
          <p class="infoColor">info@draft.com</p>
        </div>
      </div>
      <div class="PieFooter">
        <p>&copy Draft 2022, All Rights Reserved</p>
        <div>
          <img src="./images/twitter.png" alt="" />
          <img src="./images/facebook.png" alt="" />
          <img src="./images/google.png" alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
