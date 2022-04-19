import React from "react";

const CardsHowItWork = (props) => {
  return (
    <div className="cardHowItWork">
      <div className="cardHowItWorkContNum">
        <div className="cardHowItWorkNum">
          <p>{props.numero}</p>
        </div>
      </div>
      <h6 className="cardHowItWorkTitulo">Lorem ipsum dolor sit.</h6>
      <p className="cardHowItWorkTexto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae nulla sunt
        eveniet, recusandae eum doloribus aliquid quaerat optio asperiores
      </p>
    </div>
  );
};

export default CardsHowItWork;
