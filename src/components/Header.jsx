export default function Header() {
  return (
    <header className="flex items-center justify-between px-12 py-6 bg-bg-dark z-150 fixed w-full top-0 left-0">
      {/* Logo: "La" en rosa y "Grafi-K" con degradado */}
      <div className="text-2xl font-bold select-none">
        <span className="text-pink-main">La </span>
        <span className="bg-linear-to-r from-[#a044ff] to-[#2d8eff] bg-clip-text text-transparent">
          Grafi-K
        </span>
      </div>

      {/* Links de Navegación */}
      <ul className="flex items-center gap-x-8 text-white font-medium">
        <li className="relative group">
          <a href="#inicio" className="text-neon-pink">
            Inicio
          </a>
          {/* Línea inferior para el estado activo */}
          <span className="absolute left-0 -bottom-2 w-full h-[3px] bg-neon-pink rounded-full"></span>
        </li>
        
        <li className="hover:text-neon-pink transition-colors duration-300">
          <a href="#nosotros">Nosotros</a>
        </li>
        
        <li className="hover:text-neon-pink transition-colors duration-300">
          <a href="#productos">Productos</a>
        </li>
        
        <li className="hover:text-neon-pink transition-colors duration-300">
          <a href="#contacto">Contacto</a>
        </li>
      </ul>
    </header>
  );
}