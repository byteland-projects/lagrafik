import {
  CurrencyDollarIcon,
  CheckCircleIcon,
  ClockIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";
import fondo from "../assets/azul.webp";

function Values() {
  const coreValues = [
    {
      title: "PRECIO",
      description:
        "Optimizamos recursos y te asesoramos para que tu inversión rinda al máximo..",
      Icon: CurrencyDollarIcon,
      colorClass: "text-blue-main",
    },
    {
      title: "CALIDAD",
      description:
        "Dedicamos el tiempo necesario y ofrecemos garantía de satisfacción: si no quedás conforme, lo repetimos.",
      Icon: CheckCircleIcon,
      colorClass: "text-pink-main",
    },
    {
      title: "TIEMPO",
      description:
        "Cumplimos con los tiempos acordados y trabajamos para entregar a tiempo.",
      Icon: ClockIcon,
      colorClass: "text-yellow-main",
    },
    {
      title: "TRATO",
      description:
        "Atención 100% personalizada por WhatsApp, con contacto humano y cercano.",
      Icon: UsersIcon,
      colorClass: "text-green-main",
    },
  ];

  return (
    <section
      id="valores"
      className="relative py-28 px-6 lg:px-28 text-white overflow-hidden 
                 bg-gradient-to-br from-black via-blue-900 to-purple-900"
    >
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url('${fondo}')` }}
      />
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h3 className="text-sm md:text-base font-bold tracking-widest text-indigo-300 uppercase mb-2">
            Nuestros Fundamentos
          </h3>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            Valores que{" "}
            <span className="bg-clip-text text-transparent bg-linear-to-r from-pink-main via-blue-main to-yellow-main animate-gradient bg-[length:200%_200%]">
              Impulsamos
            </span>
          </h2>
          <p className="text-lg text-indigo-200 mt-4">
            Calidad, Precio y Puntualidad. El mejor equilibrio para tus
            proyectos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((value, index) => (
            <div
              key={index}
              className={`p-5 rounded-xl border-t-4 ${value.colorClass} bg-white/5 backdrop-blur-sm shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:border-b-4`}
              style={{
                animationDelay: `${index * 150}ms`,
                borderColor: value.colorClass.replace("text-", "#"),
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <value.Icon
                  className={`w-6 h-6 ${value.colorClass} shrink-0`}
                />

                <h3 className="text-xl font-bold font-title text-white uppercase">
                  {value.title}
                </h3>
              </div>

              <p className="text-sm text-indigo-100/90 leading-relaxed mt-2">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Values;
