import React from "react";
import CardsHowItWork from "./CardsHowItWork/CardsHowItWork";

const HowItWork = () => {
  return (
    <div className="HowItWork">
      <img className="separador" src="./images/separador.png" alt="" />
      <h2 className="Titulo">Lorem, ipsum.</h2>
      <p className="subtituloSections">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ducimus
        aliquam sit et labore soluta?
      </p>
      <div className="HowItWorkContenedor">
        <div className="HowItWorkContenedorImagen">
          <img src="./images/Sin título-1.png" alt="" />
        </div>
        <div className="HowItWorkContenedorCards">
          <CardsHowItWork numero="1" />
          <CardsHowItWork numero="2" />
          <CardsHowItWork numero="3" />
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
