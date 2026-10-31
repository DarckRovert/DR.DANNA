# Portafolio Profesional Oficial — Dra. Danna Marjorie Tupac Rojas

Sitio web y carta de presentación profesional de la **Dra. Danna Marjorie Tupac Rojas**, Médico Cirujano egresada de la Universidad Peruana de Ciencias Aplicadas (UPC, CMP 111905), con diplomado de postgrado en Auditoría Médica Basada en la Evidencia (EPG UPC) y acreditación internacional en soporte vital avanzado (ATLS, ACLS, BLS).

- 🌐 **Sitio Web Oficial:** [https://dr-danna.vercel.app](https://dr-danna.vercel.app)
- 📂 **Repositorio Git:** [https://github.com/DarckRovert/DR.DANNA](https://github.com/DarckRovert/DR.DANNA)
- 🏥 **Colegiatura CMP:** 111905 · [Habilidad Verificable 2026](https://aplicaciones.cmp.org.pe/autenticidad-de-constancia/datos_constancia.php?codigo=20261030bd4c17dc9fcc)

---

## Estructura del Proyecto

```text
PROYECTO DANNA/
├── index.html                    ← Estructura semántica HTML5, Schema.org/Physician y Open Graph
├── style.css                     ← Sistema de diseño, tokens CSS, glassmorphism y media queries
├── app.js                        ← Canvas 2D HiDPI, IntersectionObserver, contadores y router WhatsApp
├── assets/
│   ├── dra-danna-hero.jpg        ← Retrato Hero en traje borgoña (alta autoridad y postura ejecutiva)
│   ├── dra-danna-about.jpg       ← Retrato Sobre Mí (primer plano en ambo quirúrgico azul marino)
│   ├── dra-danna-clinical.jpg    ← Retrato Formación (práctica hospitalaria con casaca en el brazo)
│   ├── dra-danna-consult.jpg     ← Retrato Contacto (atención y orientación médica en consulta)
│   └── CV_Dra_Danna_Tupac.pdf    ← Expediente curricular oficial de 12 folios para descarga
├── .gitignore                    ← Filtro de exclusión para temporales y escaneos pesados
├── README.md                     ← Este archivo
└── DOCUMENTATION.md              ← Documentación técnica de arquitectura y estándares
```

---

## Secciones del Sitio

1. **Hero Principal (`#inicio`):**
   - Retrato de alta autoridad con brazos y torso visibles de forma equilibrada.
   - Badge interactivo con enlace directo de verificación al Colegio Médico del Perú.
   - Botón directo de contacto a WhatsApp (`+51 939 753 987`) y descarga inmediata del CV oficial en PDF.
   - Estadísticas clínicas animadas (+2 años de experiencia clínica, CMP 111905, UPC, Postgrado EPG).

2. **Sobre Mí (`#sobre-mi`):**
   - Reseña biográfica con tipografía uniforme y texto justificado.
   - Enfoque prioritario en **Cirugía Oncológica**, disciplina clínica y voluntariado en el albergue de apoyo al INEN (*Casita Fuente de Vida*).
   - Retrato secundario en ambo médico azul marino.

3. **Competencias y Experiencia (`#experiencia`):**
   - **Cirugía y Asistencia Quirúrgica:** Procedimientos, curaciones, manejo pre/postoperatorio.
   - **Soporte Vital y Emergencias:** Tríada de Resucitación oficial (**ATLS + ACLS + BLS**).
   - **Auditoría Médica y Salud Ocupacional:** Formación de postgrado EPG UPC (582 hrs, 36 créditos).
   - **Medicina General y Comunitaria:** Hospitalización, pediatría, despistaje y prevención.

4. **Formación y Trayectoria (`#formacion`):**
   - Línea de tiempo cronológica: SERUMS en CEMUNE (Ejército Peruano), Postgrado EPG UPC, Internado en HEVES III-1 y 8 externados hospitalarios (Casimiro Ulloa, Grau, Castilla, Alcántara, María Auxiliadora, Manuel Barreto).
   - Columna visual con retrato en ambo quirúrgico (`assets/dra-danna-clinical.jpg`).
   - Chips de certificaciones internacionales y software de investigación médica (STATA, EPIDAT, Mendeley, Zotero).

5. **Canales de Contacto (`#contacto`):**
   - Retrato de consulta médica (`assets/dra-danna-consult.jpg`).
   - Canales oficiales: Teléfono/WhatsApp, correo electrónico, dirección en Santiago de Surco y constancia CMP.
   - Formulario de contacto con redirección instantánea a WhatsApp estructurado.

---

## Guía de Mantenimiento y Personalización

### Actualizar Número de Contacto o WhatsApp
Para cambiar el número de teléfono, actualiza en:
1. `index.html`: Atributos `href="https://wa.me/51939753987..."` y `tel:+51939753987`.
2. `app.js`: Constante `urlWA` en la función `handleSubmit`.
3. `index.html` (JSON-LD): Campo `"telephone": "+51939753987"`.

### Reemplazar Fotografías
Guarda la nueva fotografía dentro de la carpeta `assets/` respetando el nombre del archivo y una relación de aspecto vertical tipo retrato (aprox 3:4 o 9:16). Para asegurar que no queden marcas de agua visibles, recorta 70 píxeles de la base antes de guardarla.

---

## Despliegue en Producción (CI/CD)

El sitio utiliza **despliegue continuo automático**:
- Al ejecutar `git push origin main` hacia el repositorio GitHub `DarckRovert/DR.DANNA`, la plataforma **Vercel** compila y publica los cambios de manera instantánea en su red CDN global.
