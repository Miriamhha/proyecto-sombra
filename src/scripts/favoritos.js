
import { espacios } from "../data/espacios.js";

// Obtener los favoritos guardados
function obtenerFavoritos() {
  return JSON.parse(localStorage.getItem("favoritos") || "[]");
}

// Guardar los favoritos
function guardarFavoritos(favoritos) {
  localStorage.setItem("favoritos", JSON.stringify(favoritos));
}

// Actualizar los corazones de las tarjetas
function actualizarCorazones() {
  const favoritos = obtenerFavoritos();

  document.querySelectorAll(".btn-favorito").forEach((boton) => {
    const slug = boton.dataset.slug;
    const estaGuardado = favoritos.includes(slug);

    boton.textContent = estaGuardado ? "❤️" : "♡";
    boton.setAttribute("aria-pressed", String(estaGuardado));
    boton.setAttribute(
      "aria-label",
      estaGuardado ? "Quitar de favoritos" : "Agregar a favoritos"
    );
  });
}

// Activar los botones de favoritos del catálogo
function activarBotonesFavoritos() {
  document.querySelectorAll(".btn-favorito").forEach((boton) => {
    boton.addEventListener("click", () => {
      const slug = boton.dataset.slug;
      let favoritos = obtenerFavoritos();

      if (favoritos.includes(slug)) {
        favoritos = favoritos.filter((item) => item !== slug);
      } else {
        favoritos.push(slug);
      }

      guardarFavoritos(favoritos);
      actualizarCorazones();
    });
  });
}

// Mostrar la página de favoritos
function mostrarFavoritos() {
  const contenedor = document.querySelector("#lista-favoritos");
  const mensaje = document.querySelector("#mensaje-vacio");

  if (!contenedor || !mensaje) return;

  const favoritos = obtenerFavoritos();

  const seleccionados = espacios.filter((espacio) =>
    favoritos.includes(espacio.slug)
  );

  contenedor.innerHTML = "";

  if (seleccionados.length === 0) {
    mensaje.classList.remove("hidden");
    return;
  }

  mensaje.classList.add("hidden");

  seleccionados.forEach((espacio) => {
    const tarjeta = document.createElement("article");

    tarjeta.className =
      "bg-white rounded-xl shadow-md overflow-hidden";

    tarjeta.innerHTML = `
      <img
        src="${espacio.imagen}"
        alt="${espacio.nombre}"
        class="w-full h-48 object-cover"
      >

      <div class="p-5">
        <h2 class="text-xl font-bold text-gray-800">
          ${espacio.nombre}
        </h2>

        <p class="text-gray-600 mt-2">
          ${espacio.zona}
        </p>

        <div class="flex justify-between items-center mt-5">
          <a
            href="/espacios/${encodeURIComponent(espacio.slug)}/"
            class="text-green-700 font-semibold hover:underline"
          >
            Ver detalles
          </a>

          <button
            type="button"
            class="text-red-600 font-semibold hover:text-red-800"
            data-quitar="${espacio.slug}"
          >
            ♥ Quitar
          </button>
        </div>
      </div>
    `;

    contenedor.appendChild(tarjeta);
  });

  // Activar botones para quitar favoritos
  contenedor.querySelectorAll("[data-quitar]").forEach((boton) => {
    boton.addEventListener("click", () => {
      const slug = boton.dataset.quitar;

      const nuevosFavoritos = obtenerFavoritos().filter(
        (favorito) => favorito !== slug
      );

      guardarFavoritos(nuevosFavoritos);
      mostrarFavoritos();
    });
  });
}

// Inicializar las funciones
actualizarCorazones();
activarBotonesFavoritos();
mostrarFavoritos();
