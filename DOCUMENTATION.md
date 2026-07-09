# Documentación Técnica - Proyecto Dra. Danna

Esta documentación detalla la arquitectura técnica, estilos, y funcionalidades interactivas del portafolio profesional de la Dra. Danna. Está orientada al mantenimiento y futuras actualizaciones por parte de desarrolladores o de Gravity AI.

## Arquitectura del Proyecto

El proyecto está diseñado bajo un enfoque "Vanilla" sin dependencias de frameworks externos (como React o Vue) para asegurar máxima velocidad de carga, SEO óptimo, y cero complicaciones de construcción (build steps). 

```text
D:\PROYECTO DANNA\
├── index.html       # Estructura semántica, accesibilidad y contenido
├── style.css        # Sistema de diseño, CSS moderno (variables, flex/grid, glassmorphism)
├── app.js           # Interactividad (IntersectionObserver, canvas, manipulación del DOM)
├── README.md        # Guía rápida para la doctora (modificación de contenidos)
└── DOCUMENTATION.md # Este archivo técnico
```

## 1. Sistema de Estilos (`style.css`)

El CSS hace uso intensivo de **Custom Properties (Variables)** definidas en la pseudo-clase `:root` para mantener consistencia y facilitar un futuro soporte a diferentes temas si fuera necesario.

### 1.1 Tokens de Diseño (Paleta de Colores)
- `--navy` (`#0a0f1e`): Fondo principal profundo, transmite seriedad.
- `--emerald` (`#10b981`): Color de acento primario (botones, enlaces, íconos). Transmite salud y confianza.
- `--gold` (`#f59e0b`): Color secundario de resalte, aporta calidad y estatus premium.
- `--glass`, `--glass-border`: Utilizados para el efecto "Glassmorphism" (cristal esmerilado) combinado con `backdrop-filter: blur()`.

### 1.2 Layout y Componentes
- **Tipografía:** Se utiliza `Cormorant Garamond` para encabezados (elegancia y clasicismo) e `Inter` para cuerpos de texto (legibilidad moderna).
- **Grid/Flexbox:** Layout 100% responsivo usando CSS Grid para las especialidades y Flexbox para la estructura general y centrado.
- **Breakpoints:** Se definen en `@media (max-width: 900px)` (Tablet) y `@media (max-width: 600px)` (Móvil).

## 2. Interactividad (`app.js`)

Se ha evitado jQuery en favor de JavaScript moderno (ES6+).

### 2.1 Intersection Observer (Rendimiento)
Las animaciones de aparición al hacer *scroll* (clase `.visible`) y la ejecución de los contadores animados se controlan mediante `IntersectionObserver`. Esto es altamente eficiente ya que evita sobrecargar el hilo principal con eventos `scroll`.

### 2.2 Sistema de Partículas (Canvas)
El hero (sección inicial) incluye un efecto de constelación de partículas. 
- Funciona dibujando círculos y calculando la distancia entre ellos mediante el teorema de Pitágoras (`Math.sqrt(dx*dx + dy*dy)`).
- Si la distancia es menor a un umbral (130px), se traza una línea cuya opacidad es inversamente proporcional a la distancia.
- **Rendimiento:** Escucha el evento de redimensionado de ventana con `{ passive: true }` y utiliza `requestAnimationFrame` para un renderizado a 60fps sin bloqueos.

### 2.3 Formulario de Contacto
Se captura el evento `submit` del formulario para evitar la recarga de página. 
- Actualmente implementa una simulación de estado (Loading -> Success).
- **Para producción:** Debe integrarse con la API de envío elegida (EmailJS/Formspree) reemplazando la función `setTimeout`.

## 3. Guía de Despliegue (Deploy)

Dada la naturaleza estática del proyecto, es compatible con cualquier CDN o servicio de *hosting* gratuito o de pago.

### Opciones recomendadas:
1. **GitHub Pages / Cloudflare Pages / Vercel / Netlify:**
   - Crear un nuevo proyecto vinculado al repositorio.
   - Directorio raíz de publicación: `/` (No requiere comando de build).
2. **Servidor tradicional (cPanel):**
   - Subir el contenido de la carpeta directamente a `public_html`.

## 4. Estándares y SEO

- Etiquetas semánticas de HTML5 (`<nav>`, `<section>`, `<footer>`, `<main>`, `<article>`) utilizadas correctamente.
- Etiquetas `aria-label` en botones interactivos (como el menú hamburguesa o redes sociales) para cumplimiento de accesibilidad (WCAG).
- Favicon y metadatos base listos. *Requiere añadir Open Graph tags cuando se publiquen fotos definitivas.*
