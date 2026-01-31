import grafica from "../assets/grafica.jpeg";
import grafica2 from "../assets/grafica2.jpeg";

export default function About() {
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
          <p className="text-sm md:text-base font-bold tracking-widest text-text-mid uppercase mb-2">
            Nuestra historia
          </p>
          <div className="w-20 h-1 bg-linear-to-r from-pink-main to-blue-main rounded-full mb-6"></div>
        </div>

        <h2 className="text-4xl lg:text-5xl font-title font-extrabold mb-6 leading-tight">
          <span className="bg-clip-text text-transparent bg-linear-to-r from-pink-main via-blue-main to-yellow-main animate-gradient bg-size-[200%_200%]">
            30 años
          </span>{" "}
          en la <br /> Industria Gráfica
        </h2>

        <p className="text-md lg:text-lg mb-6 max-w-xl text-text-light">
          Somos una gráfica especializada, con 30 años de trayectoria, que supo
          unir lo mejor de dos mundos: productos publicitarios físicos y
          digitales, una dualidad que hoy marca la diferencia. Ayudamos a
          empresas y emprendedores a comunicar mejor, combinando diseño,
          impresión y soluciones digitales estratégicas.
        </p>

        <p className="text-md lg:text-lg max-w-xl text-tex-mid">
          También ofrecemos papelería comercial. Sabemos que implica un gasto
          fijo, pero cuando se hace correctamente, reduce costos y mejora la
          eficiencia de tu emprendimiento. Nosotros sabemos exactamente cómo
          lograrlo.
        </p>

        <p className="text-md lg:text-lg max-w-xl text-tex-mid">
          Nuestro valor agregado está en el asesoramiento especializado, la
          atención personalizada y el buen trato. No vendemos productos al azar:
          proponemos soluciones pensadas para cada necesidad.
        </p>

        <p className="text-md lg:text-lg max-w-xl text-tex-mid">
          Acompañamos tu crecimiento con comunicación constante. Nuestra meta es
          tu éxito.
        </p>
      </div>

      {/* SECCIÓN DE IMÁGENES SUPERPUESTAS */}
      <figure className="relative z-10 lg:pl-10 min-h-[400px] md:min-h-[500px] flex items-center animate-fade-in-up my-8 lg:my-0">
        
        {/* Imagen de Fondo (Arriba a la derecha - Ej. la reunión) */}
        {/* Nota: Usa 'grafica2' aquí si quieres que sea diferente a la del frente */}
        <div className="absolute top-0 right-0 w-3/4 md:w-2/3 p-2 bg-linear-to-tl from-blue-main/30 to-pink-main/30 rounded-2xl shadow-lg transform transition-all duration-500 hover:scale-[1.01] hover:z-30">
            <img
              src={grafica} // <-- OJO: Aquí iría 'grafica2' idealmente
              alt="Equipo de trabajo"
              className="rounded-xl w-full h-auto object-cover aspect-video grayscale-30 hover:grayscale-0 transition-all duration-500"
            />
        </div>

        {/* Imagen Frontal (Abajo a la izquierda - Ej. el operario) */}
        <div className="absolute bottom-0 left-0 z-20 w-3/4 md:w-2/3 p-3 bg-linear-to-br from-pink-main/60 to-blue-main/60 rounded-2xl shadow-2xl shadow-pink-main/20 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-pink-main/40">
          <img
            src={grafica2}
            alt="Operario de maquinaria"
            className="rounded-xl shadow-xl w-full h-auto object-cover aspect-video"
          />
        </div>
      </figure>
    </section>
  );
}
