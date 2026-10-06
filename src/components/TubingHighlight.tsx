import { motion, useReducedMotion } from 'framer-motion'
import { Check } from 'lucide-react'
import { MEDIA } from '../data/media'
import { entrance } from '../lib/motion'
import { PipeLines } from './ui/Decor'
import { MediaFrame } from './ui/MediaFrame'
import { MediaPlaceholder } from './ui/MediaPlaceholder'
import { Reveal } from './ui/Reveal'

const ATUACAO = [
  'Fornecimento de materiais',
  'Montagem de tubulações',
  'Organização da rede',
  'Soluções para sistemas de ar comprimido',
]

export function TubingHighlight() {
  const reduce = useReducedMotion()

  return (
    <section
      id="tubulacoes"
      className="relative scroll-mt-24 overflow-hidden bg-navy-700 py-20 text-white sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid-tech-light bg-grid-64 opacity-60" />
      <PipeLines className="absolute inset-0 h-full w-full" tone="dark" />
      <div className="pointer-events-none absolute -left-24 top-1/3 h-[420px] w-[420px] rounded-full bg-brand/10 blur-[120px]" />

      <div className="shell relative grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
        <Reveal direction="left" className="lg:col-span-5">
          <p className="eyebrow eyebrow-light">Tubulações</p>
          <h2 className="mt-5 font-display text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-[2.9rem]">
            Infraestrutura que faz o ar circular com eficiência
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-white/70">
            A RedeAr atua no fornecimento de materiais e na montagem de tubulações, estruturando
            redes de ar comprimido com organização e soluções adequadas a cada sistema.
          </p>

          <ul className="mt-9 space-y-3.5">
            {ATUACAO.map((item, i) => (
              <motion.li
                key={item}
                {...entrance(reduce, { x: -44, delay: 0.2 + i * 0.14, duration: 0.7, amount: 0.5 })}
                className="flex items-center gap-4 border-b border-white/10 pb-3.5"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center border border-brand/50 text-brand">
                  <Check className="h-3.5 w-3.5" strokeWidth={2.4} />
                </span>
                <span className="text-[15px] text-white/85">{item}</span>
              </motion.li>
            ))}
          </ul>
        </Reveal>

        <div className="relative lg:col-span-7">
          <div className="relative">
            <motion.div
              {...entrance(reduce, { x: 120, scale: 0.97, delay: 0.1, duration: 1, amount: 0.25 })}
            >
              <MediaFrame tone="dark">
                <MediaPlaceholder
                  src={MEDIA.tubing}
                  alt="Cabeçote de tubulação de ar comprimido em inox"
                  ratio="aspect-[4/3]"
                />
              </MediaFrame>
            </motion.div>
          </div>

          <motion.div
            {...entrance(reduce, { y: 24, delay: 0.5, duration: 0.7, amount: 0.4 })}
            className="mt-6 hidden max-w-[280px] border-l-2 border-brand/50 pl-4 sm:block"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand">Rede de ar</p>
            <p className="mt-1.5 text-sm leading-snug text-white/80">
              Tubulação organizada para o sistema de ar comprimido.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
