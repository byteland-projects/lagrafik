import grafica from "../assets/grafica.jpeg";

function About() {
  return (
    <section
      id="nosotros"
      className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-28 px-8 lg:px-40 bg-bg-1 text-text-light relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-main rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-main rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="flex flex-col justify-center text-start relative z-10 animate-fade-in-up">
        <div>
          <h3 className="text-sm md:text-base font-bold tracking-widest text-text-mid uppercase mb-2">
            Nuestra historia
          </h3>
          <div className="w-20 h-1 bg-linear-to-r from-pink-main to-blue-main rounded-full mb-6"></div>
        </div>

        <h2 className="text-4xl lg:text-5xl font-title font-extrabold mb-6 leading-tight">
          <span className="bg-clip-text text-transparent bg-linear-to-r from-pink-main via-blue-main to-yellow-main animate-gradient bg-size-[200%_200%]">
            30 años
          </span>{" "}
          en la <br /> Industria Gráfica
        </h2>

        <p className="text-md lg:text-lg mb-6 max-w-xl text-text-light">
          En La Grafik somos un equipo apasionado por el diseño y la
          comunicación visual. Nacimos con la idea de que la publicidad no tiene
          por qué ser cara ni complicada, sino una herramienta accesible para
          cualquier proyecto.
        </p>

        <p className="text-md lg:text-lg max-w-xl text-tex-mid">
          Trabajamos con dedicación, atención real a los detalles y un trato
          humano. Acompañamos a cada cliente para asegurar que reciba
          exactamente lo que necesita para que su marca luzca profesional y
          atractiva.
        </p>
      </div>

      <div className="flex items-center justify-center relative z-10 lg:pl-10 animate-fade-in-up">
        <div className="relative p-3 bg-linear-to-br from-pink-main/50 to-blue-main/50 rounded-2xl shadow-2xl transition-all duration-500 hover:shadow-pink-main/30 hover:shadow-3xl transform hover:scale-[1.02]">
          <img
            src={grafica}
            alt="Sobre Nosotros"
            className="rounded-xl shadow-xl max-w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
