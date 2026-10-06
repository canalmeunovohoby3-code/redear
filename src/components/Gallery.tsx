import { motion, useReducedMotion } from 'framer-motion'
import { GALLERY_PHOTOS } from '../data/media'
import { entrance } from '../lib/motion'
import { MediaFrame } from './ui/MediaFrame'
import { MediaPlaceholder } from './ui/MediaPlaceholder'
import { SectionHeading } from './ui/SectionHeading'

export function Gallery() {
  const reduce = useReducedMotion()

  return (
    <section id="projetos" className="relative scroll-mt-24 overflow-hidden bg-steel-50 py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid-tech bg-grid-64 opacity-50" />
      <div className="shell relative">
        <SectionHeading
          index="06"
          eyebrow="Projetos"
          title="Projetos e aplicações"
          description="Confira alguns registros de trabalhos e soluções da RedeAr."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7">
          {GALLERY_PHOTOS.map((item, i) => (
            <motion.figure
              key={item.src}
              {...entrance(reduce, { y: 68, scale: 0.95, delay: i * 0.16, duration: 0.85, amount: 0.15 })}
              className="group relative"
            >
              <MediaFrame variant={i}>
                <MediaPlaceholder
                  src={item.src}
                  alt={item.alt}
                  ratio="aspect-[4/3]"
                  showTag={false}
                  className="transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
                />
              </MediaFrame>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
