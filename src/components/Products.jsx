import { useState } from "react";
import ModalProducto from "./ModalProducto";
import ProductCard from "./ProductCard";
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

  const handlePrev = () => {
    const index = productosAMostrar.indexOf(productoActivo);
    const prevIndex = (index - 1 + productosAMostrar.length) % productosAMostrar.length;
    setProductoActivo(productosAMostrar[prevIndex]);
  };

  const handleNext = () => {
    const index = productosAMostrar.indexOf(productoActivo);
    const nextIndex = (index + 1) % productosAMostrar.length;
    setProductoActivo(productosAMostrar[nextIndex]);
  };

  return (
    <section id="productos" className="py-24 px-6 lg:px-28 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="place-items-center">
            <p className="text-sm md:text-base font-bold tracking-widest text-text-mid uppercase mb-2">
              La Grafi-k productos
            </p>
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

        {/* Controles de filtro */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {[
            { key: "digitales", label: "Digitales" },
            { key: "fisicos", label: "Físicos" },
          ].map((cat) => (
            <button
              key={cat.key}
              onClick={() => setCategoriaActiva(cat.key)}
              aria-pressed={categoriaActiva === cat.key}
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

        {/* Productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {productosAMostrar.map((producto) => (
            <ProductCard 
              key={producto.id} 
              producto={producto} 
              onOpenModal={handleOpenModal}
            />
          ))}
        </div>
      </div>

      {productoActivo && (
        <ModalProducto
          producto={productoActivo}
          onClose={() => setProductoActivo(null)}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </section>
  );
}