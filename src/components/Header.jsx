import React, { useState, useEffect } from 'react';

export default function Header() {
  const [activeSection, setActiveSection] = useState('inicio');

  // Lógica para detectar la sección activa al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'nosotros', 'productos', 'contacto'];
      
      // Buscamos qué sección está visible en la ventana
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Consideramos activa la sección si su parte superior está cerca del top (con un margen)
          // o si ocupa gran parte de la pantalla.
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Definición de links con sus colores específicos para mantener la identidad visual
  const navLinks = [
    { id: 'inicio', label: 'Inicio', colorText: 'text-pink-main', gradientClass: 'via-pink-main' },
    { id: 'nosotros', label: 'Nosotros', colorText: 'text-blue-main', gradientClass: 'via-blue-main' },
    { id: 'productos', label: 'Productos', colorText: 'text-yellow-main', gradientClass: 'via-yellow-main' }, // Nota: el amarillo sobre blanco a veces necesita sombra o ser más oscuro
    { id: 'contacto', label: 'Contacto', colorText: 'text-green-main', gradientClass: 'via-green-main' },
  ];

  return (
    <header className="flex items-center justify-between px-6 md:px-12 py-4 bg-white/75 backdrop-blur-md z-50 fixed w-full top-0 left-0 border-b border-gray-200 shadow-sm transition-all duration-300">
      
      {/* Logo: "La" en rosa y "Grafi-K" con degradado CMYK */}
      <div className="text-2xl font-bold select-none cursor-pointer">
        <span className="text-pink-main">La </span>
        <span className="bg-linear-to-r from-pink-main via-blue-main to-yellow-main bg-clip-text  text-transparent">
          Grafi-K
        </span>
      </div>

      <nav>
        <ul className="flex items-center gap-x-6 font-medium text-gray-600">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            
            return (
              <li key={link.id} className="relative group">
                <a 
                  href={`#${link.id}`}
                  onClick={() => setActiveSection(link.id)} // Actualización inmediata al click
                  className={`
                    px-3 py-2 rounded-lg transition-all duration-300 
                    hover:bg-gray-100/50 hover:${link.colorText}
                    ${isActive ? `${link.colorText} bg-gray-50` : ''} 
                  `}
                >
                  {link.label}
                </a>
                
                {/* Línea inferior: Se muestra en Hover O si está Activo */}
                <div className={`
                  absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 transition-all duration-300
                  /* Aquí usamos la clase completa, sin reemplazos de strings */
                  bg-linear-to-r from-transparent ${link.gradientClass} to-transparent
                  ${isActive ? 'w-3/4' : 'w-0 group-hover:w-3/4'}
                `}></div>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}