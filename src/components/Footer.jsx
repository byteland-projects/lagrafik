import React from "react";

function Footer() {
  return (
    <section
      id="footer"
      className="w-full flex flex-col items-center bg-pink-main text-center p-0.5"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-15 py-12 px-8 lg:px-45 bg-bg-1 text-text-mid w-full place-items-start md:place-items-center">
        <div className="flex flex-col items-start">
          <h3 className="text-3xl font-bold font-title mb-4 bg-clip-text text-transparent bg-linear-to-r from-pink-main via-blue-main to-yellow-main animate-gradient bg-size-[200%_200%]">
            La Grafi-K
          </h3>
          <p className="text-left text-text-light text-md font-body">
            Soluciones gráficas integrales para tu negocio. Calidad, precio y
            puntualidad garantizados.
          </p>
        </div>

        <div className="flex flex-col items-start">
          <h4 className="text-2xl font-semibold font-title mb-4 text-white">
            Enlaces Rápidos
          </h4>
          <ul className="space-y-2 text-left text-text-mid font-body">
            <li>
              <a
                href="#inicio"
                className="hover:text-pink-main transition-colors duration-300"
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                href="#nosotros"
                className="hover:text-pink-main transition-colors duration-300"
              >
                Sobre Nosotros
              </a>
            </li>
            <li>
              <a
                href="#productos"
                className="hover:text-pink-main transition-colors duration-300"
              >
                Productos
              </a>
            </li>
            <li>
              <a
                href="#contacto"
                className="hover:text-pink-main transition-colors duration-300"
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-start">
          <h4 className="text-2xl font-semibold font-title mb-4 text-white">
            Letra chica
          </h4>
          <ul className="space-y-2 text-left text-text-mid font-body">
            <li>
              <a
                href="#inicio"
                className="hover:text-pink-main transition-colors duration-300"
              >
                Política de Privacidad
              </a>
            </li>
            <li>
              <a
                href="#inicio"
                className="hover:text-pink-main transition-colors duration-300"
              >
                Términos de Servicio
              </a>
            </li>
            <li>
              <a
                href="#inicio"
                className="hover:text-pink-main transition-colors duration-300"
              >
                Soporte
              </a>
            </li>
            <li>
              <a
                href="#inicio"
                className="hover:text-pink-main transition-colors duration-300"
              >
                FAQ
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full bg-bg-1">
        <div className="w-full h-px bg-bg-2"></div>
      </div>

      <div className="w-full bg-bg-1 py-4 text-text-light">
        <p className="text-sm">
          © 2025 Byteland. Todos los derechos reservados.
        </p>
      </div>
    </section>
  );
}

export default Footer;
