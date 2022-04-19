import React from "react";
import "../scss/app.scss";

const SectionThree = () => {
  return (
    <section className="sectionThree">
      <div className="sectionThreeGridOne">
        <img
          className="imgCirculoSectionThree"
          src="./images/circulo-2.png"
          alt=""
        />
        <img
          className="imgIconoSectionThree"
          src="./images/icon-7.png"
          alt=""
        />
      </div>
      <div className="sectionThreeGridTwo">
        <img
          className="imgIconoSectionThreeTwo"
          src="./images/icon-6.png"
          alt=""
        />
      </div>
      <div className="sectionThreeGridThree">
        <p>
          You are one step away from discovering your next{" "}
          <span>Character </span> in Pixi-World
        </p>
      </div>
      <div className="sectionThreeGridFour">
        <img
          className="imgCiculoSectionThreeTwo"
          src="./images/circulo-3.png"
          alt=""
        />
        <img
          className="imgCirculoSectionThreeThree"
          src="./images/circulo-2.png"
          alt=""
        />
      </div>
    </section>
  );
};

export default SectionThree;
