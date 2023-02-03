import React from "react";
import "@styles/About.scss";
import logo from "../assets/logos/logo-01.svg";

const About = () => {
  return (
    <>
      <div className="grid-column">
        <div>
          <img src={logo} alt="logo" className="logo-about" href="/" />
        </div>
        <div className="description">
          <h2>¿Quienes Somos?</h2>
          <h3>Ecommerce</h3>
          <p>
            Somos una empresa dedicada al ecommerce, especificamente <br />
            le damos una nueva oportunidad a lo material que nos rodea. <br />
            Para así, intentar no contaminar tanto el ambiente. <br />
            Intentamos desde nuestro lugar, hacer un poquito mejor el lugar{" "}
            <br />
            donde vivimos.💜
          </p>
        </div>
      </div>
      <div>
        <footer>
          <div className="container__footer">
            <div className="box__footer">
              <div className="logo">
                <h2>Enzo Prina Dev</h2>
              </div>
              <div className="terms">
                Con todo el <b>amor</b> <br /> realizado por <b> Enzo Prina </b>
              </div>
            </div>
            <div className="box__footer">
              <h2>Servicios</h2>
              <a href="#">Landing Page</a>
              <a href="#">E commerce</a>
              <a href="#">Desarrollo de App</a>
              <a href="#">Prox. Desarrollo Mobile</a>
            </div>

            <div className="box__footer">
              <h2>Redes Sociales</h2>
              
              <a href="https://github.com/EnzoPrina">
                <i className="fa fa-github" aria-hidden="true" /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/enzo-prina-0b7a1b1b3/">
                <i className="fab fa-linkedin" /> Linkedin
              </a>
              <a href="#">
                <i className="fab fa-instagram-square" /> Instagram
              </a>
            </div>
          </div>
          <div className="box__copyright">
            <hr />
            <p>
              Todos los derechos reservados © 2023 <b> <a href="https://enzoprina-portafolio.netlify.app/"> Enzo Prina</a></b>
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default About;
