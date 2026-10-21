import { useState } from 'react';
import { animals, type Animal } from '@/data/animals';
import { X, PawPrint, Heart, Cat, Dog } from 'lucide-react';

const typeOptions: (Animal['type'] | 'Todos')[] = ['Todos', 'Perro', 'Gato'];
const sexOptions: (Animal['sex'] | 'Todos')[] = ['Todos', 'Macho', 'Hembra'];
const ageRanges = [
  { label: 'Todas', min: 0, max: 99 },
  { label: 'Cachorro', min: 0, max: 1 },
  { label: 'Joven', min: 1.5, max: 3 },
  { label: 'Adulto', min: 3.5, max: 99 },
];

export default function AdoptionsSection() {
  const [type, setType] = useState<Animal['type'] | 'Todos'>('Todos');
  const [sex, setSex] = useState<Animal['sex'] | 'Todos'>('Todos');
  const [ageRange, setAgeRange] = useState(0);
  const [selected, setSelected] = useState<Animal | null>(null);

  const filtered = animals.filter((a) => {
    if (type !== 'Todos' && a.type !== type) return false;
    if (sex !== 'Todos' && a.sex !== sex) return false;
    const r = ageRanges[ageRange];
    if (a.ageValue < r.min || a.ageValue > r.max) return false;
    return true;
  });

  return (
    <section id="adopciones" className="py-20 sm:py-28 bg-gradient-to-b from-sand/30 to-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-10">
          <span className="text-mint font-semibold text-sm uppercase tracking-widest">
            Refugio Patitas
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-ink font-bold mt-2 mb-4">
            Ellos buscan un hogar
          </h2>
          <p className="text-ink/60 max-w-2xl mx-auto leading-relaxed">
            Cada uno de nuestros animales está en proceso de adopción. Conócelos,
            enamórate y dales la familia que merecen.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap justify-center items-center mb-12">
          <div className="inline-flex bg-white rounded-full p-1 shadow-sm border border-lilac/10">
            {typeOptions.map((t) => (
              <button
                key={t}
                onClick={() => setType(t)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-1.5 ${
                  type === t
                    ? 'bg-lilac text-white shadow-md'
                    : 'text-ink/50 hover:text-lilac'
                }`}
              >
                {t === 'Perro' && <Dog className="w-4 h-4" />}
                {t === 'Gato' && <Cat className="w-4 h-4" />}
                {t}
              </button>
            ))}
          </div>

          <div className="inline-flex bg-white rounded-full p-1 shadow-sm border border-lilac/10">
            {sexOptions.map((s) => (
              <button
                key={s}
                onClick={() => setSex(s)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  sex === s
                    ? 'bg-mint text-white shadow-md'
                    : 'text-ink/50 hover:text-mint'
                }`}
              >
                {s}
              </button>
            ))}
          </div>

          <div className="inline-flex bg-white rounded-full p-1 shadow-sm border border-lilac/10">
            {ageRanges.map((r, i) => (
              <button
                key={r.label}
                onClick={() => setAgeRange(i)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  ageRange === i
                    ? 'bg-lilac-dark text-white shadow-md'
                    : 'text-ink/50 hover:text-lilac-dark'
                }`}
              >
                {r.label}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((animal, idx) => (
            <div
              key={animal.id}
              className="group rounded-3xl overflow-hidden bg-white shadow-md hover:shadow-xl hover:shadow-lilac/20 transition-all duration-500 hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${idx * 80}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={animal.image}
                  alt={animal.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm flex items-center gap-1.5">
                  {animal.type === 'Perro' ? (
                    <Dog className="w-3.5 h-3.5 text-lilac" />
                  ) : (
                    <Cat className="w-3.5 h-3.5 text-mint" />
                  )}
                  <span className="text-xs font-semibold text-ink">{animal.type}</span>
                </div>
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-lilac/90 backdrop-blur-sm text-white text-xs font-semibold">
                  {animal.sex}
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-serif text-2xl text-ink font-bold">{animal.name}</h3>
                  <span className="text-sm text-ink/50 font-medium">{animal.age}</span>
                </div>
                <button
                  onClick={() => setSelected(animal)}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-mint to-mint-dark text-white font-semibold shadow-md hover:shadow-lg hover:scale-[1.02] transition-all"
                >
                  <PawPrint className="w-4 h-4" />
                  Conóceme
                </button>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-ink/50 py-12 text-lg">
            No encontramos animales con esos filtros. Prueba con otra combinación.
          </p>
        )}
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-ink/70 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-ink hover:bg-white shadow-md transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={selected.image}
                alt={selected.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6">
              <div className="flex items-center gap-2 mb-1">
                {selected.type === 'Perro' ? (
                  <Dog className="w-5 h-5 text-lilac" />
                ) : (
                  <Cat className="w-5 h-5 text-mint" />
                )}
                <span className="text-sm font-medium text-ink/50">{selected.type}</span>
              </div>
              <h3 className="font-serif text-3xl text-ink font-bold mb-2">{selected.name}</h3>
              <div className="flex gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-lilac/10 text-lilac text-sm font-medium">
                  {selected.age}
                </span>
                <span className="px-3 py-1 rounded-full bg-mint/10 text-mint text-sm font-medium">
                  {selected.sex}
                </span>
              </div>
              <p className="text-ink/70 leading-relaxed mb-6">{selected.description}</p>
              <a
                href="#ubicacion"
                onClick={() => setSelected(null)}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-gradient-to-r from-lilac to-lilac-dark text-white font-semibold shadow-lg hover:scale-[1.02] transition-all"
              >
                <Heart className="w-5 h-5" />
                Quiero adoptar
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
