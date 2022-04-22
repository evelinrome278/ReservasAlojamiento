import "../styles/styles.css";

function Filtros({
  pais,
  precio,
  tamaño,
  desde,
  hasta,
  actualizarPais,
  actualizarPrecio,
  actualizarTamaño,
  setDesde,

  setHasta
}) {
  //manejadores
  const manejarFechaDesde = (evento) => {
    setDesde(evento.target.value);
  };
  const manejarFechaHasta = (evento) => {
    setHasta(evento.target.value);
  };
  const manejarCambioPais = (evento) => {
    actualizarPais(evento.target.value);
  };

  const manejarCambioPrecio = (evento) => {
    actualizarPrecio(evento.target.value);
  };
  const manejarCambioTam = (evento) => {
    actualizarTamaño(evento.target.value);
  };

  const resetClick = () => {
    setDesde("");
    setHasta("");
    actualizarPais("Todos");
    actualizarTamaño("Todos");
    actualizarPrecio("Todos");
  };

  return (
    <div className="filters">
      <div className="containerFilters">
        <form className="FiltersDate" name="date">
          <input
            type="date"
            id="fechaInicio"
            value={desde}
            onChange={manejarFechaDesde}
            name="fecha_Desde"
          />

          <input
            type="date"
            id="fechaFin"
            value={hasta}
            onChange={manejarFechaHasta}
            name="feha_hasta"
          />

          {/* Select Pais */}
          <select name="selectPais" value={pais} onChange={manejarCambioPais}>
            <option value="Todos">Todos</option>
            <option value="Argentina">Argentina</option>
            <option value="Brasil">Brasil</option>
            <option value="Chile">Chile</option>
            <option value="Uruguay">Uruguay</option>
          </select>

          {/* Select Precio */}
          <select
            name="selectPrecio"
            value={precio}
            onChange={manejarCambioPrecio}
          >
            <option value="Todos">Todos</option>
            <option value="$">$ (oferta)</option>
            <option value="$$">$$ (Económico)</option>
            <option value="$$$">$$$ (Lujos)</option>
            <option value="$$$$">$$$$ (Magnífico)</option>
          </select>
          {/* Select tamaño */}
          <select
            name="selectTamanio"
            value={tamaño}
            onChange={manejarCambioTam}
          >
            <option value="Todos">Todos</option>
            <option value="Pequeño">Pequeño</option>
            <option value="Mediano">Mediano</option>
            <option value="Grande">Grande</option>
          </select>
          <button type="reset" onClick={resetClick} className="buttonLimpiar">
            Limpiar
          </button>
        </form>
      </div>
    </div>
  );
}
export default Filtros;
