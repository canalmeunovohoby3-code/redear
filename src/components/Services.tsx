import { ClipboardPen, DraftingCompass, Droplet, Lightbulb } from 'lucide-react'
import type { ComponentType } from 'react'
import { PipeLines } from './ui/Decor'
import { Reveal } from './ui/Reveal'
import { SectionHeading } from './ui/SectionHeading'

type IconProps = { className?: string; strokeWidth?: number | string }

/** Ferramentas cruzadas: chave inglesa + chave de fenda (estilo traço Lucide). */
function ToolsCrossed({ className, strokeWidth = 1.6 }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      <g transform="rotate(45 12 12)">
        <rect x="2.4" y="8.9" width="6.6" height="6.2" rx="1.7" />
        <line x1="9" y1="12" x2="18.6" y2="12" />
        <path d="M18.6 10.7h2.2v2.6h-2.2" />
      </g>
    </svg>
  )
}

type ServiceItem = {
  title: string
  description: string
  Icon: ComponentType<IconProps>
}

const SERVICES: ServiceItem[] = [
  {
    title: 'Equipe de Engenharia',
    description:
      'Realizamos levantamento técnica para entender a demanda do cliente e realização assim um projeto de trabalho',
    Icon: ClipboardPen,
  },
  {
    title: 'Equipe de Montagem',
    description: 'Temos equipe especializada em realizar montagem de seu sistema de ar comprimido',
    Icon: ToolsCrossed,
  },
  {
    title: 'Eficiência Energética',
    description:
      'Aparelho de ultima geração para realização de Caça Vazamentos e Analise de Demanda de Ar',
    Icon: Lightbulb,
  },
  {
    title: 'Projetos',
    description:
      'Elaboramos projetos de redes de ar comprimido sob medida, do dimensionamento à especificação dos materiais.',
    Icon: DraftingCompass,
  },
  {
    title: 'Caça Vazamentos em Tubulações',
    description:
      'Identificamos vazamentos nas tubulações e avaliamos as perdas para aumentar a eficiência e reduzir custos da sua rede.',
    Icon: Droplet,
  },
]

export function Services() {
  return (
    <section id="servicos" className="relative scroll-mt-24 overflow-hidden bg-navy-700 py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid-tech-light bg-grid-64 opacity-60" />
      <PipeLines className="pointer-events-none absolute inset-0 h-full w-full" tone="dark" />
      <div className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full bg-brand/15 blur-[130px]" />
      <div className="pointer-events-none absolute -bottom-32 left-1/4 h-[320px] w-[320px] rounded-full bg-brand/10 blur-[120px]" />

      <div className="shell relative">
        <SectionHeading tone="light" eyebrow="Nossos Serviços" title="Veja como trabalhamos!" />

        <div className="mt-14 grid auto-rows-fr gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => {
            const Icon = service.Icon
            return (
              <Reveal key={service.title} direction="up" delay={i * 0.12} className="h-full">
                <article className="group relative flex h-full flex-col border border-white/10 bg-white/[0.04] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#F97316]/45 hover:bg-white/[0.06]">
                  <span
                    className="absolute left-0 top-0 h-px w-0 bg-[#F97316] transition-all duration-500 group-hover:w-full"
                    aria-hidden="true"
                  />
                  <span className="flex h-14 w-14 items-center justify-center rounded-full border border-[#F97316]/30 bg-[#F97316]/10 text-[#F97316] shadow-[0_0_34px_-10px_rgba(249,115,22,0.85)] transition-transform duration-300 group-hover:scale-105">
                    <Icon className="h-7 w-7" strokeWidth={1.6} />
                  </span>
                  <h3 className="mt-6 font-display text-xl font-semibold text-white">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">{service.description}</p>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
