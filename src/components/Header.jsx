import { useState, useEffect } from 'react';

export default function Header() {
  const [activeSection, setActiveSection] = useState('inicio');
  const [menuOpen, setMenuOpen] = useState(false);

  const hamburgerLine = `h-1 w-6 my-1 rounded-full bg-gradient-to-r from-pink-main via-blue-main to-yellow-main transition ease transform duration-300`;

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'nosotros', 'productos', 'descargas', 'letra-chica', 'contacto'];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const navLinks = [
    { id: 'inicio', label: 'Inicio', colorText: 'text-pink-main', gradientClass: 'via-pink-main' },
    { id: 'nosotros', label: 'Nosotros', colorText: 'text-blue-main', gradientClass: 'via-blue-main' },
    { id: 'productos', label: 'Productos', colorText: 'text-yellow-main', gradientClass: 'via-yellow-main' },
    { id: 'descargas', label: 'Descargas', colorText: 'text-purple-main', gradientClass: 'via-purple-main' },
    { id: 'letra-chica', label: 'Letra Chica', colorText: 'text-orange-main', gradientClass: 'via-orange-main' },
    { id: 'contacto', label: 'Contacto', colorText: 'text-green-main', gradientClass: 'via-green-main' },
  ];

  return (
    <header className='flex items-center justify-between px-6 md:px-12 py-4 bg-white/90 backdrop-blur-md z-50 fixed w-full top-0 left-0 border-b border-gray-200 shadow-sm transition-all duration-300'>
      
      <div className='text-2xl font-bold select-none cursor-pointer z-50'>
        <span className='text-pink-main'>La </span>
        <a href='#inicio' className='bg-linear-to-r from-pink-main via-blue-main to-yellow-main bg-clip-text text-transparent'>
          Grafi-K
        </a>
      </div>

      <nav>
        <ul className='hidden md:flex items-center gap-x-6 font-medium text-gray-600'>
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <li key={link.id} className='relative group'>
                <a
                  href={`#${link.id}`}
                  onClick={() => setActiveSection(link.id)}
                  className={`
                    px-3 py-2 rounded-lg transition-all duration-300 
                    hover:bg-gray-100/50 hover:${link.colorText}
                    ${isActive ? `${link.colorText} bg-gray-50` : ''} 
                  `}
                >
                  {link.label}
                </a>
                <div className={`
                  absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 transition-all duration-300
                  bg-linear-to-r from-transparent ${link.gradientClass} to-transparent
                  ${isActive ? 'w-3/4' : 'w-0 group-hover:w-3/4'}
                `}></div>
              </li>
            );
          })}
        </ul>
      </nav>

      <button
        type="button"
        aria-label="Abrir menú principal"
        aria-expanded={menuOpen}
        className='md:hidden flex flex-col h-12 w-12 justify-center items-center group relative z-50'
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div className={`${hamburgerLine} ${menuOpen ? 'rotate-45 translate-y-3 opacity-100' : 'opacity-100'}`} />
        <div className={`${hamburgerLine} ${menuOpen ? 'opacity-0' : 'opacity-100'}`} />
        <div className={`${hamburgerLine} ${menuOpen ? '-rotate-45 -translate-y-3 opacity-100' : 'opacity-100'}`} />
      </button>

      <nav
        className={`
            fixed inset-0 h-screen w-screen
            bg-white/95 backdrop-blur-xl
            flex flex-col items-center justify-center gap-10 md:hidden z-40
            transition-all duration-300 ease-in-out
            ${menuOpen ? 'translate-x-0 opacity-100 visible' : 'translate-x-full opacity-0 invisible'}
          `}
      >
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={() => {
                setMenuOpen(false);
                setActiveSection(link.id);
            }}
            className={`text-3xl font-bold tracking-tight transition-all duration-300
                ${activeSection === link.id ? link.colorText : 'text-gray-600'}
            `}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}