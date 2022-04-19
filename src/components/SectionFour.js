import React from "react";
import "../scss/app.scss";

const SectionFour = () => {
  return (
    <section class="sectionFour">
      <div class="sectionFourContenedorImagenes">
        <img
          class="contenedorImagenesImgOne"
          src="./images/ilusSix.png"
          alt=""
        />
        {/* <img
          class="contenedorImagenesImgThree"
          src="./images/icon-2.png"
          alt=""
        />
        <img
          class="contenedorImagenesImgFour"
          src="./images/icon-9.png"
          alt=""
        />
        <img
          class="contenedorImagenesImgFive"
          src="./images/icon-8.png"
          alt=""
        />
        <img
          class="contenedorImagenesImgTwo"
          src="./images/people-4.png"
          alt=""
        /> */}
      </div>
      <div class="sectionFourContenedorTextos">
        <img className="separador" src="./images/separador.png" alt="" />
        <h3>We complete every Project with extra care as custumer need</h3>
        <p>
          We believe the world is more beautiful as each person gets better. We
          believe the world is more beautiful as each person gets better. Person
          gets better.
        </p>
        <p>
          We believe the world is more beautiful as each person gets better. We
          believe the world is more beautiful as each person gets better. Person
          gets better.
        </p>
        <input type="button" value="READ MORE" class="btnFour btn" />
      </div>
    </section>
  );
};

export default SectionFour;
