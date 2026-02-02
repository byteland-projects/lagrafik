# 🖨️ La GrafiK - Soluciones Gráficas & Digitales

![Project Status](https://img.shields.io/badge/Status-Finalizado-success)

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

> **"Nuestra meta es tu éxito"** - Sitio web institucional moderno para una gráfica con 30 años de trayectoria, combinando la tradición del papel con la innovación digital.

## 🔗 Demo
[Ver sitio en vivo](https://tu-url-aqui.com) ## 📖 Sobre el Proyecto

Este proyecto es el rediseño digital de **La GrafiK**, una empresa líder en la industria gráfica. El objetivo principal fue trasladar la experiencia, confianza y solidez de una compañía con 3 décadas de historia a una interfaz web moderna, ágil y visualmente impactante.

El sitio no solo funciona como un catálogo de servicios (Imprenta, Diseño, Papelería Comercial), sino que comunica los **valores fundamentales** de la marca a través de una experiencia de usuario (UX) cuidada.

### ✨ Características Principales

* **⚡ Performance Ultra-rápida:** Construido con **Vite** para tiempos de carga casi instantáneos.
* **🌗 Estética Híbrida (Light & Dark):** Uso estratégico del contraste. Secciones inmersivas con fondo oscuro (Nosotros, Términos, Footer) para impacto visual, y secciones claras (Hero, Productos) para facilitar la lectura y transmitir transparencia.
* **📱 Diseño Responsivo:** Adaptación fluida desde móviles hasta pantallas de escritorio (Mobile First approach).
* **Interactividad:**
    * Sección de "Valores" con acordeones animados.
    * Modals informativos para detalle de productos.
    * Efectos de *Hover* y transiciones suaves (`transition-all`, `transform`).
* **Layouts Avanzados:** Uso de CSS Grid y Flexbox para composiciones complejas.

## 🛠️ Tecnologías Utilizadas

* **Core:** React.js (Hooks: `useState`, `useEffect`).
* **Build Tool:** Vite.
* **Estilos:** Tailwind CSS v3.
* **Iconografía:** Heroicons.
* **Lenguaje:** JavaScript (ES6+).
* **Entorno:** Node.js.

## 🎨 Decisiones de Diseño (Tailwind CSS)

Se implementó una configuración personalizada para mantener la consistencia de marca:

* **Paleta de Colores Custom:** Definición de colores semánticos y colores de marca (`pink-main`, `blue-main`, `yellow-main`, `green-main`) usados en gradientes y acentos.
* **Tipografía:** Uso de fuentes diferenciadas para Títulos (Display) y Cuerpo de texto (Legibilidad).
* **Animaciones:** Extensiones de tema para animaciones de entrada (`fade-in-up`) y feedback visual en botones.

## 🧩 Estructura de Componentes

El proyecto sigue una arquitectura modular para facilitar la escalabilidad:

```text
src/
├── assets/          # Imágenes optimizadas (WebP/JPEG)
├── components/      # Componentes reutilizables (Botones, Cards, Modals)
├── sections/        # Secciones de la Landing (Hero, Values, About, Contact)
├── App.jsx          # Componente raíz
└── main.jsx         # Punto de entrada
```

## 🚀 Instalación y Despliegue

Si deseas correr este proyecto localmente:

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/byteland-projects/lagrafik.git](https://github.com/byteland-projects/lagrafik.git)
    ```
2.  **Instalar dependencias:**
    ```bash
    cd lagrafik
    npm install
    ```
3.  **Correr servidor de desarrollo:**
    ```bash
    npm run dev
    ```

---
Hecho con ❤️ por Byteland