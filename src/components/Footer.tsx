import { PawPrint, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-ink py-12">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col items-center text-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-lilac to-mint flex items-center justify-center">
              <PawPrint className="w-5 h-5 text-white" strokeWidth={2.5} />
            </div>
            <span className="font-serif text-xl text-white font-semibold">
              Café Patitas
            </span>
          </div>
          <p className="text-white/50 max-w-md leading-relaxed">
            Café de especialidad de origen chiapaneco. Cada taza ayuda a un
            animal del refugio a encontrar un hogar.
          </p>
          <div className="flex items-center gap-2 text-white/40 text-sm">
            <span>Hecho con</span>
            <Heart className="w-4 h-4 text-lilac fill-lilac" />
            <span>en Chiapas, México</span>
          </div>
          <p className="text-white/30 text-xs mt-2">
            © 2026 Café Patitas · Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
