import { motion, useReducedMotion } from 'framer-motion'
import { ENGINEERING_CARDS } from '../data/media'
import { entrance } from '../lib/motion'
import { MediaFrame } from './ui/MediaFrame'
import { MediaPlaceholder } from './ui/MediaPlaceholder'
import { SectionHeading } from './ui/SectionHeading'

export function Engineering() {
  const reduce = useReducedMotion()

  return (
    <section id="engenharia" className="relative scroll-mt-24 overflow-hidden bg-white py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid-tech bg-grid-64 opacity-60" />
      <div className="shell relative">
        <SectionHeading
          eyebrow="Engenharia"
          title="Serviços de Engenharia"
          description="Alguns exemplos das soluções e trabalhos de engenharia que desenvolvemos."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-4">
          {ENGINEERING_CARDS.map((item, i) => (
            <motion.figure
              key={i}
              {...entrance(reduce, { y: 60, scale: 0.95, delay: i * 0.14, duration: 0.85, amount: 0.15 })}
              className="group flex flex-col"
            >
              <MediaFrame variant={i}>
                <MediaPlaceholder
                  src={item.src || undefined}
                  alt={item.alt}
                  ratio="aspect-[4/3]"
                  showTag={false}
                  showLabel={false}
                  className="transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
                />
              </MediaFrame>
              <figcaption className="mt-4 font-display text-base font-semibold leading-snug text-navy-700 transition-colors duration-300 group-hover:text-brand">
                {item.title}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
