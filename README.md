# Proyecto Dra. Danna — Portafolio Profesional Oficial

Portafolio web oficial de la **Dra. Danna Marjorie Tupac Rojas**, Médico Cirujano (CMP 111905, UPC) con postgrado en Auditoría Médica (EPG UPC) y soporte vital avanzado (ATLS, ACLS, BLS).

- **Dominio en Producción:** [https://dr-danna.vercel.app](https://dr-danna.vercel.app)
- **Repositorio:** [https://github.com/DarckRovert/DR.DANNA](https://github.com/DarckRovert/DR.DANNA)

---

## Estructura del Proyecto

```
PROYECTO DANNA/
├── index.html                    ← Estructura semántica HTML5, Schema.org y metadatos
├── style.css                     ← Sistema de diseño, CSS moderno, glassmorphism, responsive
├── app.js                        ← Canvas HiDPI, IntersectionObserver, contadores y WhatsApp router
├── assets/
│   ├── dra-danna-hero.jpg        ← Foto principal de estudio (traje borgoña, alta autoridad)
│   ├── dra-danna-about.jpg       ← Foto Sobre Mí (ambo quirúrgico azul marino, cercanía)
│   ├── dra-danna-clinical.jpg    ← Foto Formación (práctica hospitalaria con casaca en brazo)
│   ├── dra-danna-consult.jpg     ← Foto Contacto (atención y consulta médica)
│   └── CV_Dra_Danna_Tupac.pdf    ← Expediente curricular oficial de 12 folios para descarga
├── .gitignore                    ← Aislamiento de temporales y escaneos pesados
├── DOCUMENTATION.md              ← Documentación técnica y estándares
└── README.md                     ← Este archivo
```

---

## Funcionalidades Clave

1. **Enlace Oficial CMP en Vivo:** Validador directo con el Colegio Médico del Perú acreditando habilidad hasta el 31/12/2026.
2. **Formulario Inteligente a WhatsApp:** El formulario captura los datos del interesado y abre WhatsApp (`+51 939 753 987`) con el mensaje pre-estructurado.
3. **Descarga Directa de CV:** Botón en Hero y Footer que descarga el expediente de 12 folios en formato PDF.
4. **Diseño Responsivo Editorial:** Tipografía justificada, escalado HiDPI Retina para canvas y menú móvil interactivo.

---

## Despliegue Continuo (CI/CD)

El proyecto está vinculado a Vercel a través de GitHub. Cualquier `git push origin main` publica los cambios automáticamente en los servidores de borde globales en segundos.
