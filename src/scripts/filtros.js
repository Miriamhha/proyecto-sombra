  
document.addEventListener("DOMContentLoaded", () => {

  const busqueda = document.querySelector("#busqueda");
  const tipo = document.querySelector("#tipo");
  const sombra = document.querySelector("#sombra");
  const asientos = document.querySelector("#asientos");
  const limpiar = document.querySelector("#limpiar");

  const tarjetas = document.querySelectorAll(".tarjeta-espacio");
  const contador = document.querySelector("#contador");
  const sinResultados = document.querySelector("#sin-resultados");

  function filtrarEspacios() {
    const texto = busqueda.value.toLowerCase().trim();
    const tipoSeleccionado = tipo.value;
    const sombraSeleccionada = sombra.value;
    const asientosSeleccionados = asientos.value;

    let encontrados = 0;

    tarjetas.forEach((elemento) => {
      const tarjeta = elemento;

      const nombre = tarjeta.dataset.nombre || "";
      const zona = tarjeta.dataset.zona || "";
      const tipoLugar = tarjeta.dataset.tipo || "";
      const nivelSombra = tarjeta.dataset.sombra || "";
      const tieneAsientos = tarjeta.dataset.asientos || "";

      const coincideTexto =
        nombre.toLowerCase().includes(texto) ||
        zona.toLowerCase().includes(texto);

      const coincideTipo =
        !tipoSeleccionado || tipoLugar === tipoSeleccionado;

      const coincideSombra =
        !sombraSeleccionada || nivelSombra === sombraSeleccionada;

      const coincideAsientos =
        !asientosSeleccionados || tieneAsientos === asientosSeleccionados;

      const coincide =
        coincideTexto &&
        coincideTipo &&
        coincideSombra &&
        coincideAsientos;

      tarjeta.classList.toggle("hidden", !coincide);

      if (coincide) {
        encontrados++;
      }
    });

    if (contador) {
      contador.textContent = `${encontrados} espacios encontrados`;
    }

    if (sinResultados) {
      sinResultados.classList.toggle("hidden", encontrados !== 0);
    }
  }

  if (busqueda && tipo && sombra && asientos && limpiar) {

    busqueda.addEventListener("input", filtrarEspacios);
    tipo.addEventListener("change", filtrarEspacios);
    sombra.addEventListener("change", filtrarEspacios);
    asientos.addEventListener("change", filtrarEspacios);

    limpiar.addEventListener("click", () => {
      busqueda.value = "";
      tipo.value = "";
      sombra.value = "";
      asientos.value = "";

      filtrarEspacios();
    });

  }

});
