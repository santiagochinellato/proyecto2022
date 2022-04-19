import React from "react";

import "../scss/app.scss";

const SectionFive = () => {
  return (
    <section class="sectionFive">
      <div class="sectionFiveContenedorTextos">
        <img src="./images/separador.png" alt="" className="separador" />
        <h3>We complete every project with extra care as custumer need</h3>
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
        <input type="button" value="READ MORE" class="btn btnFour" />
      </div>
      <div class="sectionFiveContenedorImagenes">
        <img
          class="contenedorImagenesSectionFiveImgOne"
          src="./images/ilusFour.png"
          alt=""
        />
        {/* <img
          class="contenedorImagenesSectionFiveImgTwo"
          src="./images/people-1.png"
          alt=""
        />
        <img
          class="contenedorImagenesSectionFiveImgThree"
          src="./images/icon-1.png"
          alt=""
        />
        <img
          class="contenedorImagenesSectionFiveImgFour"
          src="./images/icon-3.png"
          alt=""
        />
        <img
          class="contenedorImagenesSectionFiveImgFive"
          src="./images/icon-2.png"
          alt=""
        /> */}
      </div>
    </section>
  );
};

export default SectionFive;
