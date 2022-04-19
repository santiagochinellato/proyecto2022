import React from "react";

const demoVideo = () => {
  return (
    <div className="demoVideo">
      <img className="separador" src="./images/separador.png" alt="" />
      <h2 className="Titulo">Watch Our Demo Video</h2>
      <p className="subtituloSections">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ducimus
        aliquam sit et labore soluta?
      </p>
      <div className="contenedorVideo">
        <div className="recuadroVideo">
          <iframe
            className="video"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Vsq1_kewchQ?controls=0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default demoVideo;
