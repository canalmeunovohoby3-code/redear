import { ArrowUp, MapPin, MessageCircle, Phone } from 'lucide-react'
import { COMPANY, MAPS_LINK_URL, NAV_LINKS, SOLUTIONS } from '../data/site'
import { MEDIA } from '../data/media'
import { DEFAULT_WHATSAPP_MESSAGE, whatsappLink } from '../lib/whatsapp'
import { Logo } from './ui/Logo'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-navy-800 text-white">
      <div className="pointer-events-none absolute inset-0 bg-grid-tech-light bg-grid-64 opacity-40" />
      <div className="pointer-events-none absolute -left-20 top-0 h-[300px] w-[300px] rounded-full bg-brand/10 blur-[110px]" />

      <div className="shell relative py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo src={MEDIA.logo} white heightClass="h-9 sm:h-10" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/60">
              Sistemas de ar comprimido com foco em tubulações e acessórios. Fornecimento de materiais
              e montagem para todo o Brasil.
            </p>
            <a
              href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-3 border border-white/20 px-5 py-3.5 transition-colors duration-300 hover:border-brand hover:bg-white/5"
            >
              <MessageCircle className="h-4 w-4 text-brand" strokeWidth={2.2} />
              <span className="font-display text-sm font-semibold">{COMPANY.phoneDisplay}</span>
            </a>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/40">Navegação</h3>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 transition-colors duration-200 hover:text-brand"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/40">Soluções</h3>
            <ul className="mt-5 space-y-3">
              {SOLUTIONS.map((sol) => (
                <li key={sol.key}>
                  <a
                    href="#solucoes"
                    className="text-sm text-white/70 transition-colors duration-200 hover:text-brand"
                  >
                    Rede em {sol.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/40">Atendimento</h3>
            <ul className="mt-5 space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" strokeWidth={1.8} />
                <a
                  href={MAPS_LINK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm leading-relaxed text-white/70 transition-colors duration-200 hover:text-brand"
                >
                  {COMPANY.address}
                  <br />
                  {COMPANY.district} — {COMPANY.city}/{COMPANY.state}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand" strokeWidth={1.8} />
                <span className="text-sm text-white/70">{COMPANY.phoneDisplay}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                <span className="text-sm text-white/70">Atendimento em {COMPANY.coverage}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                <span className="text-sm text-white/70">Materiais e montagem de tubulações</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/40">
            © {year} {COMPANY.name}. Todos os direitos reservados.
          </p>
          <a
            href="#inicio"
            className="group inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-white/50 transition-colors hover:text-brand"
          >
            Voltar ao topo
            <span className="flex h-8 w-8 items-center justify-center border border-white/20 transition-colors group-hover:border-brand">
              <ArrowUp className="h-3.5 w-3.5" strokeWidth={2} />
            </span>
          </a>
        </div>
      </div>
    </footer>
  )
}
