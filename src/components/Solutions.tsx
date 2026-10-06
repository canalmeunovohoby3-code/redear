import { ArrowUpRight, Hexagon, Layers, Waves, Wrench } from 'lucide-react'
import { SOLUTIONS } from '../data/site'
import { whatsappLink } from '../lib/whatsapp'
import { Reveal, Stagger, StaggerItem } from './ui/Reveal'
import { SectionHeading } from './ui/SectionHeading'

const ICONS = [Layers, Waves, Hexagon, Wrench]

const PATHS = [
  'M0 30 H64 L80 12 H148 L164 30 H220',
  'M0 16 H58 L74 32 H142 L158 16 H220',
  'M0 30 H72 L88 12 H150 L166 30 H220',
  'M0 16 H66 L82 32 H146 L162 16 H220',
]
const NODES: Array<[number, number]> = [
  [64, 30],
  [58, 16],
  [72, 30],
  [66, 16],
]

function PipeGlyph({ variant }: { variant: number }) {
  const path = PATHS[variant % PATHS.length]
  const [nx, ny] = NODES[variant % NODES.length]
  return (
    <svg viewBox="0 0 220 44" className="h-11 w-full" fill="none" aria-hidden="true">
      <path
        d={path}
        stroke="#DDE4EB"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d={path}
        stroke="#05B0FA"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
      <circle cx={nx} cy={ny} r="3.5" fill="#05B0FA" />
    </svg>
  )
}

export function Solutions() {
  return (
    <section id="solucoes" className="relative scroll-mt-24 overflow-hidden bg-white py-20 sm:py-28">
      <div className="pointer-events-none absolute right-0 top-0 h-[360px] w-[360px] bg-grid-tech bg-grid-64 opacity-40" />
      <div className="shell relative">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            index="02"
            eyebrow="Soluções"
            title="Soluções para sua rede de ar comprimido"
            description="Da escolha dos materiais à montagem da tubulação, a RedeAr oferece soluções para diferentes necessidades de sistemas de ar comprimido."
          />
          <Reveal direction="left" delay={0.2} className="shrink-0">
            <a
              href={whatsappLink('Olá, RedeAr! Gostaria de entender qual solução é mais adequada para a minha rede de ar comprimido.')}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 font-display text-sm font-semibold text-navy-700"
            >
              <span className="border-b border-navy-200 pb-1 transition-colors group-hover:border-brand">
                Falar com um especialista
              </span>
              <span className="flex h-9 w-9 items-center justify-center border border-navy-200 text-brand transition-all duration-300 group-hover:border-brand group-hover:bg-brand group-hover:text-navy-900">
                <ArrowUpRight className="h-4 w-4" strokeWidth={2.2} />
              </span>
            </a>
          </Reveal>
        </div>

        <Stagger
          className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
          stagger={0.18}
          amount={0.1}
        >
          {SOLUTIONS.map((sol, i) => {
            const Icon = ICONS[i % ICONS.length]
            return (
              <StaggerItem key={sol.key} direction="scale" className="h-full">
                <article className="group relative flex h-full flex-col overflow-hidden border border-steel-200 bg-white p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-card">
                  <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-brand transition-transform duration-500 group-hover:scale-x-100" />
                  <span className="pointer-events-none absolute -right-1 -top-4 select-none font-display text-6xl font-bold leading-none text-steel-100 transition-colors duration-500 group-hover:text-brand/15">
                    {sol.index}
                  </span>

                  <span className="relative flex h-14 w-14 items-center justify-center border border-steel-200 text-navy-600 transition-all duration-500 group-hover:border-brand group-hover:bg-brand group-hover:text-navy-900">
                    <Icon className="h-6 w-6" strokeWidth={1.6} />
                  </span>

                  <p className="relative mt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-brand">
                    Solução {sol.index}
                  </p>
                  <h3 className="relative mt-2 font-display text-2xl font-bold tracking-tight text-navy-700">
                    {sol.name}
                  </h3>
                  <p className="relative mt-3 text-sm leading-relaxed text-steel-500">
                    {sol.description}
                  </p>

                  <div className="relative mt-auto pt-7">
                    <PipeGlyph variant={i} />
                    <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-steel-400">
                      {sol.tag}
                    </p>
                  </div>
                </article>
              </StaggerItem>
            )
          })}
        </Stagger>
      </div>
    </section>
  )
}
