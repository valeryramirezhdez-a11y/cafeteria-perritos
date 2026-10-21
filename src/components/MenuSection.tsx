import { useState } from 'react';
import { menuItems, type MenuItem } from '@/data/menu';

const categories = [
  { id: 'calientes', label: 'Cafés Calientes', icon: '☕' },
  { id: 'fríos', label: 'Cafés Fríos', icon: '🧊' },
  { id: 'frappes', label: 'Frappés', icon: '🥤' },
  { id: 'comida', label: 'Comida Ligera', icon: '🥪' },
  { id: 'vegano', label: 'Veganos', icon: '🌱' },
] as const;

export default function MenuSection() {
  const [active, setActive] = useState<MenuItem['category']>('calientes');
  const filtered = menuItems.filter((i) => i.category === active);

  return (
    <section id="menu" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-12">
          <span className="text-mint font-semibold text-sm uppercase tracking-widest">
            Nuestro menú
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-ink font-bold mt-2 mb-4">
            Cada bebida lleva un nombre con historia
          </h2>
          <p className="text-ink/60 max-w-2xl mx-auto leading-relaxed">
            Todos nuestros cafés son de origen chiapaneco de altura. Cada nombre
            honra a un animal del refugio que busca un hogar.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`px-4 sm:px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                active === cat.id
                  ? 'bg-gradient-to-r from-lilac to-lilac-dark text-white shadow-lg shadow-lilac/25 scale-105'
                  : 'bg-lilac/8 text-ink/60 hover:bg-lilac/15 hover:text-lilac'
              }`}
            >
              <span className="mr-1.5">{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
          {filtered.map((item, idx) => (
            <div
              key={item.id}
              className="group relative rounded-3xl overflow-hidden bg-sand/30 shadow-sm hover:shadow-xl hover:shadow-lilac/15 transition-all duration-500 hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${idx * 60}ms` }}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />

              <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5">
                <h3 className="font-serif text-lg sm:text-xl text-white font-semibold leading-tight mb-1">
                  {item.name}
                </h3>
                <div className="flex items-center justify-between mt-2">
                  <span className="inline-flex items-center gap-1.5 text-xs text-mint font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-mint" />
                    En adopción: {item.animal}
                  </span>
                  <span className="text-white font-bold text-lg">
                    ${item.price}
                  </span>
                </div>
              </div>
              <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/25 text-white text-xs font-medium">
                ${item.price}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
