export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex items-center py-35 pt-35 md:py-50 md:pt-50 overflow-hidden bg-gradient-to-br from-yellow-50/90 via-white to-blue-50/90"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-15 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Columna Izquierda */}
        <div className="space-y-6 text-center md:text-left animate-fade-in-up">
          <div>
            <h2 className="text-sm md:text-base font-bold tracking-widest text-gray-500 uppercase mb-2">
              Imprenta Gráfica Profesional
            </h2>
            <div className="w-26 h-1 bg-gradient-to-r from-pink-main to-blue-main rounded-full mx-auto md:mx-0"></div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-gray-900 leading-tight">
            Tus ideas en <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-main via-blue-main to-yellow-main animate-gradient bg-[length:200%_200%]">
              Alta Resolución
            </span>
          </h1>

          <p className="text-md md:text-lg text-gray-600 max-w-lg mx-auto md:mx-0 leading-relaxed">
            Desde tarjetas de presentación hasta gigantografías.
            <span className="font-semibold"> Calidad, rapidez</span> y los
            colores más vivos para tu negocio.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            <a
              href="#contacto"
              className="px-4 py-2 md:px-6 md:py-3 bg-gray-900 text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:bg-gray-800 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              Pedir Presupuesto
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>

            <div className="rounded-full p-[2px] bg-gradient-to-r from-pink-main via-blue-main to-yellow-main hover:shadow-lg hover:shadow-pink-main/30 transition-shadow">
              <a
                href="#productos"
                className="block px-4 py-2 md:px-8 md:py-3 bg-white text-gray-900 font-bold rounded-full hover:text-pink-main transition all flex items-center justify-center gap-2"
              >
                Ver Productos
              </a>
            </div>
          </div>
        </div>

        {/* Columna Derecha: Logo */}
        <div className="relative flex justify-center items-center">
          <div className="relative">
            <img
              src="/logo.png"
              alt="Logo La Grafi-K"
              className="relative w-60 h-60 sm:w-76 sm:h-76 md:w-96 md:h-96 object-contain z-10 animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
