import { PawPrint, Heart, Leaf } from 'lucide-react';

export default function HistorySection() {
  return (
    <section id="historia" className="py-20 sm:py-28 bg-gradient-to-b from-white to-sand/30">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-mint font-semibold text-sm uppercase tracking-widest">
              Nuestra historia
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-ink font-bold mt-2 mb-6 leading-tight">
              Un café nacido del amor por los animales
            </h2>
            <div className="space-y-4 text-ink/70 leading-relaxed">
              <p>
                Café Patitas nació en 2021 en San Cristóbal de las Casas, Chiapas,
                de una idea simple: unir dos pasiones —el café de especialidad y
                el rescate animal— en un solo lugar.
              </p>
              <p>
                Trabajamos directamente con productores chiapanecos de altura,
                garantizando taza de origen y comercio justo. Cada bebida lleva
                el nombre de un animal real que vive en nuestro refugio asociado
                y que está en proceso de adopción.
              </p>
              <p>
                Una parte de cada venta se destina al refugio para alimento,
                atención veterinaria y cuidados. Cuando un animal es adoptado,
                su nombre se retira del menú con honor y damos la bienvenida a
                un nuevo amigo que necesita visibilidad.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-8">
              <Stat icon={<PawPrint className="w-5 h-5" />} value="120+" label="Adopciones" />
              <Stat icon={<Heart className="w-5 h-5" />} value="45" label="Animales activos" />
              <Stat icon={<Leaf className="w-5 h-5" />} value="100%" label="Origen Chiapas" />
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-3xl overflow-hidden aspect-[3/4] shadow-lg">
                <img
                  src="https://images.pexels.com/photos/15860802/pexels-photo-15860802.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="Interior del café"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-3xl overflow-hidden aspect-[3/4] shadow-lg mt-8">
                <img
                  src="https://images.pexels.com/photos/38811161/pexels-photo-38811161.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="Granos de café"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 w-28 h-28 rounded-full bg-gradient-to-br from-mint to-mint-dark opacity-20 blur-2xl" />
            <div className="absolute -top-4 -right-4 w-28 h-28 rounded-full bg-gradient-to-br from-lilac to-lilac-dark opacity-20 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="text-center p-4 rounded-2xl bg-white shadow-sm">
      <div className="w-10 h-10 rounded-xl bg-lilac/10 flex items-center justify-center text-lilac mx-auto mb-2">
        {icon}
      </div>
      <div className="font-serif text-2xl font-bold text-ink">{value}</div>
      <div className="text-xs text-ink/50 mt-0.5">{label}</div>
    </div>
  );
}
