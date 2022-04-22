const dias_text = [
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sabado",
  "Domingo"
];
const meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre"
];

//conversion de las fechas en texto natural

const conversionFecha = (props) => {
  const fecha = new Date(props);
  const dias = fecha.getDay();
  const dia = fecha.getUTCDate();
  const mes = fecha.getMonth();
  const anio = fecha.getFullYear();

  return `El ${dias_text[dias]}, ${dia} de ${meses[mes]} de ${anio}`;
};

//conversion Precio
const conversionPrecio = (precio) => {
  if (precio === 1) {
    return "$ Oferta";
  }
  if (precio === 2) {
    return "$$ Económico";
  }
  if (precio === 3) {
    return "$$$ Lujoso";
  }
  if (precio === 4) {
    return "$$$ Magnífico";
  }
};

export { conversionFecha, conversionPrecio };
