import React from "react";
import AwesomeTeamCards from "./AwesomeTeamCards/AwesomeTeamCards";

const AwesomeTeam = () => {
  return (
    <div className="awesomeTeam">
      <img className="separador" src="./images/separador.png" alt="" />
      <h2 className="Titulo">Awesome Team</h2>
      <p className="subtituloSections">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ducimus
        aliquam sit et labore soluta?
      </p>
      <div className="contenedorTeamCards">
        <AwesomeTeamCards nombre="SUNNY KHAN" cargo="CEO" imagen="one" />
        <AwesomeTeamCards
          nombre="AJOY DAS"
          cargo="BUSINESS DEVELOPMENT"
          imagen="two"
        />
        <AwesomeTeamCards
          nombre="AFROZA MOU"
          cargo="UX/UI DESIGNER"
          imagen="three"
        />
        <AwesomeTeamCards
          nombre="LIM SARAH"
          cargo="HEAD OF MARKETING"
          imagen="four"
        />
        <AwesomeTeamCards nombre="LIM SARAH" cargo="CEO" imagen="one" />

        <AwesomeTeamCards
          nombre="SUNNY KHAN"
          cargo="HEAD OF MARKETING"
          imagen="four"
        />
        <AwesomeTeamCards
          nombre="AJOY DAS"
          cargo="UX/UI DESIGNER"
          imagen="two"
        />
        <AwesomeTeamCards
          nombre="AFROZA MOU"
          cargo="BUSINESS DEVELOPMENT"
          imagen="three"
        />
      </div>
    </div>
  );
};

export default AwesomeTeam;
