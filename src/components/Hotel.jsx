import React from "react";
import "../styles/styles.css";

function Hotel(props) {
  const manejarClick = () => {
    alert("El hotel ha sido reservado");
  };

  return (
    <div className="hotel">
      <img width="100%" src={props.imagen} alt={props.nombre} />
      <h4>{props.nombre}</h4>

      <div className="date">
        <p>Desde {props.desde}</p>
      </div>
      <div className="date">
        <p>Hasta {props.hasta}</p>
      </div>

      <p className="descripcion">{props.descripcion}</p>

      <p className="ubicacion">
        <i className="fas fa-map-marker-alt"></i>
        {props.ciudad}, {props.pais}
      </p>

      <div className="containerHabp">
        <div className="hab">
          <p>
            <i className="fas fa-bed"></i>
            {props.habitaciones} Habitaciones
          </p>
        </div>
        <div className="precio">
          <p>{props.precio}</p>
        </div>
      </div>

      <button type="button" onClick={manejarClick} className="btnReserva">
        Reserva
      </button>
    </div>
  );
}
export default Hotel;
