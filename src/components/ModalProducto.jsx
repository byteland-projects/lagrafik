import { useState, useEffect } from "react";

export default function ModalProducto({ producto, onClose }) {
  const [medida, setMedida] = useState("A4");
  const [cantidad, setCantidad] = useState(1);
  const [material, setMaterial] = useState();

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const enviarWhatsApp = () => {
    const mensaje = `Hola! Quisiera solicitar un presupuesto.\n
    Producto: ${producto.nombre}
    Medidas: ${medida}
    Cantidad: ${cantidad}
    `;

    const url = `https://wa.me/541130608503?text=${encodeURIComponent(
      mensaje
    )}`;

    window.open(url, "_blank");
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50 p-4">
      <div className="bg-bg-2 text-white w-full max-w-4xl rounded-xl p-6 md:p-8 relative shadow-xl overflow-y-auto max-h-[90vh]">
        {/* BOTÓN CERRAR */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-2xl text-white hover:text-gray-300"
        >
          x
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mt-6">
          {/* IMAGEN */}
          <div className="w-full rounded-xl overflow-hidden h-52 xs:h-64 sm:h-72 md:h-full">
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="w-full h-full object-cover"
            />
          </div>

          {/* CONTENIDO */}
          <div className="flex flex-col">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-left">
              {producto.nombre}
            </h2>

            <p className="text-gray-300 mb-6 text-left text-sm sm:text-base">
              {producto.detalle}
            </p>

            {/* MEDIDAS */}
            <h3 className="text-lg font-semibold mb-2 text-left">Medidas:</h3>
            <div className="flex flex-wrap gap-3 mb-6">
              {producto.medidas.map((m) => (
                <button
                  key={m}
                  onClick={() => setMedida(m)}
                  className={`px-4 py-2 rounded-full font-semibold text-sm sm:text-base transition-all
                    ${
                      medida === m
                        ? "bg-yellow-main text-black"
                        : "bg-bg-3 text-white hover:bg-[#364b65]"
                    }
                  `}
                >
                  {m}
                </button>
              ))}
            </div>

            {/* Material */}
            {producto.material && <>
              <h3 className="text-lg font-semibold mb-2 text-left">Material:</h3>
            <div className="flex flex-wrap gap-3 mb-6">
              {producto.material.map((m) => (
                <button
                  key={m}
                  onClick={() => setMaterial(m)}
                  className={`px-4 py-2 rounded-full font-semibold text-sm sm:text-base transition-all
                    ${
                      material === m
                        ? "bg-yellow-main text-black"
                        : "bg-bg-3 text-white hover:bg-[#364b65]"
                    }
                  `}
                >
                  {m}
                </button>
              ))}
            </div>
            </>
            }

            {/* CANTIDAD */}
            <h3 className="text-lg font-semibold mb-2 text-left">Cantidad:</h3>
            <div className="flex items-center gap-4 mb-8">
              <button
                onClick={() => setCantidad((c) => Math.max(1, c - 1))}
                className="bg-bg-3 px-3 py-1 rounded-full text-xl"
              >
                -
              </button>

              <div className="border border-white px-6 py-1 rounded-full text-lg">
                {cantidad}
              </div>

              <button
                onClick={() => setCantidad((c) => c + 1)}
                className="bg-bg-3 px-3 py-1 rounded-full text-xl"
              >
                +
              </button>
            </div>

            {/* RESUMEN */}
            <div className="bg-bg-dark p-5 rounded-xl mb-4 text-sm sm:text-base">
              <p>
                Producto:{" "}
                <span className="font-semibold">{producto.nombre}</span>
              </p>
              <p>
                Tipo: <span className="font-semibold">{medida}</span>
              </p>
              <p>
                Cantidad: <span className="font-semibold">{cantidad}</span>
              </p>

              <div className="w-full my-3">
                <div className="w-full h-px bg-bg-2"></div>
              </div>

              {/* BOTÓN FINAL */}
              <button
                onClick={enviarWhatsApp}
                className="w-full py-2 sm:py-3 mt-1 rounded-xl text-md sm:text-lg font-bold 
                bg-linear-to-r from-pink-main to-yellow-main text-white shadow-lg 
                hover:opacity-90 transition-all"
              >
                Solicitar presupuesto
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
