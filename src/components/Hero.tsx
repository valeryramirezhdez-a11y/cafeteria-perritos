import { PawPrint, Coffee, Heart } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/1855214/pexels-photo-1855214.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400"
          alt="Interior del café"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-ink/80 via-ink/60 to-lilac/50" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 py-24 w-full">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 mb-6 animate-fade-in-up">
            <PawPrint className="w-4 h-4 text-mint" />
            <span className="text-white text-sm font-medium tracking-wide">
              Café de especialidad · Chiapas
            </span>
          </div>

          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-white font-bold leading-[1.1] mb-6 animate-fade-in-up animation-delay-100">
            Cada taza, <br />
            <span className="bg-gradient-to-r from-mint to-lilac-light bg-clip-text text-transparent">
              una segunda oportunidad
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-white/85 leading-relaxed mb-8 max-w-xl animate-fade-in-up animation-delay-200">
            Café de origen chiapaneco con nombres de animales en proceso de adopción.
            Disfruta tu bebida favorita y conoce a los animales que buscan un hogar.
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-300">
            <a
              href="#menu"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-lilac to-lilac-dark text-white font-semibold shadow-lg shadow-lilac/30 hover:shadow-xl hover:shadow-lilac/40 hover:scale-105 transition-all"
            >
              <Coffee className="w-5 h-5" />
              Ver el menú
            </a>
            <a
              href="#adopciones"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 text-white font-semibold hover:bg-white/25 hover:scale-105 transition-all"
            >
              <Heart className="w-5 h-5 text-mint" />
              Conoce los animales
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}
