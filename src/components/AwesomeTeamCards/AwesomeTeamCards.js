import React from "react";
import { BsTwitter, BsInstagram, BsFacebook, BsSkype } from "react-icons/bs";
const AwesomeTeamCards = (props) => {
  return (
    <div className="cardTeam">
      <img
        className="imageTeam"
        src={`./images/pp_${props.imagen}.png`}
        alt=""
      />
      <h6 className="titleTeam">{props.nombre}</h6>
      <p className="textTeam">{props.cargo}</p>
      <div className="containerRS">
        <BsTwitter className="iconTeam" />
        <BsInstagram className="iconTeam" />
        <BsFacebook className="iconTeam" />
        <BsSkype className="iconTeam" />
      </div>
    </div>
  );
};

export default AwesomeTeamCards;
