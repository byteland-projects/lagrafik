import {
  CurrencyDollarIcon,
  CheckCircleIcon,
  ClockIcon,
  UsersIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";
import fondo from "../assets/fondoValues.jpg";
import { useState } from "react";

export default function Values() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const coreValues = [
    {
      title: "PRECIO",
      description:
        "Optimizamos recursos y te asesoramos para que tu inversión rinda al máximo.",
      Icon: CurrencyDollarIcon,
      colorClass: "text-blue-main",
      borderColor: "border-blue-main",
      bgGradient: "from-blue-main/5 via-blue-main/10 to-transparent",
    },
    {
      title: "CALIDAD",
      description:
        "Dedicamos el tiempo necesario y ofrecemos garantía de satisfacción: si no quedás conforme, lo repetimos.",
      Icon: CheckCircleIcon,
      colorClass: "text-pink-main",
      borderColor: "border-pink-main",
      bgGradient: "from-pink-main/5 via-pink-main/10 to-transparent",
    },
    {
      title: "TIEMPO",
      description:
        "Cumplimos con los tiempos acordados y trabajamos para entregar a tiempo.",
      Icon: ClockIcon,
      colorClass: "text-yellow-main",
      borderColor: "border-yellow-main",
      bgGradient: "from-yellow-main/5 via-yellow-main/10 to-transparent",
    },
    {
      title: "TRATO",
      description:
        "Atención 100% personalizada por WhatsApp, con contacto humano y cercano.",
      Icon: UsersIcon,
      colorClass: "text-green-main",
      borderColor: "border-green-main",
      bgGradient: "from-green-main/5 via-green-main/10 to-transparent",
    },
  ];

  return (
    <section
      id="valores"
      aria-labelledby="valores-title"
      className="relative py-24 px-6 lg:px-40 text-white overflow-hidden"
    >
      {/* Fondos y Overlays (con aria-hidden para que Google no intente "leer" una imagen de fondo) */}
      <div className="absolute inset-0 z-0 bg-linear-to-b from-bg-1 via-bg-1/80 to-black" aria-hidden="true"></div>
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        aria-hidden="true"
        style={{ 
          backgroundImage: `url('${fondo}')`,
          backgroundAttachment: 'fixed'
        }}
      />
      <div className="absolute inset-0 bg-linear-to-t from-black via-black/70 to-black/40 z-1"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header de la sección */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-0.5 bg-linear-to-r from-pink-main to-blue-main"></div>
            <p className="text-sm md:text-base font-bold tracking-widest text-indigo-300 uppercase">
              Lo que nos define
            </p>
            <div className="w-12 h-0.5 bg-linear-to-r from-blue-main to-yellow-main"></div>
          </div>
          
          <h2 id="valores-title" className="text-4xl lg:text-5xl font-title font-extrabold text-white leading-tight mb-4">
            Los{" "}
            <span className="bg-clip-text text-transparent bg-linear-to-r from-pink-main via-blue-main to-yellow-main animate-gradient bg-size-[200%_200%]">
              4 Pilares
            </span>{" "}
            de nuestro servicio gráfico
          </h2>
          
          <p className="text-lg text-indigo-200/80 max-w-2xl mx-auto">
            Garantizamos excelencia en cada proyecto gracias a nuestros valores fundamentales como gráfica profesional.
          </p>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {coreValues.map((value, index) => {
            const isOpen = openIndex === index;

            return (
              <li
                key={index}
                className={`relative group rounded-2xl overflow-hidden
                  transition-all duration-500 ease-out
                  ${isOpen ? 'lg:transform lg:-translate-y-2' : ''}
                `}
              >
                <div className={`absolute inset-0 bg-linesr-to-br ${value.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <div className={`absolute inset-0 border-2 ${value.borderColor} opacity-0 group-hover:opacity-30 rounded-2xl transition-all duration-500`}></div>
                
                <div className={`relative p-6 bg-white/5 backdrop-blur-sm rounded-2xl border-t-4
                  ${value.borderColor}
                  transition-all duration-300
                  hover:bg-white/10
                  ${isOpen ? 'shadow-2xl' : 'shadow-lg'}
                `}>
                  <button
                    className="w-full flex justify-between items-center cursor-pointer group"
                    onClick={() => toggle(index)}
                    aria-expanded={isOpen}
                    aria-controls={`desc-valor-${index}`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-lg bg-white/5 ${value.colorClass}/10 group-hover:bg-white/10 transition-colors`}>
                        <value.Icon className={`w-7 h-7 ${value.colorClass}`} aria-hidden="true"/>
                      </div>
                      <div className="text-left">
                        <h3 className="text-xl font-bold font-title text-white uppercase tracking-tight">
                          {value.title}
                        </h3>
                        <div className={`w-12 h-1 ${value.colorClass} bg-current mt-2 rounded-full`}></div>
                      </div>
                    </div>

                    <ChevronDownIcon
                      className={`w-6 h-6 text-white/70 transition-all duration-300 
                        ${isOpen ? 'rotate-180 text-white' : ''}
                        group-hover:text-white
                      `}
                    />
                  </button>

                  <div
                    id={`desc-valor-${index}`}
                    className={`
                      overflow-hidden transition-all duration-500 ease-out
                      ${isOpen ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0"}
                    `}
                  >
                    <div className="pt-4 border-t border-white/10">
                      <p className="text-sm text-indigo-100/90 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-center text-indigo-200/60 text-sm">
            Estos valores guían cada decisión en{" "}
            <span className="text-white font-semibold">La Grafik</span>, 
            asegurando consistencia y excelencia desde hace 3 décadas
          </p>
        </div>
      </div>
    </section>
  );
}