import React from "react";

const CardsCoreServices = (props) => {
  return (
    <div className="cardCoreServices">
      <img
        className="imagenCardService"
        src={`./images/core${props.imagen}.png`}
        alt=""
      />
      <h3 className="tituloCardService">{props.titulo}</h3>
      <p className="textoCardService">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quasi,
        perferendis cupiditate culpa neque quae deserunt
      </p>
    </div>
  );
};

export default CardsCoreServices;
