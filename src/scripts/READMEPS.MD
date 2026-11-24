
# 🌳 Sombra Cerca

## 1. Descripción del proyecto

**Sombra Cerca** es una aplicación web que permite identificar y explorar espacios públicos con vegetación y sombra en la provincia de Andahuaylas, Apurímac, Perú.

El proyecto busca ayudar a las personas a encontrar lugares adecuados para descansar, caminar y disfrutar de espacios al aire libre.

La aplicación presenta un catálogo de espacios públicos, permite aplicar filtros según sus características, guardar lugares favoritos y consultar sus ubicaciones mediante un mapa geográfico interactivo.

## 2. Funcionalidades principales

- Catálogo de espacios públicos.
- Visualización de información y fotografías de cada lugar.
- Filtros para buscar espacios según sus características.
- Sistema de favoritos utilizando LocalStorage.
- Mapa geográfico interactivo de los espacios registrados.
- Marcadores personalizados para parques y plazas.
- Ventanas emergentes con nombres y enlaces a los detalles de cada espacio.

## 3. Tecnologías utilizadas

| Tecnología | Descripción |
|---|---|
| Astro | Framework para desarrollar la aplicación web. |
| JavaScript | Lenguaje utilizado para la lógica y funcionalidades. |
| Tailwind CSS | Framework para los estilos y diseño responsive. |
| Leaflet | Biblioteca para implementar el mapa interactivo. |
| OpenStreetMap | Fuente de mapas geográficos. |
| HTML5 | Estructura de las páginas web. |
| CSS3 | Estilos y presentación visual. |
| LocalStorage | Almacenamiento local de espacios favoritos. |
| Git y GitHub | Control de versiones y alojamiento del código. |

## 4. Requisitos previos

Para ejecutar el proyecto se necesita:

- Node.js instalado.
- npm (administrador de paquetes de Node.js).
- Visual Studio Code o un editor de código.
- Navegador web actualizado.
- Conexión a Internet para cargar los mapas de OpenStreetMap.

## 5. Instalación

### Paso 1. Clonar el repositorio

```bash
git clone URL_DE_TU_REPOSITORIO
```

### Paso 2. Ingresar a la carpeta del proyecto

```bash
cd nombre-de-tu-proyecto
```

### Paso 3. Instalar las dependencias

```bash
npm install
```

### Paso 4. Ejecutar el proyecto

```bash
npm run dev
```

### Paso 5. Abrir en el navegador

Ingresar a:

```text
http://localhost:4321
```

## 6. Comandos disponibles

| Comando | Descripción |
|---|---|
| npm install | Instala las dependencias. |
| npm run dev | Inicia el servidor de desarrollo. |
| npm run build | Genera la versión de producción. |
| npm run preview | Permite visualizar la versión de producción. |

## 7. Estructura del proyecto

```text
src/
├── components/
│   ├── Header.astro
│   ├── Footer.astro
│   ├── CardEspacio.astro
│   └── Filtro.astro
│
├── data/
│   └── espacios.js
│
├── layouts/
│   └── Layout.astro
│
├── pages/
│   ├── index.astro
│   ├── espacios/
│   │   ├── index.astro
│   │   └── [slug].astro
│   ├── favoritos.astro
│   └── mapa.astro
│
└── scripts/
    ├── filtros.js
    ├── favoritos.js
    └── mapa.js

public/
└── img/
    └── lugares/
```

## 8. Decisiones relevantes del proyecto

### Uso de Astro
Se eligió Astro por su estructura basada en componentes y su capacidad para desarrollar sitios web rápidos y organizados.

### Uso de JavaScript
Se utiliza JavaScript para implementar los filtros, favoritos y funcionalidades interactivas del mapa.

### Uso de Leaflet y OpenStreetMap
Se incorporó Leaflet para mostrar un mapa geográfico interactivo de Andahuaylas utilizando los mapas de OpenStreetMap.

### Almacenamiento de favoritos
Se utiliza LocalStorage para conservar los espacios favoritos en el navegador sin requerir una base de datos externa.

### Organización de los espacios
La información de los lugares se centraliza en el archivo `espacios.js`, donde se registran nombres, descripciones, imágenes, características y coordenadas geográficas.

## 9. Ubicación geográfica

El proyecto está enfocado en espacios públicos de:

- Andahuaylas.
- San Jerónimo.
- Talavera.
- Pacucha.
- Pampachiri.

Las ubicaciones se representan mediante coordenadas geográficas de latitud y longitud.

## 10. Autoría

Proyecto: **Sombra Cerca**

Tema: Identificación y exploración de espacios públicos con sombra y vegetación.

Ubicación: Andahuaylas, Apurímac, Perú.
