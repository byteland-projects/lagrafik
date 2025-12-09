import { useState } from "react";
import ModalProducto from "./ModalProducto";
import data from "../../control_panel/data.json";

export const productosDigitales = data.digitales;
export const productosFisicos = data.fisicos;

export default function Products() {
  const [categoriaActiva, setCategoriaActiva] = useState("digitales");
  const productosAMostrar =
    categoriaActiva === "fisicos" ? productosFisicos : productosDigitales;
  const [productoActivo, setProductoActivo] = useState(null);

  const handleOpenModal = (producto) => {
    setProductoActivo(producto);
  };



  const ProductCard = ({ producto }) => (
    <div className="p-0.5 bg-linear-to-r from-pink-main to-blue-main rounded-xl shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
      <div className="bg-white rounded-xl overflow-hidden flex flex-col h-full">
        <div className="h-40 overflow-hidden relative">
          <img
            src={producto.imagenes[0]}
            alt={producto.nombre}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent"></div>
        </div>

        <div className="flex flex-col grow p-5 pt-3">
          <h3 className="text-lg font-title font-bold text-bg-2 text-start mb-2">
            {producto.nombre}
          </h3>
          <p className="text-gray-600 text-sm text-start mb-4 grow">
            {producto.descripcion}
          </p>

          <div className="flex justify-end mt-auto">
            <button
              onClick={() => handleOpenModal(producto)}
              className="px-3 py-1 text-sm bg-linear-to-r from-pink-main to-yellow-main text-white font-semibold rounded-full shadow hover:shadow-green-main/30 transition-all"
            >
              Ver detalle
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="productos" className="py-24 px-6 lg:px-28 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="place-items-center">
            <h3 className="text-sm md:text-base font-bold tracking-widest text-text-mid uppercase mb-2">
              La Grafi-k productos
            </h3>
            {/* <div className="w-20 h-1 bg-gradient-to-r from-pink-main to-blue-main rounded-full mb-6"></div>*/}
          </div>
          <h2 className="text-4xl font-extrabold text-gray-900">
            Nuestros{" "}
            <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-main via-pink-main to-yellow-main animate-gradient bg-size-[200%_200%]">
              Productos
            </span>
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Seleccioná entre nuestra variedad de productos gráficos.
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {[
            { key: "digitales", label: "Digitales" },
            { key: "fisicos", label: "Físicos" },
          ].map((cat) => (
            <button
              key={cat.key}
              onClick={() => setCategoriaActiva(cat.key)}
              className={`px-6 py-2 rounded-full text-lg font-bold transition-all duration-300 border shadow-sm
                ${
                  categoriaActiva === cat.key
                    ? "bg-linear-to-r from-blue-main to-pink-main text-white shadow-md"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {productosAMostrar.map((producto) => (
            <ProductCard key={producto.id} producto={producto} />
          ))}
        </div>
      </div>

      {productoActivo && (
        <ModalProducto
          producto={productoActivo}
          onClose={() => setProductoActivo(null)}
        />
      )}
    </section>
  );
}
