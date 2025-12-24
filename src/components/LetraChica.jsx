export default function LetraChica() {
  const terminos = [
    {
      titulo: "Seña y Pagos",
      icono: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      texto: "Se trabaja con una seña del 50%. El precio final se congela por 3 días hábiles luego de pactado el retiro; luego de ese plazo, cualquier aumento de insumos se trasladará al costo."
    },
    {
      titulo: "Diseños y Errores",
      icono: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      ),
      texto: "Antes de imprimir, enviamos el diseño para revisión. Es responsabilidad del cliente revisar textos y detalles. No aceptamos reclamos posteriores por errores no mencionados en esta etapa."
    },
    {
      titulo: "Tiempos de Entrega",
      icono: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      texto: "El plazo de entrega comienza a correr únicamente cuando recibimos la información completa y la aprobación final del diseño (no desde el momento de la seña)."
    }
  ];

  return (
    <section id="letra-chica" className="py-16 px-6 bg-bg-3 border-t border-orange-500">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Términos y <span className="text-orange-main">Condiciones</span>
          </h2>
          <p className="text-sm text-gray-200 mt-2">
            Lo que necesitás saber para que trabajemos mejor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {terminos.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-orange-main/30 transition-colors"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-orange-100 text-orange-main rounded-lg">
                  {item.icono}
                </div>
                <h3 className="font-bold text-gray-900 text-lg">
                  {item.titulo}
                </h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.texto}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}