
import grafica from "../assets/grafica.jpg";

function About() {
  return (
    <section
      id="nosotros"
      className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-28 px-8 lg:px-40 bg-bg-2 text-text-light"
    >
      <div className="flex flex-col justify-center text-start">
        <h2 className="text-4xl lg:text-5xl text-text-extra-light font-title font-bold mb-6">
          15 años en la Industria Gráfica
        </h2>

        <p className="text-lg mb-4 max-w-xl">
          En La Grafik somos un equipo apasionado por el diseño y la comunicación visual. Nacimos con la idea de que la publicidad no tiene por qué ser cara ni complicada, sino una herramienta accesible para cualquier proyecto.
        </p>

        <p className="text-lg max-w-xl">
          Trabajamos con dedicación, atención real a los detalles y un trato humano. Acompañamos a cada cliente para asegurar que reciba exactamente lo que necesita para que su marca luzca profesional y atractiva.
        </p>
      </div>

      <div className="flex items-center justify-center">
        <img
          src={grafica}
          alt="Sobre Nosotros"
          className="rounded-xl shadow-xl max-w-full h-auto object-cover"
        />
      </div>
    </section>
  );
}

export default About;
