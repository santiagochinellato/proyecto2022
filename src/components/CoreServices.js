import React from "react";
import CardsCoreServices from "./CardsCoreServices/CardsCoreServices";

const CoreServices = () => {
  return (
    <div className="coreService">
      <img className="separador" src="./images/separador.png" alt="" />
      <h2 className="Titulo">Our Core Services</h2>
      <p className="subtituloSections">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ducimus
        aliquam sit et labore soluta?
      </p>
      <div className="contenedorCardsServices">
        <CardsCoreServices imagen="One" titulo="Smart Trading Modules" />
        <CardsCoreServices imagen="Two" titulo="Adaptive Social Assistant" />
        <CardsCoreServices imagen="Three" titulo="Analyzer of the News" />
        <CardsCoreServices imagen="Four" titulo="Exchange Order Management" />
        <CardsCoreServices
          imagen="Five"
          titulo="Module of Price Notification"
        />
        <CardsCoreServices imagen="Six" titulo="Crypto Trading Platform" />
      </div>
    </div>
  );
};

export default CoreServices;
