import imagenMenu from "../assets/tarjeta.avif";
import imagenFisico from "../assets/grafica.jpg";
import { useState } from "react";

const productosDigitales = [
  {
    id: 1,
    nombre: "Menú digital",
    descripcion:
      "Modernizá tu negocio con un menú visual, editable al instante y pensado para vender más.",
    imagen: imagenMenu,
  },
  {
    id: 2,
    nombre: "Packs de diseño de flyers",
    descripcion:
      "Avisos persuasivos y diseñados para que vendas más, sin perder tiempo.",
    imagen: imagenMenu,
  },
  {
    id: 3,
    nombre: "Diseño de logos",
    descripcion:
      "Tu marca merece un logo profesional, estético y con identidad real.",
    imagen: imagenMenu,
  },
];

const productosFisicos = [
  {
    id: 4,
    nombre: "Folletos",
    descripcion: "Texto.",
    imagen: imagenFisico,
  },
  {
    id: 5,
    nombre: "Tarjetas personales",
    descripcion: "Texto.",
    imagen: imagenFisico,
  },
  {
    id: 6,
    nombre: "Imanes publicitarios",
    descripcion: "Texto.",
    imagen: imagenFisico,
  },
  {
    id: 7,
    nombre: "Sticker",
    descripcion: "Texto.",
    imagen: imagenFisico,
  },
  {
    id: 8,
    nombre: "Recetarios/Planillas/Comprobantes",
    descripcion: "Texto.",
    imagen: imagenFisico,
  },
  {
    id: 9,
    nombre: "Banners",
    descripcion: "Texto.",
    imagen: imagenFisico,
  },
  {
    id: 10,
    nombre: "Señalización",
    descripcion: "Texto.",
    imagen: imagenFisico,
  },
  {
    id: 11,
    nombre: "Pancartas",
    descripcion: "Texto.",
    imagen: imagenFisico,
  },
  {
    id: 12,
    nombre: "Plotter",
    descripcion: "Texto.",
    imagen: imagenFisico,
  },
  {
    id: 13,
    nombre: "Fotos",
    descripcion: "Texto.",
    imagen: imagenFisico,
  },
  {
    id: 14,
    nombre: "Etiquetas",
    descripcion: "Texto.",
    imagen: imagenFisico,
  },
  {
    id: 15,
    nombre: "Plastificados",
    descripcion: "Texto.",
    imagen: imagenFisico,
  },
  {
    id: 16,
    nombre: "Llaveros",
    descripcion: "Texto.",
    imagen: imagenFisico,
  },
];

function Products() {
  const [categoriaActiva, setCategoriaActiva] = useState("digitales");
  const productosAMostrar =
    categoriaActiva === "fisicos" ? productosFisicos: productosDigitales;

  // Función para abrir el modal
  const handleOpenModal = (producto) => {
    alert(`Abriendo modal para: ${producto.nombre}`);
    // Poner logica
  };

  const ProductCard = ({ producto }) => (
    <div
      className="p-[2px] bg-gradient-to-br from-pink-main to-blue-main 
                 rounded-t-xl rounded-b-none 
                 shadow-xl transition-all duration-300 transform hover:-translate-y-1"
    >
      <div className="bg-bg-2 rounded-t-xl rounded-b-none overflow-hidden h-full">
        <div className="h-40 overflow-hidden relative">
          <img
            src={producto.imagen}
            alt={producto.nombre}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-2/30 to-transparent"></div>
        </div>

        <div className="p-5 pt-3">
          <h3 className="text-xl font-title font-bold text-start text-text-extra-light mb-2">
            {producto.nombre}
          </h3>
          <p className="text-text-mid text-sm text-start mb-4">{producto.descripcion}</p>

          <div className="w-full rounded-full p-[2px] bg-gradient-to-r from-green-main to-blue-main hover:shadow-lg hover:shadow-green-main/30 transition-shadow">
            <button
              onClick={() => handleOpenModal(producto)}
              className="block w-full px-4 py-2 bg-bg-2 text-text-light font-semibold rounded-full hover:bg-bg-1 transition-all"
            >
              Ver Detalle
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section
      id="productos"
      className="py-28 px-8 lg:px-40 bg-bg-1 text-text-light relative"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-title font-extrabold leading-tight">
            Nuestros{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-main via-pink-main to-yellow-main animate-gradient bg-[length:200%_200%]">
              Productos
            </span>
          </h2>
          <p className="text-lg text-text-mid mt-4 max-w-2xl mx-auto">
            Selecciona entre nuestra amplia variedad de productos gráficos
            digitales y físicos
          </p>
        </div>

        <div className="flex justify-center gap-6 mb-12">
          {["digitales", "fisicos"].map((category) => (
            <div
              key={category}
              className={"rounded-full p-[3px] transition-all duration-300"}
            >
              <button
                onClick={() => setCategoriaActiva(category)}
                className={`px-6 py-2 rounded-full text-lg font-bold transition-all duration-300 
                  ${
                    categoriaActiva === category
                      ? "bg-linear-to-r from-pink-main to-blue-main text-text-extra-light"
                      : "bg-bg-1 border border-bg-2 text-text-mid hover:text-text-light"
                  }`}
              >
                {category === "digitales"
                  ? "Productos Digitales"
                  : "Productos Físicos"}
              </button>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {productosAMostrar.map((producto) => (
            <ProductCard key={producto.id} producto={producto} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
