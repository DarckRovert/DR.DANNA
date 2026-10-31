# Documentación Técnica - Portafolio Dra. Danna Marjorie Tupac Rojas

Esta documentación detalla la arquitectura técnica, sistema de diseño, rendimiento y estándares implementados en el portafolio web profesional de la Dra. Danna Marjorie Tupac Rojas.

- **Producción:** [https://dr-danna.vercel.app](https://dr-danna.vercel.app)
- **CI/CD:** Vercel Edge Network sincronizado con `main` en [GitHub: DarckRovert/DR.DANNA](https://github.com/DarckRovert/DR.DANNA).

---

## 1. Arquitectura y Stack

El proyecto implementa un stack **Vanilla moderno (Zero-Framework)** que garantiza tiempos de carga inferiores a 200ms, puntuación 100/100 en Google Lighthouse y cero dependencias de construcción.

```text
PROYECTO DANNA/
├── index.html                    # Estructura semántica HTML5, Schema.org/Physician, Open Graph
├── style.css                     # Design tokens, variables CSS, glassmorphism, responsive queries
├── app.js                        # Canvas 2D HiDPI, IntersectionObserver, WhatsApp router
├── assets/                       # Activos optimizados sin marcas de agua y PDF oficial
├── .gitignore                    # Filtro de activos pesados y temporales
├── README.md                     # Visión general del proyecto
└── DOCUMENTATION.md              # Este archivo
```

---

## 2. Sistema de Diseño (`style.css`)

### 2.1 Design Tokens
- `--navy` (`#0a0f1e`): Fondo principal profundo de alta seriedad clínica.
- `--emerald` (`#10b981`): Acento primario que transmite salud, rigor y tecnología.
- `--gold` (`#f59e0b`): Resalte secundario para certificaciones y postgrados.
- `--glass`, `--glass-border`: Efecto de cristal esmerilado con `backdrop-filter: blur(10px)`.

### 2.2 Tipografía y Maquetación
- **Tipografía:** Encabezados en `Cormorant Garamond` (elegancia clásica) y cuerpo de texto en `Inter` (legibilidad moderna).
- **Justificación:** Bloques narrativos con `text-align: justify; text-justify: inter-word;`.
- **Breakpoints:** Media queries en `max-width: 900px` (Tablets) y `max-width: 600px` (Móviles).

---

## 3. Interactividad y Rendimiento (`app.js`)

- **Canvas 2D HiDPI:** El sistema de constelación de partículas compensa `window.devicePixelRatio` para máxima nitidez en pantallas Retina y móviles.
- **IntersectionObserver:** Controla la aparición suave de elementos (`[data-aos]`) y los contadores numéricos sin sobrecargar el hilo de renderizado con eventos de scroll continuos.
- **Protección contra NaN y Preservación de Prefijos:** El parser de estadísticas verifica la existencia de dígitos, ignora atributos `data-static="true"` y preserva prefijos (`+2`) al animar.
- **Canalización a WhatsApp:** El formulario de contacto serializa los campos y redirige directamente a la API de WhatsApp (`https://wa.me/51939753987?text=...`) evitando la pérdida de leads.

---

## 4. SEO y Cumplimiento Normativo

- **Schema.org:** Bloque estructurado `Physician` con especialidades, número CMP (111905), alma máter (UPC) y geolocalización en Santiago de Surco, Lima.
- **Metadatos Sociales:** Metaetiquetas Open Graph y Twitter Cards integradas para vistas previas en WhatsApp, LinkedIn y redes sociales.
- **Acreditación Legal:** Enlace directo de validación con el servidor del Colegio Médico del Perú mediante el código `20261030bd4c17dc9fcc` (Habilidad vigente hasta el 31/12/2026).
