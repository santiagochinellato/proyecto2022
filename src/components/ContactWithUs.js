import React from "react";

const ContactWithUs = () => {
  return (
    <div className="contact">
      <img className="separador" src="./images/separador.png" alt="" />
      <h2 className="Titulo">Contact With Us</h2>
      <p className="subtituloSections">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ducimus
        aliquam sit et labore soluta?
      </p>
      <form className="form" action="">
        <input
          className="formNombre"
          type="text"
          id="namel"
          name="name"
          placeholder="Name"
        />
        <input
          className="formMail"
          type="email"
          id="email"
          name="email"
          placeholder="Email"
        />
        <input
          className="formAsunto"
          type="text"
          id="email"
          name="email"
          placeholder="Subject"
        />
        <textarea
          className="formMensaje"
          name="mensaje"
          placeholder="Message"
        />
        <input
          className="btn btnFour formBoton"
          type="submit"
          value="SEND MESSAGE"
        />
      </form>
    </div>
  );
};

export default ContactWithUs;
