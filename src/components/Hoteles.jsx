import React from "react";
import "../styles/styles.css";
import { conversionFecha, conversionPrecio } from "./conversion";

import Hotel from "./Hotel";

function Hoteles(props) {
  return (
    <div className="hoteles">
      {props.dataHotel.length === 0 ? (
        <div className="noDisponible">
          <h2>¡No hay hoteles Disponibles!</h2>
        </div>
      ) : (
        props.dataHotel.map((hotel) => {
          return (
            <Hotel
              key={hotel.slug}
              nombre={hotel.name}
              imagen={hotel.photo}
              descripcion={hotel.description}
              desde={conversionFecha(hotel.availabilityFrom)}
              hasta={conversionFecha(hotel.availabilityTo)}
              habitaciones={hotel.rooms}
              pais={hotel.country}
              ciudad={hotel.city}
              precio={conversionPrecio(hotel.price)}
            />
          );
        })
      )}
    </div>
  );
}

export default Hoteles;
