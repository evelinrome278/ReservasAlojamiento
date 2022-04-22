import "./styles/styles.css";
import React, { useState } from "react";
import Header from "./components/Header";
import Filtros from "./components/Filtros";
import Hoteles from "./components/Hoteles";
import { hotelsData } from "./hotelsData";

export default function App() {
  // Estados
  const [desde, setDesde] = useState("");
  const [hasta, setHasta] = useState("");
  const [pais, actualizarPais] = useState("Todos");
  const [tamaño, actualizarTamaño] = useState("Todos");
  const [precio, actualizarPrecio] = useState("Todos");

  //CONVERSION FECHA

  const msDesde = new Date(desde + "T00:00:00").getTime();
  const msHasta = new Date(hasta + "T00:00:00").getTime();

  let filtrados = hotelsData;

  if (desde !== "" && hasta !== "") {
    filtrados = hotelsData.filter((hotel) => {
      return (
        msDesde >= hotel.availabilityFrom && hotel.availabilityTo <= msHasta
      );
    });
  }

  let hotelesFiltrados = filtrados
    .filter((hotel) => {
      if (pais === "Todos") {
        return true;
      } else {
        return hotel.country.toLowerCase() === pais.toLowerCase();
      }
    })
    .filter((hotel) => {
      if (tamaño === "Todos") {
        return true;
      } else {
        if (tamaño === "Pequeño") {
          return hotel.rooms <= 10;
        } else if (tamaño === "Mediano") {
          return hotel.rooms > 10 && hotel.rooms < 20;
        } else {
          return hotel.rooms >= 20;
        }
      }
    })
    .filter((hotel) => {
      if (precio === "Todos") {
        return true;
      } else {
        return hotel.price === precio.length;
      }
    });

  return (
    <div className="App">
      <Header
        pais={pais}
        tamaño={tamaño}
        precio={precio}
        desde={desde}
        hasta={hasta}
      />

      <Filtros
        pais={pais}
        tamaño={tamaño}
        precio={precio}
        desde={desde}
        hasta={hasta}
        actualizarPais={actualizarPais}
        actualizarPrecio={actualizarPrecio}
        actualizarTamaño={actualizarTamaño}
        setDesde={setDesde}
        setHasta={setHasta}
        filtros={hotelesFiltrados}
      />
      <Hoteles dataHotel={hotelesFiltrados} />
    </div>
  );
}
