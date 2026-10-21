import { useRef, useState, useEffect } from 'react';
import { promoItems } from '@/data/menu';
import { ChevronLeft, ChevronRight, Gift, Tag } from 'lucide-react';

export default function PromotionsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  const update = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 10);
    setCanRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    update();
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener('scroll', update);
    window.addEventListener('resize', update);
    return () => {
      el.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  const scroll = (dir: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === 'left' ? -320 : 320, behavior: 'smooth' });
  };

  return (
    <section id="promociones" className="py-20 sm:py-28 bg-gradient-to-br from-lilac/8 via-white to-mint/8">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 text-mint font-semibold text-sm uppercase tracking-widest">
            <Gift className="w-4 h-4" />
            Promociones
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-ink font-bold mt-2 mb-4">
            Ayuda al refugio y ahorra
          </h2>
          <p className="text-ink/60 max-w-2xl mx-auto leading-relaxed">
            Por cada donación en dinero o especie para los animales del refugio,
            obtienes un <span className="font-bold text-lilac">15% de descuento</span> en productos seleccionados.
          </p>
        </div>

        <div className="relative">
          {/* Arrows */}
          {canLeft && (
            <button
              onClick={() => scroll('left')}
              className="absolute -left-2 sm:left-0 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white shadow-lg flex items-center justify-center text-lilac hover:scale-110 hover:bg-lilac hover:text-white transition-all"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}
          {canRight && (
            <button
              onClick={() => scroll('right')}
              className="absolute -right-2 sm:right-0 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white shadow-lg flex items-center justify-center text-lilac hover:scale-110 hover:bg-lilac hover:text-white transition-all"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}

          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide scroll-smooth"
          >
            {promoItems.map((item) => (
              <div
                key={item.id}
                className="flex-shrink-0 w-[260px] sm:w-[300px] snap-center group rounded-3xl overflow-hidden bg-white shadow-md hover:shadow-xl hover:shadow-lilac/20 transition-all duration-500"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1.5 rounded-full bg-gradient-to-r from-lilac to-lilac-dark text-white text-xs font-bold shadow-lg flex items-center gap-1.5">
                    <Tag className="w-3 h-3" />
                    -15%
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-serif text-lg text-ink font-semibold leading-tight mb-1">
                    {item.name}
                  </h3>
                  <p className="text-xs text-mint font-medium mb-3">
                    En adopción: {item.animal}
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-ink/40 line-through text-sm">
                      ${item.originalPrice}
                    </span>
                    <span className="text-2xl font-bold text-lilac">
                      ${item.discountPrice}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Donation CTA */}
        <div className="mt-12 max-w-2xl mx-auto text-center bg-white rounded-3xl p-8 shadow-md border border-lilac/10">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-mint to-mint-dark mx-auto flex items-center justify-center mb-4">
            <Gift className="w-7 h-7 text-white" />
          </div>
          <h3 className="font-serif text-2xl text-ink font-bold mb-2">
            ¿Quieres donar?
          </h3>
          <p className="text-ink/60 leading-relaxed mb-5">
            Aporta alimento, cobijas o dinero para los animales del refugio y
            recibe tu descuento en cualquiera de los productos en promoción.
          </p>
          <a
            href="#ubicacion"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-mint to-mint-dark text-white font-semibold shadow-lg hover:scale-105 transition-all"
          >
            <Gift className="w-5 h-5" />
            Quiero donar
          </a>
        </div>
      </div>
    </section>
  );
}
