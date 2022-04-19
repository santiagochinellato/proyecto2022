import React from "react";

import CardsWeAreTrusted from "./CardsWeAreTrusted/CardsWeAreTrusted";

const WeAreTrusted = () => {
  return (
    <div className="HowItWork">
      <img className="separador" src="./images/separador.png" alt="" />
      <h2 className="Titulo">We are Trusted</h2>
      <p className="subtituloSections">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ducimus
        aliquam sit et labore soluta?
      </p>
      <div className="trustedCards">
        <CardsWeAreTrusted imagen="3" />
        <CardsWeAreTrusted imagen="2" />
        <CardsWeAreTrusted imagen="3" />
        <CardsWeAreTrusted imagen="3" />
        <CardsWeAreTrusted imagen="1" />
        <CardsWeAreTrusted imagen="3" />
      </div>
    </div>
  );
};

export default WeAreTrusted;
