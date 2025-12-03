export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 md:px-12 py-4 bg-bg-dark/95 backdrop-blur-sm z-50 fixed w-full top-0 left-0 border-b border-white/10">
      {/* Logo: "La" en rosa y "Grafi-K" con degradado */}
      <div className="text-2xl font-bold select-none">
        <span className="text-pink-main">La </span>
        <span className="bg-linear-to-r from-pink-main via-blue-main to-yellow-main bg-clip-text text-transparent">
          Grafi-K
        </span>
      </div>

      <nav>
      {/* Links de Navegación */}
      <ul className="flex items-center gap-x-6 text-white/90 font-medium">
        <li className="relative group">
          <a href="#inicio" className="px-3 py-2 rounded-lg hover:bg-white/5 transition-all duration-300 group-hover:text-pink-main">
            Inicio
          </a>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-3/4 h-0.5 bg-gradient-to-r from-transparent via-pink-main to-transparent transition-all duration-300"></div>
        </li>
        
        <li className="relative group">
          <a href="#nosotros" className="px-3 py-2 rounded-lg hover:bg-white/5 transition-all duration-300 group-hover:text-blue-main">
            Nosotros
          </a>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-3/4 h-0.5 bg-gradient-to-r from-transparent via-blue-main to-transparent transition-all duration-300"></div>
        </li>
        
        <li className="relative group">
          <a href="#productos" className="px-3 py-2 rounded-lg hover:bg-white/5 transition-all duration-300 group-hover:text-yellow-main">
            Productos
          </a>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-3/4 h-0.5 bg-gradient-to-r from-transparent via-yellow-main to-transparent transition-all duration-300"></div>
        </li>
        
        <li className="relative group">
          <a href="#contacto" className="px-3 py-2 rounded-lg hover:bg-white/5 transition-all duration-300 group-hover:text-green-main">
            Contacto
          </a>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-3/4 h-0.5 bg-gradient-to-r from-transparent via-green-main to-transparent transition-all duration-300"></div>
        </li>
      </ul>
      </nav>
    </header>
  );
}