import { useState, useEffect } from 'react';
import { Coffee, Menu, X, PawPrint } from 'lucide-react';

const links = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Menú', href: '#menu' },
  { label: 'Adopciones', href: '#adopciones' },
  { label: 'Promociones', href: '#promociones' },
  { label: 'Ubicación', href: '#ubicacion' },
  { label: 'Historia', href: '#historia' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-[0_4px_20px_rgba(167,139,250,0.15)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 h-16 sm:h-20 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-lilac to-mint flex items-center justify-center shadow-md transition-transform group-hover:scale-110">
            <PawPrint className="w-5 h-5 text-white" strokeWidth={2.5} />
          </div>
          <span
            className={`font-serif text-lg sm:text-xl font-semibold tracking-tight transition-colors ${
              scrolled ? 'text-ink' : 'text-white'
            }`}
          >
            Café Patitas
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all hover:scale-105 ${
                scrolled
                  ? 'text-ink/70 hover:text-lilac hover:bg-lilac/10'
                  : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>

        <button
          className={`lg:hidden p-2 rounded-lg transition-colors ${
            scrolled ? 'text-ink hover:bg-lilac/10' : 'text-white hover:bg-white/10'
          }`}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-lilac/10">
          <div className="flex flex-col px-5 py-4 gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-xl text-ink/80 hover:text-lilac hover:bg-lilac/10 font-medium transition-colors flex items-center gap-2"
              >
                <Coffee className="w-4 h-4 text-mint" />
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
