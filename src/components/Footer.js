import React from "react";
import "../scss/app.scss";
import {
  BsFacebook,
  BsTwitter,
  BsGoogle,
  BsInstagram,
  BsLinkedin,
} from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contenedorLogoRedes">
        <img className="footerLogo" src="./images/logo/logo.png" alt="" />
        <p className="FooterTexto">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
          libero, ex nemo officia ea, in iure eaque doloremque, nobis ut
          temporibus odio perferendis neque rerum! Ducimus eaque praesentium
          velit ipsa.
        </p>
        <div className="footerRedes">
          <BsFacebook className="footerRedesSociales" />
          <BsTwitter className="footerRedesSociales" />
          <BsGoogle className="footerRedesSociales" />
          <BsInstagram className="footerRedesSociales" />
          <BsLinkedin className="footerRedesSociales" />
        </div>
      </div>
      <div className="footerMenu">
        <h6 className="footerMenuTitulo">NAVIGATE</h6>
        <ul>
          <li>Advertisers</li>
          <li>Developers</li>
          <li>Resources</li>
          <li>Company</li>
          <li>Connect</li>
        </ul>
      </div>
      <div className="FooterPrivacy">
        <h6 className="footerPrivacyTitulo">PRIVACY & TOS</h6>
        <ul>
          <li>Advertiser Agreement</li>
          <li>Acceptable Use Policy</li>
          <li> Privacy Policy</li>
          <li>Technology Privacy</li>
          <li>Developer Agreement</li>
        </ul>
      </div>
      <div className="footerAdress">
        <h6 className="footerAdressTitulo">PHONE</h6>
        <p className="footerAdressTexto">Mailing Address: xx00 E. Union Ave</p>
        <p className="footerAdressTexto">Suite 1100. Denver, CO 80237</p>
        <p className="footerAdressTexto">+999 90932 627</p>
        <p className="footerAdressTexto">support@yourdomain.com</p>
      </div>
    </footer>
  );
};

export default Footer;
