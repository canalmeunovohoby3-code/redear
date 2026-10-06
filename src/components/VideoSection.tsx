import { motion, useReducedMotion } from 'framer-motion'
import { MapPin, Package, Play, Wind } from 'lucide-react'
import { useRef, useState } from 'react'
import { MEDIA } from '../data/media'
import { entrance } from '../lib/motion'
import { MediaFrame } from './ui/MediaFrame'
import { Reveal } from './ui/Reveal'

const HIGHLIGHTS = [
  { icon: Wind, label: 'Soluções em ar comprimido' },
  { icon: Package, label: 'Materiais e tubulações' },
  { icon: MapPin, label: 'Atendimento em todo o Brasil' },
]

export function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)
  const reduce = useReducedMotion()

  const start = () => {
    const v = videoRef.current
    if (!v) return
    v.play().catch(() => {})
  }

  return (
    <section id="video" className="relative scroll-mt-24 overflow-hidden bg-steel-50 py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid-tech bg-grid-64 opacity-50" />
      <div className="shell relative grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
        {/* LEFT — vídeo vertical 9:16 com áudio (mídia limpa + moldura externa) */}
        <div className="lg:col-span-5">
          <motion.div
            {...entrance(reduce, { scale: 0.94, duration: 0.95, amount: 0.25 })}
            className="relative mx-auto w-full max-w-[320px] sm:max-w-[370px] lg:max-w-[400px]"
          >
            <MediaFrame tone="dark" variant={1}>
              <video
                ref={videoRef}
                className="aspect-[9/16] w-full object-cover"
                src={MEDIA.video}
                poster={MEDIA.videoPoster}
                playsInline
                loop
                controls={playing}
                preload="none"
                onPlay={() => setPlaying(true)}
                aria-label="Vídeo institucional da RedeAr"
              />

              {!playing && (
                <button
                  type="button"
                  onClick={start}
                  aria-label="Reproduzir vídeo com áudio"
                  className="group absolute inset-0 z-40 flex flex-col items-center justify-center gap-4"
                >
                  <span className="absolute h-20 w-20 rounded-full bg-brand/40 animate-pulse-ring" />
                  <span className="absolute h-24 w-24 rounded-full border border-brand/30" />
                  <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-brand text-navy-900 shadow-[0_20px_50px_-12px_rgba(5,176,250,0.9)] transition-transform duration-300 group-hover:scale-110">
                    <Play className="ml-1 h-6 w-6 fill-navy-900" strokeWidth={0} />
                  </span>
                  <span className="relative font-mono text-[10px] uppercase tracking-[0.24em] text-white/90 [text-shadow:0_2px_8px_rgba(0,21,43,0.9)]">
                    Com áudio
                  </span>
                </button>
              )}
            </MediaFrame>
          </motion.div>
        </div>

        {/* RIGHT — conteúdo complementar */}
        <div className="text-center lg:col-span-7 lg:text-left">
          <Reveal direction="right" delay={0.25}>
            <p className="eyebrow justify-center lg:justify-start">Vídeo</p>
          </Reveal>
          <Reveal direction="right" delay={0.35}>
            <h2 className="mt-5 font-display text-3xl font-bold leading-[1.1] tracking-tight text-navy-700 sm:text-4xl lg:text-[2.9rem]">
              Conheça a RedeAr
            </h2>
          </Reveal>
          <Reveal direction="right" delay={0.45}>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-steel-500 lg:mx-0">
              Veja de perto nossas soluções em sistemas de ar comprimido, materiais e aplicações.
            </p>
          </Reveal>

          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: reduce ? 0.1 : 0.14, delayChildren: reduce ? 0.1 : 0.6 } } }}
            className="mx-auto mt-9 max-w-md space-y-3 lg:mx-0"
          >
            {HIGHLIGHTS.map((h) => {
              const Icon = h.icon
              return (
                <motion.li
                  key={h.label}
                  variants={{
                    hidden: { opacity: 0, x: 44 },
                    show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
                  }}
                  className="flex items-center justify-center gap-4 border border-steel-200 bg-white px-5 py-4 lg:justify-start"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-steel-200 text-brand">
                    <Icon className="h-5 w-5" strokeWidth={1.7} />
                  </span>
                  <span className="font-display text-sm font-semibold text-navy-700">{h.label}</span>
                </motion.li>
              )
            })}
          </motion.ul>
        </div>
      </div>
    </section>
  )
}
