type LogoProps = {
  variant?: 'dark' | 'light'
  className?: string
  src?: string
  alt?: string
  plate?: boolean
  white?: boolean
  heightClass?: string
}

export function LogoMark({ variant = 'dark', src, alt = 'RedeAr' }: LogoProps) {
  if (src) {
    return <img src={src} alt={alt} className="h-full w-auto object-contain" loading="eager" />
  }

  const base = variant === 'dark' ? '#003468' : '#FFFFFF'

  return (
    <svg viewBox="0 0 44 44" className="h-full w-auto" role="img" aria-label="RedeAr">
      <rect x="1" y="1" width="42" height="42" rx="7" fill={base} />
      <path
        d="M10 30V14h7.6c3.3 0 5.4 1.7 5.4 4.6 0 2.2-1.2 3.8-3.2 4.4l3.6 7h-3.4l-3-6.1h-4.2V30H10Zm3.4-8.9h4c1.6 0 2.5-.8 2.5-2.1s-.9-2.1-2.5-2.1h-4v4.2Z"
        fill="#FFFFFF"
      />
      <path
        d="M28.5 14h3.3l3.9 7v-7h3.1v16h-3.1v-5l-3.9 5h-3.3l4.4-7.5-4.4-8.5Z"
        fill="#05B0FA"
      />
      <path d="M9 34h26" stroke="#05B0FA" strokeOpacity="0.55" strokeWidth="1.6" strokeDasharray="2 3" />
    </svg>
  )
}

export function Logo({
  variant = 'dark',
  className = '',
  src,
  alt = 'RedeAr — Soluções em ar comprimido',
  plate = false,
  white = false,
  heightClass = 'h-8 sm:h-9 lg:h-10',
}: LogoProps) {
  if (src) {
    const image = (
      <img
        src={src}
        alt={alt}
        className={`${heightClass} w-auto object-contain ${white ? 'brightness-0 invert' : ''}`}
        loading="eager"
      />
    )
    return (
      <a href="#inicio" aria-label="RedeAr — Início" className={`group inline-flex items-center ${className}`}>
        {plate ? (
          <span className="inline-flex items-center bg-white px-3.5 py-2.5 shadow-[0_10px_30px_-18px_rgba(0,0,0,0.6)] transition-transform duration-300 group-hover:scale-[1.02]">
            {image}
          </span>
        ) : (
          image
        )}
      </a>
    )
  }

  const text = variant === 'dark' ? 'text-navy-600' : 'text-white'
  const sub = variant === 'dark' ? 'text-steel-500' : 'text-white/60'

  return (
    <a href="#inicio" aria-label="RedeAr — Início" className={`group flex items-center gap-3 ${className}`}>
      <span className="h-9 w-9 shrink-0 transition-transform duration-300 group-hover:scale-105 sm:h-10 sm:w-10">
        <LogoMark variant={variant} />
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-display text-lg font-bold tracking-tight sm:text-xl ${text}`}>
          Rede<span className="text-brand">Ar</span>
        </span>
        <span className={`mt-0.5 font-mono text-[9px] font-medium uppercase tracking-[0.28em] ${sub}`}>
          Ar Comprimido
        </span>
      </span>
    </a>
  )
}
