import type { ReactNode } from 'react'

type Corner = 'tl' | 'tr' | 'bl' | 'br'

type MediaFrameProps = {
  children: ReactNode
  tone?: 'light' | 'dark'
  variant?: number
  className?: string
}

const POS: Record<Corner, { at: string; l: string; cap: string }> = {
  tl: { at: 'left-0 top-0', l: 'border-l-2 border-t-2', cap: 'left-[3px] top-[3px]' },
  tr: { at: 'right-0 top-0', l: 'border-r-2 border-t-2', cap: 'right-[3px] top-[3px]' },
  bl: { at: 'left-0 bottom-0', l: 'border-l-2 border-b-2', cap: 'left-[3px] bottom-[3px]' },
  br: { at: 'right-0 bottom-0', l: 'border-r-2 border-b-2', cap: 'right-[3px] bottom-[3px]' },
}

/**
 * Moldura EXTERNA tecnológica.
 * Toda a estrutura fica FORA da mídia — imagem/vídeo permanecem 100% limpos.
 */
export function MediaFrame({ children, tone = 'light', variant = 0, className = '' }: MediaFrameProps) {
  const accentPair: Corner[] = variant % 2 === 0 ? ['tl', 'br'] : ['tr', 'bl']
  const isAccent = (c: Corner) => accentPair.includes(c)
  const allCorners: Corner[] = ['tl', 'tr', 'bl', 'br']
  const mutedL = tone === 'dark' ? 'border-white/25' : 'border-navy-800/40'
  const guide = tone === 'dark' ? 'border-brand/45' : 'border-brand/45'

  return (
    <div className={`relative ${className}`}>
      {/* camada externa: guias de prancha (fora da faixa estrutural) */}
      <span
        className={`pointer-events-none absolute -left-2 -top-2 hidden h-10 w-10 border-l-2 border-t-2 sm:block ${guide}`}
        aria-hidden="true"
      />
      <span
        className={`pointer-events-none absolute -bottom-2 -right-2 hidden h-10 w-10 border-b-2 border-r-2 sm:block ${guide}`}
        aria-hidden="true"
      />

      {/* faixa estrutural externa (azul institucional) */}
      <div className="relative bg-navy-600 p-2.5 shadow-[0_28px_60px_-30px_rgba(0,52,104,0.65)] sm:p-3.5">
        {/* leve brilho azul na faixa */}
        <span
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, rgba(5,176,250,0.14), transparent 42%, transparent 58%, rgba(5,176,250,0.10))',
          }}
          aria-hidden="true"
        />

        {/* cantos técnicos (sobre a faixa, fora da mídia) */}
        {allCorners.map((c) => {
          const p = POS[c]
          const accent = isAccent(c)
          return (
            <span
              key={c}
              className={`pointer-events-none absolute h-4 w-4 ${p.at} ${p.l} ${
                accent ? 'border-brand' : mutedL
              }`}
              aria-hidden="true"
            >
              <span
                className={`absolute h-1 w-1 ${p.cap} ${accent ? 'bg-brand' : 'bg-navy-800/60'}`}
              />
            </span>
          )
        })}

        {/* segmentos interrompidos */}
        <span
          className="pointer-events-none absolute left-8 top-[6px] h-[3px] w-16 bg-brand/85 shadow-[0_0_6px_rgba(5,176,250,0.45)] sm:w-24"
          aria-hidden="true"
        />
        <span
          className="pointer-events-none absolute bottom-[6px] right-8 h-0 w-16 border-t-2 border-dashed border-brand/55 sm:w-24"
          aria-hidden="true"
        />
        <span
          className="pointer-events-none absolute left-[6px] top-1/2 hidden h-12 w-[3px] -translate-y-1/2 bg-brand/70 sm:block"
          aria-hidden="true"
        />
        <span
          className="pointer-events-none absolute right-[6px] top-1/3 hidden h-9 w-[3px] bg-brand/50 sm:block"
          aria-hidden="true"
        />

        {/* pontos de conexão */}
        <span
          className="pointer-events-none absolute left-1/2 top-[6px] hidden h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-brand shadow-[0_0_7px_rgba(5,176,250,0.85)] sm:block"
          aria-hidden="true"
        />
        <span
          className="pointer-events-none absolute right-[6px] top-[62%] hidden h-1.5 w-1.5 rounded-full bg-brand shadow-[0_0_7px_rgba(5,176,250,0.85)] sm:block"
          aria-hidden="true"
        />

        {/* mídia — 100% limpa por dentro */}
        <div className="relative overflow-hidden bg-navy-800">{children}</div>
      </div>
    </div>
  )
}
