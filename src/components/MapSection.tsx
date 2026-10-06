import { MapPin, Navigation } from 'lucide-react'
import { COMPANY, MAPS_EMBED_URL, MAPS_LINK_URL } from '../data/site'
import { Reveal } from './ui/Reveal'

export function MapSection() {
  return (
    <section id="localizacao" className="relative w-full overflow-hidden bg-navy-700">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-px bg-gradient-to-r from-transparent via-brand/70 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent" />

      <iframe
        title={`Localização da ${COMPANY.name} — ${COMPANY.addressFull}`}
        src={MAPS_EMBED_URL}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        className="block h-[400px] w-full border-0 saturate-[0.85] sm:h-[460px] lg:h-[520px]"
      />

      <div className="pointer-events-none absolute inset-0 z-10">
        <div className="shell relative h-full">
          <Reveal
            direction="up"
            amount={0.3}
            className="pointer-events-auto absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-auto sm:max-w-sm"
          >
            <div className="tech-corners relative border border-white/15 bg-navy-800/95 p-5 text-white shadow-soft backdrop-blur sm:p-6">
              <span className="absolute left-0 top-0 h-8 w-8 border-l-2 border-t-2 border-brand" />
              <p className="eyebrow eyebrow-light">Localização</p>
              <p className="mt-4 flex items-start gap-3 font-display text-[15px] font-semibold leading-snug sm:text-base">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand" strokeWidth={1.8} />
                <span>
                  {COMPANY.address}
                  <br />
                  {COMPANY.district} — {COMPANY.city}/{COMPANY.state}
                </span>
              </p>
              <a
                href={MAPS_LINK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost-light mt-4 !px-4 !py-2.5 !text-[13px] sm:mt-5 sm:!px-5 sm:!py-3 sm:!text-sm"
              >
                <Navigation className="h-4 w-4" strokeWidth={2} />
                Abrir no Google Maps
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
