import React from "react";
import "../scss/app.scss";

const SectionOne = () => {
  return (
    <section className="sectionOne">
      <div class="containerInfo">
        <h1>Buy & sell crypto easier than Ever Before</h1>
        <p>
          We have over 15 years experience in business consulting arena. We have
          over 15 year experience in business consultting arena and artificial
          intelligence
        </p>
        <div>
          <input type="button" value=" LEARN MORE" class="btnFour" />
          <input type="button" value="CONTACT US" class="btnFour" />
        </div>
      </div>
      <div class="containerImages">
        <img src="./images/ilusTwo.png" alt="" class="imgCirculo" />
        {/* <img src="./images/icon-4.png" alt="" class="imgIcon4" />
        <img src="./images/people-3.png" alt="" class="imgPp3" />
        <img src="./images/people-2.png" alt="" class="imgPp2" />
        <img src="./images/icon-5.png" alt="" class="imgIcon5" /> */}
      </div>
    </section>
  );
};

export default SectionOne;
