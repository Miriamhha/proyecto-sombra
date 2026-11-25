const CLAVE_COMPARADOR = "sombraCercaComparador";

// Obtener espacios seleccionados
function obtenerComparador() {
  return JSON.parse(localStorage.getItem(CLAVE_COMPARADOR)) || [];
}

// Guardar espacios seleccionados
function guardarComparador(espacios) {
  localStorage.setItem(
    CLAVE_COMPARADOR,
    JSON.stringify(espacios)
  );
}

// Activar botones de comparación
function iniciarComparador() {
  const botones = document.querySelectorAll(".btn-comparar");

  botones.forEach((boton) => {
    const slug = boton.dataset.slug;
    const seleccionados = obtenerComparador();

    // Mostrar estado del botón
    if (seleccionados.includes(slug)) {
      boton.textContent = "✓ Agregado";
      boton.classList.add("bg-green-100");
    }

    boton.addEventListener("click", () => {
      const espacios = obtenerComparador();

      if (espacios.includes(slug)) {
        const nuevos = espacios.filter((item) => item !== slug);
        guardarComparador(nuevos);

        boton.textContent = "+ Comparar";
        boton.classList.remove("bg-green-100");
      } else {
        if (espacios.length >= 3) {
          alert("Puedes comparar un máximo de 3 espacios.");
          return;
        }

        espacios.push(slug);
        guardarComparador(espacios);

        boton.textContent = "✓ Agregado";
        boton.classList.add("bg-green-100");
      }
    });
  });
}

// Ejecutar cuando la página esté lista
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", iniciarComparador);
} else {
  iniciarComparador();
}
