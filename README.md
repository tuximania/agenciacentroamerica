# ✈️ ViajaCentro — Agencia de Viajes Centroamérica

Landing page de una sola página para una agencia de viajes salvadoreña especializada en turismo centroamericano. Desarrollada con HTML, CSS y JavaScript vanilla.

![Hero screenshot](https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80)

## 🌐 Demo en vivo

[Ver proyecto en GitHub Pages](https://tuximania.github.io/agenciacentroamerica/)

---

## 📋 Secciones

| # | Sección | Descripción |
|---|---------|-------------|
| 1 | **Hero** | Imagen de fondo, título, subtítulo y botones CTA |
| 2 | **Navbar** | Fija con efecto scroll, anclas y menú hamburguesa |
| 3 | **Nosotros** | Descripción de la agencia y beneficios |
| 4 | **Destinos** | 6 tarjetas con CSS Grid, precios y overlay hover |
| 5 | **Cotización** | Formulario con validación JavaScript en tiempo real |
| 6 | **Footer** | Redes sociales, contacto y año dinámico |

---

## 💰 Destinos y Precios (desde El Salvador)

| Destino | Precio desde | Noches |
|---------|-------------|--------|
| Guatemala | $299 | 3 noches |
| Nicaragua | $279 | 3 noches |
| Honduras | $349 | 4 noches |
| Panamá | $479 | 4 noches |
| Costa Rica | $549 | 5 noches |
| Belice | $599 | 5 noches |

*Precios por persona en habitación doble. Incluye hospedaje, traslados y tour guiado.*

---

## 🛠️ Tecnologías

- **HTML5** — estructura semántica
- **CSS3** — Flexbox, Grid, animaciones, diseño responsive
- **JavaScript** — validación de formulario, interacción con el DOM
- **Font Awesome 6** — íconos

---

## 🚀 Correr localmente

```bash
git clone https://github.com/tuximania/agenciacentroamerica.git
cd agenciacentroamerica
```

Abre `index.html` en tu navegador. No requiere servidor ni dependencias.

---

## ✅ Características técnicas

- Diseño **responsive** (mobile-first, breakpoints 768px y 1024px)
- Navbar con **scroll effect** y **menú hamburguesa** animado
- Validación de formulario: nombre, email con regex, teléfono salvadoreño, destino, personas y fecha futura
- Mensajes de error específicos por campo, se limpian al corregir
- Mensaje de éxito personalizado con nombre y correo del usuario
- Contador animado con `IntersectionObserver` al hacer scroll
- Sección de testimonios de clientes
- Botón **WhatsApp flotante** con mensaje pre-escrito
- Al hacer clic en una tarjeta de destino, **pre-selecciona** el destino en el formulario
- **Año dinámico** en el footer con JavaScript
- Botón "volver arriba" que aparece al hacer scroll

---

## 👤 Autor

**Roberto Carlos** — [github.com/tuximania](https://github.com/tuximania)

---

*Proyecto desarrollado con fines educativos · El Salvador 🇸🇻*
