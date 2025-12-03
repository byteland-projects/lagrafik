export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-yellow-50"
    >
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Columna Izquierda */}
        <div className="space-y-6 text-center md:text-left animate-fade-in-up">
          <h2 className="text-sm md:text-base font-bold tracking-widest text-gray-500 uppercase">
            Imprenta Gráfica Profesional
          </h2>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight">
            Tus ideas en <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-main via-blue-main to-yellow-main animate-gradient bg-[length:200%_200%]">
              Alta Resolución
            </span>
          </h1>

          <p className="text-md text-gray-600 max-w-lg mx-auto md:mx-0">
            Desde tarjetas de presentación hasta gigantografías. Calidad,
            rapidez y los colores más vivos para tu negocio.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            <a
              href="#contacto"
              className="px-4 py-2 md:px-8 md:py-4 bg-gray-900 text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:bg-gray-800 transition-all transform hover:-translate-y-1"
            >
              Pedir Presupuesto
            </a>

            <div className="rounded-full p-[4px] bg-gradient-to-r from-pink-main via-blue-main to-yellow-main">
              <a
                href="#productos"
                className="block px-4 py-2 md:px-8 md:py-4 bg-white text-gray-900 font-bold rounded-full hover:text-pink-main transition"
              >
                Ver Productos
              </a>
            </div>
          </div>
        </div>

        {/* Columna Derecha: Logo */}
        <div className="relative flex justify-center items-center">
          <img
            src="/logo.png"
            alt="Logo La Grafi-K"
            className="w-60 h-50 sm:w-76 sm:h-76 md:w-96 md:h-96 object-contain z-10 animate-float"
          />
        </div>
      </div>
    </section>
  );
}
