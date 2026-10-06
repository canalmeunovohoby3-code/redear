import { ImagePlus } from 'lucide-react'
import { useState, type ReactNode } from 'react'

type MediaPlaceholderProps = {
  src?: string
  alt?: string
  label?: string
  hint?: string
  className?: string
  ratio?: string
  overlay?: ReactNode
  tone?: 'light' | 'dark'
  priority?: boolean
  showTag?: boolean
  showLabel?: boolean
  showHint?: boolean
}

export function MediaPlaceholder({
  src,
  alt = 'Imagem RedeAr',
  label = 'Imagem',
  hint = 'Substituir por foto real',
  className = '',
  ratio = 'aspect-[4/3]',
  overlay,
  tone = 'light',
  priority = false,
  showTag = true,
  showLabel = true,
  showHint = true,
}: MediaPlaceholderProps) {
  const [loaded, setLoaded] = useState(false)

  if (src) {
    return (
      <div className={`relative overflow-hidden ${ratio} ${className}`}>
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          onLoad={() => setLoaded(true)}
          className={`h-full w-full object-cover transition-[opacity,transform] duration-[900ms] ease-out ${
            loaded ? 'scale-100 opacity-100' : 'scale-105 opacity-0'
          }`}
        />
        {overlay}
      </div>
    )
  }

  const isDark = tone === 'dark'

  return (
    <div
      className={`group/media relative overflow-hidden ${ratio} ${className} ${
        isDark ? 'bg-navy-700' : 'bg-steel-100'
      }`}
      role="img"
      aria-label={`${label} — espaço reservado para imagem real`}
    >
      <div
        className={`absolute inset-0 ${
          isDark ? 'bg-grid-tech-light' : 'bg-grid-tech'
        } bg-grid-32 opacity-70`}
      />
      <div
        className={`absolute inset-0 bg-gradient-to-br ${
          isDark ? 'from-navy-800/60 via-transparent to-navy-900/70' : 'from-white via-transparent to-steel-200/70'
        }`}
      />
      <div className="absolute left-0 top-0 h-px w-16 bg-brand" />
      <div className="absolute bottom-0 right-0 h-16 w-px bg-brand/60" />

      <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover/media:translate-x-full" />

      <div className="relative flex h-full w-full flex-col items-center justify-center gap-3 px-6 text-center">
        <span
          className={`flex h-12 w-12 items-center justify-center border ${
            isDark ? 'border-white/25 text-brand' : 'border-steel-300 text-navy-400'
          }`}
        >
          <ImagePlus className="h-5 w-5" strokeWidth={1.6} />
        </span>
        {showLabel && (
          <span
            className={`font-mono text-[10px] font-medium uppercase tracking-[0.2em] ${
              isDark ? 'text-white/80' : 'text-navy-500'
            }`}
          >
            {label}
          </span>
        )}
        {showHint && (
          <span className={`text-[11px] ${isDark ? 'text-white/45' : 'text-steel-400'}`}>{hint}</span>
        )}
      </div>

      {showTag && (
        <span
          className={`absolute bottom-3 left-3 font-mono text-[9px] uppercase tracking-[0.2em] ${
            isDark ? 'text-white/35' : 'text-steel-400'
          }`}
        >
          [ placeholder ]
        </span>
      )}
    </div>
  )
}
