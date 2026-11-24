
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { espacios } from "../data/espacios.js";

// Coordenadas centrales de Andahuaylas
const centroAndahuaylas = [-13.655, -73.387];

// Crear el mapa
const mapa = L.map("mapa").setView(centroAndahuaylas, 13);

// Cargar el mapa de OpenStreetMap
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  maxZoom: 19
}).addTo(mapa);

// Icono personalizado para parques
const iconoParque = L.divIcon({
  html: '<div style="background:#15803d;color:white;width:36px;height:36px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:20px;border:3px solid white;box-shadow:0 2px 6px #555;">🌳</div>',
  className: "",
  iconSize: [36, 36],
  iconAnchor: [18, 18],
  popupAnchor: [0, -18]
});

// Icono personalizado para plazas
const iconoPlaza = L.divIcon({
  html: '<div style="background:#2563eb;color:white;width:36px;height:36px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:20px;border:3px solid white;box-shadow:0 2px 6px #555;">🏛️</div>',
  className: "",
  iconSize: [36, 36],
  iconAnchor: [18, 18],
  popupAnchor: [0, -18]
});

// Lista de marcadores
const marcadores = [];

espacios.forEach((espacio) => {
  if (
    typeof espacio.latitud === "number" &&
    typeof espacio.longitud === "number"
  ) {
    const icono = espacio.tipo === "plaza"
         ? iconoPlaza
        : iconoParque;

    const marcador = L.marker(
     [espacio.latitud, espacio.longitud],
     { icon: icono }
    )
      .addTo(mapa)
      .bindPopup(`
        <div>
          <strong>${espacio.nombre}</strong>
          <p>${espacio.zona}</p>
          <a href="/espacios/${espacio.slug}/">
            Ver detalles
          </a>
        </div>
      `);

    marcadores.push(marcador);
  }
});

// Ajustar el mapa para mostrar todos los marcadores
if (marcadores.length > 0) {
  const grupo = L.featureGroup(marcadores);
  mapa.fitBounds(grupo.getBounds(), {
    padding: [30, 30]
  });
}

// Crear leyenda del mapa
const leyenda = L.control({ position: "bottomright" });

leyenda.onAdd = function () {
  const div = L.DomUtil.create("div", "leyenda-mapa");

  div.style.background = "white";
  div.style.padding = "12px 16px";
  div.style.borderRadius = "12px";
  div.style.boxShadow = "0 2px 8px rgba(0,0,0,0.2)";
  div.style.lineHeight = "2";

  div.innerHTML = `
    <strong style="font-size:14px;">Tipos de espacios</strong>
    <div>
      🌳 <span>Parques</span>
    </div>
    <div>
      🏛️ <span>Plazas</span>
    </div>
  `;

  return div;
};

leyenda.addTo(mapa);


