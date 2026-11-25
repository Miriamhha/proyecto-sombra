
import { espacios } from "../data/espacios.js";

const CLAVE_COMPARADOR = "sombraCercaComparador";

const contenido = document.querySelector("#contenido-comparador");
const botonLimpiar = document.querySelector("#limpiar-comparador");

// Obtener espacios guardados
function obtenerSeleccionados() {
  return JSON.parse(localStorage.getItem(CLAVE_COMPARADOR)) || [];
}

// Mostrar información
function mostrarComparacion() {
  const seleccionados = obtenerSeleccionados();

  const lugares = espacios.filter((lugar) =>
    seleccionados.includes(lugar.slug)
  );

  if (lugares.length === 0) {
    contenido.innerHTML = `
      <div class="text-center py-10">
        <p class="text-gray-500 mb-4">
          Todavía no has seleccionado espacios para comparar.
        </p>

        <a
          href="/espacios/"
          class="inline-block bg-green-800 text-white px-5 py-3 rounded-lg"
        >
          Explorar espacios
        </a>
      </div>
    `;
    return;
  }

  const mostrarValor = (valor) => {
    if (valor === true) return "Sí";
    if (valor === false) return "No";
    if (valor === null || valor === undefined || valor === "") {
      return "Sin información";
    }
    return valor;
  };

  const caracteristicas = [
    { nombre: "Tipo", campo: "tipo" },
    { nombre: "Zona", campo: "zona" },
    { nombre: "Dirección", campo: "direccion" },
    { nombre: "Nivel de sombra", campo: "sombra" },
    { nombre: "Asientos", campo: "asientos" },
    { nombre: "Disponibilidad de agua", campo: "agua" },
    { nombre: "Baños", campo: "banos" },
    { nombre: "Rampas de acceso", campo: "rampas" },
    { nombre: "Iluminación", campo: "iluminacion" }
  ];

  contenido.innerHTML = `
    <div class="overflow-x-auto">
      <table class="w-full min-w-[600px] table-fixed border-collapse text-sm">
        <thead>
          <tr class="bg-green-100">
            <th style="
                 width: 140px;
                 min-width: 140px;
                 padding: 10px;
                 text-align: left;
                 border: 1px solid #d1d5db;
            ">
                 Características
            </th>
                ${lugares.map((lugar) => `
                <th style="
                width: 200px;
                min-width: 200px;
                padding: 12px;
                text-align: center;
                vertical-align: top;
            ">
                <div style="
                width: 170px;
                height: 115px;
                margin: 0 auto 12px;
                overflow: hidden;
                border-radius: 10px;
                ">
                <img
                    src="${lugar.imagen}"
                    alt="${lugar.nombre}"
                    style="
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: center;
                    display: block;
                    "
                />
                </div>
            

                <span class="font-bold text-green-950">
                  ${lugar.nombre}
                </span>

                <button
                  type="button"
                  class="btn-quitar mt-3 text-red-600 hover:text-red-800 text-xs"
                  data-slug="${lugar.slug}"
                >
                  ✕ Quitar
                </button>
              </th>
            `).join("")}

          </tr>
        </thead>

        <tbody>
          ${caracteristicas.map((item) => `
            <tr class="hover:bg-gray-50">
            <td style="
                width: 140px;
                min-width: 140px;
                padding: 8px;
                border: 1px solid #d1d5db;
                font-weight: 600;
                color: #374151;
                overflow-wrap: break-word;
                ">
            ${item.nombre}
            </td>

              ${lugares.map((lugar) => `
                <td class="p-4 border text-center text-gray-600">
                  ${mostrarValor(lugar[item.campo])}
                </td>
              `).join("")}

            </tr>
          `).join("")}
        </tbody>

      </table>
    </div>

    <p class="text-gray-500 text-xs mt-4">
      La comparación utiliza los datos registrados de cada espacio.
      Los campos sin información se identifican expresamente.
    </p>
  `;

  // Activar botones para quitar espacios
  document.querySelectorAll(".btn-quitar").forEach((boton) => {
    boton.addEventListener("click", () => {
      const nuevos = obtenerSeleccionados().filter(
        (slug) => slug !== boton.dataset.slug
      );

      localStorage.setItem(
        CLAVE_COMPARADOR,
        JSON.stringify(nuevos)
      );

      mostrarComparacion();
    });
  });
}

// Limpiar todos los espacios
botonLimpiar.addEventListener("click", () => {
  localStorage.removeItem(CLAVE_COMPARADOR);
  mostrarComparacion();
});

// Ejecutar
mostrarComparacion();
