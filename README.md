# Proyecto Dra. Danna — Carta de Presentación Profesional

## Estructura de archivos

```
PROYECTO DANNA/
├── index.html      ← Página principal (toda la estructura)
├── style.css       ← Diseño completo (paleta, animaciones, responsive)
├── app.js          ← Interacciones (partículas, formulario, scroll, contadores)
├── foto-danna.jpg  ← ✏️ PENDIENTE: agregar foto profesional de Danna
└── README.md       ← Este archivo
```

## Cómo personalizar

Busca los comentarios `✏️ REEMPLAZAR` en `index.html` para sustituir:

| Sección | Qué cambiar |
|---|---|
| Hero | Nombre, especialidad, frase, estadísticas |
| Foto | Subir `foto-danna.jpg` y descomentar el tag `<img>` |
| Sobre mí | Biografía, frase célebre, cédula profesional, ciudad |
| Especialidades | Los 4 servicios/cards con sus íconos y descripciones |
| Formación | Universidades, años, cargos, certificaciones |
| Contacto | Teléfono, email, dirección, horario, redes sociales |

## Agregar la foto

1. Copia la foto de Danna como `foto-danna.jpg` en esta carpeta
2. En `index.html`, dentro de `.photo-frame`, reemplaza:

```html
<!-- antes (placeholder): -->
<div class="photo-placeholder">...</div>

<!-- después (foto real): -->
<img src="foto-danna.jpg" alt="Dra. Danna">
```

## Integrar el formulario de contacto

El formulario actualmente simula el envío. Para hacerlo funcional, reemplaza la función `handleSubmit` en `app.js` con:
- **EmailJS** (gratis, sin backend): https://www.emailjs.com/
- **Formspree** (gratis): https://formspree.io/
- O cualquier endpoint de API propio

## Despliegue

Para publicar la web gratuitamente:
1. Sube los 3 archivos a un repositorio de GitHub
2. Activa GitHub Pages en Settings → Pages → Deploy from branch `main`
3. La web quedará en `tuusuario.github.io/nombre-repo`
4. O conecta un dominio personalizado

## Paleta de colores

| Variable | Color | Uso |
|---|---|---|
| `--navy` | `#0a0f1e` | Fondo principal |
| `--emerald` | `#10b981` | Acento primario, links, bordes |
| `--gold` | `#f59e0b` | Detalles destacados, especialidad |
| `--white` | `#f8fafc` | Texto principal |
| `--muted` | `#94a3b8` | Texto secundario |
