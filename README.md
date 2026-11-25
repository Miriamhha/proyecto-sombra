# 🌳 Proyecto Sombra Cerca

## 1. Descripción del proyecto

**Sombra Cerca** es una aplicación web desarrollada para identificar, explorar y comparar espacios verdes, parques y plazas de Andahuaylas y sus alrededores.

El proyecto permite a los usuarios conocer las características de diferentes espacios públicos, consultar su ubicación geográfica y seleccionar lugares que se adapten a sus necesidades de descanso y recreación.

## 2. Objetivo del proyecto

Desarrollar una aplicación web que facilite la identificación y consulta de espacios públicos con vegetación y zonas de sombra, proporcionando información organizada y herramientas interactivas para los usuarios.

## 3. Funcionalidades principales

- **Página de inicio:** presenta el proyecto y sus principales características.
- **Catálogo de espacios:** permite explorar parques, plazas y otros espacios registrados.
- **Filtros de búsqueda:** facilita encontrar espacios según sus características.
- **Detalle de espacios:** muestra información individual de cada lugar.
- **Mapa geográfico:** permite visualizar los espacios mediante marcadores utilizando Leaflet y OpenStreetMap.
- **Favoritos:** permite guardar espacios de interés en el navegador.
- **Comparador:** permite seleccionar hasta tres espacios y comparar sus características.

## 4. Tecnologías utilizadas

- Astro 7.
- JavaScript.
- Tailwind CSS 4.
- Leaflet.
- OpenStreetMap.
- HTML5 y CSS.

## 5. Requisitos previos

Para ejecutar el proyecto se necesita:

- Node.js 22.23.4 o superior.
- pnpm.
- Git.
- Un editor de código, como Visual Studio Code.

## 6. Instalación del proyecto

Clonar el repositorio:

```bash
git clone URL_DEL_REPOSITORIO
```

Ingresar a la carpeta:

```bash
cd proyecto-sombra
```

Instalar las dependencias:

```bash
pnpm install
```

## 7. Ejecución del proyecto

Iniciar el servidor de desarrollo:

```bash
pnpm dev
```

Abrir en el navegador:

```text
http://localhost:4321
```

## 8. Comandos disponibles

| Comando | Descripción |
|---|---|
| `pnpm dev` | Inicia el servidor de desarrollo. |
| `pnpm build` | Genera la versión de producción. |
| `pnpm preview` | Permite previsualizar la versión de producción. |

## 9. Estructura general del proyecto

```text
proyecto-sombra/
├── public/
│   └── img/
│       └── lugares/
├── src/
│   ├── components/
│   ├── data/
│   │   └── espacios.js
│   ├── layouts/
│   ├── pages/
│   │   ├── espacios/
│   │   ├── index.astro
│   │   ├── favoritos.astro
│   │   ├── mapa.astro
│   │   └── comparador.astro
│   └── scripts/
├── package.json
├── pnpm-lock.yaml
└── README.md
```

## 10. Decisiones importantes del desarrollo

- Se utilizó Astro para organizar las páginas y componentes del proyecto.
- Se empleó JavaScript para implementar las funcionalidades interactivas.
- Se utilizó Tailwind CSS para diseñar una interfaz adaptable a diferentes dispositivos.
- Se integró Leaflet con OpenStreetMap para representar geográficamente los espacios.
- Se utilizó localStorage para conservar los espacios favoritos y las selecciones del comparador en el navegador.
- La información de los espacios se centralizó en el archivo `espacios.js`, facilitando su mantenimiento y actualización.

## 11. Datos del proyecto

La aplicación contiene 12 espacios registrados con información sobre ubicación, descripción, fotografías, sombra y características de accesibilidad y servicios.

La información puede actualizarse desde el archivo:

```text
src/data/espacios.js
```

## 12. Autoría

Proyecto académico desarrollado como una aplicación web para la exploración de espacios verdes y públicos de la provincia de Andahuaylas, departamento de Apurimac.

**Nombre del proyecto:** Sombra Cerca.