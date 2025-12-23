import { ArrowDownTrayIcon, DocumentIcon } from "@heroicons/react/24/outline";

export default function Downloads() {
  const catalogs = [
    {
      id: 1,
      title: "Textos de Venta",
      description:
        "Guía práctica para crear textos persuasivos que aumenten tus ventas resaltando beneficios.",
      color: "border-pink-main",
      textColor: "text-pink-main",
      link: "https://drive.google.com/file/d/1PtvWkCsWtvcXT63yWrnA2Q7lUtZ2daIv/view?usp=sharing",
    },
    {
      id: 2,
      title: "Creación de Logos",
      description:
        "Las fases esenciales para construir una identidad visual sólida, memorable y profesional.",
      color: "border-blue-main",
      textColor: "text-blue-main",
      link: "https://drive.google.com/file/d/1Umu38uTUJQ7jJyle8BtvgcQ85QFCilBO/view?usp=sharing",
    },
    {
      id: 3,
      title: "Valor Agregado",
      description:
        "7 claves para diferenciarte de la competencia y aumentar el valor percibido de tu marca.",
      color: "border-yellow-main",
      textColor: "text-yellow-main",
      link: "https://drive.google.com/file/d/1tz_FH28bEbS1dbhyzBuCwxyFCg6RhVCT/view?usp=sharing",
    },
  ];

  return (
    <section
      id="descargas"
      className="relative py-20 px-6 lg:px-28 bg-white overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-0.5 bg-linear-to-r from-pink-main via-blue-main to-yellow-main opacity-60"></div>

      <div className="absolute top-20 left-10 w-64 h-64 bg-pink-main/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-main/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Encabezado de sección */}
        <div className="text-center mb-12">
          <h3 className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-2">
            {" "}
            Recursos útiles
          </h3>
          <h2 className="text-3xl font-extrabold text-gray-900">
            Mejorá tu{" "}
            <span className="bg-clip-text text-transparent bg-linear-to-r from-pink-main to-blue-main">
              Negocio
            </span>
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-pink-main via-blue-main to-yellow-main mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Grid de Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {" "}
          {catalogs.map((item) => (
            <div
              key={item.id}
              className={`group relative p-8 bg-gray-50 rounded-2xl border-b-4 ${item.color} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className={`p-2 rounded-lg bg-gray-50 ${item.textColor}`}>
                  <DocumentIcon className="w-10 h-10" />
                </div>

                <h3 className="text-xl font-bold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>

                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-4 flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-white transition-all bg-gray-900 hover:bg-black group-hover:scale-105 shadow-md`}
                >
                  <ArrowDownTrayIcon className="w-5 h-5" />
                  Descargar
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
