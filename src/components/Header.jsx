import React from "react";
import { conversionFecha } from "./conversion";
import "../styles/styles.css";
const imgHotels = require("../../public/images/cover_hotels.jpg");

const divStyle = {
  width: "100%",
  height: "45vh",
  backgroundImage: `url(${imgHotels})`,
  backgroundSize: "cover"
};

function Header({ desde, hasta, pais, precio, tamaño }) {
  return (
    <div className="cover" style={divStyle}>
      <div className="Header fondoHeader ">
        <h1>HOTELES.COM</h1>

        <div className="fondoSelect">
          <div>
            <h3>Desde</h3>
            {desde === "" ? `Cualquier Fecha` : `${conversionFecha(desde)}`}
          </div>
          <div>
            <h3>Hasta</h3>
            {hasta === "" ? `Cualquier Fecha` : `${conversionFecha(hasta)}`}
          </div>

          <div>
            <h3>País Seleccionado</h3>
            {pais}
          </div>

          <div>
            <h3>Precio Seleccionado</h3>
            {precio}
          </div>

          <div>
            <h3>Tamaño Seleccionado</h3>
            {tamaño}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
