import { useState, useEffect } from "react";

export default function ModalProducto({ producto, onClose }) {
  const [opciones, setOpciones] = useState({});
  const [indiceActual, setIndiceActual] = useState(0);

  // Campos fijos que NO se renderizan dinámicamente
  const CAMPOS_VIP = ["id", "nombre", "descripcion", "detalle", "imagenes"];

  useEffect(() => {
    document.body.style.overflow = "hidden";

    // Pre-seleccionar la primera opción de cada lista
    const defaults = {};
    Object.keys(producto).forEach((key) => {
      // Solo si es una lista válida y no es VIP
      if (!CAMPOS_VIP.includes(key) && Array.isArray(producto[key]) && producto[key].length > 0) {
        defaults[key] = producto[key][0];
      }
    });
    setOpciones(defaults);

    return () => {
      document.body.style.overflow = "";
    };
  }, [producto]);

  const handleSeleccion = (key, valor) => {
    setOpciones((prev) => ({
      ...prev,
      [key]: valor,
    }));
  };

  const capitalizar = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  const enviarWhatsApp = () => {
    let mensaje = `Hola! Quisiera solicitar un presupuesto.\n\n*Producto:* ${producto.nombre}\n`;

    // Recorremos las claves para armar el mensaje
    Object.keys(producto).forEach((key) => {
      if (CAMPOS_VIP.includes(key)) return;

      const valorOriginal = producto[key];
      const valorSeleccionado = opciones[key];

      // Solo agregamos al mensaje si es un Array y el usuario eligió algo
      if (Array.isArray(valorOriginal) && valorSeleccionado) {
        mensaje += `*${capitalizar(key)}:* ${valorSeleccionado}\n`;
      }
    });

    const url = `https://wa.me/541130608503?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  };


//IMAGENES CARRUSEL

  // Si el array está vacío, usamos el logo como fallback
  const imagenes = producto.imagenes?.length > 0 ? producto.imagenes : ["/logo.png"];

  const siguiente = (e) => {
    e?.stopPropagation();
    setIndiceActual((prev) => (prev + 1) % imagenes.length);
  };

  const anterior = (e) => {
    e?.stopPropagation();
    setIndiceActual((prev) => (prev - 1 + imagenes.length) % imagenes.length);
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 p-4 sm:p-6">
      
      {/* CARD PRINCIPAL */}
      <div className="bg-bg-2 text-white md:w-full max-w-6xl h-[85vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row relative animate-fadeIn">
        
        {/* BOTÓN CERRAR */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-20 p-2 bg-black/20 hover:bg-black/40 rounded-full transition-colors text-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* COLUMNA 1: IMAGEN CUADRADA */}
        <div className="w-full md:w-6/10 h-64 md:h-auto md:aspect-square relative bg-gray-800 shrink-0 group overflow-hidden">
          
          {/* IMAGEN */}
          <img
            src={imagenes[indiceActual]}
            alt={producto.nombre}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out"
          />

          {/* CONTROLES (Solo si hay más de 1 foto) */}
          {imagenes.length > 1 && (
            <>
              {/* Botón Anterior */}
              <button 
                onClick={anterior}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
              >
                &#10094;
              </button>

              {/* Botón Siguiente */}
              <button 
                onClick={siguiente}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
              >
                &#10095;
              </button>

              {/* Indicadores (Puntos) */}
              <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 z-10">
                {imagenes.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => { e.stopPropagation(); setIndiceActual(idx); }}
                    className={`w-2 h-2 rounded-full shadow-sm transition-all duration-300 ${
                      idx === indiceActual 
                        ? "bg-white scale-125" 
                        : "bg-white/40 hover:bg-white/80"
                    }`}
                  />
                ))}
              </div>
            </>
          )}

          {/* Overlay gradiente para móvil (opcional, para que se lea texto encima si hubiera) */}
          <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent pointer-events-none md:hidden" />
        </div>

        {/* COLUMNA 2: CONTENIDO */}
        {/* Agregamos overflow-hidden aquí también para asegurar contención */}
        <div className="w-full md:w-1/2 flex flex-col h-full bg-bg-2 overflow-hidden">
          
          {/* Área Scrolleable:
              - flex-1: Toma el espacio disponible
              - overflow-y-auto: Permite scroll vertical
              - min-h-0: CRÍTICO. Evita que el flex item crezca más allá del contenedor padre.
          */}
          <div className="flex-1 overflow-y-auto p-6 md:p-8 custom-scrollbar min-h-0">
            
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white leading-tight">
              {producto.nombre}
            </h2>

            <p className="text-gray-300 mb-6 text-sm md:text-base leading-relaxed border-b border-gray-700/50 pb-6">
              {producto.detalle}
            </p>

            {/* --- RENDERING DINÁMICO (SOLO LISTAS) --- */}
            <div className="space-y-6">
              {Object.keys(producto).map((key) => {
                if (CAMPOS_VIP.includes(key) || !producto[key]) return null;

                const valor = producto[key];

                if (Array.isArray(valor) && valor.length > 0) {
                  return (
                    <div key={key}>
                      <h3 className="text-left text-sm uppercase tracking-wider text-yellow-main font-bold mb-3">
                        {capitalizar(key)}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {valor.map((opcion) => (
                          <button
                            key={opcion}
                            onClick={() => handleSeleccion(key, opcion)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all duration-200
                              ${opciones[key] === opcion
                                ? "bg-yellow-main border-yellow-main text-black shadow-lg shadow-yellow-main/20 scale-105"
                                : "bg-transparent border-gray-600 text-gray-300 hover:border-gray-400 hover:bg-white/5"
                              }
                            `}
                          >
                            {opcion}
                          </button>
                        ))}
                      </div>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </div>

          {/* FOOTER STICKY */}
          <div className="p-6 border-t border-gray-700/50 bg-bg-2 z-10 shrink-0">
            <button
              onClick={enviarWhatsApp}
              className="w-full py-4 rounded-xl text-lg font-bold 
              bg-linear-to-r from-pink-main to-yellow-main text-white shadow-lg shadow-pink-main/20
              hover:opacity-90 hover:shadow-xl hover:scale-[1.01] transition-all active:scale-[0.98]"
            >
              Solicitar presupuesto
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
}