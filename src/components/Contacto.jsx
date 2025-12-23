import { contacto, horario } from '../../control_panel/contacto.json';

export default function Contacto() {
  return (
    <section id="contacto" className="py-24 bg-blue-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-pink-main to-transparent"></div>
      
      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* COLUMNA IZQUIERDA: INFORMACIÓN */}
          <div className="space-y-8 animate-fade-in-up">
            <div>
              <p className="text-sm font-bold tracking-widest text-blue-main uppercase mb-2">
                Estamos para ayudarte
              </p>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                Contactanos
              </h2>
              <p className="text-lg text-gray-600 mt-4">
                ¿Tenés una idea en mente? Escribinos o visitanos en nuestro local. 
                Hacemos realidad tus proyectos gráficos.
              </p>
            </div>

            <div className="space-y-6">
              
              {/* WhatsApp */}
              <a 
                href={contacto.wp_link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start gap-4 group hover:translate-x-2 transition-transform duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center shrink-0 group-hover:bg-green-main transition-colors duration-300">
                  <svg className="w-6 h-6 text-green-600 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    {/* El atributo "d" de la etiqueta path dibuja el icono de WhatsApp. */}
                    {/* Beneficios: No pesa nada, carga instantánea, no se pixela, cambia de color con hover */}
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-left font-bold text-gray-900">WhatsApp</h4>
                  <p className="text-gray-600 text-lg group-hover:text-green-600 transition-colors">{contacto.number}</p>
                </div>
              </a>

              {/* Email */}
              <a href={`mailto:${contacto.mail}`} className="flex items-start gap-4 group">
                 <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-blue-main transition-colors duration-300">
                  <svg className="w-6 h-6 text-blue-main group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-left font-bold text-gray-900">E-mail</h4>
                  <p className="text-gray-600 group-hover:text-blue-main transition-colors">{contacto.email}</p>
                </div>
              </a>

              {/* Dirección */}
              <address className="flex items-start gap-4 not-italic">
                <div className="w-12 h-12 rounded-full bg-pink-50 flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-pink-main" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-left font-bold text-gray-900">Dirección</h4>
                  <p className="text-gray-600">{contacto.direccion}</p>
                  <p className="text-gray-500 text-sm">{contacto.localidad}</p>
                </div>
              </address>

              {/* Horarios */}
              <div className="flex items-start gap-4">
                 <div className="w-12 h-12 rounded-full bg-yellow-50 flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-yellow-main" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-left font-bold text-gray-900 mb-1">Horarios de Atención</h4>
                  <div className="text-gray-600 space-y-1">
                    <p className="flex justify-between w-full md:w-64">
                      <span>Lunes a Viernes:</span>
                      <span className="font-medium text-gray-900">{horario.lunes_a_viernes}</span>
                    </p>
                    <p className="text-sm text-gray-500">(Horario de corrido)</p>

                    {(horario.sabados != "CERRADO" ) && (
                      <p className="flex justify-between w-full md:w-64">
                        <span>Sábados:</span>
                        <span className="font-medium text-gray-900">{horario.sabados}</span>
                      </p>
                    )}
                    
                    {(horario.sabados == "CERRADO" ) && (
                    <p className="flex justify-between w-full md:w-64">
                      <span className="text-red-400">Sáb, Dom y Feriados:</span>
                      <span className="font-bold text-red-400">CERRADO</span>
                    </p>
                    )}

                    {(horario.sabados != "CERRADO" ) && (
                    <p className="flex justify-between w-full md:w-64">
                      <span className="text-red-400">Dom y Feriados:</span>
                      <span className="font-bold text-red-400">CERRADO</span>
                    </p>
                    )}

                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* COLUMNA DERECHA: MAPA */}
          <figure className="h-full min-h-[400px] w-full relative group">
            {/* Contenedor con borde degradado CMYK */}
            <div className="absolute inset-0 bg-linear-to-r from-pink-main via-blue-main to-yellow-main rounded-2xl p-[3px] shadow-2xl transition-all duration-500">
               <div className="h-full w-full bg-white rounded-xl overflow-hidden">
                  <iframe 
                    title="Ubicación La Grafi-K"
                    src="https://maps.google.com/maps?q=Cnel.+Lorenzo+Barcala+656,+Ituzaing%C3%B3,+Buenos+Aires&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%" 
                    height="100%" 
                    style={{ border: 0, minHeight: '400px' }} 
                    allowFullScreen="" 
                    loading="lazy"
                    className="grayscale hover:grayscale-0 transition-all duration-700"
                  ></iframe>
               </div>
            </div>
          </figure>

        </div>
      </div>
    </section>
  );
}