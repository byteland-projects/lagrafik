import imagenMenu from "../assets/menudigital.png";
import imagenFlyer from "../assets/flyers.png";
import imagenLogo from "../assets/logos.png";
import imagenFolleto from "../assets/folletos.png";
import imagenFisico from "../assets/grafica.jpg";
import { useState } from "react";
import ModalProducto from "./ModalProducto";

const productosDigitales = [
  {
    id: 1,
    nombre: "Menú digital",
    descripcion:
      "Mostrá tus productos de forma moderna y editable al instante.",
    detalle:
      "Un menú visual, práctico y fácil de actualizar. Ideal para mejorar la presentación de tu negocio y aumentar tus ventas.",
    imagen: imagenMenu,
  },
  {
    id: 2,
    nombre: "Packs de flyers",
    descripcion: "Flyers listos para publicar y atraer más clientes.",
    detalle:
      "Diseños pensados para captar atención y comunicar tus promos sin perder tiempo. Ideales para redes y WhatsApp.",
    imagen: imagenFlyer,
  },
  {
    id: 3,
    nombre: "Diseño de logos",
    descripcion: "Un logo profesional que represente tu marca.",
    detalle:
      "Creamos un logo estético y funcional, pensado para destacar y transmitir la identidad de tu negocio.",
    imagen: imagenLogo,
  },
];

const productosFisicos = [
  {
    id: 4,
    nombre: "Folletos",
    descripcion: "La forma más directa y económica de llegar a tus vecinos.",
    detalle:
      "Los folletos permiten difundir tu negocio a todos los hogares de tu zona, incluso sin redes sociales.",
    imagen: imagenFolleto,
  },
  {
    id: 5,
    nombre: "Tarjetas personales",
    descripcion: "Transmiten profesionalismo y refuerzan tu marca.",
    detalle:
      "Ideales para dejar una buena impresión y ampliar tu red de contactos de forma simple y efectiva.",
    imagen: imagenFisico,
  },
  {
    id: 6,
    nombre: "Imanes publicitarios",
    descripcion: "Publicidad útil y visible todo el año.",
    detalle:
      "Tus datos quedan siempre a la vista del cliente. Perfectos para servicios y deliverys.",
    imagen: imagenFisico,
  },
  {
    id: 7,
    nombre: "Stickers",
    descripcion: "Versátiles y perfectos para reforzar tu marca.",
    detalle:
      "Sirven para packaging, señalización, promociones y más. Económicos y muy visibles.",
    imagen: imagenFisico,
  },
  {
    id: 8,
    nombre: "Recetarios / Planillas",
    descripcion: "Orden y profesionalismo para tu emprendimiento.",
    detalle:
      "Facilitan la organización diaria y mejoran la presentación de tus procesos.",
    imagen: imagenFisico,
  },
  {
    id: 9,
    nombre: "Banners",
    descripcion: "Grandes, llamativos e ideales para promociones.",
    detalle:
      "Atraen miradas al instante y se usan en negocios, eventos, fiestas y más.",
    imagen: imagenFisico,
  },
  {
    id: 10,
    nombre: "Señalización",
    descripcion: "Carteles plásticos resistentes y duraderos.",
    detalle: "Perfectos para indicar, decorar o informar en cualquier espacio.",
    imagen: imagenFisico,
  },
  {
    id: 11,
    nombre: "Pancartas",
    descripcion: "Económicas, visibles y efectivas para difundir.",
    detalle: "Ideales para lugares estratégicos y campañas de alta exposición.",
    imagen: imagenFisico,
  },
  {
    id: 12,
    nombre: "Plotter (Vinilo cortado)",
    descripcion: "Vinilo de alta durabilidad para vidrieras y autos.",
    detalle:
      "Dura hasta tres veces más que lo impreso. Ideal para marcas y cartelería.",
    imagen: imagenFisico,
  },
  {
    id: 13,
    nombre: "Fotos",
    descripcion: "Edición e impresión profesional sin complicaciones.",
    detalle:
      "Ajustamos tamaño, luz y color para que tus fotos queden perfectas.",
    imagen: imagenFisico,
  },
  {
    id: 14,
    nombre: "Etiquetas plásticas",
    descripcion: "Elegantes y modernas para destacar tu producto.",
    detalle:
      "Aumentan la percepción de calidad y hacen que tu marca se vea más profesional.",
    imagen: imagenFisico,
  },
  {
    id: 15,
    nombre: "Plastificados",
    descripcion: "Protección rígida para documentos y fotos.",
    detalle:
      "Ideales para exterior, humedad o uso frecuente. Resistentes y prácticos.",
    imagen: imagenFisico,
  },
  {
    id: 16,
    nombre: "Llaveros",
    descripcion: "Un regalo útil que mantiene tu marca presente.",
    detalle:
      "Los clientes los usan todos los días, por eso son tan efectivos como publicidad.",
    imagen: imagenFisico,
  },
];

export default function Products() {
  const [categoriaActiva, setCategoriaActiva] = useState("digitales");
  const productosAMostrar =
    categoriaActiva === "fisicos" ? productosFisicos : productosDigitales;
  const [productoActivo, setProductoActivo] = useState(null);

  const handleOpenModal = (producto) => {
    setProductoActivo(producto);
  };

  const ProductCard = ({ producto }) => (
    <div className="p-[2px] bg-linear-to-r from-pink-main to-blue-main rounded-xl shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
      <div className="bg-white rounded-xl overflow-hidden flex flex-col h-full">
        <div className="h-40 overflow-hidden relative">
          <img
            src={producto.imagen}
            alt={producto.nombre}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent"></div>
        </div>

        <div className="flex flex-col flex-grow p-5 pt-3">
          <h3 className="text-lg font-title font-bold text-bg-2 text-start mb-2">
            {producto.nombre}
          </h3>
          <p className="text-gray-600 text-sm text-start mb-4 flex-grow">
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
            <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-main via-pink-main to-yellow-main animate-gradient bg-[length:200%_200%]">
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
