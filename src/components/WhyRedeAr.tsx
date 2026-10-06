import { Boxes, Globe2, Layers, Ruler, Wrench } from 'lucide-react'
import { MEDIA } from '../data/media'
import { ClipReveal } from './ui/ClipReveal'
import { MediaFrame } from './ui/MediaFrame'
import { MediaPlaceholder } from './ui/MediaPlaceholder'
import { Reveal, Stagger, StaggerItem } from './ui/Reveal'
import { SectionHeading } from './ui/SectionHeading'

const REASONS = [
  {
    icon: Layers,
    title: 'Soluções em diferentes materiais',
    text: 'Alumínio, PPR, inox e galvanizado para diferentes necessidades de rede.',
  },
  {
    icon: Boxes,
    title: 'Fornecimento de materiais',
    text: 'Materiais e acessórios para a execução da sua rede de ar comprimido.',
  },
  {
    icon: Wrench,
    title: 'Montagem de tubulações',
    text: 'Execução e organização da tubulação do sistema.',
  },
  {
    icon: Globe2,
    title: 'Atendimento em todo o Brasil',
    text: 'Atendimento a clientes em todo o território nacional.',
  },
  {
    icon: Ruler,
    title: 'Atendimento direcionado à necessidade',
    text: 'Soluções pensadas conforme a necessidade de cada cliente.',
  },
]

export function WhyRedeAr() {
  return (
    <section id="sobre" className="relative scroll-mt-24 overflow-hidden bg-white py-20 sm:py-28">
      <div className="shell relative grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
        {/* imagem institucional (mídia limpa + moldura externa) */}
        <div className="relative lg:col-span-5">
          <MediaFrame>
            <ClipReveal direction="down" duration={1.15} scaleFrom={1.06}>
              <MediaPlaceholder
                src={MEDIA.institutional}
                alt="Rede de tubulação de ar comprimido instalada em altura"
                ratio="aspect-[3/4]"
                showTag={false}
              />
            </ClipReveal>
          </MediaFrame>

          <Reveal direction="up" delay={0.2}>
            <div className="mt-6 flex flex-wrap gap-2">
              {['Materiais', 'Montagem', 'Tubulações'].map((tag) => (
                <span
                  key={tag}
                  className="border border-steel-200 px-3.5 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-navy-500"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        {/* conteúdo */}
        <div className="lg:col-span-7">
          <SectionHeading
            index="07"
            eyebrow="Institucional"
            title="Por que escolher a RedeAr?"
            description="Atuamos em sistemas de ar comprimido com foco em tubulações e acessórios, do fornecimento dos materiais à montagem da rede."
            delay={0.3}
          />

          <Stagger className="mt-10 space-y-1" stagger={0.14} delay={0.55} amount={0.1}>
            {REASONS.map((reason) => {
              const Icon = reason.icon
              return (
                <StaggerItem key={reason.title} direction="right">
                  <div className="group flex items-start gap-5 border-b border-steel-200 py-5 transition-colors duration-300 hover:border-brand">
                    <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center border border-steel-200 text-navy-500 transition-colors duration-300 group-hover:border-brand group-hover:bg-brand/10 group-hover:text-brand">
                      <Icon className="h-5 w-5" strokeWidth={1.7} />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-semibold leading-snug text-navy-700">
                        {reason.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-steel-500">{reason.text}</p>
                    </div>
                  </div>
                </StaggerItem>
              )
            })}
          </Stagger>
        </div>
      </div>
    </section>
  )
}
