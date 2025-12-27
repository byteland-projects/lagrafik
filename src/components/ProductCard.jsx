export default function ProductCard({ producto, onOpenModal }) {
  return (
    <article className="p-0.5 bg-linear-to-r from-pink-main to-blue-main rounded-xl shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
      <div className="bg-white rounded-xl overflow-hidden flex flex-col h-full">
        <div className="aspect-square overflow-hidden relative">
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
              onClick={() => onOpenModal(producto)}
              className="px-3 py-1 text-sm bg-linear-to-r from-pink-main to-yellow-main text-white font-semibold rounded-full shadow hover:shadow-green-main/30 transition-all"
            >
              Ver detalle
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}