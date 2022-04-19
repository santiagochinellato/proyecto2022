import React from "react";

const CardsWeAreTrusted = (props) => {
  return (
    <div className="trustedCard">
      <img className="trustedImgOne" src="./images/logoejemplo.png" alt="" />
      <img
        className="trustedImgTwo"
        src={`./images/${props.imagen}.png`}
        alt=""
      />
    </div>
  );
};

export default CardsWeAreTrusted;
