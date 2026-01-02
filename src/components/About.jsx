import grafica from "../assets/grafica.jpeg";

export default function About() {
  return (
    <section
      id="nosotros"
      aria-labelledby="about-title"
      className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-28 px-8 lg:px-40 bg-bg-1 text-text-light relative overflow-hidden"
    >
      {/* Blobs decorativos - con aria-hidden para que Google los ignore */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-main rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-main rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="flex flex-col justify-center text-start relative z-10 animate-fade-in-up">
        <div>
          <p className="text-sm md:text-base font-bold tracking-widest text-text-mid uppercase mb-2">
            Trayectoria en servicios gráficos
          </p>
          <div className="w-20 h-1 bg-linear-to-r from-pink-main to-blue-main rounded-full mb-6"></div>
        </div>

        {/* H2 principal con ID para el aria-labelledby */}
        <h2 id="about-title" className="text-4xl lg:text-5xl font-title font-extrabold mb-6 leading-tight text-white">
          <span className="bg-clip-text text-transparent bg-linear-to-r from-pink-main via-blue-main to-yellow-main animate-gradient bg-size-[200%_200%]">
            30 años
          </span>{" "}
          liderando la <br /> Industria Gráfica
        </h2>

        <div className="space-y-4 text-md lg:text-lg text-text-light max-w-xl">
          <p>
            En <strong>La Grafi-K</strong> somos un equipo apasionado por el diseño y la
            comunicación visual. Nuestra misión es que la publicidad sea una herramienta 
            accesible y de alta calidad para cada emprendimiento o empresa.
          </p>

          <p>
            Con tres décadas de experiencia, ofrecemos <strong>atención real a los detalles</strong> y un trato
            humano. Acompañamos a cada cliente para asegurar que su marca luzca 
            profesional, atractiva y destaque en el mercado.
          </p>
        </div>
      </div>

      <figure className="flex items-center justify-center relative z-10 lg:pl-10 animate-fade-in-up">
        <div className="relative p-3 bg-linear-to-br from-pink-main/50 to-blue-main/50 rounded-2xl shadow-2xl transition-all duration-500 hover:shadow-pink-main/30 hover:shadow-3xl transform hover:scale-[1.02]">
          <img
            src={grafica}
            alt="Taller de impresión La Grafi-K - Equipamiento profesional para soluciones gráficas"
            className="rounded-xl shadow-xl max-w-full h-auto object-cover"
            /* Lazy loading para mejorar la velocidad */
            loading="lazy"
          />
        </div>
      </figure>
    </section>
  );
}