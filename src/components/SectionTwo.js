import React from "react";
import "../scss/app.scss";

const SectionTwo = () => {
  return (
    <section className="sectionTwo">
      <h2>Our Clients</h2>
      <p>We have been working with some Fortune 500 clients</p>
      <div class="gridEmpresas">
        <div class="cardEmpresas" id="imgUno">
          <img class="imgLogos" src="./images/logo/microsoft.png" alt="" />
        </div>
        <div class="cardEmpresas " id="imgDos">
          <img class="imgLogos" src="./images/logo/google.png" alt="" />
        </div>
        <div class="cardEmpresas " id="imgTres">
          <img class="imgLogos" src="./images/logo/oyo.png" alt="" />
        </div>
        <div
          class="cardEmpresas "
          id="imgCuatro"
          data-aos="fade-right"
          data-aos-easing="ease-in-back"
          data-aos-delay="800"
          data-aos-offset="0"
        >
          <img class="imgLogos" src="./images/logo/airBnB.png" alt="" />
        </div>
        <div
          class="cardEmpresas"
          id="imgCinco"
          data-aos="fade-down"
          data-aos-easing="ease-in-back"
          data-aos-delay="500"
          data-aos-offset="0"
        >
          <img class="imgLogos" src="./images/logo/fedEx.png" alt="" />
        </div>
        <div
          class="cardEmpresas "
          id="imgSeis"
          data-aos="fade-left"
          data-aos-easing="ease-in-back"
          data-aos-delay="800"
          data-aos-offset="0"
        >
          <img class="imgLogos" src="./images/logo/Amazon.png" alt="" />
        </div>
        <div
          class="cardEmpresas"
          id="imgSiete"
          data-aos="fade-down"
          data-aos-easing="ease-in-back"
          data-aos-delay="500"
          data-aos-offset="0"
        >
          <img class="imgLogos" src="./images/logo/bookMyshow.png" alt="" />
        </div>
        <div
          class="cardEmpresas "
          id="imgOcho"
          data-aos="fade-down"
          data-aos-easing="ease-in-back"
          data-aos-delay="500"
          data-aos-offset="0"
        >
          <img class="imgLogos" src="./images/logo/ola.png" alt="" />
        </div>
        <div
          class="cardEmpresas "
          id="imgNueve"
          data-aos="fade-down"
          data-aos-easing="ease-in-back"
          data-aos-delay="500"
          data-aos-offset="0"
        >
          <img class="imgLogos" src="./images/logo/walmart.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
