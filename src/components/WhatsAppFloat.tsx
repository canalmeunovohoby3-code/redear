import { useReducedMotion } from 'framer-motion'
import { COMPANY } from '../data/site'
import { DEFAULT_WHATSAPP_MESSAGE, whatsappLink } from '../lib/whatsapp'

function WhatsAppGlyph({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.06 2.88 1.21 3.08c.15.2 2.09 3.19 5.07 4.47.71.31 1.26.49 1.69.63.71.23 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35ZM12.05 21.5h-.01a9.4 9.4 0 0 1-4.79-1.31l-.34-.2-3.56.93.95-3.47-.22-.36a9.38 9.38 0 0 1-1.44-5.02c0-5.19 4.23-9.41 9.42-9.41 2.52 0 4.88.98 6.66 2.76a9.35 9.35 0 0 1 2.76 6.66c0 5.19-4.23 9.42-9.43 9.42Zm8.02-17.44A11.32 11.32 0 0 0 12.05 0C5.83 0 .77 5.05.77 11.27c0 1.99.52 3.93 1.5 5.64L.68 24l7.28-1.91a11.24 11.24 0 0 0 5.38 1.37h.01c6.22 0 11.28-5.06 11.28-11.28 0-3.01-1.17-5.85-3.3-7.98Z" />
    </svg>
  )
}

export function WhatsAppFloat() {
  const reduce = useReducedMotion()

  return (
    <div className="group fixed bottom-5 right-5 z-[65] flex items-center gap-3 sm:bottom-6 sm:right-6">
      <span className="pointer-events-none hidden translate-x-2 items-center gap-2.5 border border-steel-200 bg-white/95 py-2.5 pl-4 pr-3 opacity-0 shadow-card backdrop-blur transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:flex">
        <span className="flex h-2 w-2 rounded-full bg-brand" />
        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-navy-600">Fale conosco</span>
      </span>

      <a
        href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Falar com a ${COMPANY.name} no WhatsApp — ${COMPANY.phoneDisplay}`}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_16px_40px_-12px_rgba(37,211,102,0.8)] transition-transform duration-300 hover:scale-105 sm:h-16 sm:w-16"
      >
        {!reduce && (
          <span className="absolute inset-0 rounded-full bg-[#25D366]/50 animate-pulse-ring" aria-hidden="true" />
        )}
        <span className="absolute inset-0 rounded-full border border-white/40" aria-hidden="true" />
        <WhatsAppGlyph className="relative h-7 w-7 sm:h-8 sm:w-8" />
      </a>
    </div>
  )
}
