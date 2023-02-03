import React from "react";
import "../styles/Carrousel.scss";
import nike from '../assets/logos/nike1-01.png'

const Carrousel = () => {
  return (
    <>
      <div class="container-hero">
        <img src={nike} alt='nike' className="nike"/>
      </div>
    </>
  );
};

export default Carrousel;
