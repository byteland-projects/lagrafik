import { useState, useEffect } from "react";

export default function ModalProducto({ producto, onClose }) {
  const [medida, setMedida] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [material, setMaterial] = useState("");

  // Bloquear scroll del body al abrir y pre-seleccionar opciones
  useEffect(() => {
    document.body.style.overflow = "hidden";
    
    // Pre-seleccionar la primera opción si existe para evitar que el usuario envíe "null"
    if (producto.medidas?.length > 0) setMedida(producto.medidas[0]);
    if (producto.material?.length > 0) setMaterial(producto.material[0]);
    if (producto.cantidad?.length > 0) setCantidad(producto.cantidad[0]);

    return () => {
      document.body.style.overflow = "";
    };
  }, [producto]);

  const enviarWhatsApp = () => {
    const mensaje = `Hola! Quisiera solicitar un presupuesto.\n
    *Producto:* ${producto.nombre}
    ${medida ? `*Medidas:* ${medida}` : ''}
    ${material ? `*Material:* ${material}` : ''}
    *Cantidad:* ${cantidad}
    `;

    const url = `https://wa.me/541130608503?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  };

  return (
    // Overlay oscuro con blur
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 p-4 sm:p-6">
      
      {/* Contenedor Principal (Card) */}
      <div className="bg-bg-2 text-white w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh] relative animate-fadeIn">
        
        {/* BOTÓN CERRAR (Flotante y siempre visible) */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 p-2 bg-black/20 hover:bg-black/40 rounded-full transition-colors text-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* COLUMNA 1: IMAGEN */}
        <div className="w-full md:w-1/2 h-64 md:h-auto relative bg-gray-800 shrink-0">
          <img
            src={producto.imagen}
            alt={producto.nombre}
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Degradado sutil abajo para que la imagen se fusione un poco si es muy clara */}
          <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent md:hidden" />
        </div>

        {/* COLUMNA 2: CONTENIDO (Scrollable) */}
        <div className="w-full md:w-1/2 flex flex-col p-6 md:p-8 overflow-y-auto">
          
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white leading-tight">
              {producto.nombre}
            </h2>

            <p className="text-gray-300 mb-6 text-sm md:text-base leading-relaxed">
              {producto.detalle}
            </p>

            {/* SELECCIÓN DE MEDIDAS */}
            {producto.medidas && (
              <div className="mb-6">
                <h3 className="text-left text-sm uppercase tracking-wider text-gray-400 font-bold mb-3">Medidas</h3>
                <div className="flex flex-wrap gap-2">
                  {producto.medidas.map((m) => (
                    <button
                      key={m}
                      onClick={() => setMedida(m)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all duration-200
                        ${medida === m
                          ? "bg-yellow-main border-yellow-main text-black shadow-lg shadow-yellow-main/20 scale-105"
                          : "bg-transparent border-gray-600 text-gray-300 hover:border-gray-400 hover:bg-white/5"
                        }
                      `}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* SELECCIÓN DE MATERIAL */}
            {producto.material && (
              <div className="mb-6">
                <h3 className="text-left text-sm uppercase tracking-wider text-gray-400 font-bold mb-3">Material</h3>
                <div className="flex flex-wrap gap-2">
                  {producto.material.map((m) => (
                    <button
                      key={m}
                      onClick={() => setMaterial(m)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all duration-200
                        ${material === m
                          ? "bg-yellow-main border-yellow-main text-black shadow-lg shadow-yellow-main/20 scale-105"
                          : "bg-transparent border-gray-600 text-gray-300 hover:border-gray-400 hover:bg-white/5"
                        }
                      `}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* SELECCIÓN DE CANTIDAD */}
            {producto.cantidad && (
              <div className="mb-6">
                <h3 className="text-left text-sm uppercase tracking-wider text-gray-400 font-bold mb-3">cantidad</h3>
                <div className="flex flex-wrap gap-2">
                  {producto.cantidad.map((m) => (
                    <button
                      key={m}
                      onClick={() => setCantidad(m)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all duration-200
                        ${cantidad === m
                          ? "bg-yellow-main border-yellow-main text-black shadow-lg shadow-yellow-main/20 scale-105"
                          : "bg-transparent border-gray-600 text-gray-300 hover:border-gray-400 hover:bg-white/5"
                        }
                      `}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* BOTÓN DE ACCIÓN (Sticky bottom visualmente) */}
          <div className="pt-4 mt-auto border-t border-gray-700/50">
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