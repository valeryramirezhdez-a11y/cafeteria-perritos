import { MapPin, Clock, Phone, Instagram, Facebook } from 'lucide-react';

export default function LocationSection() {
  return (
    <section id="ubicacion" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-12">
          <span className="text-mint font-semibold text-sm uppercase tracking-widest">
            Visítanos
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-ink font-bold mt-2 mb-4">
            Ven a conocernos
          </h2>
          <p className="text-ink/60 max-w-2xl mx-auto leading-relaxed">
            Te esperamos con café recién molido y muchos amigos peludos que querrán conocerte.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Info */}
          <div className="flex flex-col gap-5 order-2 lg:order-1">
            <InfoCard
              icon={<MapPin className="w-6 h-6 text-lilac" />}
              title="Dirección"
              lines={['Av. Cristóbal Colón 145', 'Centro Histórico, San Cristóbal de las Casas', 'Chiapas, México']}
            />
            <InfoCard
              icon={<Clock className="w-6 h-6 text-mint" />}
              title="Horario"
              lines={['Lunes a Viernes: 8:00 — 20:00', 'Sábados: 9:00 — 21:00', 'Domingos: 9:00 — 15:00']}
            />
            <InfoCard
              icon={<Phone className="w-6 h-6 text-lilac" />}
              title="Contacto"
              lines={['+52 967 123 4567', 'hola@cafepatitas.mx']}
            />
            <div className="flex gap-3 mt-2">
              <a
                href="#"
                className="w-12 h-12 rounded-2xl bg-lilac/10 flex items-center justify-center text-lilac hover:bg-lilac hover:text-white transition-all hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-2xl bg-mint/10 flex items-center justify-center text-mint hover:bg-mint hover:text-white transition-all hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="order-1 lg:order-2 rounded-3xl overflow-hidden shadow-lg min-h-[400px] border border-lilac/10">
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=-92.544%2C16.735%2C-92.524%2C16.755&layer=mapnik&marker=16.745%2C-92.534"
              className="w-full h-full min-h-[400px] border-0"
              title="Ubicación del café"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  icon,
  title,
  lines,
}: {
  icon: React.ReactNode;
  title: string;
  lines: string[];
}) {
  return (
    <div className="flex items-start gap-4 p-5 rounded-2xl bg-sand/30 hover:bg-sand/50 transition-colors">
      <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-ink mb-1">{title}</h3>
        {lines.map((l, i) => (
          <p key={i} className="text-ink/60 text-sm leading-relaxed">
            {l}
          </p>
        ))}
      </div>
    </div>
  );
}
